import { DocumentType } from "@typegoose/typegoose";
import { HowlerModel } from "../../../models";
import Howler from "../models/Howler";

export default async function getHowlers(): Promise<DocumentType<Howler>[]> {
  try {
    return await HowlerModel.find({});
  } catch (error) {
    throw error;
  }
}
