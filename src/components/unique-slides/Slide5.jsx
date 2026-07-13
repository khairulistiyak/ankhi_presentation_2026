import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5({ direction }) {
  const steps = [
    { title: "ব্রুড মাছ নির্বাচন", desc: "2-3 বছরের সুস্থ স্ত্রী ও পুরুষ কার্প মাছ বাছাই করা হয়।" },
    { title: "উপযুক্ত সময়", desc: "বর্ষাকাল, আষাঢ়-শ্রাবণ মাস। মেঘলা ও ঠান্ডা আবহাওয়া লাগে।" },
    { title: "Hormone Injection", desc: "স্ত্রী মাছে 2 ডোজ PG হরমোন, পুরুষ মাছে 1 ডোজ। ইনজেকশন দেওয়া হয় পাখনার গোড়ায় বা পার্শ্ব-রেখায়।" },
    { title: "নিষিক্তকরণ", desc: "5-6 ঘন্টা পর ডিম ও শুক্রাণু বের হয়ে হাতে মিশিয়ে নিষিক্ত করা হয়। ডিম Hapa-তে রাখা হয়।" },
    { title: "Renu উৎপাদন", desc: "20-24 ঘন্টায় ডিম ফুটে Renu Larva বের হয়। এরা প্রথম 72 ঘন্টা কুসুম খেয়ে বাঁচে।" },
    { title: "Renu পালন", desc: "Cistern Tank-এ রাখা হয়। 6 ঘন্টা পর পর কুসুম দেওয়া হয়। 72 ঘন্টা পর Nursery পুকুরে স্থানান্তর।" }
  ];

  const variants = {
    enter: (dir) => ({ y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } },
    exit: (dir) => ({ y: dir < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.5 } })
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    show: { scale: 1, opacity: 1, y: 0, transition: { type: "spring" } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute top-0 w-full h-1/2 bg-emerald-900/20 rounded-b-full blur-3xl -translate-y-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-12 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-500 mb-4 py-2 leading-normal">
          কৃত্রিম প্রজননের ধাপসমূহ
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          একটি সফল কৃত্রিম প্রজনন প্রক্রিয়ার জন্য নিচের ৬টি গুরুত্বপূর্ণ ধাপ অনুসরণ করা হয়।
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full z-10"
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-700/50 transition-colors"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 mt-2 pl-4">{step.title}</h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
