import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Mixing Bowl SVG ---
const MixingBowlSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 25px rgba(168, 85, 247, 0.3))' }}>
        <defs>
          <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>
          <radialGradient id="liquidGrad" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#d8b4fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Blueprint Circular Grid */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
          <circle cx="250" cy="250" r="220" strokeDasharray="5,5" />
          <circle cx="250" cy="250" r="180" />
          <line x1="30" y1="250" x2="470" y2="250" />
          <line x1="250" y1="30" x2="250" y2="470" />
          <line x1="94" y1="94" x2="406" y2="406" />
          <line x1="94" y1="406" x2="406" y2="94" />
        </g>

        {/* The Bowl */}
        <ellipse cx="250" cy="250" rx="140" ry="60" fill="url(#liquidGrad)" stroke="#c084fc" strokeWidth="2" />
        <path d="M 110 250 C 110 350, 200 400, 250 400 C 300 400, 390 350, 390 250" fill="url(#bowlGrad)" stroke="#c084fc" strokeWidth="3" />
        <ellipse cx="250" cy="400" rx="60" ry="10" fill="none" stroke="rgba(192,132,252,0.5)" strokeWidth="2" />

        {/* Mixing Action / Swirl */}
        <motion.ellipse 
          cx="250" cy="250" rx="100" ry="40" fill="none" stroke="#e879f9" strokeWidth="2" strokeDasharray="40 40"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "250px", originY: "250px" }}
        />
        <motion.ellipse 
          cx="250" cy="250" rx="60" ry="20" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="20 20"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ originX: "250px", originY: "250px" }}
        />

        {/* Eggs (Large Orbs) */}
        <g>
          {[
            { cx: 200, cy: 260 },
            { cx: 270, cy: 240 },
            { cx: 240, cy: 270 },
            { cx: 310, cy: 250 },
            { cx: 180, cy: 240 }
          ].map((pos, i) => (
            <motion.circle
              key={`egg-${i}`}
              cx={pos.cx}
              cy={pos.cy}
              r="8"
              fill="rgba(250, 204, 21, 0.9)"
              stroke="#fef08a"
              strokeWidth="2"
              animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </g>

        {/* Spermatozoa (Small lines moving towards eggs) */}
        <g>
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={`sp-${i}`}
              d="M 250 200 Q 240 210, 245 220"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ x: Math.random() * 100 - 50, y: Math.random() * -50, opacity: 0 }}
              animate={{ 
                x: Math.random() * 80 - 40, 
                y: Math.random() * 40 + 20,
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </g>

        {/* Target Reticles / Analysis UI */}
        <g stroke="#c084fc" strokeWidth="1.5" fill="none">
          <rect x="180" y="210" width="140" height="80" rx="10" strokeDasharray="10 10" />
          <circle cx="180" cy="210" r="4" fill="#a855f7" />
          <circle cx="320" cy="290" r="4" fill="#a855f7" />
        </g>
        
        {/* Floating Data Labels */}
        <line x1="320" y1="230" x2="380" y2="180" stroke="#c084fc" strokeWidth="1" />
        <rect x="380" y="165" width="70" height="15" fill="rgba(168,85,247,0.2)" stroke="#c084fc" strokeWidth="1" />
        <text x="385" y="175" fill="#fff" fontSize="8" fontFamily="monospace">FERTILIZATION</text>

        <line x1="180" y1="270" x2="120" y2="330" stroke="#c084fc" strokeWidth="1" />
        <rect x="50" y="330" width="70" height="15" fill="rgba(168,85,247,0.2)" stroke="#c084fc" strokeWidth="1" />
        <text x="55" y="340" fill="#fff" fontSize="8" fontFamily="monospace">OOCYTE_FUSION</text>
      </svg>
    </div>
  );
};

const Slide24 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">
      
      {/* Background Image (Close up of eggs / caviar) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Heavy vignette for deep contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050A15_80%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent z-0" />

      {/* Main Container - Orbital Layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col items-center justify-center">
        
        {/* Top Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-12 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-2 font-mono py-2">
            ধাপ ৪ // Step 04 // FUSION
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            নিষিক্তকরণ প্রক্রিয়া
          </h1>
        </motion.div>

        {/* Central SVG Orbit */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-[600px] h-[600px] relative flex items-center justify-center mt-12"
        >
          <div className="absolute w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
          <MixingBowlSVG />
          
          {/* Orbital Data Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -left-20 top-1/4 w-80 backdrop-blur-xl bg-slate-900/60 border border-purple-500/30 p-6 rounded-2xl shadow-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 mb-3">
              <span className="text-purple-400 font-bold">1</span>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed py-2">
              সংগৃহীত ডিম প্লাস্টিকের পাত্রে রেখে তার সাথে শুক্ৰাণু খুব ভালোভাবে মিশিয়ে নিষিক্তকরণ (Fertilization) সম্পন্ন করা হয়।
            </p>
          </motion.div>

          {/* Orbital Data Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -right-20 bottom-1/4 w-80 backdrop-blur-xl bg-slate-900/60 border border-purple-500/30 p-6 rounded-2xl shadow-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 mb-3">
              <span className="text-purple-400 font-bold">2</span>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed py-2">
              নিষিক্ত হওয়ার পর ডিমগুলোকে ধুয়ে পরিষ্কার করে ইনকিউবেশন বা হাপাতে (Hapa) রাখা হয়।
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide24;
