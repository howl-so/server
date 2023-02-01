import { Body, Controller, Post, Route, Tags } from "tsoa";
import RealHowlerServices from "../../../api/howlers/services/RealHowlerServices";
import { ContinueWithGoogleInput, LoginInput, ValidateTokenInput } from "../entities/LoginInput";
import { LoginFailure, LoginResponse, LoginSuccess } from "../entities/LoginResult";
import { AuthenticatedHowlUser, AuthenticatedHowlUserHowler, ContinueWithGoogleSuccess } from "../entities/responses";
import RealAuthService from "../services/AuthService";

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {
  /** Validate token */
  @Post("tokens")
  async validateToken(@Body() input: ValidateTokenInput): Promise<AuthenticatedHowlUser | null> {
    if (!input.token) throw new Error();

    const authService = new RealAuthService();
    const howlerServices = new RealHowlerServices();

    const user = await authService.validateTokenAndReturnUser(input.token);
    if (!user) return null;

    const howlers: AuthenticatedHowlUserHowler[] = [];

    const howlerIds = user.howlerIds ?? [];

    for (const howlerId of howlerIds) {
      const howler = await howlerServices.getHowler(howlerId);

      if (howler) {
        const authenticatedHowlUserHowler = new AuthenticatedHowlUserHowler(howler._id, howler.name, howler.ownerIds, howler.avatarUrl);
        howlers.push(authenticatedHowlUserHowler);
      }
    }

    return new AuthenticatedHowlUser(user._id, user.name, user.email, user.username, howlers, user.avatarUrl);
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
