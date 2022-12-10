import { DocumentType } from "@typegoose/typegoose";
import { HowlerModel } from "../../../models";
import Howler from "../models/Howler";

export default async function getHowler(howlerId: string): Promise<DocumentType<Howler> | null> {
  try {
    return await HowlerModel.findById(howlerId);
  } catch (error) {
    throw error;
  }
}
