import React from 'react';
import { motion } from 'framer-motion';

export default function ContentSlide({ data }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center h-full w-full relative z-10 p-4 md:p-8">
      {/* Text Area - Massive Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -100, rotateY: 10 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        className="flex-1 glass-panel p-8 md:p-16 relative overflow-hidden group flex flex-col justify-center border-r-0 md:rounded-r-none z-20 shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg leading-tight"
        >
          {data.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-3xl leading-relaxed text-slate-200/95 font-light"
        >
          {data.content}
        </motion.p>
      </motion.div>

      {/* Image Area - Full Height Edge */}
      {data.image && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
          className="flex-1 h-64 md:h-full w-full overflow-hidden relative md:rounded-l-none rounded-3xl z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <motion.img 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
          {/* Blend edge gradient */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/80 to-transparent hidden md:block"></div>
        </motion.div>
      )}
    </div>
  );
}
