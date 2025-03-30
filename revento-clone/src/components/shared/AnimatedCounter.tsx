'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  className = '',
  suffix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Use easeOutExpo for better animation feel
      const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
      const currentCount = Math.floor(easeOutExpo * end);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
