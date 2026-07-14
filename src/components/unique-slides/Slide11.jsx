import React from 'react';
import { motion } from 'framer-motion';

const leftItems = [
  'ব্যবহারিক বই',
  'ডিসেকটিং বক্স',
  'পলিথিন ব্যাগ',
  'হ্যান্ড গ্লাভস',
  'নেট (জাল)',
  'পাখির পালক',
];

const rightItems = [
  'নোট বুক',
  'কলম',
  'পেন্সিল',
  'ফোরসেপ',
  'তুলা',
];

const Slide11 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#071525] to-[#050A15]" />
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-12 py-10 flex flex-col justify-between">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center border-b border-violet-900/40 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-400 mt-6 mb-4 leading-normal py-3"
        >
          উপকরণ
        </motion.h1>

        {/* Two-column list */}
        <div className="flex-1 grid grid-cols-2 gap-8 items-start mt-2">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-900/60 backdrop-blur-xl border border-violet-900/40 rounded-3xl p-8 h-full shadow-[0_0_40px_rgba(139,92,246,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400 font-bold text-sm">ক</div>
              <h3 className="text-lg font-bold text-violet-300 tracking-wide">প্রথম কলাম (বাম পাশ)</h3>
            </div>
            <ul className="space-y-4">
              {leftItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-sm font-bold flex-shrink-0 group-hover:bg-violet-500/30 transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-xl text-slate-200 font-medium py-1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900/60 backdrop-blur-xl border border-indigo-900/40 rounded-3xl p-8 h-full shadow-[0_0_40px_rgba(99,102,241,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold text-sm">খ</div>
              <h3 className="text-lg font-bold text-indigo-300 tracking-wide">দ্বিতীয় কলাম (ডান পাশ)</h3>
            </div>
            <ul className="space-y-4">
              {rightItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold flex-shrink-0 group-hover:bg-indigo-500/30 transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-xl text-slate-200 font-medium py-1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom: total count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-end mt-4"
        >
          <span className="text-sm text-slate-500 border border-slate-700/50 px-4 py-1.5 rounded-full">
            মোট উপকরণ: {leftItems.length + rightItems.length}টি
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide11;
