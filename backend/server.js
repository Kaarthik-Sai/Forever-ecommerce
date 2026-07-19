import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import multer from "multer";
import Razorpay from "razorpay";
import Stripe from "stripe";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcryptjs";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("HELLLL YEAHHHH");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
