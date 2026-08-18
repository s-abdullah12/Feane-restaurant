"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, ChefHat, Clock, Sparkles } from 'lucide-react';
export default function WhyFeane() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const features = [
    { icon: <Leaf size={32} />, title: "Fresh Ingredients", description: "Quality ingredients selected every day to ensure the best flavors." },
    { icon: <ChefHat size={32} />, title: "Expert Chefs", description: "Thoughtfully crafted dishes from experienced culinary masters." },
    { icon: <Clock size={32} />, title: "Fast Service", description: "A seamless dining experience from order to table without the wait." },
    { icon: <Sparkles size={32} />, title: "Memorable Atmosphere", description: "Designed around great food, stunning aesthetics, and perfect moments." }
  ];
  return (
    <section className="py-24 bg-feane-bg relative" id="features" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">The Feane Difference</span>
          <h2 className="font-serif text-4xl md:text-5xl">Why Choose Us</h2>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="glass-card p-8 flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">{feature.icon}</div>
              <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
