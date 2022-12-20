import CategoryModel from "../model/CategoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
