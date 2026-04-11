const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

// ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 🔥 FIX: only search by username first
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    // 🔥 FIX: proper password check
    if (password !== admin.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      admin,
      token,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};