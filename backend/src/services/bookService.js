import Book from '../models/Book.js';

export const getAllBooks = () => Book.find();
export const getBookById = (id) => Book.findById(id);
export const createBook = (data) => Book.create(data);
