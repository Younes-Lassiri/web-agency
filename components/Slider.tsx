'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import projects from '../public/projects/projects';

export default function InfiniteProjectScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const measureScroll = () => {
      if (containerRef.current) {
        const total = containerRef.current.scrollWidth;
        const visible = containerRef.current.offsetWidth;
        setScrollWidth(total - visible);
      }
    };

    measureScroll();
    window.addEventListener('resize', measureScroll);
    return () => window.removeEventListener('resize', measureScroll);
  }, []);

  return (
    <div className="w-full py-20 bg-black overflow-hidden" id='projects'>
      <div className="mb-16 px-8 site-section-title">
        <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Our Last Projects</div>
        <div className="site-section-title-gradient"></div>
      </div>

      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex gap-2 sm:gap-6 md:gap-4 will-change-transform"
          animate={{
            x: scrollWidth ? [0, -scrollWidth] : [0, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            },
          }}
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                key={`project-${index}`}
                className="flex-shrink-0 w-[85vw] sm:w-64 md:w-72 lg:w-80 group cursor-pointer"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="relative bg-zinc-900 rounded-3xl p-4 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-700">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      width={320}
                      height={192}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white text-2xl font-bold capitalize mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.name.slice(0, 20)}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description.length > 130
                      ? project.description.slice(0, 130) + '...'
                      : project.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold">
                            {project.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-zinc-300 text-sm font-medium">View Project</span>
                      </div>

                      <a href={project.preview} target='_blank'>
                        <motion.div
                        className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                      </a>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
