import { DocumentType } from "@typegoose/typegoose";
import Howler from "../../howlers/models/Howler";

export default interface BatchServices {
  getBatch(howlerId: string, limit?: number, afterId?: string): Promise<DocumentType<Howler>[] | null>;
}
