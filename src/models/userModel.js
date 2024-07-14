import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required!"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password should be at least 8 characters"],
      select: false,
    },
  },
  { timestamps: true }
);

export const userModal = mongoose.model("user", userSchema);
