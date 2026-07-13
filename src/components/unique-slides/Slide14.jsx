import React from 'react';
import { motion } from 'framer-motion';

export default function Slide14({ direction }) {
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? '100vw' : '-100vw', scale: 0.8 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? '100vw' : '-100vw', scale: 0.8, transition: { duration: 0.5 } })
  };

  const steps = [
    "গর্ভবতী মহিলা বা গাভীর ৪০-১১০ দিনের গর্ভাবস্থার প্রথমার্ধের মূত্র সংগ্রহ করতে হবে।",
    "পরিশ্রুত মূত্রে ১০% HCl যুক্ত করতে হবে, এতে pH এর পরিমাণ ৫ হবে।",
    "১ লিটার মূত্রে ৭০-১০০ মি.লি বেনজোয়িক এসিডের সম্পৃক্ত দ্রবণ এবং ৯৫% অ্যালকোহল মিশ্রিত করে অনবরত নাড়তে হবে।",
    "২৫-৩০ মিনিট পর তলানি হিসেবে জমা হয়।",
    "তলানি পরিস্রাবণ করে ২ বার অ্যালকোহলে ধৌত করে শুকিয়ে সংগ্রহ করতে হবে।"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#2e1065] flex flex-col items-center justify-center p-8 overflow-hidden [perspective:1000px]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #7c3aed 0%, transparent 50%)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="z-10 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 mb-6 drop-shadow-lg py-2 leading-normal">
          H.C.G সংগ্রহ
        </h2>
        <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          গর্ভবতী মহিলা বা পশুর প্রস্রাবের সাথে H.C.G হরমোন নিঃসৃত হয়ে থাকে। এটি সংগ্রহের আধুনিক ধাপগুলো নিচে দেওয়া হলো:
        </p>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        className="flex flex-wrap justify-center gap-6 max-w-7xl z-10"
      >
        {steps.map((step, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            className="w-full md:w-[calc(33.33%-1rem)] bg-purple-900/40 backdrop-blur-md border border-purple-500/30 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group hover:bg-purple-800/60 transition-colors"
          >
            <div className="text-6xl font-black text-purple-950/50 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform">
              0{i+1}
            </div>
            <p className="text-purple-100 text-lg leading-relaxed relative z-10 font-medium">
              {step}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
