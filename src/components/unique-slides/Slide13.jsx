import React from 'react';
import { motion } from 'framer-motion';

export default function Slide13({ direction }) {
  const steps = [
    { title: "মস্তক ব্যবচ্ছেদ", desc: "২-৩ বছর বয়সী রুই জাতীয় মাছের মস্তক অঞ্চল ২-৩ সে.মি গভীর ব্যবচ্ছেদ করতে হয়।" },
    { title: "গ্রন্থি সংগ্রহ", desc: "ব্যবচ্ছেদ করার পর অত্যন্ত সাবধানে পিটুইটারি গ্রন্থি (P.G) সংগ্রহ করতে হয়।" },
    { title: "সংরক্ষণ", desc: "১০০% অ্যালকোহলে নিম্ন তাপমাত্রায় (Refrigerator-এ) সংরক্ষণ করতে হয়।" },
    { title: "মেয়াদ", desc: "সঠিকভাবে সংরক্ষণ করলে Refrigerator-এ ২-৩ বছর পর্যন্ত P.G ভালো থাকে।" }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 100 : -100, filter: 'blur(10px)' }),
    center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
    exit: (dir) => ({ opacity: 0, y: dir < 0 ? 100 : -100, filter: 'blur(10px)', transition: { duration: 0.4 } })
  };

  const lineVariants = {
    hidden: { height: 0 },
    show: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-slate-50 flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center z-10">
        
        {/* Left Side: Title */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-5xl font-black text-slate-800 mb-4 leading-normal py-1">
            <span className="text-blue-600">P.G</span> সংগ্রহ ও<br/>সংরক্ষণ
          </h2>
          <div className="h-2 w-24 bg-blue-600 rounded-full mx-auto md:mx-0 mb-6"></div>
          <p className="text-slate-500 text-lg">
            মাছের Breeding এর পূর্বে পিটুইটারি গ্রন্থি বা P.G সংগ্রহ করা একটি অত্যন্ত গুরুত্বপূর্ণ কাজ।
          </p>
        </div>

        {/* Right Side: Timeline */}
        <div className="md:w-2/3 relative pl-8">
          {/* Vertical Line */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            animate="show"
            className="absolute left-0 top-0 w-1 bg-blue-200 rounded-full"
          ></motion.div>

          <motion.div 
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
            className="space-y-12 py-4"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
