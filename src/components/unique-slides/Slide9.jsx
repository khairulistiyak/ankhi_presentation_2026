import React from 'react';
import { motion } from 'framer-motion';

export default function Slide9({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 200 : -200, rotateY: dir > 0 ? -30 : 30 }),
    center: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, type: "spring", bounce: 0.3 } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 200 : -200, rotateY: dir < 0 ? -30 : 30, transition: { duration: 0.6 } })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-slate-100 flex items-center justify-center p-8 overflow-hidden [perspective:1000px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-6xl w-full z-10">
        <div className="text-center mb-12">
          <span className="text-rose-500 font-bold uppercase tracking-widest text-sm block mb-2">Dosage Info</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">হরমোন প্রয়োগের মাত্রা</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            হরমোন প্রয়োগের মাত্রা বিভিন্ন মাছের ক্ষেত্রে বিভিন্ন রকম হয়ে থাকে। কার্প জাতীয় মাছের ক্ষেত্রে ইনজেকশন দেওয়ার নিয়ম নিচে দেওয়া হলো।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Female Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[32px] p-10 shadow-xl shadow-rose-900/5 border-t-8 border-rose-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">♀</div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">স্ত্রী মাছ (Female)</h3>
            <div className="space-y-6">
              <div className="bg-rose-50 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-700 mb-2 text-xl">প্রথম ডোজ</h4>
                <p className="text-slate-600">৫ থেকে ৬ মিলি দ্রবণ পুশ করা হয়।</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-2xl">
                <h4 className="font-bold text-rose-700 mb-2 text-xl">দ্বিতীয় ডোজ</h4>
                <p className="text-slate-600">প্রথম ডোজ দেওয়ার ঠিক ৬ ঘন্টা পর দ্বিতীয় ডোজ দেওয়া হয়।</p>
              </div>
            </div>
          </motion.div>

          {/* Male Fish Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[32px] p-10 shadow-xl shadow-blue-900/5 border-t-8 border-blue-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">♂</div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">পুরুষ মাছ (Male)</h3>
            <div className="space-y-6 h-full">
              <div className="bg-blue-50 p-6 rounded-2xl h-full flex flex-col justify-center min-h-[220px]">
                <h4 className="font-bold text-blue-700 mb-2 text-xl">একমাত্র ডোজ</h4>
                <p className="text-slate-600 text-lg">
                  স্ত্রী মাছের দ্বিতীয় ডোজ দেওয়ার সময়েই পুরুষ মাছকে তাদের প্রথম ও একমাত্র ডোজ দেওয়া হয়।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
