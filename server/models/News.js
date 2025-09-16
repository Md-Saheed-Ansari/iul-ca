const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
