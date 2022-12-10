import { DocumentType } from "@typegoose/typegoose";
import User from "../models/User";
import UserService from "./UserService";
import getUser from "./getUser";
import createUser from "./createUser";

export default class RealUserService implements UserService {
  public async getUser(userId: string): Promise<DocumentType<User> | null> {
    return await getUser(userId);
  }

  public async createUser(name: string, username: string, email: string, googleId?: string, picture?: string): Promise<DocumentType<User>> {
    return await createUser(name, username, email, googleId, picture);
  }
}
