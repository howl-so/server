import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import { UnsuccessfulTokenValidationReason } from "../entities/errors";
import { TokenValidationSuccess } from "../entities/responses";
import { AuthToken } from "../entities/tokens";

interface Input {
  token: string;
}

export default async function validateToken(request: Request, response: Response, _: NextFunction): Promise<Response> {
  const input: Input = request.body;
  const { token } = input;

  const decoded = jwt.verify(token, KEYS!) as AuthToken;

  const { userId } = decoded;

  const user = await UserModel.findById(userId);

  if (!user) throw UnsuccessfulTokenValidationReason.InvalidToken;

  return response.json(new TokenValidationSuccess(user, token));
}
