// controllers/formController.js
const Form = require('../models/Form');

const saveFormData = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  saveFormData,
};
