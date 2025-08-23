import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) return res.status(400).json({ message: 'Email already exists' });
  
  const existingUsername = await User.findOne({ username });
  if (existingUsername) return res.status(400).json({ message: 'Username already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });
  const token = generateToken(user);

  res.status(201).json({ user, token });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken(user);
  res.json({ user, token });
});
