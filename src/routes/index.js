import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";
import { authmiddleware } from "../middlewares/auth-middleware.js";
import { cabFare, fareDetails } from "../controllers/cabController.js";
import {
  createRide,
  getRides,
  getRidesHistory,
} from "../controllers/rideController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/save-ride", authmiddleware, createRide);
router.get("/ride-list", authmiddleware, getRides);
router.get("/ride-history", authmiddleware, getRidesHistory);
router.post("/add-fare", cabFare);
router.get("/get-fare", fareDetails);

export default router;
