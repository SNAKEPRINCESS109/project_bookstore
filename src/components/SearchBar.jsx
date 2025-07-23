import React from 'react';
import '../styles/forms.css';

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
