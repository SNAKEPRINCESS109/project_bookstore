// pages/Cart.jsx
import React from 'react';
import CartItem from '../components/CartItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/layout.css';

export default function Cart() {
  const cartItems = [];
  const removeFromCart = (id) => console.log('Remove item:', id);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
          cartItems.map(item => <CartItem key={item.id} item={item} onRemove={removeFromCart} />)
        )}
      </div>
      <Footer />
    </div>
  );
}