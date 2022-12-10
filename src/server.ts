import { connect } from "mongoose";
import "reflect-metadata";
import app from "./app";
import { DEV, MONGODB_URI, NODE_ENV, PORT, SEED } from "./util/secrets";
import seed from "./seed/seed";
import graph from "./graph";

const main = async () => {
  await connect(MONGODB_URI!);

  if (SEED) {
    await seed();
  }

  const graphServerInfo = await graph.getServerInfo();
  const apiServerAddress = NODE_ENV == DEV ? `http://localhost:${PORT}` : "https://api.howl.so/v1";

  app.listen({ port: PORT }, () => {
    console.log(`🚀 Graph running at => ${graphServerInfo.address} `);
    console.log(`🚀 Server running at => ${apiServerAddress}`);
  });
};

main()
  .catch((error) => console.log(`💥 Error: ${error}`))
  .finally(() => graph.close());
