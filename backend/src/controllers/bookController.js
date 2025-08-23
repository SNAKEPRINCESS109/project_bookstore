import * as bookService from '../services/bookService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getBooks = asyncHandler(async (req, res) => {
  const books = await bookService.getAllBooks();
  res.json(books);
});

export const getBookById = asyncHandler(async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  res.json(book);
});

export const createBook = asyncHandler(async (req, res) => {
  const newBook = await bookService.createBook(req.body);
  res.status(201).json(newBook);
});
