import mongoose from "mongoose";

export const connectDB = async () => {
  const URI = process.env.MONGODB_URI.trim();
  if (!URI) {
    throw new Error("Database connection URI is not configured.");
  }

  try {
    const connect = await mongoose.connect(URI);
    console.log("MongoDB connected", connect.connection.host);
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
