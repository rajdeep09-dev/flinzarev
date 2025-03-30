'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Service card colors
const cardColors = [
  'bg-[#f39930]', // Orange
  'bg-[#e95143]', // Red
  'bg-[#9b8be7]', // Purple
  'bg-[#e95143]', // Red
  'bg-[#1eb588]', // Teal
  'bg-[#f39930]', // Orange
];

// Service data
const services = [
  {
    id: 1,
    title: 'Search Engine Optimization',
    description: 'Boost your websites visibility and attract organic traffic with SEO tailored to your business goals.',
    icon: '/images/service-icon-1.svg',
    link: '/service/search-engine-optimization',
    color: cardColors[0]
  },
  {
    id: 2,
    title: 'Content Marketing',
    description: 'Enhance your brands online presence and drive engagement with a strategy customized to your needs.',
    icon: '/images/service-icon-2.svg',
    link: '/service/content-marketing',
    color: cardColors[1]
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'Grow your audience and increase conversions with targeted digital marketing solutions.',
    icon: '/images/service-icon-3.svg',
    link: '/service/social-media-marketing',
    color: cardColors[2]
  },
  {
    id: 4,
    title: 'Email Marketing',
    description: 'Maximize your online reach and generate leads with content tailored to your audience.',
    icon: '/images/service-icon-4.svg',
    link: '/service/email-marketing',
    color: cardColors[3]
  },
  {
    id: 5,
    title: 'Influencer Marketing',
    description: 'Elevate your business with a social media strategy designed for your growth objectives.',
    icon: '/images/service-icon-5.svg',
    link: '/service/influencer-marketing',
    color: cardColors[4]
  },
  {
    id: 6,
    title: 'Analytics and Reporting',
    description: 'Expand your customer base and improve visibility with data-driven advertising campaigns.',
    icon: '/images/service-icon-6.svg',
    link: '/service/analytics-and-reporting',
    color: cardColors[5]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-secondary font-semibold text-sm uppercase mb-3">Our Services!</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Services Designed to Drive Real Results
          </h2>
          <p className="text-gray-600">
            Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={service.link} className="block h-full">
                <div className={`${service.color} rounded-2xl p-6 h-full flex flex-col relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2`}>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 mb-8">{service.description}</p>
                  <div className="mt-auto flex justify-end">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Background decorative elements */}
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-white/10"></div>
                  <div className="absolute right-20 bottom-16 w-10 h-10 rounded-full bg-white/10"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
