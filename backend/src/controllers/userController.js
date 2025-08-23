import * as userService from '../services/userService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.fetchUsers();
  res.json(users);
});
