import React, { useState } from 'react';
import '../styles/forms.css';
import '../styles/buttons.css';

export default function AdminBookForm({ onSubmit, initialData = {} }) {
  const [book, setBook] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    price: initialData.price || '',
    coverImage: initialData.coverImage || ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(book); }}>
      <label>Title</label>
      <input name="title" value={book.title} onChange={handleChange} required />

      <label>Author</label>
      <input name="author" value={book.author} onChange={handleChange} required />

      <label>Price</label>
      <input type="number" name="price" value={book.price} onChange={handleChange} required />

      <label>Cover Image URL</label>
      <input name="coverImage" value={book.coverImage} onChange={handleChange} />

      <button type="submit" className="button button-primary">Save Book</button>
    </form>
  );
}
