import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = ({ direction = 1 }) => {
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

  // --- ULTRA-MODERN Live Data-Driven Animations ---

  // 1. Futuristic Spinning Centrifuge
  const LiveCentrifuge = () => (
    <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
      {/* Outer Glowing Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-orange-500/30 border-dashed"
      />

      {/* Inner Chamber */}
      <div className="absolute inset-2 rounded-full border-4 border-slate-700/50 bg-slate-900/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center backdrop-blur-md">

        {/* Core Glow */}
        <div className="absolute w-12 h-12 bg-orange-500/20 rounded-full blur-xl"></div>

        {/* High-Speed Rotor (Softened to reduce eye strain) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full flex items-center justify-center"
          style={{ filter: "blur(2px)" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-16 bg-gradient-to-t from-orange-400/80 to-amber-300/80 rounded-full origin-bottom"
              style={{
                transform: `translateY(-50%) rotate(${angle}deg)`,
                boxShadow: '0 0 10px rgba(249, 115, 22, 0.4)'
              }}
            >
              {/* Sample Vial Soft Tip */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-white/70 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
            </div>
          ))}
        </motion.div>

        {/* Soft Glass Lid to further reduce flicker */}
        <div className="absolute inset-0 rounded-full bg-slate-900/40 backdrop-blur-[0.5px]"></div>

        {/* Center Hub */}
        <div className="absolute w-6 h-6 rounded-full bg-slate-800 border-2 border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-20"></div>
      </div>

      {/* RPM Holographic Display */}
      <div className="absolute -bottom-3 bg-slate-900/90 border border-orange-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.2)] z-30 backdrop-blur-md flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-[10px] text-orange-400 font-mono font-bold tracking-widest">৩০০০ আর.পি.এম</span>
      </div>
    </div>
  );

  // 2. Futuristic Test Tube / Measurement
  const LiveTestTube = () => (
    <div className="relative flex flex-col items-center justify-end h-full w-full">
      {/* Scanning Laser Line */}
      <motion.div
        animate={{ y: [-10, 120, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 w-24 h-0.5 bg-teal-400 shadow-[0_0_8px_#2dd4bf] z-20"
      />

      {/* Cyberpunk Dropper */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-4 h-10 bg-gradient-to-b from-slate-700 to-slate-600 rounded-t-sm mb-2 relative border border-teal-500/30 shadow-[0_0_10px_rgba(45,212,191,0.2)]"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-teal-400"></div>
        {/* Holographic Drop */}
        <motion.div
          animate={{ y: [0, 80], opacity: [1, 1, 0], scale: [1, 1.2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.5 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-teal-300 rounded-full shadow-[0_0_10px_#5eead4]"
        />
      </motion.div>

      {/* Modern Glass Cylinder */}
      <div className="w-12 h-36 border-2 border-t-0 border-teal-500/40 rounded-b-[24px] bg-slate-900/60 backdrop-blur-md relative overflow-hidden shadow-[inset_0_0_20px_rgba(45,212,191,0.1),_0_0_15px_rgba(45,212,191,0.2)]">
        {/* Measurement Marks */}
        <div className="absolute left-0 top-0 bottom-8 w-2 border-r border-teal-500/20 flex flex-col justify-between py-2 z-10">
          {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-[1px] bg-teal-500/50"></div>)}
        </div>

        {/* Dynamic Neon Liquid */}
        <motion.div
          animate={{ height: ["15%", "85%", "15%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-teal-600 via-teal-400 to-emerald-300 opacity-90 shadow-[0_-5px_15px_rgba(52,211,153,0.5)]"
        >
          {/* Cyber Bubbles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -60], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
              className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_#fff]"
              style={{ left: `${20 + i * 15}%` }}
            />
          ))}
          {/* Liquid Surface Wave */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[200%] h-2 bg-white/30"
            style={{ borderRadius: '50%' }}
          />
        </motion.div>
      </div>
    </div>
  );

  // 3. Ultra-Modern Glowing Hormone Vial
  const LiveHormoneVial = () => (
    <div className="relative flex flex-col items-center justify-end h-full">

      {/* Floating Energy Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, -40],
            x: [0, Math.random() * 20 - 10],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          className="absolute top-10 w-1 h-1 bg-indigo-300 rounded-full shadow-[0_0_5px_#a5b4fc]"
        />
      ))}

      {/* Cyber Cap */}
      <div className="w-8 h-5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-lg z-10 border border-slate-400/50 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
      <div className="w-6 h-2 bg-indigo-500/50 z-10 shadow-[0_0_10px_#6366f1]"></div>

      {/* High-Tech Vial */}
      <div className="w-20 h-24 border border-indigo-400/40 rounded-2xl bg-slate-900/60 backdrop-blur-xl relative overflow-hidden shadow-[inset_0_0_30px_rgba(99,102,241,0.2),_0_0_20px_rgba(99,102,241,0.3)] flex items-end justify-center pb-2">

        {/* Pulsing Core Energy */}
        <motion.div
          animate={{
            boxShadow: ["0 0 15px #6366f1", "0 0 40px #818cf8", "0 0 15px #6366f1"],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-12 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-xl relative overflow-hidden"
        >
          {/* Energy Matrix Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>

          {/* Internal Plasma Flow */}
          <motion.div
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
        </motion.div>

        {/* Holographic Label */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-indigo-500/20 border border-indigo-400/50 rounded flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]">
          <span className="text-[10px] font-black text-indigo-100 tracking-widest">পি.জি</span>
        </div>
      </div>

      {/* Base Light Ring */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-indigo-500 rounded-full blur-[12px] z-0 pointer-events-none"
      />
    </div>
  );

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#0F172A] dark:bg-[#060B14] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans transition-colors duration-700"
    >
      {/* Advanced Cyberpunk Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[130px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[850px] items-center"
      >

        {/* Left Column (Content) */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-center">

          {/* Glassmorphic Title Box */}
          <motion.div
            variants={itemVariants}
            className="flex-none bg-slate-900/60 backdrop-blur-3xl rounded-[32px] p-8 border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-indigo-600"></div>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                ল্যাবরেটরি উপকরণ (পর্ব ১)
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-normal md:leading-relaxed tracking-tight mb-4">
              প্রণোদিত প্রজননে
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 py-2 inline-block">
                ব্যবহৃত উপকরণ
              </span>
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              সফল প্রণোদিত প্রজননের জন্য ল্যাবরেটরিতে প্রয়োজনীয় উপকরণের উপস্থিতি অত্যাবশ্যক।
            </p>
          </motion.div>

          {/* Futuristic Info Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "হরমোন", desc: "সংরক্ষিত P.G ও H.C.G", icon: "🧪", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
              { title: "বিকার ও পাত্র", desc: "সিরিঞ্জ, টেস্টটিউব, প্লাস্টিকের বল", icon: "💉", color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30" },
              { title: "সেন্ট্রিফিউজ", desc: "হাতে চালিত বা ইলেকট্রিক", icon: "⚙️", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border ${item.border} shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center gap-5 hover:bg-slate-800/80 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} text-2xl shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_currentColor] transition-all`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Ultra-Modern Live Lab Animations) */}
        <div className="lg:col-span-7 h-full flex flex-col gap-6 pt-4 lg:pt-0">

          {/* Top Row: Hormone & Syringe */}
          <div className="grid grid-cols-2 gap-6 h-1/2">

            {/* PG Hormone Holographic Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)] relative flex flex-col items-center justify-center overflow-hidden group"
            >
              <div className="absolute top-5 left-6 flex items-center gap-2 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-ping"></span>
                <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">হরমোন সংগ্রহ</span>
              </div>
              <div className="mt-6 flex-1 w-full flex items-center justify-center">
                <LiveHormoneVial />
              </div>
            </motion.div>

            {/* Test Tube Cyber Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 border border-teal-500/20 shadow-[0_0_30px_rgba(45,212,191,0.1)] relative flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute top-5 left-6 flex items-center gap-2 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf] animate-ping"></span>
                <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest">পরিমাপ</span>
              </div>
              <div className="mt-6 flex-1 w-full flex items-center justify-center relative">
                <LiveTestTube />
              </div>
            </motion.div>

          </div>

          {/* Bottom Row: Centrifuge Machine */}
          <motion.div
            variants={itemVariants}
            className="h-1/2 bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.1)] relative flex flex-col md:flex-row items-center justify-between overflow-hidden gap-8"
          >
            <div className="absolute top-5 left-6 flex items-center gap-2 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#fb923c] animate-ping"></span>
              <span className="text-[10px] font-black text-orange-300 uppercase tracking-widest">সেন্ট্রিফিউজ প্রক্রিয়া</span>
            </div>

            <div className="mt-8 md:mt-0 flex-1 flex items-center justify-center">
              <LiveCentrifuge />
            </div>

            <div className="flex-1 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-inner">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold tracking-wide">প্রক্রিয়া চলছে...</h4>
                <span className="text-orange-400 text-xs font-mono font-bold">৯৯%</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                হরমোন গ্রন্থি থেকে নির্যাস পৃথক করার জন্য ইলেকট্রিক সেন্ট্রিফিউজ মেশিনে ঘোরানো হচ্ছে।
              </p>

              {/* Cyber Progress Bar */}
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-700 relative">
                {/* Glowing fill */}
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_10px_#fb923c]"
                />
                {/* Overlay grid lines for tech effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Slide13;
