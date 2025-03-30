'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <span className="bg-secondary text-white px-2 py-0.5 rounded-full text-xs mr-2">New</span>
            Performance Metrics
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Partner with Revento & unlock the{' '}
            <span className="text-secondary relative inline-flex items-center">
              full potential
              <div className="absolute -top-2 -right-4 w-6 h-6">
                <Image
                  src="/images/hero-icon-4.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </div>
            </span>
            ?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all w-full sm:w-auto"
              >
                Get in touch
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/arc-image.png"
          alt="Background arc"
          width={600}
          height={600}
          className="absolute -bottom-10 -right-10 opacity-5"
        />
        <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-secondary opacity-5"></div>
        <div className="absolute top-20 right-1/4 w-8 h-8 rounded-full bg-accent opacity-10"></div>
      </div>
    </section>
  );
}
