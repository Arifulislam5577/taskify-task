import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

// ROUTES
app.use("/api/v1/task", taskRouter);

// Database
mongoose.connect(process.env.MONGODB_URL, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Database connected`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`App is running at ${PORT}`);
  }
});
