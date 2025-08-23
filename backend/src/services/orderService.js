import Order from '../models/Order.js';

export const createOrder = (userId, data) => Order.create({ ...data, userId });
export const getOrdersByUser = (userId) =>
  Order.find({ userId }).populate('books.bookId');
