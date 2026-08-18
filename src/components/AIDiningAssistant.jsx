"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, Bot, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { searchMenu } from '@/data/menu';
export default function AIDiningAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: "Hello! I'm your personal dining assistant. What kind of flavors are you looking for today?" }]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { addToCart } = useCart();
  const suggestedPrompts = ["Recommend something spicy", "What is good for vegetarians?", "I want something under $20", "Recommend a dessert"];
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);
  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const recommendations = searchMenu(text);
      let aiText = recommendations.length > 0 ? `Based on your request, I've found some excellent options for you. I highly recommend the ${recommendations[0].name}.` : "I couldn't find an exact match for that, but how about checking out our Chef's Signature dishes?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText, recommendations: recommendations.slice(0, 3) }]);
    }, 1500);
  };
  return (
    <section className="py-24 bg-feane-light relative overflow-hidden" id="ai-assistant">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6"><Sparkles size={16} className="text-[#DCCA87]" /> AI-Powered Dining Experience</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Meet Your Dining Assistant</h2>
          <p className="text-gray-400">Let our AI curate your perfect meal</p>
        </div>
        <div className="glass-card overflow-hidden flex flex-col shadow-2xl border border-white/10">
          <div className="p-6 md:p-8 h-[400px] md:h-[450px] overflow-y-auto flex flex-col gap-6 scrollbar-none">
            {messages.map((msg, idx) => (
              <motion.div key={idx} className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {msg.role === 'ai' && <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20"><Bot size={20} className="text-white" /></div>}
                <div className="flex flex-col gap-3">
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black rounded-tr-none' : 'bg-white/5 border border-white/10 text-white rounded-tl-none'}`}>{msg.text}</div>
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="flex flex-col gap-3 mt-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Recommended for you</span>
                      <div className="flex flex-col gap-3">
                        {msg.recommendations.map(rec => (
                          <div key={rec.id} className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"><Image src={rec.image} alt={rec.name} fill className="object-cover" /></div>
                            <div className="flex-1"><h4 className="font-semibold text-sm">{rec.name}</h4><p className="font-serif font-bold text-[#DCCA87] mt-1">${rec.price}</p></div>
                            <button onClick={() => addToCart(rec)} className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-200">Add</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div className="flex gap-4 max-w-[80%] self-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20"><Bot size={20} className="text-white" /></div>
                <div className="p-4 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 text-white flex items-center gap-3"><Loader2 size={16} className="animate-spin text-gray-400" /><span className="text-sm text-gray-400">AI is thinking...</span></div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-black/40 border-t border-white/10">
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none mask-image-linear-right">
              {suggestedPrompts.map((prompt, idx) => (
                <button key={idx} onClick={() => handleSend(prompt)} disabled={isTyping} className="whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 flex-shrink-0">{prompt}</button>
              ))}
            </div>
            <form className="flex gap-3 relative" onSubmit={(e) => { e.preventDefault(); handleSend(input); }}>
              <input type="text" placeholder="Ask for recommendations..." value={input} onChange={(e) => setInput(e.target.value)} disabled={isTyping} className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors" />
              <button type="submit" disabled={!input.trim() || isTyping} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-50 disabled:bg-white/20 hover:scale-105 transition-all"><Send size={18} /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
