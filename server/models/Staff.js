// models/Faculty.js
import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  expertise: String,
  subjects: String,
  image: String, // here we’ll store the image URL/path
  url: String,
});

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
