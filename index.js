import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import routes from "./src/routes/index.js";
import { errorMiddleware } from "./src/middlewares/error-middleware.js";

const app = express();

const corsOptions = {
  origin: "*", // Allow all origins. For production, specify your domains.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB().catch((err) => {
  console.error("Failed to connect to the database", err);
  process.exit(1);
});

app.use("/api/v1", routes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("server running");
});
