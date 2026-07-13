import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slideRegistry } from './data/slideRegistry';
import ProgressBar from './components/ui/ProgressBar';
import NavigationControls from './components/ui/NavigationControls';

// A simple Sun/Moon icon component for theme toggle
const ThemeToggle = ({ isDark, toggle }) => (
  <button 
    onClick={toggle}
    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 text-white hover:bg-slate-700/50 transition-colors pointer-events-auto shadow-lg"
  >
    {isDark ? (
      // Sun icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      // Moon icon
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )}
  </button>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  const nextSlide = () => {
    if (currentSlide < slideRegistry.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const SlideComponent = slideRegistry[currentSlide]?.component;

  if (!SlideComponent) {
    return <div className="flex items-center justify-center h-screen bg-slate-900 text-white">Slide coming soon...</div>;
  }

  return (
    <motion.div 
      className={`relative w-screen h-screen overflow-hidden font-sans select-none transition-all duration-700 bg-slate-900 ${!isDark ? 'theme-light' : ''}`}
      // onPanEnd provides extremely robust swipe detection for touch and mouse
      onPanEnd={(e, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        
        if (offset < -50 || velocity < -500) {
          nextSlide();
        } else if (offset > 50 || velocity > 500) {
          prevSlide();
        }
      }}
    >
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      
      <div className="absolute inset-0 z-10 [perspective:2000px] pointer-events-none">
        {/* pointer-events-none on wrapper but pointer-events-auto on slide, so it doesn't block UI */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <div key={currentSlide} className="w-full h-full absolute inset-0 pointer-events-auto">
            {/* We pass isDark to SlideComponent so individual slides can react to theme if they want */}
            <SlideComponent direction={direction} isDark={isDark} />
          </div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-4 sm:p-8">
        <div className="pointer-events-auto">
           {/* Header or other global UI can go here */}
        </div>
        
        <div className="pointer-events-auto">
          <NavigationControls 
            current={currentSlide} 
            total={slideRegistry.length} 
            onNext={nextSlide} 
            onPrev={prevSlide} 
          />
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <ProgressBar current={currentSlide} total={slideRegistry.length} />
      </div>
    </motion.div>
  );
}
