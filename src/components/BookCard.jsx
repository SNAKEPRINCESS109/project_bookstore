import React from 'react';
import '../styles/layout.css';
import '../styles/buttons.css';

export default function BookCard({ book, onAddToCart }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>₹{book.price}</p>
      <button className="button button-primary" onClick={() => onAddToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
}
