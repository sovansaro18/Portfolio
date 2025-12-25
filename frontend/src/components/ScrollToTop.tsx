
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 left-8 z-60">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 shadow-2xl shadow-black/50 hover:border-orange-500/50 transition-colors group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-orange-600/10 blur-xl rounded-2xl -z-10 group-hover:bg-orange-600/20 transition-all"></div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;
