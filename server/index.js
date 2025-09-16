import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import newsRoutes from './routes/newsRoute.js'
import eventRoutes from './routes/eventRoutes.js'
import facultyRoutes from "./routes/facultyRoutes.js";
import alumniRoutes from "./routes/alumniRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import logger from './logger.js'

 dotenv.config()
 const app = express()

import path from "path"
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL })); // allow React app
app.use(express.json());


// Routes
app.use("/api/news", newsRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/staff", staffRoutes);


// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {

    logger.info('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () =>
      logger.info(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => logger.error("MongoDB connection error: %s", err));