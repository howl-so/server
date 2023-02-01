export class LoginInput {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class ContinueWithGoogleInput {
  email: string;
  username: string;
  name: string;
  googleId: string;
  avatarUrl: string;

  constructor(email: string, username: string, name: string, googleId: string, avatarUrl: string) {
    this.email = email;
    this.username = username;
    this.name = name;
    this.googleId = googleId;
    this.avatarUrl = avatarUrl;
  }
}
