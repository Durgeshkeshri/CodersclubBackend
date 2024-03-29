// routes/form.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/submit-form', formController.saveFormData);

module.exports = router;
