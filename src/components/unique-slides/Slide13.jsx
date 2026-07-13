import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({ opacity: 0, x: 50, filter: "blur(10px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // --- Live Data-Driven Animations ---

  // 1. Spinning Centrifuge
  const LiveCentrifuge = () => (
    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.1)_100%)]"></div>
      
      {/* Central Hub */}
      <div className="absolute w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 z-20 shadow-md"></div>
      
      {/* Spinning Rotor */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative z-10"
      >
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <div 
            key={i}
            className="absolute w-4 h-12 bg-orange-400/80 rounded-full left-1/2 top-1/2 origin-top"
            style={{ 
              transform: `translateX(-50%) rotate(${angle}deg)`,
              boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
            }}
          >
            {/* Vial inside rotor */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-white/80 rounded-sm"></div>
          </div>
        ))}
      </motion.div>
      
      {/* Speed indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 px-2 py-0.5 rounded text-[10px] text-white font-mono z-30">
        ৩০০০ আর.পি.এম
      </div>
    </div>
  );

  // 2. Animated Test Tube / Syringe
  const LiveTestTube = () => (
    <div className="relative flex flex-col items-center">
      {/* Dropper */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-8 bg-slate-300 dark:bg-slate-600 rounded-t-sm mb-1 relative"
      >
        {/* Drop falling */}
        <motion.div
          animate={{ y: [0, 60], opacity: [1, 1, 0], scale: [1, 1.5, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 1 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-2 bg-teal-400 rounded-full"
        />
      </motion.div>

      {/* Test Tube */}
      <div className="w-10 h-32 border-4 border-t-0 border-white/60 dark:border-white/20 rounded-b-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden shadow-[0_0_15px_rgba(45,212,191,0.2)]">
        {/* Liquid level rising */}
        <motion.div 
          animate={{ height: ["20%", "70%", "20%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-teal-500 to-emerald-400 opacity-80"
        >
          {/* Bubbles in liquid */}
          {[...Array(3)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ y: [0, -40], opacity: [0, 1, 0] }}
               transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
               className="absolute bottom-1 w-1 h-1 bg-white/80 rounded-full"
               style={{ left: `${30 + i * 20}%` }}
             />
          ))}
        </motion.div>
      </div>
    </div>
  );

  // 3. Glowing Hormone Vial
  const LiveHormoneVial = () => (
    <div className="relative flex flex-col items-center justify-end h-full">
      {/* Cap */}
      <div className="w-6 h-4 bg-slate-400 dark:bg-slate-500 rounded-t-md z-10"></div>
      <div className="w-5 h-2 bg-slate-300 dark:bg-slate-400 z-10"></div>
      
      {/* Bottle */}
      <div className="w-16 h-20 border-2 border-white/40 dark:border-white/20 rounded-xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden shadow-lg flex items-end justify-center pb-2">
        
        {/* Glowing Powder/Liquid */}
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 10px rgba(99,102,241,0.2)", "0 0 30px rgba(99,102,241,0.8)", "0 0 10px rgba(99,102,241,0.2)"],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-8 bg-indigo-500 rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>
        </motion.div>
        
        {/* Label */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-white/90 rounded-[2px] flex items-center justify-center">
          <span className="text-[10px] font-bold text-slate-800">পি.জি</span>
        </div>
      </div>
      
      {/* Outer Glow */}
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-500/30 rounded-full blur-xl z-0 pointer-events-none"
      />
    </div>
  );

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans transition-colors duration-700"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[850px] items-center"
      >
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-center">
          
          {/* Title Box */}
          <motion.div 
            variants={itemVariants}
            className="flex-none bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-8 border border-white/50 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                ল্যাবরেটরি উপকরণ (পর্ব ১)
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-normal md:leading-relaxed tracking-tight mb-4">
              প্রণোদিত প্রজননে 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 py-2 inline-block">
                ব্যবহৃত উপকরণ
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              সফল প্রণোদিত প্রজননের জন্য ল্যাবরেটরিতে প্রয়োজনীয় উপকরণের উপস্থিতি অত্যাবশ্যক।
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "হরমোন", desc: "সংরক্ষিত P.G ও H.C.G", icon: "🧪", color: "text-indigo-500", bg: "bg-indigo-500/10" },
              { title: "বিকার ও পাত্র", desc: "সিরিঞ্জ, টেস্টটিউব, প্লাস্টিকের বল", icon: "💉", color: "text-teal-500", bg: "bg-teal-500/10" },
              { title: "সেন্ট্রিফিউজ", desc: "হাতে চালিত বা ইলেকট্রিক", icon: "⚙️", color: "text-orange-500", bg: "bg-orange-500/10" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-5 border border-white/60 dark:border-white/5 shadow-md flex items-center gap-5 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Live Lab Animations) */}
        <div className="lg:col-span-7 h-full flex flex-col gap-6 pt-4 lg:pt-0">
          
          {/* Top Row: Hormone & Syringe */}
          <div className="grid grid-cols-2 gap-6 h-1/2">
            
            {/* PG Hormone Live Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-2xl rounded-[32px] p-6 border border-white/50 dark:border-white/5 shadow-lg relative flex flex-col items-center justify-center overflow-hidden group"
            >
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">হরমোন সংগ্রহ</span>
              </div>
              <div className="mt-6 flex-1 w-full flex items-center justify-center">
                <LiveHormoneVial />
              </div>
            </motion.div>

            {/* Test Tube / Syringe Live Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-2xl rounded-[32px] p-6 border border-white/50 dark:border-white/5 shadow-lg relative flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">পরিমাপ</span>
              </div>
              <div className="mt-6 flex-1 w-full flex items-center justify-center">
                <LiveTestTube />
              </div>
            </motion.div>
            
          </div>

          {/* Bottom Row: Centrifuge Machine */}
          <motion.div 
            variants={itemVariants}
            className="h-1/2 bg-white/50 dark:bg-slate-900/30 backdrop-blur-2xl rounded-[32px] p-6 border border-white/50 dark:border-white/5 shadow-lg relative flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6"
          >
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">সেন্ট্রিফিউজ প্রক্রিয়া</span>
            </div>
            
            <div className="mt-6 md:mt-0 flex-1 flex items-center justify-center">
              <LiveCentrifuge />
            </div>
            
            <div className="flex-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
              <h4 className="text-slate-700 dark:text-slate-200 font-bold mb-2">প্রক্রিয়া চলছে...</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                হরমোন গ্রন্থি থেকে নির্যাস পৃথক করার জন্য ইলেকট্রিক সেন্ট্রিফিউজ মেশিনে ৩০০০ RPM গতিতে ঘোরানো হচ্ছে।
              </p>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-orange-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Slide13;
