import SeedUser from "./SeedUser";
import { MATT_ID, KELSEY_ID, RICK_ID, TAG_ID } from "..";

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
  _id: TAG_ID,
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
