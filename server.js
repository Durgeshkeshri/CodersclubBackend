// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/dbConnect');
const formRoute = require('./routes/form');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/form', formRoute);
app.get('/', (req, res) => {
  // Use res.sendFile() to send the index.html file in response
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
