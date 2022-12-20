import mongoose from "mongoose";

const { model, Schema } = mongoose;

const categorySchema = new Schema(
  {
    positionName: {
      type: String,
      required: true,
    },
    subPositionName: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = model("category", categorySchema);

export default CategoryModel;
