import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Droplets, RotateCw, TestTubeDiagonal } from 'lucide-react';

export default function Slide16({ direction }) {
  const steps = [
    {
      title: "গ্রন্থি চূর্ণ করা",
      desc: "সংগৃহীত পিটুইটারি গ্রন্থি টিস্যু হোমোজিনাইজার বা হামানদিস্তায় সাবধানে মিহি করে পিষে নিতে হবে।",
      icon: TestTubeDiagonal,
      color: "from-amber-400 to-orange-500",
      shadow: "shadow-orange-500/20"
    },
    {
      title: "দ্রবণ তৈরি",
      desc: "পেষা গ্রন্থির সাথে প্রয়োজনমতো পরিশ্রুত পানি (Distilled water) মিশিয়ে একটি দ্রবণ বা সাসপেনশন তৈরি করা হয়।",
      icon: Droplets,
      color: "from-blue-400 to-cyan-500",
      shadow: "shadow-cyan-500/20"
    },
    {
      title: "সেন্ট্রিফিউজ ও সংগ্রহ",
      desc: "দ্রবণটিকে সেন্ট্রিফিউজ মেশিনে ঘুরিয়ে পরিষ্কার অংশটি আলাদা করা হয় যা ইনজেকশনের জন্য প্রস্তুত।",
      icon: RotateCw,
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/20"
    }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, scale: 0.95, transition: { duration: 0.5 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#030712] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Background CAD Grid and Ambient Light */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-6 mb-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.15)] relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-400/20 animate-pulse mix-blend-overlay"></div>
             <FlaskConical className="w-8 h-8 text-cyan-400 relative z-10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 py-2 leading-normal tracking-wide">
              পিজি (PG) দ্রবণ প্রস্তুতকরণ
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2"></div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Glow Effect behind icon */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`}></div>
                
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-xl ${step.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl`}></div>
                  <Icon className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-slate-950 font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-4 py-1 leading-snug relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed relative z-10">
                  {step.desc}
                </p>

                {/* Bottom connection line for layout (visible on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-white/10 -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
