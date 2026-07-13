import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Hourglass } from 'lucide-react';

const Slide14 = ({ direction = 1 }) => {
  const slideVariants = {
    enter: (direction) => ({ opacity: 0, x: 50, filter: "blur(10px)" }),
    center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // --- UNIQUE DATA-DRIVEN ANIMATION: BIOMETRIC FISH SCANNER ---
  const BiometricFishScanner = () => (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center bg-slate-900/80 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[inset_0_0_30px_rgba(16,185,129,0.1)]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTIwIDBMMCAwTDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Target Reticle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-emerald-500/20 rounded-full border-dashed"
      />
      <div className="absolute w-64 h-64 border border-emerald-500/10 rounded-full"></div>

      {/* Fish Outline/Hologram */}
      <div className="relative z-10 w-40 h-16 flex items-center justify-center">
        {/* Simple Abstract Fish Shape */}
        <div className="w-32 h-12 bg-emerald-500/20 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] backdrop-blur-sm border border-emerald-400/50 relative shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          {/* Tail */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 border-l-8 border-l-emerald-400/50 border-y-8 border-y-transparent"></div>
          {/* Eye */}
          <div className="absolute top-3 left-4 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_5px_#6ee7b7] animate-pulse"></div>
          {/* Pectoral Fin */}
          <div className="absolute bottom-1 left-10 w-4 h-3 bg-emerald-400/40 rounded-b-full"></div>
        </div>
      </div>

      {/* Laser Scanner Line */}
      <motion.div 
        animate={{ x: ["-120px", "120px", "-120px"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 w-0.5 bg-emerald-400 shadow-[0_0_15px_#34d399] z-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-emerald-300/30 blur-[2px]"></div>
      </motion.div>

      {/* Scan Data UI Overlay */}
      <div className="absolute top-3 left-4 flex flex-col gap-1">
        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest">Bio-Scan Active</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [4, Math.random() * 12 + 4, 4] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              className="w-1 bg-emerald-500/80 rounded-full"
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-3 right-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-[10px] font-mono text-emerald-300">MATURITY: 98%</span>
      </div>
    </div>
  );

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 bg-[#0F172A] dark:bg-[#060B14] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans transition-colors duration-700"
    >
      {/* Advanced Cyberpunk Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBMMDAgMEw0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[130px] mix-blend-screen" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[850px] items-center"
      >
        {/* Left Column (Content) */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-center">

          {/* Glassmorphic Title Box */}
          <motion.div
            variants={itemVariants}
            className="flex-none bg-slate-900/60 backdrop-blur-3xl rounded-[32px] p-8 border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-cyan-600"></div>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                ধাপ ১: ব্রুড সংগ্রহ
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-normal md:leading-relaxed tracking-tight mb-4">
              ব্রুড মাছ
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 py-2 inline-block">
                সংগ্রহ ও নির্বাচন
              </span>
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              প্রণোদিত প্রজননের জন্য সুস্থ, রোগমুক্ত ও পরিপক্ক ব্রুড (পিতামাতা) মাছ নির্বাচন করা অত্যন্ত জরুরি। প্রাকৃতিকভাবে হালদা নদী বা ভালো উৎস থেকে এদের সংগ্রহ করা হয়।
            </p>
          </motion.div>

          {/* Info Features */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "সুস্থ ও সবল", desc: "রোগমুক্ত এবং স্বাস্থ্যবান হতে হবে।", icon: <Dna size={24} />, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
              { title: "সঠিক বয়স", desc: "পূর্ণবয়স্ক ও প্রজননক্ষম হওয়া আবশ্যক।", icon: <Hourglass size={24} />, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border ${item.border} shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center gap-5 hover:bg-slate-800/80 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} text-2xl shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_currentColor] transition-all`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Ultra-Modern UI Panels) */}
        <div className="lg:col-span-7 h-full flex flex-col gap-6 pt-4 lg:pt-0">
          
          {/* Top Row: Scanner Animation */}
          <motion.div
            variants={itemVariants}
            className="h-1/2 bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative flex flex-col overflow-hidden"
          >
            <div className="absolute top-5 left-6 flex items-center gap-2 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping"></span>
              <span className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">বায়োমেট্রিক অ্যানালাইসিস</span>
            </div>
            
            <div className="mt-8 flex-1 w-full flex items-center justify-center">
              <BiometricFishScanner />
            </div>
          </motion.div>

          {/* Bottom Row: Male vs Female Identification */}
          <div className="grid grid-cols-2 gap-6 h-1/2">
            
            {/* Male Criteria Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative flex flex-col group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span>♂</span> পুরুষ মাছ
              </h3>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">বক্ষ পাখনা (Pectoral fin) খসখসে বা অমসৃণ হয়।</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">পেট স্বাভাবিক থাকে, ফোলা থাকে না।</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">চাপ দিলে অনেক সময় সাদা তরল বের হয়।</p>
                </li>
              </ul>
            </motion.div>

            {/* Female Criteria Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/40 backdrop-blur-2xl rounded-[32px] p-6 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)] relative flex flex-col group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <span>♀</span> স্ত্রী মাছ
              </h3>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">বক্ষ পাখনা (Pectoral fin) মসৃণ হয়।</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">ডিম ধারণের কারণে পেট ফোলা ও নরম থাকে।</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">জননেন্দ্রিয় কিছুটা লালচে ও স্ফীত থাকে।</p>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Slide14;
