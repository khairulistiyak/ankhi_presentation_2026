import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Activity, Fish, RefreshCcw } from 'lucide-react';

const RealisticSpawningTank = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
    <defs>
      <linearGradient id="tankGlass18" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
      </linearGradient>
      <linearGradient id="waterSurface18" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(56,189,248,0.8)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
      </linearGradient>
      <filter id="glowEgg18">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowFish18">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <path d="M 20 30 L 80 30 L 80 80 L 20 80 Z" fill="rgba(30,41,59,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    
    <motion.path 
      animate={{ d: [
        "M 20 40 Q 35 35 50 40 T 80 40 L 80 80 L 20 80 Z",
        "M 20 40 Q 35 45 50 40 T 80 40 L 80 80 L 20 80 Z",
        "M 20 40 Q 35 35 50 40 T 80 40 L 80 80 L 20 80 Z"
      ]}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      fill="url(#waterSurface18)" 
    />
    
    <motion.g 
      animate={{ x: [-20, 40], y: [0, 5, 0] }}
      transition={{ x: { duration: 8, repeat: Infinity, ease: "linear" }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
    >
      <path d="M 30 65 Q 40 60 45 65 Q 40 70 30 65 Z" fill="#60a5fa" filter="url(#glowFish18)" />
      <path d="M 25 60 L 30 65 L 25 70 Z" fill="#60a5fa" />
    </motion.g>

    <motion.g 
      animate={{ x: [40, -30], y: [0, -5, 0] }}
      transition={{ x: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
    >
      <path d="M 60 55 Q 50 50 45 55 Q 50 60 60 55 Z" fill="#f472b6" filter="url(#glowFish18)" />
      <path d="M 65 50 L 60 55 L 65 60 Z" fill="#f472b6" />
      
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 5], y: [0, -5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} cx="50" cy="56" r="1.5" fill="#fcd34d" filter="url(#glowEgg18)" />
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 8], y: [0, -2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} cx="52" cy="54" r="1.5" fill="#fcd34d" filter="url(#glowEgg18)" />
      <motion.circle animate={{ opacity: [1, 0], scale: [1, 2], x: [0, 3], y: [0, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.0 }} cx="48" cy="58" r="1.5" fill="#fcd34d" filter="url(#glowEgg18)" />
    </motion.g>

    <rect x="20" y="30" width="60" height="50" rx="4" fill="url(#tankGlass18)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
    
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }} cx="30" cy="75" r="1" fill="#fff" />
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} cx="70" cy="70" r="1.5" fill="#fff" />
    <motion.circle animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} cx="50" cy="78" r="1" fill="#fff" />

    <rect x="23" y="33" width="2" height="44" rx="1" fill="rgba(255,255,255,0.5)" />
    <rect x="75" y="33" width="2" height="44" rx="1" fill="rgba(255,255,255,0.2)" />
  </svg>
);

export default function Slide18({ direction }) {
  const steps = [
    {
      title: "স্থানান্তর",
      subtitle: "হাপা বা স্পনিং ট্যাংক",
      desc: "ইনজেকশন দেওয়ার পরপরই স্ত্রী ও পুরুষ মাছগুলোকে একত্রে প্রজননের জন্য নির্ধারিত হাপায় ছেড়ে দেওয়া হয়।",
      icon: RefreshCcw,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    },
    {
      title: "ডিম ও স্পার্ম নিঃসরণ",
      subtitle: "প্রাকৃতিক প্রক্রিয়া",
      desc: "সাধারণত ৬-৮ ঘণ্টা পর স্ত্রী মাছ পানিতে ডিম ছাড়ে এবং একই সময়ে পুরুষ মাছ স্পার্ম নিঃসরণ করে।",
      icon: Fish,
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]"
    },
    {
      title: "নিষিক্তকরণ",
      subtitle: "ডিম নিষিক্ত হওয়া",
      desc: "পানিতে মিশ্রিত অবস্থায় স্পার্ম ডিমগুলোকে নিষিক্ত করে। এসময় নিরবচ্ছিন্ন পানির প্রবাহ নিশ্চিত করা হয়।",
      icon: Droplets,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
    }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.9, y: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, scale: 0.9, y: dir < 0 ? 50 : -50, transition: { duration: 0.6 } })
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050A15] flex flex-col p-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col gap-6">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center shrink-0 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold tracking-widest uppercase mb-3 text-xs">
            <Activity className="w-4 h-4" />
            <span>প্রজনন পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 py-2 leading-normal">
            স্পনিং বা প্রজনন প্রক্রিয়া
          </h2>
        </div>

        {/* Top Wide Panorama Card for SVG */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.1)] flex items-center justify-center min-h-[300px]"
        >
          {/* Animated HUD behind Tank */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full"
          ></motion.div>
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[50px]"></div>

          <div className="relative z-10 scale-125">
            <RealisticSpawningTank />
          </div>

          <div className="absolute bottom-6 right-6 bg-slate-950/80 border border-blue-500/30 px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-blue-300 text-xs font-bold tracking-widest">WATER CIRCULATION ACTIVE</span>
          </div>
        </motion.div>

        {/* Bottom Split Pillars */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0 h-auto md:h-64"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                variants={cardAnim}
                className={`group bg-slate-900/60 backdrop-blur-md border ${step.border} rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${step.glow} hover:-translate-y-2`}
              >
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${step.bg} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <div className="text-xs font-bold text-slate-400 tracking-widest mb-1 uppercase">{step.subtitle}</div>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-3">{step.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
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
