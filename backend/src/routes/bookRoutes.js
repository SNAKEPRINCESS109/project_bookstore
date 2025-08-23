import express from 'express';
import { getBooks, getBookById, createBook } from '../controllers/bookController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', protect, adminOnly, createBook);

export default router;
