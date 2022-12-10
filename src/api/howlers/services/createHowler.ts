import { DocumentType } from "@typegoose/typegoose";
import { v4 as uuid } from "uuid";
import { HowlerModel } from "../../../models";
import Howler from "../models/Howler";

export default async function createHowler(name: string, username: string, ownerIds: string[], avatarUrl?: string): Promise<DocumentType<Howler>> {
  try {
    return await HowlerModel.create({ _id: uuid(), name, username, ownerIds, avatarUrl });
  } catch (error) {
    throw error;
  }
}
