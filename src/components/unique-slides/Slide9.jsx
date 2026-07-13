import React from 'react';
import { motion } from 'framer-motion';

const Slide9 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Wave effect for text (staggered letters/words)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const textWaveVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const bgImageUrl = "https://image.pollinations.ai/prompt/A%20beautiful%20high-quality%20landscape%20photo%20of%20a%20river%20or%20natural%20water%20body%20in%20Bangladesh?width=1200&height=800&nologo=true";

  const textContent = "বাংলাদেশ নদীমাতৃক দেশ। কিন্তু ক্রমবর্ধমান জনসংখ্যার কারণে প্রাকৃতিক উৎস থেকে প্রাপ্ত মাছ দিয়ে আমাদের আমিষের চাহিদা পুরোপুরি মেটে না।".split(" ");

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Slow Cinematic Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, filter: 'blur(5px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 12, ease: "easeOut" }}
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-5xl p-6 text-center sm:p-12 md:p-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/30 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-14"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
            className="mb-10 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text py-3 text-transparent leading-relaxed drop-shadow-lg">
              ভূমিকা
            </span>
          </motion.h1>

          {/* Wave effect implementation for paragraph */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center text-xl font-medium text-slate-100 sm:text-2xl md:text-3xl leading-relaxed py-2 drop-shadow-md"
          >
            {textContent.map((word, index) => (
              <motion.span
                key={index}
                variants={textWaveVariants}
                className="mr-2 mb-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide9;
