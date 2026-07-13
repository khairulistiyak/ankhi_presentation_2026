import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Yolk-Sac Fry SVG ---
const YolkSacFrySVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 600 300" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 15px rgba(234, 179, 8, 0.3))' }}>
        <defs>
          <linearGradient id="fryBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="yolkGrad" cx="50%" cy="50%" r="50%">
            <stop offset="30%" stopColor="#eab308" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient id="eggShell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>

        {/* Technical Grid Background */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[...Array(16)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
          ))}
          {[...Array(8)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} />
          ))}
        </g>

        {/* Broken Egg Shell (Left Side) */}
        <g transform="translate(150, 150)">
          <path d="M -40 -60 Q -80 -60, -80 0 Q -80 60, -40 60 L -30 20 L -10 40 L -20 -10 L 0 -30 Z" fill="url(#eggShell)" stroke="#fde047" strokeWidth="2" />
          <path d="M -30 -50 Q -60 -50, -60 0 Q -60 50, -30 50" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray="4,4" />
          
          <motion.circle 
            cx="-60" cy="0" r="3" fill="#eab308"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="-90" y="80" fill="#fde047" fontSize="10" fontFamily="monospace">EGG_CHORION</text>
        </g>

        {/* The Fry (Larva) (Right Side) */}
        <g transform="translate(300, 150)">
          {/* Animated swimming motion for the body/tail */}
          <motion.path
            d="M -80 0 Q -20 -20, 40 -10 Q 120 0, 180 -20 Q 150 0, 180 20 Q 120 0, 40 10 Q -20 20, -80 0"
            fill="url(#fryBody)"
            stroke="#fde047"
            strokeWidth="1.5"
            animate={{ d: [
              "M -80 0 Q -20 -20, 40 -10 Q 120 0, 180 -20 Q 150 0, 180 20 Q 120 0, 40 10 Q -20 20, -80 0",
              "M -80 0 Q -20 -10, 40 10 Q 120 0, 180 30 Q 150 0, 180 -10 Q 120 0, 40 -10 Q -20 10, -80 0",
              "M -80 0 Q -20 -20, 40 -10 Q 120 0, 180 -20 Q 150 0, 180 20 Q 120 0, 40 10 Q -20 20, -80 0"
            ]}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Eye */}
          <circle cx="-60" cy="-5" r="4" fill="#000" stroke="#fde047" strokeWidth="1" />
          
          {/* The Yolk Sac (Attached to belly) */}
          <motion.ellipse 
            cx="-30" cy="15" rx="35" ry="20" 
            fill="url(#yolkGrad)" stroke="#eab308" strokeWidth="2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Yolk sac internal nutrients (animated particles) */}
          {[...Array(6)].map((_, i) => (
            <motion.circle 
              key={`nutrient-${i}`}
              cx={-30 + (Math.random() * 40 - 20)}
              cy={15 + (Math.random() * 20 - 10)}
              r="2"
              fill="#fff"
              animate={{ opacity: [0, 1, 0], y: [-2, 2, -2] }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity }}
            />
          ))}

          {/* Indicators */}
          <line x1="-30" y1="40" x2="-30" y2="80" stroke="#eab308" strokeWidth="1" strokeDasharray="3,3" />
          <rect x="-65" y="80" width="70" height="15" fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth="1" />
          <text x="-60" y="90" fill="#fff" fontSize="8" fontFamily="monospace">YOLK_SAC (72h)</text>
        </g>
        
        {/* Timeline connection between egg and fry */}
        <motion.path 
          d="M 120 150 Q 180 100, 220 150" 
          fill="none" 
          stroke="#fde047" 
          strokeWidth="2" 
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <text x="145" y="115" fill="#fde047" fontSize="10" fontFamily="monospace">20-24 HRS</text>

      </svg>
    </div>
  );
};

const Slide25 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex flex-col justify-between">
      
      {/* Background Image (Larvae / Fish Fry) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/80 to-[#050A15]/40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-between">
        
        {/* Top Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-4"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-2 font-mono py-2">
            ধাপ ৫ // Step 05 // Incubation
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            রেণু (Renu) উৎপাদন
          </h1>
        </motion.div>

        {/* Central SVG Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[350px] bg-slate-950/40 backdrop-blur-3xl border border-yellow-500/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.1)] relative my-8"
        >
          <div className="absolute top-4 left-6 text-xs text-yellow-500 font-mono tracking-widest">INCUBATION_PHASE.sys</div>
          <YolkSacFrySVG />
        </motion.div>

        {/* Bottom Information Cards (Timeline Layout) */}
        <div className="grid grid-cols-2 gap-8 mb-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-xl bg-slate-900/60 border-t-4 border-t-yellow-500 border-x border-b border-slate-700/50 p-8 rounded-b-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-slate-700/50 pb-4">
              <div className="text-3xl font-bold text-yellow-400">২০-২৪ ঘ.</div>
              <div className="h-8 w-px bg-slate-700" />
              <h3 className="text-xl font-bold text-white py-2">হ্যাচিং বা ডিম ফোটা</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed py-2">
              নিষিক্ত ডিমগুলো নির্দিষ্ট তাপমাত্রায় রাখার পর ২০ থেকে ২৪ ঘণ্টার মধ্যেই ফুটে রেণু বা লার্ভা বের হয়।
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="backdrop-blur-xl bg-slate-900/60 border-t-4 border-t-orange-500 border-x border-b border-slate-700/50 p-8 rounded-b-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-slate-700/50 pb-4">
              <div className="text-3xl font-bold text-orange-400">৭২ ঘণ্টা</div>
              <div className="h-8 w-px bg-slate-700" />
              <h3 className="text-xl font-bold text-white py-2">কুসুম আহার</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed py-2">
              প্রথম তিন দিন (৭২ ঘণ্টা) রেণু পোনারা নিজেদের কুসুম খেয়েই বেঁচে থাকে, বাইরে থেকে কোনো খাবার দেওয়ার প্রয়োজন হয় না।
            </p>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Slide25;
