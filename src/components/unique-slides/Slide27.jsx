import React from 'react';
import { motion } from 'framer-motion';

const Slide27 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Modern subtle float animation
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="w-full h-full bg-[#020610] text-white overflow-hidden relative font-sans flex items-center justify-center p-4 lg:p-10">
      
      {/* Background Animated Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/20 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-6 lg:mb-8"
        >
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
            <span className="text-blue-300 font-bold tracking-widest text-xs uppercase">
              চূড়ান্ত ধাপ ২৭
            </span>
          </div>
          <span className="text-xs text-slate-400 border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 rounded-full font-mono">27 / 28</span>
        </motion.div>

        {/* Main Bento Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 min-h-0"
        >
          
          {/* Left Column: Title + Card 1 */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6 h-full justify-between">
            
            {/* Title Section */}
            <motion.div variants={itemVariants} className="pt-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 pb-3 leading-[1.2]">
                ভবিষ্যৎ অনুসন্ধান <br />ও পরিকল্পনা
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mt-2" />
            </motion.div>

            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              animate={floatingAnimation}
              className="flex-1 bg-gradient-to-br from-[#0c162d]/90 to-[#050b16]/90 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group flex items-center"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Animated Inner Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10" />
              
              <div className="relative z-10 flex gap-4 items-start">
                <div className="w-1 bg-blue-500 rounded-full h-full absolute left-0 top-0 bottom-0 shadow-[0_0_10px_#3b82f6]" />
                <p className="text-slate-300 text-[17px] md:text-lg leading-[1.9] font-light pl-4">
                  জাতীয় মৎস্য উৎপাদনে হ্যাচারিগুলোতে কার্প ও চিতল মাছের সফল কৃত্রিম প্রজনন আমাদের দেশীয় মৎস্য সম্পদকে <strong className="text-blue-300 font-medium">বিলুপ্তির হাত থেকে রক্ষা করতে</strong> বড় ভূমিকা রেখেছে।
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Card 2 & Card 3 */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 h-full justify-between">
            
            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
              className="flex-[1.2] bg-gradient-to-br from-[#0a1526]/90 to-[#040914]/90 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full" />
              <p className="text-slate-200 text-lg md:text-[19px] leading-[1.8] font-light relative z-10">
                ভবিষ্যতের প্রোটিনের চাহিদা পূরণ এবং জীববৈচিত্র্য রক্ষায় কার্প ও চিতলের পাশাপাশি অন্যান্য বিপন্ন ও সুস্বাদু দেশীয় প্রজাতির মাছের 
                
                <span className="flex items-center gap-3 my-4 px-5 py-3 bg-emerald-900/20 border border-emerald-500/20 rounded-2xl">
                  <svg className="w-6 h-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-300 font-medium">যেমন: পাবদা, গুলশা, টেংরা, মাগুর ইত্যাদি</span>
                </span>
                
                প্রণোদিত প্রজনন ও পোনা উৎপাদন আরও ব্যাপকভাবে বৃদ্ধি করা আমাদের <strong className="text-white font-medium">মূল লক্ষ্য</strong> হওয়া উচিত।
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              className="flex-1 bg-gradient-to-br from-[#0c162d]/90 to-[#050b16]/90 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group flex items-center gap-6"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/40 flex items-center justify-center border border-blue-400/30 flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <p className="text-slate-300 text-[17px] md:text-lg leading-[1.8] font-light relative z-10">
                এর জন্য <span className="text-blue-400 font-medium px-1 bg-blue-900/20 rounded-md">জেনেটিক গবেষণার</span> মাধ্যমে আরও উন্নত, দ্রুত বর্ধনশীল এবং রোগবালাই মুক্ত মাছের জাত উদ্ভাবন করা সম্ভব।
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide27;
