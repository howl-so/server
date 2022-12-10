import dotenv from "dotenv";
import fs from "fs";
import logger from "./logger";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables.");
  dotenv.config({ path: ".env" });
}

export const MONGODB_URI = process.env.MONGODB_URI;
export const KEYS = process.env.SECRET_OR_KEY;
