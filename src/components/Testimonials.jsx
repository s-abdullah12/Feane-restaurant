"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { id: 1, name: "Sarah Jenkins", role: "Food Critic", text: "The attention to detail at FEANE is simply unmatched. Every dish is a work of art, perfectly balancing flavors and textures. It's a dining experience that stays with you long after the meal is over.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "Michael Chen", role: "Regular Guest", text: "I've celebrated many special occasions here, and they never fail to impress. The atmosphere is elegant yet welcoming, and the seasonal menu always offers something new and exciting.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { id: 3, name: "Emma Watson", role: "Local Guide", text: "From the moment you walk in, the service is impeccable. The AI dining assistant recommendation was spot on, and the Wagyu Beef Filet is easily the best I've had in the city.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
  ];
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  useEffect(() => { const timer = setInterval(next, 8000); return () => clearInterval(timer); }, []);
  return (
    <section className="py-24 bg-feane-bg relative" id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Guest Experiences</span>
          <h2 className="font-serif text-4xl md:text-5xl">What Our Patrons Say</h2>
        </div>
        <div className="glass-card p-10 md:p-16 relative text-center flex flex-col items-center shadow-2xl">
          <Quote className="text-white/10 w-20 h-20 absolute top-8 left-8" />
          <div className="flex gap-1 text-[#DCCA87] mb-8 relative z-10">{[...Array(testimonials[currentIndex].rating)].map((_, i) => <span key={i} className="text-xl">★</span>)}</div>
          <div className="h-[200px] md:h-[150px] relative w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-serif text-xl md:text-2xl leading-relaxed italic mb-8">&quot;{testimonials[currentIndex].text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 overflow-hidden relative border border-white/20"><Image src={testimonials[currentIndex].avatar} alt="Avatar" fill className="object-cover" /></div>
                  <div className="text-left"><h4 className="font-bold">{testimonials[currentIndex].name}</h4><span className="text-sm text-gray-400">{testimonials[currentIndex].role}</span></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-4 mt-12 relative z-10">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
