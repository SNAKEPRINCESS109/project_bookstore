import Book from '../models/Book.js';

// Enhanced version with pagination, filtering, sorting
export const getAllBooks = async ({
  page = 1,
  limit = 9,
  sortBy = 'createdAt',
  sortOrder = 'asc',
  category,
  search = '',
}) => {
  const filter = {};

  if (category) {
    filter.category = category;
  }

  if (search) {
    filter.title = { $regex: search, $options: 'i' };
  }

  const sortDirection = sortOrder === 'desc' ? -1 : 1;

  const total = await Book.countDocuments(filter);

  const books = await Book.find(filter)
    .sort({ [sortBy]: sortDirection })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  return {
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    books,
  };
};

export const getBookById = (id) => Book.findById(id);

export const createBook = (data) => Book.create(data);
