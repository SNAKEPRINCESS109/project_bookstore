const CART_KEY = "bookstore_cart";

// Get cart from localStorage
export const getCart = () => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// Save cart to localStorage
export const saveCart = (cartItems) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};

// Add item to cart (no duplicates by _id, assign internal id if needed)
export const addToCart = (item) => {
  const cart = getCart();
  console.log(cart);

  // Prevent duplicate entries by _id
  const alreadyInCart = cart.some(cartItem => cartItem._id === item._id);
  if (alreadyInCart) return;

  // Ensure a unique internal ID for React key and removal
  const itemWithInternalId = {
    ...item,
    id: `${item._id}-${Date.now()}-${Math.random()}`
  };

  cart.push(itemWithInternalId);
  saveCart(cart);
};

// Remove item from cart by internal `id`
export const removeFromCart = (_id) => {
  const updatedCart = getCart().filter(item => item._id !== _id);
  console.log(updatedCart);
  saveCart(updatedCart);
};

// Clear the entire cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
