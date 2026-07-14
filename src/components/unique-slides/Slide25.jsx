import React from 'react';
import { motion } from 'framer-motion';

// --- Advanced Incubation & Fry Anatomy SVG ---
const IncubationSystemSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 30px rgba(234, 179, 8, 0.15))' }}>
        <defs>
          <linearGradient id="fryBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <radialGradient id="yolkCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#d97706" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(234, 179, 8, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        {/* Technical Background */}
        <rect x="0" y="0" width="800" height="600" fill="url(#bgGlow)" />

        {/* Circular Radar / Petri Dish Outline */}
        <motion.circle
          cx="400" cy="300" r="240" fill="none" stroke="rgba(234,179,8,0.15)" strokeWidth="2" strokeDasharray="10,10"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "400px", originY: "300px" }}
        />
        <motion.circle
          cx="400" cy="300" r="220" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        />

        {/* Crosshairs & Grid */}
        <line x1="100" y1="300" x2="700" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1="400" y1="50" x2="400" y2="550" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        <circle cx="400" cy="300" r="5" fill="#facc15" />

        {/* --- DETAILED FISH FRY (LARVA) --- */}
        <g transform="translate(380, 280) scale(1.6)">

          {/* Animated Tail/Body Swimming Motion */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "-40px", originY: "0px" }}
          >
            {/* Main Body (Transparent/Glassy) */}
            <path
              d="M -70 0 C -40 -30, 20 -20, 80 -10 C 120 -5, 150 0, 150 0 C 150 0, 120 5, 80 10 C 20 20, -40 20, -70 0 Z"
              fill="url(#fryBody)" stroke="#fde047" strokeWidth="1"
            />

            {/* Spinal Cord (Internal structure) */}
            <path
              d="M -50 0 Q 0 0, 130 0"
              fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="3 3"
            />

            {/* Tail Fin Rays */}
            <path d="M 140 -5 L 160 -15 M 145 0 L 170 0 M 140 5 L 160 15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

            {/* Massive Yolk Sac */}
            <motion.g
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <ellipse cx="-20" cy="20" rx="35" ry="25" fill="url(#yolkCore)" />
              <ellipse cx="-20" cy="20" rx="35" ry="25" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              {/* Yolk Sac Veins/Vessels */}
              <path d="M -40 10 Q -20 30, -5 15 M -30 25 Q -15 40, 5 25" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </motion.g>

            {/* Eye */}
            <circle cx="-55" cy="-5" r="7" fill="#1e293b" stroke="#fde047" strokeWidth="1.5" />
            <circle cx="-57" cy="-7" r="2" fill="#fff" />

          </motion.g>
        </g>

        {/* --- CALLOUTS & DATA LABELS --- */}

        {/* Yolk Sac Callout (72 Hours) */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <polyline points="330,340 250,420 150,420" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="330" cy="340" r="4" fill="#f59e0b" />
          {/* Solid background to prevent line overlap */}
          <rect x="150" y="398" width="130" height="40" fill="#050A15" />
          <rect x="150" y="398" width="130" height="40" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1" />
          <text x="160" y="423" fill="#fcd34d" fontSize="16" fontWeight="bold">কুসুম থলি</text>
          <text x="150" y="455" fill="#94a3b8" fontSize="14">৭২ ঘ. পুষ্টি ভাণ্ডার</text>
        </motion.g>

        {/* Optic / Brain Callout */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <polyline points="290,260 220,180 120,180" fill="none" stroke="#fde047" strokeWidth="2" />
          <circle cx="290" cy="260" r="4" fill="#fde047" />
          <rect x="110" y="160" width="100" height="36" fill="#050A15" />
          <rect x="110" y="160" width="100" height="36" fill="rgba(253, 224, 71, 0.15)" stroke="#fde047" strokeWidth="1" />
          <text x="120" y="184" fill="#fef08a" fontSize="16" fontWeight="bold">চোখ</text>
          <text x="110" y="215" fill="#94a3b8" fontSize="14">বিকাশ: ২৪ ঘ.</text>
        </motion.g>

        {/* Tail / Locomotion Callout */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <polyline points="590,280 650,220 720,220" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="590" cy="280" r="3" fill="#94a3b8" />
          <rect x="645" y="195" width="80" height="25" fill="#050A15" />
          <text x="650" y="213" fill="#cbd5e1" fontSize="14">লেজ গঠন</text>
          <line x1="650" y1="230" x2="720" y2="230" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
          <motion.line x1="650" y1="230" x2="690" y2="230" stroke="#fde047" strokeWidth="4"
            animate={{ x2: [650, 720, 650] }} transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Small Data Blocks */}
        <rect x="590" y="460" width="160" height="70" fill="#050A15" />
        <text x="600" y="480" fill="#fbbf24" fontSize="15">অবস্থা: ফোটানো</text>
        <text x="600" y="500" fill="#94a3b8" fontSize="13">তাপমাত্রা: ২৮.৫°C</text>
        <text x="600" y="520" fill="#94a3b8" fontSize="13">অক্সিজেন: স্বাভাবিক</text>

      </svg>
    </div>
  );
};

