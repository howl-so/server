import express from "express";
import RealAuthService from "./api/auth/services/AuthService";

const router = express.Router();

router.post("/auth/token/validate", new RealAuthService().validateToken);

export default router;
