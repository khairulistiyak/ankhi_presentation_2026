import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  'পুকুর প্রস্তুত ও ট্যাংক ব্যবস্থাপনা',
  'ব্রুড মাছ নির্বাচন',
  'সনাক্তকৃত ও সংগৃহীত মাছের টেকনিক্যাল ট্রিটমেন্ট (পরিচর্যা)',
  'পিটুইটারি গ্রন্থি সংগ্রহ ও নির্যাস তৈরি',
  'প্রজননের উপযুক্ত সময় নির্ধারণ',
  'সংগৃহীত মাছকে ইনজেকশন প্রদান',
  'হরমোন প্রয়োগের সঠিক মাত্রা নির্ধারণ',
  'মাছের প্রাকৃতিক মিলন ও নিষিক্তকরণ',
  'নিষিক্ত ডিমের পরিস্ফুটন (ইনকিউবেশন)',
  'নিষিক্ত ডিম থেকে রেণু পোনা লালন-পালন',
];

const banglaNum = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০'];

const Slide12 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#07152a] to-[#050A15]" />
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-12 py-8 flex flex-col justify-between">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center border-b border-blue-900/40 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 py-2 mt-4 mb-4 leading-normal"
        >
          মাছের প্রণোদিত প্রজননের ধাপগুলো
        </motion.h1>

        {/* Steps grid — 2 columns */}
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4 items-start mt-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/60 rounded-2xl px-5 py-4 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] cursor-default"
            >
              {/* Step number badge */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 group-hover:border-blue-400/60 transition-colors">
                <span className="text-blue-300 font-black text-xl leading-none pt-1">{banglaNum[i]}</span>
              </div>
              {/* Step text */}
              <span className="text-xl text-slate-200 font-medium leading-snug py-0.5">{step}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-end mt-4"
        >
          <span className="text-sm text-slate-500 border border-slate-700/40 px-4 py-1.5 rounded-full">
            মোট ধাপ: ১০টি
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide12;
