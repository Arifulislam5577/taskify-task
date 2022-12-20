import express from "express";
import { getCategory } from "../controllers/categoryControllers.js";
const categoryRouter = express.Router();

categoryRouter.route("/").get(getCategory);

export default categoryRouter;
