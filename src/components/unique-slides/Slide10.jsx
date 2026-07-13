import React from 'react';
import { motion } from 'framer-motion';

const Slide10 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" }
    }
  };

  // Building up animation placed OUTSIDE the photo
  const barVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: (custom) => ({
      height: custom.height,
      opacity: 1,
      transition: {
        delay: 0.6 + custom.index * 0.2,
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    })
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/A%20professional%20photo%20of%20a%20rural%20fish%20farming%20pond%20or%20a%20farmer%20feeding%20fish?width=1200&height=800&nologo=true";

  const chartBars = [
    { height: "40px", color: "bg-blue-400 dark:bg-blue-500" },
    { height: "80px", color: "bg-teal-400 dark:bg-teal-500" },
    { height: "120px", color: "bg-emerald-400 dark:bg-emerald-500" },
    { height: "160px", color: "bg-green-500 dark:bg-green-600" },
  ];

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-8 overflow-hidden transition-colors duration-500"
    >
      {/* Background Pattern for Light & Dark Mode */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5" style={{
        backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        color: 'currentColor'
      }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Completely STATIC Image */}
        <div className="w-full md:w-1/2 h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-colors duration-500 shrink-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Right Column: Text Content & Animation */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white tracking-tight transition-colors duration-500">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 bg-clip-text py-3 text-transparent leading-relaxed drop-shadow-sm">
                মৎস্য চাষের গুরুত্ব
              </span>
            </h2>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-emerald-500"></div>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed py-2 transition-colors duration-500">
                প্রাকৃতিক মাছের ঘাটতি পূরণে <strong className="text-blue-600 dark:text-blue-400">মৎস্য চাষ (Fish Farming)</strong> অত্যন্ত জরুরি। এটি আমাদের আমিষের চাহিদা মেটানোর পাশাপাশি কর্মসংস্থান তৈরি করে এবং গ্রামীণ অর্থনীতিতে গুরুত্বপূর্ণ ভূমিকা রাখে।
              </p>
            </div>
            
            {/* Growth Animation positioned below the text */}
            <div className="mt-10 h-[160px] flex items-end justify-start gap-4 px-4">
              {chartBars.map((bar, idx) => (
                <motion.div
                  key={idx}
                  custom={{ index: idx, height: bar.height }}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  className={`w-16 rounded-t-xl ${bar.color} shadow-lg border-t border-white/30 dark:border-white/10`}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Slide10;
