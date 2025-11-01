// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

// const env = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 10000, // 10 seconds
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

const app = express();
const PORT = 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Connect to DB and seed it ---

// 🧩 Debug: log each request
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});

// --- Product Routes ---
app.use("/api/products", productRoutes);

// --- Default Route ---
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// --- Start Server ---
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
