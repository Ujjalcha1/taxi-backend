import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModal } from "../models/userModel.js";

export const userRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await userModal.findOne({ email });

    if (userExist) {
      throw new Error("Email already exists!");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const reqData = {
      ...req.body,
    };

    reqData.password = hashPassword;

    const userData = new userModal(req.body);
    const user = await userData.save();
    const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({ message: "User created successfully!", token });
  } catch (err) {
    const error = {
      message: err.message,
      status: 400,
    };
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModal.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("User not valid!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials!");
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "User login successfully!", token });
  } catch (err) {
    const error = {
      message: err.message,
      status: 400,
    };
    next(error);
  }
};
