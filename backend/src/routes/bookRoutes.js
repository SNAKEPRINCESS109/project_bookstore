import express from 'express';
import {
  getBooks,
  getBookById,
  createBook,
  importBooksFromJson,
} from '../controllers/bookController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router(); // 👈 Make sure this is defined BEFORE using `router`

// Routes
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', protect, adminOnly, createBook);
router.post('/import', protect, adminOnly, importBooksFromJson);

export default router;
