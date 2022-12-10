import { DocumentType, prop } from "@typegoose/typegoose";
import { PopulatedUser, RealPopulatedUser } from "./PopulatedUser";

export default class User {
  @prop({ ref: () => User })
  _id!: string;

  @prop()
  name!: string;

  @prop({ unique: true })
  email!: string;

  @prop({ unique: true })
  username!: string;

  @prop()
  googleId!: string;

  @prop()
  avatarUrl?: string;

  @prop()
  isLoggedIn?: boolean;

  public async populate(this: DocumentType<User>): Promise<PopulatedUser> {
    const user = new RealPopulatedUser(this._id, this.name, this.email, this.username, this.googleId, this.avatarUrl);
    await user.populate();
    return user;
  }
}
