const Event = require("../models/Event");

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ startDate: 1 }); // upcoming first
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err.message });
  }
};

// Add single event
const createEvent = async (req, res) => {
  try {
    const { image, startDate, date, title, link } = req.body;
    const event = new Event({ image, startDate, date, title, link });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Error creating event", error: err.message });
  }
};

// Bulk insert events
const insertManyEvents = async (req, res) => {
  try {
    const eventsArray = req.body;
    if (!Array.isArray(eventsArray)) {
      return res.status(400).json({ message: "Payload must be an array" });
    }
    const inserted = await Event.insertMany(eventsArray);
    res.status(201).json(inserted);
  } catch (err) {
    res.status(500).json({ message: "Error inserting events", error: err.message });
  }
};

module.exports = { getEvents, createEvent, insertManyEvents };
