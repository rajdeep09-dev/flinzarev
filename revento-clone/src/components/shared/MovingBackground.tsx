'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MovingBackgroundProps {
  className?: string;
}

export default function MovingBackground({ className = '' }: MovingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      sizeChange: number;
    }> = [];

    const colors = ['#f39930', '#e95143', '#9b8be7', '#1eb588'];

    // Match canvas resolution to device pixel ratio
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Reset particles
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const { width, height } = canvas.getBoundingClientRect();
      const particleCount = Math.floor((width * height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          sizeChange: Math.random() * 0.02 - 0.01,
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const { width, height } = canvas.getBoundingClientRect();

      // Clear canvas with a subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(17, 32, 45, 0.05)');
      gradient.addColorStop(1, 'rgba(25, 40, 55, 0.05)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update size with oscillation
        particle.size += particle.sizeChange;
        if (particle.size < 1 || particle.size > 6) {
          particle.sizeChange = -particle.sizeChange;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
    };

    // Set up canvas and start animation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />

      {/* Floating gradients */}
      <motion.div
        className="absolute opacity-10 rounded-full bg-accent/30 blur-3xl"
        style={{ width: '40%', height: '40%', top: '10%', left: '5%' }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute opacity-10 rounded-full bg-secondary/30 blur-3xl"
        style={{ width: '30%', height: '30%', top: '60%', right: '10%' }}
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute opacity-10 rounded-full bg-highlight/30 blur-3xl"
        style={{ width: '25%', height: '25%', bottom: '5%', left: '30%' }}
        animate={{
          x: [0, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
