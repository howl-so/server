import { connect } from "mongoose";
import "reflect-metadata";
import app from "./app";
import seed from "./seed/seed";
import { DEV, MONGODB_URI, NODE_ENV, PORT, SEED } from "./util/secrets";

const main = async () => {
  await connect(MONGODB_URI!);

  if (SEED) {
    await seed();
  }

  try {
  } catch (error) {}

  const apiServerAddress = NODE_ENV == DEV ? `http://localhost:${PORT}` : "https://api.howl.so/v1";

  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server running at => ${apiServerAddress}`);
  });
};

main().catch((error) => console.log(`💥 Error: ${error}`));
