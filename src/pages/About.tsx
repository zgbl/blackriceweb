import React from 'react';
import About from '../components/About';
import Team from '../components/Team';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <About />
      <Team />
    </div>
  );
};

export default AboutPage;