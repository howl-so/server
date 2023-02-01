import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import RealUserServices from "../../users/services/RealUserServices";
import { ContinueWithGoogleInput } from "../entities/LoginInput";
import { ContinueWithGoogleSuccess } from "../entities/responses";

export default async function continueWithGoogle(input: ContinueWithGoogleInput): Promise<ContinueWithGoogleSuccess> {
  const { email, username, name, googleId, avatarUrl } = input;

  const userService = new RealUserServices();

  let user = await UserModel.findOne({ username });

  if (!user) {
    user = await userService.createUser(name, username, email, googleId, avatarUrl);
  }

  user.set("isLoggedIn", true);
  await user.save();

  const token = jwt.sign({ userId: user._id }, KEYS!);
  return new ContinueWithGoogleSuccess(user, token);
}
