import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("bailord-cart")) || []; }
    catch { return []; }
  });

  useEffect(() => localStorage.setItem("bailord-cart", JSON.stringify(cart)), [cart]);

  const addToCart = (product) => {
    setCart(items => {
      const existing = items.find(item => item.id === product.id);
      return existing
        ? items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart(items => quantity <= 0 ? items.filter(item => item.id !== id) : items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id) => setCart(items => items.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  return <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);