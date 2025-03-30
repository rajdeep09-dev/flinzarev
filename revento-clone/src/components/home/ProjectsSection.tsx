'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Boost Initiative',
    description: 'Drive lead generation for a sustainability firm.',
    image: '/images/featured-project-1.png',
    link: '/work/brand-boost-initiative'
  },
  {
    id: 2,
    title: 'EcomPro SEO Optimization',
    description: 'Increase brand awareness and engagement.',
    image: '/images/featured-project-2.png',
    link: '/work/ecompro-seo-optimization'
  },
  {
    id: 3,
    title: 'LuxuryLaunch Campaign',
    description: 'Revolutionizing industries with personalized, success-oriented marketing',
    image: '/images/featured-project-1.png',
    link: '/work/luxurylaunch-campaign'
  }
];

export default function ProjectsSection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-secondary font-semibold text-sm uppercase mb-3">Our Works</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Our featured projects
            </h2>
          </div>
          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-white p-3 rounded-full border border-gray-200 hover:bg-secondary hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white p-3 rounded-full border border-gray-200 hover:bg-secondary hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
            >
              <Link href={project.link} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-accent/70 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.5C8 1.77614 7.77614 2 7.5 2C7.22386 2 7 1.77614 7 1.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L3.61092 2.90381C3.80618 3.09907 3.80618 3.41566 3.61092 3.61092C3.41566 3.80618 3.09907 3.80618 2.90381 3.61092L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L12.0962 3.61092C11.9009 3.80618 11.5843 3.80618 11.3891 3.61092C11.1938 3.41566 11.1938 3.09907 11.3891 2.90381L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967ZM0 7.5C0 7.22386 0.223858 7 0.5 7H1.5C1.77614 7 2 7.22386 2 7.5C2 7.77614 1.77614 8 1.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM13 7.5C13 7.22386 13.2239 7 13.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H13.5C13.2239 8 13 7.77614 13 7.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L2.90381 11.3891C3.09907 11.1938 3.41566 11.1938 3.61092 11.3891C3.80618 11.5843 3.80618 11.9009 3.61092 12.0962L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L11.3891 12.0962C11.1938 11.9009 11.1938 11.5843 11.3891 11.3891C11.5843 11.1938 11.9009 11.1938 12.0962 11.3891L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033ZM7.5 13C7.77614 13 8 13.2239 8 13.5V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.5C7 13.2239 7.22386 13 7.5 13Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-white p-3 rounded-full border border-gray-200 hover:bg-secondary hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white p-3 rounded-full border border-gray-200 hover:bg-secondary hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
