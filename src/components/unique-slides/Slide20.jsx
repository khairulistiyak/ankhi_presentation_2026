import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Fish, Droplets, Leaf } from 'lucide-react';

const RealisticNurseryPond = () => (
  <svg viewBox="0 0 100 100" className="w-56 h-56 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
    <defs>
      <linearGradient id="pondWater" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(4,120,87,0.8)" />
        <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
        <stop offset="100%" stopColor="rgba(6,78,59,0.9)" />
      </linearGradient>
      <filter id="glowLarvae">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect x="5" y="15" width="90" height="70" rx="10" fill="#0f172a" stroke="rgba(16,185,129,0.3)" strokeWidth="4" />
    
    <rect x="10" y="20" width="80" height="60" rx="6" fill="url(#pondWater)" />
    
    <motion.ellipse 
      animate={{ rx: [0, 30], ry: [0, 15], opacity: [0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      cx="50" cy="50" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1" 
    />
    <motion.ellipse 
      animate={{ rx: [0, 25], ry: [0, 12], opacity: [0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
      cx="30" cy="40" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="1" 
    />

    <motion.g filter="url(#glowLarvae)">
      {[...Array(20)].map((_, i) => (
        <motion.path 
          key={i}
          d="M 0 0 Q -2 -1 -4 0 Q -2 1 0 0" 
          fill="#6ee7b7"
          animate={{ 
            x: [20 + Math.random() * 60, 20 + Math.random() * 60, 20 + Math.random() * 60], 
            y: [30 + Math.random() * 40, 30 + Math.random() * 40, 30 + Math.random() * 40],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            x: { duration: 10 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}
    </motion.g>

    {[...Array(30)].map((_, i) => (
      <circle 
        key={`algae-${i}`}
        cx={12 + Math.random() * 76} 
        cy={22 + Math.random() * 56} 
        r={Math.random() * 0.5 + 0.2} 
        fill="rgba(16,185,129,0.8)" 
      />
    ))}

    <path d="M 30 20 L 30 80 M 50 20 L 50 80 M 70 20 L 70 80 M 10 40 L 90 40 M 10 60 L 90 60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
  </svg>
);

export default function Slide20({ direction }) {
  const steps = [
    {
      id: "১",
      title: "পোনা সংগ্রহ",
      subtitle: "সতর্ক সংগ্রহ",
      desc: "ডিম ফোটার পর অত্যন্ত সতর্কতার সাথে রেণু পোনাগুলো হ্যাচিং জার বা ইনকিউবেটর থেকে সংগ্রহ করা হয়।",
      icon: Fish,
      color: "from-emerald-400 to-teal-500",
      glowColor: "rgba(16,185,129,0.5)",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30"
    },
    {
      id: "২",
      title: "নার্সারি পুকুরে স্থানান্তর",
      subtitle: "নতুন পরিবেশ",
      desc: "পোনাগুলোকে প্রাকৃতিক পরিবেশের নার্সারি পুকুরে ছেড়ে দেওয়া হয়, যেখানে তারা ধীরে ধীরে বড় হওয়ার সুযোগ পায়।",
      icon: Droplets,
      color: "from-teal-400 to-cyan-500",
      glowColor: "rgba(20,184,166,0.5)",
      bgGlow: "bg-teal-500/10",
      borderColor: "border-teal-500/30"
    },
    {
      id: "৩",
      title: "প্রাকৃতিক খাদ্য",
      subtitle: "পুষ্টি নিশ্চিতকরণ",
      desc: "নার্সারি পুকুরে প্রচুর পরিমাণে প্রাকৃতিক খাদ্য (প্ল্যাঙ্কটন) নিশ্চিত করা হয়, যা পোনার দ্রুত বৃদ্ধির জন্য অপরিহার্য।",
      icon: Leaf,
      color: "from-emerald-300 to-green-500",
      glowColor: "rgba(52,211,153,0.5)",
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
      className="absolute inset-0 w-full h-full bg-[#030d08] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.1),transparent_70%)]"></div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold tracking-widest uppercase mb-4 text-xs">
              <Activity className="w-4 h-4" />
              <span>চূড়ান্ত পর্যায়</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 py-2 leading-normal drop-shadow-lg">
              রেণু পোনা সংগ্রহ <br />ও নার্সারি
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] group bg-slate-900"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] border border-emerald-500/20 rounded-full border-dashed"
              ></motion.div>
              <div className="absolute w-[250px] h-[250px] bg-emerald-500/10 rounded-full blur-[40px]"></div>

              <div className="relative z-10">
                <RealisticNurseryPond />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030d08] via-slate-900/80 to-[#030d08]/40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-screen"></div>
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
              className="w-full h-1/4 bg-gradient-to-b from-transparent via-emerald-400 to-transparent blur-[2px]"
            ></motion.div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-center gap-6 md:gap-10 mb-10 last:mb-0 group"
              >
                {/* Node Connector */}
                <div className="absolute left-[42px] md:left-[66px] top-1/2 w-8 md:w-12 h-1 bg-slate-700 -z-10 group-hover:bg-emerald-500/50 transition-colors"></div>

                {/* Circular Process Node */}
                <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-slate-950 border-4 border-slate-800 group-hover:${step.borderColor} flex items-center justify-center shadow-xl transition-all duration-500`}
                  style={{ boxShadow: `0 0 20px ${step.glowColor}` }}>
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
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-normal">{step.title}</h3>
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
