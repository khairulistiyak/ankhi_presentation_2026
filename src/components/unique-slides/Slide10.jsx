import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 1.1, filter: 'blur(20px)' }),
    center: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, filter: 'blur(20px)', transition: { duration: 0.8 } })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#030712] flex items-center justify-center p-8 overflow-hidden text-white"
    >
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-gradient-to-r from-teal-900/40 to-transparent"></div>
        <div className="w-1/2 h-full"></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 z-10">
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-teal-400"></div>
              <span className="text-teal-400 font-medium tracking-widest uppercase">Spawning</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-normal mb-8">
              মাছের মিলন ও <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300 py-2 inline-block leading-normal">
                নিষিক্তকরণ
              </span>
            </h2>
            
            <div className="space-y-6 text-slate-300 text-xl leading-relaxed border-l-2 border-teal-800 pl-6">
              <p>
                স্ত্রী ও পুং মাছ পানি ট্যাংকে ছেড়ে দেওয়ার <span className="text-white font-bold">৬ ঘন্টা পর</span> সহজাত প্রক্রিয়ায় মিলনের মাধ্যমে ডিম ও শুক্রাণু বের হয় এবং নিষিক্তকরণ হয়।
              </p>
              <p>
                আবার চাপ প্রয়োগ পদ্ধতিতে একই সময় স্ত্রী মাছের পেটে হালকা চাপ দিলে সহজ ভাবে ডিম বের হয়। যা প্লাস্টিকের পাত্রে সংগ্রহ করা হয়।
              </p>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-teal-500/30 flex items-center justify-center relative z-10 bg-teal-950/50 backdrop-blur-sm">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-teal-400/40 flex items-center justify-center relative">
                {/* Center Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                
                {/* Orbiting Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                >
                  <div className="absolute -top-3 left-1/2 w-6 h-6 bg-teal-400 rounded-full blur-[2px] shadow-[0_0_15px_#2dd4bf]"></div>
                </motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 rounded-full border border-dashed border-teal-700/50"
                >
                  <div className="absolute top-1/4 -left-3 w-4 h-4 bg-emerald-400 rounded-full blur-[1px] shadow-[0_0_10px_#34d399]"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
