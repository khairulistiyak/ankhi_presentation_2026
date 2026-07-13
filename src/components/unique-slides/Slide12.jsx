import React from 'react';
import { motion } from 'framer-motion';

const Slide12 = ({ direction = 1 }) => {
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

  const bgImageUrl = "https://image.pollinations.ai/prompt/Circular%20concrete%20cistern%20tanks%20and%20rectangular%20fish%20hatchery%20tanks%20in%20a%20rural%20Bangladesh%20fish%20farm%20with%20greenery?width=800&height=1200&nologo=true";

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center p-6 md:p-12 overflow-hidden transition-colors duration-700 font-sans"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 h-full max-h-[850px]"
      >
        
        {/* Left Column (Content & Live Dashboard Data) - MADE LARGER (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full justify-center">
          
          {/* Title Box */}
          <motion.div 
            variants={itemVariants}
            className="flex-none bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-8 border border-white/50 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-500"
              />
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                খামার মনিটরিং
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-[1.2] tracking-tight mb-4">
              খামারের 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 py-1 inline-block">
                অবকাঠামো
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl">
              খামারটিতে রেণু (Renu) থেকে চারা পোনা (Chara Pona) এবং বড় মাছ পালনের জন্য মোট <span className="font-bold text-blue-600 dark:text-blue-400">৮টি পুকুর</span> ও <span className="font-bold text-emerald-600 dark:text-emerald-400">২টি বড় হাউজ</span> রয়েছে।
            </p>
          </motion.div>

          {/* Live Animation Data Row - MADE TALLER & LARGER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 min-h-[350px]">
            
            {/* 8 Ponds Live Layout Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-8 border border-white/60 dark:border-white/5 shadow-lg flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="flex justify-between items-center mb-6 z-10">
                <h3 className="text-base font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
                  পুকুর বিন্যাস
                </h3>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              </div>
              
              {/* Live 8 Ponds Animation Grid - EXPANDED */}
              <div className="grid grid-cols-4 gap-3 mb-6 flex-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-slate-200 dark:bg-slate-800/80 rounded-xl overflow-hidden relative shadow-inner min-h-[60px]">
                    {/* Simulated live water level with CSS transform */}
                    <motion.div 
                      animate={{ 
                        y: ["10%", "-5%", "10%"],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                      className="absolute inset-x-[-20%] bottom-[-20%] h-[120%] bg-blue-400/30 dark:bg-blue-500/30 rounded-[40%]"
                    />
                    <motion.div 
                      animate={{ 
                        y: ["-5%", "10%", "-5%"],
                        rotate: [2, -2, 2]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                      className="absolute inset-x-[-20%] bottom-[-20%] h-[120%] bg-blue-500/40 dark:bg-blue-400/40 rounded-[35%]"
                    />
                    {/* Live Oxygen Bubbles */}
                    <motion.div
                      animate={{ y: [30, -50], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                      className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-3 z-10 border-t border-slate-200 dark:border-slate-800 pt-4">
                <span className="text-5xl font-black text-slate-800 dark:text-white tabular-nums">০৮</span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">টি পুকুর</span>
              </div>
            </motion.div>

            {/* 2 Houses Live Hatchery Tanks Card - MADE MUCH LARGER */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-8 border border-white/60 dark:border-white/5 shadow-lg flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="flex justify-between items-center mb-6 z-10">
                <h3 className="text-base font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
                  হ্যাচারি হাউজ
                </h3>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              
              {/* Live 2 Houses/Tanks Animation - MASSIVELY SCALED UP */}
              <div className="flex justify-center gap-8 mb-6 flex-1 items-end h-full min-h-[160px]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-24 h-full max-h-[200px] border-4 border-emerald-500/20 dark:border-emerald-500/30 rounded-t-3xl rounded-b-xl relative overflow-hidden bg-slate-100 dark:bg-slate-800/50 shadow-inner">
                    {/* Tank measurement lines */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 border-l border-emerald-500/10 flex flex-col justify-between py-2">
                      <div className="w-full h-px bg-emerald-500/30"></div>
                      <div className="w-full h-px bg-emerald-500/30"></div>
                      <div className="w-full h-px bg-emerald-500/30"></div>
                    </div>
                    
                    {/* Water filling up and down slightly */}
                    <motion.div 
                      animate={{ height: ["55%", "80%", "55%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
                      className="absolute bottom-0 inset-x-0 bg-emerald-400/40 dark:bg-emerald-500/40 border-t-2 border-emerald-300/50"
                    >
                      {/* Heavy bubbling for hatchery tanks */}
                      {[...Array(6)].map((_, j) => (
                        <motion.div
                          key={j}
                          animate={{ y: [0, -80], x: [0, Math.random() * 20 - 10], opacity: [0, 1, 0], scale: [0.5, 1.5, 1] }}
                          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                          className="absolute bottom-2 left-[20%] w-2 h-2 bg-white/70 rounded-full"
                          style={{ left: `${10 + (j * 15)}%` }}
                        />
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-3 z-10 border-t border-slate-200 dark:border-slate-800 pt-4">
                <span className="text-5xl font-black text-slate-800 dark:text-white tabular-nums">০২</span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">টি বড় হাউজ</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column (Static Image) - MADE SMALLER (col-span-4) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 dark:border-white/5 min-h-[300px] lg:min-h-full group"
        >
          {/* STATIC Image Rule strictly enforced */}
          <div 
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Farm View</span>
            </div>
            <p className="text-white/90 text-sm font-light leading-relaxed">
              হ্যাচারি ও পুকুরগুলোর সুষ্ঠু ব্যবস্থাপনার ওপর রেণু ও পোনা উৎপাদন বহুলাংশে নির্ভরশীল।
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Slide12;
