import mongoose from "mongoose";

export const connectDB = async (
  mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI,
) => {
  if (!mongoUri) {
    throw new Error(
      "Database connection URI is not configured. Set MONGO_URI or MONGODB_URI.",
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
