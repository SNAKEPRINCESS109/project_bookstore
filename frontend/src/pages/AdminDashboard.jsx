import React, { useEffect, useState } from "react";
import AdminBookForm from "../components/AdminBookForm";
import { fetchBooks, addBook, updateBook, deleteBook } from "../services/bookService";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';


export default function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [editing, setEditing] = useState(null); // current book being edited
  const { user } = useAuth();

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch(() => alert("Failed to load books"));
  }, []);

  const handleAddOrEdit = async (bookData) => {
    try {
      if (editing) {
        const updated = await updateBook(editing._id, bookData, user.token);
        setBooks((prev) =>
          prev.map((b) => (b._id === updated._id ? updated : b))
        );
        alert("Book updated successfully!");
      } else {
        const newBook = await addBook(bookData, user.token);
        setBooks((prev) => [...prev, newBook]);
        alert("Book added successfully!");
      }
      setEditing(null);
    } catch (err) {
      alert("Failed to submit book.");
    }
  };

  const handleEditClick = (book) => {
    setEditing(book);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    try {
      await deleteBook(id, user.token);
      setBooks((prev) => prev.filter((b) => b._id !== id));
      alert("Book deleted.");
    } catch {
      alert("Failed to delete.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Admin Dashboard</h1>

        <div className="book-list">
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book._id}>
                {book.title} — ₹{book.price}
                <button onClick={() => handleEditClick(book)}>✏️</button>
                <button onClick={() => handleDelete(book._id)}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="add-book">
          <h2>{editing ? "Edit Book" : "Add Book"}</h2>
          <AdminBookForm onSubmit={handleAddOrEdit} initialData={editing} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
