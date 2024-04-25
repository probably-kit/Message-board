import mongoose from 'mongoose';
import express from 'express';
import connectDB from './db'; //  DB connection file


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};





const app = express();

// Connect to MongoDB
connectDB();
export default connectDB;
