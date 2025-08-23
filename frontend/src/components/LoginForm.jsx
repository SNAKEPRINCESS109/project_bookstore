import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function LoginForm({ onSubmit, type = 'login' }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="form-wrapper"> {/* Main container for the two-column layout */}
      <div className="form-image"> {/* Left column: Image and Branding */}
        
        <img height={"100%"} width={"100%"} src="/assets/reading.jpg" alt="Traveler" />

        <div className="brand-text">The Owl's Library</div> {/* Branding text */}
        <div className="slogan-text">
          “A smarter way to browse, buy, and love books.”
        </div>
        {/* Add any other decorative elements or text if they are part of your image section */}
      </div>

      <div className="form-container"> {/* Right column: The actual form */}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit({ email, password }); }}>
          <h2>Welcome</h2> {/* Heading for the form side */}

          {/* Conditionally render Username field if it's a 'register' type form, or always if needed */}
          {type === 'register' && ( // Assuming username is only for registration
            <>
            </>
          )}

          <label className="label">Email</label>
          <input
            className="input" // Use .input from forms.css
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you_example@gmail.com" // Updated placeholder as per UI image
            required
          />

          <label className="label">Password</label>
          <input
            className="input" // Use .input from forms.css
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••" // Placeholder as per UI image
            required
          />

          {/* Forgot password link */}
          <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
            {/* Inline style for quick demo, consider moving to forms.css */}
            <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Forgot password?</a>
          </div>

          <button type="submit" className="button"> {/* Using the base .button class */}
            {type === 'login' ? 'Login' : 'Register'}
          </button>

          {/* "OR" separator */}
          <div style={{ textAlign: 'center', margin: '1.5rem 0', color: '#ccc', fontSize: '0.85rem' }}>OR</div>

          {/* Social Login Buttons */}
          <div className="social-login">
            <button type="button" className="social-button">
              <img src="/assets/google.jpg" alt="Google" /> Login with Google
            </button>
            <button type="button" className="social-button">
              <img src="/assets/facebook.jpg" alt="Facebook" /> Login with Facebook
            </button>
          </div>

          {/* "Don't have an account?" text */}
          <div className="form-footer-text">
            {type === 'login' ? (
              <>Don't have an account? <a href="#">Register</a></>
            ) : (
              <>Already have an account? <a href="#">Login</a></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}