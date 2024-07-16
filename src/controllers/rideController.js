import { userModal } from "../models/userModel.js";
import { rideModel } from "../models/rideModel.js";

export const createRide = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      email,
      pickupDateTime,
      passenger,
      distance,
      location,
      price,
      cab,
      tripType,
    } = req.body;
    const userExist = await userModal.findById({ _id: req._id });

    if (!userExist) {
      throw new Error("User not valid!");
    }

    if (!name) {
      throw new Error("Name is required");
    } else if (!mobile) {
      throw new Error("Mobile is required");
    } else if (!email) {
      throw new Error("Email is required");
    } else if (!pickupDateTime) {
      throw new Error("PickupDateTime is required");
    } else if (!location) {
      throw new Error("Location is required");
    } else if (!passenger) {
      throw new Error("Passenger is required");
    } else if (!distance) {
      throw new Error("Distance is required");
    } else if (!tripType) {
      throw new Error("Trip type is required");
    } else if (!cab) {
      throw new Error("Cab is required");
    } else if (!price) {
      throw new Error("Price is required");
    }

    const reqData = { ...req.body, user_id: req._id };
    const ridedata = await rideModel(reqData);
    const ride = ridedata.save();
    res.status(200).json({ message: "Ride added successfully!", ridedata });
  } catch (err) {
    console.log(err);
    const error = {
      status: 400,
      message: err.message,
    };
    next(error);
  }
};

export const getRides = async (req, res, next) => {
  try {
    const rides = await rideModel.find({ user_id: req._id });
    res.status(200).json({ message: "Rides fetched successfully!", rides });
  } catch (err) {
    const error = {
      status: 400,
      message: err.message,
    };
    next(error);
  }
};
