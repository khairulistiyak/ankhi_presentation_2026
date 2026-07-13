import React from 'react';
import { motion } from 'framer-motion';

// --- Advanced Dosage Calculator / Syringe Scale SVG ---
const DosageSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 500 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(59, 130, 246, 0.3))' }}>
        <defs>
          <linearGradient id="femaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="maleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid */}
        <rect x="0" y="0" width="500" height="400" fill="url(#gridGrad)" />
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[...Array(13)].map((_, i) => (
            <React.Fragment key={`v-${i}`}>
              <line x1={i * 40} y1="0" x2={i * 40} y2="400" />
            </React.Fragment>
          ))}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={`h-${i}`}>
              <line x1="0" y1={i * 40} x2="500" y2={i * 40} />
            </React.Fragment>
          ))}
        </g>

        {/* Axis & Labels */}
        <line x1="50" y1="350" x2="450" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="350" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        
        <text x="35" y="60" fill="#94a3b8" fontSize="12" fontFamily="monospace">100%</text>
        <text x="35" y="200" fill="#94a3b8" fontSize="12" fontFamily="monospace">50%</text>
        <text x="35" y="350" fill="#94a3b8" fontSize="12" fontFamily="monospace">0%</text>

        {/* --- FEMALE DOSAGE PIPELINE --- */}
        <g transform="translate(150, 0)">
          {/* Base Cylinder */}
          <rect x="-30" y="50" width="60" height="300" rx="10" fill="rgba(0,0,0,0.6)" stroke="#ec4899" strokeWidth="1.5" />
          
          {/* Tick Marks */}
          {[...Array(10)].map((_, i) => (
            <line key={`f-tick-${i}`} x1="-30" y1={50 + i * 30} x2="-20" y2={50 + i * 30} stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
          ))}

          {/* First Dose (20%) - Animated */}
          <motion.rect 
            x="-25" y="290" width="50" height="0" rx="5" fill="url(#femaleGrad)"
            initial={{ height: 0, y: 350 }}
            animate={{ height: 60, y: 290 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
          <motion.text 
            x="-45" y="325" fill="#ec4899" fontSize="14" fontWeight="bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            20%
          </motion.text>
          
          {/* Second Dose (80%) - Animated */}
          <motion.rect 
            x="-25" y="55" width="50" height="0" rx="5" fill="url(#femaleGrad)"
            initial={{ height: 0, y: 290 }}
            animate={{ height: 230, y: 55 }}
            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          />
          <motion.text 
            x="-45" y="170" fill="#ec4899" fontSize="14" fontWeight="bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
          >
            80%
          </motion.text>

          <text x="-25" y="375" fill="#fbcfe8" fontSize="16" fontWeight="bold">স্ত্রী (Female)</text>
          <text x="-25" y="395" fill="#94a3b8" fontSize="10" fontFamily="monospace">2 DOSES (0h & 6h)</text>
        </g>

        {/* --- MALE DOSAGE PIPELINE --- */}
        <g transform="translate(350, 0)">
          {/* Base Cylinder */}
          <rect x="-30" y="50" width="60" height="300" rx="10" fill="rgba(0,0,0,0.6)" stroke="#3b82f6" strokeWidth="1.5" />
          
          {/* Tick Marks */}
          {[...Array(10)].map((_, i) => (
            <line key={`m-tick-${i}`} x1="-30" y1={50 + i * 30} x2="-20" y2={50 + i * 30} stroke="rgba(59,130,246,0.5)" strokeWidth="1" />
          ))}

          {/* Single Dose (100%) - Animated */}
          <motion.rect 
            x="-25" y="55" width="50" height="0" rx="5" fill="url(#maleGrad)"
            initial={{ height: 0, y: 350 }}
            animate={{ height: 290, y: 55 }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }} // Happens alongside the 2nd female dose
          />
          <motion.text 
            x="-50" y="200" fill="#3b82f6" fontSize="14" fontWeight="bold"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
          >
            100%
          </motion.text>

          <text x="-28" y="375" fill="#bfdbfe" fontSize="16" fontWeight="bold">পুরুষ (Male)</text>
          <text x="-20" y="395" fill="#94a3b8" fontSize="10" fontFamily="monospace">1 DOSE (6h)</text>
        </g>

        {/* Connecting Data Line & Time Indicator */}
        <motion.path
          d="M 180 290 L 250 290 L 250 170 L 320 170"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 4 }}
        />
        <motion.circle 
          cx="250" cy="230" r="25" fill="#1e293b" stroke="#38bdf8" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.5, type: 'spring' }}
        />
        <motion.text 
          x="238" y="235" fill="#fff" fontSize="14" fontWeight="bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8 }}
        >
          +6h
        </motion.text>
        
      </svg>
    </div>
  );
};

const Slide22 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">
      
      {/* Real Image Background (Lab setting) */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Heavy vignette/gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/80 to-transparent z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-between">
        
        {/* Top Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-2 font-mono py-2">
            ধাপ ৩ // Step 03 // Dosage Configuration
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            হরমোন প্রয়োগের মাত্রা
          </h1>
        </motion.div>

        {/* Content & SVG Grid */}
        <div className="flex gap-12 h-full items-center">
          
          {/* Left Text Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-5/12 flex flex-col gap-6"
          >
            {/* Female Dose Card */}
            <div className="backdrop-blur-xl bg-slate-900/60 border-l-4 border-l-pink-500 border-y border-r border-slate-700/50 p-6 rounded-r-2xl shadow-2xl hover:bg-slate-800/80 transition-colors">
              <h3 className="text-2xl font-bold text-pink-300 mb-3 py-2">স্ত্রী মাছ (Female) : ২ ডোজ</h3>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                স্ত্রী মাছকে প্রথমে মোট ডোজের <strong className="text-white bg-pink-500/20 px-2 py-1 rounded">২০%</strong> দেওয়া হয়। 
                এর ঠিক ৬ ঘণ্টা পর বাকি <strong className="text-white bg-pink-500/20 px-2 py-1 rounded">৮০%</strong> ডোজ দেওয়া হয়।
              </p>
            </div>

            {/* Male Dose Card */}
            <div className="backdrop-blur-xl bg-slate-900/60 border-l-4 border-l-blue-500 border-y border-r border-slate-700/50 p-6 rounded-r-2xl shadow-2xl hover:bg-slate-800/80 transition-colors">
              <h3 className="text-2xl font-bold text-blue-300 mb-3 py-2">পুরুষ মাছ (Male) : ১ ডোজ</h3>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                পুরুষ মাছকে স্ত্রী মাছের দ্বিতীয় ডোজের সাথেই (৬ ঘণ্টা পর) একমাত্র <strong className="text-white bg-blue-500/20 px-2 py-1 rounded">১০০%</strong> ডোজটি দেওয়া হয়।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-7/12 h-[500px] bg-slate-950/40 backdrop-blur-3xl border border-slate-700/50 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
          >
            <div className="absolute top-4 left-6 text-xs text-slate-500 font-mono tracking-widest">DOSAGE_METRICS.exe</div>
            <DosageSVG />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide22;
