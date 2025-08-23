import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();
const WISHLIST_KEY = "bookstore_wishlist";

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    setWishlist(prev => [...prev, item]);
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
