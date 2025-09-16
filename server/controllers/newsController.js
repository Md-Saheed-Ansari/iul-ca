const News = require("../models/News");

// Get all news
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 }); // latest first
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: "Error fetching news", error: err.message });
  }
};

// Add a news item (optional, for testing)
const createNews = async (req, res) => {
  try {
    const { date, title, link } = req.body;
    const news = new News({ date, title, link });
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ message: "Error creating news", error: err.message });
  }
};

module.exports = { getNews, createNews };
