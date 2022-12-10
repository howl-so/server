import { Types } from "mongoose";

const ObjectId = Types.ObjectId;

export const MATT_ID = "14b357602998f909e8b17ac9";
export const mattId = new ObjectId(MATT_ID);

export const KELSEY_ID = "0dd1de8bbde3b4a1651ead43";
export const kelseyId = new ObjectId(KELSEY_ID);

export const TY_ID = "4d0774d719884b24e77dd523";
export const tyId = new ObjectId(TY_ID);

export const RICK_ID = "71a69332b26c2683bb6378d0";
export const rickId = new ObjectId(RICK_ID);

export const TAG_ID = "afe38e7bce9533d8a4e0a802";
export const tagId = new ObjectId(TAG_ID);

export const TROT_ID = "ccaefbe0eb58085d5fe98feb";
export const trotId = new ObjectId(TROT_ID);

export const TUGG_ID = "d1341a5eb64deafa12e68398";
export const tuggId = new ObjectId(TUGG_ID);

export const DJANGO_ID = "a945a6aa0c83765c270b0fc8";
export const djangoId = new ObjectId(DJANGO_ID);

export const PAW_ID = "81ace39e09bddb769886eadc";
export const pawId = new ObjectId(PAW_ID);

export const RIFF_ID = "9e46162394cf570418028b93";
export const riffId = new ObjectId(RIFF_ID);

export const SADIE_ID = "e90704181e8ffd52e2c36ead";
export const sadieId = new ObjectId(SADIE_ID);

export const MACY_ID = "a77b41ad91184bd9cdce4f57";
export const macyId = new ObjectId(MACY_ID);

export const NEPTUNE_ID = "57fbd9845074fe1ecd34bab7";
export const neptuneId = new ObjectId(NEPTUNE_ID);

export const ELLA_ID = "3aed9ce3efb0834195a86da9";
export const ellaId = new ObjectId(ELLA_ID);

export const SPLASH_ID = "9f54a6c385282ea5e0cec857";
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
