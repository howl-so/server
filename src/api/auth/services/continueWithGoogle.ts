import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import { ContinueWithGoogleSuccess } from "../entities/responses";
import RealUserService from "../../users/services/RealUserService";

export default async function continueWithGoogle(request: Request, response: Response, _: NextFunction): Promise<Response<ContinueWithGoogleSuccess>> {
  const { email, username, name, googleId, avatarUrl } = request.body;

  const userService = new RealUserService();

  let user = await UserModel.findOne({ username });

  if (!user) {
    user = await userService.createUser(name, username, email, googleId, avatarUrl);
  }

  user.set("isLoggedIn", true);
  await user.save();

  const token = jwt.sign({ userId: user._id }, KEYS!);
  return response.json(new ContinueWithGoogleSuccess(user, token));
}
