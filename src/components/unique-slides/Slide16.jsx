import React from 'react';
import { motion } from 'framer-motion';

const Slide16 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#100418] to-[#050A15]" />
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-12 py-12 flex flex-col justify-between">

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest border border-purple-500/20">
              ধাপ ৪
            </span>
          </div>
          <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full font-mono">16 / 28</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-8 py-2 leading-normal"
        >
          পিটুইটারি গ্রন্থি সংগ্রহ
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
            <div className="bg-slate-900/60 backdrop-blur-xl border border-purple-900/40 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(168,85,247,0.06)]">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-500 rounded-r-full" />

              <p className="text-xl text-slate-200 leading-[2.2] py-2 pl-4">
                হরমোন তৈরির জন্য সাধারণত প্রজনন মৌসুমের শুরুতেই সুস্থ ও পরিণত <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.2)]">দাতা মাছ (Donor fish)</span> থেকে পিটুইটারি গ্রন্থি সংগ্রহ করা হয়। 
                এটি মাছের <span className="text-fuchsia-300 font-bold">মস্তিষ্কের নিচে</span> অবস্থান করে এবং প্রজনন প্রক্রিয়া উদ্দীপিত করতে এর নির্যাস ব্যবহার করা হয়।
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
              <p className="text-lg text-slate-300 leading-[2] py-1 border-l-2 border-fuchsia-500/30 pl-4">
                সংগৃহীত গ্রন্থিটি সরাসরি ইনজেকশন তৈরিতে বা পরবর্তীতে ব্যবহারের জন্য <span className="text-purple-300 font-bold">অ্যালকোহলে সংরক্ষণ</span> করা যায়।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Column: Live Brain Scan & Vial View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-[#090314] backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* Highly Intuitive, Story-Driven SVG Animation: Fish -> Gland Extract -> Bottle */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Bottle Glass Gradient */}
                <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="20%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="80%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                </linearGradient>

                {/* Alcohol Liquid Gradient */}
                <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.9" />
                </linearGradient>

                {/* Glowing Gland (The 'Gem') */}
                <radialGradient id="glandGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                  <stop offset="40%" stopColor="#eab308" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background ambient lighting */}
              <circle cx="250" cy="225" r="150" fill="#a855f7" opacity="0.05" filter="blur(20px)" />

              {/* --- 1. The Fish (Left Side) --- */}
              <g transform="translate(40, 120)">
                {/* Big Fish Body */}
                <path d="M 0 100 C 50 20, 150 20, 200 100 C 150 180, 50 180, 0 100 Z" fill="#1e293b" stroke="#c084fc" strokeWidth="2" />
                {/* Fish Tail */}
                <path d="M 0 100 L -40 60 L -30 100 L -40 140 Z" fill="#1e293b" stroke="#c084fc" strokeWidth="2" />
                {/* Fish Eye */}
                <circle cx="160" cy="85" r="8" fill="#0f172a" stroke="#c084fc" strokeWidth="2" />
                <circle cx="163" cy="83" r="3" fill="#c084fc" />
                
                {/* Brain (মস্তিষ্ক) Indicator */}
                <path d="M 140 60 C 150 50, 160 50, 165 60 C 165 70, 140 70, 140 60 Z" fill="none" stroke="#d946ef" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* The "Pituitary Gland" resting inside the fish (only visible when not extracted) */}
                <circle cx="150" cy="80" r="15" fill="url(#glandGlow)">
                  <animate attributeName="opacity" values="1; 1; 0; 0; 1" dur="6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* --- 2. The Extraction Animation (The Gland Traveling) --- */}
              {/* Path line to guide the eye */}
              <path d="M 190 200 Q 250 100, 350 150 L 350 300" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
              
              {/* The Traveling Gland */}
              <g>
                <circle r="15" fill="url(#glandGlow)">
                  {/* Follow path animation */}
                  <animateMotion 
                    path="M 190 200 Q 250 100, 350 150 L 350 350" 
                    dur="6s" 
                    repeatCount="indefinite" 
                  />
                  {/* Opacity: only visible during travel */}
                  <animate attributeName="opacity" values="0; 0; 1; 1; 0" dur="6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* --- 3. The Glass Bottle (Right Side - অ্যালকোহলে সংরক্ষণ) --- */}
              <g transform="translate(300, 150)">
                {/* Bottle Cap */}
                <rect x="35" y="0" width="30" height="20" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                <rect x="30" y="20" width="40" height="10" rx="2" fill="#475569" />

                {/* Bottle Neck & Body (Glass effect) */}
                <path d="M 40 30 L 60 30 L 75 70 L 75 220 C 75 240, 25 240, 25 220 L 25 70 Z" fill="url(#glassGrad)" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Liquid Inside (Alcohol) */}
                <path d="M 28 120 L 72 120 L 72 220 C 72 235, 28 235, 28 220 Z" fill="url(#liquidGrad)" />
                
                {/* Liquid surface wave animation */}
                <path d="M 28 120 Q 50 115, 72 120 Q 50 125, 28 120 Z" fill="#f0abfc" opacity="0.8">
                  <animate attributeName="d" values="M 28 120 Q 50 115, 72 120 Q 50 125, 28 120 Z; M 28 120 Q 50 125, 72 120 Q 50 115, 28 120 Z; M 28 120 Q 50 115, 72 120 Q 50 125, 28 120 Z" dur="2s" repeatCount="indefinite" />
                </path>

                {/* Splash effect when gland drops into the liquid */}
                <g>
                  <circle cx="50" cy="120" r="15" fill="none" stroke="#f0abfc" strokeWidth="2" opacity="0">
                    <animate attributeName="r" values="5; 30" dur="6s" repeatCount="indefinite" begin="4.2s" />
                    <animate attributeName="opacity" values="0; 1; 0" dur="6s" repeatCount="indefinite" begin="4.2s" />
                  </circle>
                </g>

                {/* Glands already resting at the bottom */}
                <circle cx="45" cy="210" r="8" fill="url(#glandGlow)" opacity="0.6" />
                <circle cx="60" cy="215" r="8" fill="url(#glandGlow)" opacity="0.8" />
                
                {/* Bubbles in Alcohol */}
                {[...Array(5)].map((_, i) => (
                  <circle key={`vial-bubble-${i}`} cx={35 + Math.random() * 30} cy="220" r={1.5 + Math.random() * 2} fill="#ffffff" opacity="0">
                    <animate attributeName="cy" values="220; 120" dur={`${Math.random() * 2 + 1.5}s`} repeatCount="indefinite" begin={`${Math.random() * 2}s`} />
                    <animate attributeName="opacity" values="0; 0.8; 0" dur={`${Math.random() * 2 + 1.5}s`} repeatCount="indefinite" begin={`${Math.random() * 2}s`} />
                  </circle>
                ))}
              </g>

              {/* Informational Arrows (No text, just pure visual guidance) */}
              <g transform="translate(230, 250)">
                <path d="M 0 0 L 30 -20 L 30 20 Z" fill="#eab308" opacity="0.4">
                  <animateTransform attributeName="transform" type="translate" values="-10,0; 10,0; -10,0" dur="2s" repeatCount="indefinite" />
                </path>
              </g>

            </svg>

            {/* Visual Overlay Borders */}
            <div className="absolute inset-0 border-[3px] border-purple-500/10 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(168,85,247,0.1)] rounded-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide16;
