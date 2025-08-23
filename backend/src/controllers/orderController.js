import * as orderService from '../services/orderService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const placeOrder = asyncHandler(async (req, res) => {
  const order = await orderService.createOrder(req.user.id, req.body);
  res.status(201).json(order);
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getOrdersByUser(req.user.id);
  res.json(orders);
});
