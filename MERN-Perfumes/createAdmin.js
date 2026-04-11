const mongoose = require("mongoose");
const Admin = require("./models/admin");
require("dotenv").config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGOAUTH_URL);
  console.log("DB Connected");
};

const createAdmin = async () => {
  try {
    await connectDB();

    await Admin.create({
      username: "admin",
      password: "adminbba123",
    });

    console.log("Admin created");

    await mongoose.disconnect();
  } catch (err) {
    console.log(err.message);
  }
};

createAdmin();