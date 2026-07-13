import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5_Objective({ direction }) {
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 0.9,
      x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring', damping: 25, stiffness: 100 }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.9,
      x: dir < 0 ? '100%' : '-100%',
      transition: { duration: 0.6 }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-slate-950 flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* লক্ষ্য (Goal) Card */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-8 relative overflow-hidden group shadow-2xl shadow-teal-900/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors duration-500"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center border border-teal-500/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-teal-300 py-2 leading-normal">লক্ষ্য</h2>
          </div>
          
          <p className="text-slate-300 text-lg leading-relaxed relative z-10">
            মৎস্য প্রজনন কেন্দ্রের ব্রুড মাছ হতে রেণু (পোনা ও চারা পোনা) উৎপাদনের লক্ষ্যে মাঠ পরিদর্শনের মাধ্যমে মাছের প্রনোদিত প্রজনন-এর ওপর ডকুমেন্টারি তৈরি করা এবং কৃত্রিম পরিবেশে মাছের প্রজনন, ডিম ফুটানো ও পোনার লালন-পালনের গুরুত্ব সম্পর্কে জানা।
          </p>
        </motion.div>

        {/* উদ্দেশ্য (Objective) Card */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 relative overflow-hidden group shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-300 py-2 leading-normal">উদ্দেশ্য</h2>
          </div>
          
          <p className="text-slate-300 text-[1.05rem] leading-relaxed relative z-10">
            মাছের প্রজনন ও পোনা উৎপাদন হাতে-কলমে শেখা এবং মাছ চাষ সম্পর্কে আগ্রহী ছাত্র, গবেষক ও উদ্যোক্তাদের জন্য একটি গুরুত্বপূর্ণ প্ল্যাটফর্ম তৈরি করা। এতে গ্রামীণ দরিদ্র জনগোষ্ঠীর আর্থ-সামাজিক অবস্থার পরিপ্রেক্ষিতে স্বল্প ব্যয়ে ও অল্প জমিতে পরিবেশ উপযোগী উন্নত মৎস্য চাষ ব্যবস্থাপনা প্রযুক্তি উদ্ভাবিত হবে। উন্নত গবেষণা লব্ধ প্রযুক্তি প্রয়োগের মাধ্যমে এই এলাকার মাছের উৎপাদন বৃদ্ধির পাশাপাশি আমিষের চাহিদা পূরণ, গ্রামীণ জনগোষ্ঠীর কর্মসংস্থানের নতুন সুযোগ সৃষ্টি এবং রপ্তানি আয় বৃদ্ধি করা সম্ভব হবে।
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}
