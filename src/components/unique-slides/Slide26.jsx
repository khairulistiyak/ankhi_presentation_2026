import React from 'react';
import { motion } from 'framer-motion';

const Slide26 = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
  };

  const svgLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-10 bg-[#040810] relative overflow-hidden font-sans">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center mb-8 lg:mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-400 text-xs font-mono tracking-widest mb-3">
            প্রক্রিয়া উন্নয়ন
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            <span className="text-rose-400">চ্যালেঞ্জ</span> 
            <span className="text-slate-500 mx-4 text-2xl md:text-4xl">ও</span> 
            <span className="text-emerald-400">সমাধান</span>
          </h1>
        </motion.div>

        {/* Main Content Split: Challenge -> SVG -> Solution */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full relative"
        >
          
          {/* Left Column: Challenges (Red/Orange Theme) */}
          <motion.div 
            variants={cardVariants}
            className="w-full lg:w-[40%] bg-gradient-to-br from-[#1A0B0F] to-slate-950 border border-rose-500/20 rounded-3xl p-6 md:p-8 relative shadow-[0_10px_40px_rgba(244,63,94,0.1)] group"
          >
            {/* Decorative Corner Glow */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rose-100">চ্যালেঞ্জসমূহ</h2>
            </div>
            
            <p className="text-slate-400 text-sm mb-4">প্রণোদিত প্রজনন প্রক্রিয়ায় কিছু বড় চ্যালেঞ্জ রয়েছে, যেমন—</p>
            
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-lg border border-rose-500/10">
                <span className="text-rose-500 mt-0.5">⊗</span>
                <span className="text-rose-200/90 text-sm">উৎস পানির দূষণ</span>
              </li>
              <li className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-lg border border-rose-500/10">
                <span className="text-rose-500 mt-0.5">⊗</span>
                <span className="text-rose-200/90 text-sm">হঠাৎ তাপমাত্রার পরিবর্তন</span>
              </li>
              <li className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-lg border border-rose-500/10">
                <span className="text-rose-500 mt-0.5">⊗</span>
                <span className="text-rose-200/90 text-sm">পোনার মড়ক বা বিভিন্ন ব্যাকটেরিয়া ও ফাঙ্গাসজনিত রোগব্যাধি</span>
              </li>
              <li className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-lg border border-rose-500/10">
                <span className="text-rose-500 mt-0.5">⊗</span>
                <span className="text-rose-200/90 text-sm">গুণগত ব্রুড খাদ্যের অভাব</span>
              </li>
            </ul>
          </motion.div>


          {/* Center Column: Unique Animated SVG Connector (Desktop only) */}
          <div className="hidden lg:flex w-[20%] h-[300px] items-center justify-center relative">
            <svg viewBox="0 0 200 300" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradientLine" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#f43f5e" /> {/* Rose */}
                  <stop offset="50%" stopColor="#3b82f6" /> {/* Blue */}
                  <stop offset="100%" stopColor="#10b981" /> {/* Emerald */}
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Base thin track */}
              <path d="M 0 150 C 50 150, 100 50, 150 150 S 150 250, 200 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Animated glowing path */}
              <motion.path 
                d="M 0 150 C 50 150, 100 50, 150 150 S 150 250, 200 150" 
                fill="none" 
                stroke="url(#gradientLine)" 
                strokeWidth="4"
                filter="url(#glow)"
                variants={svgLineVariants}
              />

              {/* Animated processing nodes */}
              <motion.circle cx="100" cy="50" r="8" fill="#3b82f6" filter="url(#glow)" 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} 
              />
              <motion.circle cx="150" cy="150" r="6" fill="#10b981" filter="url(#glow)" 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} 
              />
              
              {/* Particles traveling along the path */}
              <motion.circle r="4" fill="#fff" filter="url(#glow)">
                <animateMotion 
                  dur="3s" 
                  repeatCount="indefinite" 
                  path="M 0 150 C 50 150, 100 50, 150 150 S 150 250, 200 150" 
                />
              </motion.circle>
              <motion.circle r="3" fill="#67e8f9">
                <animateMotion 
                  dur="4s" 
                  begin="1.5s"
                  repeatCount="indefinite" 
                  path="M 0 150 C 50 150, 100 50, 150 150 S 150 250, 200 150" 
                />
              </motion.circle>
            </svg>
            
            {/* Processing Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-[11px] text-slate-300 font-bold tracking-widest">সমাধান প্রক্রিয়া</span>
            </div>
          </div>

          {/* Mobile divider (hidden on desktop) */}
          <div className="w-full flex lg:hidden justify-center my-2">
            <svg className="w-6 h-6 text-slate-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Right Column: Solutions (Green Theme) */}
          <motion.div 
            variants={cardVariants}
            className="w-full lg:w-[40%] bg-gradient-to-br from-[#061A14] to-slate-950 border border-emerald-500/20 rounded-3xl p-6 md:p-8 relative shadow-[0_10px_40px_rgba(16,185,129,0.1)] group"
          >
            {/* Decorative Corner Glow */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-emerald-100">একমাত্র সমাধান</h2>
            </div>
            
            <p className="text-slate-400 text-sm mb-4">এসব চ্যালেঞ্জ মোকাবিলার একমাত্র সমাধান হলো—</p>

            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-emerald-100 text-sm">উন্নত পানি পরিশোধন ব্যবস্থা (যেমন: ফিল্টারিং ও অ্যারেশন)</span>
              </li>
              <li className="flex items-start gap-3 bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-emerald-100 text-sm">হ্যাচারিতে কঠোর বায়োসিকিউরিটি বা রোগ প্রতিরোধ ব্যবস্থা গড়ে তোলা</span>
              </li>
              <li className="flex items-start gap-3 bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-emerald-100 text-sm">নিয়মিত ল্যাব টেস্টের মাধ্যমে পানির মান বজায় রাখা</span>
              </li>
              <li className="flex items-start gap-3 bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span className="text-emerald-100 text-sm">ব্রুড মাছকে সুষম ও ভিটামিনসমৃদ্ধ পুষ্টিকর খাবার প্রদান করা</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Slide26;
