import React from 'react';
import { motion } from 'framer-motion';

// --- Clean Architectural Cross-Section of Cistern Tank ---
const CisternTankCrossSectionSVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      <svg viewBox="0 0 800 600" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(14, 165, 233, 0.15))' }}>
        <defs>
          <linearGradient id="tankWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waterFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- Blueprint Background Grid --- */}
        <g opacity="0.1">
          {[...Array(20)].map((_, i) => (
            <line key={`vGrid-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" stroke="#38bdf8" strokeWidth="1" />
          ))}
          {[...Array(15)].map((_, i) => (
            <line key={`hGrid-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#38bdf8" strokeWidth="1" />
          ))}
        </g>

        {/* --- Measurements & Architecture Dimensions --- */}
        <g opacity="0.5" stroke="#94a3b8" strokeWidth="1">
          <line x1="80" y1="130" x2="80" y2="470" />
          <polyline points="75,140 80,130 85,140" fill="none" />
          <polyline points="75,460 80,470 85,460" fill="none" />
          
          <line x1="130" y1="520" x2="670" y2="520" />
          <polyline points="140,515 130,520 140,525" fill="none" />
          <polyline points="660,515 670,520 660,525" fill="none" />
        </g>
        <text x="35" y="310" fill="#94a3b8" fontSize="14" transform="rotate(-90 35 310)">গভীরতা ১.৫ মি.</text>
        <text x="370" y="540" fill="#94a3b8" fontSize="14">ব্যাস: ৩.০ মিটার</text>

        {/* --- Main Tank Structure (Cross Section) --- */}
        {/* Tank Water */}
        <path d="M 150 150 L 650 150 L 650 480 Q 400 520 150 480 Z" fill="url(#waterFill)" />
        
        {/* Water Surface Line (Animated Wave) */}
        <motion.path 
          d="M 150 150 Q 275 140, 400 150 T 650 150" 
          fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5"
          animate={{ d: [
            "M 150 150 Q 275 140, 400 150 T 650 150",
            "M 150 150 Q 275 160, 400 150 T 650 150",
            "M 150 150 Q 275 140, 400 150 T 650 150"
          ]}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tank Walls */}
        <path d="M 130 100 L 150 100 L 150 480 Q 400 520 650 480 L 650 100 L 670 100 L 670 490 Q 400 540 130 490 Z" fill="url(#tankWall)" stroke="#7dd3fc" strokeWidth="1" />
        {/* Tank Rim Highlights */}
        <rect x="120" y="90" width="40" height="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
        <rect x="640" y="90" width="40" height="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />

        {/* --- Internal Mechanics: Oxygen Diffuser System --- */}
        {/* Diffuser Pipe */}
        <rect x="395" y="495" width="10" height="40" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Diffuser Base / Stone */}
        <ellipse cx="400" cy="495" rx="40" ry="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="400" cy="490" rx="30" ry="5" fill="#1e293b" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="2,2" />

        {/* Animated Oxygen Bubbles */}
        <g>
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={`bubble-${i}`}
              cx={400 + (Math.random() * 60 - 30)}
              cy={490}
              r={1 + Math.random() * 3}
              fill="url(#bubbleGradient)"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -340 - (Math.random() * 50), opacity: [0, 0.8, 0] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeIn", delay: Math.random() * 2 }}
            />
          ))}
        </g>

        {/* --- Fish Fry (Architectural Vectors) --- */}
        <g>
          {[...Array(8)].map((_, i) => {
            const startX = 200 + Math.random() * 400;
            const startY = 200 + Math.random() * 200;
            const moveX = (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 50);
            return (
              <motion.g 
                key={`fry-${i}`}
                initial={{ x: startX, y: startY }}
                animate={{ x: startX + moveX, y: startY + (Math.random() * 20 - 10) }}
                transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                {/* Fry Body */}
                <path d={`M 0 0 Q ${moveX > 0 ? '-10' : '10'} -5, ${moveX > 0 ? '-20' : '20'} 0 Q ${moveX > 0 ? '-10' : '10'} 5, 0 0 Z`} fill="rgba(253,224,71,0.8)" stroke="#fef08a" strokeWidth="0.5" />
                {/* Yolk Sac (small) */}
                <ellipse cx={moveX > 0 ? '-8' : '8'} cy="3" rx="4" ry="2" fill="#f59e0b" opacity="0.6" />
                {/* Eye */}
                <circle cx={moveX > 0 ? '-3' : '3'} cy="-1" r="1" fill="#000" />
              </motion.g>
            );
          })}
        </g>

        {/* --- Feeding Mechanism (Top Center) --- */}
        <g transform="translate(400, 30)">
          <path d="M -20 0 L 20 0 L 10 40 L -10 40 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <rect x="-30" y="-10" width="60" height="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="0" cy="15" r="4" fill="#f59e0b" className="animate-pulse" />
          
          {/* Animated Falling Food (every few seconds to simulate periodic feeding) */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={`food-${i}`}
              cx={(Math.random() * 10 - 5)}
              cy={40}
              r="2"
              fill="#fbbf24"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </g>

        {/* --- Architectural Callouts (Bengali) --- */}
        
        {/* Oxygen System Callout */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <polyline points="430,490 520,430 610,430" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="430" cy="490" r="4" fill="#38bdf8" />
          <rect x="610" y="410" width="160" height="36" fill="#050A15" />
          <rect x="610" y="410" width="160" height="36" fill="rgba(2,132,199,0.2)" stroke="#38bdf8" strokeWidth="1" />
          <text x="625" y="434" fill="#bae6fd" fontSize="16" fontWeight="bold">অক্সিজেন ডিফিউজার</text>
        </motion.g>

        {/* Feeding System Callout */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <polyline points="380,20 280,60 80,60" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="380" cy="20" r="4" fill="#f59e0b" />
          <rect x="60" y="42" width="180" height="36" fill="#050A15" />
          <rect x="60" y="42" width="180" height="36" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
          <text x="75" y="66" fill="#fde68a" fontSize="16" fontWeight="bold">৬ ঘণ্টা পর পর খাবার</text>
        </motion.g>

        {/* System Title */}
        <rect x="560" y="20" width="220" height="70" fill="#050A15" />
        <rect x="560" y="20" width="220" height="70" fill="rgba(2,132,199,0.1)" stroke="#38bdf8" strokeWidth="1" />
        <text x="580" y="48" fill="#e0f2fe" fontSize="18" fontWeight="bold">সিস্টার্ন ট্যাংক সিস্টেম</text>
        <text x="580" y="70" fill="#7dd3fc" fontSize="14">নার্সিং ফেজ | ধাপ ৬</text>

      </svg>
    </div>
  );
};

const Slide26 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Background Static Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520658428581-2292f3a61c33?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#050A15]/90 to-[#082f49]/80 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex flex-col justify-between">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end border-b border-sky-900/50 pb-4 mb-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-2 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              ধাপ ৬ // নার্সিং ও পরিচর্যা
            </h2>
            <h1 className="text-4xl font-bold text-white leading-tight">
              রেণু পালন ও পরিচর্যা
            </h1>
          </div>
        </motion.div>

        {/* Content Layout: 3 Columns with SVG in the center */}
        <div className="flex-1 grid grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Panel: Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-3 flex flex-col gap-6 justify-center h-full"
          >
            {/* Fact 1 */}
            <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/80 p-6 rounded-3xl shadow-[0_10px_30px_rgba(14,165,233,0.15)] relative overflow-hidden group hover:border-sky-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-bl-full -z-10 group-hover:bg-sky-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/50">
                  <span className="text-sky-400 font-bold text-xl">১</span>
                </div>
                <h3 className="text-xl font-bold text-sky-300">কম ঘনত্ব</h3>
              </div>
              <p className="text-md text-slate-300 leading-relaxed">
                রেণুকে সিস্টার্ন ট্যাংকে বা ইনকিউবেটরে <strong className="text-sky-300">কম ঘনত্বে</strong> রাখা হয়, যাতে তারা পর্যাপ্ত জায়গা ও অক্সিজেন পায় এবং সুস্থ থাকে।
              </p>
            </div>
          </motion.div>

          {/* Center Panel: Architectural SVG Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="col-span-6 h-[500px] flex items-center justify-center relative"
          >
            <div className="w-full h-full backdrop-blur-md bg-[#050A15]/50 border border-sky-900 rounded-[20px] shadow-[inset_0_0_50px_rgba(14,165,233,0.05)] overflow-hidden">
              <CisternTankCrossSectionSVG />
            </div>
          </motion.div>

          {/* Right Panel: Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-3 flex flex-col gap-6 justify-center h-full"
          >
            {/* Fact 2 */}
            <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/80 p-6 rounded-3xl shadow-[0_10px_30px_rgba(245,158,11,0.15)] relative overflow-hidden group hover:border-amber-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-br-full -z-10 group-hover:bg-amber-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                  <span className="text-amber-400 font-bold text-xl">২</span>
                </div>
                <h3 className="text-xl font-bold text-amber-300">নিয়মিত আহার</h3>
              </div>
              <p className="text-md text-slate-300 leading-relaxed">
                প্রথমদিকে <strong className="text-amber-300">৬ ঘণ্টা পর পর</strong> কুসুম খাবার (যেমন: ডিমের কুসুম) দেওয়া হয়, যা রেণুর দ্রুত বৃদ্ধিতে সাহায্য করে।
              </p>
            </div>

            {/* Fact 3 */}
            <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/80 p-6 rounded-3xl shadow-[0_10px_30px_rgba(16,185,129,0.15)] relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-br-full -z-10 group-hover:bg-emerald-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                  <span className="text-emerald-400 font-bold text-xl">৩</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-300">পুকুরে স্থানান্তর</h3>
              </div>
              <p className="text-md text-slate-300 leading-relaxed">
                ট্যাংকে পরিচর্যার <strong className="text-emerald-300">৭২ ঘণ্টা পর</strong> এদেরকে সাবধানে সরাসরি নার্সারি পুকুরে স্থানান্তর করা হয়।
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide26;
