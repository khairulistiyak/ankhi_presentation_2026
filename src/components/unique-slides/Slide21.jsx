import React from 'react';
import { motion } from 'framer-motion';

const Slide21 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 lg:p-12 bg-[#fafafa] dark:bg-[#070b14] relative overflow-hidden">

      {/* Background Soft Waves/Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[50%] h-[70%] bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[70%] bg-teal-400/10 dark:bg-teal-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-8 relative z-10">

        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 dark:text-white mb-8 leading-tight">
              নিষিক্ত ডিমের <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 inline-block leading-normal py-3">
                পরিস্ফুটন
              </span>
            </h1>

            <div className="p-8 rounded-[32px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-xl">
              <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-6">
                নিষিক্ত ডিমগুলো সংগ্রহ করে হ্যাচারির হ্যাচিং জার বা ফানেল জালে স্থানান্তর করা হয়, যেখানে সার্বক্ষণিক পানির ঘূর্ণন প্রবাহ থাকে। ডিম ছাড়ার প্রায় <strong className="text-blue-600 dark:text-blue-400">২০-২৪ ঘণ্টার মধ্যে</strong> ডিম ফুটে রেণু পোনা বের হয়ে আসে।
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-6">
                ডিম ফোটার এই প্রক্রিয়াকে <strong className="text-teal-600 dark:text-teal-400">'ভ্রূণ বিকাশ'</strong> এবং এরপরের পর্যায়কে <strong className="text-teal-600 dark:text-teal-400">'লার্ভা বিকাশ'</strong> বলা হয়। প্রাথমিক অবস্থায় লার্ভার শরীরের বিভিন্ন অঙ্গ-প্রত্যঙ্গ ধাপে ধাপে তৈরি হতে থাকে।
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                এই সময়ে এদের মুখ তৈরি না হওয়ায় বাইরে থেকে কোনো খাবারের প্রয়োজন হয় না; এরা নিজেদের শরীরের সাথে থাকা <strong className="text-amber-500 dark:text-amber-400">কুসুম থলি</strong> থেকেই প্রয়োজনীয় পুষ্টি গ্রহণ করে। ডিম ফোটার প্রায় <strong className="text-blue-600 dark:text-blue-400">২৪-২৫ ঘণ্টা পর</strong> লার্ভার চোখ, মুখ ও লেজের উপাঙ্গগুলো সম্পূর্ণভাবে গঠিত হয়।
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Unique Vertical SVG Timeline */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-full max-h-[800px] relative rounded-[40px] bg-white/40 dark:bg-[#0b1325]/40 backdrop-blur-3xl border border-white/40 dark:border-white/5 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            {/* Beautiful Clean Modern SVG */}
            <svg width="100%" height="100%" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main Vertical Flow Line */}
              <path d="M 200 80 C 200 200, 150 250, 150 350 C 150 450, 250 500, 250 600" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />

              {/* Floating Swirl Animation on line */}
              <circle cx="200" cy="80" r="4" className="fill-blue-500" filter="url(#glow)">
                <animateMotion
                  path="M 200 80 C 200 200, 150 250, 150 350 C 150 450, 250 500, 250 600"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Node 1: Hatching Jar (Top) */}
              <g transform="translate(200, 80)">
                <circle cx="0" cy="0" r="40" className="fill-white dark:fill-slate-800 stroke-blue-400" strokeWidth="2" filter="url(#glow)" />
                {/* Water swirl icon */}
                <path d="M -15 0 C -5 10, 5 -10, 15 0 M -10 10 C 0 20, 10 0, 20 10" fill="none" className="stroke-blue-500" strokeWidth="2" strokeLinecap="round" />
                <circle cx="0" cy="-10" r="6" className="fill-blue-300" />
                <text x="60" y="5" fontSize="14" className="fill-slate-800 dark:fill-white font-bold">হ্যাচিং জার</text>
                <text x="60" y="25" fontSize="12" className="fill-slate-500 dark:fill-slate-400">পানির ঘূর্ণন</text>
              </g>

              {/* Node 2: 20-24 Hours Embryo to Larva */}
              <g transform="translate(150, 350)">
                <circle cx="0" cy="0" r="45" className="fill-white dark:fill-slate-800 stroke-teal-400" strokeWidth="2" filter="url(#glow)" />
                {/* Hatching Egg Icon */}
                <path d="M -15 5 C -20 -15, 20 -15, 15 5" fill="none" className="stroke-teal-500" strokeWidth="2" strokeDasharray="3 2" />
                <path d="M -20 5 L -10 15 L 0 5 L 10 15 L 20 5" fill="none" className="stroke-teal-400" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="0" cy="0" r="4" className="fill-teal-500" />
                <text x="-65" y="5" fontSize="14" className="fill-slate-800 dark:fill-white font-bold" textAnchor="end">২০-২৪ ঘণ্টা</text>
                <text x="-65" y="25" fontSize="12" className="fill-slate-500 dark:fill-slate-400" textAnchor="end">ভ্রূণ উন্নয়ন</text>
              </g>

              {/* Node 3: 24-25 Hours Formed Larva with Yolk */}
              <g transform="translate(250, 600)">
                <circle cx="0" cy="0" r="50" className="fill-white dark:fill-slate-800 stroke-amber-400" strokeWidth="2" filter="url(#glow)" />
                {/* Larva with Yolk Sac Icon */}
                <path d="M -20 0 Q 0 -15, 20 -5" fill="none" className="stroke-slate-400 dark:stroke-slate-300" strokeWidth="2" strokeLinecap="round" />
                {/* Yolk Sac */}
                <circle cx="0" cy="5" r="12" className="fill-amber-400" opacity="0.8" />
                {/* Eye */}
                <circle cx="-12" cy="-5" r="2" className="fill-slate-700 dark:fill-white" />

                <text x="70" y="0" fontSize="14" className="fill-slate-800 dark:fill-white font-bold">২৪-২৫ ঘণ্টা</text>
                <text x="70" y="20" fontSize="12" className="fill-slate-500 dark:fill-slate-400">উপাঙ্গ গঠন সম্পূর্ণ</text>
                <text x="70" y="40" fontSize="12" className="fill-amber-500 font-bold">কুসুম থলি</text>
              </g>

            </svg>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Slide21;
