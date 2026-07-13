import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Fish, Network } from 'lucide-react';

const RealisticNurseryPond = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
    <defs>
      <linearGradient id="pondWater" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(4,120,87,0.8)" />
        <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
        <stop offset="100%" stopColor="rgba(6,78,59,0.9)" />
      </linearGradient>
      <filter id="glowLarvae">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Pond Border/Bank */}
    <rect x="5" y="15" width="90" height="70" rx="10" fill="#0f172a" stroke="rgba(16,185,129,0.3)" strokeWidth="4" />
    
    {/* Pond Water */}
    <rect x="10" y="20" width="80" height="60" rx="6" fill="url(#pondWater)" />
    
    {/* Water Ripples */}
    <motion.ellipse 
      animate={{ rx: [0, 30], ry: [0, 15], opacity: [0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      cx="50" cy="50" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1" 
    />
    <motion.ellipse 
      animate={{ rx: [0, 25], ry: [0, 12], opacity: [0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
      cx="30" cy="40" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1" 
    />

    {/* Larvae Swimming */}
    <motion.g filter="url(#glowLarvae)">
      {[...Array(20)].map((_, i) => (
        <motion.path 
          key={i}
          d="M 0 0 Q -2 -1 -4 0 Q -2 1 0 0" 
          fill="#6ee7b7"
          animate={{ 
            x: [20 + Math.random() * 60, 20 + Math.random() * 60, 20 + Math.random() * 60], 
            y: [30 + Math.random() * 40, 30 + Math.random() * 40, 30 + Math.random() * 40],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            x: { duration: 10 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}
    </motion.g>

    {/* Algae/Plankton particles (green dots) */}
    {[...Array(30)].map((_, i) => (
      <circle 
        key={`algae-${i}`}
        cx={12 + Math.random() * 76} 
        cy={22 + Math.random() * 56} 
        r={Math.random() * 0.5 + 0.2} 
        fill="rgba(16,185,129,0.8)" 
      />
    ))}

    {/* Grid Overlay for Cyberpunk/Lab look */}
    <path d="M 30 20 L 30 80 M 50 20 L 50 80 M 70 20 L 70 80 M 10 40 L 90 40 M 10 60 L 90 60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
  </svg>
);

export default function Slide20({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, transition: { duration: 0.6 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#030d08] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center h-full">
        
        {/* Left Info Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:w-6/12 flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase mb-4 text-xs">
              <Network className="w-4 h-4" />
              <span>চূড়ান্ত পর্যায়</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white py-2 leading-normal drop-shadow-md">
              রেণু পোনা সংগ্রহ <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">ও নার্সারি</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mt-4 mb-8"></div>
          </motion.div>

          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 flex items-start gap-6 relative overflow-hidden group shadow-2xl hover:bg-slate-800/80 transition-all"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-400 to-teal-600"></div>
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Fish className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">পোনা সংগ্রহ</h3>
              <p className="text-slate-300 leading-relaxed">
                ডিম ফোটার পর অত্যন্ত সতর্কতার সাথে রেণু পোনাগুলো হ্যাচিং জার বা ইনকিউবেটর থেকে সংগ্রহ করা হয়।
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-900/60 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-8 flex items-start gap-6 relative overflow-hidden group shadow-2xl hover:bg-slate-800/80 transition-all"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-teal-400 to-emerald-600"></div>
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              <Leaf className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">নার্সারি পুকুরে স্থানান্তর</h3>
              <p className="text-slate-300 leading-relaxed">
                পোনাগুলোকে প্রাকৃতিক খাদ্যসমৃদ্ধ নার্সারি পুকুরে ছেড়ে দেওয়া হয়, যেখানে তারা ধীরে ধীরে বড় হওয়ার সুযোগ পায়।
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Interactive Custom SVG Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-6/12 h-[400px] lg:h-[600px] relative rounded-[3rem] overflow-hidden border border-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.15)] group bg-slate-900/80"
        >
          <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
            {/* HUD Circles */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] border border-emerald-500/20 rounded-full border-dashed"
            ></motion.div>

            <RealisticNurseryPond />
          </div>

          {/* Floating Data Tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 px-4 py-2 rounded-xl flex items-center gap-2 z-20"
          >
            <Droplets className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-100 text-sm font-bold">Plankton Level: OPTIMAL</span>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#030d08] via-transparent to-[#030d08]/40 z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none mix-blend-screen z-0"></div>
        </motion.div>

      </div>
    </motion.div>
  );
}
