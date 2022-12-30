import { DocumentType } from "@typegoose/typegoose";
import { HowlerModel } from "../../../models";
import Howler from "../models/Howler";

export default async function getHowlersByOwnerId(ownerId: string): Promise<DocumentType<Howler>[]> {
  try {
    return await HowlerModel.find({ ownerIds: ownerId });
  } catch (error) {
    throw error;
  }
}
