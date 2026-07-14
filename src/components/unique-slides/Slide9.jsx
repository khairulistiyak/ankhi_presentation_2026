import React from 'react';
import { motion } from 'framer-motion';

const Slide9 = ({ direction = 1 }) => {
  const words = ['মৎস্য', 'চাষে', 'প্রণোদিত', 'প্রজনন', 'পদ্ধতি'];

  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Slide number */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-8 right-10 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 max-w-5xl">

        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-10 origin-center"
        />

        {/* Main title — word by word */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-black ${ i === 2 || i === 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-6xl md:text-7xl lg:text-8xl py-3 leading-normal' : 'text-white text-5xl md:text-6xl lg:text-7xl' }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 origin-center"
        />

      </div>
    </div>
  );
};

export default Slide9;
