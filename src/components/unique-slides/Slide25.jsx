import React from 'react';
import { motion } from 'framer-motion';

const Slide25 = () => {
  // Staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const benefits = [
    {
      id: "০১",
      title: "দ্রুত ও বিপুল উৎপাদন",
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "খুব অল্প সময়ে এবং সীমিত জায়গায় একসাথে প্রচুর পরিমাণে উন্নত জাতের পোনা উৎপাদন করা যায়।"
    },
    {
      id: "০২",
      title: "নিশ্চিত প্রাপ্যতা",
      color: "from-purple-400 to-pink-500",
      shadow: "shadow-purple-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: "প্রাকৃতিকভাবে নদী থেকে পোনা সংগ্রহের অনিশ্চয়তা দূর হয় এবং চাহিদা অনুযায়ী নির্দিষ্ট সময়ে পোনা পাওয়া যায়।"
    },
    {
      id: "০৩",
      title: "উন্নত ও সুস্থ পোনা",
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "ইনব্রিডিং বা বংশগত ত্রুটিমুক্ত, রোগ প্রতিরোধ ক্ষমতাসম্পন্ন ও দ্রুত বর্ধনশীল সুস্থ পোনা পাওয়া নিশ্চিত হয়।"
    },
    {
      id: "০৪",
      title: "শিল্পের স্বাবলম্বিতা",
      color: "from-orange-400 to-rose-500",
      shadow: "shadow-orange-500/20",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "পোনা প্রাপ্তির জন্য প্রাকৃতিক উৎসের ওপর নির্ভরশীলতা সম্পূর্ণ হ্রাস পায়, যা মৎস্য শিল্পকে স্বাবলম্বী করে তোলে।"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-10 bg-[#050B14] relative overflow-hidden font-sans">
      
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
        
        {/* Left Column: Title & Intro Animation */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight flex flex-col gap-2">
              প্রণোদিত প্রজননের 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 leading-normal py-3">
                ৪টি প্রধান সুবিধা
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mt-4 leading-relaxed max-w-md">
              আধুনিক মৎস্যচাষে কৃত্রিম প্রজনন প্রযুক্তি ব্যবহারের মাধ্যমে মাছের পোনা উৎপাদনে বৈপ্লবিক পরিবর্তন এসেছে।
            </p>
          </motion.div>

          {/* Abstract Floating Graphic for Left Column */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex w-full h-48 mt-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[40px] blur-2xl" />
            <div className="absolute inset-4 bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden flex items-center justify-center">
              {/* Animated rings */}
              <div className="absolute w-32 h-32 border border-blue-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute w-24 h-24 border border-emerald-500/40 rounded-full animate-pulse" />
              <svg className="w-10 h-10 text-cyan-300 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Modern Animated Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 overflow-y-auto pb-4 custom-scrollbar items-center"
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
          `}</style>

          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group rounded-3xl overflow-hidden cursor-default"
            >
              {/* Outer Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Inner Card */}
              <div className="absolute inset-[1px] bg-[#0A1322] rounded-[23px] z-10 flex flex-col p-5 md:p-6" />
              
              {/* Card Content Overlay */}
              <div className="relative z-20 flex flex-col h-full p-5 md:p-6">
                
                {/* Header (Icon + Title) */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg ${benefit.shadow} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-100 leading-tight">
                    {benefit.title}
                  </h2>
                </div>
                

                
                {/* Text Content */}
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {benefit.text}
                </p>
                
                {/* Background Number Watermark */}
                <div className="absolute bottom-[-10px] right-2 text-7xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                  {benefit.id}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Slide25;
