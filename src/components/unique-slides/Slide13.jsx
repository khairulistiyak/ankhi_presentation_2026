import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#061814] to-[#050A15]" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-12 py-12 flex flex-col justify-center">

        {/* Top bar info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest border border-emerald-500/30">
              ধাপ ১
            </span>
          </div>
          <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full font-mono">13 / 28</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400 mb-8 py-2 leading-normal"
        >
          পুকুর প্রস্তুত ও ট্যাংক ব্যবস্থাপনা
        </motion.h1>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-900/60 backdrop-blur-xl border border-emerald-900/40 rounded-3xl p-10 relative shadow-[0_0_50px_rgba(16,185,129,0.06)]"
        >
          {/* Subtle accent line inside card */}
          <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-emerald-400 to-green-500 rounded-r-full" />

          <p className="text-2xl text-slate-200 leading-[2] py-2 pl-4">
            মাছ চাষ এবং প্রজননের জন্য পুকুর বা ট্যাংক সঠিকভাবে প্রস্তুত করা অত্যন্ত জরুরি। 
            এর মধ্যে রয়েছে <span className="text-emerald-300 font-bold">পুকুরের তলদেশের মাটি চাষ করা</span>, 
            <span className="text-green-300 font-bold"> পানি পরিষ্কার ও শোধন করা</span> এবং ট্যাংকে 
            <span className="text-white font-bold"> পর্যাপ্ত অক্সিজেন সরবরাহ</span> নিশ্চিত করা।
          </p>

          <div className="mt-8 pt-6 border-t border-slate-700/50 pl-4">
            <p className="text-xl text-slate-300 leading-[2] py-2">
              পানির সঠিক গুণাগুণ (জলমান) ও নিয়মিত পরিচর্যার মাধ্যমেই কেবল 
              মাছের <span className="text-emerald-300 font-bold">সুস্থ বৃদ্ধি</span> ও 
              <span className="text-green-300 font-bold"> সর্বোচ্চ উৎপাদন</span> নিশ্চিত করা সম্ভব।
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide13;
