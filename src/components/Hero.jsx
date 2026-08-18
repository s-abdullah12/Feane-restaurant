"use client";

"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 w-full h-[120%] -top-[10%]">
        <Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" alt="Background" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-feane-bg pointer-events-none" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-white/30 block"></span>
            <span className="text-sm tracking-[0.2em] uppercase text-gray-300 font-semibold">Welcome to Feane</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6">Good Food.<br /><span className="italic text-gray-400">Great Moments.</span></motion.h1>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg md:text-xl max-w-md mb-10 leading-relaxed">Discover a modern dining experience where bold flavors, fresh ingredients, and unforgettable moments come together.</motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <MagneticButton href="#menu" className="bg-white text-black px-8 py-4 rounded-full font-bold text-center transition-colors hover:bg-gray-200 inline-block">Explore Menu</MagneticButton>
            <MagneticButton href="#reservation" className="glass px-8 py-4 rounded-full font-bold text-center border border-white/20 transition-colors hover:bg-white/10 inline-block">Reserve a Table</MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] mx-auto z-10" initial={{ opacity: 0, scale: 0.9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}>
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-gray-800">
            <motion.div className="w-full h-full relative" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" alt="Premium Dining Experience" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </motion.div>
          </div>
          <motion.div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-4 shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} whileHover={{ y: -5, scale: 1.05 }}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">4.9</div>
            <div>
              <p className="text-sm text-gray-300">Customer Rating</p>
              <div className="flex gap-1 text-[#DCCA87]">★★★★★</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
