import { DocumentType } from "@typegoose/typegoose";
import User from "../models/User";
import createUser from "./createUser";
import getUser from "./getUser";
import UserServices from "./UserServices";

export default class RealUserServices implements UserServices {
  public async getUser(userId: string): Promise<DocumentType<User> | null> {
    return await getUser(userId);
  }

  public async createUser(name: string, username: string, email: string, googleId: string | null, picture: string | null): Promise<DocumentType<User>> {
    return await createUser(name, username, email, googleId, picture);
  }
}
