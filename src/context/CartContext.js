"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };
  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id, amount) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id) {
        const newQuantity = i.quantity + amount;
        return newQuantity > 0 ? { ...i, quantity: newQuantity } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  if (!mounted) return null;
  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartTotal, itemCount, isCartOpen, setIsCartOpen }}>{children}</CartContext.Provider>;
};
