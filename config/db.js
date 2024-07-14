import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};
