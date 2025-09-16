// controllers/facultyController.js
import Faculty from "../models/Faculty.js";

// @desc Get all faculty
// @route GET /api/faculty
export const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
