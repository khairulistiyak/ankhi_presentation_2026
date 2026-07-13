import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Factory } from 'lucide-react';

export default function Slide4({ direction }) {
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 70, damping: 20 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 70, damping: 20 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const listItem = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full bg-indigo-950 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="w-full max-w-6xl px-8 flex flex-col md:flex-row gap-12 relative z-10">
        
        {/* Left Side: Title */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-2">Section 02</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-normal">
              খামার সম্পর্কে <span className="text-indigo-400">তথ্য</span>
            </h2>
            <div className="w-16 h-2 bg-indigo-500 rounded-full mb-8"></div>
            <p className="text-indigo-200 text-lg">
              নাটোরের এই খামারটি আধুনিক মৎস্য চাষের এক উজ্জ্বল দৃষ্টান্ত।
            </p>
          </motion.div>
        </div>

        {/* Right Side: Data List */}
        <motion.div 
          variants={listContainer}
          initial="hidden"
          animate="show"
          className="md:w-2/3 flex flex-col gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={listItem} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-400/30 text-indigo-300">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">অবস্থান ও নাম</h3>
              <p className="text-indigo-100 text-lg">নাটোর মৎস্য বীজ উৎপাদন খামার, নাটোর সদর।</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={listItem} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-400/30 text-indigo-300">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">উৎপাদন ও আয়</h3>
              <p className="text-indigo-100 text-lg">বছরে প্রায় <span className="font-bold text-green-400">350 কোটি পোনা</span>। বার্ষিক আয় ∼85,000 টাকা।</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={listItem} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-start gap-6 hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-400/30 text-indigo-300">
              <Factory size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">অবকাঠামো সুবিধা</h3>
              <p className="text-indigo-100 text-lg">Renu থেকে Chara Pona এবং বড় মাছ পালনের জন্য 8টি পুকুর ও 2টি হাউজ আছে।</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
