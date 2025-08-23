// pages/Checkout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Checkout</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Address</label>
          <input type="text" placeholder="Your Address" />
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
          <button className="button button-primary" type="submit">Place Order</button>
        </form>
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}
