'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const methods = [
  {
    id: 1,
    title: 'Understanding Your Business',
    description: 'We begin by getting to know your brand, industry, and audience. By understanding your challenges, goals, and unique value, we lay the foundation.',
    details: [
      { title: 'Strategy', desc: 'Competitor Analysis' },
      { title: 'Discovery', desc: 'Market Research' },
      { title: 'Solutions', desc: 'Growth Opportunities' }
    ]
  },
  {
    id: 2,
    title: 'Strategic Planning and Creative Execution',
    description: 'We start by understanding your brand, industry, and audience, ensuring we address your challenges, define goals, and highlight your unique value.',
    details: [
      { title: 'Planning', desc: 'Roadmap Creation' },
      { title: 'Creative', desc: 'Content Development' },
      { title: 'Execution', desc: 'Campaign Launch' }
    ]
  },
  {
    id: 3,
    title: 'Collaboration and Optimization',
    description: 'Our process begins with a deep dive into your brand, industry, and audience to uncover challenges, define goals, and craft tailored solutions.',
    details: [
      { title: 'Teamwork', desc: 'Client Feedback' },
      { title: 'Refine', desc: 'Performance Tuning' },
      { title: 'Adapt', desc: 'Strategy Evolution' }
    ]
  },
  {
    id: 4,
    title: 'Delivering and Reporting Results',
    description: 'We learn your brand, industry, and audience to identify challenges, align goals, and establish the groundwork for delivering impactful strategies.',
    details: [
      { title: 'Results', desc: 'Goal Achievement' },
      { title: 'Reporting', desc: 'Data Analysis' },
      { title: 'Growth', desc: 'Future Planning' }
    ]
  }
];

export default function WorkingMethodSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-secondary font-semibold text-sm uppercase mb-3">How We Work</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Our Working Method
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {methods.map(method => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: method.id * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`mb-4 rounded-xl overflow-hidden border ${
                activeStep === method.id ? 'border-secondary shadow-md' : 'border-gray-200'
              }`}
            >
              <div
                className={`flex items-start p-6 cursor-pointer ${
                  activeStep === method.id ? 'bg-gray-50' : 'bg-white'
                }`}
                onClick={() => setActiveStep(activeStep === method.id ? null : method.id)}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    activeStep === method.id ? 'bg-secondary text-white' : 'bg-gray-100 text-primary'
                  }`}>
                    <span className="text-xl font-bold">{method.id}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary">{method.title}</h3>
                  <p className="text-gray-600 mt-1">{method.description}</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {activeStep === method.id ? (
                    <ChevronUp className="text-secondary" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </div>
              </div>

              {activeStep === method.id && (
                <div className="bg-white p-6 pt-0">
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      {method.details.map((detail, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="font-medium text-primary">{detail.title}</div>
                          <div className="text-sm text-gray-500">{detail.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-accent/10 rounded-2xl p-8 mt-16 max-w-5xl mx-auto text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 max-w-3xl mx-auto">
              <span className="text-secondary">Redefining Digital Impact</span> with{' '}
              <span className="text-accent">Innovative Strategies</span> That{' '}
              <span className="text-highlight">Drive Real Results!</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Dynamic Visuals</span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Brand Strategy</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Performance Metrics</span>
              <span className="bg-highlight/10 text-highlight px-3 py-1 rounded-full text-sm">Business Growth</span>
            </div>
          </motion.div>

          <div className="absolute -bottom-4 right-0 opacity-10">
            <div className="w-32 h-32 rounded-full bg-secondary"></div>
          </div>
          <div className="absolute top-0 left-10 opacity-10">
            <div className="w-16 h-16 rounded-full bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
