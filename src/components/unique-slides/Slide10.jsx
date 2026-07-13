import React from 'react';
import { motion } from 'framer-motion';

const Slide10 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 10 : -10,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
    }
  };

  // Modern sleek bar chart animation
  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (custom) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        delay: 0.8 + custom * 0.15,
        duration: 1,
        type: "spring",
        stiffness: 50,
      }
    })
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/A%20professional%20photo%20of%20a%20rural%20fish%20farming%20pond%20or%20a%20farmer%20feeding%20fish?width=1200&height=800&nologo=true";

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-[#0B1120] p-8 overflow-hidden transition-colors duration-700 font-sans [perspective:1200px]"
    >
      {/* Abstract Glowing Background Orbs for Premium Feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-400/20 dark:bg-emerald-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-[40px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Image with Modern Floating Badges */}
        <div className="w-full md:w-[45%] relative shrink-0">
          {/* Static Image Box */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${bgImageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating UI Widget: The "Building Up" Metric (Overlapping the image slightly for a 3D effect) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 md:-right-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/50 dark:border-slate-700/50 w-48 sm:w-64"
          >
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">অর্থনৈতিক প্রবৃদ্ধি</h4>
            <div className="flex items-end justify-between h-24 gap-2">
              {[40, 60, 75, 100].map((height, idx) => (
                <div key={idx} className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-md h-full flex items-end overflow-hidden">
                  <motion.div
                    custom={idx}
                    variants={barVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ height: `${height}%`, originY: 1 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-emerald-400 rounded-t-md"
                  ></motion.div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
              <span>২০২০</span>
              <span className="text-emerald-500 dark:text-emerald-400">+৩০০%</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Typography & Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center pl-0 md:pl-8">
          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            {/* Decorative Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-emerald-500 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">খাতের ভূমিকা</span>
            </div>

            <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text py-2 text-transparent drop-shadow-sm">
                মৎস্য চাষের 
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 bg-clip-text py-2 text-transparent leading-relaxed drop-shadow-sm">
                গুরুত্ব
              </span>
            </h2>
            
            <div className="relative">
              {/* Modern Quote Style Line */}
              <div className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-emerald-400 opacity-80"></div>
              
              <p className="pl-8 text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed py-2 transition-colors duration-500">
                প্রাকৃতিক মাছের ঘাটতি পূরণে <span className="font-bold text-blue-600 dark:text-blue-400">মৎস্য চাষ (Fish Farming)</span> অত্যন্ত জরুরি। এটি আমাদের আমিষের চাহিদা মেটানোর পাশাপাশি কর্মসংস্থান তৈরি করে এবং গ্রামীণ অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা রাখে।
              </p>
            </div>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
                className="px-6 py-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800/50 backdrop-blur-md"
              >
                🐟 আমিষের চাহিদা পূরণ
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}
                className="px-6 py-3 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800/50 backdrop-blur-md"
              >
                💼 কর্মসংস্থান সৃষ্টি
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Slide10;
