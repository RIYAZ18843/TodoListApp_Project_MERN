// server/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Register the todo routes
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
