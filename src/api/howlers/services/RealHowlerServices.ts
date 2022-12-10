import { DocumentType } from "@typegoose/typegoose";
import getHowler from "./getHowler";
import createHowler from "./createHowler";
import HowlerServices from "./HowlerServices";
import Howler from "../models/Howler";
import getHowlers from "./getHowlers";

export default class RealHowlerServices implements HowlerServices {
  public async getHowler(howlerId: string): Promise<DocumentType<Howler> | null> {
    return await getHowler(howlerId);
  }

  public async createHowler(name: string, username: string, ownerIds: string[], avatarUrl?: string): Promise<DocumentType<Howler>> {
    return await createHowler(name, username, ownerIds, avatarUrl);
  }
  public async getHowlers(): Promise<DocumentType<Howler>[]> {
    return await getHowlers();
  }
}
