import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      {/* 主页只保留 Hero 部分，其他内容移到对应页面 */}
    </div>
  );
};

export default Home;