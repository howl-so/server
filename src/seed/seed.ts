import { HowlerModel, UserModel } from "../models";
import seedUsers from "./users/seedUsers";
import seedHowlers from "./howlers/seedHowlers";
import { packages } from "./index";

export default async function seed() {
  await UserModel.deleteMany({});
  await HowlerModel.deleteMany({});

  await UserModel.insertMany(seedUsers);
  await HowlerModel.insertMany(seedHowlers);

  for (const { id, oid, howlers } of packages) {
    const howlerOids = howlers.map((howler) => howler.oid);
    const howlerIds = howlers.map((howler) => howler.id);
    await UserModel.findByIdAndUpdate(id, { howlerIds: howlerOids });

    for (const howlerId of howlerIds) {
      await HowlerModel.findByIdAndUpdate(howlerId, { ownerIds: [oid] });
    }
  }

  console.log("🚀 Database seeded");
}
