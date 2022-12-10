import { getModelForClass } from "@typegoose/typegoose";
import User from "./api/users/models/User";
import Howler from "./api/howlers/models/Howler";

export const UserModel = getModelForClass(User);
export const HowlerModel = getModelForClass(Howler);