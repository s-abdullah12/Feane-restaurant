"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
export default function Cart() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={() => setIsCartOpen(false)} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-feane-light border-l border-white/10 shadow-2xl z-[70] flex flex-col">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-feane-bg">
              <h2 className="font-serif text-2xl">Your Order</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4">
                  <p>Your cart is empty.</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors">Continue Browsing</button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} key={item.id} className="flex gap-4 p-4 glass-card">
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm pr-4">{item.name}</h4>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-3 bg-black/40 rounded-full px-2 py-1 border border-white/10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-gray-300"><Minus size={14} /></button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-gray-300"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-400 transition-colors p-2"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 bg-feane-bg border-t border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-serif text-2xl font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-white text-black py-4 rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300">Checkout</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
