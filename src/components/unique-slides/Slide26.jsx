import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Cistern Tank SVG ---
const CisternTankSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 25px rgba(14, 165, 233, 0.3))' }}>
        <defs>
          <linearGradient id="tankEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="waterDeep" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="waterFlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Circular Boundary (The Concrete Wall) */}
        <circle cx="250" cy="250" r="220" fill="url(#tankEdge)" stroke="#cbd5e1" strokeWidth="4" />
        <circle cx="250" cy="250" r="210" fill="url(#waterDeep)" stroke="#38bdf8" strokeWidth="2" />

        {/* Central Drain / Aerator */}
        <circle cx="250" cy="250" r="40" fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
        <circle cx="250" cy="250" r="20" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />
        
        {/* Animated Water Flow (Whirlpool effect) */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ originX: "250px", originY: "250px" }}>
          <circle cx="250" cy="250" r="120" fill="none" stroke="url(#waterFlow)" strokeWidth="30" strokeDasharray="150 150" opacity="0.5" />
          <circle cx="250" cy="250" r="160" fill="none" stroke="url(#waterFlow)" strokeWidth="15" strokeDasharray="100 100" opacity="0.3" />
        </motion.g>

        {/* Fish Fry Swimming (Lots of small dots moving in a circle) */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ originX: "250px", originY: "250px" }}>
          {[...Array(40)].map((_, i) => {
            const radius = 80 + Math.random() * 100;
            const angle = (i * 9) * (Math.PI / 180);
            return (
              <circle 
                key={`fish-${i}`}
                cx={250 + radius * Math.cos(angle)}
                cy={250 + radius * Math.sin(angle)}
                r="3"
                fill="#fde047" // Yellowish fry
                opacity={0.6 + Math.random() * 0.4}
              />
            );
          })}
        </motion.g>

        {/* 6-Hour Feeding Cycle HUD Overlay */}
        <g transform="translate(250, 250)">
          {/* Clock face for 24h / 6h cycles */}
          <circle cx="0" cy="0" r="230" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="2,8" />
          
          {/* The 4 Feeding Sectors (0, 6, 12, 18) */}
          {[0, 90, 180, 270].map((deg, i) => (
            <g key={`feed-${i}`} transform={`rotate(${deg})`}>
              <line x1="0" y1="-230" x2="0" y2="-250" stroke="#f59e0b" strokeWidth="3" />
              <circle cx="0" cy="-250" r="6" fill="#f59e0b" />
            </g>
          ))}
          
          {/* Animated Sweeping Radar line (Timer) */}
          <motion.line 
            x1="0" y1="0" x2="0" y2="-250" 
            stroke="rgba(245, 158, 11, 0.5)" strokeWidth="2" 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Technical Callouts */}
        <line x1="450" y1="50" x2="350" y2="100" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="360" y="30" width="120" height="20" fill="rgba(2,132,199,0.3)" stroke="#38bdf8" strokeWidth="1" />
        <text x="370" y="44" fill="#fff" fontSize="10" fontFamily="monospace">O2_DIFFUSER_ON</text>

        <line x1="50" y1="450" x2="150" y2="380" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="30" y="460" width="140" height="20" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
        <text x="40" y="474" fill="#fff" fontSize="10" fontFamily="monospace">6_HOUR_FEED_CYCLE</text>
      </svg>
    </div>
  );
};

const Slide26 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Background Image (Water/Pond/Tank surface) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520658428581-2292f3a61c33?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#050A15] via-[#050A15]/90 to-[#0a1128]/70 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex gap-12 items-center">
        
        {/* Left Panel: SVG Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-1/2 h-[550px] bg-sky-950/20 backdrop-blur-3xl border border-sky-500/30 rounded-[40px] p-6 shadow-2xl relative flex flex-col"
        >
          <div className="absolute top-6 left-8 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <span className="text-sm font-mono tracking-widest text-sky-400">CISTERN_TANK_SYSTEM</span>
          </div>
          
          <div className="flex-1 mt-8">
            <CisternTankSVG />
          </div>
        </motion.div>

        {/* Right Panel: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-1/2 flex flex-col justify-center"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-2 font-mono py-2">
              ধাপ ৬ // Step 06 // Nursing Phase
            </h2>
            <h1 className="text-5xl font-bold text-white py-2 leading-tight">
              রেণু পালন ও পরিচর্যা
            </h1>
          </div>

          <div className="space-y-6">
            {/* Fact 1 */}
            <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 p-6 rounded-2xl shadow-xl flex gap-6 items-start hover:border-sky-500/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 flex-shrink-0">
                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-300 py-1">কম ঘনত্বে সংরক্ষণ</h3>
                <p className="text-slate-300 leading-relaxed py-1">
                  রেণুকে ইনকিউবেশন বা সিস্টার্ন ট্যাংকে কম ঘনত্বে রাখা হয় যাতে তারা পর্যাপ্ত জায়গা ও অক্সিজেন পায়।
                </p>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 p-6 rounded-2xl shadow-xl flex gap-6 items-start hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-300 py-1">নিয়মিত আহার</h3>
                <p className="text-slate-300 leading-relaxed py-1">
                  প্রথমদিকে <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700">৬ ঘণ্টা পর পর</span> কুসুম খাবার দেওয়া হয়। 
                </p>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 p-6 rounded-2xl shadow-xl flex gap-6 items-start hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-300 py-1">পুকুরে স্থানান্তর</h3>
                <p className="text-slate-300 leading-relaxed py-1">
                  <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700">৭২ ঘণ্টা পর</span> এদেরকে সরাসরি নার্সারি পুকুরে স্থানান্তর করা হয়।
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide26;
