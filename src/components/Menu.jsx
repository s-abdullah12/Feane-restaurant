"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FoodCard from './FoodCard';
import { menuData } from '@/data/menu';
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(menuData.map(item => item.category))];
  const filteredItems = activeCategory === 'All' ? menuData : menuData.filter(item => item.category === activeCategory);
  return (
    <section className="py-24 bg-feane-light relative" id="menu">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Culinary Perfection</span>
          <h2 className="font-serif text-4xl md:text-5xl">Discover Our Menu</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}>{category}</button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => <FoodCard key={item.id} item={item} layoutId={`menu-item-${item.id}`} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
