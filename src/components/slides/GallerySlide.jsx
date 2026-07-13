import React from 'react';
import { motion } from 'framer-motion';

export default function GallerySlide({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotateZ: -5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateZ: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="flex flex-col h-full w-full relative z-10 p-4 md:p-12 overflow-hidden">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-8 md:mb-12 z-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-xl inline-block px-8 py-4 glass-panel !rounded-full">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-xl md:text-2xl text-slate-300 mt-4 font-light tracking-wide">
            {data.subtitle}
          </p>
        )}
      </motion.div>

      {/* Masonry/Collage Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 w-full h-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 md:gap-8 pb-10"
      >
        {data.images.map((img, index) => {
          // Different spans for a dynamic collage look
          let spanClass = "col-span-1 row-span-1";
          if (index === 0) spanClass = "col-span-2 md:col-span-1 row-span-2"; // First image is large vertically or horizontally
          else if (index === 1) spanClass = "col-span-1 row-span-1 md:col-span-2"; // Second image spans wide on desktop
          
          return (
            <motion.div 
              key={index} 
              variants={imageVariants}
              whileHover={{ scale: 1.05, zIndex: 30, rotateZ: 2 }}
              className={`relative rounded-3xl overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10 ${spanClass}`}
            >
              {/* Image */}
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-3xl transition-colors duration-300 pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md mb-1">
                  {img.caption}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
