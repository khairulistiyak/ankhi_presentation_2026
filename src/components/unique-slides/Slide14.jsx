import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#1a0f05] to-[#050A15]" />
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-12 py-12 flex flex-col justify-between">

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="bg-orange-500/10 text-orange-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest border border-orange-500/20">
              ধাপ ২
            </span>
          </div>
          <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full font-mono">14 / 28</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-8 py-2 leading-normal"
        >
          ব্রুড মাছ নির্বাচন
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
            <div className="bg-slate-900/60 backdrop-blur-xl border border-orange-900/40 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(249,115,22,0.06)]">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-400 to-amber-500 rounded-r-full" />

              <p className="text-xl text-slate-200 leading-[2.2] py-2 pl-4">
                কৃত্রিম প্রজননের মূল সফলতা নির্ভর করে সঠিক ও প্রজননোপযোগী <span className="text-orange-300 font-bold bg-orange-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(249,115,22,0.2)]">ব্রুড (মা-বাবা) মাছ</span> নির্বাচনের ওপর। 
                এজন্য প্রথমেই পরিণত <span className="text-sky-300 font-bold">পুরুষ</span> ও <span className="text-rose-300 font-bold">স্ত্রী</span> মাছকে সঠিকভাবে সনাক্ত করতে হবে।
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-lg text-slate-300 leading-[2] py-1 border-l-2 border-orange-500/30 pl-4">
                প্রজনন মৌসুম শুরু হওয়ার অন্তত <span className="text-amber-300 font-bold">১ মাস আগে</span> এদের সংগ্রহ করে বিশেষ যত্নে রাখা হয়।
              </p>
              <p className="text-lg text-slate-300 leading-[2] py-1 border-l-2 border-amber-500/30 pl-4">
                সাধারণত একটি রুই মাছ <span className="text-orange-300 font-bold">২-৩ বছরের</span> মধ্যে পূর্ণ প্রজনন ক্ষমতা অর্জন করে।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Column: Enhanced Live View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-[#070b14] backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* SVG Live Animation: Pond/Tank with swimming fish being scanned and selected */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                <linearGradient id="waterGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                </linearGradient>
                
                {/* Refined Fish Silhouette */}
                <path id="realFish" d="M 0 0 C 20 -15, 50 -15, 60 0 C 50 15, 20 15, 0 0 Z M 0 0 L -20 -15 L -10 0 L -20 15 Z" />
                
                <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Water Background */}
              <rect width="500" height="450" fill="url(#waterGlow)" />
              
              {/* Subtle water caustics/waves moving */}
              <path fill="none" stroke="#fbbf24" strokeOpacity="0.05" strokeWidth="2" d="M-100,100 Q150,150 400,100 T900,100">
                <animate attributeName="d" values="M-100,100 Q150,150 400,100 T900,100; M-100,150 Q150,50 400,150 T900,150; M-100,100 Q150,150 400,100 T900,100" dur="10s" repeatCount="indefinite" />
              </path>
              <path fill="none" stroke="#fbbf24" strokeOpacity="0.05" strokeWidth="2" d="M-100,300 Q150,350 400,300 T900,300">
                <animate attributeName="d" values="M-100,300 Q150,350 400,300 T900,300; M-100,250 Q150,200 400,250 T900,250; M-100,300 Q150,350 400,300 T900,300" dur="12s" repeatCount="indefinite" />
              </path>

              {/* Background immature/unselected fish swimming freely */}
              <g opacity="0.3">
                <g>
                  <use href="#realFish" fill="#334155" />
                  <animateTransform attributeName="transform" type="translate" values="-100,80; 600,60" dur="15s" repeatCount="indefinite" />
                </g>
                <g>
                  <use href="#realFish" fill="#334155" />
                  <animateTransform attributeName="transform" type="translate" values="600,380; -100,360" dur="18s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="scale" values="-1, 1" additive="sum" />
                </g>
              </g>

              {/* Spotlight Tracking the Brood Fish */}
              <circle r="120" fill="url(#spotlight)">
                <animate attributeName="cx" values="100; 250; 250; 100" dur="12s" repeatCount="indefinite" />
                <animate attributeName="cy" values="225; 225; 225; 225" dur="12s" repeatCount="indefinite" />
              </circle>
              
              {/* Animated Scanner Ring */}
              <circle r="100" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="10 20" strokeOpacity="0.6">
                <animate attributeName="cx" values="100; 250; 250; 100" dur="12s" repeatCount="indefinite" />
                <animate attributeName="cy" values="225; 225; 225; 225" dur="12s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" values="0 250 225; 360 250 225" dur="10s" repeatCount="indefinite" />
              </circle>

              {/* Center Lock-on point */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="100,225; 250,225; 250,225; 100,225" dur="12s" repeatCount="indefinite" />
                
                {/* Female Brood Fish (Selected) */}
                <g transform="translate(-40, -30) scale(1.1)">
                  <use href="#realFish" fill="#0f172a" stroke="#fda4af" strokeWidth="2" />
                  <circle cx="30" cy="-20" r="6" fill="none" stroke="#fda4af" strokeWidth="1.5" />
                  <path d="M 30 -14 L 30 -4 M 26 -9 L 34 -9" stroke="#fda4af" strokeWidth="1.5" />
                  <text x="0" y="-25" fill="#fda4af" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">স্ত্রী</text>
                  <circle cx="30" cy="-20" r="15" fill="none" stroke="#fda4af" strokeWidth="1">
                    <animate attributeName="r" values="10; 25" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Male Brood Fish (Selected) */}
                <g transform="translate(-10, 40) scale(1)">
                  <use href="#realFish" fill="#0f172a" stroke="#7dd3fc" strokeWidth="2" />
                  <circle cx="25" cy="20" r="6" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
                  <path d="M 30 15 L 37 8 M 37 8 L 32 8 M 37 8 L 37 13" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
                  <text x="0" y="30" fill="#7dd3fc" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">পুরুষ</text>
                  <circle cx="25" cy="20" r="15" fill="none" stroke="#7dd3fc" strokeWidth="1">
                    <animate attributeName="r" values="10; 25" dur="1.5s" repeatCount="indefinite" delay="0.75s" />
                    <animate attributeName="opacity" values="1; 0" dur="1.5s" repeatCount="indefinite" delay="0.75s" />
                  </circle>
                </g>

                {/* "বিশেষ যত্ন" (Special Care) Forcefield / Protection Bubble */}
                <circle cx="10" cy="0" r="80" fill="none" stroke="#10b981" strokeWidth="2" strokeOpacity="0.4">
                  <animate attributeName="r" values="75; 85; 75" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Crosshairs locking in */}
                <path d="M -80 0 L -60 0 M 100 0 L 80 0 M 10 -90 L 10 -70 M 10 90 L 10 70" stroke="#f59e0b" strokeWidth="2" />
              </g>

              {/* Modern HUD Card for 'পূর্ণ প্রজনন ক্ষমতা' (Maturity Timeline) */}
              <g transform="translate(300, 360)">
                {/* Card Background */}
                <rect x="0" y="0" width="180" height="70" rx="12" fill="#0f172a" fillOpacity="0.8" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1" />
                <rect x="0" y="0" width="180" height="70" rx="12" fill="none" stroke="#fbbf24" strokeOpacity="0.2" strokeWidth="3" />
                
                {/* Glowing accent line */}
                <line x1="10" y1="0" x2="60" y2="0" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x1" values="10; 120; 10" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="60; 170; 60" dur="4s" repeatCount="indefinite" />
                </line>

                {/* Text: ২-৩ বছর */}
                <text x="15" y="25" fill="#fcd34d" fontSize="14" fontWeight="bold" letterSpacing="1">২-৩ বছর</text>
                
                {/* Text: পূর্ণ প্রজনন ক্ষমতা */}
                <text x="15" y="45" fill="#94a3b8" fontSize="11">পূর্ণ প্রজনন ক্ষমতা</text>

                {/* Animated Progress Bar */}
                <rect x="15" y="55" width="150" height="6" rx="3" fill="#334155" />
                <rect x="15" y="55" width="150" height="6" rx="3" fill="url(#spotlight)">
                  <animate attributeName="width" values="0; 150; 150" dur="6s" repeatCount="indefinite" />
                </rect>
                
                {/* Pulsing indicator dot at the end of progress */}
                <circle cx="15" cy="58" r="4" fill="#fbbf24">
                  <animate attributeName="cx" values="15; 165; 165" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1; 1; 0" dur="6s" repeatCount="indefinite" />
                </circle>
              </g>

            </svg>

            {/* Visual Overlay Borders */}
            <div className="absolute inset-0 border-[3px] border-orange-500/10 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(249,115,22,0.1)] rounded-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide14;
