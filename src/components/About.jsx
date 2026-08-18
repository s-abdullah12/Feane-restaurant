"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [{ number: "15+", label: "Years Experience" }, { number: "50+", label: "Signature Dishes" }, { number: "10K+", label: "Happy Guests" }];
  return (
    <section className="py-24 bg-feane-light" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="flex flex-col" initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8 }}>
            <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">A Legacy of Taste</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">For over a decade, we have been dedicated to the art of fine dining. What started as a small passion project has evolved into a culinary landmark, where every dish tells a story of tradition, innovation, and uncompromising quality. We source our ingredients locally and craft every element with precision.</p>
            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-serif text-3xl md:text-4xl font-bold mb-2">{stat.number}</span>
                  <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="font-bold text-lg mb-1">Kevin Luo</p>
                <p className="text-sm text-gray-400">Head Chef & Founder</p>
              </div>
              <div className="relative w-32 h-16 flex items-center">
                <span className="font-serif italic text-2xl text-gray-300">K. Luo</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" alt="Our Chef" fill className="object-cover hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
