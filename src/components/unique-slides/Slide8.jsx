import React from 'react';
import { motion } from 'framer-motion';

export default function Slide8({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? '100%' : '-100%', scale: 1.1 }),
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? '100%' : '-100%', scale: 0.9, transition: { duration: 0.5 } })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-cyan-950 flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Animated fluid shapes */}
      <motion.div 
        animate={{ 
          borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-cyan-800/30 blur-3xl -top-40 -right-40"
      />
      <motion.div 
        animate={{ 
          borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-blue-800/30 blur-3xl -bottom-20 -left-20"
      />

      <div className="relative z-10 max-w-4xl bg-cyan-900/40 backdrop-blur-xl border border-cyan-500/30 p-10 md:p-16 rounded-[40px] shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">নিষিক্ত ডিমের পরিস্ফুটন</h2>
          <div className="h-1 w-20 bg-cyan-400 rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="space-y-4 text-cyan-100 text-lg md:text-xl leading-relaxed"
        >
          <p>
            সংগৃহীত নিষিক্ত ডিম ভিন্ন বোতল জারে নেওয়ার পর ডিমের পরিস্ফুটন শুরু হয়। নিষিক্ত ডিম্বাণু হতে <span className="text-white font-bold">২০ থেকে ২৪ ঘন্টা পর</span> ডিম ফুটে রেনু পোনা বের হয়ে আসে।
          </p>
          <p>
            Embryo development এবং ডিম থেকে রেনু পোনা বের হলে লার্ভা development শুরু হয়। এ সময় ধাপে ধাপে লার্ভার বিভিন্ন অঙ্গ-প্রত্যঙ্গ তৈরি হয়। কিন্তু এদের কোন বাইরের খাদ্যের প্রয়োজন হয় না। এ সময় এরা নিজস্ব কুসুম থলি থেকে খাদ্যের যোগান দেয়।
          </p>
          <p className="bg-cyan-800/50 p-4 rounded-xl border border-cyan-500/20 mt-6 inline-block">
            লার্ভা বের হবার ২৪ থেকে ২৫ ঘন্টা পর চোখ, মুখ ও অন্যান্য উপাঙ্গ সম্পূর্ণ হয়।
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
