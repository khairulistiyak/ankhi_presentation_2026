import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Breeding Hapa SVG ---
const HapaSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(52, 211, 153, 0.2))' }}>
        <defs>
          <linearGradient id="waterSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 8 M 0 0 L 8 8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Background Grid */}
        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          {[...Array(13)].map((_, i) => (
            <React.Fragment key={i}>
              <line x1={i * 40} y1="0" x2={i * 40} y2="400" />
            </React.Fragment>
          ))}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={`h-${i}`}>
              <line x1="0" y1={i * 40} x2="500" y2={i * 40} />
            </React.Fragment>
          ))}
        </g>

        {/* Isometric Tank/Water Bounds */}
        <g transform="translate(250, 200) scale(1, 0.5) rotate(45)">
          <rect x="-150" y="-150" width="300" height="300" fill="url(#waterSurface)" stroke="#38bdf8" strokeWidth="2" />
        </g>
        
        {/* The Hapa Net (Suspended Enclosure) */}
        <g transform="translate(250, 150)">
          {/* Top Frame of Hapa */}
          <polygon 
            points="0,-60 120,0 0,60 -120,0" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="3" 
          />
          {/* Bottom Frame of Hapa */}
          <polygon 
            points="0,60 120,120 0,180 -120,120" 
            fill="url(#mesh)" 
            stroke="rgba(16,185,129,0.5)" 
            strokeWidth="2" 
          />
          {/* Vertical supports connecting top and bottom */}
          <line x1="0" y1="-60" x2="0" y2="60" stroke="#10b981" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="120" y1="0" x2="120" y2="120" stroke="#10b981" strokeWidth="2" />
          <line x1="-120" y1="0" x2="-120" y2="120" stroke="#10b981" strokeWidth="2" />
          <line x1="0" y1="60" x2="0" y2="180" stroke="#10b981" strokeWidth="2" />
          
          {/* Side Meshes */}
          <polygon points="120,0 0,60 0,180 120,120" fill="url(#mesh)" stroke="none" />
          <polygon points="-120,0 0,60 0,180 -120,120" fill="url(#mesh)" stroke="none" />

          {/* Abstract Fish inside the Hapa */}
          <g>
            <motion.ellipse 
              cx="-20" cy="80" rx="15" ry="5" fill="rgba(244,63,94,0.8)" 
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.ellipse 
              cx="40" cy="100" rx="20" ry="6" fill="rgba(56,189,248,0.8)" 
              animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </g>
        </g>

        {/* Anchors and Ropes */}
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
          <line x1="130" y1="90" x2="80" y2="20" strokeDasharray="3,3" />
          <line x1="370" y1="150" x2="420" y2="80" strokeDasharray="3,3" />
          <circle cx="80" cy="20" r="4" fill="#64748b" />
          <circle cx="420" cy="80" r="4" fill="#64748b" />
        </g>

        {/* Animated Eggs / Particles releasing */}
        <g>
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={250 + (Math.random() * 80 - 40)}
              cy={240 + (Math.random() * 40 - 20)}
              r="2"
              fill="#fbbf24"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: 40 }}
              transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </g>
        
        {/* Floating Labels */}
        <g transform="translate(380, 250)">
          <line x1="-30" y1="-30" x2="-80" y2="-50" stroke="#10b981" strokeWidth="1" />
          <rect x="-40" y="-35" width="60" height="15" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
          <text x="-35" y="-25" fill="#fff" fontSize="8" fontFamily="monospace">HAPA_NET_01</text>
        </g>
      </svg>
    </div>
  );
};

const Slide23 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Background Image (Fishing net / water) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544552866-d3ed42536fcb?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15]/95 via-[#050A15]/80 to-transparent z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-between">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-2 font-mono py-2">
            ধাপ ৪ // Step 04 // Natural Spawning
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            মাছের মিলন ও নিষিক্তকরণ
          </h1>
        </motion.div>

        {/* Content & SVG Grid */}
        <div className="flex gap-12 h-full items-center">
          
          {/* Left Text Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1/2 flex flex-col gap-6"
          >
            {/* Primary Method Card */}
            <div className="backdrop-blur-xl bg-slate-900/60 border border-emerald-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-emerald-500/60 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-300 py-2">সহজাত প্রক্রিয়া (Natural)</h3>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed py-2 font-light">
                দ্বিতীয় ডোজ দেওয়ার ৫-৬ ঘণ্টা পর মাছগুলোকে পানির ট্যাংকে ছেড়ে দিলে স্বাভাবিক নিয়মেই ডিম ও শুক্রাণু বের হয় এবং নিষিক্তকরণ সম্পন্ন হয়।
              </p>
            </div>

            {/* Alternative Method Card */}
            <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 p-8 rounded-2xl shadow-xl hover:border-slate-500/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                  <span className="text-slate-300 font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-200 py-2">স্ট্রিপিং পদ্ধতি (Stripping)</h3>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed py-2">
                বিকল্প পদ্ধতি হিসেবে, মাছের পেটে অত্যন্ত হালকা চাপ দিয়ে কৃত্রিমভাবে ডিম ও শুক্রাণু সংগ্রহ করা যায়।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-1/2 h-[500px] relative"
          >
            <div className="w-full h-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="absolute top-4 left-6 text-xs text-slate-500 font-mono tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                HAPA_SYSTEM_MONITOR
              </div>
              <HapaSVG />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide23;
