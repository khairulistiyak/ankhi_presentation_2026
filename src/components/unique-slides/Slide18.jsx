import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Droplet, Dna } from 'lucide-react';

export default function Slide18({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, scale: 0.95, transition: { duration: 0.6 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 12 } }
  };

  const data = [
    {
      title: "সময়কাল",
      desc: "২য় ডোজ ইনজেকশন দেওয়ার সাধারণত ৬ থেকে ৮ ঘণ্টার মধ্যে স্ত্রী মাছ ডিম ছাড়ে।",
      icon: Timer,
      color: "from-blue-400 to-indigo-500",
      glow: "shadow-blue-500/20"
    },
    {
      title: "ডিম ছাড়া (Spawning)",
      desc: "হাপার ভেতরে বা প্রজনন ট্যাংকে স্ত্রী মাছ স্বাভাবিকভাবেই ডিম নিঃসরণ করে।",
      icon: Droplet,
      color: "from-cyan-400 to-teal-500",
      glow: "shadow-cyan-500/20"
    },
    {
      title: "নিষিক্তকরণ (Fertilization)",
      desc: "একই সময়ে পুরুষ মাছ শুক্রাণু নিঃসরণ করে এবং পানিতে প্রাকৃতিকভাবে ডিমগুলো নিষিক্ত হয়।",
      icon: Dna,
      color: "from-fuchsia-400 to-purple-500",
      glow: "shadow-fuchsia-500/20"
    }
  ];

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#030712] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Dynamic Water-like Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-blue-900/20 rounded-[40%] blur-[100px] mix-blend-screen"
        ></motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col h-full py-6">
        
        {/* Header & Photo Architecture */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8 flex-1">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold tracking-widest uppercase mb-6 w-max">
               <Droplet className="w-5 h-5" />
               <span>প্রজনন পর্যায়</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-300 py-2 leading-normal">
              ডিম ছাড়া ও নিষিক্তকরণ
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              কৃত্রিম উপায়ে হরমোন প্রয়োগের পর মাছের প্রজনন প্রক্রিয়ার সবচেয়ে গুরুত্বপূর্ণ ধাপ হলো স্পনিং বা ডিম ছাড়া।
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 relative rounded-[3rem] overflow-hidden border-2 border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,0.15)] group min-h-[300px]"
          >
            <img 
              src="https://pollinations.ai/p/fish-eggs-spawning-underwater-glowing-scientific-macro?width=1200&height=600&seed=18" 
              alt="Spawning and Fertilization" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay pointer-events-none"></div>
            
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/50"
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full relative z-10"></div>
              <span className="text-cyan-300 font-bold tracking-wider text-sm">LIVE MONITORING</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0"
        >
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-500 shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center shadow-xl ${item.glow} group-hover:scale-110 transition-transform duration-500`}>
                     <Icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${item.color}`} style={{ color: "white" }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-[1.05rem]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
