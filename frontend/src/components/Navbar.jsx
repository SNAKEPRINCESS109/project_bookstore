import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';
import '../styles/navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar flex space-between">
      <Link to="/" className="logo">📚 Library</Link>
      <div className="flex gap-md">
        <Link to="/books"><span>📖 </span> Books</Link>
        {user && (
          <>
            <Link to="/cart"><span>🛒</span> Cart</Link>
            <Link to="/wishlist"><span>📝</span> Wishlist</Link>
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
