import React from 'react';
import { motion } from 'framer-motion';

const Slide10 = ({ direction = 1 }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-white overflow-hidden relative font-sans flex items-center justify-center">

      {/* Ambient glow */}
      <div className="absolute top-[-5%] right-[10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[10%] w-[400px] h-[400px] bg-emerald-600/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 right-10 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        <span className="text-xs font-mono text-slate-500 tracking-[0.3em]">10 / 28</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-12 flex flex-col gap-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <div className="w-1 h-14 rounded-full bg-gradient-to-b from-teal-400 to-emerald-500" />
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 py-2 leading-tight">
            ভূমিকা
          </h1>
        </motion.div>

        {/* Body card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-900/60 backdrop-blur-xl border border-teal-900/40 rounded-3xl p-10 shadow-[0_0_60px_rgba(20,184,166,0.07)]"
        >
          <p className="text-2xl text-slate-200 leading-[1.9] py-1">
            প্রণোদিত প্রজনন হলো এমন একটি পদ্ধতি, যার মাধ্যমে{' '}
            <span className="text-teal-300 font-bold">নিয়ন্ত্রিত পরিবেশে</span> পুরুষ ও স্ত্রী মাছকে কৃত্রিম উপায়ে{' '}
            <span className="text-emerald-300 font-bold">হরমোন দ্বারা উদ্দীপিত করে</span> প্রজনন করানো হয়।
          </p>

          <div className="mt-8 pt-7 border-t border-slate-700/50">
            <p className="text-xl text-slate-300 leading-[1.9] py-1">
              যেহেতু এই প্রক্রিয়াটি সম্পূর্ণ{' '}
              <span className="text-white font-semibold">মানবনিয়ন্ত্রিত</span> ও{' '}
              <span className="text-white font-semibold">কৃত্রিম পরিবেশে</span> সম্পন্ন হয়, তাই একে{' '}
              <span className="text-teal-300 font-bold">কৃত্রিম প্রজনন</span>-ও বলা হয়ে থাকে।
            </p>
          </div>
        </motion.div>

        {/* Key terms row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-3"
        >
          {[
            { label: 'নিয়ন্ত্রিত পরিবেশ', color: 'teal' },
            { label: 'হরমোন উদ্দীপনা', color: 'emerald' },
            { label: 'মানবনিয়ন্ত্রিত', color: 'sky' },
            { label: 'কৃত্রিম প্রজনন', color: 'teal' },
          ].map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                tag.color === 'teal'
                  ? 'bg-teal-500/10 border-teal-500/30 text-teal-300'
                  : tag.color === 'emerald'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-sky-500/10 border-sky-500/30 text-sky-300'
              }`}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Slide10;
