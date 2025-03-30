'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-secondary shadow-lg shadow-secondary/20 text-white z-50 hover:scale-110 transition-transform"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
          <motion.span
            className="absolute inset-0 rounded-full bg-secondary"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
