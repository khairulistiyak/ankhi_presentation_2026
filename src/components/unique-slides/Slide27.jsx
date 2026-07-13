import React from 'react';
import { motion } from 'framer-motion';

// --- Architectural Hybridization DNA SVG ---
const HybridDNASVG = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(16, 185, 129, 0.4))' }}>
        <defs>
          <linearGradient id="dna1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="dna2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hybrid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={`grid-${i}`}>
              <line x1={i * 40} y1="0" x2={i * 40} y2="400" />
              <line x1="0" y1={i * 40} x2="400" y2={i * 40} />
            </React.Fragment>
          ))}
        </g>

        {/* Left DNA Strand (Breed A - Green) */}
        <g transform="translate(60, 50)">
          <path d="M 0 0 Q 30 50, 0 100 T 0 200" fill="none" stroke="url(#dna1)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 40 0 Q 10 50, 40 100 T 40 200" fill="none" stroke="url(#dna1)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          {[20, 40, 60, 80, 120, 140, 160, 180].map(y => (
            <line key={`l1-${y}`} x1="8" y1={y} x2="32" y2={y} stroke="#10b981" strokeWidth="2" opacity="0.7" />
          ))}
          <text x="5" y="-10" fill="#10b981" fontSize="12" fontFamily="monospace">BREED_A</text>
        </g>

        {/* Right DNA Strand (Breed B - Blue) */}
        <g transform="translate(260, 50)">
          <path d="M 0 0 Q -30 50, 0 100 T 0 200" fill="none" stroke="url(#dna2)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 40 0 Q 70 50, 40 100 T 40 200" fill="none" stroke="url(#dna2)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          {[20, 40, 60, 80, 120, 140, 160, 180].map(y => (
            <line key={`l2-${y}`} x1="8" y1={y} x2="32" y2={y} stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
          ))}
          <text x="5" y="-10" fill="#3b82f6" fontSize="12" fontFamily="monospace">BREED_B</text>
        </g>

        {/* Merging Lines (Data transfer) */}
        <g strokeDasharray="4,4" strokeWidth="1.5">
          <motion.line 
            x1="120" y1="200" x2="180" y2="250" stroke="#10b981"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line 
            x1="280" y1="200" x2="220" y2="250" stroke="#3b82f6"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
          />
        </g>

        {/* Central Hybrid DNA (Purple) */}
        <g transform="translate(180, 250)">
          <path d="M 0 0 Q 20 40, 0 80 T 0 160" fill="none" stroke="url(#hybrid)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 40 0 Q 20 40, 40 80 T 40 160" fill="none" stroke="url(#hybrid)" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
          
          {/* Animated pulsing base pairs */}
          {[20, 40, 60, 100, 120, 140].map((y, i) => (
            <motion.line 
              key={`h-${y}`} x1="5" y1={y} x2="35" y2={y} stroke="#a855f7" strokeWidth="3"
              animate={{ opacity: [0.3, 1, 0.3], strokeWidth: [3, 5, 3] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
          
          {/* Success Hexagon */}
          <polygon points="20,170 35,180 35,195 20,205 5,195 5,180" fill="none" stroke="#a855f7" strokeWidth="2" />
          <circle cx="20" cy="187.5" r="4" fill="#a855f7" />
          <text x="-15" y="225" fill="#a855f7" fontSize="14" fontFamily="monospace" fontWeight="bold">HYBRID_SUCCESS</text>
        </g>

      </svg>
    </div>
  );
};

const Slide27 = ({ direction }) => {
  return (
    <div className="w-full h-full bg-[#050A15] text-slate-200 overflow-hidden relative font-sans">
      
      {/* Background Image (Lab/Science) - STATIC */}
      <div 
        className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#050A15]/90 to-[#0f172a]/80 z-0" />

      {/* Main Container - Split Layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto p-12 flex items-center justify-between gap-12">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-2 font-mono py-2">
            সুবিধাসমূহ // Advantages // Part 1
          </h2>
          <h1 className="text-5xl font-bold text-white py-2 leading-tight mb-8">
            প্রণোদিত প্রজননের<br/><span className="text-emerald-400">সুবিধাসমূহ</span>
          </h1>

          <div className="space-y-6">
            {/* Advantage 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-500/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-emerald-400 font-mono text-2xl font-bold bg-emerald-950/50 w-10 h-10 flex items-center justify-center rounded-lg border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  ১
                </div>
                <h3 className="text-2xl font-bold text-white">বিশুদ্ধ ও উন্নত জাত</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed ml-14">
                এই প্রক্রিয়ায় নির্দিষ্ট ব্রুড মাছ নির্বাচন করা হয়, ফলে বিশুদ্ধ এবং অত্যন্ত উন্নত জাতের সুস্থ সবল পোনা পাওয়া যায়।
              </p>
            </motion.div>

            {/* Advantage 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-xl bg-blue-950/20 border border-blue-500/30 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-500/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-blue-400 font-mono text-2xl font-bold bg-blue-950/50 w-10 h-10 flex items-center justify-center rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform">
                  ২
                </div>
                <h3 className="text-2xl font-bold text-white">সংকরায়ণ (Hybridization)</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed ml-14">
                কৃত্রিম উপায়ে পছন্দমতো মাছের প্রজাতি নির্বাচন করে সংকরায়ণ করা সম্ভব, যা প্রাকৃতিক পরিবেশে কঠিন।
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right SVG Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-1/2 h-[600px] bg-slate-900/40 backdrop-blur-3xl border border-slate-700 rounded-3xl relative flex items-center justify-center"
        >
          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none" />
          
          <div className="absolute top-6 right-6 text-xs text-slate-500 font-mono">GENETIC_MERGE_v2.1</div>
          
          <HybridDNASVG />
          
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide27;
