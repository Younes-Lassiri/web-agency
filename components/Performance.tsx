'use client'
import React from 'react';
import Image from 'next/image';
import pagespeed from '../public/images/pagespeed-9def2c561e2cf5e88db0d19be07f0bb8.avif'
const Performance: React.FC = () => {
  return (
    <div className="performance-section-slider">
    <div className="mb-16 site-section-title">
            <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">what we do</div>
            <div className="site-section-title-gradient"></div>
    </div>
    <div className="performance-section-slider-main-content">
        <div className="performance-section-slider-main-content-left-side">
            <h1><span className='change-color-span'>Performance</span><br></br>We Build <span style={{color: 'oklch(79.2% .209 151.711)'}}>Better</span> Websites That Perform</h1>
            <p>When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.</p>
            <div className="performance-section-slider-main-content-left-side-list">
                <h2><Image src='https://oakharborwebdesigns.com/assets/svgs/stat1.svg' style={{filter: 'grayscale(1) brightness(1350%)'}} width={40} height={40} alt='' 
                loading="lazy"/>Better load times means more traffic and more site conversions over time.</h2>
                <h2><Image src='https://oakharborwebdesigns.com/assets/svgs/stat2.svg' style={{filter: 'grayscale(1) brightness(1350%)'}} width={40} height={40} alt='' 
                loading="lazy"/>Faster websites can help improve SEO and your Google ads performance.</h2>
                <h2><Image src='https://oakharborwebdesigns.com/assets/svgs/stat3.svg' style={{filter: 'grayscale(1) brightness(1350%)'}} width={40} height={40} alt='' 
                loading="lazy"/>Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions.</h2>
            </div>
            <a
            className="request-a-website-button"
          >
            <span>Request a website</span>
          </a>
        </div>
        <div className="performance-section-slider-main-content-right-side">
            <div className="performance-section-slider-main-content-right-side-numbers">
                <h1>
                    <span>100%</span>
                    Satisfaction Guaranteed
                </h1>
                <h1>
                    <span>100</span>
                    Page Speed Scores
                </h1>
                <h1>
                    <span>5/5</span>
                    Google Reviews
                </h1>
            </div>
            <div className="performance-section-slider-main-content-right-side-img"><Image src={pagespeed} alt='' unoptimized/></div>
        </div>
    </div>
    </div>
  );
};

export default Performance;