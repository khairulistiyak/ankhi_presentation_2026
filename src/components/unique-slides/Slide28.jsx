import React from 'react';
import { motion } from 'framer-motion';

const Slide28 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const points = [
    {
      id: "০১",
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-500/10 border-blue-500/20",
      text: "আধুনিক মৎস্য প্রজননে উন্নত প্রযুক্তি ও বৈজ্ঞানিক কলাকৌশল ব্যবহারের ফলে মাছের পোনা উৎপাদন ও মৎস্য চাষে এক বৈপ্লবিক সাফল্য অর্জিত হয়েছে।"
    },
    {
      id: "০২",
      color: "from-teal-400 to-teal-600",
      bg: "bg-teal-500/10 border-teal-500/20",
      text: "মাছের প্রাকৃতিক উৎসের ঘাটতি পূরণে এবং বাণিজ্যিক মৎস্য চাষের প্রসারে প্রণোদিত প্রজনন প্রথা এককভাবে সবচেয়ে ফলপ্রসূ অবদান রাখছে।"
    },
    {
      id: "০৩",
      color: "from-emerald-400 to-emerald-600",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      text: "সঠিক বৈজ্ঞানিক পদ্ধতি ও আধুনিক যন্ত্রপাতির মেলবন্ধনে হ্যাচারিগুলোতে পোনা বেঁচে থাকার হার বহুগুণ বাড়ানো সম্ভব হয়েছে।"
    },
    {
      id: "০৪",
      color: "from-amber-400 to-amber-600",
      bg: "bg-amber-500/10 border-amber-500/20",
      text: "সামগ্রিক মৎস্য খাতের টেকসই উন্নয়নের জন্য হ্যাচারি টেকনিশিয়ান ও কর্মকর্তাদের হরমোন প্রয়োগের সঠিক মাত্রা, ইনজেকশন প্রদানের নিয়ম এবং প্রজননকালীন পরিবেশ ব্যবস্থাপনার ওপর সঠিক ও বাস্তবমুখী জ্ঞান থাকা অত্যন্ত জরুরি।"
    }
  ];

  return (
    <div className="w-full h-full bg-[#030611] text-white overflow-hidden relative font-sans flex items-center justify-center p-6 lg:p-12">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <defs>
            <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-[-10%] w-[50%] h-[60%] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[50%] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-4 lg:mb-8 border-b border-white/5 pb-4"
        >
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
            <span className="text-amber-300 font-bold tracking-widest text-[11px] uppercase">
              সমাপ্তি
            </span>
          </div>
          <span className="text-[11px] text-slate-400 border border-slate-700/50 bg-slate-900/50 px-3 py-1 rounded-full font-mono">28 / 28</span>
        </motion.div>

        {/* Content Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Column: Animated Conclusion Cards */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col gap-5 h-full justify-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-200 pb-2 mb-2 leading-tight"
            >
              উপসংহার
            </motion.h1>

            {points.map((point, index) => (
              <motion.div
                key={point.id}
                variants={itemVariants}
                whileHover={{ scale: 1.015, x: 5 }}
                className={`flex gap-4 items-start p-5 rounded-2xl border backdrop-blur-md transition-colors duration-300 ${point.bg} hover:bg-opacity-20 relative overflow-hidden group`}
              >
                {/* Number Badge */}
                <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center font-bold text-lg text-white shadow-lg`}>
                  {point.id}
                </div>
                
                {/* Text Content */}
                <p className="text-slate-300 text-[15px] md:text-base leading-relaxed font-light pt-0.5">
                  {point.text}
                </p>

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl rounded-full mix-blend-overlay" />
              </motion.div>
            ))}

          </motion.div>

          {/* Right Column: Unique Conceptual SVG (Success / Growth / Network Tree) */}
          <div className="lg:col-span-5 w-full h-[400px] lg:h-full relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="w-full max-w-[450px] aspect-square relative rounded-[40px] bg-gradient-to-b from-[#0a1226]/80 to-[#040812]/80 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden flex items-center justify-center"
            >
              {/* Complex Architectural SVG */}
              <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="treeGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                  </linearGradient>
                  
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>

                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base Circles */}
                <circle cx="250" cy="250" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="1" />
                <circle cx="250" cy="250" r="160" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 6" />
                <circle cx="250" cy="250" r="120" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.1" />

                {/* Concentric expanding ripples (Animated) */}
                <circle cx="250" cy="400" r="10" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.5">
                  <animate attributeName="r" values="10; 150" dur="4s" repeatCount="indefinite" opacity="1" />
                  <animate attributeName="opacity" values="0.8; 0" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Abstract Data Tree / Network structure */}
                <g stroke="url(#treeGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#neonGlow)">
                  {/* Trunk */}
                  <path d="M 250 400 L 250 300" />
                  
                  {/* Main Branches */}
                  <path d="M 250 300 L 180 230" />
                  <path d="M 250 300 L 320 230" />
                  <path d="M 250 300 L 250 200" />
                  
                  {/* Sub Branches Left */}
                  <path d="M 180 230 L 140 170" />
                  <path d="M 180 230 L 190 150" />
                  
                  {/* Sub Branches Right */}
                  <path d="M 320 230 L 360 170" />
                  <path d="M 320 230 L 310 150" />
                  
                  {/* Top Branches */}
                  <path d="M 250 200 L 210 120" />
                  <path d="M 250 200 L 290 120" />
                  <path d="M 250 200 L 250 100" />
                </g>

                {/* Nodes / Success Points */}
                <g fill="#fbbf24">
                  <circle cx="250" cy="300" r="6" fill="#3b82f6" />
                  
                  <circle cx="180" cy="230" r="5" fill="#10b981" />
                  <circle cx="320" cy="230" r="5" fill="#10b981" />
                  <circle cx="250" cy="200" r="5" fill="#10b981" />
                  
                  {/* Leaf Nodes */}
                  <circle cx="140" cy="170" r="8" filter="url(#neonGlow)" />
                  <circle cx="190" cy="150" r="6" />
                  <circle cx="360" cy="170" r="8" filter="url(#neonGlow)" />
                  <circle cx="310" cy="150" r="6" />
                  <circle cx="210" cy="120" r="7" />
                  <circle cx="290" cy="120" r="7" />
                  <circle cx="250" cy="100" r="10" filter="url(#neonGlow)" />
                </g>

                {/* Tech Data Overlay */}
                <rect x="50" y="50" width="80" height="30" fill="#0f172a" fillOpacity="0.8" stroke="#fbbf24" strokeOpacity="0.3" rx="4" />
                <text x="60" y="65" fill="#94a3b8" fontSize="10">সফলতার হার</text>
                <text x="60" y="75" fill="#fbbf24" fontSize="10" fontWeight="bold">+৯৮% বৃদ্ধি</text>

                <rect x="370" y="380" width="80" height="30" fill="#0f172a" fillOpacity="0.8" stroke="#10b981" strokeOpacity="0.3" rx="4" />
                <text x="380" y="395" fill="#94a3b8" fontSize="10">টেকসই উৎপাদন</text>
                <text x="380" y="405" fill="#10b981" fontSize="10" fontWeight="bold">সম্পন্ন</text>

                {/* Orbital floating data packets (Animated) */}
                <g>
                  <circle cx="0" cy="0" r="3" fill="#38bdf8" filter="url(#neonGlow)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 250 400 A 150 150 0 1 1 249.9 400" />
                  </circle>
                  <circle cx="0" cy="0" r="3" fill="#fbbf24" filter="url(#neonGlow)">
                    <animateMotion dur="8s" repeatCount="indefinite" path="M 250 100 A 100 100 0 1 0 249.9 100" />
                  </circle>
                </g>

                {/* Grid Floor */}
                <path d="M 100 450 L 400 450 M 150 470 L 350 470 M 200 490 L 300 490" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slide28;
