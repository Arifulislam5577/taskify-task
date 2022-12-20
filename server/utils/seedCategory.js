import mongoose from "mongoose";
import dotenv from "dotenv";
import { data } from "./data.js";
import CategoryModel from "../model/CategoryModel.js";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connect to database");
});
mongoose.set("strictQuery", false);
const seedProducts = async () => {
  try {
    await CategoryModel.deleteMany();
    console.log("category deleted");
    await CategoryModel.insertMany(data);
    console.log("category added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
