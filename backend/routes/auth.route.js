import { Router } from "express";
import {signup, login, logout, getMe} from "../controllers/auth.controller.js"
const router = Router()

router.get("/me", getMe);
router.post("/signin", signup);
router.post("/login", login);
router.post("/logout", logout)

export default router