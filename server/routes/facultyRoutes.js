// routes/facultyRoutes.js
import express from "express";
import { getFaculty } from "../controllers/facultyController.js";

const router = express.Router();

router.get("/", getFaculty);

export default router;
