const express = require("express");
const { getNews, createNews } = require("../controllers/newsController");

const router = express.Router();

// GET /api/news
router.get("/", getNews);

// POST /api/news  (optional: to add news)
router.post("/", createNews);

module.exports = router;
