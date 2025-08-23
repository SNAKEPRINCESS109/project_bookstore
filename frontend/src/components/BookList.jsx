// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css'; // For grid-3 or similar layout classes
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function BookList({ books, onAddToCart, onAddToWishlist }) {
  // Defensive check: ensure books is an array before mapping
  if (!Array.isArray(books)) {
    console.error("BookList received non-array 'books' prop:", books);
    return null; // Or return a message like "Invalid book data"
  }

  return (
    <div className="grid grid-3"> {/* Assuming 'grid grid-3' provides your book display layout */}
      {books.map(book => (
        <BookCard
          key={book._id || book.key} // Use a unique key, _id is preferred if available
          book={book}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}