const Slide25 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">

      {/* Background Image (Larvae / Fish Fry) - STATIC */}
      <div
        className="absolute inset-0 z-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Heavy vignette for maximum contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,transparent_0%,#050A15_70%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050A15] via-[#050A15]/90 to-transparent z-0" />

      {/* Main Container - Vertical Split Layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex items-center justify-between gap-12">

        {/* Top Header Section */}
        <div className="w-5/12 flex flex-col h-full justify-center">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-2 py-2">
              ধাপ ৫ // ইনকিউবেশন
            </h2>
            <h1 className="text-5xl font-bold text-white py-2 leading-tight">
              রেণু উৎপাদন
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-transparent mt-4" />
          </motion.div>

          <div className="flex flex-col gap-8">

            {/* Card 1: 20-24 Hours */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative backdrop-blur-2xl bg-slate-900/60 border border-slate-700 p-8 rounded-3xl shadow-[0_10px_40px_rgba(234,179,8,0.1)] hover:border-yellow-500/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -z-10 group-hover:bg-yellow-500/10 transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/20 px-4 py-2 rounded-xl border border-yellow-500/30">
                  <span className="text-2xl font-bold text-yellow-400">২০-২৪ ঘ.</span>
                </div>
                <h3 className="text-2xl font-bold text-white">হ্যাচিং বা ডিম ফোটা</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                নিষিক্ত ডিমগুলো নির্দিষ্ট তাপমাত্রায় রাখার পর মাত্র <strong className="text-yellow-300">২০ থেকে ২৪ ঘণ্টার</strong> মধ্যেই ডিম ফুটে রেণু বা লার্ভা বের হয়ে আসে।
              </p>
            </motion.div>

            {/* Card 2: 72 Hours */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative backdrop-blur-2xl bg-slate-900/60 border border-slate-700 p-8 rounded-3xl shadow-[0_10px_40px_rgba(249,115,22,0.1)] hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -z-10 group-hover:bg-orange-500/10 transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500/20 px-4 py-2 rounded-xl border border-orange-500/30">
                  <span className="text-2xl font-bold text-orange-400">৭২ ঘণ্টা</span>
                </div>
                <h3 className="text-2xl font-bold text-white">কুসুম আহার</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed py-2">
                প্রথম তিন দিন (৭২ ঘণ্টা) রেণু পোনারা পেটের নিচে থাকা <strong className="text-orange-300">কুসুম (Yolk Sac)</strong> খেয়েই বেঁচে থাকে। এ সময় বাইরে থেকে কোনো খাবার দেওয়ার প্রয়োজন হয় না।
              </p>
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN: Massive SVG Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-7/12 h-[700px] flex items-center justify-center relative right-[-50px]"
        >
          <IncubationSystemSVG />
        </motion.div>

      </div>
    </div>
  );
};

export default Slide25;
