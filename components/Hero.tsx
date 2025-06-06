'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-black w-full main-content-screen">
      <div className="text-center px-4 text-6xl lg:text-7xl xl:text-[96px] main-content-screen-left-side">
        {/* For mobile devices */}
        <div className="block md:hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" font-serif font-light leading-tight"
          >
            Helping startups achive online pressence with webflow websites
          </motion.h1> 
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" font-sans font-semibold text-lime-400 mt-2"
          >
            We design and develop responsive, SEO-friendly Webflow websites that help startups stand out and connect with their audience effortlessly.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="request-a-website-button"
          >
            <span>Request a website <Image src="https://uploads-ssl.webflow.com/6375cfe728bf0d973edef52c/6375df90cde00154c63cae36_Arrow.svg" alt="" width={24} height={24}/></span>
          </motion.a>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-xs text-gray-400 tracking-widest cancel-anytime-p"
          >
            ✦ PAUSE OR CANCEL ANYTIME ✦
          </motion.p>
        </div>

        {/* For larger devices */}
        <div className="hidden md:block">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="leading-tight font-serif font-light"
          >
            Helping startups achive online pressence with webflow websites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="leading-tight font-sans font-normal"
          >
            We design and develop responsive, SEO-friendly Webflow websites that help startups stand out and connect with their audience effortlessly.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="request-a-website-button"
          >
            <span>Request a website <Image src="https://uploads-ssl.webflow.com/6375cfe728bf0d973edef52c/6375df90cde00154c63cae36_Arrow.svg" alt="" width={24} height={24}/></span>
          </motion.a>


          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400 tracking-widest cancel-anytime-p"
          >
            ✦ PAUSE OR CANCEL ANYTIME ✦
          </motion.p>
        </div>
      </div>
      <div className='main-content-screen-right-side'>
      </div>
    </section>
  );
};

export default Hero;