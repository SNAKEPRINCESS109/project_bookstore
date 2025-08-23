// pages/Wishlist.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/layout.css';
import '../styles/theme.css';
import '../styles/cart_wishlist.css';

export default function Wishlist() {
  const wishlist = [];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="page-title">❤️ Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="empty-text">No items in wishlist.</p>
        ) : (
          <div className="wishlist-list">
            {wishlist.map((item, index) => (
              <div key={index} className="wishlist-item">
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}
