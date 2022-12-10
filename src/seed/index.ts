import { Types } from "mongoose";

const ObjectId = Types.ObjectId;

export const MATT_ID = "14B357602998F909E8B17AC9";
export const mattId = new ObjectId(MATT_ID);

export const KELSEY_ID = "0DD1DE8BBDE3B4A1651EAD43";
export const kelseyId = new ObjectId(KELSEY_ID);

export const TY_ID = "4D0774D719884B24E77DD523";
export const tyId = new ObjectId(TY_ID);

export const RICK_ID = "71A69332B26C2683BB6378D0";
export const rickId = new ObjectId(RICK_ID);

export const TAG_ID = "AFE38E7BCE9533D8A4E0A802";
export const tagId = new ObjectId(TAG_ID);

export const TROT_ID = "CCAEFBE0EB58085D5FE98FEB";
export const trotId = new ObjectId(TROT_ID);

export const TUGG_ID = "D1341A5EB64DEAFA12E68398";
export const tuggId = new ObjectId(TUGG_ID);

export const DJANGO_ID = "A945A6AA0C83765C270B0FC8";
export const djangoId = new ObjectId(DJANGO_ID);

export const PAW_ID = "81ACE39E09BDDB769886EADC";
export const pawId = new ObjectId(PAW_ID);

export const RIFF_ID = "9E46162394CF570418028B93";
export const riffId = new ObjectId(RIFF_ID);

export const SADIE_ID = "E90704181E8FFD52E2C36EAD";
export const sadieId = new ObjectId(SADIE_ID);

export const MACY_ID = "A77B41AD91184BD9CDCE4F57";
export const macyId = new ObjectId(MACY_ID);

export const NEPTUNE_ID = "57FBD9845074FE1ECD34BAB7";
export const neptuneId = new ObjectId(NEPTUNE_ID);

export const ELLA_ID = "3AED9CE3EFB0834195A86DA9";
export const ellaId = new ObjectId(ELLA_ID);

export const SPLASH_ID = "9F54A6C385282EA5E0CEC857";
export const splashId = new ObjectId(SPLASH_ID);

export const tag = { id: TAG_ID, oid: tagId };
export const trot = { id: TROT_ID, oid: trotId };
export const tugg = { id: TUGG_ID, oid: tuggId };
export const django = { id: DJANGO_ID, oid: djangoId };
export const paw = { id: PAW_ID, oid: pawId };
export const riff = { id: RIFF_ID, oid: riffId };
export const sadie = { id: SADIE_ID, oid: sadieId };
export const macy = { id: MACY_ID, oid: macyId };
export const neptune = { id: NEPTUNE_ID, oid: neptuneId };
export const ella = { id: ELLA_ID, oid: ellaId };
export const splash = { id: SPLASH_ID, oid: splashId };

export const mattsHowlers = [tag];
export const tysHowlers = [trot];
export const ricksHowlers = [tugg, django];
export const kelseysHowlers = [paw, riff, sadie, macy, neptune, ella, splash];

export const matt = { id: MATT_ID, oid: mattId, howlers: mattsHowlers };
export const ty = { id: TY_ID, oid: tyId, howlers: tysHowlers };
export const rick = { id: RICK_ID, oid: rickId, howlers: ricksHowlers };
export const kelsey = { id: KELSEY_ID, oid: kelseyId, howlers: kelseysHowlers };

export const packages = [matt, ty, rick, kelsey];
