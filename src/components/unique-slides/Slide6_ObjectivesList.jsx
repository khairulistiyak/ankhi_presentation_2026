import React from 'react';
import { motion } from 'framer-motion';

export default function Slide6_ObjectivesList({ direction }) {
  const objectives = [
    {
      title: "প্রজনন প্রযুক্তির ব্যবহারিক জ্ঞান অর্জন",
      desc: "মাছের উৎপাদন বৃদ্ধির লক্ষ্যে আধুনিক ও প্রণোদিত প্রজনন কৌশল সম্পর্কে বাস্তব অভিজ্ঞতা লাভ করা।",
      color: "from-fuchsia-500 to-pink-500",
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/30"
    },
    {
      title: "স্বাবলম্বী ও উদ্যোক্তা সৃষ্টি",
      desc: "শিক্ষিত বেকার যুবসমাজকে আধুনিক মৎস্য চাষে উদ্বুদ্ধ করে স্বাবলম্বী হওয়ার পথ প্রদর্শন করা।",
      color: "from-violet-500 to-purple-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30"
    },
    {
      title: "আর্থ-সামাজিক সমৃদ্ধি",
      desc: "মৎস্য খাতের সম্ভাবনাগুলোকে কাজে লাগিয়ে গ্রামীণ জনগোষ্ঠীর অর্থনৈতিক ও সামাজিক অবস্থার উন্নয়ন ঘটানো।",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      title: "টেকসই উন্নয়ন ও প্রযুক্তি উদ্ভাবন",
      desc: "জাতীয় চাহিদা পূরণে মৎস্য সম্পদের টেকসই বিকাশ নিশ্চিত করা এবং নতুন নতুন গবেষণা ও প্রযুক্তি উদ্ভাবনে ভূমিকা রাখা।",
      color: "from-cyan-500 to-blue-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30"
    }
  ];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: (dir) => ({ opacity: 0, x: dir < 0 ? 50 : -50, transition: { duration: 0.4 } })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 leading-normal py-3">
            ফিল্ড ভিজিটের মূল উদ্দেশ্যসমূহ
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-4">
          {objectives.map((obj, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`flex items-stretch bg-slate-800/80 backdrop-blur-md border ${obj.border} rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform`}
            >
              <div className={`w-16 flex items-center justify-center bg-gradient-to-b ${obj.color}`}>
                <span className="text-2xl font-bold text-white/90">{i + 1}</span>
              </div>
              <div className={`flex-1 p-6 ${obj.bg}`}>
                <h3 className="text-xl font-bold text-white mb-2 leading-normal group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all py-3">
                  {obj.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
