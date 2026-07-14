import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#061814] to-[#050A15]" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-12 py-10 flex flex-col justify-between">

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-6"
        >
          <div></div>
          <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full font-mono">13 / 28</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 mb-8 py-2 leading-normal"
        >
          পুকুর প্রস্তুত ও ট্যাংক ব্যবস্থাপনা
        </motion.h1>

        {/* Content Area: Left Text, Right Live SVG */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-emerald-900/40 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(16,185,129,0.06)]">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-400 to-cyan-500 rounded-r-full" />

              <p className="text-xl text-slate-200 leading-[2.2] py-2 pl-4">
                মাছ চাষ এবং প্রজননের জন্য পুকুর বা ট্যাংক সঠিকভাবে প্রস্তুত করা অত্যন্ত জরুরি। 
                এর মধ্যে রয়েছে <span className="text-emerald-300 font-bold bg-emerald-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)]">পুকুরের তলদেশের মাটি চাষ করা</span>, 
                <span className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded mx-1 shadow-[0_0_10px_rgba(6,182,212,0.2)]">পানি পরিষ্কার ও শোধন করা</span> এবং ট্যাংকে 
                <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded ml-1 shadow-[0_0_10px_rgba(255,255,255,0.2)]">পর্যাপ্ত অক্সিজেন সরবরাহ</span> নিশ্চিত করা।
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
              <p className="text-lg text-slate-300 leading-[2] py-1">
                পানির সঠিক গুণাগুণ (জলমান) ও নিয়মিত পরিচর্যার মাধ্যমেই কেবল 
                মাছের <span className="text-emerald-300 font-bold">সুস্থ বৃদ্ধি</span> ও 
                <span className="text-emerald-300 font-bold"> সর্বোচ্চ উৎপাদন</span> নিশ্চিত করা সম্ভব।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Column: Live Pond/Tank View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-black/40 backdrop-blur-md overflow-hidden flex items-end justify-center shadow-2xl"
          >
            {/* SVG Live Animation representing Soil, Clean Water, and Oxygen Bubbles */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Clean Water Gradient */}
                <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.7" />
                </linearGradient>

                {/* Soil Gradient */}
                <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#064e3b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#022c22" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Back Wave (Animated) */}
              <path fill="#0284c7" fillOpacity="0.4">
                <animate 
                  attributeName="d" 
                  dur="8s" 
                  repeatCount="indefinite" 
                  values="
                    M 0 160 C 125 140, 250 180, 500 160 L 500 450 L 0 450 Z;
                    M 0 160 C 250 180, 375 140, 500 160 L 500 450 L 0 450 Z;
                    M 0 160 C 125 140, 250 180, 500 160 L 500 450 L 0 450 Z
                  " 
                />
              </path>

              {/* Front Wave (Animated) */}
              <path fill="url(#waterGrad)">
                <animate 
                  attributeName="d" 
                  dur="6s" 
                  repeatCount="indefinite" 
                  values="
                    M 0 180 C 150 200, 350 150, 500 180 L 500 450 L 0 450 Z;
                    M 0 180 C 150 150, 350 200, 500 180 L 500 450 L 0 450 Z;
                    M 0 180 C 150 200, 350 150, 500 180 L 500 450 L 0 450 Z
                  " 
                />
              </path>

              {/* Oxygen Bubbles (Animated from bottom) */}
              {[...Array(15)].map((_, i) => (
                <circle 
                  key={i} 
                  cx={(i * 30 + 20) % 480 + 10} 
                  cy="400" 
                  r={Math.random() * 4 + 2} 
                  fill="#ffffff" 
                  fillOpacity="0.6"
                >
                  <animate 
                    attributeName="cy" 
                    values={`400; ${Math.random() * 50 + 100}`} 
                    dur={`${Math.random() * 4 + 3}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 3}s`} 
                  />
                  <animate 
                    attributeName="cx" 
                    values={`${(i * 30 + 20) % 480 + 10}; ${(i * 30 + 20) % 480 + 10 + (Math.random() > 0.5 ? 15 : -15)}`} 
                    dur={`${Math.random() * 2 + 2}s`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0; 0.8; 0" 
                    dur={`${Math.random() * 4 + 3}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 3}s`} 
                  />
                </circle>
              ))}

              {/* Soil / Bottom Prep Layer */}
              <path d="M 0 380 Q 250 370 500 390 L 500 450 L 0 450 Z" fill="url(#soilGrad)" />
              
              {/* Soil Texture / Grid lines (Representing 'মাটি চাষ') */}
              <path d="M 50 390 L 80 450 M 150 385 L 180 450 M 250 382 L 280 450 M 350 385 L 380 450 M 450 388 L 480 450" stroke="#065f46" strokeWidth="3" strokeOpacity="0.6" />
              
              {/* Top Glass Reflection */}
              <rect x="0" y="0" width="500" height="150" fill="url(#waterGrad)" opacity="0.05" />
              <path d="M 0 0 L 150 0 L 50 100 L -100 100 Z" fill="#ffffff" opacity="0.03" />

            </svg>
            
            {/* Visual Glass Overlay Border */}
            <div className="absolute inset-0 border-[3px] border-white/5 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(6,182,212,0.1)] rounded-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide13;
