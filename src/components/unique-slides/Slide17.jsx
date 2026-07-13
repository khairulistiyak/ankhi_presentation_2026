import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Info, ChevronRight, Activity } from 'lucide-react';

const RealisticSyringe = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
    <defs>
      <linearGradient id="glassBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
        <stop offset="40%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
      </linearGradient>
      <linearGradient id="liquidBlue" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <filter id="glowSyringe">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Needle */}
    <rect x="49" y="5" width="2" height="20" fill="#94a3b8" />
    <motion.rect 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      x="49" y="0" width="2" height="5" fill="#22d3ee" filter="url(#glowSyringe)" 
    />
    
    {/* Needle Base */}
    <rect x="46" y="25" width="8" height="5" rx="2" fill="#334155" />
    
    {/* Syringe Body/Barrel */}
    <rect x="35" y="30" width="30" height="45" rx="4" fill="url(#glassBar)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
    
    {/* Measurement lines */}
    <rect x="35" y="35" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="45" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="55" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="65" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    
    {/* Animated Liquid */}
    <motion.rect 
      animate={{ y: [0, 20, 0], height: [40, 20, 40] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="37" y="32" width="26" height="40" rx="2" fill="url(#liquidBlue)" filter="url(#glowSyringe)" 
    />
    
    {/* Animated Plunger Rubber */}
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="36" y="32" width="28" height="6" rx="1" fill="#0f172a" 
    />
    
    {/* Animated Plunger Stem */}
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="47" y="75" width="6" height="25" fill="rgba(255,255,255,0.4)" 
    />
    
    {/* Animated Plunger Handle */}
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="30" y="95" width="40" height="4" rx="2" fill="#334155" 
    />

    {/* Body Rim at the bottom */}
    <rect x="30" y="73" width="40" height="4" rx="2" fill="rgba(255,255,255,0.8)" />
  </svg>
);

export default function Slide17({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, transition: { duration: 0.6 } })
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#040914] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center h-full">
        
        {/* Left Interactive Photo / SVG Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 h-[350px] lg:h-full relative rounded-[3rem] overflow-hidden border border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,0.1)] group bg-slate-900"
        >
          {/* Animated SVG Design for Injection */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            {/* Background glowing radar/circles */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] border border-cyan-500/30 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-[200px] h-[200px] border border-blue-500/40 rounded-full"
            ></motion.div>

            {/* Central Syringe */}
            <div className="relative z-10 p-6 bg-slate-900/50 rounded-full backdrop-blur-md border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <RealisticSyringe />
            </div>

            {/* Floating Energy Particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -200], 
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
                style={{ top: '70%', left: '48%' }}
              ></motion.div>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase mb-4 text-xs">
              <Activity className="w-4 h-4" />
              <span>পিজি পুশ প্রক্রিয়া</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
              ইনজেকশন প্রয়োগ
            </h2>
            <p className="text-cyan-200/80">নির্ধারিত মাত্রায় হরমোন দ্রবণ তৈরি করে মাছে প্রয়োগ করা হয়।</p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#040914] via-transparent to-[#040914]/40 z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none mix-blend-screen z-0"></div>
        </motion.div>

        {/* Right Info Cards */}
        <motion.div 
          variants={staggerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:w-7/12 flex flex-col gap-6 justify-center"
        >
          {/* Female Fish Card */}
          <motion.div 
            variants={cardVariants}
            className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-8 flex items-start gap-6 relative overflow-hidden group hover:border-rose-400/50 transition-colors shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(243,114,118,0.15)] group-hover:scale-110 transition-transform">
              <Syringe className="w-8 h-8 text-rose-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white">স্ত্রী মাছ</h3>
                <span className="bg-rose-500/20 text-rose-300 text-xs font-bold px-2 py-1 rounded-md border border-rose-500/30">২টি ডোজ</span>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-rose-500/20 p-1 rounded-full"><ChevronRight className="w-4 h-4 text-rose-400"/></div>
                  <p className="text-slate-300"><strong className="text-white font-semibold">প্রথম ডোজ:</strong> মোট নির্ধারিত পিজির তিন ভাগের এক ভাগ (১/৩ অংশ) পুশ করা হয়।</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-rose-500/20 p-1 rounded-full"><ChevronRight className="w-4 h-4 text-rose-400"/></div>
                  <p className="text-slate-300"><strong className="text-white font-semibold">দ্বিতীয় ডোজ:</strong> প্রথম ডোজের ৬ ঘণ্টা পর অবশিষ্ট দুই ভাগ (২/৩ অংশ) পুশ করা হয়।</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Male Fish Card */}
          <motion.div 
            variants={cardVariants}
            className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 flex items-start gap-6 relative overflow-hidden group hover:border-blue-400/50 transition-colors shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform">
              <Syringe className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white">পুরুষ মাছ</h3>
                <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-2 py-1 rounded-md border border-blue-500/30">১টি ডোজ</span>
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed">
                স্ত্রী মাছকে যখন দ্বিতীয় ডোজ দেওয়া হয়, ঠিক সেই সময়েই পুরুষ মাছকে সম্পূর্ণ ডোজ একবারে পুশ করা হয়।
              </p>
            </div>
          </motion.div>

          {/* Note Card */}
          <motion.div 
            variants={cardVariants}
            className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
            <Info className="w-6 h-6 text-emerald-400 shrink-0" />
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              ইনজেকশন সাধারণত মাছের পৃষ্ঠদেশের মাংসপেশিতে বা বক্ষপাখনার নিচে পুশ করা হয়, যাতে মাছ কম আঘাত পায়।
            </p>
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
}
