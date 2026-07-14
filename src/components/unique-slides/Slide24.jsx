import React from 'react';
import { motion } from 'framer-motion';

const Slide24 = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-10 bg-[#050b14] relative overflow-hidden font-sans">
      
      {/* Architectural Background Grid & Nodes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col relative z-10">
        
        {/* Architectural Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full border-b border-sky-500/20 pb-4 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 relative"
        >
          {/* Decorative Corner Nodes */}
          <div className="absolute bottom-[-3px] left-0 w-1.5 h-1.5 bg-sky-400 rounded-full" />
          <div className="absolute bottom-[-3px] right-0 w-1.5 h-1.5 bg-sky-400 rounded-full" />

          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-sky-500/50"></span>
              <div className="text-sky-400 text-[11px] font-mono tracking-[0.2em] uppercase bg-sky-900/30 px-3 py-1 rounded border border-sky-500/20 backdrop-blur-sm">
                SPEC: Catla catla
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center gap-3">
              মৎস্য পরিচিতি 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                (কাতলা)
              </span>
            </h1>
          </div>
          <div className="text-right text-slate-400 text-xs font-mono tracking-widest uppercase hidden md:block">
            Architectural Overview
          </div>
        </motion.div>

        {/* Main Content: 3-Column Architectural Split */}
        <div className="w-full flex-grow flex flex-col lg:flex-row gap-6 relative overflow-hidden pb-2">
          
          {/* Left: Hero Image (Structural Frame) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[35%] h-[200px] lg:h-full relative group"
          >
            {/* Structural Borders */}
            <div className="absolute inset-0 border border-sky-500/30 bg-slate-900/50 backdrop-blur-sm p-2 flex flex-col">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-400" />
              
              <div className="relative w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="https://image.pollinations.ai/prompt/Realistic%20Catla%20fish%20side%20profile%20underwater%20photography%20silver%20scales?width=600&height=800&nologo=true" 
                  alt="কাতলা (Catla catla)" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
                
                {/* Tech Overlay Lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-90" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sky-500/10 pointer-events-none" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-500/10 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-mono uppercase tracking-widest">Surface Feeder</span>
                  </div>
                  <span className="text-sky-300/70 text-[10px] font-mono">ID: CAT-001</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Architectural Data Blocks (3 Cards) */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4 h-full justify-start overflow-y-auto custom-scrollbar pr-2">
            <style>{`
              .custom-scrollbar::-webkit-scrollbar { width: 4px; }
              .custom-scrollbar::-webkit-scrollbar-track { background: rgba(14, 165, 233, 0.05); }
              .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(14, 165, 233, 0.3); border-radius: 4px; }
            `}</style>
            
            {/* Card 1: Habitat */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-4 md:p-5 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500" />
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h2 className="text-lg font-bold text-white tracking-wide">বাসস্থান</h2>
              </div>
              <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed pl-8">
                কাতলা মাছ জলাশয়ের উপরিভাগের স্তরে <strong className="text-sky-300 font-mono text-[12px]">(Surface feeder)</strong> বাস করে এবং সেখান থেকেই খাবার গ্রহণ করে। রুই বা মৃগেল মাছের মতো এরা নিচে থাকে না। এরাও মূলত নদীর মাছ, তবে পুকুরে ভালো বাড়ে।
              </p>
            </motion.div>

            {/* Card 2: Physical Characteristics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-4 md:p-5 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h2 className="text-lg font-bold text-white tracking-wide">বাহ্যিক বৈশিষ্ট্য</h2>
              </div>
              <div className="text-slate-300 text-[13px] md:text-sm leading-relaxed pl-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 text-[10px]">■</span>
                  <span>বিশাল আকৃতির মাথা ও চওড়া থুতনি।</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 text-[10px]">■</span>
                  <span>নিচের চোয়াল বেশ চড়াও এবং উপরের ঠোঁটের তুলনায় সামনে বাড়ানো।</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 text-[10px]">■</span>
                  <span>আঁইশগুলো বেশ বড় ও <strong className="text-white">উজ্জ্বল রূপালী</strong> রঙের হয়।</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 text-[10px]">■</span>
                  <span>পৃষ্ঠপাখনাটি (Dorsal fin) বেশ বড় ও চওড়া হয়।</span>
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <span className="text-indigo-400 mt-1 text-[10px]">■</span>
                  <span>এরা সাধারণত সম্পূরক খাবার ছাড়া প্রাকৃতিক প্লাঙ্কটন খেতে পছন্দ করে। দেহ চওড়া হওয়ায় পিঠের অংশে চর্বির পরিমাণ বেশি থাকে।</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Reproduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-4 md:p-5 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h2 className="text-lg font-bold text-white tracking-wide">প্রজনন</h2>
              </div>
              <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed pl-8">
                কাতলা মাছ বদ্ধ পুকুরে প্রজননক্ষম হলেও প্রাকৃতিকভাবে সেখানে ডিম পাড়ে না। এদের <strong className="text-teal-300">ডিম্বোৎপাদন ক্ষমতা রুই মাছের চেয়েও অনেক বেশি</strong>। বর্তমানে আধুনিক হ্যাচারি প্রযুক্তিতে প্রণোদিত প্রজননের মাধ্যমে একই কাতলা মাছ থেকে <strong className="text-white">বছরে দুই বারও</strong> সফলভাবে ডিম ও পোনা উৎপাদন করা সম্ভব হচ্ছে।
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide24;
