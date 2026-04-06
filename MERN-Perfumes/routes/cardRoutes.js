const express = require("express");
const router = express.Router();
const multer = require("multer");
const Card = require("../models/Card");
const mongoose = require("mongoose");

/* ---------------- GET SINGLE CARD ---------------- */
router.get("/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 📦 IMAGE UPLOAD CONFIG
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

/* ---------------- CREATE CARD ---------------- */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const card = new Card({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file ? req.file.filename : "",
    });

    await card.save();
    res.json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ---------------- GET ALL ---------------- */
router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

/* ---------------- UPDATE ---------------- */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await Card.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ---------------- DELETE ---------------- */
router.delete("/:id", async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;