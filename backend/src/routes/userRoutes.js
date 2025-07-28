// routes/userRoutes.js
import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Only authenticated admins can access user data
router.use(protect);
router.use(adminOnly);

// Get all users (Admin only)
router.get('/', getAllUsers);

export default router;
