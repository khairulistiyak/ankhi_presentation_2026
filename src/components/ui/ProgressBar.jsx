import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const progress = (current / (total - 1)) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full h-2 bg-slate-800/50 backdrop-blur-sm z-50">
      <motion.div 
        className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
