import { NotFound } from "../../../errors";
import { UserModel } from "../../../models";

export interface PopulatedUser {
  _id: string;
  name: string;
  email: string;
  username: string;
  googleId: string;
  avatarUrl?: string;
}

export class RealPopulatedUser implements PopulatedUser {
  readonly _id: string;
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly avatarUrl?: string;
  readonly googleId: string;

  constructor(id: string, name: string, email: string, username: string, googleId: string, avatarUrl?: string) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.googleId = googleId;
  }

  public async populate(): Promise<PopulatedUser> {
    const user = await UserModel.findById(this._id).exec();
    if (!user) throw new NotFound("User");
    return user;
  }
}
