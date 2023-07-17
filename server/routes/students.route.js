import express from "express";
import {
  deleteStudent,
  editStudent,
  getAllStudents,
  getStudent,
  getStudentsByClassStream,
  saveStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

// Students Routes
router.post("/students", saveStudent);
router.put("/students/:studentId", editStudent);
router.delete("/students/:studentId", deleteStudent);
router.get("/students/:studentId", getStudent);
router.get("/students", getAllStudents);
router.get("/students/class-stream/:classStreamId", getStudentsByClassStream);

export default router;
