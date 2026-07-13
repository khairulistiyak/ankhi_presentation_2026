import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavigationControls({ current, total, onNext, onPrev }) {
  return (
    <div className="fixed bottom-8 right-8 flex gap-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        disabled={current === 0}
        className={`p-3 rounded-full backdrop-blur-md border ${current === 0 ? 'bg-slate-800/30 border-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'}`}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        disabled={current === total - 1}
        className={`p-3 rounded-full backdrop-blur-md border ${current === total - 1 ? 'bg-slate-800/30 border-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'}`}
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  );
}
