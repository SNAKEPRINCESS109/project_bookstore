import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors_name: {type: [String]}, // corresponds to "author_name" array
  cover_i: { type: String },   // corresponds to "cover_i"
  price: { type: Number, default: 0 }, // not in JSON, so default to 0
 
});

export default mongoose.model('Book', bookSchema);
