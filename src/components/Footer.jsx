"use client";
import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col">
            <Link href="/" className="font-serif text-3xl font-bold tracking-wide mb-6 block">FEANE<span className="text-gray-500">.</span></Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">Discover a modern dining experience where exceptional flavors, thoughtful design, and unforgettable moments come together.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#menu" className="text-gray-400 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="#reservation" className="text-gray-400 hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors" />
              <button type="submit" className="bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FEANE. All Rights Reserved.</p>
          <p>Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
