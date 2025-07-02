'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Your actual project data
const projects = [
  {
    id: 1,
    name: "The 360 AI News",
    description: "Stay ahead with The 360 AI News — your trusted source for the latest breakthroughs in artificial intelligence, tech innovations, industry trends, and expert insights. Explore the future, today.",
    image: "/images/the360.png",
    category: "News & Media",
    technologies: ["WordPress", "Brand Identity", "Web Development"],
    preview: "https://the360ainews.com/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 2,
    name: "AlaaiHost",
    description: "Start your own hosting business with AlaaiHost. We provide powerful, secure, and budget-friendly reseller hosting plans with 24/7 support, fast performance, and easy management tools.",
    image: "/images/alaaihost.png",
    category: "Business Services",
    technologies: ["WordPress", "Brand Identity", "Web Development"],
    preview: "https://alaaihost.com/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 3,
    name: "SocialUp",
    description: "Get real likes, views, and followers for TikTok, YouTube, and Instagram with SocialUp. Grow your social presence fast with affordable, secure, and instant delivery services.",
    image: "/images/socialup.png",
    category: "Social Media",
    technologies: ["WordPress", "Brand Identity", "Web Development"],
    preview: "https://socialup.kesug.com/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 4,
    name: "24 AI Tech News",
    description: "Stay informed 24/7 with 24 AI Tech News — your go-to source for the latest updates in artificial intelligence, machine learning, robotics, and cutting-edge tech innovations.",
    image: "/images/24aitech.png",
    category: "News & Media",
    technologies: ["WordPress", "Brand Identity", "Web Development"],
    preview: "https://24aitechnews.com/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 5,
    name: "Sehha News",
    description: "Explore the latest in health, wellness, and body care with Sehha News. Get trusted daily updates, expert advice, and natural remedies to help you live a healthier, balanced life.",
    image: "/images/sehha.png",
    category: "Health & Wellness",
    technologies: ["WordPress", "Brand Identity", "Web Development"],
    preview: "https://sehhanews.ma/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 6,
    name: "Apple Streaming",
    description: "A clean interface driven by components, showcasing layouts and interactive elements for smooth UI design and live changes during development.",
    image: "/images/apple.png",
    category: "UI/UX Design",
    technologies: ["React", "UI/UX", "Web Development"],
    preview: "https://rebuild-react.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 7,
    name: "NFT Marketing",
    description: "A vibrant experience focused on marketing services and system launches that drive user engagement and effective market strategies for NFT projects.",
    image: "/images/nft.png",
    category: "Marketing",
    technologies: ["React", "UI/UX", "Web Development"],
    preview: "https://nfts-app.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 8,
    name: "Smart Potential",
    description: "An AI-powered campaign sample targeting smart marketing potentials, designed to boost content reach and improve user experience through intelligent automation.",
    image: "/images/second.png",
    category: "AI Marketing",
    technologies: ["React", "AI Integration", "Web Development"],
    preview: "https://secend-front-end-project.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 9,
    name: "Fidalgo Sushi",
    description: "Fidalgo Sushi Restaurant brings fresh traditional sushi with a modern touch, offering easy ordering and table reservations through an elegant online platform.",
    image: "/images/fidalgo.png",
    category: "Restaurant",
    technologies: ["React", "UI/UX", "Web Development"],
    preview: "https://sushi-restaurant-eight.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 10,
    name: "Hyperon Clothes",
    description: "Hyperon Clothes Store delivers the latest fashion trends through a smooth shopping experience, offering easy browsing, size customization, and fast checkout.",
    image: "/images/hyperon.png",
    category: "E-Commerce",
    technologies: ["React", "E-Commerce", "Web Development"],
    preview: "https://hyperon-clothes-store.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  },
  {
    id: 11,
    name: "Planis Streaming",
    description: "Planis Streaming App provides a seamless, user-friendly platform to enjoy music, podcasts, and videos with personalized recommendations and smooth playback.",
    image: "/images/planis.png",
    category: "Entertainment",
    technologies: ["React", "Streaming", "Web Development"],
    preview: "https://movie-streaming-app-bay.vercel.app/",
    github: "#",
    year: "2024",
    status: "Live"
  }
];

const categories = ["All", "News & Media", "Business Services", "Social Media", "Health & Wellness", "UI/UX Design", "Marketing", "AI Marketing", "Restaurant", "E-Commerce", "Entertainment"];

export default function ProfessionalProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-4 relative overflow-hidden"
      id="projects"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-16 site-section-title">
            <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Crafting Digital Excellence</div>
            <div className="site-section-title-gradient"></div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700/50 hover:text-white hover:border-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group relative"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-emerald-600/20 flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <motion.a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                      <span className="text-sm text-slate-500">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {project.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-slate-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-blue-600/20 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </div>
  );
}