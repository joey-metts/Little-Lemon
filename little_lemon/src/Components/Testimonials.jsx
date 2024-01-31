import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    username: 'BobbyBean',
    rating: 4,
    review: 'Great experience with the product!',
    avatar: 'avatarOne',
  },
  {
    username: 'SaraGo',
    rating: 5,
    review: 'Excellent service and quality.',
    avatar: 'avatarTwo',
  },
  {
    username: 'ChiTownTom',
    rating: 3,
    review: 'Good but could be better.',
    avatar: 'avatarThree',
  },
  {
    username: 'RiverwalkRachel',
    rating: 4.5,
    review: 'Impressed with the options.',
    avatar: 'avatarFour',
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('load', handleMobile);

    return () => {
      window.removeEventListener('load', handleMobile);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#F4CE14', marginBottom: '2%' }}>
      <h2 style={{ marginLeft: '5%', color: '#495E57', fontSize: '40pt', textAlign: 'center' }}>Testimonials</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
