import React from 'react';
import { motion } from 'framer-motion';

export default function Slide8_Location({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.8, rotate: dir > 0 ? 5 : -5 }),
    center: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: 'spring', damping: 20 } },
    exit: (dir) => ({ opacity: 0, scale: 0.8, rotate: dir < 0 ? 5 : -5, transition: { duration: 0.5 } })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#1e1b4b] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#1e1b4b] to-[#1e1b4b] pointer-events-none"></div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center bg-indigo-950/40 backdrop-blur-2xl border border-indigo-500/30 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-900/50 text-center"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-24 h-24 bg-gradient-to-tr from-rose-500 to-orange-400 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-rose-500/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-200 mb-6 py-2 leading-normal">
          পরিদর্শনকৃত স্থান
        </h2>
        
        <p className="text-4xl md:text-5xl font-black text-white leading-normal py-2">
          মৎস্য বীজ উৎপাদন খামার,
          <br/>
          <span className="text-rose-400">নাটোর সদর, নাটোর।</span>
        </p>

        <div className="mt-12 w-full h-48 bg-indigo-900/30 rounded-2xl border border-indigo-500/20 flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-10"></div>
          <p className="relative z-20 text-indigo-300 font-medium text-lg">Photo Placeholder</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
