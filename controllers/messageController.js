// controllers/messageController.js
const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const message = await Message.create({ text });
    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
