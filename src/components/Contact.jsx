"use client";
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export default function Contact() {
  return (
    <section className="py-24 bg-feane-bg relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <span className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4 block">Visit Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-12">Get In Touch</h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#DCCA87]"><MapPin size={20} /></div><div><h4 className="font-bold text-lg mb-1">Location</h4><p className="text-gray-400">123 Culinary Avenue<br />Food District, NY 10001</p></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#DCCA87]"><Phone size={20} /></div><div><h4 className="font-bold text-lg mb-1">Reservations</h4><p className="text-gray-400">+1 (555) 123-4567<br />reservations@feane.com</p></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#DCCA87]"><Clock size={20} /></div><div><h4 className="font-bold text-lg mb-1">Opening Hours</h4><p className="text-gray-400">Mon - Fri: 11:00 AM - 10:00 PM<br />Sat - Sun: 10:00 AM - 11:00 PM</p></div></div>
            </div>
          </div>
          <div className="h-[400px] lg:h-[500px] w-full glass-card overflow-hidden relative group border border-white/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 bg-feane-light" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/20">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black mb-6 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce"><MapPin size={28} /></div>
              <h3 className="text-2xl font-bold mb-2">Find Us on the Map</h3>
              <p className="text-gray-400 max-w-xs">Interactive map integration placeholder for production environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
