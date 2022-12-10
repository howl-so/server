import dotenv from "dotenv";
import fs from "fs";
import logger from "./logger";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables.");
  dotenv.config({ path: ".env" });
}

export const DEV = "development";
export const NODE_ENV = process.env.NODE_ENV ?? DEV;
export const PORT = Number.parseInt(process.env.PORT ?? "5000");
export const MONGODB_URI = process.env.MONGODB_URI;
export const KEYS = process.env.SECRET_OR_KEY;
export const NEO4J_URI = process.env.NEO4J_URI;
export const NEO4J_USERNAME = process.env.NEO4J_USERNAME;
export const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD;
export const SEED = Boolean(process.env.SEED);
export const GRAPH = process.env.GRAPH;
