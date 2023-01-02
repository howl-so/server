import { DJANGO_ID, ELLA_ID, MACY_ID, NEPTUNE_ID, PAW_ID, RIFF_ID, SADIE_ID, SPLASH_ID, TAG_ID, TROT_ID, TUGG_ID } from "..";
import SeedHowler from "./SeedHowler";

const Tag: SeedHowler = {
  _id: TAG_ID,
  name: "Tag",
  username: "tag",
  avatarUrl: "https://i.imgur.com/UJ6rFC6.jpg"
};

const Trot: SeedHowler = {
  _id: TROT_ID,
  name: "Trot",
  username: "trot",
  avatarUrl: "https://i.imgur.com/RSx7KUI.jpg"
};

const Tugg: SeedHowler = {
  _id: TUGG_ID,
  name: "Tugg",
  username: "tugg",
  avatarUrl: "https://i.imgur.com/J6mZ2cn.jpg"
};

const Paw: SeedHowler = {
  _id: PAW_ID,
  name: "Paw",
  username: "paw",
  avatarUrl: "https://i.imgur.com/1pwm9KU.jpg"
};

const Riff: SeedHowler = {
  _id: RIFF_ID,
  name: "Riff",
  username: "riff"
};

const Sadie: SeedHowler = {
  _id: SADIE_ID,
  name: "Sadie",
  username: "sadie"
};

const Macy: SeedHowler = {
  _id: MACY_ID,
  name: "Macy",
  username: "macy"
};

const Neptune: SeedHowler = {
  _id: NEPTUNE_ID,
  name: "Neptune",
  username: "neptune"
};

const Ella: SeedHowler = {
  _id: ELLA_ID,
  name: "Ella",
  username: "ella"
};

const Splash: SeedHowler = {
  _id: SPLASH_ID,
  name: "Splash",
  username: "splash"
};

const Django: SeedHowler = {
  _id: DJANGO_ID,
  name: "Django",
  username: "django"
};

const seedHowlers: SeedHowler[] = [Tag, Trot, Tugg, Paw, Riff, Sadie, Macy, Neptune, Ella, Splash, Django];

export default seedHowlers;
