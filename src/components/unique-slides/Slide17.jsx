import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Activity, Clock, Info, ChevronRight } from 'lucide-react';

const RealisticSyringe = () => (
  <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
    <defs>
      <linearGradient id="glassBar17" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
        <stop offset="40%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
      </linearGradient>
      <linearGradient id="liquidBlue17" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <filter id="glowSyringe17">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect x="49" y="5" width="2" height="20" fill="#94a3b8" />
    <motion.rect 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      x="49" y="0" width="2" height="5" fill="#22d3ee" filter="url(#glowSyringe17)" 
    />
    <rect x="46" y="25" width="8" height="5" rx="2" fill="#334155" />
    
    <rect x="35" y="30" width="30" height="45" rx="4" fill="url(#glassBar17)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
    <rect x="35" y="35" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="45" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="55" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    <rect x="35" y="65" width="5" height="1" fill="rgba(255,255,255,0.8)" />
    
    <motion.rect 
      animate={{ y: [0, 20, 0], height: [40, 20, 40] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="37" y="32" width="26" height="40" rx="2" fill="url(#liquidBlue17)" filter="url(#glowSyringe17)" 
    />
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="36" y="32" width="28" height="6" rx="1" fill="#0f172a" 
    />
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="47" y="75" width="6" height="25" fill="rgba(255,255,255,0.4)" 
    />
    <motion.rect 
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="30" y="95" width="40" height="4" rx="2" fill="#334155" 
    />
    <rect x="30" y="73" width="40" height="4" rx="2" fill="rgba(255,255,255,0.8)" />
  </svg>
);

export default function Slide17({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.9, rotateY: dir > 0 ? 15 : -15 }),
    center: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, rotateY: dir < 0 ? 15 : -15, transition: { duration: 0.6 } })
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const orbitItem = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050B14] flex flex-col p-8 overflow-hidden"
    >
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10 w-full flex justify-between items-start mb-8 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase mb-3 text-xs">
             <Activity className="w-4 h-4" />
             <span>পিজি পুশ পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 py-2 leading-normal">
            ইনজেকশন প্রয়োগ
          </h2>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 px-6 py-3 rounded-2xl flex items-center gap-4">
          <Info className="w-6 h-6 text-cyan-400" />
          <p className="text-cyan-100 text-sm w-48">বক্ষপাখনার নিচে বা মাংসপেশিতে পুশ করা হয়</p>
        </div>
      </div>

      {/* Main Core Layout (Reactor Style) */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        
        {/* Central Core: SVG Syringe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Spinning Radar Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[3px] border-dashed border-cyan-500/30 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-blue-500/40 rounded-full"
            ></motion.div>
            
            <div className="absolute inset-0 bg-slate-900/80 rounded-full backdrop-blur-md border-2 border-cyan-500/50 shadow-[0_0_80px_rgba(34,211,238,0.2)]"></div>
            
            <div className="relative z-10 scale-125">
              <RealisticSyringe />
            </div>
          </div>
        </div>

        {/* Orbiting Info Cards */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="absolute inset-0 w-full h-full max-w-7xl mx-auto pointer-events-none"
        >
          {/* Card 1: Female First Dose (Top Left) */}
          <motion.div 
            variants={orbitItem}
            className="absolute top-[10%] left-[5%] md:left-[10%] w-[320px] pointer-events-auto group"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-rose-500/40 rounded-3xl p-6 shadow-[0_15px_40px_rgba(244,63,94,0.15)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.3)] transition-all relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-400 font-black text-xl">১</div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">স্ত্রী মাছ</h3>
                  <p className="text-rose-300 text-sm font-semibold">প্রথম ডোজ (১/৩ অংশ)</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                নির্ধারিত পিজি (PG) হরমোনের মোট পরিমাণের তিন ভাগের এক ভাগ (১/৩ অংশ) পুশ করা হয়।
              </p>
            </div>
            {/* Connection Line to Center */}
            <svg className="absolute -right-20 top-1/2 w-20 h-2 -translate-y-1/2 hidden md:block">
              <line x1="0" y1="4" x2="80" y2="4" stroke="rgba(244,63,94,0.4)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </motion.div>

          {/* Card 2: Female Second Dose (Bottom Left) */}
          <motion.div 
            variants={orbitItem}
            className="absolute bottom-[10%] left-[5%] md:left-[10%] w-[320px] pointer-events-auto group"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-rose-500/40 rounded-3xl p-6 shadow-[0_15px_40px_rgba(244,63,94,0.15)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.3)] transition-all relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-400 font-black text-xl">২</div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">স্ত্রী মাছ</h3>
                  <p className="text-rose-300 text-sm font-semibold">দ্বিতীয় ডোজ (২/৩ অংশ)</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2 bg-rose-500/10 rounded-lg px-3 py-1 border border-rose-500/20 w-fit">
                <Clock className="w-4 h-4 text-rose-400" />
                <span className="text-rose-300 text-xs font-bold">প্রথম ডোজের ৬ ঘণ্টা পর</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                অবশিষ্ট দুই ভাগ (২/৩ অংশ) হরমোন দ্বিতীয় ডোজ হিসেবে পুশ করা হয়।
              </p>
            </div>
            {/* Connection Line to Center */}
            <svg className="absolute -right-20 top-1/2 w-20 h-2 -translate-y-1/2 hidden md:block">
              <line x1="0" y1="4" x2="80" y2="4" stroke="rgba(244,63,94,0.4)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </motion.div>

          {/* Card 3: Male Fish Dose (Right Center) */}
          <motion.div 
            variants={orbitItem}
            className="absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[10%] w-[320px] pointer-events-auto group"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/40 rounded-3xl p-6 shadow-[0_15px_40px_rgba(59,130,246,0.15)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all relative overflow-hidden">
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-black text-xl">৩</div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">পুরুষ মাছ</h3>
                  <p className="text-blue-300 text-sm font-semibold">সম্পূর্ণ ডোজ (১টি মাত্র)</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                স্ত্রী মাছকে যখন দ্বিতীয় ডোজ দেওয়া হয়, ঠিক সেই সময়েই পুরুষ মাছকে সম্পূর্ণ ডোজ একবারে পুশ করা হয়।
              </p>
            </div>
            {/* Connection Line to Center */}
            <svg className="absolute -left-20 top-1/2 w-20 h-2 -translate-y-1/2 hidden md:block">
              <line x1="0" y1="4" x2="80" y2="4" stroke="rgba(59,130,246,0.4)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
