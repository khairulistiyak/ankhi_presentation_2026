import React from 'react';
import { motion } from 'framer-motion';

const Slide19 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-[#f8fafc] dark:bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />

      {/* Main Glass Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl h-[85%] backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10"
      >
        
        {/* Left Side: Content */}
        <div className="w-full md:w-5/12 p-10 lg:p-12 flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-sm font-bold mb-6 tracking-wide shadow-sm">
              ডোজ ও মাত্রা নির্ধারণ
            </div>
            
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              হরমোন প্রয়োগের <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 py-2 leading-relaxed block">
                সঠিক মাত্রা নির্ধারণ
              </span>
            </h1>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden shadow-sm"
              >
                <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed relative z-10 font-medium">
                  হরমোন প্রয়োগের মাত্রা মাছের প্রজাতি, ওজন ও পরিপক্বতার ওপর ভিত্তি করে ভিন্ন ভিন্ন হয়ে থাকে। কার্প জাতীয় মাছের ক্ষেত্রে <strong className="text-pink-600 dark:text-pink-400">স্ত্রী মাছকে সাধারণত ২টি ডোজে</strong> এবং <strong className="text-blue-600 dark:text-blue-400">পুরুষ মাছকে ১টি ডোজে</strong> ইনজেকশন দেওয়া হয়। স্ত্রী মাছের ক্ষেত্রে প্রথম ডোজ দেওয়ার ঠিক <strong className="text-indigo-600 dark:text-indigo-400">৬ ঘণ্টা পর</strong> দ্বিতীয় ডোজ দেওয়া হয় এবং একই সময়ে পুরুষ মাছকে তার একমাত্র ডোজটি দেওয়া হয়।
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visuals (Meaningful Clean Infographic SVG) */}
        <div className="w-full md:w-7/12 relative min-h-[400px] md:min-h-full flex items-center justify-center p-8 bg-slate-50/50 dark:bg-slate-950/50 border-l border-slate-200 dark:border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-full relative rounded-3xl overflow-hidden flex items-center justify-center"
          >
            {/* SVG with Tailwind Classes for perfect Light/Dark mode contrast */}
            <svg width="100%" height="100%" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              
              <defs>
                <filter id="shadowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.1"/>
                </filter>
              </defs>

              {/* Title inside SVG */}
              <text x="300" y="50" fontSize="22" fontWeight="bold" className="fill-indigo-600 dark:fill-indigo-400" textAnchor="middle" letterSpacing="1">
                ইনজেকশন টাইমলাইন প্রোটোকল
              </text>

              {/* --- FEMALE TIMELINE (Top Half) --- */}
              <g transform="translate(40, 120)">
                {/* Background Box for Female */}
                <rect x="0" y="0" width="520" height="130" rx="16" className="fill-white dark:fill-slate-800 stroke-pink-400 dark:stroke-pink-500" strokeWidth="2" filter="url(#shadowGlow)" />
                
                {/* Female Icon/Badge */}
                <g transform="translate(20, 25)">
                  <circle cx="30" cy="30" r="25" className="fill-pink-50 dark:fill-pink-900/50 stroke-pink-200 dark:stroke-pink-700" strokeWidth="2" />
                  <text x="30" y="36" fontSize="24" className="fill-pink-600 dark:fill-pink-400" textAnchor="middle" fontWeight="bold">♀</text>
                  <text x="30" y="75" fontSize="14" className="fill-pink-700 dark:fill-pink-300" textAnchor="middle" fontWeight="bold">স্ত্রী মাছ</text>
                </g>

                {/* Timeline Line */}
                <line x1="100" y1="55" x2="480" y2="55" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Dose 1 Node */}
                <g transform="translate(130, 55)">
                  <circle cx="0" cy="0" r="15" className="fill-white dark:fill-slate-900 stroke-pink-500" strokeWidth="3" filter="url(#shadowGlow)" />
                  {/* Dose 1 Icon (Syringe) */}
                  <path d="M -5 5 L 5 -5 M -3 7 L 7 -3 M -8 8 L -5 5" className="stroke-pink-500" strokeWidth="2" strokeLinecap="round" />
                  <text x="0" y="35" fontSize="16" className="fill-pink-700 dark:fill-pink-300" textAnchor="middle" fontWeight="bold">১ম ডোজ</text>
                  <text x="0" y="55" fontSize="14" className="fill-slate-600 dark:fill-slate-300" textAnchor="middle" fontWeight="bold">০ ঘণ্টা</text>
                </g>

                {/* Time Gap Indicator (6 Hours) */}
                <g transform="translate(285, 55)">
                  <rect x="-45" y="-14" width="90" height="28" rx="14" className="fill-slate-100 dark:fill-slate-700 stroke-slate-200 dark:stroke-slate-600" strokeWidth="1" />
                  <text x="0" y="5" fontSize="14" className="fill-indigo-600 dark:fill-indigo-400" textAnchor="middle" fontWeight="bold">৬ ঘণ্টা পর</text>
                  {/* Pulsing clock icon */}
                  <circle cx="0" cy="-30" r="12" fill="none" className="stroke-indigo-500" strokeWidth="2">
                    <animate attributeName="r" values="10; 14; 10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1; 0.5; 1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="-30" r="10" className="fill-white dark:fill-slate-900 stroke-indigo-500" strokeWidth="2" />
                  <path d="M 0 -34 L 0 -30 L 3 -27" fill="none" className="stroke-indigo-500" strokeWidth="2" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" values="0 0 -30; 360 0 -30" dur="6s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Animated Flow Dot connecting Dose 1 and 2 */}
                <circle cx="0" cy="55" r="5" className="fill-pink-500">
                  <animate attributeName="cx" values="145; 425" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1; 0" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Dose 2 Node */}
                <g transform="translate(440, 55)">
                  <circle cx="0" cy="0" r="18" className="fill-white dark:fill-slate-900 stroke-pink-500" strokeWidth="4" filter="url(#shadowGlow)" />
                  {/* Dose 2 Icon */}
                  <path d="M -6 6 L 6 -6 M -4 8 L 8 -4" className="stroke-pink-500" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="8" cy="-8" r="2" className="fill-pink-500" />
                  <circle cx="12" cy="-4" r="2" className="fill-pink-500" />
                  
                  <text x="0" y="35" fontSize="16" className="fill-pink-700 dark:fill-pink-300" textAnchor="middle" fontWeight="bold">২য় ডোজ</text>
                  <text x="0" y="55" fontSize="14" className="fill-slate-600 dark:fill-slate-300" textAnchor="middle" fontWeight="bold">৬ ঘণ্টা</text>
                </g>
              </g>


              {/* --- MALE TIMELINE (Bottom Half) --- */}
              <g transform="translate(40, 300)">
                {/* Background Box for Male */}
                <rect x="0" y="0" width="520" height="130" rx="16" className="fill-white dark:fill-slate-800 stroke-blue-400 dark:stroke-blue-500" strokeWidth="2" filter="url(#shadowGlow)" />
                
                {/* Male Icon/Badge */}
                <g transform="translate(20, 25)">
                  <circle cx="30" cy="30" r="25" className="fill-blue-50 dark:fill-blue-900/50 stroke-blue-200 dark:stroke-blue-700" strokeWidth="2" />
                  <text x="30" y="36" fontSize="24" className="fill-pink-600 dark:fill-pink-400" textAnchor="middle" fontWeight="bold">♂</text>
                  <text x="30" y="75" fontSize="14" className="fill-rose-700 dark:fill-rose-400" textAnchor="middle" fontWeight="bold">পুরুষ মাছ</text>
                </g>

                {/* Timeline Line */}
                <line x1="100" y1="55" x2="480" y2="55" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Wait period indicator */}
                <g transform="translate(130, 55)">
                  <circle cx="0" cy="0" r="10" className="fill-slate-100 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
                  <text x="0" y="30" fontSize="14" className="fill-rose-600 dark:fill-rose-400" textAnchor="middle" fontWeight="bold">ডোজ নেই</text>
                </g>

                {/* Waiting flow */}
                <rect x="150" y="52" width="270" height="6" rx="3" className="fill-slate-200 dark:fill-slate-700" />
                <rect x="150" y="52" width="270" height="6" rx="3" className="fill-blue-400 dark:fill-blue-500" opacity="0.6">
                  <animate attributeName="width" values="0; 270" dur="4s" repeatCount="indefinite" />
                </rect>
                
                <text x="285" y="45" fontSize="14" className="fill-pink-600 dark:fill-pink-400" textAnchor="middle" fontStyle="italic" fontWeight="bold">৬ ঘণ্টা অপেক্ষা...</text>

                {/* Single Dose Node (Aligns vertically with Female Dose 2) */}
                <g transform="translate(440, 55)">
                  {/* Vertical sync line connecting Male and Female final dose */}
                  <line x1="0" y1="-70" x2="0" y2="-20" className="stroke-indigo-400 dark:stroke-indigo-500" strokeWidth="2" strokeDasharray="3 3">
                    <animate attributeName="stroke-dashoffset" values="10; 0" dur="1s" repeatCount="indefinite" />
                  </line>

                  <circle cx="0" cy="0" r="18" className="fill-white dark:fill-slate-900 stroke-blue-500" strokeWidth="4" filter="url(#shadowGlow)" />
                  <path d="M -5 5 L 5 -5 M -3 7 L 7 -3 M -8 8 L -5 5" className="stroke-blue-500" strokeWidth="2" strokeLinecap="round" />
                  
                  <text x="0" y="35" fontSize="16" className="fill-rose-700 dark:fill-rose-400" textAnchor="middle" fontWeight="bold">একমাত্র ডোজ</text>
                  <text x="0" y="55" fontSize="14" className="fill-pink-600 dark:fill-pink-400" textAnchor="middle" fontWeight="bold">৬ ঘণ্টা</text>
                </g>
              </g>

            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide19;
