import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/layout.css';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar flex space-between container">
      <Link to="/" className="logo">📚 BookVerse</Link>
      <div className="flex gap-md">
        <Link to="/books">Books</Link>
        {user && (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            {user.role === 'admin' && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="button button-outline">Logout</button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
