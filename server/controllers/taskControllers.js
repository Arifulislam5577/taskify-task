import TaskModel from "../model/TaskModel.js";

// CREATE  NEW TASK

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

// GET ALL TASK

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// GET A SINGLE TASK

export const getATasks = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "No Task Found" });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// UPDATE A TASK

export const updateTask = async (req, res) => {
  const { name, position } = req.body;
  try {
    const task = await TaskModel.findById(req.params.id);

    if (task) {
      task.name = name ? name : task.name;
      task.position = position ? position : task.position;
      const newTask = await task.save();
      return res.status(200).json(newTask);
    } else {
      return res.status(404).json({ message: "No Task Found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE A TASK

export const deleteAtask = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);

    if (task) {
      await task.delete();
      return res.status(200).json({ message: "Task deleted successfully" });
    } else {
      return res.status(404).json({ message: "No Task Found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
