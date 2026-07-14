import React from 'react';
import { motion } from 'framer-motion';

const Slide17 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 via-[#0a0f1c] to-slate-900 relative overflow-hidden">
      
      {/* Background Ambient Orbs (Cloudy/Cool Theme) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen" />

      {/* Main Glass Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl h-[85%] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10"
      >
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
              ধাপ ২: উপযুক্ত সময় নির্ধারণ
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              প্রজননের <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 py-2">
                উপযুক্ত সময় নির্ধারণ
              </span>
            </h1>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed relative z-10">
                  সাধারণত মেঘলা দিনে কিংবা যখন পরিবেশ ও পানির তাপমাত্রা তুলনামূলক ঠান্ডা থাকে, তখন রুই মাছকে ইনজেকশন দেওয়ার জন্য বেছে নেওয়া হয়। আমাদের দেশের জলবায়ু অনুযায়ী রুই জাতীয় মাছের ইনজেকশন দেওয়ার সবচেয়ে উপযুক্ত সময় হলো আষাঢ় ও শ্রাবণ মাস (বর্ষাকাল)।
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visuals (Live View SVG Animation) */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full flex items-center justify-center p-8 bg-gradient-to-br from-blue-900/10 to-slate-900/50 border-l border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-[450px] relative rounded-3xl border border-slate-700/50 bg-[#070b14] backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl"
          >
            {/* Highly Intuitive SVG: Clouds, Rain, Cool Temp, and Calendar */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Glass Cloud Gradient */}
                <linearGradient id="cloudGlass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>

                {/* Raindrop Glow */}
                <linearGradient id="rainGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>

                {/* Thermometer Liquid */}
                <linearGradient id="tempCool" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                </linearGradient>

                {/* Holographic Calendar Panel */}
                <linearGradient id="holoPanel" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Background ambient lighting */}
              <circle cx="250" cy="150" r="150" fill="#3b82f6" opacity="0.05" filter="blur(30px)" />

              {/* --- 1. Raining Clouds (Top) --- */}
              <g transform="translate(150, 60)">
                {/* Back Cloud */}
                <path d="M 40 40 Q 60 10, 90 20 Q 120 0, 150 25 Q 180 15, 190 40 Z" fill="#64748b" opacity="0.3" filter="blur(5px)" />
                
                {/* Main Glass Cloud */}
                <path d="M 40 50 C 10 50, 10 90, 40 90 L 170 90 C 200 90, 200 50, 170 50 C 160 20, 110 20, 100 40 C 90 25, 50 25, 40 50 Z" fill="url(#cloudGlass)" stroke="#e2e8f0" strokeWidth="1.5" strokeOpacity="0.5" />
                
                {/* Animated Rain Drops */}
                {[...Array(6)].map((_, i) => (
                  <rect key={`rain-${i}`} x={50 + i * 20} y="95" width="2" height="15" rx="1" fill="url(#rainGlow)">
                    <animate attributeName="y" values="95; 220" dur={`${1 + Math.random() * 0.5}s`} repeatCount="indefinite" begin={`${Math.random()}s`} />
                    <animate attributeName="opacity" values="0; 1; 0" dur={`${1 + Math.random() * 0.5}s`} repeatCount="indefinite" begin={`${Math.random()}s`} />
                  </rect>
                ))}
              </g>

              {/* --- 2. Cool Water Surface (Bottom) --- */}
              <g transform="translate(0, 300)">
                <path d="M 0 50 Q 125 30, 250 50 T 500 50 L 500 150 L 0 150 Z" fill="#0f172a" />
                <path d="M 0 50 Q 125 30, 250 50 T 500 50" fill="none" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.4">
                  <animate attributeName="d" values="M 0 50 Q 125 30, 250 50 T 500 50; M 0 50 Q 125 70, 250 50 T 500 50; M 0 50 Q 125 30, 250 50 T 500 50" dur="4s" repeatCount="indefinite" ease="easeInOut" />
                </path>
                <path d="M 0 60 Q 125 40, 250 60 T 500 60" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.2">
                  <animate attributeName="d" values="M 0 60 Q 125 80, 250 60 T 500 60; M 0 60 Q 125 40, 250 60 T 500 60; M 0 60 Q 125 80, 250 60 T 500 60" dur="5s" repeatCount="indefinite" ease="easeInOut" />
                </path>
              </g>

              {/* --- 3. Thermometer (Cool Temperature) --- */}
              <g transform="translate(50, 150)">
                {/* Thermometer Glass Body */}
                <rect x="25" y="0" width="10" height="100" rx="5" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="30" cy="110" r="15" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
                
                {/* Liquid Level (Low/Cool) */}
                <circle cx="30" cy="110" r="10" fill="url(#tempCool)" />
                <rect x="27" y="60" width="6" height="50" fill="url(#tempCool)">
                  <animate attributeName="y" values="30; 60; 60" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="height" values="80; 50; 50" dur="6s" repeatCount="indefinite" />
                </rect>

                {/* Tick marks */}
                <line x1="40" y1="20" x2="45" y2="20" stroke="#64748b" strokeWidth="1" />
                <line x1="40" y1="40" x2="48" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="40" y1="60" x2="45" y2="60" stroke="#64748b" strokeWidth="1" />
                <line x1="40" y1="80" x2="48" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

                <text x="55" y="65" fill="#38bdf8" fontSize="14" fontFamily="sans-serif" fontWeight="bold">ঠান্ডা</text>
              </g>

              {/* --- 4. Holographic Calendar (বর্ষাকাল: আষাঢ় ও শ্রাবণ) --- */}
              <g transform="translate(320, 160)">
                <rect x="0" y="0" width="130" height="110" rx="10" fill="url(#holoPanel)" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.5" />
                <rect x="5" y="5" width="120" height="25" rx="5" fill="#3b82f6" fillOpacity="0.2" />
                
                {/* Calendar Icon Lines */}
                <line x1="30" y1="-5" x2="30" y2="10" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="100" y1="-5" x2="100" y2="10" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />

                {/* English Label equivalent for universal aesthetics (Months) */}
                <text x="65" y="22" fill="#93c5fd" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                  বর্ষাকাল
                </text>
                
                {/* Month Highlights (Asharh & Shrabon visually represented) */}
                <rect x="15" y="40" width="100" height="25" rx="4" fill="#3b82f6" opacity="0.3">
                  <animate attributeName="opacity" values="0.1; 0.5; 0.1" dur="2s" repeatCount="indefinite" />
                </rect>
                <text x="65" y="57" fill="#ffffff" fontSize="14" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                  আষাঢ়
                </text>

                <rect x="15" y="70" width="100" height="25" rx="4" fill="#3b82f6" opacity="0.3">
                  <animate attributeName="opacity" values="0.1; 0.5; 0.1" dur="2s" repeatCount="indefinite" begin="1s" />
                </rect>
                <text x="65" y="87" fill="#ffffff" fontSize="14" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                  শ্রাবণ
                </text>
              </g>

            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide17;
