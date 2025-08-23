import React from "react";
import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/buttons.css";
import "../styles/forms.css";
import "../styles/theme.css";

export default function BookCard({
  book,
  onAddToCart,
  onAddToWishlist,
  noInteraction,
}) {
  function calcDiscount(price) {
    const discount = (price * 90) / 100;

    return discount.toFixed(2);
  }
  return (
    <div className="book-grid">
      <div className="book-card">
        <div className="image-wrapper">
          <img src={book.cover_i} alt={book.title} />
        </div>

        <div className="book-info">
          <h3 className="title">{book.title}</h3>
          <p className="author">by {book.author_name?.join(", ")}</p>
          <p className="price">
            <span className="discounted">{calcDiscount(book.price)}</span>
            <span className="original">{book.price}</span>
          </p>
          {!noInteraction && (
            <div className="button-group">
              <button
                className="button button-primary"
                onClick={() => onAddToCart(book)}
              >
                🛒 Add to Cart
              </button>
              <button
                className="button button-secondary"
                onClick={() => onAddToWishlist(book)}
              >
                ❤️ Wishlist
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
