import { Router } from "express";
import {signup, login, logout, getMe} from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoutes.js";
const router = Router()

router.get("/me", protectRoute , getMe);
router.post("/signin", signup);
router.post("/login", login);
router.delete("/logout", logout)

export default router;