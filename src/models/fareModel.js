import mongoose from "mongoose";

const fareSchema = new mongoose.Schema(
  {
    cab: {
      type: String,
      required: [true, "Cab type is require!"],
    },
    price: {
      type: Number,
      require: [true, "Price is require!"],
    },
    trip: {
      type: String,
      require: [true, "Trip is require!"],
      enum: ["ONE", "ROUND"],
    },
  },
  { timestamps: true }
);

export const fareModel = mongoose.model("cab", fareSchema);
