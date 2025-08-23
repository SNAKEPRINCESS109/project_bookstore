import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  description: String,
  category: String,
  coverImage: String,
});

export default mongoose.model('Book', bookSchema);
