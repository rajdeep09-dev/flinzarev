'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  finishDelay?: number;
}

export default function LoadingScreen({ finishDelay = 2000 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, finishDelay);

    return () => clearTimeout(timer);
  }, [finishDelay]);

  const colors = ['#f39930', '#e95143', '#9b8be7', '#1eb588'];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <motion.div
            className="relative w-40 h-40"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ rotate: index * 90 }}
                style={{
                  borderRadius: "50%",
                  border: `8px solid transparent`,
                  borderTopColor: color,
                  opacity: 0.8,
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1]
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.8, 1],
                ease: "easeOut",
                delay: 0.5
              }}
            >
              <span className="text-white text-3xl font-bold">Hey!</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className="text-xl text-white font-bold mb-2">Welcome to Revento</h2>
            <p className="text-gray-400">Transforming Vision into Impact</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
