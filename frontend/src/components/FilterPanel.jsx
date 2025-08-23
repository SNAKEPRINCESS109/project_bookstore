import React from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function FilterPanel({ categories, selected, onSelect }) {
  return (
    <aside style={{ minWidth: '200px' }}>
      <h4>Filter by Category</h4>
      <ul>
        {categories.map(cat => (
          <li className="book-filter" key={cat}>
            <label>
              {cat}
            </label>
            <input
                type="checkbox"
                checked={selected.includes(cat)}
                onChange={() => onSelect(cat)}
              />
            
          </li>
        ))}
      </ul>
    </aside>
  );
}
