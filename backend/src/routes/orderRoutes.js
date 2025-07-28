// routes/orderRoutes.js
import express from 'express';
import { placeOrder, getOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes below require user to be authenticated
router.use(protect);

// Place a new order
router.post('/', placeOrder);

// Get all orders for the logged-in user
router.get('/', getOrders);

export default router;
