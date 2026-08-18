"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'AI Assistant', href: '#ai-assistant' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          FEANE<span className="text-gray-400">.</span>
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <button className="relative text-gray-300 hover:text-white transition-colors" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={24} />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <Link href="#reservation" className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300">
            Reserve Table
          </Link>
          <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full glass border-t border-white/10 p-6 md:hidden">
            <ul className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-lg font-medium text-gray-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link></li>
              ))}
              <li><Link href="#reservation" className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold mt-4 block" onClick={() => setIsMobileMenuOpen(false)}>Reserve Table</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
