import express from "express";
import {
  deleteClassStream,
  getAllClassStreams,
  getClassStream,
  saveClassStream,
} from "../controllers/stream.controller.js";

const router = express.Router();

// Steam Routes
router.post("/class-streams", saveClassStream);
router.get("/class-streams", getAllClassStreams);
router.get("/class-streams/:classStreamId", getClassStream);
router.delete("/class-streams/:classStreamId", deleteClassStream);

export default router;
