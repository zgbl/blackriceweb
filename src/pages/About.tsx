import React from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <About />
      {/* 移除了 Team 组件，避免显示虚假的团队信息 */}
    </div>
  );
};

export default AboutPage;