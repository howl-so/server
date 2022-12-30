import { KELSEY_ID, MATT_ID, RICK_ID, TY_ID } from "..";
import SeedUser from "./SeedUser";

const Matt: SeedUser = {
  _id: MATT_ID,
  name: "Matt",
  email: "matt@howl.so",
  username: "matt"
};

const Kelsey: SeedUser = {
  _id: KELSEY_ID,
  name: "Kelsey",
  email: "kelsey@howl.so",
  username: "kelsey"
};

const Ty: SeedUser = {
  _id: TY_ID,
  name: "Ty",
  email: "ty@howl.so",
  username: "ty"
};

const Rick: SeedUser = {
  _id: RICK_ID,
  name: "Rick",
  email: "rick@howl.so",
  username: "rick"
};

const seedUsers: SeedUser[] = [Matt, Kelsey, Ty, Rick];

export default seedUsers;
