import User from "../../users/models/User";

export interface SuccessfulAuth {
  user: User;
  token: string;
}

export class ContinueWithGoogleSuccess {
  readonly user: AuthenticatedHowlUser;
  readonly token: string;

  constructor(user: AuthenticatedHowlUser, token: string) {
    this.user = user;
    this.token = token;
  }
}

export class TokenValidationSuccess implements SuccessfulAuth {
  readonly user: User;
  readonly token: string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}

export class AuthenticatedHowlUserHowler {
  _id: string;
  name: string;
  avatarUrl?: string;
  ownerIds: string[];

  constructor(_id: string, name: string, ownerIds: string[], avatarUrl?: string) {
    this._id = _id;
    this.name = name;
    this.ownerIds = ownerIds;
    this.avatarUrl = avatarUrl;
  }
}

export class AuthenticatedHowlUser {
  _id: string;
  name: string;
  email: string;
  username: string;
  avatarUrl?: string;
  howlers: AuthenticatedHowlUserHowler[];

  constructor(_id: string, name: string, email: string, username: string, howlers: AuthenticatedHowlUserHowler[], avatarUrl?: string) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.avatarUrl = avatarUrl;
    this.howlers = howlers;
  }
}
