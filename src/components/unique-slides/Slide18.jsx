import React from 'react';
import { motion } from 'framer-motion';

const Slide18 = () => {
  // Variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-[#040814] relative overflow-hidden">
      
      {/* Background Animated Abstract Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Main Premium Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="relative w-full max-w-4xl rounded-[40px] p-[1px] overflow-hidden group shadow-[0_0_100px_rgba(16,185,129,0.15)]"
      >
        {/* Animated Gradient Border Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />
        
        {/* Inner Card Content */}
        <div className="relative w-full h-full bg-[#050b14]/90 backdrop-blur-3xl rounded-[39px] p-12 md:p-16 flex flex-col items-center text-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl flex flex-col items-center"
          >
            
            {/* Main Title */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12 leading-tight">
              সংগৃহীত মাছকে <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 inline-block leading-normal py-3">
                ইনজেকশন প্রদান
              </span>
            </motion.h1>

            {/* Description Text Container */}
            <motion.div 
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl" />

              <p className="text-slate-300 text-xl md:text-3xl leading-relaxed md:leading-[1.6] font-light text-center">
                হ্যাচারিতে ব্রুড রুই মাছের ইনজেকশন দেওয়ার জন্য সাধারণত <span className="font-semibold text-emerald-200">পিঠের পাখনার নিচে</span>, <span className="font-semibold text-teal-200">পায়ু পাখনার গোড়ায়</span> কিংবা <span className="font-semibold text-blue-200">বক্ষ পাখনার নিচে</span>—এই তিনটি অঞ্চলের যেকোনো একটি উপযুক্ত স্থান বেছে নিয়ে খুব সাবধানে পিটুইটারি নির্যাস (পিজি) পুশ করা হয়।
              </p>
            </motion.div>

          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default Slide18;
