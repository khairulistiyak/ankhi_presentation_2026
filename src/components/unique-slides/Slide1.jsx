import React from 'react';
import { motion } from 'framer-motion';

export default function Slide1({ direction }) {
  // Ultra-modern cinematic entrance
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100vw' : '-100vw',
      opacity: 0,
      rotateY: dir > 0 ? 45 : -45,
      scale: 0.8,
      z: -500,
      filter: 'blur(20px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      z: 0,
      filter: 'blur(0px)',
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.8 },
        rotateY: { type: "spring", stiffness: 100, damping: 20 },
        scale: { duration: 0.8, ease: "easeOut" },
        filter: { duration: 0.8 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? '100vw' : '-100vw',
      opacity: 0,
      rotateY: dir < 0 ? 45 : -45,
      scale: 0.8,
      z: -500,
      filter: 'blur(20px)',
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.5 },
        filter: { duration: 0.5 }
      }
    })
  };

  const titleWords = ["মৎস্য", "বীজ", "উৎপাদন", "খামার", "নাটোর"];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Dynamic Background */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="/photo/1_bg.jpg" 
          alt="bg" 
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30 mix-blend-multiply"></div>
      </motion.div>

      {/* Floating Glass Container (Shadow removed) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
        className="relative z-10 flex flex-col items-center p-12 md:p-24 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 text-center max-w-5xl mx-4"
      >
        {/* Icon (Shadow removed) */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", damping: 15 }}
          className="w-20 h-20 md:w-32 md:h-32 mb-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
        >
          <span className="text-blue-300 font-bold tracking-[0.2em] uppercase">গ্রুপ - বি</span>
        </motion.div>

        {/* Word-by-word animation for Title without drop-shadow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.7 }
            }
          }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-cyan-300 to-emerald-200 tracking-tight leading-normal py-2"
        >
          {titleWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ w: 0 }}
          animate={{ w: "100%" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 mx-auto"
        ></motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-xl md:text-4xl text-slate-300 font-light tracking-wide"
        >
          ভিজিট রিপোর্ট
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
