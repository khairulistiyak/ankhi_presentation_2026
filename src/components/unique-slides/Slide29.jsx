import React from 'react';
import { motion } from 'framer-motion';

const Slide29 = () => {
  return (
    <div className="w-full h-full bg-[#02050f] text-white overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Deep Center Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/30 via-teal-600/20 to-emerald-600/30 rounded-full blur-[120px]" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="thankYouGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#thankYouGrid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-200 py-4 leading-tight drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            ধন্যবাদ
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-slate-300 text-lg md:text-xl font-light tracking-wide mt-2"
          >
            আপনাদের মূল্যবান সময়ের জন্য আন্তরিক কৃতজ্ঞতা
          </motion.p>
        </motion.div>
      </div>

      {/* Magical Floating Particles */}
      {[...Array(30)].map((_, i) => {
        const leftPos = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const size = Math.random() * 4 + 2;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${leftPos}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            initial={{ bottom: "-10%" }}
            animate={{ bottom: "110%", left: `${leftPos + (Math.random() * 10 - 5)}%` }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          />
        );
      })}
    </div>
  );
};

export default Slide29;
