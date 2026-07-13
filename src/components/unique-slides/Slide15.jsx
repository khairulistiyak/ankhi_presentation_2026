import React from 'react';
import { motion } from 'framer-motion';

export default function Slide15({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 2, filter: 'blur(30px)' }),
    center: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, scale: 0.5, filter: 'blur(30px)', transition: { duration: 0.8 } })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-black flex items-center justify-center p-8 overflow-hidden text-center"
    >
      {/* Epic particle background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[80px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-400 mb-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-12 tracking-tight py-2 leading-normal">
            উপসংহার
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-[40px] opacity-20 blur-lg"></div>
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 md:p-16 shadow-2xl relative">
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed md:leading-loose font-light">
              পরিশেষে বলা যায়, <span className="text-white font-bold">নাটোর মৎস্য বীজ উৎপাদন খামার</span> দেশের আমিষের চাহিদা পূরণে গুরুত্বপূর্ণ ভূমিকা রাখছে। বৈজ্ঞানিক পদ্ধতিতে পোনা উৎপাদন মৎস্য চাষের ভিত্তি। 
              <br/><br/>
              এই ধরনের শিক্ষা সফর আমাদের পাঠ্যবইয়ের তাত্ত্বিক জ্ঞানকে বাস্তব অভিজ্ঞতার সাথে মিলিয়ে দিয়েছে, যা আমাদের ভবিষ্যৎ গবেষণা ও কর্মজীবনে ব্যাপক সহায়ক হবে।
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 text-slate-500 uppercase tracking-[0.3em] text-sm font-bold"
        >
          Thank You
        </motion.div>
      </div>
    </motion.div>
  );
}
