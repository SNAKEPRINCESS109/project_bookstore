import React from 'react';
import BookCard from './BookCard';
import '../styles/layout.css';

export default function BookList({ books, onAddToCart }) {
  return (
    <div className="grid grid-3">
      {books.map(book => (
        <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
