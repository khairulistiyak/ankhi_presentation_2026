import React from 'react';
import { motion } from 'framer-motion';

export default function Slide7({ direction }) {
  const materials = [
    "pH মিটার", "Ammonia Kit", "Net", "Magnifying Glass", "Alcohol", "Petridish", "ইত্যাদি"
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? 50 : -50, transition: { duration: 0.4 } })
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#111827] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="text-center z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ব্যবহৃত উপকরণ
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl z-10"
      >
        {materials.map((mat, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
            className="px-6 py-4 md:px-8 md:py-5 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl shadow-black/50 text-xl md:text-2xl font-medium text-pink-100 flex items-center justify-center cursor-default"
          >
            {mat}
          </motion.div>
        ))}
      </motion.div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </motion.div>
  );
}
