const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGOAUTH_URL, {
    serverSelectionTimeoutMS: 30000,
  });

  return conn;
};

module.exports = connectDB;