'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  { name: 'NetSoft', icon: 'M12 9V3.75m-6.75 3h.008v.008H5.25v-.008zm0 9.75h.008v.008H5.25v-.008zm7.5-7.5h-7.5' },
  { name: 'SiteForge', icon: 'M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M7.5 3.75V2.25m0 1.5h1.5m-9 9v1.5A2.25 2.25 0 002.25 18h12m-9-9v1.5m0 0h1.5m-1.5 0H9m1.5-9H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9' },
  { name: 'Digipath', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' },
  { name: 'Codelink', icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z' }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Testimonial Image */}
            <div className="relative h-80 md:h-full">
              <Image
                src="/images/testimonial-img.png"
                alt="Client Testimonial"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Testimonial Content */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <div className="text-secondary font-semibold text-sm uppercase mb-3">Testimonials</div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Revento transformed our online presence by{' '}
                  <span className="text-accent">200%</span> in just three months!
                </h2>
              </div>

              <p className="text-gray-400 mb-6">Michael T., Retail Store Owner</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                {clientLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="bg-white/10 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={logo.icon} />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
