export default interface SeedUser {
  _id: string;
  name: string;
  email: string;
  username: string;
  googleId?: string;
  avatarUrl?: string;
  isLoggedIn?: string;
  howlerIds?: string[];
}
