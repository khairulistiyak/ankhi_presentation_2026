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

  // Clean Architectural Pond Representation
  const ArchitecturalPond = ({ delay = 0 }) => (
    <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800/50 overflow-hidden flex items-end">
      
      {/* Clean Water Level Cross-section */}
      <motion.div 
        animate={{ y: ["0%", "5%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="w-full h-[75%] bg-blue-100 dark:bg-blue-900/40 border-t border-blue-300 dark:border-blue-500/50 relative overflow-hidden"
      >
        {/* Subtle Architectural Water Flow Lines */}
        <motion.div 
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-[200%] h-full opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.2) 10px, rgba(59, 130, 246, 0.2) 12px)'
          }}
        />

        {/* Light Bubbles (halka bud budi) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -80], 
              opacity: [0, 0.6, 0], 
              scale: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: delay + Math.random() * 2,
              ease: "easeOut"
            }}
            className="absolute bottom-1 w-1.5 h-1.5 bg-blue-300 dark:bg-blue-400 rounded-full z-10"
            style={{ left: `${25 + (i * 25)}%` }}
          />
        ))}
      </motion.div>
    </div>
  );

  // Clean, modern liquid animation for Hatchery Tanks
  const CleanLiquid = ({ level = "50%", primaryColor = "bg-emerald-500", secondaryColor = "bg-emerald-400" }) => (
    <div className="absolute inset-0 overflow-hidden bg-slate-100 dark:bg-slate-800/80 shadow-inner">
      <div 
        className="absolute inset-x-0 bottom-0 w-full flex flex-col justify-end"
        style={{ height: level, transition: 'height 2s ease-in-out' }}
      >
        <div className={`absolute inset-0 ${primaryColor}`}></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 bottom-0 w-[250%] aspect-square -translate-x-1/2 translate-y-[45%] ${secondaryColor} opacity-70`}
          style={{ borderRadius: '43% 57% 43% 57% / 53% 45% 55% 47%' }}
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 bottom-0 w-[260%] aspect-square -translate-x-1/2 translate-y-[50%] ${primaryColor}`}
          style={{ borderRadius: '40% 60% 65% 35% / 40% 45% 55% 60%' }}
        />
      </div>
      {/* Hatchery Bubbles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -180], opacity: [0, 1, 0], scale: [0.6, 1.2, 0.8] }}
          transition={{ duration: 1.2 + Math.random() * 1.5, repeat: Infinity, delay: Math.random() * 2 }}
          className="absolute bottom-2 w-2 h-2 bg-white/90 rounded-full z-10"
          style={{ left: `${20 + (i * 15)}%` }}
        />
      ))}
    </div>
  );

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
        
        {/* Left Column */}
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

          {/* Live Animation Data Row */}
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
              
              {/* CLEAN ARCHITECTURAL POND LAYOUT */}
              <div className="grid grid-cols-4 gap-4 mb-6 flex-1">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-sm border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <ArchitecturalPond delay={i * 0.5} />
                  </div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-3 z-10 border-t border-slate-200 dark:border-slate-800 pt-4">
                <span className="text-5xl font-black text-slate-800 dark:text-white tabular-nums">০৮</span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">টি পুকুর</span>
              </div>
            </motion.div>

            {/* 2 Houses Live Hatchery Tanks Card */}
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
              
              {/* Clean 2 Houses/Tanks Animation */}
              <div className="flex justify-center gap-10 mb-6 flex-1 items-end h-full min-h-[160px]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-28 h-full max-h-[220px] border-[8px] border-slate-200 dark:border-slate-700/50 rounded-t-3xl rounded-b-xl relative overflow-hidden bg-slate-50 dark:bg-slate-800/80 shadow-lg">
                    {/* Tank measurement lines */}
                    <div className="absolute right-0 top-0 bottom-0 w-3 border-l border-emerald-500/10 flex flex-col justify-between py-6 z-20">
                      <div className="w-full h-[2px] bg-slate-300/50"></div>
                      <div className="w-full h-[2px] bg-slate-300/50"></div>
                      <div className="w-full h-[2px] bg-slate-300/50"></div>
                    </div>
                    
                    {/* Clean Liquid rising/falling */}
                    <motion.div 
                      animate={{ height: ["60%", "85%", "60%"] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: i * 4 }}
                      className="absolute bottom-0 inset-x-0"
                    >
                      <CleanLiquid level="100%" primaryColor="bg-emerald-500" secondaryColor="bg-emerald-400" />
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

        {/* Right Column (Static Image) */}
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
