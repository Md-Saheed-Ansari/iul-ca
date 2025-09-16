const express = require("express");
const { getEvents, createEvent, insertManyEvents } = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.post("/bulk", insertManyEvents);

module.exports = router;
