// controllers/facultyController.js
import Alumni from "../models/Alumni.js";

// @desc Get all alumni
// @route GET /api/alumni
export const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
