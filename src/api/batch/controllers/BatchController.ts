import { Controller, Get, Path, Query, Route, Tags } from "tsoa";
import { PopulatedHowler } from "../../howlers/models/PopulatedHowler";

@Route("batch")
@Tags("Howler")
export class BatchController extends Controller {
  /** Get batch */
  @Get("{howlerId}")
  async getBatch(@Path() howlerId: string, @Query() limit?: number, @Query() afterId?: string): Promise<PopulatedHowler[]> {
    console.log(howlerId);
    console.log(limit);
    console.log(afterId);
    return [];
  }
}
