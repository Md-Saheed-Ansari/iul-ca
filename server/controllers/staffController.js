// controllers/facultyController.js
import Staff from "../models/Staff.js";

// @desc Get all satff
// @route GET /api/staff
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
