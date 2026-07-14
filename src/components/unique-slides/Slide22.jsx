import React from 'react';
import { motion } from 'framer-motion';

// --- Advanced Architectural Syringe SVG ---
const SyringeSystemSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 600 500" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 30px rgba(59, 130, 246, 0.2))' }}>
        <defs>
          <linearGradient id="femaleLiquid" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="maleLiquid" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="20%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="80%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>

        {/* Deep Background Grid & Radar */}
        <rect x="0" y="0" width="600" height="500" fill="url(#glow)" />
        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          {[...Array(15)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" />
          ))}
          {[...Array(13)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} />
          ))}
        </g>
        
        {/* Animated Scanning Radar */}
        <motion.circle 
          cx="300" cy="250" r="200" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="10 10"
          animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: "300px", originY: "250px" }}
        />
        <motion.circle 
          cx="300" cy="250" r="150" fill="none" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1" strokeDasharray="5 15"
          animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ originX: "300px", originY: "250px" }}
        />

        {/* --- FEMALE SYRINGE (LEFT) --- */}
        <g transform="translate(170, 40) scale(1.1)">
          {/* Needles */}
          <path d="M -2 320 L 2 320 L 0 380 Z" fill="#cbd5e1" />
          <line x1="0" y1="320" x2="0" y2="380" stroke="#f8fafc" strokeWidth="2" />
          
          {/* Glass Barrel Background */}
          <rect x="-30" y="20" width="60" height="300" rx="4" fill="rgba(15,23,42,0.6)" stroke="#ec4899" strokeWidth="2" />
          
          {/* Animated Liquid - Starts Full (100%), doses 20%, waits, doses 80% */}
          <motion.rect 
            x="-28" y="25" width="56" height="293" fill="url(#femaleLiquid)"
            animate={{ 
              height: [293, 235, 235, 0, 0], 
              y: [25, 83, 83, 318, 318] 
            }}
            transition={{ duration: 6, times: [0, 0.15, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Liquid Particles */}
          <g clipPath="url(#barrelClip)">
            <clipPath id="barrelClip">
              <rect x="-28" y="20" width="56" height="298" />
            </clipPath>
            {[...Array(15)].map((_, i) => (
              <motion.circle 
                key={`p1-${i}`} cx={-20 + Math.random() * 40} cy={300} r={1 + Math.random() * 2} fill="#fff"
                animate={{ y: [300, 20], opacity: [0, 0.8, 0] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </g>

          {/* Glass Glare & Volumetric Lines */}
          <rect x="-28" y="20" width="56" height="300" fill="url(#glassGlare)" pointerEvents="none" />
          {[...Array(10)].map((_, i) => (
            <line key={`vt1-${i}`} x1="-30" y1={50 + i * 27} x2="-20" y2={50 + i * 27} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          ))}
          <text x="-65" y="55" fill="#fbcfe8" fontSize="14" fontWeight="bold">১০০</text>
          <text x="-60" y="185" fill="#fbcfe8" fontSize="14" fontWeight="bold">৫০</text>
          <text x="-55" y="315" fill="#fbcfe8" fontSize="14" fontWeight="bold">০</text>

          {/* Animated Plunger */}
          <motion.g 
            animate={{ y: [-50, 8, 8, 243, 243] }}
            transition={{ duration: 6, times: [0, 0.15, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-26" y="5" width="52" height="15" fill="#94a3b8" />
            <rect x="-8" y="-100" width="16" height="105" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <rect x="-20" y="-110" width="40" height="10" fill="#f8fafc" rx="2" stroke="#64748b" strokeWidth="1" />
          </motion.g>

          {/* Callouts */}
          <motion.g 
            animate={{ opacity: [0, 1, 1, 0, 0] }} 
            transition={{ duration: 6, times: [0, 0.1, 0.5, 0.55, 1], repeat: Infinity }}
          >
            <line x1="30" y1="83" x2="70" y2="83" stroke="#fbcfe8" strokeWidth="1.5" strokeDasharray="2,2" />
            <rect x="70" y="73" width="70" height="20" fill="#050A15" />
            <text x="75" y="88" fill="#fbcfe8" fontSize="14" fontWeight="bold">২০% ডোজ</text>
          </motion.g>
          <motion.g 
            animate={{ opacity: [0, 0, 1, 1, 0] }} 
            transition={{ duration: 6, times: [0, 0.45, 0.5, 0.9, 1], repeat: Infinity }}
          >
            <line x1="30" y1="318" x2="70" y2="318" stroke="#fbcfe8" strokeWidth="1.5" strokeDasharray="2,2" />
            <rect x="70" y="308" width="70" height="20" fill="#050A15" />
            <text x="75" y="323" fill="#fbcfe8" fontSize="14" fontWeight="bold">৮০% ডোজ</text>
          </motion.g>
          
          <text x="-35" y="425" fill="#fbcfe8" fontSize="22" fontWeight="bold" letterSpacing="3">স্ত্রী মাছ</text>
        </g>

        {/* --- MALE SYRINGE (RIGHT) --- */}
        <g transform="translate(430, 40) scale(1.1)">
          {/* Needles */}
          <path d="M -2 320 L 2 320 L 0 380 Z" fill="#cbd5e1" />
          <line x1="0" y1="320" x2="0" y2="380" stroke="#f8fafc" strokeWidth="2" />
          
          {/* Glass Barrel Background */}
          <rect x="-30" y="20" width="60" height="300" rx="4" fill="rgba(15,23,42,0.6)" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Animated Liquid - Full Dose (100%) */}
          <motion.rect 
            x="-28" y="25" width="56" height="293" fill="url(#maleLiquid)"
            animate={{ 
              height: [293, 293, 293, 0, 0], 
              y: [25, 25, 25, 318, 318] 
            }}
            transition={{ duration: 6, times: [0, 0.15, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Liquid Particles */}
          <g clipPath="url(#barrelClip2)">
            <clipPath id="barrelClip2">
              <rect x="-28" y="20" width="56" height="298" />
            </clipPath>
            {[...Array(15)].map((_, i) => (
              <motion.circle 
                key={`p2-${i}`} cx={-20 + Math.random() * 40} cy={300} r={1 + Math.random() * 2} fill="#fff"
                animate={{ y: [300, 20], opacity: [0, 0.8, 0] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: 2.5 + Math.random() * 2 }}
              />
            ))}
          </g>

          {/* Glass Glare & Volumetric Lines */}
          <rect x="-28" y="20" width="56" height="300" fill="url(#glassGlare)" pointerEvents="none" />
          {[...Array(10)].map((_, i) => (
            <line key={`vt2-${i}`} x1="-30" y1={50 + i * 27} x2="-20" y2={50 + i * 27} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          ))}
          <text x="-65" y="55" fill="#bfdbfe" fontSize="14" fontWeight="bold">১০০</text>
          <text x="-60" y="185" fill="#bfdbfe" fontSize="14" fontWeight="bold">৫০</text>
          <text x="-55" y="315" fill="#bfdbfe" fontSize="14" fontWeight="bold">০</text>

          {/* Animated Plunger */}
          <motion.g 
            animate={{ y: [-50, -50, -50, 243, 243] }}
            transition={{ duration: 6, times: [0, 0.15, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-26" y="5" width="52" height="15" fill="#94a3b8" />
            <rect x="-8" y="-100" width="16" height="105" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            <rect x="-20" y="-110" width="40" height="10" fill="#f8fafc" rx="2" stroke="#64748b" strokeWidth="1" />
          </motion.g>

          {/* Callouts */}
          <motion.g 
            animate={{ opacity: [0, 0, 1, 1, 0] }} 
            transition={{ duration: 6, times: [0, 0.45, 0.5, 0.9, 1], repeat: Infinity }}
          >
            <line x1="-30" y1="318" x2="-80" y2="318" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="2,2" />
            <rect x="-165" y="308" width="85" height="20" fill="#050A15" />
            <text x="-160" y="323" fill="#bfdbfe" fontSize="14" fontWeight="bold">১০০% ডোজ</text>
          </motion.g>
          
          <text x="-25" y="425" fill="#bfdbfe" fontSize="22" fontWeight="bold" letterSpacing="3">পুরুষ মাছ</text>
        </g>

        {/* --- Time Connector / Synchronization Link --- */}
        <motion.path 
          d="M 240 180 C 270 180, 330 180, 360 180"
          fill="none" stroke="#fde047" strokeWidth="3" strokeDasharray="6 6"
          animate={{ strokeDashoffset: [24, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="300" cy="180" r="20" fill="#1e293b" stroke="#fde047" strokeWidth="2" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 6, times: [0, 0.3, 1], repeat: Infinity }}
        />
        <motion.text x="282" y="185" fill="#fef08a" fontSize="14" fontWeight="bold" 
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 6, repeat: Infinity }}
        >
          +৬ ঘণ্টা
        </motion.text>
        
        {/* Drops falling from needles */}
        <motion.circle cx="170" cy="460" r="5" fill="#ec4899"
          animate={{ y: [0, 40], opacity: [1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <motion.circle cx="430" cy="460" r="5" fill="#3b82f6"
          animate={{ y: [0, 40], opacity: [0, 1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

const Slide22 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">
      
      {/* Real Image Background (Lab setting) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Heavy vignette for maximum contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050A15_90%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-transparent to-[#020617]/90 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-between">
        
        {/* Top Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-2 py-2">
            ধাপ ৩ // হরমোন কনফিগারেশন
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight">
            হরমোন প্রয়োগের মাত্রা
          </h1>
        </motion.div>

        {/* Content & SVG Grid */}
        <div className="flex gap-12 h-[600px] items-center">
          
          {/* Left Text Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-5/12 flex flex-col gap-8"
          >
            {/* Female Dose Card */}
            <div className="relative backdrop-blur-2xl bg-slate-900/60 border border-slate-700/50 p-8 rounded-3xl shadow-[0_10px_40px_rgba(236,72,153,0.15)] overflow-hidden group hover:border-pink-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-4">
                <div className="text-3xl font-bold text-pink-400">স্ত্রী মাছ</div>
                <div className="h-6 w-px bg-slate-600" />
                <div className="text-xl font-medium text-pink-200">২টি ডোজ</div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                স্ত্রী মাছকে প্রথমে মোট ডোজের <strong className="text-white bg-pink-500/20 px-3 py-1 rounded-md border border-pink-500/30">২০%</strong> দেওয়া হয়। 
                এর ঠিক <span className="text-pink-400 font-bold">৬ ঘণ্টা পর</span> বাকি <strong className="text-white bg-pink-500/20 px-3 py-1 rounded-md border border-pink-500/30">৮০%</strong> ডোজ দেওয়া হয়।
              </p>
            </div>

            {/* Male Dose Card */}
            <div className="relative backdrop-blur-2xl bg-slate-900/60 border border-slate-700/50 p-8 rounded-3xl shadow-[0_10px_40px_rgba(59,130,246,0.15)] overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-4">
                <div className="text-3xl font-bold text-blue-400">পুরুষ মাছ</div>
                <div className="h-6 w-px bg-slate-600" />
                <div className="text-xl font-medium text-blue-200">১টি ডোজ</div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                পুরুষ মাছকে স্ত্রী মাছের দ্বিতীয় ডোজের সাথেই (৬ ঘণ্টা পর) একমাত্র ও সম্পূর্ণ <strong className="text-white bg-blue-500/20 px-3 py-1 rounded-md border border-blue-500/30">১০০%</strong> ডোজটি দেওয়া হয়।
              </p>
            </div>
          </motion.div>

          {/* Right SVG Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-7/12 h-full bg-slate-950/50 backdrop-blur-3xl border border-slate-800 rounded-[40px] p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative"
          >
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              <div className="text-xs text-slate-400">হরমোন_প্রয়োগ_সিস্টেম_v3.0</div>
            </div>
            
            <div className="w-full h-full mt-4">
              <SyringeSystemSVG />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide22;
