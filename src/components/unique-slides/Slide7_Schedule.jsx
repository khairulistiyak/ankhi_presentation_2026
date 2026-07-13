import React from 'react';
import { motion } from 'framer-motion';

export default function Slide7_Schedule({ direction }) {
  const schedule = [
    { event: "মৎস্য প্রজনন কেন্দ্রের উদ্দেশ্যে যাত্রা (পৌঁছানো)", time: "৯.৩০" },
    { event: "পুকুর পরিদর্শন", time: "১০.০০" },
    { event: "মৎস্য বীজ উৎপাদন খামার পরিদর্শন ও পর্যবেক্ষণ", time: "১০.১৫ - ১০.৪৫\n১০.৫৫ - ১২.০০" },
    { event: "প্রনোদিত প্রজনন সম্পর্কে ধারণা লাভ", time: "১২.০০ - ১.০০" },
    { event: "সমাপ্তি ঘোষণা", time: "১.১০" }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? 50 : -50, transition: { duration: 0.4 } })
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#050b14] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-2xl mb-4 border border-indigo-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 py-2 leading-normal">
            কার্যক্রম ও সময়
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20"
        >
          <div className="grid grid-cols-3 bg-indigo-950/50 p-4 border-b border-indigo-500/30">
            <div className="col-span-2 text-indigo-300 font-bold text-lg px-4 py-2 leading-normal">কার্যক্রম</div>
            <div className="col-span-1 text-indigo-300 font-bold text-lg px-4 py-2 leading-normal border-l border-indigo-500/30">সময়</div>
          </div>
          
          <div className="flex flex-col">
            {schedule.map((item, i) => (
              <motion.div 
                key={i} 
                variants={tableRowVariants}
                className="grid grid-cols-3 border-b border-indigo-500/10 hover:bg-indigo-500/5 transition-colors group"
              >
                <div className="col-span-2 text-slate-300 text-lg px-8 py-5 flex items-center group-hover:text-indigo-200 transition-colors leading-relaxed">
                  {item.event}
                </div>
                <div className="col-span-1 text-cyan-300 text-lg px-8 py-5 flex items-center border-l border-indigo-500/10 font-medium whitespace-pre-line leading-relaxed">
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
