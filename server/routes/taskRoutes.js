import express from "express";
import { createTask } from "../controllers/taskControllers.js";
const taskRouter = express.Router();

taskRouter.route("/").post(createTask);
export default taskRouter;
