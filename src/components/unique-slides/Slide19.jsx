import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Waves, RefreshCcw, Activity } from 'lucide-react';

const StunningHatchingJar = () => (
  <svg viewBox="0 0 100 130" className="w-64 h-80 drop-shadow-[0_10px_30px_rgba(34,211,238,0.4)]">
    <defs>
      {/* Premium Glass Gradients */}
      <linearGradient id="jarGlassBase" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
        <stop offset="10%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.0)" />
        <stop offset="90%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
      </linearGradient>
      
      <linearGradient id="jarHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
      </linearGradient>

      {/* Water Gradient: Bright cyan top, deep blue bottom */}
      <linearGradient id="jarWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(34,211,238,0.5)" />
        <stop offset="50%" stopColor="rgba(14,165,233,0.7)" />
        <stop offset="100%" stopColor="rgba(30,58,138,0.9)" />
      </linearGradient>

      {/* Stand Metal */}
      <linearGradient id="metalStand" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>

      {/* Glows */}
      <filter id="eggGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="larvaeGlow">
        <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="coreGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* High-Tech Stand */}
    <path d="M 45 105 L 55 105 L 55 115 L 45 115 Z" fill="#334155" />
    <path d="M 35 115 L 65 115 L 75 125 L 25 125 Z" fill="url(#metalStand)" stroke="#0f172a" strokeWidth="1" />
    <rect x="47" y="105" width="6" height="20" fill="#38bdf8" filter="url(#coreGlow)" opacity="0.8" /> {/* Glowing water inlet pipe */}

    {/* Water Volume (Cylindrical Top, Conical Bottom) */}
    <path 
      d="M 22 25 L 78 25 L 78 60 C 78 85, 55 95, 53 105 L 47 105 C 45 95, 22 85, 22 60 Z" 
      fill="url(#jarWater)" 
    />

    {/* Central Upward Jet (Bubbles / Flow) */}
    <motion.path 
      d="M 49 105 L 49 30 M 51 105 L 51 30" 
      stroke="rgba(255,255,255,0.3)" 
      strokeWidth="2" 
      strokeDasharray="4 8"
      animate={{ strokeDashoffset: [24, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />

    <motion.g>
      {[...Array(15)].map((_, i) => (
        <motion.circle 
          key={`bubble-${i}`}
          animate={{ 
            y: [100, 25], 
            opacity: [0, 1, 0], 
            x: [50, 50 + (Math.random() - 0.5) * 20] 
          }}
          transition={{ 
            duration: 1 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
          cx="50" cy="100" r={Math.random() * 1.5 + 0.5} fill="#cffafe" 
        />
      ))}
    </motion.g>

    {/* Golden Tumbling Eggs */}
    <motion.g filter="url(#eggGlow)">
      {[...Array(20)].map((_, i) => {
        // Group them in left and right tumbling patterns
        const isLeft = i % 2 === 0;
        const xPath = isLeft 
          ? [50, 48, 30 + Math.random()*5, 40, 50] // Left tumble
          : [50, 52, 70 - Math.random()*5, 60, 50]; // Right tumble
        return (
          <motion.circle 
            key={`egg-${i}`}
            animate={{ 
              y: [100, 50, 65, 85, 100], 
              x: xPath,
              scale: [0.8, 1.2, 1, 0.9, 0.8]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
            cx="50" cy="100" r="2.8" fill="#fbbf24" 
          />
        )
      })}
    </motion.g>

    {/* Hatching Larvae near the top */}
    <motion.g filter="url(#larvaeGlow)">
      {[...Array(6)].map((_, i) => (
        <motion.path 
          key={`larva-${i}`}
          d="M 0 0 Q -2 -1 -4 0 Q -2 1 0 0" 
          fill="#34d399"
          animate={{ 
            x: [30 + Math.random()*40, 30 + Math.random()*40, 30 + Math.random()*40], 
            y: [25 + Math.random()*15, 25 + Math.random()*15, 25 + Math.random()*15],
            rotate: [0, 45, -45, 90, 0]
          }}
          transition={{ 
            x: { duration: 4 + Math.random()*4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 3 + Math.random()*3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}
    </motion.g>

    {/* Glass Jar Body (Front) */}
    <path 
      d="M 20 15 L 20 60 C 20 85, 45 95, 47 105 L 53 105 C 55 95, 80 85, 80 60 L 80 15" 
      fill="url(#jarGlassBase)" 
      stroke="rgba(255,255,255,0.7)" 
      strokeWidth="1.5" 
    />
    
    {/* High-End Glass Edge Highlights */}
    <path 
      d="M 22 20 L 22 60 C 22 80, 42 90, 47 100" 
      stroke="url(#jarHighlight)" 
      strokeWidth="3" 
      strokeLinecap="round" 
      fill="none" 
      opacity="0.8"
    />
    <path 
      d="M 78 20 L 78 60" 
      stroke="rgba(255,255,255,0.4)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      fill="none" 
    />

    {/* Top Elliptical Opening */}
    <ellipse cx="50" cy="15" rx="30" ry="7" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
    <path d="M 20 15 A 30 7 0 0 0 80 15" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="3" />

    {/* Overflowing Water Effect at the rim */}
    <motion.path 
      d="M 22 17 Q 20 22 18 28" 
      stroke="#38bdf8" 
      strokeWidth="2" 
      strokeLinecap="round" 
      fill="none"
      animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path 
      d="M 78 17 Q 80 22 82 28" 
      stroke="#38bdf8" 
      strokeWidth="2" 
      strokeLinecap="round" 
      fill="none"
      animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-screen opacity-50"></div>
        
        {/* Glowing floor grid */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-900/30 to-transparent perspective-1000">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:100%_40px] [transform:rotateX(60deg)_scale(2)] opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-center">
        
        {/* Title Top Center */}
        <div className="text-center mb-8 mt-4">
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
            <motion.div variants={cardAnimLeft} className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 group hover:border-blue-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Orbit className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">১. স্থানান্তর</h3>
              <p className="text-slate-300 text-sm leading-relaxed">নিষিক্ত ডিমগুলোকে অত্যন্ত সতর্কতার সাথে সংগ্রহ করে হ্যাচিং জারে বা সার্কুলার ইনকিউবেটরে স্থানান্তর করা হয়।</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardAnimLeft} className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 group hover:border-cyan-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(34,211,238,0.15)]">
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
            className="w-full lg:w-4/12 relative flex justify-center items-center z-20 my-4 lg:my-0"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center">
              {/* Spinning Tech Rings */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[3px] border-dashed border-cyan-500/40 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-blue-500/30 rounded-full"
              ></motion.div>
              
              {/* Inner Glowing Orb */}
              <div className="absolute inset-10 bg-slate-900/90 rounded-full backdrop-blur-3xl border border-cyan-400/50 shadow-[0_0_100px_rgba(34,211,238,0.4)]"></div>
              
              {/* The Stunning SVG */}
              <div className="relative z-10 scale-110 md:scale-125 mb-6">
                <StunningHatchingJar />
              </div>
            </div>
          </motion.div>

          {/* Right Column (1 Card + System Status) */}
          <div className="w-full lg:w-3/12 flex flex-col gap-6 z-10">
            {/* Card 3 */}
            <motion.div variants={cardAnimRight} className="bg-slate-900/60 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-6 group hover:border-teal-400 hover:bg-slate-800/80 transition-all shadow-[0_0_30px_rgba(20,184,166,0.15)]">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all">
                <RefreshCcw className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">৩. ডিম ফুটানো</h3>
              <p className="text-slate-300 text-sm leading-relaxed">পানির নির্দিষ্ট তাপমাত্রা ও অক্সিজেনের ওপর ভিত্তি করে ২৪ থেকে ৭২ ঘন্টার মধ্যে ডিম ফুটে রেণু পোনা বের হয়।</p>
            </motion.div>

            {/* System Status Panel */}
            <motion.div variants={cardAnimRight} className="bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">System Active</span>
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_rgba(34,211,238,1)]"></span>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-2">
                    <span>তাপমাত্রা (Temperature)</span>
                    <span className="text-cyan-400 font-bold text-sm">২৮°C</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full relative" 
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-2">
                    <span>পানি প্রবাহ (Water Flow)</span>
                    <span className="text-blue-400 font-bold text-sm">Optimal</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-400 h-2 rounded-full relative" 
                    >
                       <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                    </motion.div>
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
