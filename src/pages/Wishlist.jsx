// pages/Wishlist.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/layout.css';

export default function Wishlist() {
  const wishlist = [];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Your Wishlist</h1>
        {wishlist.length === 0 ? <p>No items in wishlist.</p> : (
          wishlist.map((item, index) => <div key={index}>{item.title}</div>)
        )}
      </div>
      <Footer />
    </div>
  );
}
