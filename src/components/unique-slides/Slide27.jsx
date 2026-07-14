import React from 'react';
import { motion } from 'framer-motion';

const Slide27 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="w-full h-full bg-[#030712] text-white overflow-hidden relative font-sans flex items-center justify-center p-4">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container - Reduced Max Width for smaller cards */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header / Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/20 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-blue-300 font-medium tracking-widest text-[11px] uppercase">
              চূড়ান্ত ধাপ ২৭
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 pb-2 leading-tight">
            ভবিষ্যৎ অনুসন্ধান ও পরিকল্পনা
          </h1>
        </motion.div>

        {/* Compact Cards Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          
          {/* Card 1 - Full Width */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.01 }}
            className="md:col-span-2 bg-[#0a1120]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-xl relative overflow-hidden group flex items-start gap-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#0c162d]/90"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-slate-300 text-[15px] leading-relaxed font-light">
              জাতীয় মৎস্য উৎপাদনে হ্যাচারিগুলোতে কার্প ও চিতল মাছের সফল কৃত্রিম প্রজনন আমাদের দেশীয় মৎস্য সম্পদকে <strong className="text-blue-300 font-medium font-sans">বিলুপ্তির হাত থেকে রক্ষা করতে</strong> বড় ভূমিকা রেখেছে।
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.02 }}
            className="bg-[#0a1120]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c162d]/90 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-[30px] rounded-full group-hover:bg-emerald-500/10 transition-colors" />
            <p className="text-slate-300 text-[15px] leading-[1.8] font-light relative z-10">
              ভবিষ্যতের প্রোটিনের চাহিদা পূরণ এবং জীববৈচিত্র্য রক্ষায় কার্প ও চিতলের পাশাপাশি অন্যান্য বিপন্ন ও সুস্বাদু দেশীয় প্রজাতির মাছের 
              
              <span className="block my-3 px-3 py-2 bg-emerald-900/20 border border-emerald-500/20 rounded-lg text-emerald-300 font-medium text-[14px]">
                যেমন: পাবদা, গুলশা, টেংরা, মাগুর ইত্যাদি
              </span>
              
              প্রণোদিত প্রজনন ও পোনা উৎপাদন আরও ব্যাপকভাবে বৃদ্ধি করা আমাদের <strong className="text-white font-medium">মূল লক্ষ্য</strong> হওয়া উচিত।
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.02 }}
            className="bg-[#0a1120]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-blue-500/30 hover:bg-[#0c162d]/90 flex flex-col justify-center items-center text-center gap-4"
          >
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 blur-[30px] rounded-full group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-400/20 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            
            <p className="text-slate-300 text-[15px] leading-[1.8] font-light relative z-10">
              এর জন্য <span className="text-blue-400 font-medium px-1">জেনেটিক গবেষণার</span> মাধ্যমে আরও উন্নত, দ্রুত বর্ধনশীল এবং রোগবালাই মুক্ত মাছের জাত উদ্ভাবন করা সম্ভব।
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Slide27;
