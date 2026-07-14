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
            {/* SVG Live Animation representing Hapa (net), Artificial Shower, Flowing Water, Oxygen */}
            <svg width="100%" height="100%" viewBox="0 0 500 450" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              
              <defs>
                {/* Hapa Net Pattern */}
                <pattern id="hapaNet" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 20 M 0 0 L 20 20" fill="none" stroke="#0ea5e9" strokeOpacity="0.15" strokeWidth="1"/>
                </pattern>

                <linearGradient id="showerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="poolGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#082f49" stopOpacity="0.9" />
                </linearGradient>

                {/* Abstract Fish Silhouette */}
                <path id="restingFish" d="M -30 0 C -15 -15, 15 -18, 30 0 C 15 18, -15 15, -30 0 Z M -30 0 L -45 -12 L -40 0 L -45 12 Z" />
              </defs>

              {/* Background Net (Hapa enclosure) */}
              <rect x="50" y="100" width="400" height="350" fill="url(#hapaNet)" />
              {/* Hapa Borders */}
              <rect x="50" y="100" width="400" height="350" fill="none" stroke="#0ea5e9" strokeOpacity="0.3" strokeWidth="4" />
              <line x1="50" y1="100" x2="450" y2="100" stroke="#0ea5e9" strokeOpacity="0.8" strokeWidth="6" strokeLinecap="round" />

              {/* Artificial Shower / Water Flow (কৃত্রিম ঝরনা) */}
              {[...Array(20)].map((_, i) => (
                <line 
                  key={`shower-${i}`}
                  x1={80 + (i * 18)} 
                  y1="0" 
                  x2={80 + (i * 18)} 
                  y2="150" 
                  stroke="url(#showerGrad)" 
                  strokeWidth="2"
                  strokeDasharray="10 15"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="50; 0" 
                    dur={`${Math.random() * 0.5 + 0.3}s`} 
                    repeatCount="indefinite" 
                    ease="linear" 
                  />
                </line>
              ))}

              {/* Water Pool inside Hapa */}
              <path fill="url(#poolGrad)">
                <animate 
                  attributeName="d" 
                  dur="4s" 
                  repeatCount="indefinite" 
                  values="
                    M 50 250 C 150 230, 350 270, 450 250 L 450 450 L 50 450 Z;
                    M 50 250 C 150 270, 350 230, 450 250 L 450 450 L 50 450 Z;
                    M 50 250 C 150 230, 350 270, 450 250 L 450 450 L 50 450 Z
                  " 
                />
              </path>

              {/* Fish inside Hapa (Conditioning) */}
              <g transform="translate(180, 330) scale(1.2)">
                <use href="#restingFish" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Subtle breathing animation */}
                <animateTransform attributeName="transform" type="translate" values="180,330; 180,335; 180,330" dur="3s" repeatCount="indefinite" />
              </g>
              <g transform="translate(320, 370) scale(1.1) scale(-1, 1)">
                <use href="#restingFish" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <animateTransform attributeName="transform" type="translate" values="320,370; 320,375; 320,370" dur="3.5s" repeatCount="indefinite" />
              </g>

              {/* Oxygen Bubbles (পর্যাপ্ত অক্সিজেন) */}
              {[...Array(12)].map((_, i) => (
                <circle 
                  key={`bubble-${i}`} 
                  cx={100 + (Math.random() * 300)} 
                  cy="450" 
                  r={Math.random() * 3 + 2} 
                  fill="#ffffff" 
                  fillOpacity="0.7"
                >
                  <animate 
                    attributeName="cy" 
                    values={`450; 250`} 
                    dur={`${Math.random() * 2 + 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 2}s`} 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0; 1; 0" 
                    dur={`${Math.random() * 2 + 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${Math.random() * 2}s`} 
                  />
                </circle>
              ))}

              {/* Splash effects where shower hits water */}
              <g transform="translate(0, 250)">
                {[...Array(6)].map((_, i) => (
                  <ellipse key={`splash-${i}`} cx={100 + i * 50} cy="0" rx="10" ry="3" fill="none" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1">
                    <animate attributeName="rx" values="5; 15" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                    <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                  </ellipse>
                ))}
              </g>

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
