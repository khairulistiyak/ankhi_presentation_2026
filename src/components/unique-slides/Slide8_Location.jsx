import React from 'react';
import { motion } from 'framer-motion';

export default function Slide8_Location({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.9, y: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, type: 'spring', damping: 20 } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, y: dir < 0 ? 100 : -100, transition: { duration: 0.5 } })
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#080c17] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-rose-900/10 overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Text Section */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="flex-1 p-8 md:p-16 flex flex-col justify-center relative"
        >
          {/* Decorative subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-rose-500/30 transform rotate-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white transform -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-200 mb-4 leading-normal tracking-wide py-3">
            পরিদর্শনকৃত স্থান
          </h2>
          
          <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-normal py-2 drop-shadow-sm">
            মৎস্য বীজ উৎপাদন খামার,
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 leading-normal py-3">নাটোর সদর, নাটোর।</span>
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mt-8 md:mt-12"></div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="flex-1 relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
          <img 
            src="/photo/Inspection/khamar.jpg" 
            alt="মৎস্য বীজ উৎপাদন খামার" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20 pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
