// controllers/userController.js
const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { name } = req.body;

        // Create a new user instance
        const newUser = new User({ name });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createUser,
};
