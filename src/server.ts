import { connect } from "mongoose";
import "reflect-metadata";
import app from "./app";
import { MONGODB_URI } from "./util/secrets";

const main = async () => {
  const port = process.env.PORT || 5000;

  await connect(MONGODB_URI!);

  app.listen({ port }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:${port}`));
};

main().catch((error) => console.log("🛑 Error:", error));
