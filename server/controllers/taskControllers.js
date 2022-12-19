import TaskModel from "../model/TaskModel.js";

export const createTask = async (req, res) => {
  const { name, position } = req.body;
  try {
    const task = await TaskModel({ name, position });

    const newTask = await task.save();

    if (newTask) {
      return res.status(200).json(newTask);
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
