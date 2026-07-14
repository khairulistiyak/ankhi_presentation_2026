import React from 'react';
import { motion } from 'framer-motion';

const Slide23 = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-br from-[#020813] via-[#051329] to-[#011414] relative overflow-hidden">
      
      {/* Immersive Deep Water Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Animated Light Rays */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[20%] w-[30%] h-[150%] bg-gradient-to-b from-teal-200/5 to-transparent transform -skew-x-[25deg] origin-top"
        />
      </div>

      <div className="w-full max-w-7xl h-full flex flex-col relative z-10">
        
        {/* Header Section (Compacted) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-end mb-4 border-b border-white/10 pb-4"
        >
          <div>
            <div className="px-4 py-1 inline-block rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-md">
              বৈজ্ঞানিক নাম: Labeo rohita
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wide flex items-center gap-3">
              মৎস্য পরিচিতি 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 leading-normal py-3">
                (রুই)
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Main Content Layout: Left Cards (Stacked), Right Image */}
        <div className="w-full flex-grow flex flex-col lg:flex-row gap-4 lg:gap-8 relative overflow-hidden pb-2">
          
          {/* Left Column: Data Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full lg:w-5/12 flex flex-col gap-4 h-full justify-center z-20"
          >
            {/* Card 1: Habitat */}
            <motion.div 
              variants={cardVariants}
              className="p-5 md:p-6 rounded-2xl bg-slate-900/60 dark:bg-[#071321]/80 backdrop-blur-2xl border border-cyan-500/20 shadow-lg relative overflow-hidden group flex-shrink-0"
            >
              {/* Decorative Blur inside card */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-[30px] group-hover:bg-cyan-500/30 transition-colors" />
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center border border-cyan-500/40 shadow-inner">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-cyan-400">বাসস্থান</h2>
              </div>
              
              <div className="text-slate-300 text-sm md:text-[15px] leading-relaxed relative z-10">
                রুই মাছ মূলত নদীর অববাহিকায় বা প্রবহমান স্বাদু পানিতে বাস করে। তবে চাষের উদ্দেশ্যে এদের <strong className="text-white">পুকুর, দীঘি বা যেকোনো আবদ্ধ জলাশয়ে</strong> সহজেই পালন করা যায়। 
                <div className="mt-3 px-3 py-2 bg-cyan-950/40 rounded-lg border border-cyan-500/10 text-cyan-100 flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span>প্রজননের জন্য এরা প্রধানত <strong className="text-cyan-300">প্লাবিত নদী</strong> বেছে নেয়।</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Physical Characteristics */}
            <motion.div 
              variants={cardVariants}
              className="p-5 md:p-6 rounded-2xl bg-slate-900/60 dark:bg-[#071321]/80 backdrop-blur-2xl border border-emerald-500/20 shadow-lg relative overflow-hidden group flex-shrink-0"
            >
              {/* Decorative Blur inside card */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-[30px] group-hover:bg-emerald-500/30 transition-colors" />
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center border border-emerald-500/40 shadow-inner">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-emerald-400">বাহ্যিক বৈশিষ্ট্য</h2>
              </div>
              
              <div className="text-slate-300 text-sm md:text-[15px] leading-relaxed relative z-10">
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>এদের দেহ লম্বাটে এবং দুই পাশ কিছুটা চ্যাপ্টা।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span><strong className="text-white">পিঠের দিকটা সামান্য উত্তল</strong> এবং পেটের দিকটা সোজা থাকে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>মুখ তুলনামূলক ছোট এবং কিছুটা নিচের দিকে বাঁকানো থাকে, ঠোঁট দুটো ফ্ল্যাঞ্জযুক্ত।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>পুরো শরীর সমকেন্দ্রিক ও মসৃণ <strong className="text-emerald-300">সাইক্লয়েড আঁইশ</strong> দ্বারা ঢাকা থাকে।</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image Frame */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="w-full lg:w-7/12 h-full flex flex-col justify-center items-center z-10 min-h-[250px]"
          >
            <div className="relative w-full h-full max-h-[400px] lg:max-h-[500px] rounded-3xl p-1.5 bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-2xl overflow-visible flex flex-col">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-3 border border-teal-500/20 rounded-[32px] pointer-events-none" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex-grow">
                {/* Note: The image itself is static per rules */}
                <img 
                  src="/photo/rui-fish.jpeg" 
                  alt="রুই মাছ (Labeo rohita)" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-in-out"
                />
                
                {/* Dark gradient overlay at the bottom of the image for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                    <span className="text-white text-sm md:text-base font-medium tracking-widest uppercase opacity-90">Labeo rohita</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide23;
