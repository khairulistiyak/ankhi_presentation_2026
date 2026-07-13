import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Smooth Counter Component with Bengali Numerals
const Counter = ({ from = 0, to, duration = 2.5, delay = 0 }) => {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { 
      duration: duration, 
      delay: delay,
      ease: [0.22, 1, 0.36, 1], // Cinematic ease out
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return controls.stop;
  }, [to, delay, duration]);

  const toBengaliNumber = (num) => {
    const banglaDigits = {
      '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
      '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/\d/g, x => banglaDigits[x] || x);
  };

  return <>{toBengaliNumber(displayValue)}</>;
};

const Slide11 = ({ direction = 1 }) => {
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
      transition: { staggerChildren: 0.2, delayChildren: 0.4 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/A%20wide%20shot%20of%20a%20commercial%20fish%20hatchery%20or%20large%20fish%20ponds?width=1200&height=800&nologo=true";

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-[#0B1120] p-4 sm:p-8 overflow-hidden transition-colors duration-700 font-sans [perspective:1200px]"
    >
      {/* Abstract Glowing Background Orbs (Premium Feel matching Slide 10) */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-teal-400/20 dark:bg-teal-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-[40px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[min-content]">
        
        {/* Left Column: Data Cards */}
        <motion.div 
          variants={contentVariants} 
          initial="hidden" 
          animate="visible"
          className="w-full lg:w-[55%] flex flex-col justify-center gap-6"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-teal-500 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">ওভারভিউ</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-teal-600 to-blue-500 dark:from-teal-400 dark:to-blue-400 bg-clip-text py-3 text-transparent leading-relaxed drop-shadow-sm">
                খামার সম্পর্কে তথ্য
              </span>
            </h2>
            <div className="relative mt-4">
              <div className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-teal-500 to-blue-400 opacity-80"></div>
              <p className="pl-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed py-1">
                নাটোর মৎস্য বীজ উৎপাদন খামার, নাটোর সদর
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Animated Stat Card 1 */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-xl border border-white/80 dark:border-slate-700/80 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/50 dark:bg-teal-900/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center text-3xl shadow-inner border border-teal-200/50 dark:border-teal-800/50">
                  🐟
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">বার্ষিক উৎপাদন</h3>
              <div className="text-5xl lg:text-6xl font-black text-slate-800 dark:text-white flex items-baseline gap-2">
                <span className="inline-block min-w-[120px] bg-gradient-to-br from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent tabular-nums">
                  <Counter from={0} to={350} duration={2.5} delay={0.6} />
                </span>
                <span className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">কোটি পোনা</span>
              </div>
            </motion.div>

            {/* Animated Stat Card 2 */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-xl border border-white/80 dark:border-slate-700/80 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-3xl shadow-inner border border-blue-200/50 dark:border-blue-800/50">
                  💰
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">বার্ষিক আয়</h3>
              <div className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-800 dark:text-white flex items-baseline gap-2">
                <span className="inline-block min-w-[160px] sm:min-w-[180px] bg-gradient-to-br from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight tabular-nums">
                  <Counter from={0} to={85000} duration={3} delay={0.8} />
                </span>
                <span className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">টাকা</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Completely STATIC Image with modern container */}
        <div className="w-full lg:w-[45%] mt-8 lg:mt-0 relative shrink-0">
          {/* Static Image Box - NO MOTION OR ROTATE ANIMATION */}
          <div className="relative h-[250px] sm:h-[350px] lg:h-[550px] w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80">
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
          
          {/* Glass Badge on Image */}
          <div className="absolute top-6 right-6 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/20 text-white px-5 py-2.5 rounded-full font-bold tracking-wider text-sm flex items-center gap-3 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
            Govt. Hatchery
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Slide11;
