import { DocumentType } from "@typegoose/typegoose";
import { HowlerModel } from "../../../models";
import Howler from "../models/Howler";

export default async function paginate(howlerId: string, start: number, size: number): Promise<DocumentType<Howler>[]> {
  try {
    const howlers = await HowlerModel.find({});
    const otherHowlers = howlers.filter((howler) => howler.id != howlerId);
    const end = Math.min(otherHowlers.length, start + size);
    return otherHowlers.slice(start, end);
  } catch (error) {
    throw error;
  }
}
