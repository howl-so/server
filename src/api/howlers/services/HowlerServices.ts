import { DocumentType } from "@typegoose/typegoose";
import Howler from "../models/Howler";

export default interface HowlerServices {
  getHowler(howlerId: string): Promise<DocumentType<Howler> | null>;
  getHowlersByOwnerId(ownerId: string): Promise<DocumentType<Howler>[] | null>;
  createHowler(name: string, username: string, ownerIds: string[], avatarUrl?: string): Promise<DocumentType<Howler>>;
  paginate(howlerId: string, start: number, size: number): Promise<DocumentType<Howler>[]>;
}
