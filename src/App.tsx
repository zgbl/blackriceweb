import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
