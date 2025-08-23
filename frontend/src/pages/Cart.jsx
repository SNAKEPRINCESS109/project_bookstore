import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCart } from "../services/cartService";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/layout.css';
import '../styles/theme.css';
import '../styles/cart_wishlist.css';

export default function Cart() {
  const { removeFromCart, cart } = useContext(CartContext);
 // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const items = getCart();
  //   console.log("Cart items:", items); // ✅ Useful for debugging
  //   setCartItems(items);
  // }, []);

  const handleRemove = (_id) => {
    removeFromCart(_id);
    console.log(_id);
    //setCartItems(getCart());
  };
 console.log(cart);
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="page-title">🛒 Your Cart</h1>
        {cart.length === 0 ? (
          <p className="empty-text">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cart.map((item, index) => (
              <CartItem
                key={item._id || `${item.title}-${index}`} // ✅ Unique fallback key
                item={item}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
      <div style={{height: "5px"}}></div>
    </div>
  );
}
