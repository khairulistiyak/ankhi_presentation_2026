import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Clock, Activity, Fish } from 'lucide-react';

export default function Slide17({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? 100 : -100, transition: { duration: 0.6 } })
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050b14] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-center h-full py-8">
        
        {/* Photo & Architectural Frame (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 h-[300px] lg:h-full relative rounded-[3rem] overflow-hidden border-2 border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.15)] group"
        >
          {/* Static Photo */}
          <img 
            src="https://pollinations.ai/p/fish-farming-hormone-injection-scientific-close-up?width=800&height=1200&seed=17" 
            alt="Hormone Injection" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* HUD Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-indigo-950/40 to-transparent"></div>
          
          <div className="absolute inset-x-0 bottom-0 p-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/50 text-indigo-200 font-bold tracking-widest uppercase mb-4">
              <Syringe className="w-5 h-5" />
              <span>প্রয়োগ মাত্রা</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white py-2 leading-normal">
              হরমোন ইনজেকশন 
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
          </div>

          {/* Animated Scanning Line */}
          <motion.div 
            animate={{ y: ['0%', '400%', '0%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent border-b border-indigo-400/50 mix-blend-screen pointer-events-none"
          ></motion.div>
        </motion.div>

        {/* Info Cards (Right) */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 h-full justify-center">
          
          {/* Female Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="relative bg-slate-900/60 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-6 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                  <Fish className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-2xl font-bold text-rose-300">স্ত্রী মাছ</h3>
              </div>
              <span className="text-rose-400 font-semibold px-4 py-1 rounded-full border border-rose-500/20 bg-rose-500/5">২টি ডোজ</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              <div className="bg-slate-950/50 rounded-2xl p-4 border border-rose-500/20">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-400" /> ১ম ডোজ
                  </h4>
                  <span className="text-rose-300 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded-lg">কম মাত্রা</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">প্রাথমিক উদ্দীপনা সৃষ্টির জন্য খুব সামান্য পরিমাণ দ্রবণ প্রয়োগ করা হয়।</p>
              </div>

              <div className="bg-slate-950/50 rounded-2xl p-4 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-400" /> ২য় ডোজ
                  </h4>
                  <span className="text-rose-300 text-xs font-bold bg-rose-500/20 px-2 py-1 rounded-lg flex items-center gap-1">
                    <Clock className="w-3 h-3" /> ৬ ঘণ্টা পর
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">ডিম ছাড়ার জন্য চূড়ান্ত উদ্দীপনা তৈরি করতে মূল বা বেশি মাত্রার ডোজটি দেওয়া হয়।</p>
              </div>
            </div>
          </motion.div>

          {/* Male Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <Fish className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300">পুরুষ মাছ</h3>
              </div>
              <span className="text-blue-400 font-semibold px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">১টি ডোজ</span>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-5 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative z-10 flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <h4 className="text-xl font-bold text-white">একমাত্র ডোজ</h4>
                  <span className="ml-auto text-blue-300 text-sm font-bold bg-blue-500/10 px-3 py-1 rounded-lg">স্বাভাবিক মাত্রা</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  স্ত্রী মাছকে যখন দ্বিতীয় ডোজ দেওয়া হয়, ঠিক একই সময়ে পুরুষ মাছকে এই একমাত্র ডোজটি দেওয়া হয়।
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
