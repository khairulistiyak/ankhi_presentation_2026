import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({ opacity: 0, x: 50, filter: "blur(10px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#0B1120] dark:bg-[#050810] flex items-center justify-center p-6 md:p-10 overflow-hidden font-sans transition-colors duration-700"
    >
      {/* Advanced Cyberpunk Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Architect/CAD Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgNjBMMDAgMEw2MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[850px] items-center"
      >
        {/* Left Column (Content) */}
        <div className="lg:col-span-5 flex flex-col gap-8 h-full justify-center">

          {/* Premium Glassmorphic Title Box */}
          <motion.div
            variants={itemVariants}
            className="flex-none bg-white/5 backdrop-blur-3xl rounded-[40px] p-10 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Animated accent line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 blur-[60px] rounded-full mix-blend-screen"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-pulse"></span>
              <span className="text-sm font-bold tracking-[0.3em] text-slate-300 uppercase">
                ধাপ ০২ // পি.জি এক্সট্রাকশন
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-normal md:leading-relaxed tracking-tight mb-6 relative z-10">
              পিটুইটারি (P.G)
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 py-2 inline-block drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
                গ্রন্থি সংগ্রহ পদ্ধতি
              </span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed relative z-10">
              ২-৩ বছর বয়সী সুস্থ রুই জাতীয় মাছের মস্তক অঞ্চল থেকে খুব সাবধানে এই হরমোন গ্রন্থিটি সংগ্রহ করা হয়। এটি প্রজননে উদ্দীপনা সৃষ্টির প্রধান উপাদান।
            </p>
          </motion.div>

          {/* Info Features */}
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: "মস্তক ব্যবচ্ছেদ", desc: "মাছের মাথার তালু ২-৩ সে.মি গভীর করে কাটা হয়।", icon: "✂️", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]" },
              { title: "গ্রন্থি নিষ্কাশন", desc: "মগজের ঠিক নিচে থাকা গ্রন্থিটি চিমটার সাহায্যে তুলে আনা হয়।", icon: "🧬", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-6 border ${item.border} ${item.glow} flex items-center gap-6 hover:bg-white/[0.06] hover:translate-x-2 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color} text-2xl shrink-0 group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1 tracking-wide group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-base font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Stunning Flex Layout avoiding Squish) */}
        <div className="lg:col-span-7 h-full flex flex-col gap-8 pt-4 lg:pt-0">
          
          {/* Top Row: Widescreen HUD Photo Container (Flex-1 so it shrinks/grows perfectly) */}
          <motion.div
            variants={itemVariants}
            className="flex-1 min-h-[300px] bg-slate-900/60 backdrop-blur-3xl rounded-[32px] p-3 border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] relative flex flex-col overflow-hidden group"
          >
            {/* Top Bar inside HUD */}
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30 pointer-events-none">
              <div className="flex items-center gap-3 bg-slate-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24] animate-pulse"></span>
                <span className="text-[10px] font-black text-amber-300 uppercase tracking-[0.2em]">Visual Data</span>
              </div>
              <div className="flex gap-1 opacity-70">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-1 h-3 rounded-sm ${i < 5 ? 'bg-amber-500' : 'bg-slate-700/50'}`}></div>
                ))}
              </div>
            </div>
            
            {/* Main Photo Area */}
            <div className="w-full h-full rounded-[24px] overflow-hidden relative border border-slate-700/50">
              {/* The Static Photo */}
              <img 
                src="https://image.pollinations.ai/prompt/Macro%20photography%20of%20a%20fish%20head%20during%20scientific%20dissection%20to%20extract%20pituitary%20gland%20in%20a%20modern%20lab%20with%20clean%20lighting?width=1024&height=500&nologo=true"
                alt="Pituitary Gland Extraction"
                className="absolute inset-0 w-full h-full object-cover mix-blend-normal opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Dramatic HUD Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-color z-10 pointer-events-none"></div>
              
              {/* HUD Corner Brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-amber-500/70 z-20"></div>
              <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-amber-500/70 z-20"></div>
              <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-amber-500/70 z-20"></div>
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-amber-500/70 z-20"></div>
              
              {/* Bottom HUD Text */}
              <div className="absolute bottom-6 left-8 z-20 flex items-end justify-between right-8">
                 <div>
                   <div className="text-white text-2xl font-black tracking-widest drop-shadow-lg mb-1">
                     PG-EXTRACT
                   </div>
                   <div className="text-amber-400 text-[10px] font-mono tracking-[0.3em]">
                     PROTOCOL ENGAGED
                   </div>
                 </div>
                 <div className="w-16 h-16 rounded-full border border-amber-500/30 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm hidden sm:flex">
                   <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24]"></div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: Preservation and Usage (Flex-none so they stay big and beautiful) */}
          <div className="grid grid-cols-2 gap-8 flex-none">
            
            {/* Absolute Alcohol Card */}
            <motion.div
              variants={itemVariants}
              className="bg-indigo-950/20 backdrop-blur-3xl rounded-[40px] p-8 lg:p-10 border border-indigo-500/20 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] relative flex flex-col justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
              
              {/* Decorative Hexagon */}
              <div className="absolute -bottom-16 -right-16 text-[150px] opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 rotate-12">🧪</div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">🧪</span>
                </div>
                <div className="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase">
                  Phase 01
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 relative z-10 tracking-tight group-hover:text-indigo-200 transition-colors">
                সংরক্ষণ <span className="text-indigo-500 font-light block text-lg mt-1 tracking-widest uppercase">Preservation</span>
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                গ্রন্থিটি সংগ্রহ করার পর অবিলম্বে <span className="text-white font-bold bg-indigo-600/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(99,102,241,0.3)]">অ্যাবসলিউট অ্যালকোহলে</span> ডুবিয়ে সংরক্ষণ করা হয়।
              </p>
            </motion.div>

            {/* Application Card */}
            <motion.div
              variants={itemVariants}
              className="bg-orange-950/20 backdrop-blur-3xl rounded-[40px] p-8 lg:p-10 border border-orange-500/20 shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] relative flex flex-col justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-16 -right-16 text-[150px] opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 -rotate-12">💉</div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center border border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">💉</span>
                </div>
                <div className="px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-300 text-xs font-bold tracking-widest uppercase">
                  Phase 02
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 relative z-10 tracking-tight group-hover:text-orange-200 transition-colors">
                দ্রবণ তৈরি <span className="text-orange-500 font-light block text-lg mt-1 tracking-widest uppercase">Preparation</span>
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                গ্রন্থিটি পিষে <span className="text-white font-bold bg-orange-600/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(249,115,22,0.3)]">ডিস্টিলড ওয়াটারের</span> সাথে মিশিয়ে দ্রবণ তৈরি করা হয়।
              </p>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Slide15;
