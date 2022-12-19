import mongoose from "mongoose";

const { model, Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    position: {
      type: String,
      required: [true, "Please select your position"],
    },
  },
  { timestamps: true }
);

const TaskModel = model("task", taskSchema);

export default TaskModel;
