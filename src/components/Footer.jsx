import React from 'react';
import '../styles/layout.css';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <p>© {new Date().getFullYear()} BookVerse. All rights reserved.</p>
      <p>Made with ❤️ by Krisanu Samanta</p>
    </footer>
  );
}
