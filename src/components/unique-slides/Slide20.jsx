import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Sprout, Sun, ArrowRight } from 'lucide-react';

export default function Slide20({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.9, x: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 70, damping: 20 } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, x: dir < 0 ? 100 : -100, transition: { duration: 0.6 } })
  };

  const bentoItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050B14] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col h-full py-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 shrink-0"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold tracking-widest uppercase mb-4 text-sm">
             <Fish className="w-4 h-4" />
             <span>চূড়ান্ত পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-teal-300 py-2 leading-normal drop-shadow-md">
            রেণু পোনা সংগ্রহ ও নার্সারি
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-0"
        >
          {/* Main Photo Architecture Card (Spans 8 cols) */}
          <motion.div 
            variants={bentoItemVariants}
            className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden border border-emerald-500/20 shadow-[0_10px_40px_rgba(16,185,129,0.15)] group bg-slate-900"
          >
            <img 
              src="https://pollinations.ai/p/fish-nursery-pond-green-water-farming-cyberpunk-style?width=1000&height=800&seed=20" 
              alt="Nursery Pond" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mb-6 border border-emerald-500/40 relative z-10">
                <Sprout className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 relative z-10 leading-normal">
                রেণু পোনা (Larvae) সংগ্রহ
              </h3>
              <p className="text-emerald-100/80 text-lg leading-relaxed relative z-10 max-w-2xl drop-shadow-md">
                ডিম ফোটার পর পোনাগুলো ৩-৪ দিন পর্যন্ত কুসুম থলি থেকে খাদ্য গ্রহণ করে। কুসুম থলি শেষ হওয়ার পর রেণু পোনাগুলো সংগ্রহ করা হয়।
              </p>
            </div>
          </motion.div>

          {/* Time/Care Card (Spans 4 cols) */}
          <motion.div 
            variants={bentoItemVariants}
            className="md:col-span-4 bg-slate-900/60 backdrop-blur-xl border border-teal-500/20 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl group hover:border-teal-500/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-24 h-24 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 relative z-10">
              <Sun className="w-12 h-12 text-teal-400 group-hover:animate-spin-slow" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border border-teal-400 rounded-full"
              ></motion.div>
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3 leading-snug relative z-10">
              প্রাথমিক যত্ন
            </h3>
            <p className="text-slate-400 leading-relaxed relative z-10">
              এই সময়ে অক্সিজেনের সরবরাহ নিশ্চিত করা এবং পরিষ্কার পানি বজায় রাখা অত্যন্ত জরুরি।
            </p>
          </motion.div>

          {/* Final Transition Card (Spans 12 cols, shorter height) */}
          <motion.div 
            variants={bentoItemVariants}
            className="md:col-span-12 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/30 rounded-[2rem] p-6 lg:p-8 flex items-center justify-between overflow-hidden shadow-xl group hover:border-cyan-400/50 transition-colors"
          >
            <div className="flex items-center gap-6 z-10">
              <div className="w-16 h-16 shrink-0 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full border border-cyan-400 animate-ping absolute opacity-50"></div>
                <Fish className="w-8 h-8 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-normal">
                  নার্সারি পুকুরে স্থানান্তর
                </h3>
                <p className="text-cyan-200/80 leading-relaxed text-sm md:text-base max-w-4xl">
                  সংগৃহীত রেণু পোনাগুলো পরবর্তী বৃদ্ধির জন্য বিশেষভাবে প্রস্তুতকৃত নার্সারি পুকুরে সাবধানে স্থানান্তর করা হয়।
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-slate-800 border border-white/10 items-center justify-center group-hover:bg-cyan-500/20 transition-colors z-10">
              <ArrowRight className="w-8 h-8 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            
            {/* Background sweeping light */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none"></div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
