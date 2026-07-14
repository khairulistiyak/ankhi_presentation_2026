import React from 'react';
import { motion } from 'framer-motion';

export default function Slide1({ direction }) {
  // Ultra-modern cinematic entrance
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100vw' : '-100vw',
      opacity: 0,
      rotateY: dir > 0 ? 45 : -45,
      scale: 0.9,
      z: -500,
      filter: 'blur(15px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      z: 0,
      filter: 'blur(0px)',
      transition: {
        x: { type: "spring", stiffness: 90, damping: 20 },
        opacity: { duration: 0.8 },
        rotateY: { type: "spring", stiffness: 90, damping: 20 },
        scale: { duration: 0.8, ease: "easeOut" },
        filter: { duration: 0.8 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? '100vw' : '-100vw',
      opacity: 0,
      rotateY: dir < 0 ? 45 : -45,
      scale: 0.9,
      z: -500,
      filter: 'blur(15px)',
      transition: {
        x: { type: "spring", stiffness: 90, damping: 20 },
        opacity: { duration: 0.5 },
        filter: { duration: 0.5 }
      }
    })
  };

  const titleWords = ["মৎস্য", "বীজ", "উৎপাদন", "খামার,", "নাটোর"];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Background Ambience - Minimal and Deep */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="/photo/1_bg.jpg" 
          alt="bg" 
          className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/50 via-[#020617]/60 to-[#020617]/80" />
        
        {/* Subtle Architectural Grid Background */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
          <defs>
            <pattern id="bgGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGrid)" />
        </svg>

        {/* Deep ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen" />
      </motion.div>

      {/* Main Architectural Card - Very compact and elegant */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 80 }}
        className="relative z-10 flex flex-col items-center p-8 sm:p-12 md:p-14 lg:p-16 rounded-[40px] bg-white/[0.02] backdrop-blur-3xl border border-white/[0.05] shadow-[0_0_80px_rgba(0,0,0,0.8)] text-center w-[92%] max-w-3xl max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        {/* Unique Custom SVG (Architectural Blueprint Style Fish/Aqua Farm) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
          className="w-28 h-28 sm:w-36 sm:h-36 mb-8 relative flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <linearGradient id="accentGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Architectural concentric rings */}
            <circle cx="50" cy="50" r="45" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 4" />
            <motion.circle 
              cx="50" cy="50" r="35" 
              stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.4"
              initial={{ rotate: -90, strokeDasharray: "0 220" }}
              animate={{ rotate: 90, strokeDasharray: "220 220" }}
              transition={{ duration: 3, ease: "easeOut" }}
            />

            {/* Geometric Fish Body */}
            <motion.path 
              d="M 15 50 C 40 15 60 15 85 50 C 60 85 40 85 15 50 Z" 
              stroke="url(#fishGrad)" strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
            />
            
            {/* Geometric Fish Tail */}
            <motion.path 
              d="M 15 50 L -5 30 L 0 50 L -5 70 Z" 
              stroke="url(#accentGrad)" strokeWidth="1.5" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
            />

            {/* Geometric Eye / Node */}
            <motion.circle 
              cx="65" cy="45" r="2.5" 
              fill="#fbbf24" filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: "spring" }}
            />

            {/* Architectural grid lines across */}
            <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="#475569" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="1 3" />
          </svg>
        </motion.div>

        {/* Group Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="px-5 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/30 mb-6 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase pt-0.5">গ্রুপ - বি</span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        </motion.div>

        {/* Word-by-word animation for Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 1.4 }
            }
          }}
          className="flex flex-wrap justify-center gap-x-2.5 sm:gap-x-4 gap-y-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-200 tracking-tight leading-normal py-4"
        >
          {titleWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Architectural Divider */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
          className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-8"
        />

        {/* Subtitle */}
        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-sm sm:text-base md:text-xl text-slate-400 font-mono tracking-[0.4em] uppercase"
        >
          ভিজিট রিপোর্ট
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
