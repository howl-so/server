import jwt from "jsonwebtoken";
import RealHowlerServices from "../../../api/howlers/services/RealHowlerServices";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import RealUserServices from "../../users/services/RealUserServices";
import { ContinueWithGoogleInput } from "../entities/LoginInput";
import { AuthenticatedHowlUser, AuthenticatedHowlUserHowler, ContinueWithGoogleSuccess } from "../entities/responses";

export default async function continueWithGoogle(input: ContinueWithGoogleInput): Promise<ContinueWithGoogleSuccess> {
  const { email, username, name, googleId, avatarUrl } = input;

  const userService = new RealUserServices();
  const howlerServices = new RealHowlerServices();

  let user = await UserModel.findOne({ username });

  if (!user) {
    user = await userService.createUser(name, username, email, googleId, avatarUrl);
  }

  user.set("isLoggedIn", true);
  await user.save();

  const token = jwt.sign({ userId: user._id }, KEYS!);

  const howlers: AuthenticatedHowlUserHowler[] = [];

  const howlerIds = user.howlerIds ?? [];

  for (const howlerId of howlerIds) {
    const howler = await howlerServices.getHowler(howlerId);

    if (howler) {
      const authenticatedHowlUserHowler = new AuthenticatedHowlUserHowler(howler._id, howler.name, howler.ownerIds, howler.avatarUrl);
      howlers.push(authenticatedHowlUserHowler);
    }
  }

  const authenticatedHowlUser = new AuthenticatedHowlUser(user._id, user.name, user.email, user.username, howlers, user.avatarUrl);

  return new ContinueWithGoogleSuccess(authenticatedHowlUser, token);
}
