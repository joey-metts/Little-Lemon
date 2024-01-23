import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
