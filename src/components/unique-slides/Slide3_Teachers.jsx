import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3_Teachers({ direction }) {
  const variants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir < 0 ? 100 : -100,
      scale: 0.95,
      transition: { duration: 0.6 }
    })
  };

  const teachers = [
    {
      name: "ড.এ,বি এম মনসুর আলম ইসলাম",
      designation: "সহযোগী অধ্যাপক প্রাণিবিদ্যা বিভাগ",
      img: "/photo/munsur%20alom.jpg",
      color: "from-rose-500/20 to-orange-500/20",
      border: "border-rose-500/30",
      shadow: "shadow-rose-500/20"
    },
    {
      name: "মোছাঃ মাহমুদা খাতুন",
      designation: "প্রভাষক প্রাণিবিদ্যা বিভাগ",
      img: "/photo/mahmuda_madam.jpg",
      color: "from-fuchsia-500/20 to-purple-500/20",
      border: "border-fuchsia-500/30",
      shadow: "shadow-fuchsia-500/20"
    },
    {
      name: "উৎপল কুমার সাহা",
      designation: "প্রভাষক প্রাণিবিদ্যা বিভাগ",
      img: "/photo/utpol.jpg",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      shadow: "shadow-blue-500/20"
    },
    {
      name: "খোন্দকার হাফিজুল আলম",
      designation: "প্রভাষক প্রাণিবিদ্যা বিভাগ",
      img: "/photo/Hafizul%20islam.jpg",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      shadow: "shadow-emerald-500/20"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    show: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-[#0a0f1c] flex flex-col items-center justify-center overflow-hidden [perspective:1000px]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 tracking-wider leading-normal py-3">
            ধন্যবাদ ও কৃতজ্ঞতা
          </h2>
          <div className="h-1 w-32 bg-slate-700 rounded-full mx-auto mt-2"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
        >
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className={`group relative flex flex-col items-center bg-slate-900/60 backdrop-blur-md border ${teacher.border} rounded-[32px] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Dynamic Gradient Background for Card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${teacher.color} rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 ${teacher.border} shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-6 relative z-10 transform group-hover:scale-105 transition-transform duration-500`}>
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10 text-center w-full flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{teacher.name}</h3>
                <p className="text-slate-400 font-medium text-sm mt-auto leading-relaxed">{teacher.designation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
