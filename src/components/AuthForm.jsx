import React, { useState } from 'react';
import '../styles/forms.css';
import '../styles/buttons.css';

export default function AuthForm({ onSubmit, type = 'login' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ email, password }); }}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="••••••••"
        required
      />

      <button type="submit" className="button button-primary">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
}
