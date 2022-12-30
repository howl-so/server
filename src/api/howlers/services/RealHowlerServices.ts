import { DocumentType } from "@typegoose/typegoose";
import Howler from "../models/Howler";
import createHowler from "./createHowler";
import getHowler from "./getHowler";
import getHowlers from "./getHowlers";
import getHowlersByOwnerId from "./getHowlersByOwnerId";
import HowlerServices from "./HowlerServices";

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
  public async getHowlersByOwnerId(ownerId: string): Promise<DocumentType<Howler>[] | null> {
    return await getHowlersByOwnerId(ownerId);
  }
}
