"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedDishes } from '@/data/menu';
import { useCart } from '@/context/CartContext';
export default function FeaturedDishes() {
  const featured = getFeaturedDishes();
  const mainFeature = featured[0];
  const { addToCart } = useCart();
  if (!mainFeature) return null;
  return (
    <section className="py-24 bg-feane-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div className="lg:col-span-7 relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <Image src={mainFeature.image} alt={mainFeature.name} fill className="object-cover hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 60vw" />
            <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg">Chef&apos;s Signature</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>
          <motion.div className="lg:col-span-5 flex flex-col justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Featured From Our Kitchen</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">{mainFeature.name}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{mainFeature.description}. Handcrafted with premium ingredients, locally sourced and perfectly balanced to create a true symphony of earthy flavors.</p>
            <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/10">
              <div><span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Price</span><span className="font-serif text-2xl font-bold">${mainFeature.price}</span></div>
              <div><span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Rating</span><span className="font-serif text-2xl font-bold text-[#DCCA87]">★ {mainFeature.rating}</span></div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => addToCart(mainFeature)} className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">Order Now</button>
              <Link href="#menu" className="glass border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-center">View Menu</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
