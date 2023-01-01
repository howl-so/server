import { DocumentType } from "@typegoose/typegoose";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "src/api/users/models/User";
import { UserModel } from "../../../models";
import { KEYS } from "../../../util/secrets";
import { UnsuccessfulTokenValidationReason } from "../entities/errors";
import { TokenValidationSuccess } from "../entities/responses";
import { AuthToken } from "../entities/tokens";

interface Input {
  token: string;
}

export async function validateToken(request: Request, response: Response, _: NextFunction): Promise<Response> {
  const input: Input = request.body;
  const { token } = input;

  const user = await getUserFromToken(token);

  if (!user) throw UnsuccessfulTokenValidationReason.InvalidToken;

  return response.json(new TokenValidationSuccess(user, token));
}

export async function validateTokenAndReturnUser(token: string): Promise<DocumentType<User> | null> {
  return await getUserFromToken(token);
}

async function getUserFromToken(token: string): Promise<DocumentType<User> | null> {
  const decoded = jwt.verify(token, KEYS!) as AuthToken;
  const { userId } = decoded;
  return await UserModel.findById(userId);
}
