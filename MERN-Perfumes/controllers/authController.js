const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

// ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
  try {
    console.log("LOGIN REQUEST BODY:", req.body);

    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    console.log("FOUND ADMIN:", admin);

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    console.log("PASSWORD CHECK:", password, admin.password);

    if (password !== admin.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      admin,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};