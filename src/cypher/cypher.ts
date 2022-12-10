import fs from "fs";

const cypher = (dir: string, file: string): string => {
  const buffer = fs.readFileSync(`${__dirname}/${dir}/${file}.cypher`);
  return buffer.toString();
};

export const USERS = "users";

export const CREATE_USER = "createUser";
export const GET_USER_BY_ID = "getUserById";

export default cypher;
