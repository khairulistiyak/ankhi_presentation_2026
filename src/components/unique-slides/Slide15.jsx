import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({ opacity: 0, scale: 1.05, filter: "blur(20px)" }),
    center: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ opacity: 0, scale: 0.95, filter: "blur(20px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  // Target/Focus animation for the Extraction
  const targetVariants = {
    hidden: { scale: 3, opacity: 0, rotate: 45 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1.2, delay: 1, type: "spring", stiffness: 100 } 
    }
  };

  const pullOutVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, delay: 2, type: "spring", bounce: 0.5 } 
    }
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/Macro%20shot%20of%20a%20fish%20head%20in%20a%20clean%20scientific%20laboratory%20setting,%20clinical%20lighting?width=1920&height=1080&nologo=true";

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Background Image with Target/Blur Effect */}
      <motion.div 
        animate={{ filter: ["blur(0px)", "blur(12px)"], scale: [1, 1.1] }}
        transition={{ duration: 1.5, delay: 0.5, fillMode: "forwards" }}
        className="absolute inset-0 z-0 origin-center"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-slate-950/60 mix-blend-multiply"></div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 p-6 md:p-12 h-full">
        
        {/* Left: Text Content */}
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/50">
              <span className="text-xl">🔬</span>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">
              Extraction Process
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            P.G হরমোন 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 py-2">
              সংগ্রহ
            </span>
          </h2>

          <div className="bg-white/10 backdrop-blur-md border-l-4 border-blue-500 p-6 rounded-r-2xl max-w-lg">
            <p className="text-xl text-slate-200 font-light leading-relaxed">
              ২-৩ বছর বয়সী রুই জাতীয় মাছের মস্তক অঞ্চল ২-৩ সে.মি. গভীর ব্যবচ্ছেদ করে <span className="font-bold text-white">পিটুইটারি গ্রন্থি (Pituitary Gland)</span> সংগ্রহ করা হয়। এটি প্রজনন বা Breeding-এর পূর্বেই করতে হয়।
            </p>
          </div>
        </motion.div>

        {/* Right: Custom Animation UI (Target & Extraction) */}
        <div className="flex-1 flex justify-center items-center relative h-[400px]">
          
          {/* Target Focus Ring */}
          <motion.div 
            variants={targetVariants}
            initial="hidden"
            animate="visible"
            className="absolute w-64 h-64 border-2 border-dashed border-teal-400/50 rounded-full flex items-center justify-center"
          >
            {/* Scanning Laser */}
            <motion.div 
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-teal-300 rounded-full"
            />
            
            {/* Center Focus Point */}
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
          </motion.div>

          {/* Pull-out / Extraction Effect */}
          <motion.div 
            variants={pullOutVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-10 flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center">
              {/* Pituitary Gland Representation */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.6)]"
              />
            </div>
            <div className="bg-teal-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
              Pituitary Gland
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default Slide15;
