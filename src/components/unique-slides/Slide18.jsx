import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Droplets } from 'lucide-react';

const RealisticSpawningTank = () => (
  <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
    <defs>
      <linearGradient id="tankGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
      </linearGradient>
      <linearGradient id="waterSurface" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(56,189,248,0.8)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
      </linearGradient>
      <filter id="glowEgg">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowFish">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Tank Back Wall */}
    <path d="M 20 30 L 80 30 L 80 80 L 20 80 Z" fill="rgba(30,41,59,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    
    {/* Animated Water Level/Surface */}
    <motion.path 
      animate={{ d: [
        "M 20 40 Q 35 35 50 40 T 80 40 L 80 80 L 20 80 Z",
        "M 20 40 Q 35 45 50 40 T 80 40 L 80 80 L 20 80 Z",
        "M 20 40 Q 35 35 50 40 T 80 40 L 80 80 L 20 80 Z"
      ]}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      fill="url(#waterSurface)" 
    />
    
    {/* Fish 1 (Male) Swimming */}
    <motion.g 
      animate={{ x: [-20, 40], y: [0, 5, 0] }}
      transition={{ x: { duration: 8, repeat: Infinity, ease: "linear" }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
    >
      <path d="M 30 65 Q 40 60 45 65 Q 40 70 30 65 Z" fill="#60a5fa" filter="url(#glowFish)" />
      <path d="M 25 60 L 30 65 L 25 70 Z" fill="#60a5fa" />
    </motion.g>

    {/* Fish 2 (Female) Swimming in opposite direction */}
    <motion.g 
      animate={{ x: [40, -30], y: [0, -5, 0] }}
      transition={{ x: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
    >
      <path d="M 60 55 Q 50 50 45 55 Q 50 60 60 55 Z" fill="#f472b6" filter="url(#glowFish)" />
      <path d="M 65 50 L 60 55 L 65 60 Z" fill="#f472b6" />
      
      {/* Emitting Eggs */}
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 5], y: [0, -5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} cx="50" cy="56" r="1.5" fill="#fcd34d" filter="url(#glowEgg)" />
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 8], y: [0, -2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} cx="52" cy="54" r="1.5" fill="#fcd34d" filter="url(#glowEgg)" />
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 3], y: [0, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.0 }} cx="48" cy="58" r="1.5" fill="#fcd34d" filter="url(#glowEgg)" />
    </motion.g>

    {/* Tank Front Glass */}
    <rect x="20" y="30" width="60" height="50" rx="4" fill="url(#tankGlass)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
    
    {/* Bubbles */}
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }} cx="30" cy="75" r="1" fill="#fff" />
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} cx="70" cy="70" r="1.5" fill="#fff" />
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} cx="50" cy="78" r="1" fill="#fff" />

    {/* Glass Highlights */}
    <rect x="23" y="33" width="2" height="44" rx="1" fill="rgba(255,255,255,0.5)" />
    <rect x="75" y="33" width="2" height="44" rx="1" fill="rgba(255,255,255,0.2)" />
  </svg>
);

export default function Slide18({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, transition: { duration: 0.6 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050A15] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col h-full py-4 justify-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10 shrink-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold tracking-widest uppercase mb-4 text-xs">
             <Activity className="w-4 h-4" />
             <span>প্রজনন পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-300 py-2 leading-normal drop-shadow-md">
            স্পনিং বা প্রজনন প্রক্রিয়া
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2"></div>
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-0"
        >
          {/* Main SVG Graphic Card (Spans 8 cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden border border-blue-500/20 shadow-[0_10px_40px_rgba(59,130,246,0.15)] group bg-slate-900/80 backdrop-blur-xl flex items-center justify-center"
          >
            {/* Background elements inside card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none mix-blend-screen opacity-50"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

            <RealisticSpawningTank />

            <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-bold text-white relative z-10 leading-normal">
                  হাপা বা স্পনিং ট্যাংক
                </h3>
                <p className="text-blue-100/80 text-lg relative z-10 mt-1">
                  নিরবচ্ছিন্ন পানির প্রবাহ নিশ্চিত করা হয়।
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-blue-200 text-xs font-bold tracking-widest">OXYGEN FLOW</span>
              </div>
            </div>
          </motion.div>

          {/* Details Column (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Hapa Transition Card */}
            <motion.div 
              variants={itemVariants}
              className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-400/50 transition-colors shadow-xl"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500"></div>
              <h3 className="text-2xl font-bold text-white mb-3">স্থানান্তর</h3>
              <p className="text-slate-300 leading-relaxed">
                ইনজেকশন দেওয়ার পরপরই স্ত্রী ও পুরুষ মাছগুলোকে একত্রে প্রজননের জন্য নির্ধারিত হাপা (Hapa) বা স্পনিং ট্যাংকে ছেড়ে দেওয়া হয়।
              </p>
            </motion.div>

            {/* Egg Release Card */}
            <motion.div 
              variants={itemVariants}
              className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group hover:border-blue-400/50 transition-colors shadow-xl"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
              <h3 className="text-2xl font-bold text-white mb-3">ডিম ও স্পার্ম নিঃসরণ</h3>
              <p className="text-slate-300 leading-relaxed">
                সাধারণত ৬-৮ ঘণ্টা পর স্ত্রী মাছ পানিতে ডিম ছাড়ে এবং একই সময়ে পুরুষ মাছ স্পার্ম (Sperm) বা শুক্রাণু নিঃসরণ করে, যা ডিমকে নিষিক্ত করে।
              </p>
              
              <div className="mt-4 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-3 h-3 rounded-full border border-blue-400"
                  ></motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
