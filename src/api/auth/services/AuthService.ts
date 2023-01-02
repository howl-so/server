import { DocumentType } from "@typegoose/typegoose";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "src/api/users/models/User";
import { KEYS } from "../../../util/secrets";
import { UnsuccessfulAuth } from "../entities/errors";
import { ContinueWithGoogleSuccess, SuccessfulAuth } from "../entities/responses";
import continueWithGoogle from "./continueWithGoogle";
import { logIn } from "./logIn";
import { validateToken, validateTokenAndReturnUser } from "./validateToken";
interface AuthService {
  continueWithGoogle(request: Request, response: Response, next: NextFunction): Promise<Response<ContinueWithGoogleSuccess>>;

  validateToken(request: Request, response: Response, next: NextFunction): Promise<Response<SuccessfulAuth | UnsuccessfulAuth>>;
  validateTokenAndReturnUser(token: string): Promise<DocumentType<User> | null>;
  logIn(username: string, password: string): Promise<DocumentType<User> | null>;
  getToken(userId: string): Promise<string>;
}

export default class RealAuthService implements AuthService {
  public async continueWithGoogle(request: Request, response: Response, next: NextFunction): Promise<Response<ContinueWithGoogleSuccess>> {
    return await continueWithGoogle(request, response, next);
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
