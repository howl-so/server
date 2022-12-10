import { DocumentType } from "@typegoose/typegoose";
import User from "../models/User";

export default interface UserServices {
  getUser(userId: string): Promise<DocumentType<User> | null>;

  createUser(firstName: string, lastName: string, username: string, email: string, googleId?: string, picture?: string): Promise<DocumentType<User>>;
}
