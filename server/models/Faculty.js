// models/Faculty.js
import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  expertise: String,
  subjects: String,
  image: String, // here we’ll store the image URL/path
  url: String,
});

const Faculty = mongoose.model("Faculty", facultySchema);
export default Faculty;
