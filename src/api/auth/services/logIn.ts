import { DocumentType } from "@typegoose/typegoose";
import bcrypt from "bcrypt";
import { UserModel } from "../../../models";
import User from "../../users/models/User";

export async function logIn(username: string, password: string): Promise<DocumentType<User> | null> {
  const user = await UserModel.findOne({ username: username });

  if (!user || !user.password) throw Error();

  const correct = await bcrypt.compare(password, user.password);

  if (correct) return user;
  else return null;
}
