const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

// ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.status(400).json({ message: "Admin not found" });
    }

    if (password !== admin.password) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { id: admin._id },
        "SECRET_KEY",
        { expiresIn: "1h" }
    );

    res.json({ token });
};