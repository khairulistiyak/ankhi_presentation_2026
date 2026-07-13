import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Droplets, RotateCw, TestTubeDiagonal, ArrowDown, Activity, ArrowRight } from 'lucide-react';

export default function Slide16({ direction }) {
  const steps = [
    {
      id: "১",
      title: "গ্রন্থি চূর্ণ করা",
      subtitle: "টিস্যু হোমোজিনাইজেশন",
      desc: "পিটুইটারি গ্রন্থি টিস্যু হোমোজিনাইজার বা হামানদিস্তায় সাবধানে মিহি করে পিষে নিতে হবে।",
      icon: TestTubeDiagonal,
      color: "from-amber-400 to-orange-500",
      glowColor: "rgba(249,115,22,0.5)",
      bgGlow: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      id: "২",
      title: "দ্রবণ তৈরি",
      subtitle: "দ্রবণ মিশ্রণ",
      desc: "পেষা গ্রন্থির সাথে প্রয়োজনমতো পরিশ্রুত পানি (Distilled water) মিশিয়ে একটি দ্রবণ তৈরি করা হয়।",
      icon: Droplets,
      color: "from-blue-400 to-cyan-500",
      glowColor: "rgba(6,182,212,0.5)",
      bgGlow: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      id: "৩",
      title: "সেন্ট্রিফিউজ ও সংগ্রহ",
      subtitle: "সেন্ট্রিফিউগেশন",
      desc: "দ্রবণটিকে সেন্ট্রিফিউজ মেশিনে ঘুরিয়ে পরিষ্কার অংশটি আলাদা করা হয় যা ইনজেকশনের জন্য প্রস্তুত।",
      icon: RotateCw,
      color: "from-emerald-400 to-teal-500",
      glowColor: "rgba(16,185,129,0.5)",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30"
    }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.95, y: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, scale: 0.95, y: dir < 0 ? 50 : -50, transition: { duration: 0.6 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050B14] flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center h-full">
        
        {/* Left Side: Photo & System HUD */}
        <div className="w-full lg:w-5/12 h-full py-8 flex flex-col justify-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold tracking-widest uppercase mb-4 text-xs">
               <Activity className="w-4 h-4" />
               <span>ল্যাবরেটরি প্রক্রিয়া</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 py-2 leading-normal drop-shadow-lg">
              পিজি (PG) <br/>দ্রবণ প্রস্তুতকরণ
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] group bg-slate-900"
          >
            {/* Animated SVG/Icon Design for Lab Mixing (Steps 1-2-3) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
              
              {/* Central connecting line */}
              <div className="absolute top-1/4 bottom-1/4 w-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                ></motion.div>
              </div>

              {/* Step 1 Graphic */}
              <div className="flex flex-col items-center relative z-10 mb-8">
                <div className="w-16 h-16 rounded-full bg-slate-950 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center">
                  <TestTubeDiagonal className="w-8 h-8 text-orange-400" />
                </div>
                <div className="mt-2 text-orange-400 font-bold text-sm bg-slate-900/80 px-3 py-1 rounded-full border border-orange-500/30">১. চূর্ণ করা</div>
              </div>

              {/* Step 2 Graphic */}
              <div className="flex flex-col items-center relative z-10 mb-8">
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center relative overflow-hidden">
                  <FlaskConical className="w-10 h-10 text-cyan-400 relative z-10" />
                  <motion.div 
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-cyan-500/30 rounded-b-full pointer-events-none"
                  ></motion.div>
                </div>
                <div className="mt-2 text-cyan-400 font-bold text-sm bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/30">২. দ্রবণ তৈরি</div>
              </div>

              {/* Step 3 Graphic */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-slate-950 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-emerald-500 border-dashed rounded-full"
                  ></motion.div>
                  <RotateCw className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="mt-2 text-emerald-400 font-bold text-sm bg-slate-900/80 px-3 py-1 rounded-full border border-emerald-500/30">৩. সেন্ট্রিফিউজ</div>
              </div>

              {/* Bubbles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -100], 
                    x: [0, (Math.random() - 0.5) * 50],
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  style={{ top: '60%', left: '48%' }}
                ></motion.div>
              ))}

            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-slate-900/80 to-[#050B14]/40"></div>
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-screen"></div>

          </motion.div>
        </div>

        {/* Right Side: Vertical Lab Process Pipeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:w-7/12 flex flex-col justify-center relative py-12 pl-6 md:pl-12"
        >
          {/* Main Pipeline Tube */}
          <div className="absolute left-[38px] md:left-[62px] top-10 bottom-10 w-2 bg-slate-800 rounded-full overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            <motion.div 
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="w-full h-1/4 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[2px]"
            ></motion.div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative flex items-center gap-6 md:gap-10 mb-12 last:mb-0 group"
              >
                {/* Node Connector */}
                <div className="absolute left-[42px] md:left-[66px] top-1/2 w-8 md:w-12 h-1 bg-slate-700 -z-10 group-hover:bg-cyan-500/50 transition-colors"></div>

                {/* Circular Process Node */}
                <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-slate-950 border-4 border-slate-800 group-hover:${step.borderColor} flex items-center justify-center shadow-xl transition-all duration-500`}
                     style={{ boxShadow: `0 0 20px ${step.glowColor}` }}>
                  {/* Rotating Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-[-6px] rounded-full border border-dashed ${step.borderColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                  ></motion.div>
                  
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 text-transparent bg-clip-text bg-gradient-to-br ${step.color}`} style={{ color: "white" }} />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${step.bgGlow} backdrop-blur-md border border-white/5 group-hover:${step.borderColor} rounded-3xl p-6 transition-all duration-500 shadow-lg`}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b ${step.color} opacity-40`}>
                      {step.id}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-400 tracking-widest mb-1">{step.subtitle}</div>
                      <h3 className="text-2xl font-bold text-white leading-normal">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mt-3 border-t border-white/10 pt-3">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </motion.div>
  );
}
