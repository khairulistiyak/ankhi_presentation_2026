import React from 'react';
import { motion } from 'framer-motion';

const Slide23 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 lg:p-12 bg-slate-900 dark:bg-[#020813] relative overflow-hidden">
      
      {/* Immersive Deep Water Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Animated Light Rays (Sunlight penetrating water) */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[20%] h-[150%] bg-gradient-to-b from-white/10 to-transparent transform -skew-x-[30deg] origin-top pointer-events-none"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.2, 0.05], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-0 right-1/2 w-[10%] h-[150%] bg-gradient-to-b from-teal-200/5 to-transparent transform -skew-x-[25deg] origin-top pointer-events-none"
        />
      </div>

      <div className="w-full max-w-7xl h-full flex flex-col relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mb-8 lg:mb-12"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-wide mb-3 flex items-center gap-4">
              মৎস্য পরিচিতি 
              <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-emerald-400">
                (রুই)
              </span>
            </h1>
            <div className="px-5 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-lg font-mono tracking-widest uppercase">
              বৈজ্ঞানিক নাম: Labeo rohita
            </div>
          </div>
        </motion.div>

        {/* Main Content Layout: Left Text, Center Fish, Right Text */}
        <div className="w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          
          {/* Central Meaningful Image: Rui Fish Photo */}
          <div className="w-full lg:w-1/2 flex items-center justify-center z-10 relative">
            <div className="w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5 relative">
              {/* Note: User must be completely static image, no motion on the image itself */}
              <img 
                src="/photo/rui-fish.jpeg" 
                alt="রুই মাছ (Labeo rohita)" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex items-end justify-center pb-4">
                <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Labeo rohita</span>
              </div>
            </div>
          </div>

          {/* Data Cards Layer (Z-20) */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 z-20 pointer-events-auto h-full">
            
            {/* Card 1: Habitat */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-[45%] h-full min-h-[250px] p-8 rounded-3xl bg-slate-900/60 dark:bg-black/40 backdrop-blur-2xl border border-teal-500/20 shadow-[0_8px_32px_rgba(20,184,166,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-900/50 flex items-center justify-center border border-teal-500/40">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-teal-400">বাসস্থান</h2>
              </div>
              
              <div className="text-slate-300 text-lg leading-relaxed space-y-4 font-light relative z-10">
                <p>
                  রুই মাছ মূলত নদীর অববাহিকায় বা প্রবহমান স্বাদু পানিতে বাস করে। তবে চাষের উদ্দেশ্যে এদের <strong className="text-white font-semibold">পুকুর, দীঘি বা যেকোনো আবদ্ধ জলাশয়ে</strong> সহজেই পালন করা যায়।
                </p>
                <p className="px-4 py-3 bg-teal-900/20 rounded-xl border border-teal-500/10">
                  প্রজননের জন্য এরা প্রধানত <strong className="text-teal-300">প্লাবিত নদী</strong> বেছে নেয়।
                </p>
              </div>
            </motion.div>

            {/* Card 2: Physical Characteristics */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full lg:w-[45%] h-full min-h-[250px] p-8 rounded-3xl bg-slate-900/60 dark:bg-black/40 backdrop-blur-2xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(16,185,129,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-br-full" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 flex items-center justify-center border border-emerald-500/40">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-emerald-400">বাহ্যিক বৈশিষ্ট্য</h2>
              </div>
              
              <div className="text-slate-300 text-[17px] leading-relaxed space-y-3 font-light relative z-10">
                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>এদের দেহ লম্বাটে এবং দুই পাশ কিছুটা চ্যাপ্টা।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span><strong className="text-white font-normal">পিঠের দিকটা সামান্য উত্তল</strong> এবং পেটের দিকটা সোজা থাকে।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>মুখ তুলনামূলক ছোট এবং কিছুটা নিচের দিকে বাঁকানো থাকে, ঠোঁট দুটো ফ্ল্যাঞ্জযুক্ত।</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✦</span>
                    <span>পুরো শরীর সমকেন্দ্রিক ও মসৃণ <strong className="text-emerald-300">সাইক্লয়েড আঁইশ</strong> দ্বারা ঢাকা থাকে।</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide23;
