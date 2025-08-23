import Book from '../models/Book.js';
import * as bookService from '../services/bookService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// GET /api/books
export const getBooks = asyncHandler(async (req, res) => {
  const { page, limit, sortBy, sortOrder, category, search } = req.query;

  const books = await bookService.getAllBooks({
    page,
    limit,
    sortBy,
    sortOrder,
    category,
    search,
  });

  res.status(200).json(books);
});

// GET /api/books/:id
export const getBookById = asyncHandler(async (req, res) => {
  const book = await bookService.getBookById(req.params.id);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.json(book);
});

// POST /api/books
export const createBook = asyncHandler(async (req, res) => {
  const { title, authors, coverId, description, category, price, coverImage } = req.body;

  const newBook = new Book({
    title,
    authors,
    coverId,
    description,
    category,
    price,
    coverImage,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create book', error: error.message });
  }
});

// POST /api/books/import
export const importBooksFromJson = asyncHandler(async (req, res) => {
  const { docs } = req.body;

  if (!docs || !Array.isArray(docs)) {
    return res.status(400).json({ message: 'Invalid or missing "docs" array in request body.' });
  }

  const booksToInsert = docs.map(doc => ({
    title: doc.title,
    authors: doc.author_name || [],
    coverId: doc.cover_i || null,
  }));

  try {
    const insertedBooks = await Book.insertMany(booksToInsert);
    res.status(201).json({
      message: `${insertedBooks.length} books imported successfully.`,
      data: insertedBooks,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to import books.', error: error.message });
  }
});
