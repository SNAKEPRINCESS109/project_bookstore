import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function Unauthorized() {
  return (
    <div>
      <Navbar />
      <div className="container text-center" style={{ padding: '4rem 1rem' }}>
        <h1>🚫 Unauthorized Access</h1>
        <p>You don’t have permission to view this page.</p>
        <Link to="/" className="button button-primary">Go Home</Link>
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}
