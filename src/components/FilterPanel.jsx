import React from 'react';
import '../styles/forms.css';

export default function FilterPanel({ categories, selected, onSelect }) {
  return (
    <aside style={{ minWidth: '200px' }}>
      <h4>Filter by Category</h4>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(cat)}
                onChange={() => onSelect(cat)}
              />{' '}
              {cat}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
