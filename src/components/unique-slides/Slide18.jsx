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
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-blue-900/20 rounded-[40%] blur-[100px] mix-blend-screen"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -right-[10%] w-[70vw] h-[70vw] bg-cyan-900/20 rounded-[30%] blur-[120px] mix-blend-screen"
        ></motion.div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold tracking-widest uppercase mb-6">
             <Droplet className="w-5 h-5" />
             <span>প্রজনন পর্যায়</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-300 py-2 leading-normal">
            ডিম ছাড়া ও নিষিক্তকরণ
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative group bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 shadow-xl ${item.glow} group-hover:scale-110 transition-transform duration-500`}>
                   <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-2xl`}></div>
                   <Icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-br ${item.color} drop-shadow-md`} style={{ stroke: "url(#gradient-" + index + ")", color: "white" }} />
                   
                   {/* Def SVG Gradient for Icon */}
                   <svg width="0" height="0">
                     <linearGradient id={"gradient-" + index} x1="100%" y1="100%" x2="0%" y2="0%">
                       <stop stopColor={index === 0 ? "#818cf8" : index === 1 ? "#2dd4bf" : "#c084fc"} offset="0%" />
                       <stop stopColor={index === 0 ? "#60a5fa" : index === 1 ? "#22d3ee" : "#e879f9"} offset="100%" />
                     </linearGradient>
                   </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>
                
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
