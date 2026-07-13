import React from 'react';
import { motion } from 'framer-motion';

export default function Slide4_Group({ direction }) {
  const members = [
    { name: "মোছাঃ শিলা খাতুন", reg: "২৮২" },
    { name: "সীমা খাতুন", reg: "২৮৩" },
    { name: "মোছাঃ সোনিয়া আক্তার হিরা", reg: "২৮৪" },
    { name: "ইসমাত জাহান", reg: "২৮৫" },
    { name: "কানিজ মরিয়ম", reg: "২৮৭" },
    { name: "ফাহিমা খাতুন", reg: "২৮৮" },
    { name: "অর্থি পাল", reg: "২৮৯" },
    { name: "সূপর্ণা কর্মকার", reg: "২৯০" },
    { name: "লোপা সূত্রধর", reg: "২৯১" },
    { name: "মো: আনোয়ার হোসেন", reg: "২৯২" },
    { name: "মোছাঃ কুলসুম আক্তার", reg: "২৯৯" },
    { name: "মোছাঃ শাকিলা খাতুন", reg: "৩০০" },
    { name: "মোছাঃ জেসমিন আক্তার জেরিন", reg: "৩০৩" },
    { name: "জান্নাতুল ফেরদৌস", reg: "৩০৬" },
    { name: "মোছাঃ হালিমা খাতুন", reg: "৩১১" },
    { name: "আমেনা আক্তার আঁখি", reg: "৩১৪" }
  ];

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 0.9,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.9,
      x: dir < 0 ? 100 : -100,
      transition: { duration: 0.6 }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#082f49] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Group - B
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-normal py-1">
            গ্রুপ পরিচিতি
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {members.map((member, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group relative bg-sky-950/40 backdrop-blur-sm border border-sky-800/50 rounded-2xl p-4 flex items-center justify-between hover:bg-sky-800/40 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg leading-snug group-hover:text-sky-300 transition-colors">
                  {member.name}
                </span>
                <span className="text-sky-500 text-sm mt-1">
                  রেজি: {member.reg}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-400 font-bold border border-sky-700/50 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
