import { NotFound } from "../../../errors";
import User from "../../users/models/User";
import { HowlerModel } from "../../../models";
import { DocumentType } from "@typegoose/typegoose";

export interface PopulatedHowler {
  _id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  owners?: User[];
}

export class RealPopulatedHowler implements PopulatedHowler {
  readonly _id: string;
  readonly name: string;
  readonly username: string;
  readonly avatarUrl?: string;
  owners?: User[];

  constructor(id: string, name: string, username: string, avatarUrl?: string) {
    this._id = id;
    this.name = name;
    this.username = username;
    this.avatarUrl = avatarUrl;
  }

  public async populate(): Promise<PopulatedHowler> {
    const howler = await HowlerModel.findById(this._id).populate("ownerIds").exec();
    if (!howler) throw new NotFound("Howler");

    this.owners = howler.ownerIds as unknown as DocumentType<User>[];

    return howler;
  }
}
