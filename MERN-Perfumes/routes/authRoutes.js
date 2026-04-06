const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// 🔐 LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({
      username,
      password,
    });

    if (!admin) {
      return res.status(401).json({ message: "Invalid login" });
    }

    res.json({
      message: "Login successful",
      admin,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;