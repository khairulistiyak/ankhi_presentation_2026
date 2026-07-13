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
      {/* Subtle Background */}
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
                className="flex items-start gap-6 bg-slate-900/60 backdrop-blur-md p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group shadow-xl"
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.1)]`}>
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2 leading-relaxed">
                    {info.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {info.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Right Photo Architecture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full lg:w-7/12 h-[300px] lg:h-full py-8 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-h-[700px] rounded-[3rem] overflow-hidden border-2 border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,0.15)] group bg-slate-900">
          
          <img 
            src="https://pollinations.ai/p/circular-hatching-jars-fish-hatchery-blue-water-cyberpunk?width=1000&height=1200&seed=19" 
            alt="Hatching Jars" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/50 via-transparent to-[#040812]/80"></div>

          {/* Animated HUD Elements over the photo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border border-cyan-500/30 rounded-full border-dashed opacity-50"
          ></motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-14 right-14 w-24 h-24 border border-blue-500/40 rounded-full border-dotted opacity-50"
          ></motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-10 left-10 right-10 bg-slate-950/70 backdrop-blur-xl border border-cyan-500/30 p-6 rounded-2xl flex items-center justify-between"
          >
            <div>
              <div className="text-cyan-400 font-bold tracking-widest text-xs mb-1">SYSTEM STATUS</div>
              <div className="text-white font-bold text-xl">Water Flow & Aeration</div>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
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
