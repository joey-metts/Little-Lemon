import React from 'react';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const Main = () => {
    return (
        <div style={{ backgroundColor: '#F4CE14', paddingTop: '100px' }}>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </div>
    )
};

export default Main;