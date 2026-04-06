const mongoose = require("mongoose");
const Admin = require("./models/admin");

mongoose.connect("mongodb://127.0.0.1:27017/cardsDB");

const createAdmin = async () => {
    await Admin.create({
        username: "admin",
        password: "adminbba123"
    });

    console.log("Admin created");
    mongoose.disconnect();
};

createAdmin();