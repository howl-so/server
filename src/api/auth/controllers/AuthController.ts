import { PopulatedUser } from "src/api/users/models/PopulatedUser";
import { Body, Controller, Get, Path, Post, Route, Tags } from "tsoa";
import { ContinueWithGoogleInput, LoginInput } from "../entities/LoginInput";
import { LoginFailure, LoginResponse, LoginSuccess } from "../entities/LoginResult";
import { ContinueWithGoogleSuccess } from "../entities/responses";
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

  /** Log in */
  @Post("login")
  async login(@Body() input: LoginInput): Promise<LoginResponse> {
    const authService = new RealAuthService();

    const user = await authService.logIn(input.username, input.password);
    if (user != null) {
      const populatedUser = await user.populate();
      const token = await authService.getToken(populatedUser._id);
      return new LoginSuccess(populatedUser, token);
    } else {
      return new LoginFailure();
    }
  }

  /** Continue with Google */
  @Post("google")
  async google(@Body() input: ContinueWithGoogleInput): Promise<ContinueWithGoogleSuccess> {
    const authService = new RealAuthService();
    return await authService.continueWithGoogle(input);
  }
}
