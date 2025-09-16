// routes/facultyRoutes.js
import express from "express";
import { getAlumni } from "../controllers/alumniController.js";

const router = express.Router();

router.get("/", getAlumni);

export default router;
