'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="mb-16">
          <div className="text-secondary font-semibold text-sm uppercase mb-3">Why choose us!</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Why Revento Is the Trusted Choice
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    With years of experience and a track record of delivering measurable results, we craft strategies that work.
                  </p>
                </div>
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-secondary"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10">
                  <Image
                    src="/images/card-shape-2.png"
                    alt="Shape"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-1">
                  <AnimatedCounter end={300} suffix="+" className="text-3xl font-bold" />
                </h3>
                <p className="text-white/90 text-sm">Successful Campaigns</p>
                <div className="text-xs mt-2 text-white/80">
                  Tailored to your business goals and Successful Campaigns delivered across various industries.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#E4BD43] rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10">
                  <Image
                    src="/images/card-shape-2.png"
                    alt="Shape"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={2.5} duration={1500} suffix="" className="text-3xl font-bold" />
                  </h3>
                  <span className="text-2xl font-bold">x</span>
                </div>
                <p className="text-white/90 text-sm">Average ROI</p>
                <div className="text-xs mt-2 text-white/80">
                  Crafted for your success, delivering impactful campaigns across diverse industries worldwide.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-accent rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10">
                  <Image
                    src="/images/card-shape-2.png"
                    alt="Shape"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={10} duration={1500} suffix="" className="text-3xl font-bold" />
                  </h3>
                  <span className="text-2xl font-bold">M+</span>
                </div>
                <p className="text-white/90 text-sm">Impressions generated</p>
                <div className="text-xs mt-2 text-white/80">
                  Achieving excellence through personalized strategies and successful results in every industry.
                </div>
              </motion.div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-primary">With years of experience and a track record of delivering measurable results!</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-full"
            >
              <Image
                src="/images/featured-project-1.png"
                alt="Agency Team"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-full"
            >
              <Image
                src="/images/featured-project-2.png"
                alt="Agency Office"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
