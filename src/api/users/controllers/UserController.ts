import { Controller, Get, Path, Route, Tags } from "tsoa";
import { PopulatedHowler } from "../../howlers/models/PopulatedHowler";
import RealHowlerServices from "../../howlers/services/RealHowlerServices";
import { PopulatedUser } from "../models/PopulatedUser";
import User from "../models/User";
import RealUserServices from "../services/RealUserServices";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  /** Get user by ID */
  @Get("{userId}")
  async getUser(@Path() userId: string): Promise<User | null> {
    if (!userId) throw new Error();
    const user = await new RealUserServices().getUser(userId);
    if (!user) throw new Error();
    return user;
  }

  /** Get populated user by ID */
  @Get("{userId}/populated")
  async getPopulatedUser(@Path() userId: string): Promise<PopulatedUser | null> {
    if (!userId) throw new Error();
    const user = await new RealUserServices().getUser(userId);
    if (!user) throw new Error();
    return await user.populate();
  }

  /** Get populated howlers by owner ID */
  @Get("{userId}/howlers")
  async getHowlersByOwnerId(@Path() userId: string): Promise<PopulatedHowler[] | null> {
    if (!userId) throw new Error();
    const howlers = await new RealHowlerServices().getHowlersByOwnerId(userId);
    if (!howlers) throw new Error();
    const populatedHowlers = [];
    for (const howler of howlers) {
      populatedHowlers.push(await howler.populate());
    }
    return populatedHowlers;
  }
}
