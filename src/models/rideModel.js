import mongoose from "mongoose";

const rideSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      require: [true, "User is requie!"],
    },
    name: {
      type: String,
      required: [true, "Name is requie!"],
      trim: true,
    },
    mobile: {
      type: Number,
      required: [true, "Number is requie!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is requie!"],
      trim: true,
      lowercase: true,
    },
    pickupDateTime: {
      type: Date,
      required: [true, "Pickup date is requie!"],
      trim: true,
    },
    passenger: {
      type: String,
      required: [true, "Passenger is requie!"],
      trim: true,
    },
    distance: {
      type: Number,
      required: [true, "Distance is requie!"],
      trim: true,
    },
    tripType: {
      type: String,
      enum: ["ONE", "ROUND"],
      default: "ONE",
    },
    cab: {
      type: String,
      required: [true, "Cab is requie!"],
    },
    price: {
      type: String,
      required: [true, "Price is requie!"],
    },
    complete: {
      type: Date,
    },
    location: {
      pickup: {
        address: {
          type: String,
          require: [true, "Pickup address is require!"],
        },
        lat: { type: Number, require: [true, "Pickup lat is require!"] },
        lng: { type: Number, require: [true, "Pickup lng is require!"] },
      },
      drop: {
        address: {
          type: String,
          require: [true, "Drop address is require!"],
        },
        lat: { type: Number, require: [true, "Drop lat is require!"] },
        lng: { type: Number, require: [true, "Drop lng is require!"] },
      },
    },
  },
  { timestamps: true }
);

export const rideModel = new mongoose.model("ride", rideSchema);
