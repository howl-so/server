import { PopulatedUser } from "src/api/users/models/PopulatedUser";
import { Controller, Get, Path, Route, Tags } from "tsoa";
import RealAuthService from "../services/AuthService";

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {
  /** Validate token */
  @Get("{token}")
  async validateToken(@Path() token: string): Promise<PopulatedUser | null> {
    if (!token) throw new Error();
    const user = await new RealAuthService().validateTokenAndReturnUser(token);
    return (await user?.populate()) ?? null;
  }
}
