import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Weather SVG ---
const WeatherSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 15px rgba(56, 189, 248, 0.4))' }}>
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="rainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="thermoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid Background */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <line x1={i * 40} y1="0" x2={i * 40} y2="400" />
              <line x1="0" y1={i * 40} x2="400" y2={i * 40} />
            </React.Fragment>
          ))}
        </g>

        {/* Outer Circular Bounds */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />

        {/* The Cloud Structure (Geometric) */}
        <g transform="translate(140, 150)">
          <path
            d="M 20 40 A 30 30 0 0 1 70 20 A 40 40 0 0 1 140 40 A 25 25 0 0 1 120 80 L 20 80 A 20 20 0 0 1 20 40 Z"
            fill="url(#cloudGrad)"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          {/* Cloud internal contour lines */}
          <path d="M 50 25 Q 70 10 90 25" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 40 45 Q 60 35 80 45" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
        </g>

        {/* Animated Rain Drops (Data lines) */}
        <g>
          {[160, 180, 200, 220, 240, 260].map((x, i) => (
            <motion.line
              key={i}
              x1={x}
              y1="240"
              x2={x - 20}
              y2="300"
              stroke="url(#rainGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0, 100", strokeDashoffset: 0 }}
              animate={{ strokeDasharray: "20, 40", strokeDashoffset: -60 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}
        </g>

        {/* Thermometer / Temperature Gauge */}
        <g transform="translate(300, 100)">
          <rect x="0" y="0" width="16" height="120" rx="8" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <circle cx="8" cy="130" r="16" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          
          {/* Animated Mercury Drop */}
          <motion.rect 
            x="4" 
            y="20" 
            width="8" 
            height="100" 
            rx="4" 
            fill="url(#thermoGrad)"
            initial={{ y: 0, height: 100 }}
            animate={{ y: 60, height: 40 }} // Temperature dropping
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <circle cx="8" cy="130" r="10" fill="#3b82f6" />
          
          {/* Gauge Marks */}
          {[10, 30, 50, 70, 90, 110].map((y, i) => (
            <line key={i} x1="-5" y1={y} x2="0" y2={y} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          ))}
          <text x="-25" y="15" fill="#ef4444" fontSize="10" fontFamily="monospace">MAX</text>
          <text x="-25" y="115" fill="#3b82f6" fontSize="10" fontFamily="monospace">MIN</text>
        </g>

        {/* Data Nodes */}
        <circle cx="150" cy="120" r="4" fill="#38bdf8" />
        <line x1="150" y1="120" x2="100" y2="80" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
        <rect x="50" y="65" width="45" height="15" rx="2" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1" />
        <text x="55" y="76" fill="#fff" fontSize="8" fontFamily="monospace">HUMIDITY</text>

        <circle cx="280" cy="180" r="4" fill="#38bdf8" />
        <line x1="280" y1="180" x2="340" y2="180" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" />
        
        {/* Wind indicators */}
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" strokeDasharray="4,4">
          <motion.path 
            d="M 50 180 Q 90 170 120 180" 
            animate={{ x: [0, 20, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 30 200 Q 70 190 100 200" 
            animate={{ x: [0, 30, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </g>
      </svg>
    </div>
  );
};

const Slide21 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Background with real image - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2000&auto=format&fit=crop')`, // Real rainy/cloudy landscape
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15]/90 via-[#0a1128]/80 to-transparent z-0" />

      {/* Main Split Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex gap-12">
        
        {/* Left Panel: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-1/2 flex flex-col justify-center gap-8"
        >
          {/* Header */}
          <div className="relative">
            <div className="absolute -left-6 top-0 w-2 h-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2 font-mono py-2">
              ধাপ ২ // Step 02
            </h2>
            <h1 className="text-5xl font-bold text-white mb-4 py-2 leading-tight">
              উপযুক্ত সময় নির্ধারণ
            </h1>
          </div>

          {/* Glass Card for Content */}
          <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            
            <p className="text-2xl text-slate-300 py-2 leading-relaxed mb-6 font-light">
              প্রজননের জন্য বর্ষাকাল অর্থাৎ আষাঢ়-শ্রাবণ মাস সবচেয়ে উপযুক্ত। 
            </p>
            
            <div className="flex items-center gap-4 bg-slate-800/50 border border-slate-600/30 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/40">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-xl text-slate-200 py-2 leading-relaxed">
                মেঘলা ও হাওয়াযুক্ত ঠান্ডা আবহাওয়া এই প্রক্রিয়ার জন্য সবচেয়ে বেশি উপযোগী।
              </p>
            </div>
            
            {/* Minimalist Data Readouts */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-700/50 pt-6">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Optimal Season</span>
                <div className="text-lg text-blue-300 mt-1 py-2 leading-normal">আষাঢ়-শ্রাবণ</div>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Condition Req.</span>
                <div className="text-lg text-blue-300 mt-1 py-2 leading-normal">মেঘলা ও হাওয়াযুক্ত</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel: Custom SVG Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-1/2 relative flex items-center justify-center"
        >
          {/* Glowing Orb Background */}
          <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
          
          {/* The Weather Dashboard Container */}
          <div className="w-full aspect-square backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-8 shadow-2xl relative">
            {/* Top right tech accent */}
            <div className="absolute top-6 right-6 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
            <div className="absolute top-6 left-6 text-xs font-mono text-slate-500">SYS.WEATHER.MONITOR</div>
            
            <WeatherSVG />
            
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide21;
