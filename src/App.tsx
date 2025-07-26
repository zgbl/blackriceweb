import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
