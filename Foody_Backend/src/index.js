import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
  path: "/env",
});
const PORT = process.env.PORT || 5000;
app.use("/api/auth");

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
