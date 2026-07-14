import React from 'react';
import { motion } from 'framer-motion';

const Slide20 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 lg:p-12 bg-[#0a0f18] relative overflow-hidden">
      
      {/* Background Static Abstract Light Leaks */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl h-full flex flex-col relative z-10 gap-8 justify-center items-center">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center text-center mb-8"
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            মাছের <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-normal py-3">প্রাকৃতিক মিলন</span> ও নিষিক্তকরণ
          </h1>
        </motion.div>

        {/* Content Section - Static & Ultra Modern */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 z-20">
          
          {/* Card 1: Natural Mating */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative p-8 md:p-10 rounded-[32px] bg-slate-900/50 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col justify-center overflow-hidden"
          >
            {/* Top Left Decoration */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-tl-[32px]" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                  <span className="text-cyan-400 text-2xl font-black">১</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">স্বতঃস্ফূর্ত মিলন</h3>
              </div>
              
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                হরমোন ইনজেকশন দেওয়ার পর পুরুষ ও স্ত্রী মাছকে একসাথে প্রজনন ট্যাংকে ছেড়ে দেওয়া হয়। সাধারণত <span className="font-semibold text-cyan-400">৬ ঘণ্টার মধ্যে</span> এরা উদ্দীপিত হয়ে স্বতঃস্ফূর্তভাবে মিলনে লিপ্ত হয় এবং ট্যাংকের পানিতে ডিম ও শুক্রাণু ত্যাগ করে, যার ফলে প্রাকৃতিকভাবেই ডিম নিষিক্ত হয়।
              </p>
            </div>
          </motion.div>

          {/* Card 2: Artificial Stripping */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative p-8 md:p-10 rounded-[32px] bg-slate-900/50 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col justify-center overflow-hidden"
          >
            {/* Top Right Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-[32px]" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-950 flex items-center justify-center border border-blue-500/30">
                  <span className="text-blue-400 text-2xl font-black">২</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">কৃত্রিম নিষিক্তকরণ</h3>
              </div>
              
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                তবে বিশেষ প্রয়োজনে মাছের পেটে হালকা চাপ দিয়ে <span className="font-semibold text-blue-400">(স্ট্রিপিং পদ্ধতি)</span> কৃত্রিম উপায়েও প্লাস্টিকের পাত্রে ডিম্বাণু ও শুক্রাণু সংগ্রহ করে নিষিক্তকরণ করা সম্ভব।
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide20;
