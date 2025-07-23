import React from 'react';
import '../styles/layout.css';
import '../styles/buttons.css';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item flex space-between">
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
      </div>
      <button className="button button-outline" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}
