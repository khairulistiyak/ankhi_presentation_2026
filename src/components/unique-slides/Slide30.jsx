import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Growth/Network SVG ---
const GrowthNetworkSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 25px rgba(250, 204, 21, 0.3))' }}>
        <defs>
          <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="1" />
            <stop offset="40%" stopColor="#eab308" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Orbital Rings */}
        <g stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none">
          <circle cx="250" cy="250" r="200" />
          <circle cx="250" cy="250" r="150" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="100" />
          
          <line x1="250" y1="30" x2="250" y2="470" />
          <line x1="30" y1="250" x2="470" y2="250" />
          <line x1="94" y1="94" x2="406" y2="406" />
          <line x1="94" y1="406" x2="406" y2="94" />
        </g>

        {/* The Central Glowing Core */}
        <motion.circle 
          cx="250" cy="250" r="40" fill="url(#centerCore)"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="250" cy="250" r="15" fill="#fef08a" />

        {/* Expanding Network Nodes */}
        {[
          { cx: 350, cy: 150, r: 10, delay: 0 },
          { cx: 150, cy: 100, r: 8, delay: 0.5 },
          { cx: 120, cy: 320, r: 12, delay: 1 },
          { cx: 380, cy: 360, r: 9, delay: 1.5 },
          { cx: 250, cy: 80, r: 6, delay: 0.8 },
          { cx: 420, cy: 250, r: 7, delay: 1.2 },
          { cx: 80, cy: 220, r: 5, delay: 0.3 }
        ].map((node, i) => (
          <g key={`node-${i}`}>
            <motion.line 
              x1="250" y1="250" x2={node.cx} y2={node.cy} 
              stroke="#eab308" strokeWidth="2" strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: node.delay }}
            />
            <motion.circle 
              cx={node.cx} cy={node.cy} r={node.r} fill="#fde047" stroke="#ca8a04" strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: node.delay + 0.5, type: "spring" }}
            />
            {/* Ping effect */}
            <motion.circle 
              cx={node.cx} cy={node.cy} r={node.r} fill="none" stroke="#fde047" strokeWidth="1"
              animate={{ r: [node.r, node.r + 20], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
            />
          </g>
        ))}

        {/* UI Overlays */}
        <g stroke="#facc15" strokeWidth="1.5" fill="none">
          <rect x="50" y="50" width="30" height="30" />
          <line x1="45" y1="50" x2="85" y2="50" />
          <line x1="50" y1="45" x2="50" y2="85" />
          
          <rect x="420" y="420" width="30" height="30" />
          <line x1="415" y1="450" x2="455" y2="450" />
          <line x1="450" y1="415" x2="450" y2="455" />
        </g>
        <text x="50" y="40" fill="#facc15" fontSize="10" fontFamily="monospace">GROWTH_MATRIX</text>

      </svg>
    </div>
  );
};

const Slide30 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Background Image (Golden Hour / Fisherman / Net) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508344928928-7137b29de682?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Golden gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#0f172a]/80 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A15]/80 via-transparent to-transparent z-0" />

      {/* Main Container - Centered focused layout */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto p-12 flex flex-col justify-center items-center">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-2 font-mono py-2">
            সমাপ্তি // Conclusion
          </h2>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 py-3 leading-normal">
            উপসংহার
          </h1>
        </motion.div>

        {/* Central Graphic with wrapping text cards */}
        <div className="relative w-full flex justify-center items-center mt-10">
          
          {/* Central SVG */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[450px] h-[450px] absolute z-0 opacity-70"
          >
            <GrowthNetworkSVG />
          </motion.div>

          {/* Cards floating around */}
          
          {/* Top Card */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-24 z-10 backdrop-blur-xl bg-slate-900/70 border border-yellow-500/30 p-6 rounded-2xl shadow-2xl max-w-md text-center hover:border-yellow-500/60 transition-colors"
          >
            <p className="text-xl text-yellow-100 leading-relaxed py-1 font-medium">
              প্রণোদিত প্রজনন আধুনিক মৎস্য চাষের এক <span className="text-yellow-400 font-bold">যুগান্তকারী প্রযুক্তি</span>।
            </p>
          </motion.div>

          {/* Bottom Left Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -left-16 bottom-0 z-10 backdrop-blur-xl bg-slate-900/70 border border-amber-500/30 p-6 rounded-2xl shadow-2xl max-w-sm hover:border-amber-500/60 transition-colors"
          >
            <p className="text-lg text-amber-50 leading-relaxed py-1">
              এর মাধ্যমে সারা বছর ধরে <span className="text-amber-400 font-bold">উন্নত জাতের মাছের পোনা</span> উৎপাদন সম্ভব হচ্ছে, যা পূর্বে অসম্ভব ছিল।
            </p>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -right-16 bottom-0 z-10 backdrop-blur-xl bg-slate-900/70 border border-orange-500/30 p-6 rounded-2xl shadow-2xl max-w-sm hover:border-orange-500/60 transition-colors"
          >
            <p className="text-lg text-orange-50 leading-relaxed py-1">
              দেশের মাছের চাহিদা মেটাতে এবং মৎস্য খামারিদের <span className="text-orange-400 font-bold">আর্থ-সামাজিক উন্নয়নে</span> এই পদ্ধতির বিকল্প নেই।
            </p>
          </motion.div>

        </div>
        
      </div>
    </div>
  );
};

export default Slide30;
