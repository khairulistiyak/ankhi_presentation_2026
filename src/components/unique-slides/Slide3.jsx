import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3({ direction }) {
  // Fluid modern grid enter animation
  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 80, damping: 20 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.6, ease: "easeOut" }
      }
    },
    exit: (dir) => ({
      y: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        y: { type: "spring", stiffness: 80, damping: 20 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    show: { 
      y: 0, opacity: 1, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden"
    >
      {/* Light modern background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="w-full max-w-7xl h-[85vh] p-8 mx-auto flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10"
        >
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Chapter 01</span>
          <h2 className="text-6xl font-black text-slate-900 tracking-tight">ভূমিকা</h2>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0"
        >
          {/* Main Info Box */}
          <motion.div variants={itemVariants} className="md:col-span-2 relative rounded-3xl overflow-hidden group shadow-2xl shadow-blue-900/10">
            <img 
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2000&auto=format&fit=crop" 
              alt="fish farming" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4 leading-normal">
                বাংলাদেশ নদী-বহুল দেশ। কিন্তু বাড়তি জনসংখ্যার জন্য প্রাকৃতিক মাছে চাহিদা মেটে না।
              </h3>
              <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Secondary Stats/Info Boxes */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex-1 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-50 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Fish Farming জরুরি</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  এটি আমাদের প্রতিদিনের আমিষের চাহিদা মেটায় এবং প্রচুর কর্মসংস্থান তৈরি করে।
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-xl shadow-blue-900/20 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10">
                <div className="text-5xl font-black mb-2 flex items-baseline">
                  100<span className="text-2xl ml-1 text-blue-200">%</span>
                </div>
                <p className="text-blue-100 font-medium text-lg">
                  গ্রামীণ অর্থনীতিতে বিশাল ভূমিকা রাখছে।
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
