import { Router } from "express";

import {
  createBeast,
  getBeasts,
  editBeast,
  deleteBeast,
} from "../controllers/beast";

const router = Router();

router.post("/", createBeast);

router.get("/", getBeasts);

router.patch("/:id", editBeast);

router.delete("/:id", deleteBeast);

export default router;
