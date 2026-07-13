import React from 'react';
import { motion } from 'framer-motion';

export default function Slide6({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.5, rotate: dir > 0 ? 10 : -10 }),
    center: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: "spring" } },
    exit: (dir) => ({ opacity: 0, scale: 1.5, rotate: dir < 0 ? 10 : -10, transition: { duration: 0.6 } })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#f8fafc] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-transparent to-transparent"></div>
      
      <div className="relative max-w-4xl text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white -rotate-12" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-8 uppercase tracking-widest mt-4">
            ফলাফল ও অর্জন
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800 leading-normal">
            "এই ভিজিট থেকে ব্যবহারিকভাবে জানতে পেরেছি কিভাবে ডিম থেকে <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 pb-2 inline-block">Renu Pona</span> এবং <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 pb-2 inline-block">Chara Pona</span> উৎপাদন করা হয় ও তাদের যত্ন নিতে হয়।"
          </h3>
        </motion.div>
      </div>

      {/* Decorative floating shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-orange-300/30 rounded-full blur-3xl"
      />
    </motion.div>
  );
}
