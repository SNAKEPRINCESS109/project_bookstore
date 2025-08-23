import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../services/bookService";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';


export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookById(id)
      .then(setBook)
      .catch(() => alert("Book not found"));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p><strong>₹{book.price}</strong></p>
    </div>
  );
}
