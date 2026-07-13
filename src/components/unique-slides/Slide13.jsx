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
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  // Pop-in with slight rotation (placing on lab table) as per Custom Animation Plan
  const materialVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    }
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/Scientific%20laboratory%20equipment,%20syringes,%20and%20glass%20vials%20used%20in%20a%20clean%20scientific%20setting,%20blue%20tint?width=800&height=1200&nologo=true";

  const materials = [
    { title: "সংরক্ষিত P.G ও H.C.G হরমোন", icon: "🧪", color: "from-blue-400 to-indigo-500", delay: 0 },
    { title: "সিরিঞ্জ, টেস্টটিউব, বিকার ও পাত্র", icon: "💉", color: "from-teal-400 to-emerald-500", delay: 0.1 },
    { title: "সেন্ট্রিফিউজ (Centrifuge)", icon: "⚙️", color: "from-amber-400 to-orange-500", delay: 0.2 },
  ];

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#060B14] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans"
    >
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none scale-110"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px) saturate(150%)',
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[800px] items-center"
      >
        
        {/* Left Column (Content & Lab Items) */}
        <div className="lg:col-span-7 flex flex-col gap-8 h-full justify-center">
          
          {/* Title Box */}
          <motion.div 
            variants={materialVariants}
            className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] p-8 border border-white/50 dark:border-white/5 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                ল্যাবরেটরি উপকরণ (পর্ব ১)
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-[1.2] tracking-tight">
              প্রণোদিত প্রজননে 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 py-1 inline-block">
                ব্যবহৃত উপকরণ
              </span>
            </h2>
          </motion.div>

          {/* Interactive Material Grid */}
          <div className="grid grid-cols-1 gap-4">
            {materials.map((item, index) => (
              <motion.div 
                key={index}
                variants={materialVariants}
                className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-2xl p-4 md:p-6 border border-white/60 dark:border-white/5 shadow-md flex items-center gap-6 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-all cursor-default"
              >
                {/* Icon Container with Lab Placement Animation */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg shrink-0 relative overflow-hidden`}>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_50%)] mix-blend-overlay"
                  />
                  <span className="text-3xl relative z-10">{item.icon}</span>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Static Image) */}
        <motion.div 
          variants={materialVariants}
          className="lg:col-span-5 rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgb(0,0,0,0.15)] border border-white/20 dark:border-white/5 h-[400px] lg:h-full group"
        >
          {/* STATIC Image Rule */}
          <div 
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url('${bgImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Lab Equipment</span>
            </div>
            <p className="text-white text-sm font-light leading-relaxed">
              সফল প্রণোদিত প্রজননের জন্য ল্যাবরেটরিতে প্রয়োজনীয় উপকরণের উপস্থিতি অত্যাবশ্যক।
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Slide13;
