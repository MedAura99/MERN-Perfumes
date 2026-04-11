const Card = require("../models/Card");

exports.createCard = async (req, res) => {
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
    res.status(500).json({ error: err.message });
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCard = async (req, res) => {
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
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Card deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};