"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "MICHELIN STAR EXPERIENCES • ORGANIC INGREDIENTS • WORLD CLASS CHEFS • SIGNATURE COCKTAILS • ";
  return (
    <div className="w-full bg-[#DCCA87] text-black py-4 overflow-hidden flex whitespace-nowrap border-y border-[#DCCA87]/50 relative z-10 shadow-[0_0_20px_rgba(220,202,135,0.2)]">
      <motion.div
        className="flex gap-4 font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
