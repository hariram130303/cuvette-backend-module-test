const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Init Middleware to accept JSON data
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Book Catalog API!' });
});
// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));