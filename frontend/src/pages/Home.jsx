// pages/Home.jsx
import React, { useState, useEffect } from 'react'; // Removed useContext
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/bookService';
// REMOVED CartContext and WishlistContext imports as they are not needed for carousel BookCards
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";

// Import your styles
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';
import '../styles/home.css';


export default function Home() {
  const [allBooks, setAllBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // REMOVED useContext hooks for CartContext and WishlistContext as they are not used here
  // const { addToCart } = useContext(CartContext);
  // const { addToWishlist } = useContext(WishlistContext);


  useEffect(() => {
    const getAllBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBooks({ page: 1, limit: 1000 });
        if (Array.isArray(data.books) && data.books.length > 0) {
          setAllBooks(data.books);
        } else {
          setAllBooks([]);
        }
      } catch (err) {
        console.error("Failed to fetch all books for carousel:", err);
        setError("Could not load featured books. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getAllBooks();
  }, []);


  useEffect(() => {
    if (allBooks.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % allBooks.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [allBooks.length]);


  const getVisibleBooks = () => {
    if (allBooks.length === 0) return [];
    if (allBooks.length === 1) return [allBooks[0]];
    if (allBooks.length === 2) {
      return [allBooks[currentIndex], allBooks[(currentIndex + 1) % allBooks.length]];
    }

    const prevIndex = (currentIndex - 1 + allBooks.length) % allBooks.length;
    const nextIndex = (currentIndex + 1) % allBooks.length;

    return [allBooks[prevIndex], allBooks[currentIndex], allBooks[nextIndex]];
  };

  const visibleBooks = getVisibleBooks();

  const getBookWrapperClass = (indexInVisibleBooks) => {
    if (visibleBooks.length === 0) return '';
    if (visibleBooks.length === 1) return 'center-book';
    if (visibleBooks.length === 2) {
      if (indexInVisibleBooks === 0) return 'center-book';
      if (indexInVisibleBooks === 1) return 'side-book';
    }

    // For 3 or more books
    if (indexInVisibleBooks === 0) return 'side-book side-book-left';
    if (indexInVisibleBooks === 1) return 'center-book';
    if (indexInVisibleBooks === 2) return 'side-book side-book-right';
    return '';
  };


  return (
    <div >
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1 classsName='h1'>Welcome to "The Owl’s Library"</h1>
          <p className='p'>
            Your cozy corner on the web for discovering, Browse, and buying books you’ll love.
            Whether you’re a casual reader or a devoted bookworm, we make it easy to explore a hand-picked collection,
            manage your cart, and check out securely. Admins can even add or manage books behind the scenes.
            It's like your favorite bookshop, but smarter, faster, and open 24/7.
          </p>
          <p className="p">“Books for every chapter of your life.”</p>
        </div>
      </section>

      <section className="book-carousel-section">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Featured Books</h2>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>Loading featured books...</p>
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
          </div>
        ) : allBooks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px', color: '#777' }}>
            <p>No featured books available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="carousel-container">
              {visibleBooks.map((book, index) => (
                <div
                  key={book._id || `book-${index}`}
                  className={`carousel-book-wrapper ${getBookWrapperClass(index)}`}
                >
                  <BookCard
                    book={book}
                    noInteraction={true}
                  />
                </div>
              ))}
            </div>
            {/* Carousel Indicator Dots */}
            {allBooks.length > 1 && (
                <div className="carousel-indicator-dots">
                    {allBooks.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        ></span>
                    ))}
                </div>
            )}
          </>
        )}
      </section>

      <div className="container text-center" style={{ paddingBottom: 'var(--space-xl)', paddingTop: 'var(--space-lg)' }}>
        <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)' }}>Ready to explore our full collection?</p>
        <Link to="/books" className="button button-primary">Let's get started</Link>
      </div>

      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}