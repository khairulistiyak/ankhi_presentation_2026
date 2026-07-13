import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Shield/Protection SVG ---
const BioShieldSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 30px rgba(14, 165, 233, 0.4))' }}>
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background Tech Grid */}
        <g stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1">
          <circle cx="250" cy="250" r="230" fill="url(#glow)" />
          <circle cx="250" cy="250" r="200" fill="none" strokeDasharray="10 5" />
          <circle cx="250" cy="250" r="160" fill="none" />
          
          <line x1="250" y1="20" x2="250" y2="480" />
          <line x1="20" y1="250" x2="480" y2="250" />
        </g>

        {/* The Energy Shield */}
        <motion.path 
          d="M 250 50 L 400 100 L 400 250 C 400 350, 250 450, 250 450 C 250 450, 100 350, 100 250 L 100 100 Z" 
          fill="url(#shieldGrad)" 
          stroke="#38bdf8" 
          strokeWidth="4" 
          strokeLinecap="round" strokeLinejoin="round"
          animate={{ scale: [1, 1.02, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner Shield Layer */}
        <path 
          d="M 250 80 L 360 120 L 360 250 C 360 320, 250 400, 250 400 C 250 400, 140 320, 140 250 L 140 120 Z" 
          fill="none" 
          stroke="#7dd3fc" 
          strokeWidth="2" 
          strokeDasharray="15 5" 
        />

        {/* Abstract Fish Silhouette Inside Shield */}
        <g transform="translate(180, 190) scale(1.4)" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Body */}
          <path d="M 0 50 Q 50 10, 100 50 Q 50 90, 0 50 Z" fill="rgba(255,255,255,0.1)" />
          {/* Tail */}
          <path d="M 0 50 L -30 20 L -20 50 L -30 80 Z" />
          {/* Eye */}
          <circle cx="80" cy="45" r="2" fill="#fff" />
          {/* Fins */}
          <path d="M 40 25 L 50 10 L 60 25" />
          <path d="M 40 75 L 50 90 L 60 75" />
          
          {/* Scanning Line over fish */}
          <motion.line 
            x1="-30" y1="0" x2="110" y2="0" stroke="#38bdf8" strokeWidth="2"
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Forcefield Repulsion Rings (Pathogens bouncing off) */}
        <motion.circle 
          cx="250" cy="250" r="180" fill="none" stroke="#e0f2fe" strokeWidth="1"
          animate={{ r: [160, 180, 190], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Red dots (Pathogens/Threats) outside the shield */}
        {[
          { cx: 80, cy: 150 },
          { cx: 420, cy: 200 },
          { cx: 120, cy: 380 },
          { cx: 380, cy: 350 },
          { cx: 250, cy: 30 }
        ].map((pos, i) => (
          <g key={`threat-${i}`}>
            <circle cx={pos.cx} cy={pos.cy} r="6" fill="#ef4444" />
            <path d={`M ${pos.cx-4} ${pos.cy-4} L ${pos.cx+4} ${pos.cy+4} M ${pos.cx-4} ${pos.cy+4} L ${pos.cx+4} ${pos.cy-4}`} stroke="#fff" strokeWidth="1.5" />
          </g>
        ))}

        {/* UI Badges */}
        <g transform="translate(180, 410)">
          <rect x="0" y="0" width="140" height="25" rx="4" fill="#0284c7" />
          <text x="70" y="16" fill="#fff" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">99.9% SURVIVAL</text>
        </g>

      </svg>
    </div>
  );
};

const Slide28 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">
      
      {/* Background Image (Clear water / healthy fish) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#0f172a]/90 to-[#020617]/70 z-0" />

      {/* Main Container - Diagonal Layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-center">
        
        {/* Top Right Header */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-12 right-12 text-right"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-2 font-mono py-2">
            সুবিধাসমূহ // Advantages // Part 2
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            প্রণোদিত প্রজননের<br/><span className="text-sky-400">সুবিধাসমূহ</span>
          </h1>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex gap-16 items-center mt-20">
          
          {/* Left SVG Shield */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-1/2 h-[500px]"
          >
            <BioShieldSVG />
          </motion.div>

          {/* Right Cards */}
          <div className="w-1/2 space-y-8 mt-16">
            
            {/* Advantage 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700 p-8 rounded-3xl shadow-2xl hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg border border-white/20 transform -rotate-6">
                ৩
              </div>
              <h3 className="text-2xl font-bold text-white ml-8 mb-4 border-b border-slate-700 pb-4">রোগ প্রতিরোধ ক্ষমতা</h3>
              <p className="text-lg text-slate-300 leading-relaxed ml-8">
                উন্নত প্রজাতির পোনা হওয়ার কারণে এদের <span className="text-sky-400 font-bold">রোগ প্রতিরোধ ক্ষমতা</span> বেশি থাকে এবং এরা দ্রুত বৃদ্ধি পায়।
              </p>
            </motion.div>

            {/* Advantage 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700 p-8 rounded-3xl shadow-2xl hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg border border-white/20 transform -rotate-6">
                ৪
              </div>
              <h3 className="text-2xl font-bold text-white ml-8 mb-4 border-b border-slate-700 pb-4">নিরাপদ পরিবেশ</h3>
              <p className="text-lg text-slate-300 leading-relaxed ml-8">
                হ্যাচারির সম্পূর্ণ নিয়ন্ত্রিত ও কৃত্রিম পরিবেশে প্রাকৃতিক শত্রুর (যেমন: রাক্ষুসে মাছ, সাপ, ব্যাঙ) হাত থেকে পোনা রক্ষা পায়, ফলে <span className="text-sky-400 font-bold">মৃত্যুর হার অত্যন্ত কম</span> হয়।
              </p>
            </motion.div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Slide28;
