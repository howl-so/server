import axios from "axios";
import bcrypt from "bcrypt";
import { HowlerModel, UserModel } from "../models";
import seedHowlers from "./howlers/seedHowlers";
import { packages } from "./index";
import seedUsers from "./users/seedUsers";

export default async function seed() {
  await UserModel.deleteMany({});
  await HowlerModel.deleteMany({});

  await UserModel.insertMany(seedUsers);
  await HowlerModel.insertMany(seedHowlers);

  for (const { id, oid, howlers } of packages) {
    const howlerOids = howlers.map((howler) => howler.oid);
    const howlerIds = howlers.map((howler) => howler.id);
    await UserModel.findByIdAndUpdate(id, {
      password: await bcrypt.hash("PASSWORD", 10),
      howlerIds: howlerOids
    });

    for (const howlerId of howlerIds) {
      const howler = await HowlerModel.findByIdAndUpdate(howlerId, { ownerIds: [oid] });
      if (howler && howler.avatarUrl == null) {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        const avatarUrl = response.data.message;
        howler.avatarUrl = avatarUrl;
        howler.save();
      }
    }
  }

  console.log("🚀 Database seeded");
}
