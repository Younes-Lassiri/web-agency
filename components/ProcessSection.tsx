'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const steps = [
  {
    title: 'Discovery Meeting',
    subtitle: "Let's get the ball rolling!",
    desc: [
      'At this phase, we will discuss:',
      '(1) your goals',
      '(2) your products or services and',
      '(3) your customers.',
      'This will enable us to optimize the website for effective conversion and your branding.',
    ],
    icon: '/images/step1.png',
  },
  {
    title: 'UX Design + Content Strategy',
    subtitle: "Time to structure your baby!",
    desc: [
      'We will design the skeletal structure of the site to better craft the user experience and information architecture. We will help you make strategic decisions.',
    ],
    icon: '/images/step2.png',
  },
  {
    title: 'Visual Design (UI)',
    subtitle: "",
    desc: [
      'We will be translating our structure into your desired visual direction that communicates your brand and product clearly.',
    ],
    icon: '/images/step3.png',
  },
  {
    title: 'Webflow Development',
    subtitle: "",
    desc: [
      "It's time to create your desired responsive website using Webflow custom build & CMS.",
    ],
    icon: '/images/step4.png',
  },
  {
    title: 'Launching + Training',
    subtitle: "",
    desc: [
      "We'll guide you on using the CMS and make sure you are confident. Then it's time to launch your site into the world!",
    ],
    icon: '/images/step5.png',
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  return (
    <section className="bg-black text-white py-20 px-2.5 md:px-8" ref={containerRef} id='how-we-work'>
      <div className="mb-16 site-section-title">
        <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">how we work</div>
        <div className="site-section-title-gradient"></div>
      </div>

      <div className="max-w-6xl mx-auto relative py-10">
        {/* The vertical line container */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700">
          {/* The animated line that grows with scroll */}
          <motion.div 
            className="w-full bg-white" 
            style={{ 
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              originY: 0
            }} 
          />
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-32 relative">
            {/* Content layout */}
            {index % 2 === 0 ? (
              <>
                {/* Left side content */}
                <motion.div 
                  className="w-1/2 pr-16 text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h3 className="text-xl md:text-3xl font-semibold mb-1">{step.title}</h3>
                  {step.subtitle && (
                    <p className="text-gray-400 text-sm mb-3">{step.subtitle}</p>
                  )}
                  <div className="hidden md:block">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={180}
                      height={180}
                      loading="lazy"
                      className="rounded-md bg-gray-900 p-4 ml-auto"
                    />
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div 
                    className="w-6 h-6 bg-white rounded-full border-4 border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </div>

                {/* Right side content*/}
                <motion.div 
                  className="w-1/2 pl-16"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <ul className="text-gray-300 space-y-2">
                    {step.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              </>
            ) : (
              <>
                {/* Left side content for odd indices */}
                <motion.div 
                  className="w-1/2 pr-16 text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <ul className="text-gray-300 space-y-2">
                    {step.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div 
                    className="w-6 h-6 bg-white rounded-full border-4 border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </div>

                {/* Right side content for odd indices */}
                <motion.div 
                  className="w-1/2 pl-16"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h3 className="text-xl md:text-3xl font-semibold mb-1">{step.title}</h3>
                  {step.subtitle && (
                    <p className="text-gray-400 text-sm mb-3">{step.subtitle}</p>
                  )}
                  <div className="hidden md:block">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={180}
                      loading="lazy"
                      height={180}
                      className="rounded-md bg-gray-900 p-4"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;