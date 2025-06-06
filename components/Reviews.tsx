'use client'
import React from 'react';
import Image from 'next/image';
const Reviews: React.FC = () => {
    const reviews = [
        {
            content: "Ryan and his team have been awesome to work with. The value they provide for the cost is unbeatable. Ryan is talented and responsive. I highly recommend him for your website needs!",
            name: "Michael M.",
            position: "Salt Lake City, UT",
        },
        {
            content: "Oak Harbor and Ryan have made the process of building a website a fun, exciting experience. He is very personable and answers your questions within a quick manner. I’ll be using him in the future.",
            name: "Clark P.",
            position: "Sacramento, CA",
        },
        {
            content: "approached Ryan with a very specific vision for our new website, and he knocked it out of the park. I was looking for a clean, original design and a faster site. He absolutely delivered.",
            name: "Scott S.",
            position: "Atlanta, GA",
        }
    ]
  return (
    <div className="reviews-section-slider" id='reviews'>
    <div className="mb-16 site-section-title">
            <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Real Results, Real Feedback</div>
            <div className="site-section-title-gradient"></div>
    </div>
    <div className="reviews-section-slider-items">
        {
        reviews.map((review, i) => (
            <div key={i} className="reviews-section-slider-items-review">
                <Image src='https://oakharborwebdesigns.com/assets/images/quote-blue.svg' alt='' style={{filter: 'grayscale(1) brightness(1350%)'}}/>
                <p>{review.content}</p>
                <h3>{review.name}</h3>
                <h4>{review.position}</h4>
            </div>
        ))
        }
    </div>
    </div>
  );
};

export default Reviews;