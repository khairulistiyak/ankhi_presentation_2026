import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Waves, RefreshCcw } from 'lucide-react';

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
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "পানির প্রবাহ",
      desc: "জারের নিচে দিয়ে অনবরত পানি প্রবাহের ব্যবস্থা থাকে, যাতে ডিমগুলো সবসময় ভাসমান বা ঘূর্ণায়মান অবস্থায় থাকে।",
      icon: Waves,
      color: "from-teal-400 to-emerald-500"
    },
    {
      title: "ডিম ফুটানো",
      desc: "পানির তাপমাত্রা ও অক্সিজেনের ওপর ভিত্তি করে নির্দিষ্ট সময় পর (সাধারণত ২৪-৭২ ঘন্টা) ডিম ফুটে রেণু পোনা বের হয়।",
      icon: RefreshCcw,
      color: "from-blue-400 to-indigo-500"
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
      {/* Background Bubbles (Hatching Concept) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500/20 rounded-full blur-[2px]"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: Math.random() * 100 + '%',
              bottom: '-5%'
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
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
                className="flex items-start gap-6 bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group"
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2 leading-relaxed">
                    {info.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Right Graphic Content (Abstract Hatching Jar Concept) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 w-full lg:w-1/2 h-[400px] lg:h-full flex items-center justify-center"
      >
        <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px]">
          {/* Abstract Circular Jar */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-600/20 rounded-[100px] border border-cyan-500/20 backdrop-blur-sm overflow-hidden flex items-end justify-center pb-10 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
            
            {/* Water Level */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 w-[200%] h-[70%] bg-gradient-to-t from-cyan-600/40 to-transparent rounded-[100%] opacity-50"
              style={{ left: '-50%' }}
            ></motion.div>

            {/* Glowing Core (Eggs) */}
            <div className="relative z-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
            
            {/* Swirling lines representing water flow */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 bottom-10 h-[200px] border-t-2 border-cyan-400/20 rounded-full"
            ></motion.div>
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-10 bottom-20 h-[150px] border-t-2 border-blue-400/20 rounded-full"
            ></motion.div>
          </div>

          {/* Holographic HUD rings around jar */}
          <motion.div 
            animate={{ rotateX: 360, rotateZ: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-cyan-500/10 [transform-style:preserve-3d]"
          ></motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}
