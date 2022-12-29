import { Controller, Get, Path, Route, Tags } from "tsoa";
import Howler from "../models/Howler";
import { PopulatedHowler } from "../models/PopulatedHowler";
import { PopulatedHowlersResponse } from "../models/PopulatedHowlersResponse";
import RealHowlerServices from "../services/RealHowlerServices";

@Route("howlers")
@Tags("Howler")
export class HowlerController extends Controller {
  /** Get howler by ID */
  @Get("{howlerId}")
  async getHowler(@Path() howlerId: string): Promise<Howler | null> {
    if (!howlerId) throw new Error();
    const howler = await new RealHowlerServices().getHowler(howlerId);
    if (!howler) throw new Error();
    return howler;
  }

  /** Get and populate howler by ID */
  @Get("{howlerId}/populated")
  async getPopulatedHowler(@Path() howlerId: string): Promise<PopulatedHowler | null> {
    if (!howlerId) throw new Error();
    const howler = await new RealHowlerServices().getHowler(howlerId);
    if (!howler) throw new Error();
    return await howler.populate();
  }

  /** Get and populate all howlers */
  @Get()
  async getPopulatedHowlers(): Promise<PopulatedHowlersResponse | null> {
    const howlers = await new RealHowlerServices().getHowlers();
    const populatedHowlers: PopulatedHowler[] = [];

    for (const howler of howlers) {
      populatedHowlers.push(await howler.populate());
    }

    return {
      value: populatedHowlers
    };
  }
}
