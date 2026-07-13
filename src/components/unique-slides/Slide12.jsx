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

  // Image strictly according to rand.md plan: Circular concrete cistern tanks or rectangular fish hatchery tanks
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
      {/* Ambient Blurred Background from the Image */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none scale-110"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px) saturate(150%)',
        }}
      />

      {/* Main Bento Box Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 h-full max-h-[800px]"
      >
        
        {/* Left Column (Content & Live Animation Data) */}
        <div className="lg:col-span-6 flex flex-col gap-6 h-full">
          
          {/* Title Box */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border border-white/50 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                ইনফ্রাস্ট্রাকচার
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-[1.2] tracking-tight mb-4">
              খামারের 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 py-1 inline-block">
                অবকাঠামো
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              খামারটিতে রেণু (Renu) থেকে চারা পোনা (Chara Pona) এবং বড় মাছ পালনের জন্য মোট <span className="font-bold text-blue-500">৮টি পুকুর</span> ও <span className="font-bold text-indigo-500">২টি বড় হাউজ</span> রয়েছে।
            </p>
          </motion.div>

          {/* Live Animation Data Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto sm:h-[240px]">
            
            {/* 8 Ponds Live Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-white/50 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between overflow-hidden relative group"
            >
              <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 mb-2">চাষের পুকুর</h3>
              
              {/* Live Animation for 8 Ponds */}
              <div className="grid grid-cols-4 gap-2 mb-4 h-16 relative">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="relative bg-blue-100 dark:bg-blue-900/50 rounded-md overflow-hidden"
                  >
                    {/* Live water ripple effect inside each pond */}
                    <motion.div 
                      animate={{ 
                        y: ["10%", "-5%", "10%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="absolute inset-x-[-10%] bottom-[-20%] h-[150%] bg-blue-400/30 rounded-[40%] opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-800 dark:text-white tabular-nums">০৮</span>
                <span className="text-blue-500 font-medium text-sm">টি পুকুর</span>
              </div>
            </motion.div>

            {/* 2 Houses Live Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-white/50 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between overflow-hidden relative group"
            >
              <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 mb-2">হ্যাচারি হাউজ</h3>
              
              {/* Live Animation for 2 Houses */}
              <div className="flex gap-4 mb-4 h-16 items-end">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex-1 relative flex flex-col items-center justify-end h-full">
                    {/* Live processing pulse from houses */}
                    <motion.div 
                      animate={{ height: ["0%", "100%", "0%"], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute bottom-full w-1 bg-gradient-to-t from-indigo-500 to-transparent"
                    />
                    <div className="w-full h-10 bg-indigo-100 dark:bg-indigo-900/50 border-t-2 border-indigo-400 rounded-t-xl relative overflow-hidden flex items-end">
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="w-full h-1 bg-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-800 dark:text-white tabular-nums">০২</span>
                <span className="text-indigo-500 font-medium text-sm">টি বড় হাউজ</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column (Static Image matching Plan) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-6 rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-white/20 dark:border-white/5 min-h-[300px] lg:min-h-full"
        >
          {/* STATIC Image Rule strictly enforced */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
          
          <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-2xl text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Hatchery View
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Slide12;
