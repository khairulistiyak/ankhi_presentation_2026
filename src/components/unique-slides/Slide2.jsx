import React from 'react';
import { motion } from 'framer-motion';

export default function Slide2({ direction }) {
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 50 : -50,
      scale: 0.95,
      filter: 'blur(10px)',
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir < 0 ? 50 : -50,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 15 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#020617] flex flex-col items-center justify-center overflow-hidden perspective-[1000px]"
    >
      {/* Animated Deep Space Architecture Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
        
        {/* Animated Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60a5fa" strokeWidth="0.5"/>
                <circle cx="60" cy="60" r="1.5" fill="#60a5fa" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />
          </svg>
        </motion.div>

        {/* Ambient Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col items-center max-h-[90vh] overflow-y-auto no-scrollbar pt-10 pb-10">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm md:text-base font-medium">কৃতজ্ঞতা স্বীকার</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300 tracking-tight leading-normal py-3 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            ধন্যবাদ ও কৃতজ্ঞতা
          </h2>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full"
        >
          {/* Principal Card */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 lg:p-10 flex flex-col items-center w-full shadow-2xl transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/60 hover:-translate-y-2">
              
              {/* Image Frame */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 flex items-center justify-center">
                {/* Rotating Tech Rings */}
                <svg className="absolute inset-[-10%] w-[120%] h-[120%] text-blue-500/30 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
                </svg>
                <svg className="absolute inset-[-20%] w-[140%] h-[140%] text-cyan-400/20 animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10 5 10" />
                </svg>

                {/* Profile Photo */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.4)] relative z-10 group-hover:border-blue-400 transition-colors duration-500">
                  <img src="/photo/oddokkho.jpg" alt="Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-overlay"></div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center group-hover:text-blue-100 transition-colors">
                অধ্যাপক মো: শফিক নেওয়াজ তালুকদার
              </h3>
              <div className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-semibold text-sm lg:text-base mb-4">
                অধ্যক্ষ
              </div>
              <p className="text-slate-400 text-center text-sm lg:text-base font-light leading-relaxed">
                নবাব সিরাজউদ্দৌলা সরকারি কলেজ, নাটোর
              </p>
            </div>
          </motion.div>

          {/* HOD Card */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 lg:p-10 flex flex-col items-center w-full shadow-2xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-slate-900/60 hover:-translate-y-2">
              
              {/* Image Frame */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 flex items-center justify-center">
                {/* Rotating Tech Rings */}
                <svg className="absolute inset-[-10%] w-[120%] h-[120%] text-emerald-500/30 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
                </svg>
                <svg className="absolute inset-[-20%] w-[140%] h-[140%] text-teal-400/20 animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10 5 10" />
                </svg>

                {/* Profile Photo */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.4)] relative z-10 group-hover:border-emerald-400 transition-colors duration-500">
                  <img src="/photo/madam.jpg" alt="Head of Dept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent mix-blend-overlay"></div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center group-hover:text-emerald-100 transition-colors">
                প্রফেসর জান্নাতুল ফেরদৌস
              </h3>
              <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-sm lg:text-base mb-4">
                বিভাগীয় প্রধান (প্রাণিবিদ্যা বিভাগ)
              </div>
              <p className="text-slate-400 text-center text-sm lg:text-base font-light leading-relaxed">
                নবাব সিরাজউদ্দৌলা সরকারি কলেজ, নাটোর
              </p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </motion.div>
  );
}
