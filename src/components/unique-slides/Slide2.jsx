import React from 'react';
import { motion } from 'framer-motion';

export default function Slide2({ direction }) {
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.2,
      filter: 'blur(10px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #1e3a8a 0deg, #0f172a 120deg, #0284c7 240deg, #1e3a8a 360deg)'
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 tracking-wider leading-normal py-3">
            ধন্যবাদ ও কৃতজ্ঞতা
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.3, delayChildren: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="group relative flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[40px] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-100"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col items-center w-full shadow-2xl transition-all duration-500 hover:bg-slate-800/50">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(0,150,255,0.3)] mb-6 relative">
                <img src="/photo/oddokkho.jpg" alt="Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">অধ্যাপক মো: শফিক নেওয়াজ তালুকদার</h3>
              <p className="text-cyan-400 font-medium text-lg mb-1">অধ্যক্ষ</p>
              <p className="text-slate-400 text-center">নবাব সিরাজউদ্দৌলা সরকারি কলেজ, নাটোর</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="group relative flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-[40px] transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-100"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col items-center w-full shadow-2xl transition-all duration-500 hover:bg-slate-800/50">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(150,0,255,0.3)] mb-6 relative">
                <img src="/photo/madam.jpg" alt="Head of Dept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">প্রফেসর জান্নাতুল ফেরদৌস</h3>
              <p className="text-purple-400 font-medium text-lg mb-1">বিভাগীয় প্রধান (প্রাণিবিদ্যা বিভাগ)</p>
              <p className="text-slate-400 text-center">নবাব সিরাজউদ্দৌলা সরকারি কলেজ, নাটোর</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
