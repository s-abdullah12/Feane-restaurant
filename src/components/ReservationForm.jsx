"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
export default function ReservationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => setIsSubmitted(false), 5000); };
  return (
    <section className="py-24 relative overflow-hidden" id="reservation" ref={ref}>
      <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0" style={{ filter: 'brightness(0.4)', backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')" }} />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div className="glass-card p-10 md:p-14 border border-white/10 shadow-2xl bg-black/40" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-10">
            <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Reserve Your Table</span>
            <h2 className="font-serif text-4xl md:text-5xl">Make Your Next Meal Memorable</h2>
          </div>
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center justify-center py-16 text-center h-[400px]">
                <CheckCircle size={64} className="text-[#DCCA87] mb-6" />
                <h3 className="text-2xl font-bold mb-2">Reservation Request Received</h3>
                <p className="text-gray-400">We will confirm your table shortly via email.</p>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Name</label><input type="text" required placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Email</label><input type="email" required placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Phone</label><input type="tel" required placeholder="+1 (555) 000-0000" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Date</label><input type="date" required className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors [color-scheme:dark]" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Time</label><input type="time" required className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors [color-scheme:dark]" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Guests</label>
                    <select required className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                      <option value="1" className="bg-feane-bg text-white">1 Person</option><option value="2" className="bg-feane-bg text-white">2 People</option><option value="3" className="bg-feane-bg text-white">3 People</option><option value="4" className="bg-feane-bg text-white">4 People</option><option value="5" className="bg-feane-bg text-white">5+ People</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2"><label className="text-xs uppercase tracking-wider text-gray-400 font-semibold pl-1">Special Requests (Optional)</label><input type="text" placeholder="Allergies, special occasions..." className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" /></div>
                </div>
                <button type="submit" className="mt-6 bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors w-full shadow-lg">Reserve My Table</button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
