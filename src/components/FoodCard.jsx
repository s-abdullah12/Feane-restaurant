"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function FoodCard({ item, layoutId }) {
  const { addToCart } = useCart();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      layoutId={layoutId} 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.9 }} 
      transition={{ duration: 0.4 }} 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card overflow-hidden flex flex-col group h-full cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden" style={{ transform: "translateZ(30px)" }}>
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button onClick={() => addToCart(item)} className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200"><Plus size={18} /> Add to Order</button>
        </div>
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">{item.category}</div>
      </div>
      <div className="p-6 flex flex-col flex-1" style={{ transform: "translateZ(40px)" }}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold pr-4 leading-tight">{item.name}</h3>
          <span className="font-serif text-xl font-bold text-gray-300">${item.price}</span>
        </div>
        <div className="flex items-center gap-1 text-[#DCCA87] text-sm mb-4">★ {item.rating}</div>
        <p className="text-gray-400 text-sm leading-relaxed mt-auto">{item.description}</p>
      </div>
    </motion.div>
  );
}
