'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinkProps {
  label: string;
  to: string;
}

const navLinks: NavLinkProps[] = [
  { label: 'Service', to: 'service' },
  { label: 'Projects', to: 'projects' },
  { label: 'How we work', to: 'how-we-work' },
  { label: 'Pricing', to: 'pricing' },
  { label: "Reviews", to: 'reviews' },
  { label: 'Get in touch', to: 'contact' },
];


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={scrolledDown? "fixed top-0 w-full z-50 thenav-parent-section" : "fixed top-0 w-full z-50"}>
      <div className="flex items-center justify-between h-16 px-4 pt-4 text-white thenav-div-links">
        <div className="text-lg logo-site-text"><strong>Tifawin </strong><span>Devs</span></div>
        <div className="hidden md:flex items-center gap-8 links-bg">
          <div className="flex gap-15 text-sm bg-black py-3 links-bg-ul">
            {navLinks.map(({ label, to }) => (
              <a
                key={to}
                href={`#${to}`}
                className="px-3 py-2 cursor-pointer transition navbar-link-a text-white"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(to);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Optionally update the URL hash without jumping:
                    window.history.pushState(null, '', `#${to}`);
                  }
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden rounded-full p-2 cursor-pointer"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute left-0 h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[rgba(20,21,32,0.8)] w-full"
          >
            <div className="flex flex-col items-center  py-4">
              {navLinks.map(({ label, to }) => (
                <a
                key={to}
                href={`#${to}`}
                className="px-3 py-2 cursor-pointer transition navbar-link-a text-white"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(to);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', `#${to}`);
                  }
                }}
              >
                {label}
              </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
