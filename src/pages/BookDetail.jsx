// pages/BookDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/layout.css';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    setBook({ id, title: '1984', author: 'George Orwell', description: 'A dystopian novel.', price: 299 });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p>{book.description}</p>
        <p><strong>Price:</strong> ₹{book.price}</p>
      </div>
      <Footer />
    </div>
  );
}