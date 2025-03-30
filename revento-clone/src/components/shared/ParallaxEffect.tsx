'use client';

import { useEffect, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ParallaxEffectProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  rotateIntensity?: number;
}

export default function ParallaxEffect({
  children,
  intensity = 10,
  rotateIntensity = 1,
  className = ''
}: ParallaxEffectProps) {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Set up motion values for mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform mouse position to parallax movement
  const moveX = useTransform(
    springX,
    [0, windowSize.width],
    [-intensity, intensity]
  );
  const moveY = useTransform(
    springY,
    [0, windowSize.height],
    [-intensity, intensity]
  );

  // Add rotation for more dynamic effect
  const rotateX = useTransform(
    springY,
    [0, windowSize.height],
    [rotateIntensity, -rotateIntensity]
  );
  const rotateY = useTransform(
    springX,
    [0, windowSize.width],
    [-rotateIntensity, rotateIntensity]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={className}
      style={{
        x: moveX,
        y: moveY,
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
