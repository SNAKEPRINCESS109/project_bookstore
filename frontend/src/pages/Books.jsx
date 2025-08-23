// src/pages/Books.jsx
import React, { useEffect, useState, useContext } from "react";
// Assuming fetchBooks, fetchBookById etc. are indeed in a file named bookService.js
import { fetchBooks } from "../services/bookService";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';


export default function Books() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // New: Loading state
  const [error, setError] = useState(null);   // New: Error state
  const limit = 9;

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null);   // Clear any previous errors
      try {
        const data = await fetchBooks({ page, limit, search: query });
        setBooks(data.books || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error("Failed to load books:", err);
        setError("Failed to load books. Please try again."); // Set user-friendly error message
      } finally {
        setLoading(false); // Set loading to false after fetch completes (success or failure)
      }
    };
    loadBooks();
  }, [page, query]); // Re-run effect when page or query changes

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Books</h1>
        <SearchBar query={query} onSearch={setQuery} />

        {/* Conditional Rendering based on loading/error states */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.5rem', color: '#555' }}>Loading books...</p>
            {/* Optional: Add a CSS spinner here. Example style provided below in CSS section. */}
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
            <button
              onClick={() => {
        
                setPage(1); // Reset page to 1 on retry if desired
                setQuery(""); // Clear search on retry if desired
                // The useEffect will re-run due to page/query change if they reset, triggering loadBooks again
              }}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          </div>
        ) : books.length > 0 ? (
          <BookList
            books={books}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '50px', color: '#777' }}>
            <p>No books found matching your criteria.</p>
          </div>
        )}

        {/* Pagination only shown if not loading and no error, and books exist */}
        {!loading && !error && books.length > 0 && (
          <div className="pagination">
            <button onClick={handlePrev} disabled={page === 1}>Previous</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={handleNext} disabled={page === totalPages}>Next</button>
          </div>
        )}
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}

