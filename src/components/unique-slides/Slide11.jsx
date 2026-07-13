import React from 'react';
import { motion } from 'framer-motion';

export default function Slide11({ direction }) {
  const advantages = [
    "প্রণোদিত প্রজননের মাধ্যমে মাছের সংকরায়ন (Hybridization) সম্ভব।",
    "হ্যাচারির আঁতুড় পুকুরে এই ডিম-পোনা ফুটিয়ে ও বিক্রি করে অতিরিক্ত আয় সম্ভব।",
    "কার্প জাতীয় মাছের বদ্ধ পানিতে ডিম ফোটানো সম্ভব হয়। মাছের ভেজাল ডিম-পোনা কিনে ঠকতে হয় না।",
    "স্বাভাবিক বসতির বাহিরে প্রজনন করানো যায়।",
    "উন্নত মানের মাছের বীজ থেকে ভালো মাছের উৎপাদন সম্ভব হয়।",
    "পছন্দমত বিভিন্ন প্রজাতির মাছের প্রজনন করিয়ে উন্নত পোনা উৎপাদন করা যায়।",
    "ভালো আকারের ও ওজনের মাছ পাওয়া সুনিশ্চিত হয়।"
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 0.8, y: dir > 0 ? 100 : -100 }),
    center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
    exit: (dir) => ({ opacity: 0, scale: 0.8, y: dir < 0 ? 100 : -100, transition: { duration: 0.4 } })
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-emerald-50 flex items-center justify-center p-8 overflow-hidden"
    >
      <div className="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl shadow-emerald-900/10 p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
        
        {/* Decorative Graphic */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/10 rounded-tr-full pointer-events-none"></div>

        {/* Left Side: Title */}
        <div className="md:w-1/3 text-center md:text-left z-10">
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            প্রণোদিত প্রজননের <span className="text-emerald-600">সুবিধা</span>
          </h2>
          <p className="text-slate-500 text-lg">
            কেন এই পদ্ধতি আধুনিক মৎস্য চাষে এত বেশি ব্যবহৃত হচ্ছে তার প্রধান কারণগুলো।
          </p>
        </div>

        {/* Right Side: List */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="md:w-2/3 z-10"
        >
          <ul className="space-y-4">
            {advantages.map((adv, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <li className="text-xl text-slate-700 leading-snug pt-1">{adv}</li>
              </motion.div>
            ))}
          </ul>
        </motion.div>

      </div>
    </motion.div>
  );
}
