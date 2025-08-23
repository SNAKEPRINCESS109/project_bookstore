import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

// IMPORTANT: Import your specific images.
// If using 'public' folder:
// (No imports needed here, use direct paths like '/assets/your-image.png')

// If using 'src/assets' folder (recommended for bundling/optimization):
// import travelerImageRegister from '../assets/your-traveler-image-register.png'; // Make sure you have this image in src/assets
// import googleIcon from '../assets/google-icon.png';
// import appleIcon from '../assets/apple-icon.png';


export default function AuthForm({ onSubmit, type = 'login' }) { // Set default type to 'register' for this file
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-wrapper"> {/* Main container for the two-column layout */}
      <div className="form-image"> {/* Left column: Image and Branding for Registration */}
        {/*
          IMPORTANT:
          - If using 'public' folder, change src to: `/assets/your-traveler-image-register.png`
          - If using 'src/assets' (as shown), ensure `travelerImageRegister` is imported correctly.
        */}
        <img alt="Traveler for Registration" />

        <div className="brand-text">The Owl,s Library</div> {/* Branding text */}
        <div className="slogan-text">
          Read better, shop smarter — only at The Owl’s Library.
        </div>
        {/* Add any other decorative elements or text if they are part of your image section */}
      </div>

      <div className="form-container"> {/* Right column: The actual form */}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit({ username, email, password }); }}>
          <h2>Welcome</h2> {/* Heading for the form side */}

          {/* Username field (typically for registration) */}
          <label className="label">Username</label>
          <input
            className="input" // Using the .input class from forms.css
            type="text" // Changed type to "text" for username input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="user123"
            required
          />

          <label className="label">Email</label>
          <input
            className="input" // Using the .input class from forms.css
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email ID" // Placeholder updated for registration context
            required
          />

          <label className="label">Password</label>
          <input
            className="input" // Using the .input class from forms.css
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {/* Forgot password link - less common on registration, but kept if you need it */}
          <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
            <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Forgot password?</a>
          </div>

          <button type="submit" className="button"> {/* Using the base .button class */}
            Register {/* Always 'Register' for this specific file */}
          </button>

          {/* "OR" separator */}
          <div style={{ textAlign: 'center', margin: '1.5rem 0', color: '#ccc', fontSize: '0.85rem' }}>OR</div>

          {/* Social Login Buttons */}
          <div className="social-login">
            <button type="button" className="social-button">
              {/* If using 'public' folder, change src to: `/assets/google-icon.png` */}
              <img alt="Google icon" /> Login with Google
            </button>
            <button type="button" className="social-button">
              {/* If using 'public' folder, change src to: `/assets/apple-icon.png` */}
              <img  alt="Facebook icon" /> Login with Facebook
            </button>
          </div>

          {/* "Already have an account?" text for registration form */}
          <div className="form-footer-text">
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}