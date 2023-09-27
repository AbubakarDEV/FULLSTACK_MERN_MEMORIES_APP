import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../controllers/posts";
import auth from "../middleware/auth";
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPosts);
router.put("/:id", auth, updatePosts);
router.delete("/:id", auth, deletePosts);
router.put("/:id/like", auth, likePosts);

export default router;
