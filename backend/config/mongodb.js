import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MONGODB connected successfully");
  });
  await mongoose.connect(`${process.env.MONGOURI}/e-commerce`);
};

export default connectDB;
