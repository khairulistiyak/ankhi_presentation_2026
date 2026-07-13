import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Waves, RefreshCcw, Activity } from 'lucide-react';

const RealisticHatchingJar = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
    <defs>
      <linearGradient id="jarGlass19" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
        <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="80%" stopColor="rgba(255,255,255,0.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
      </linearGradient>
      <linearGradient id="jarWater19" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.8)" />
      </linearGradient>
      <filter id="eggGlow19">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect x="42" y="90" width="16" height="10" fill="#1e293b" />
    <path d="M 30 98 L 70 98 L 70 100 L 30 100 Z" fill="#334155" />

    <path d="M 40 10 L 60 10 L 60 20 L 75 75 A 10 10 0 0 1 65 90 L 35 90 A 10 10 0 0 1 25 75 L 40 20 Z" fill="rgba(15,23,42,0.6)" />
    
    <path d="M 41 25 L 59 25 L 73 75 A 8 8 0 0 1 65 88 L 35 88 A 8 8 0 0 1 27 75 Z" fill="url(#jarWater19)" />
    
    <motion.g>
      {[...Array(12)].map((_, i) => (
        <motion.circle 
          key={i}
          animate={{ 
            y: [85, 30, 85], 
            x: [50, 50 + (Math.random() - 0.5) * 30, 50],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
          cx="50" cy="85" r="2.5" fill="#fef08a" filter="url(#eggGlow19)" 
        />
      ))}
    </motion.g>

    <motion.g>
      {[...Array(15)].map((_, i) => (
        <motion.circle 
          key={i}
          animate={{ y: [90, 20], opacity: [0, 1, 0], x: [50, 50 + (Math.random() - 0.5) * 20] }}
          transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
          cx="50" cy="90" r={Math.random() * 1.5 + 0.5} fill="#ffffff" 
        />
      ))}
    </motion.g>
    
    <path d="M 40 10 L 60 10 L 60 20 L 75 75 A 10 10 0 0 1 65 90 L 35 90 A 10 10 0 0 1 25 75 L 40 20 Z" fill="url(#jarGlass19)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinejoin="round" />
    
    <rect x="36" y="8" width="28" height="4" rx="2" fill="rgba(255,255,255,0.9)" />
    
    <path d="M 44 22 L 31 75" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 57 22 L 67 70" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />
    
    <rect x="47" y="90" width="6" height="5" fill="#38bdf8" />
  </svg>
);

export default function Slide19({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.9, y: 50 }),
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.6 } })
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const cardAnimLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
  };

  const cardAnimRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#030812] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Immersive Control Room Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-screen opacity-50"></div>
        
        {/* Glowing floor grid */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-900/20 to-transparent perspective-1000">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:100%_40px] [transform:rotateX(60deg)_scale(2)] opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-center">
        
        {/* Title Top Center */}
        <div className="text-center mb-10 mt-4">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Activity className="w-4 h-4" />
            <span>ইনকিউবেশন পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl">
            হ্যাচিং জারে <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ডিম ফুটানো</span>
          </h2>
        </div>

        {/* Symmetry Core Layout */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative"
        >
          
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
            <svg className="w-full h-full">
              {/* Left Lines */}
              <motion.path d="M 30% 30% L 40% 50%" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
              <motion.path d="M 30% 70% L 40% 50%" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
              {/* Right Lines */}
              <motion.path d="M 70% 30% L 60% 50%" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
              <motion.path d="M 70% 70% L 60% 50%" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
            </svg>
          </div>

          {/* Left Column (2 Cards) */}
          <div className="w-full lg:w-3/12 flex flex-col gap-6 z-10">
            {/* Card 1 */}
            <motion.div variants={cardAnimLeft} className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 group hover:border-blue-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Orbit className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">১. স্থানান্তর</h3>
              <p className="text-slate-300 text-sm leading-relaxed">নিষিক্ত ডিমগুলোকে অত্যন্ত সতর্কতার সাথে সংগ্রহ করে হ্যাচিং জারে বা সার্কুলার ইনকিউবেটরে স্থানান্তর করা হয়।</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardAnimLeft} className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 group hover:border-cyan-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <Waves className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">২. পানির প্রবাহ</h3>
              <p className="text-slate-300 text-sm leading-relaxed">জারের নিচে দিয়ে অনবরত পানি প্রবাহের ব্যবস্থা থাকে, যাতে ডিমগুলো সবসময় ভাসমান বা ঘূর্ণায়মান থাকে।</p>
            </motion.div>
          </div>

          {/* Center Column (Majestic SVG Display) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="w-full lg:w-4/12 relative flex justify-center items-center z-20 my-8 lg:my-0"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center">
              {/* Spinning Tech Rings */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[4px] border-dashed border-cyan-500/30 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-blue-500/20 rounded-full"
              ></motion.div>
              
              {/* Inner Glowing Orb */}
              <div className="absolute inset-8 bg-slate-900/90 rounded-full backdrop-blur-2xl border border-cyan-400/50 shadow-[0_0_80px_rgba(34,211,238,0.3)]"></div>
              
              {/* Actual SVG */}
              <div className="relative z-10 scale-125">
                <RealisticHatchingJar />
              </div>
            </div>
          </motion.div>

          {/* Right Column (1 Card + System Status) */}
          <div className="w-full lg:w-3/12 flex flex-col gap-6 z-10">
            {/* Card 3 */}
            <motion.div variants={cardAnimRight} className="bg-slate-900/60 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-6 group hover:border-teal-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(20,184,166,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all">
                <RefreshCcw className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">৩. ডিম ফুটানো</h3>
              <p className="text-slate-300 text-sm leading-relaxed">পানির নির্দিষ্ট তাপমাত্রা ও অক্সিজেনের ওপর ভিত্তি করে ২৪ থেকে ৭২ ঘন্টার মধ্যে ডিম ফুটে রেণু পোনা বের হয়।</p>
            </motion.div>

            {/* System Status Panel */}
            <motion.div variants={cardAnimRight} className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-inner relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">System Status</span>
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]"></span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>তাপমাত্রা (Temperature)</span>
                    <span className="text-cyan-400 font-bold">২৮°C</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>অক্সিজেন ফ্লো (Oxygen)</span>
                    <span className="text-blue-400 font-bold">Optimal</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
