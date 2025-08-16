const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, genre, price, inStock } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      genre,
      price,
      inStock,
    });

    const book = await newBook.save();
    res.status(201).json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};