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


export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="container text-center" style={{ padding: '4rem 1rem' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="button button-primary">Back to Home</Link>
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}
