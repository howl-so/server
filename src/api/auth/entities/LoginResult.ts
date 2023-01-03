import { PopulatedUser } from "src/api/users/models/PopulatedUser";

export abstract class LoginResponse {
  abstract type: LoginResult;
  abstract user: PopulatedUser | null;
  abstract token: string | null;
}

enum LoginResult {
  SUCCESS,
  FAILURE
}

export class LoginSuccess extends LoginResponse {
  type = LoginResult.SUCCESS;
  user: PopulatedUser;
  token: string;

  constructor(user: PopulatedUser, token: string) {
    super();
    this.user = user;
    this.token = token;
  }
}

export class LoginFailure extends LoginResponse {
  type = LoginResult.FAILURE;
  user = null;
  token = null;
}
