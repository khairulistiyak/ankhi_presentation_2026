import React from 'react';
import { motion } from 'framer-motion';

export default function ListSlide({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <div className="flex flex-col h-full w-full relative z-10 p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 drop-shadow-xl inline-block px-8 py-4 glass-panel !rounded-full">
          {data.title}
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full h-full pb-16"
      >
        {data.items.map((item, index) => {
          // Extract heading if there's a colon
          const hasColon = item.includes(':');
          const heading = hasColon ? item.split(':')[0] : `পয়েন্ট ${index + 1}`;
          const text = hasColon ? item.substring(item.indexOf(':') + 1).trim() : item;

          return (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              className="glass-panel p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer border-t-2 border-t-white/20"
            >
              {/* Card glowing hover effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.5)] mr-4">
                  {index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {heading}
                </h3>
              </div>
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed">
                {text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
