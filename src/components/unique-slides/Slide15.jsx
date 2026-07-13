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

  // --- REMOVED ANIMATION, REPLACED WITH STATIC IMAGE AND HUD OVERLAY ---

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#0B1120] dark:bg-[#050810] flex items-center justify-center p-6 md:p-10 overflow-hidden font-sans transition-colors duration-700"
    >
      {/* Advanced Cyberpunk Background Glow (More subtle and rich) */}
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

        {/* Right Column (Ultra-Modern UI Panels) */}
        <div className="lg:col-span-7 h-full flex flex-col gap-8 pt-4 lg:pt-0">

          {/* Top Row: Stunning HUD Photo Container */}
          <motion.div
            variants={itemVariants}
            className="h-[60%] bg-slate-900/60 backdrop-blur-3xl rounded-[40px] p-4 border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] relative flex flex-col overflow-hidden group"
          >
            {/* Top Bar inside HUD */}
            <div className="absolute top-6 left-8 right-8 flex items-center justify-between z-30 pointer-events-none">
              <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]"></span>
                <span className="text-xs font-black text-amber-300 uppercase tracking-[0.2em]">Live Visual</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-6 rounded-sm ${i < 3 ? 'bg-amber-500/80' : 'bg-slate-700/50'}`}></div>
                ))}
              </div>
            </div>

            {/* Main Photo Area */}
            <div className="w-full h-full rounded-[32px] overflow-hidden relative border border-slate-700/50">
              {/* The Static Photo */}
              <img
                src="https://image.pollinations.ai/prompt/Macro%20photography%20of%20a%20fish%20head%20during%20scientific%20dissection%20to%20extract%20pituitary%20gland%20in%20a%20modern%20lab%20with%20clean%20lighting?width=1024&height=768&nologo=true"
                alt="Pituitary Gland Extraction"
                className="absolute inset-0 w-full h-full object-cover mix-blend-normal opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Dramatic HUD Overlays (Completely Static, No Motion) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90 z-10"></div>
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-color z-10 pointer-events-none"></div>

              {/* HUD Corner Brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-500/70 z-20"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-500/70 z-20"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-500/70 z-20"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-500/70 z-20"></div>

              {/* Bottom HUD Text */}
              <div className="absolute bottom-8 left-10 z-20">
                <div className="text-white text-3xl font-black tracking-widest drop-shadow-lg mb-1">
                  PG-EXTRACT_X1
                </div>
                <div className="text-amber-400 text-sm font-mono tracking-[0.3em]">
                  TISSUE ACQUISITION PROTOCOL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: Preservation and Usage (Polished Cards) */}
          <div className="grid grid-cols-2 gap-8 h-[40%]">

            {/* Absolute Alcohol Card */}
            <motion.div
              variants={itemVariants}
              className="bg-indigo-950/20 backdrop-blur-3xl rounded-[32px] p-8 border border-indigo-500/20 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] relative flex flex-col group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Decorative Hexagon */}
              <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500">🧪</div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <span className="text-lg">🧪</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-300">
                  সংরক্ষণ
                </h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed relative z-10">
                গ্রন্থিটি সংগ্রহ করার পর অবিলম্বে <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">অ্যাবসলিউট অ্যালকোহলে</span> ডুবিয়ে সংরক্ষণ করা হয়, যেন এর কার্যকারিতা নষ্ট না হয়।
              </p>
            </motion.div>

            {/* Application Card */}
            <motion.div
              variants={itemVariants}
              className="bg-orange-950/20 backdrop-blur-3xl rounded-[32px] p-8 border border-orange-500/20 shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] relative flex flex-col group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500">💉</div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                  <span className="text-lg">💉</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-300">
                  দ্রবণ তৈরি
                </h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed relative z-10">
                সংরক্ষিত গ্রন্থিটি পরে টিস্যু হোমোজেনাইজার দিয়ে পিষে <span className="text-orange-400 font-bold bg-orange-500/10 px-2 py-0.5 rounded">ডিস্টিলড ওয়াটারের</span> সাথে মিশিয়ে দ্রবণ তৈরি করা হয়।
              </p>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Slide15;
