const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    image: { type: String, required: true }, // store image URL or filename
    startDate: { type: Date, required: true },
    date: { type: String, required: true }, // e.g. "19/08/2025 - 20/08/2025"
    title: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
