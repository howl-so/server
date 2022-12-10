import { connect } from "mongoose";
import "reflect-metadata";
import app from "./app";
import { MONGODB_URI, SEED } from "./util/secrets";
import seed from "./seed/seed";

const main = async () => {
  const port = process.env.PORT || 5000;

  await connect(MONGODB_URI!);

  if (SEED) {
    await seed();
  }

  app.listen({ port }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:${port}`));
};

main().catch((error) => console.log("🛑 Error:", error));
