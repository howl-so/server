import { UserNotFound } from "../../../errors";
import { UserModel } from "../../../models";

export interface PopulatedUser {
  id: string;
  name: string;
  email: string;
  username: string;
  googleId: string;
  avatarUrl?: string;
}

export class RealPopulatedUser implements PopulatedUser {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly avatarUrl?: string;
  readonly googleId: string;

  constructor(id: string, name: string, email: string, username: string, googleId: string, avatarUrl?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.googleId = googleId;
  }

  public async populate() {
    const user = await UserModel.findById(this.id).exec();
    if (!user) throw UserNotFound;
  }
}
