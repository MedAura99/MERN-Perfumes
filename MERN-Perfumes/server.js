const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");
const cardRoutes = require("./routes/cardRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/cards", cardRoutes);

mongoose.connect(process.env.MONGO_URL, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  bufferTimeoutMS: 30000
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});