import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Cost-Efficiency Graph SVG ---
const EfficiencyGraphSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(244, 63, 94, 0.2))' }}>
        <defs>
          <linearGradient id="prodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="costGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid Background */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[...Array(11)].map((_, i) => (
            <React.Fragment key={`grid-${i}`}>
              <line x1="50" y1={50 + i * 30} x2="450" y2={50 + i * 30} />
              <line x1={50 + i * 40} y1="50" x2={50 + i * 40} y2="350" />
            </React.Fragment>
          ))}
        </g>

        {/* Axes */}
        <line x1="50" y1="350" x2="450" y2="350" stroke="#94a3b8" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="350" stroke="#94a3b8" strokeWidth="2" />
        
        {/* Axis Labels */}
        <text x="35" y="60" fill="#94a3b8" fontSize="12" fontFamily="monospace" transform="rotate(-90 35 60)">HIGH</text>
        <text x="35" y="340" fill="#94a3b8" fontSize="12" fontFamily="monospace" transform="rotate(-90 35 340)">LOW</text>
        <text x="430" y="370" fill="#94a3b8" fontSize="12" fontFamily="monospace">TIME ➔</text>

        {/* Cost Line (Going Down) */}
        <motion.path 
          d="M 50 100 C 150 120, 250 250, 450 320" 
          fill="none" 
          stroke="#f43f5e" 
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <path d="M 50 100 C 150 120, 250 250, 450 320 L 450 350 L 50 350 Z" fill="url(#costGrad)" opacity="0.3" />
        
        {/* Production Line (Going Up) */}
        <motion.path 
          d="M 50 300 C 200 280, 300 150, 450 80" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        <path d="M 50 300 C 200 280, 300 150, 450 80 L 450 350 L 50 350 Z" fill="url(#prodGrad)" opacity="0.3" />

        {/* Intersection Point / Optimal Zone */}
        <motion.circle 
          cx="275" cy="225" r="6" fill="#fff" stroke="#3b82f6" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: 1 }}
          transition={{ duration: 1.5, delay: 2, repeat: Infinity }}
        />
        <motion.line 
          x1="275" y1="225" x2="275" y2="350" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        />
        <motion.line 
          x1="50" y1="225" x2="275" y2="225" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        />

        {/* Legend */}
        <rect x="70" y="70" width="12" height="12" fill="#10b981" />
        <text x="90" y="80" fill="#fff" fontSize="12" fontFamily="monospace">PRODUCTION YIELD</text>
        
        <rect x="70" y="95" width="12" height="12" fill="#f43f5e" />
        <text x="90" y="105" fill="#fff" fontSize="12" fontFamily="monospace">TIME & COST</text>
        
      </svg>
    </div>
  );
};

const Slide29 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center">
      
      {/* Background Image - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1584351583369-6baf055b51a7?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle Grid overlay for that technical architectural feel */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050A15] via-[#050A15]/80 to-transparent z-0" />

      {/* Main Container - Left aligned content, right aligned SVG */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex justify-between items-center">
        
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-rose-400 mb-2 font-mono py-2">
            সুবিধাসমূহ // Advantages // Part 3
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight mb-8">
            প্রণোদিত প্রজননের<br/><span className="text-rose-400">সুবিধাসমূহ</span>
          </h1>

          <div className="space-y-8">
            {/* Advantage 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-3 border-b border-rose-500/30 pb-3">
                <div className="text-rose-400 font-mono text-2xl font-bold bg-rose-950/50 w-12 h-12 flex items-center justify-center rounded-xl border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                  ৫
                </div>
                <h3 className="text-2xl font-bold text-white">স্বল্প খরচ ও অধিক উৎপাদন</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed ml-16 bg-slate-900/40 p-4 rounded-xl border border-slate-700/50">
                এই পদ্ধতিতে অত্যন্ত <span className="text-rose-400 font-bold">স্বল্প সময়ে</span> এবং <span className="text-emerald-400 font-bold">অল্প খরচে</span> অধিক পরিমাণ রেণু পোনা উৎপাদন করা সম্ভব হয়।
              </p>
            </motion.div>

            {/* Advantage 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-3 border-b border-purple-500/30 pb-3">
                <div className="text-purple-400 font-mono text-2xl font-bold bg-purple-950/50 w-12 h-12 flex items-center justify-center rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  ৬
                </div>
                <h3 className="text-2xl font-bold text-white">নিজস্ব খামারে উৎপাদন</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed ml-16 bg-slate-900/40 p-4 rounded-xl border border-slate-700/50">
                মাছের রেণু পোনা সংগ্রহের জন্য অন্য কোথাও বা প্রাকৃতিক উৎসের ওপর নির্ভর করতে হয় না, <span className="text-purple-400 font-bold">নিজস্ব খামারেই</span> উৎপাদন করা যায়।
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right SVG Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-6/12 h-[500px] bg-slate-900/60 backdrop-blur-3xl border border-slate-700/80 rounded-[40px] p-8 shadow-2xl relative"
        >
          <div className="absolute top-6 left-8 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-400">COST_BENEFIT_ANALYSIS</span>
          </div>
          <div className="mt-8 w-full h-full">
            <EfficiencyGraphSVG />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide29;
