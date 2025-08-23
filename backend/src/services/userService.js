import User from '../models/User.js';

export const fetchUsers = () => User.find().select('-password');
