import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Waves, RefreshCcw } from 'lucide-react';

const RealisticHatchingJar = () => (
  <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
    <defs>
      <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
        <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="80%" stopColor="rgba(255,255,255,0.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
      </linearGradient>
      <linearGradient id="jarWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.8)" />
      </linearGradient>
      <filter id="eggGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background Stand */}
    <rect x="42" y="90" width="16" height="10" fill="#1e293b" />
    <path d="M 30 98 L 70 98 L 70 100 L 30 100 Z" fill="#334155" />

    {/* Jar Glass Back */}
    <path d="M 40 10 L 60 10 L 60 20 L 75 75 A 10 10 0 0 1 65 90 L 35 90 A 10 10 0 0 1 25 75 L 40 20 Z" fill="rgba(15,23,42,0.6)" />
    
    {/* Water */}
    <path d="M 41 25 L 59 25 L 73 75 A 8 8 0 0 1 65 88 L 35 88 A 8 8 0 0 1 27 75 Z" fill="url(#jarWater)" />
    
    {/* Animated Eggs Bouncing in Flow */}
    <motion.g>
      {[...Array(12)].map((_, i) => (
        <motion.circle 
          key={i}
          animate={{ 
            y: [85, 30, 85], 
            x: [50, 50 + (Math.random() - 0.5) * 30, 50],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
          cx="50" cy="85" r="2.5" fill="#fef08a" filter="url(#eggGlow)" 
        />
      ))}
    </motion.g>

    {/* Aeration Bubbles */}
    <motion.g>
      {[...Array(15)].map((_, i) => (
        <motion.circle 
          key={i}
          animate={{ y: [90, 20], opacity: [0, 1, 0], x: [50, 50 + (Math.random() - 0.5) * 20] }}
          transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
          cx="50" cy="90" r={Math.random() * 1.5 + 0.5} fill="#ffffff" 
        />
      ))}
    </motion.g>
    
    {/* Jar Glass Front */}
    <path d="M 40 10 L 60 10 L 60 20 L 75 75 A 10 10 0 0 1 65 90 L 35 90 A 10 10 0 0 1 25 75 L 40 20 Z" fill="url(#jarGlass)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinejoin="round" />
    
    {/* Rim */}
    <rect x="36" y="8" width="28" height="4" rx="2" fill="rgba(255,255,255,0.9)" />
    
    {/* Highlights */}
    <path d="M 44 22 L 31 75" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 57 22 L 67 70" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />
    
    {/* Bottom Pipe Input */}
    <rect x="47" y="90" width="6" height="5" fill="#38bdf8" />
  </svg>
);

export default function Slide19({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 50 : -50, scale: 0.98 }),
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? 50 : -50, scale: 0.98, transition: { duration: 0.6 } })
  };

  const infoBoxes = [
    {
      title: "স্থানান্তর",
      desc: "নিষিক্ত ডিমগুলোকে সাবধানে সংগ্রহ করে হ্যাচিং জারে বা সার্কুলার ইনকিউবেটরে স্থানান্তর করা হয়।",
      icon: Orbit,
      color: "from-cyan-400 to-blue-500",
      border: "border-cyan-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
    },
    {
      title: "পানির প্রবাহ",
      desc: "জারের নিচে দিয়ে অনবরত পানি প্রবাহের ব্যবস্থা থাকে, যাতে ডিমগুলো সবসময় ভাসমান বা ঘূর্ণায়মান অবস্থায় থাকে।",
      icon: Waves,
      color: "from-teal-400 to-emerald-500",
      border: "border-teal-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(45,212,191,0.2)]"
    },
    {
      title: "ডিম ফুটানো",
      desc: "পানির তাপমাত্রা ও অক্সিজেনের ওপর ভিত্তি করে নির্দিষ্ট সময় পর (সাধারণত ২৪-৭২ ঘন্টা) ডিম ফুটে রেণু পোনা বের হয়।",
      icon: RefreshCcw,
      color: "from-blue-400 to-indigo-500",
      border: "border-blue-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
    }
  ];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#040812] flex flex-col lg:flex-row items-center justify-center p-8 overflow-hidden gap-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none"></div>

      {/* Left Text Content */}
      <div className="relative z-10 w-full lg:w-5/12 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            ইনকিউবেশন পর্যায়
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-normal py-2 drop-shadow-lg">
            হ্যাচিং জারে <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ডিম ফুটানো</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-6 mb-12"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
          }}
          className="space-y-6"
        >
          {infoBoxes.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className={`flex items-start gap-6 bg-slate-900/60 backdrop-blur-xl border ${info.border} p-6 md:p-8 rounded-[2rem] hover:bg-slate-800/80 transition-all group ${info.glow}`}
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                  <Icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${info.color}`} style={{ color: "white" }} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 leading-relaxed">
                    {info.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {info.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Right Custom SVG Architecture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full lg:w-7/12 h-[350px] lg:h-full py-8 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-h-[700px] rounded-[3rem] overflow-hidden border-2 border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,0.15)] bg-[#040812] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,rgba(4,8,18,1)_100%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none mix-blend-screen opacity-50"></div>

          {/* Animated HUD Elements behind SVG */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-cyan-500/20 rounded-full border-dashed"
          ></motion.div>

          <RealisticHatchingJar />

          {/* Bottom HUD Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-10 left-10 right-10 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 p-6 rounded-2xl flex items-center justify-between"
          >
            <div>
              <div className="text-cyan-400 font-bold tracking-widest text-xs mb-1">SYSTEM STATUS</div>
              <div className="text-white font-bold text-xl">Water Flow & Aeration Active</div>
            </div>
            <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [10, Math.random() * 20 + 20, 10] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-2 bg-cyan-400 rounded-full"
                ></motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

    </motion.div>
  );
}
