import React from 'react';
import { motion } from 'framer-motion';

const Slide24 = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 relative overflow-hidden font-sans">
      
      {/* Soft Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-6 flex flex-col gap-1"
        >
          <div className="inline-block bg-sky-900/40 border border-sky-500/30 text-sky-300 text-xs font-bold px-3 py-1 rounded-full w-max mb-2">
            বৈজ্ঞানিক নাম: Catla catla
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-normal flex items-center flex-wrap gap-x-3 gap-y-1">
            মৎস্য পরিচিতি 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 py-2">
              (কাতলা)
            </span>
          </h1>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 overflow-y-auto custom-scrollbar pb-4">
          
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.3); border-radius: 4px; }
          `}</style>

          {/* Large Image Container (Spans 2 columns on large screens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 h-[220px] md:h-[300px] lg:h-[350px] bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 shadow-xl overflow-hidden relative flex items-center justify-center p-4 group"
          >
            {/* Soft inner glow behind the fish */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent pointer-events-none" />
            
            {/* The Image - Completely clear, using object-contain to ensure no cropping */}
            <img 
              src="/photo/katla-fish.jpeg" 
              alt="কাতলা (Catla catla)" 
              className="w-full h-full object-contain rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-white text-xs font-medium">Surface Feeder</span>
            </div>
          </motion.div>

          {/* Right Column: Habitat & Reproduction Stacked */}
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
            
            {/* Habitat Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-sky-500/20 rounded-[32px] p-5 md:p-6 shadow-lg flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-sky-950 flex items-center justify-center border border-sky-500/30">
                  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-sky-100">বাসস্থান</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                কাতলা মাছ জলাশয়ের উপরিভাগের স্তরে (Surface feeder) বাস করে এবং সেখান থেকেই খাবার গ্রহণ করে। রুই বা মৃগেল মাছের মতো এরা নিচে থাকে না। এরাও মূলত নদীর মাছ, তবে পুকুরে ভালো বাড়ে।
              </p>
            </motion.div>

            {/* Reproduction Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-[32px] p-5 md:p-6 shadow-lg flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-950 flex items-center justify-center border border-indigo-500/30">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-indigo-100">প্রজনন</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                কাতলা মাছ বদ্ধ পুকুরে প্রজননক্ষম হলেও প্রাকৃতিকভাবে সেখানে ডিম পাড়ে না। এদের ডিম্বোৎপাদন ক্ষমতা রুই মাছের চেয়েও অনেক বেশি। বর্তমানে আধুনিক প্রযুক্তিতে বছরে দুই বারও পোনা উৎপাদন সম্ভব।
              </p>
            </motion.div>

          </div>

          {/* Bottom Card: Characteristics (Spans all 3 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 bg-slate-900/60 backdrop-blur-xl border border-teal-500/20 rounded-[32px] p-5 md:p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-950 flex items-center justify-center border border-teal-500/30">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-teal-100">বাহ্যিক বৈশিষ্ট্য</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✦</span>
                <span className="text-slate-300 text-sm">বিশাল আকৃতির মাথা ও চওড়া থুতনি।</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✦</span>
                <span className="text-slate-300 text-sm">নিচের চোয়াল চড়াও এবং উপরের ঠোঁটের চেয়ে সামনে বাড়ানো।</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✦</span>
                <span className="text-slate-300 text-sm">আঁইশগুলো বেশ বড় ও উজ্জ্বল রূপালী রঙের হয়।</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">✦</span>
                <span className="text-slate-300 text-sm">পৃষ্ঠপাখনাটি (Dorsal fin) বেশ বড় ও চওড়া হয়।</span>
              </div>
              <div className="flex items-start gap-2 lg:col-span-2">
                <span className="text-teal-500 mt-1">✦</span>
                <span className="text-slate-300 text-sm">প্রাকৃতিক প্লাঙ্কটন খেতে পছন্দ করে। দেহ চওড়া হওয়ায় পিঠে চর্বি বেশি থাকে।</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide24;
