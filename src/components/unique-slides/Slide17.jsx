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
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <div className="w-[1000px] h-[1000px] bg-slate-800/20 rounded-full blur-[100px] mix-blend-screen absolute -top-[20%] -left-[10%]"></div>
        <div className="w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen absolute -bottom-[20%] -right-[10%]"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold tracking-widest uppercase mb-4">
            <Syringe className="w-5 h-5" />
            <span>প্রয়োগ মাত্রা ও পদ্ধতি</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white py-2 leading-normal">
            হরমোন ইনজেকশন প্রয়োগ
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Female Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="relative bg-slate-900/60 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-8 overflow-hidden group shadow-[0_0_40px_rgba(244,63,94,0.1)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors duration-500"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                  <Fish className="w-7 h-7 text-rose-400" />
                </div>
                <h3 className="text-3xl font-bold text-rose-300">স্ত্রী মাছ</h3>
              </div>
              <span className="text-rose-400/80 font-semibold px-4 py-1 rounded-full border border-rose-500/20 bg-rose-500/5">২টি ডোজ</span>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500/50"></div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-rose-400" /> ১ম ডোজ
                  </h4>
                  <span className="text-rose-300 font-bold bg-rose-500/10 px-3 py-1 rounded-lg">কম মাত্রা</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  প্রাথমিক উদ্দীপনা সৃষ্টির জন্য খুব সামান্য পরিমাণ পিজি দ্রবণ প্রয়োগ করা হয়।
                </p>
              </div>

              <div className="flex justify-center -my-2 relative z-20">
                <div className="bg-slate-800 rounded-full p-2 border border-slate-700 shadow-xl flex items-center gap-2 px-4">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300 font-bold tracking-wider">৬ ঘন্টা পর</span>
                </div>
              </div>

              <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-rose-400" /> ২য় ডোজ
                  </h4>
                  <span className="text-rose-300 font-bold bg-rose-500/10 px-3 py-1 rounded-lg">বেশি মাত্রা</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  ডিম ছাড়ার জন্য চূড়ান্ত উদ্দীপনা তৈরি করতে মূল বা বেশি মাত্রার ডোজটি দেওয়া হয়।
                </p>
              </div>
            </div>
          </motion.div>

          {/* Male Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 overflow-hidden group shadow-[0_0_40px_rgba(59,130,246,0.1)] flex flex-col"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <Fish className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-blue-300">পুরুষ মাছ</h3>
              </div>
              <span className="text-blue-400/80 font-semibold px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">১টি ডোজ</span>
            </div>

            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="bg-slate-950/50 rounded-2xl p-8 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-6 h-6 text-blue-400" /> একমাত্র ডোজ
                  </h4>
                  <span className="text-blue-300 font-bold bg-blue-500/10 px-3 py-1 rounded-lg">স্বাভাবিক মাত্রা</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  পুরুষ মাছকে শুধুমাত্র একটি ডোজ দেওয়া হয়।
                </p>
                <div className="mt-auto bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <p className="text-blue-200 text-sm leading-relaxed">
                    স্ত্রী মাছকে যখন দ্বিতীয় ডোজ দেওয়া হয়, ঠিক একই সময়ে পুরুষ মাছকে এই একমাত্র ডোজটি দেওয়া হয়।
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
