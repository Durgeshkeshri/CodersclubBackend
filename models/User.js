// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add other fields as needed
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
