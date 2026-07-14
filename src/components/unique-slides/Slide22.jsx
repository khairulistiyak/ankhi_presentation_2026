import React from 'react';
import { motion } from 'framer-motion';

const Slide22 = () => {
  const warnings = [
    {
      id: "১",
      title: "বৈজ্ঞানিক পরিচর্যা",
      text: "ব্রুড মাছের পরিচর্যা ও স্বাস্থ্যবিধি সম্পূর্ণ বৈজ্ঞানিক ও টেকনিক্যাল সূত্র মেনে করতে হবে।",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      id: "২",
      title: "খাবার নিয়ন্ত্রণ",
      text: "প্রজনন হাপায় বা ট্যাংকে রাখার পর ব্রুড মাছকে অতিরিক্ত খাবার দেওয়া যাবে না; এতে পানির গুণাগুণ নষ্ট হতে পারে।",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    },
    {
      id: "৩",
      title: "শব্দদূষণ রোধ",
      text: "হ্যাচারি প্রাঙ্গণে বা ট্যাংকের আশেপাশে কোনো রকম শোরগোল বা শব্দ করা যাবে না (মাছ যেন শান্ত থাকে)।",
      icon: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z m7.414-8a4 4 0 010 10m2.828-12a8 8 0 010 14"
    },
    {
      id: "৪",
      title: "সঠিক বিন্যাস",
      text: "একই হরমোন বা একই মাত্রার ইনজেকশন দেওয়া ব্রুড মাছগুলোকে কাছাকাছি বা একই ট্যাংকে সতর্কতার সাথে রাখতে হবে।",
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
    },
    {
      id: "৫",
      title: "জীবাণুমুক্ত পরিবেশ",
      text: "প্রজনন ট্যাংক ও হ্যাচিং জার সবসময় জীবাণুমুক্ত ও পরিষ্কার রাখতে হবে এবং কঠোর রোগ প্রতিরোধ ব্যবস্থা বজায় রাখতে হবে।",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      id: "৬",
      title: "সঠিক পরিমাপ",
      text: "মাছের ওজন অনুযায়ী ইনজেকশনের পানির (দ্রবণের) সঠিক পরিমাপ নিশ্চিত করতে হবে।",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    },
    {
      id: "৭",
      title: "পানির গুণাগুণ",
      text: "প্রজনন ও হ্যাচিংয়ের সময় পানির তাপমাত্রা, দ্রবীভূত অক্সিজেন এবং পিএইচ (pH) প্রতিনিয়ত পর্যবেক্ষণ ও নিয়ন্ত্রণ করতে হবে।",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-8 bg-slate-50 dark:bg-[#040810] relative overflow-hidden justify-center items-center">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-red-500/10 dark:bg-rose-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/10 dark:bg-amber-600/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Top Header Row */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between mb-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold mb-3 uppercase tracking-wider backdrop-blur-md">
            সতর্কতা ও ব্যবস্থাপনা
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-2 leading-tight">
            প্রজননের <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 pb-1">সতর্কতা</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            রেণু পোনা লালন-পালন সংক্রান্ত গুরুত্বপূর্ণ নির্দেশনা
          </p>
        </motion.div>

        {/* Small Meaningful SVG Top Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex relative w-24 h-24 items-center justify-center"
        >
          <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="smallShield" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="none" className="stroke-rose-500/20" strokeWidth="2" strokeDasharray="10 5">
              <animateTransform attributeName="transform" type="rotate" values="0 100 100; 360 100 100" dur="20s" repeatCount="indefinite" />
            </circle>
            <path d="M 100 20 L 160 40 L 160 90 C 160 140, 120 170, 100 180 C 80 170, 40 140, 40 90 L 40 40 Z" fill="url(#smallShield)" />
            <path d="M 100 50 L 100 150 M 50 100 L 150 100" stroke="white" strokeWidth="15" strokeLinecap="round" opacity="0.8" />
          </svg>
        </motion.div>
      </div>

      {/* Grid of 7 Points - Ultra Compact */}
      <div className="w-full max-w-7xl z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {warnings.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`p-4 md:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-rose-100 dark:border-rose-900/40 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group relative overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
          >
            {/* Hover highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-500/5 dark:to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white leading-tight">
                {item.id}. {item.title}
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed relative z-10">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Slide22;
