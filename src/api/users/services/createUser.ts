import { DocumentType } from "@typegoose/typegoose";
import { v4 as uuid } from "uuid";
import { UserModel } from "../../../models";
import User from "../models/User";

export default async function createUser(
  name: string,
  username: string,
  email: string,
  googleId: string | null,
  avatarUrl: string | null
): Promise<DocumentType<User>> {
  try {
    return await UserModel.create({ _id: uuid(), email, username, name, googleId, avatarUrl });
  } catch (error) {
    throw error;
  }
}
