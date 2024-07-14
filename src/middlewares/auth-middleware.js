import jwt from "jsonwebtoken";

export const authmiddleware = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded._id; // Add the userId to the request object
    next();
  } catch (err) {
    const error = {
      message: err.message,
      status: 400,
    };
    next(error);
  }
};
