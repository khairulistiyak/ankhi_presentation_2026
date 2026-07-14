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
                হরমোন তৈরির জন্য সাধারণত প্রজনন মৌসুমের শুরুতেই সুস্থ ও পরিণত <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.2)]">দাতা মাছ</span> থেকে পিটুইটারি গ্রন্থি সংগ্রহ করা হয়। 
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
            {/* Premium, Ultra-Modern & Intuitive SVG Animation: Fish -> Gland Extract -> Vial */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Premium Glass Gradient for Vial */}
                <linearGradient id="premiumGlass" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="80%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
                </linearGradient>

                {/* Sleek Liquid Gradient */}
                <linearGradient id="sleekLiquid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.9" />
                </linearGradient>

                {/* Gland Core Glow */}
                <radialGradient id="glandCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
                  <stop offset="30%" stopColor="#eab308" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a16207" stopOpacity="0" />
                </radialGradient>

                {/* Holographic Fish Body Gradient */}
                <linearGradient id="holoFish" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.02" />
                </linearGradient>
                
                {/* Clean Fish Outline Path */}
                <path id="cleanFish" d="M 10 100 C 60 40, 140 40, 200 100 C 140 160, 60 160, 10 100 Z" />
              </defs>

              {/* Background Ambient Glows */}
              <circle cx="120" cy="200" r="100" fill="#a855f7" opacity="0.05" filter="blur(30px)" />
              <circle cx="380" cy="220" r="120" fill="#d946ef" opacity="0.05" filter="blur(30px)" />

              {/* --- 1. The Modern Fish Silhouette (Left Side) --- */}
              <g transform="translate(20, 100)">
                {/* Sleek Tail */}
                <path d="M 15 100 L -30 60 C -25 80, -25 120, -30 140 Z" fill="url(#holoFish)" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.6" />
                
                {/* Main Body */}
                <use href="#cleanFish" fill="url(#holoFish)" stroke="#e879f9" strokeWidth="1.5" strokeOpacity="0.8" />
                
                {/* Minimalist Tech Lines on Fish */}
                <path d="M 60 65 Q 100 80, 140 65" fill="none" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                
                {/* Minimalist Eye */}
                <circle cx="160" cy="85" r="5" fill="none" stroke="#f0abfc" strokeWidth="1.5" />
                <circle cx="162" cy="84" r="1.5" fill="#f0abfc" />
                
                {/* Brain / Head Area Indicator */}
                <circle cx="145" cy="65" r="18" fill="none" stroke="#d946ef" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 4">
                  <animateTransform attributeName="transform" type="rotate" values="0 145 65; 360 145 65" dur="10s" repeatCount="indefinite" />
                </circle>
                
                {/* The Source Gland (Pulsing inside) */}
                <circle cx="145" cy="80" r="12" fill="url(#glandCore)">
                  <animate attributeName="r" values="10; 14; 10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1; 1; 0.2; 0.2; 1" dur="5s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* --- 2. The Extraction Trail (Clean & Modern) --- */}
              {/* Elegant curved guideline */}
              <path d="M 175 180 C 220 160, 280 120, 375 160" fill="none" stroke="#eab308" strokeWidth="1" strokeOpacity="0.2" />
              
              {/* Animated Light Trail / Data Stream transferring the gland */}
              <path d="M 175 180 C 220 160, 280 120, 375 160" fill="none" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 200">
                <animate attributeName="stroke-dashoffset" values="210; -20" dur="2.5s" repeatCount="indefinite" ease="ease-in-out" />
              </path>

              {/* The Extracted Gland (Moving) */}
              <g>
                <circle r="8" fill="url(#glandCore)">
                  <animateMotion 
                    path="M 175 180 C 220 160, 280 120, 375 160 L 375 320" 
                    dur="5s" 
                    repeatCount="indefinite" 
                    keyPoints="0;0.5;1"
                    keyTimes="0;0.6;1"
                    calcMode="linear"
                  />
                  <animate attributeName="opacity" values="0; 1; 1; 0" dur="5s" keyTimes="0; 0.2; 0.8; 1" repeatCount="indefinite" />
                </circle>
              </g>

              {/* --- 3. The Premium Glass Vial (Right Side) --- */}
              <g transform="translate(340, 150)">
                {/* Cap / Tech Lid */}
                <rect x="20" y="0" width="30" height="12" rx="4" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
                <rect x="15" y="12" width="40" height="6" rx="2" fill="#a855f7" opacity="0.8" />

                {/* Sleek Glass Body */}
                <rect x="10" y="18" width="50" height="140" rx="25" fill="url(#premiumGlass)" stroke="#e879f9" strokeWidth="1.5" strokeOpacity="0.6" />
                <rect x="12" y="20" width="46" height="136" rx="23" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />

                {/* Alcohol Fluid (Smooth Fill) */}
                <path d="M 12 100 L 58 100 L 58 133 C 58 145, 48 155, 35 155 L 35 155 C 22 155, 12 145, 12 133 Z" fill="url(#sleekLiquid)" />
                
                {/* Gentle Liquid Wave */}
                <path d="M 12 100 Q 35 95, 58 100 Q 35 105, 12 100 Z" fill="#f0abfc" opacity="0.6">
                  <animate attributeName="d" values="M 12 100 Q 35 95, 58 100 Q 35 105, 12 100 Z; M 12 100 Q 35 105, 58 100 Q 35 95, 12 100 Z; M 12 100 Q 35 95, 58 100 Q 35 105, 12 100 Z" dur="3s" repeatCount="indefinite" />
                </path>

                {/* Ripple Effect on Gland Drop */}
                <ellipse cx="35" cy="100" rx="15" ry="4" fill="none" stroke="#fef08a" strokeWidth="1.5" opacity="0">
                  <animate attributeName="rx" values="5; 22" dur="5s" repeatCount="indefinite" begin="3s" />
                  <animate attributeName="opacity" values="0; 0.8; 0" dur="5s" repeatCount="indefinite" begin="3s" />
                </ellipse>

                {/* Stored Glands at the bottom */}
                <circle cx="28" cy="140" r="6" fill="url(#glandCore)" opacity="0.7" />
                <circle cx="42" cy="145" r="7" fill="url(#glandCore)" opacity="0.9" />

                {/* Modern Measurement Ticks */}
                <line x1="65" y1="50" x2="70" y2="50" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                <line x1="65" y1="80" x2="75" y2="80" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round" />
                <line x1="65" y1="110" x2="70" y2="110" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                <line x1="65" y1="140" x2="75" y2="140" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round" />
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
