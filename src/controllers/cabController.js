import { fareModel } from "../models/fareModel.js";

export const cabFare = async (req, res, next) => {
  try {
    const cabData = new fareModel(req.body);
    await cabData.save();
    res.status(201).json({ message: "Cab added successfully!" });
  } catch (err) {
    const error = {
      message: err.message,
      status: 400,
    };
    next(err);
  }
};

export const fareDetails = async (req, res, next) => {
  try {
    const cabData = await fareModel.find();
    res.status(200).json(cabData);
  } catch (err) {
    const error = {
      message: err.message,
      status: 400,
    };
    next(err);
  }
};
