import React from 'react';
import { motion } from 'framer-motion';

export default function TitleSlide({ data }) {
  const titleAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.2 } 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 relative z-10 w-full">
      {/* Background glow blob */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="glass-panel p-12 md:p-20 max-w-5xl"
      >
        <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} initial="hidden" animate="show" className="mb-8 flex justify-center overflow-hidden">
          <motion.h1 
            variants={titleAnim}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] leading-tight pb-4"
          >
            {data.title}
          </motion.h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-2xl md:text-4xl text-slate-300 font-light tracking-wide"
        >
          {data.subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
}
