import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#041224] to-[#050A15]" />
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-12 py-12 flex flex-col justify-between">

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="bg-sky-500/10 text-sky-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest border border-sky-500/20">
              ধাপ ৩
            </span>
          </div>
          <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full font-mono">15 / 28</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300 mb-8 py-2 leading-normal"
        >
          সনাক্তকৃত ও সংগৃহীত মাছের টেকনিক্যাল ট্রিটমেন্ট
        </motion.h1>

        {/* Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-sky-900/40 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(14,165,233,0.06)]">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-400 to-blue-500 rounded-r-full" />

              <p className="text-lg text-slate-200 leading-[2.2] py-2 pl-4">
                হ্যাচারিতে পরিণত পুরুষ ও স্ত্রী মাছ আনার পর প্রজননের উদ্দেশ্যে এদের <span className="text-sky-300 font-bold bg-sky-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(14,165,233,0.2)]">আলাদা হাপায় (Hapa)</span> রাখা হয়। 
                ইনজেকশন দেওয়ার আগে মাছগুলোকে অন্তত <span className="text-blue-300 font-bold bg-blue-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(59,130,246,0.2)]">৬-১২ ঘণ্টা</span> কৃত্রিম ঝরনা বা পানির প্রবাহে রেখে <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">'টেকনিক্যাল ট্রিটমেন্ট'</span> বা কন্ডিশনিং দেওয়া প্রয়োজন।
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
              <p className="text-lg text-slate-300 leading-[2] py-1 border-l-2 border-sky-500/30 pl-4">
                এ সময় <span className="text-sky-300 font-bold">পর্যাপ্ত অক্সিজেন</span> ও <span className="text-sky-300 font-bold">পানির প্রবাহ</span> নিশ্চিত করতে হবে, যেন মাছ সহজেই পরিবহনের ধকল কাটিয়ে উঠতে পারে।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Column: Live Hapa & Shower View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-[#020b14] backdrop-blur-md overflow-hidden flex items-end justify-center shadow-2xl"
          >
            {/* Advanced Live SVG Animation representing Hapa, Shower, Oxygen, and HUD Panels */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Advanced Hapa Net / Forcefield Grid */}
                <pattern id="hapaNet" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 30 M 0 0 L 30 30" fill="none" stroke="#0ea5e9" strokeOpacity="0.2" strokeWidth="1"/>
                  <circle cx="15" cy="15" r="1.5" fill="#38bdf8" opacity="0.4" />
                </pattern>

                <linearGradient id="showerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="poolGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#082f49" stopOpacity="0.95" />
                </linearGradient>
                
                <radialGradient id="healGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </radialGradient>

                {/* Detailed Fish Silhouette */}
                <path id="restingFish" d="M 0 0 C 20 -15, 50 -15, 60 0 C 50 15, 20 15, 0 0 Z M 0 0 L -20 -15 L -10 0 L -20 15 Z" />
              </defs>

              {/* Background Deep Water */}
              <rect x="0" y="150" width="500" height="300" fill="url(#poolGrad)" />

              {/* Glowing High-Tech Hapa Container */}
              <rect x="60" y="100" width="380" height="350" fill="url(#hapaNet)" />
              <rect x="60" y="100" width="380" height="350" fill="none" stroke="#0ea5e9" strokeOpacity="0.4" strokeWidth="2" />
              {/* Top Bar of the Hapa */}
              <rect x="50" y="90" width="400" height="10" rx="4" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" />
              <line x1="70" y1="95" x2="430" y2="95" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

              {/* Artificial Shower / Waterfall (কৃত্রিম ঝরনা) */}
              {[...Array(15)].map((_, i) => (
                <g key={`shower-${i}`} transform={`translate(${80 + i * 24}, 100)`}>
                  <rect x="-1" y="0" width="2" height="150" fill="url(#showerGrad)">
                    <animate attributeName="opacity" values="0.3; 1; 0.3" dur={`${Math.random() * 0.5 + 0.5}s`} repeatCount="indefinite" />
                  </rect>
                  <circle cx="0" cy="150" r="2" fill="#bae6fd">
                    <animate attributeName="cy" values="100; 250" dur={`${Math.random() * 0.3 + 0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0" dur={`${Math.random() * 0.3 + 0.4}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}

              {/* Surface Water Waves */}
              <path fill="none" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="2" d="M 60 250 Q 155 240, 250 250 T 440 250">
                <animate attributeName="d" values="M 60 250 Q 155 240, 250 250 T 440 250; M 60 250 Q 155 260, 250 250 T 440 250; M 60 250 Q 155 240, 250 250 T 440 250" dur="4s" repeatCount="indefinite" />
              </path>

              {/* Fish inside Hapa recovering (Conditioning) */}
              <g>
                {/* Healing/Recovery Glow behind fish */}
                <circle cx="180" cy="330" r="60" fill="url(#healGlow)">
                  <animate attributeName="r" values="50; 70; 50" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <g transform="translate(150, 330) scale(1)">
                  <use href="#restingFish" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Gentle breathing/hover animation */}
                  <animateTransform attributeName="transform" type="translate" values="150,330; 150,335; 150,330" dur="4s" repeatCount="indefinite" />
                </g>

                <circle cx="340" cy="360" r="50" fill="url(#healGlow)">
                  <animate attributeName="r" values="40; 60; 40" dur="3.5s" repeatCount="indefinite" />
                </circle>

                <g transform="translate(370, 360) scale(0.9) scale(-1, 1)">
                  <use href="#restingFish" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                  <animateTransform attributeName="transform" type="translate" values="370,360; 370,365; 370,360" dur="3.5s" repeatCount="indefinite" />
                </g>
              </g>

              {/* Intensive Oxygen Bubbles */}
              {[...Array(20)].map((_, i) => (
                <circle 
                  key={`bubble-${i}`} 
                  cx={70 + (Math.random() * 360)} 
                  cy="450" 
                  r={Math.random() * 4 + 2} 
                  fill="#ffffff" 
                  fillOpacity="0.8"
                >
                  <animate 
                    attributeName="cy" 
                    values={`450; 250`} 
                    dur={`${Math.random() * 3 + 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 3}s`} 
                  />
                  <animate 
                    attributeName="cx" 
                    values={`${70 + (Math.random() * 360)}; ${70 + (Math.random() * 360) + (Math.random() > 0.5 ? 10 : -10)}`} 
                    dur={`${Math.random() * 2 + 2}s`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0; 1; 0" 
                    dur={`${Math.random() * 3 + 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 3}s`} 
                  />
                </circle>
              ))}

              {/* --- HUD: Timer Card for '৬-১২ ঘণ্টা' (Top Right inside SVG) --- */}
              <g transform="translate(300, 20)">
                <rect width="180" height="60" rx="8" fill="#0f172a" fillOpacity="0.8" stroke="#0ea5e9" strokeOpacity="0.5" />
                
                {/* Timer Icon (Clock) */}
                <circle cx="25" cy="22" r="8" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                <path d="M 25 17 L 25 22 L 28 25" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                
                <text x="45" y="26" fill="#bae6fd" fontSize="13" fontWeight="bold">কন্ডিশনিং সময়</text>
                
                {/* Linear Progress Bar for Timer */}
                <rect x="15" y="40" width="150" height="6" rx="3" fill="#1e293b" />
                <rect x="15" y="40" width="150" height="6" rx="3" fill="url(#showerGrad)">
                  <animate attributeName="width" values="0; 150; 0" dur="10s" repeatCount="indefinite" />
                </rect>
                
                {/* 6h and 12h markers */}
                <text x="15" y="55" fill="#64748b" fontSize="9">০ ঘ.</text>
                <text x="75" y="55" fill="#38bdf8" fontSize="9" textAnchor="middle">৬ ঘণ্টা</text>
                <text x="165" y="55" fill="#64748b" fontSize="9" textAnchor="end">১২ ঘণ্টা</text>
                
                {/* Moving playhead dot */}
                <circle cx="15" cy="43" r="4" fill="#bae6fd">
                  <animate attributeName="cx" values="15; 165; 15" dur="10s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* --- The Equalizer (O2 & Flow) card has been removed as requested --- */}
            </svg>

            {/* Visual Overlay Borders */}
            <div className="absolute inset-0 border-[3px] border-sky-500/10 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(14,165,233,0.15)] rounded-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide15;
