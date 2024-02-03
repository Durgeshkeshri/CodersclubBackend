// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    course: { type: String, required: true },
    year: { type: Number, required: true },
    div: { type: String, required: true },
    event: { type: String, required: true },
    gmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
