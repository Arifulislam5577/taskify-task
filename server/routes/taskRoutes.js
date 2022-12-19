import express from "express";
import {
  createTask,
  getAllTasks,
  getATasks,
  updateTask,
  deleteAtask,
} from "../controllers/taskControllers.js";
const taskRouter = express.Router();

taskRouter.route("/").post(createTask).get(getAllTasks);
taskRouter.route("/:id").get(getATasks).patch(updateTask).delete(deleteAtask);
export default taskRouter;
