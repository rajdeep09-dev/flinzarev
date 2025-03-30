'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/shared/TypewriterText';
import ParallaxEffect from '@/components/shared/ParallaxEffect';
import MovingBackground from '@/components/shared/MovingBackground';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if on mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Set up event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
      {/* Moving background */}
      <MovingBackground className="opacity-30" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="mb-2 text-sm md:text-base text-white inline-flex items-center gap-2 bg-primary/30 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-700"
          >
            #1 Popular Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-white relative inline-flex flex-col items-center"
          >
            <div className="flex items-center relative">
              <span>TRANSFORMING</span>
              <ParallaxEffect intensity={isMobile ? 5 : 15} className="absolute -top-8 -right-12">
                <Image
                  src="/images/hero-icon-1.png"
                  alt="Hero Icon"
                  width={50}
                  height={50}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </ParallaxEffect>
            </div>
            <div className="flex items-center gap-2 relative mt-2">
              <span className="text-accent">VISION</span>
              <span>INTO</span>
              <span className="text-highlight">
                <TypewriterText
                  texts={["IMPACT", "GROWTH", "SUCCESS", "RESULTS"]}
                  className="text-highlight"
                  typingSpeed={80}
                  deletingSpeed={40}
                />
              </span>
              <ParallaxEffect intensity={isMobile ? 5 : 10} className="absolute top-0 -right-8">
                <Image
                  src="/images/hero-icon-2.svg"
                  alt="Hero Icon"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </ParallaxEffect>
            </div>
            <div className="flex items-center relative mt-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -left-12 -bottom-4 hidden sm:block"
              >
                <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs md:text-sm transform rotate-[-5deg] font-normal">
                  innovative
                </div>
              </motion.div>
              <span>EFFECTIVELY</span>
              <ParallaxEffect intensity={isMobile ? 10 : 20} className="absolute -top-10 -right-10">
                <Image
                  src="/images/hero-icon-3.svg"
                  alt="Hero Icon"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </ParallaxEffect>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="text-gray-400 max-w-3xl mx-auto mt-6 mb-8 text-base md:text-lg px-4 sm:px-0"
          >
            Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-all w-full sm:w-auto"
              >
                Get in touch
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-all w-full"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative px-4 sm:px-0"
        >
          <div className="bg-primary/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-gray-800 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
            <div className="absolute -right-10 -top-10">
              <Image
                src="/images/card-shape-1.svg"
                alt="Card shape"
                width={150}
                height={150}
                className="opacity-30 group-hover:opacity-50 transition-opacity"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">5X Achieved ROI on Ad Spend Consistently!</h3>
            <p className="text-gray-400 text-sm md:text-base">Average Increase in ROI for Our Clients.</p>
          </div>

          <div className="bg-teal/10 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-teal/20 relative overflow-hidden group hover:border-teal/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5">
            <div className="absolute -right-10 -top-10">
              <Image
                src="/images/card-shape-1.svg"
                alt="Card shape"
                width={150}
                height={150}
                className="opacity-30 group-hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-teal">350+</h3>
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal">
                <path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L7.5 3.20711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645ZM7.5 12.9929L11.1464 9.34645C11.3417 9.15118 11.6583 9.15118 11.8536 9.34645C12.0488 9.54171 12.0488 9.85829 11.8536 10.0536L7.85355 14.0536C7.75979 14.1473 7.63261 14.2 7.5 14.2C7.36739 14.2 7.24021 14.1473 7.14645 14.0536L3.14645 10.0536C2.95118 9.85829 2.95118 9.54171 3.14645 9.34645C3.34171 9.15118 3.65829 9.15118 3.85355 9.34645L7.5 12.9929Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Successful Campaigns</h3>
            <p className="text-gray-400 text-sm md:text-base">Launched Industries</p>
          </div>

          <div className="bg-accent/10 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-accent/20 relative overflow-hidden md:col-span-2 group hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <div className="absolute -right-10 -top-10">
              <Image
                src="/images/card-shape-1.svg"
                alt="Card shape"
                width={150}
                height={150}
                className="opacity-30 group-hover:opacity-50 transition-opacity"
              />
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-accent">67%</h3>
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L7.5 3.20711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645ZM7.5 12.9929L11.1464 9.34645C11.3417 9.15118 11.6583 9.15118 11.8536 9.34645C12.0488 9.54171 12.0488 9.85829 11.8536 10.0536L7.85355 14.0536C7.75979 14.1473 7.63261 14.2 7.5 14.2C7.36739 14.2 7.24021 14.1473 7.14645 14.0536L3.14645 10.0536C2.95118 9.85829 2.95118 9.54171 3.14645 9.34645C3.34171 9.15118 3.65829 9.15118 3.85355 9.34645L7.5 12.9929Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Growth in Conversion Rates on Average</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Helping brands thrive with strategic campaigns, creative content, and results-focused marketing precision marketing.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <ParallaxEffect intensity={3}>
          <Image
            src="/images/hero-image.png"
            alt="Hero background"
            width={500}
            height={500}
            className="absolute top-1/2 right-16 transform -translate-y-1/2 opacity-10 w-96 h-auto"
          />
        </ParallaxEffect>
        <ParallaxEffect intensity={isMobile ? 15 : 25} className="absolute top-40 left-20">
          <Image
            src="/images/hero-icon-4.svg"
            alt="Hero Icon"
            width={30}
            height={30}
            className="w-6 h-6 opacity-30"
          />
        </ParallaxEffect>
      </div>
    </section>
  );
}
