import React from 'react';
import { motion } from 'framer-motion';

export default function Slide12({ direction }) {
  const disadvantages = [
    "স্টিপিং এর সময় পেটে খুব আস্তে ও সাবধানে চাপ দিতে হয়।",
    "Brood মাছ সাবধানতার সাথে Handling করতে হয়, নতুবা মাছ মারা যেতে পারে।",
    "স্ত্রী মাছের ২টি ইঞ্জেকশন যেন একই দিকে না পড়ে সেদিকে তীক্ষ্ণ লক্ষ্য রাখতে হবে।",
    "ইনজেকশনের মাত্রা সামান্য কম-বেশি হলে সফল ফলাফল পাওয়া যায় না।",
    "Incubation এবং Cyst tank-এ কম ঘনত্বে রেনু রাখতে হয়, বেশি ঘনত্বে মৃত্যুহার বাড়ে।"
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100, rotate: dir > 0 ? 5 : -5 }),
    center: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 100 : -100, rotate: dir < 0 ? -5 : 5, transition: { duration: 0.5 } })
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#1c1917] flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#1c1917] to-[#1c1917]"></div>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center z-10">
        
        {/* Left Side: Warning Sign */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="w-32 h-32 bg-orange-500/10 rounded-full flex items-center justify-center mb-8 border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            প্রণোদিত প্রজননের <span className="text-orange-500">অসুবিধা</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            প্রণোদিত প্রজনন একটি জটিল প্রক্রিয়া। এ কারণে এর প্রতিটি ক্ষেত্রে যথেষ্ট সাবধানতা অবলম্বন করতে হয়।
          </p>
        </motion.div>

        {/* Right Side: Alert Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="md:w-2/3 flex flex-col gap-4 w-full"
        >
          {disadvantages.map((disadv, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="bg-orange-950/30 border border-orange-900/50 rounded-2xl p-5 flex items-center gap-5 hover:bg-orange-900/30 transition-colors"
            >
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-orange-50 text-lg">
                {disadv}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
