import { DocumentType, prop } from "@typegoose/typegoose";
import User from "../../users/models/User";
import { PopulatedHowler, RealPopulatedHowler } from "./PopulatedHowler";

export default class Howler {
  @prop({ ref: () => Howler })
  _id!: string;

  @prop()
  name!: string;

  @prop({ unique: true })
  username!: string;

  @prop()
  avatarUrl?: string;

  @prop({ ref: () => User })
  ownerIds!: string[];

  public async populate(this: DocumentType<Howler>): Promise<PopulatedHowler> {
    const user = new RealPopulatedHowler(this._id, this.name, this.username, this.avatarUrl);
    await user.populate();
    return user;
  }
}
