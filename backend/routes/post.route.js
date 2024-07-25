import { Router } from "express";
import { protectRoute } from "../middleware/protectRoutes.js";
import { createPost, updatePost, deletePost, getAllPost, viewPost } from "../controllers/post.controller.js";
const router = Router();

router.get("/all", protectRoute, getAllPost);
router.get("/view/:id", protectRoute, viewPost);
router.post("/create", protectRoute,  createPost);
router.put("/update/:id", protectRoute, updatePost);
router.delete("/delete/:id", protectRoute, deletePost);

export default router