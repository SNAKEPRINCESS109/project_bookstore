import React from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function SearchBar({ query, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={e => onSearch(e.target.value)}
    />
  );
}
