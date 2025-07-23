// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/layout.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <h1>Welcome to BookVerse</h1>
        <p>Your one-stop shop for books of every genre.</p>
        <Link to="/books" className="button button-primary">Browse Books</Link>
      </div>
      <Footer />
    </div>
  );
}