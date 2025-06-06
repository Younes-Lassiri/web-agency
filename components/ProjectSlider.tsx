'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#0D0D14] text-white py-12 px-4 md:px-8">
      <div className="mb-16 site-section-title">
        <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Projects We Have Built</div>
        <div className="site-section-title-gradient"></div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 relative min-h-[200px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.title + currentIndex} 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-light mb-7">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#FFFFFF1A] text-[12px] px-3 py-2">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm mb-7" style={{ color: '#e2e2e2' }}>
                {project.description}
              </p>


              <a
                href={project.url}
                className="text-sm text-white flex items-center gap-1 transition-colors duration-200 mt-17"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  transition: '0.7s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'oklch(79.2% .209 151.711)'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                View website <span>↗</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.imageUrl + currentIndex} 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
            <button onClick={prev} className="bg-[#1C1C28] p-2 rounded-full cursor-pointer">
              <ArrowLeft />
            </button>
            <button onClick={next} className="bg-[#1C1C28] p-2 rounded-full cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
