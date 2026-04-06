const Card = require("../models/Card");

// CREATE
exports.createCard = async (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : "";

    const card = new Card({
        name,
        price,
        description,
        image
    });

    await card.save();
    res.json(card);
};

// READ (PUBLIC)
exports.getCards = async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
};

// UPDATE
exports.updateCard = async (req, res) => {
    const updateData = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
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
};

// DELETE
exports.deleteCard = async (req, res) => {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Card deleted" });
};