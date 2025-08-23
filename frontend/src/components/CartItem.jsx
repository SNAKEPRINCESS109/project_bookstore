import React from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';

export default function CartItem({ item, onRemove }) {
  console.log(item._id);
  return (
    <div className="cart-item flex space-between">
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
      </div>
      <button className="button button-outline" onClick={() => onRemove(item._id)}>
        Remove
      </button>
    </div>
  );
}
