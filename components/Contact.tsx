'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="contact-section-slider" id='contact'>
    <div className="mb-16 site-section-title">
            <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Start a project</div>
            <div className="site-section-title-gradient"></div>
    </div>
    <div className="contact-section-slide-form-infos">
        <div className="contact-section-slide-form-infos-left">
            <h1>Let us know if you want to talk about your next project!</h1>
            <p>Fill the form and start a project or, if you prefer to email us<br></br>instead... <span>tifawin@contact.com</span></p>
        </div>
        <div className="contact-section-slide-form-infos-right">
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your name?</label>
                <input type='text' name='name'/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your email?</label>
                <input type='email' name='email'/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>What&apos;s your budget? (Ex. $3K - $5K)</label>
                <input type='number' name='budget'/>
            </div>
            <div className="contact-section-slide-form-infos-right-fill">
                <label>Describe your project</label>
                <textarea name="project-description" id="" cols={30} rows={5}></textarea>
            </div>
            <motion.a
            className="request-a-website-button"
          >
            <span>Request a website</span>
          </motion.a>
        </div>
    </div>
    </div>
  );
};

export default Contact;