import React from 'react';
import { motion } from 'framer-motion';

const Slide14 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({ opacity: 0, x: 50, filter: "blur(10px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  // Pop-in with slight rotation (placing on lab table)
  const materialVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 15, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    }
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/Close%20up%20of%20a%20pH%20meter,%20magnifying%20glass,%20and%20water%20testing%20kit%20in%20a%20scientific%20lab%20environment?width=800&height=1200&nologo=true";

  const materials = [
    { title: "পিএইচ (pH) মিটার ও অ্যামোনিয়া কিট", icon: "🌡️", color: "from-rose-400 to-red-500" },
    { title: "ম্যাগনিফাইং গ্লাস ও অ্যালকোহল", icon: "🔍", color: "from-purple-400 to-fuchsia-500" },
    { title: "ফিনাইল ব্লু, পাতিত পানি", icon: "💧", color: "from-blue-400 to-cyan-500" },
    { title: "পেট্রিডিশ, ফোম, জাল ও হ্যাচারি", icon: "🧫", color: "from-amber-400 to-yellow-500" },
  ];

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#060B14] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans"
    >
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none scale-110"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px) saturate(150%)',
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[800px] items-center"
      >
        
        {/* Left Column (Static Image) */}
        <motion.div 
          variants={materialVariants}
          className="lg:col-span-5 rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgb(0,0,0,0.15)] border border-white/20 dark:border-white/5 h-[300px] lg:h-full group order-2 lg:order-1"
        >
          <div 
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Water Quality</span>
            </div>
            <p className="text-white text-sm font-light leading-relaxed">
              পানির গুণগত মান ও পিএইচ (pH) পরিমাপের জন্য আধুনিক যন্ত্রপাতির ব্যবহার অপরিহার্য।
            </p>
          </div>
        </motion.div>

        {/* Right Column (Content & Lab Items) */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-full justify-center order-1 lg:order-2">
          
          {/* Title Box */}
          <motion.div 
            variants={materialVariants}
            className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-8 border border-white/50 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-rose-500"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                ল্যাবরেটরি উপকরণ (পর্ব ২)
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-[1.2] tracking-tight">
              প্রণোদিত প্রজননে 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 py-1 inline-block">
                ব্যবহৃত উপকরণ
              </span>
            </h2>
          </motion.div>

          {/* Interactive Material Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {materials.map((item, index) => (
              <motion.div 
                key={index}
                variants={materialVariants}
                className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[24px] p-6 border border-white/60 dark:border-white/5 shadow-md flex flex-col items-center text-center gap-4 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-all cursor-default"
              >
                {/* Icon Container with Lab Placement Animation */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg relative overflow-hidden`}>
                  <span className="text-3xl relative z-10">{item.icon}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Slide14;
