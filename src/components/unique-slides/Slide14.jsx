import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#1a0f05] to-[#050A15]" />
      <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

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
                প্রজনন মৌসুম শুরু হওয়ার অন্তত <span className="text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded">১ মাস আগে</span> এদের সংগ্রহ করে বিশেষ যত্নে রাখা হয়।
              </p>
              <p className="text-lg text-slate-300 leading-[2] py-1 border-l-2 border-amber-500/30 pl-4">
                সাধারণত একটি রুই মাছ <span className="text-orange-300 font-bold bg-orange-500/10 px-2 py-0.5 rounded">২-৩ বছরের</span> মধ্যে পূর্ণ প্রজনন ক্ষমতা অর্জন করে।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Column: Live Selection View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* SVG Live Animation representing Brood Fish Selection (Male/Female, Timeline) */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
                
                {/* Abstract Fish Shape path */}
                <path id="fishShape" d="M -40 0 C -20 -20, 20 -25, 40 0 C 20 25, -20 20, -40 0 Z M -40 0 L -55 -15 L -50 0 L -55 15 Z" />
              </defs>

              {/* Grid Background */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeOpacity="0.1" strokeWidth="1"/>
              </pattern>
              <rect width="500" height="450" fill="url(#grid)" />

              {/* Central Target / Selection Area */}
              <circle cx="250" cy="225" r="140" fill="none" stroke="#f97316" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="250" cy="225" r="120" fill="#f97316" fillOpacity="0.03" stroke="#fbbf24" strokeOpacity="0.4" strokeWidth="2" />

              {/* Scanning Line Animation (identifying mature fish) */}
              <rect x="100" y="80" width="300" height="2" fill="url(#scanGrad)">
                <animate attributeName="y" values="80; 370; 80" dur="4s" repeatCount="indefinite" ease="linear" />
              </rect>

              {/* Female Brood Fish (Center Left) */}
              <g transform="translate(180, 225) scale(1.5)">
                <use href="#fishShape" fill="#050A15" stroke="#fda4af" strokeWidth="1.5" />
                {/* Female Symbol */}
                <circle cx="0" cy="0" r="5" fill="none" stroke="#fda4af" strokeWidth="1" />
                <path d="M 0 5 L 0 12 M -3 9 L 3 9" stroke="#fda4af" strokeWidth="1" />
                
                {/* Selection pulse */}
                <circle cx="0" cy="0" r="45" fill="none" stroke="#fda4af" strokeOpacity="0.5" strokeWidth="1">
                  <animate attributeName="r" values="30; 50" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1; 0" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Male Brood Fish (Center Right) */}
              <g transform="translate(320, 225) scale(1.3)">
                <use href="#fishShape" fill="#050A15" stroke="#7dd3fc" strokeWidth="1.5" />
                {/* Male Symbol */}
                <circle cx="0" cy="0" r="5" fill="none" stroke="#7dd3fc" strokeWidth="1" />
                <path d="M 3.5 -3.5 L 9 -9 M 9 -9 L 4 -9 M 9 -9 L 9 -4" fill="none" stroke="#7dd3fc" strokeWidth="1" />
                
                {/* Selection pulse */}
                <circle cx="0" cy="0" r="45" fill="none" stroke="#7dd3fc" strokeOpacity="0.5" strokeWidth="1">
                  <animate attributeName="r" values="30; 50" dur="2s" repeatCount="indefinite" delay="1s" />
                  <animate attributeName="opacity" values="1; 0" dur="2s" repeatCount="indefinite" delay="1s" />
                </circle>
              </g>

              {/* Rejected/Immature fish outside the selection area */}
              <g transform="translate(70, 100) scale(0.8) rotate(30)">
                <use href="#fishShape" fill="none" stroke="#475569" strokeWidth="1" />
              </g>
              <g transform="translate(430, 350) scale(0.9) rotate(-20)">
                <use href="#fishShape" fill="none" stroke="#475569" strokeWidth="1" />
              </g>

              {/* Maturity/Timeline Indicator UI */}
              <g transform="translate(250, 390)">
                <rect x="-80" y="-12" width="160" height="24" rx="12" fill="#050A15" stroke="#f59e0b" strokeWidth="1" />
                
                {/* Progress bar filling up (representing 2-3 years) */}
                <rect x="-76" y="-8" width="152" height="16" rx="8" fill="#451a03" />
                <rect x="-76" y="-8" width="140" height="16" rx="8" fill="#f59e0b">
                  <animate attributeName="width" values="0; 140; 140" dur="6s" repeatCount="indefinite" />
                </rect>
                
                {/* Ticks */}
                <path d="M -70 -8 L -70 8 M -20 -8 L -20 8 M 30 -8 L 30 8 M 70 -8 L 70 8" stroke="#050A15" strokeWidth="2" />
              </g>

              {/* Data connection lines to the fish */}
              <path d="M 180 250 L 180 340 L 230 390" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="stroke-dashoffset" values="20; 0" dur="1s" repeatCount="indefinite" ease="linear" />
              </path>
              <path d="M 320 250 L 320 340 L 270 390" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="stroke-dashoffset" values="20; 0" dur="1s" repeatCount="indefinite" ease="linear" />
              </path>

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
