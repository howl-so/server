import BatchServices from "./BatchServices";
import { HowlerModel } from "../../../models";
import { DocumentType } from "@typegoose/typegoose";
import Howler from "src/api/howlers/models/Howler";

export default class RealBatchServices implements BatchServices {
  async getBatch(_: string, limit?: number, afterId?: string): Promise<DocumentType<Howler>[] | null> {
    const howlers = await HowlerModel.find();

    if (limit && afterId) {
      const afterIndex = howlers.map((howler) => howler._id).indexOf(afterId);
      const howlersAfterId = howlers.splice(afterIndex);
      return howlersAfterId.slice(0, limit);
    } else if (afterId) {
      const afterIndex = howlers.map((howler) => howler._id).indexOf(afterId);
      return howlers.splice(afterIndex);
    } else if (limit) {
      return howlers.slice(0, limit);
    } else {
      return howlers;
    }
  }
}
