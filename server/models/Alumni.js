// models/Faculty.js
import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  name: String,
  designation: String,
  organization: String,
  image: String, // here we’ll store the image URL/path
});

const Alumni = mongoose.model("Alumni", alumniSchema);
export default Alumni;
