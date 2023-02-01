import { DocumentType } from "@typegoose/typegoose";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "src/api/users/models/User";
import { KEYS } from "../../../util/secrets";
import { UnsuccessfulAuth } from "../entities/errors";
import { ContinueWithGoogleInput } from "../entities/LoginInput";
import { ContinueWithGoogleSuccess, SuccessfulAuth } from "../entities/responses";
import continueWithGoogle from "./continueWithGoogle";
import { logIn } from "./logIn";
import { validateToken, validateTokenAndReturnUser } from "./validateToken";
interface AuthService {
  continueWithGoogle(input: ContinueWithGoogleInput): Promise<ContinueWithGoogleSuccess>;

  validateToken(request: Request, response: Response, next: NextFunction): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>>;
  validateTokenAndReturnUser(token: string): Promise<DocumentType<User> | null>;
  logIn(username: string, password: string): Promise<DocumentType<User> | null>;
  getToken(userId: string): Promise<string>;
}

export default class RealAuthService implements AuthService {
  public async continueWithGoogle(input: ContinueWithGoogleInput): Promise<ContinueWithGoogleSuccess> {
    return await continueWithGoogle(input);
  }

  public async validateToken(request: Request, response: Response, next: NextFunction): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>> {
    return await validateToken(request, response, next);
  }

  public async validateTokenAndReturnUser(token: string): Promise<DocumentType<User> | null> {
    return await validateTokenAndReturnUser(token);
  }

  public async logIn(username: string, password: string): Promise<DocumentType<User> | null> {
    return logIn(username, password);
  }

  public async getToken(userId: string): Promise<string> {
    return jwt.sign({ userId: userId }, KEYS!);
  }
}
