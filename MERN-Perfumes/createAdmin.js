const mongoose = require("mongoose");
const Admin = require("./models/admin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL +"/cardsDB");

const createAdmin = async () => {
    await Admin.create({
        username: "admin",
        password: "adminbba123"
    });

    console.log("Admin created");
    mongoose.disconnect();
};

createAdmin();