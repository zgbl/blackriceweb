import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    home: '首页',
    products: '产品',
    forum: '论坛',
    live: '直播',
    about: '关于我们',
    
    // Hero Section
    heroTitle: '黑米科技',
    heroSubtitle: '专注围棋技术创新',
    heroDescription: '打造全方位围棋生态平台，从在线对弈到智能硬件，让围棋文化在数字时代焕发新生',
    learnMore: '了解更多',
    
    // Products
    productsTitle: '我们的产品',
    blackriceGo: '黑米围棋',
    blackriceGoDesc: '专业的在线围棋对弈平台，支持实时对局、AI分析和棋谱研究',
    goForum: '围棋论坛',
    goForumDesc: '围棋爱好者交流社区，分享棋谱、讨论技巧、获取最新围棋资讯',
    liveSystem: '直播系统',
    liveSystemDesc: '专业的围棋赛事直播平台，支持多角度观看和实时解说',
    smartClock: '视频转播一体智能棋钟',
    smartClockDesc: '集计时、摄像、棋盘识别、实时同步等功能于一体的革命性硬件设备',
    comingSoon: '即将推出',
    
    // About
    aboutTitle: '关于黑米科技',
    aboutDescription: '黑米科技致力于将传统围棋文化与现代科技完美融合，通过创新的软硬件产品，为围棋爱好者提供更好的学习、对弈和交流体验。',
    ourMission: '我们的使命',
    missionText: '推动围棋文化的数字化传承，让更多人能够便捷地学习和享受围棋的魅力。',
    ourVision: '我们的愿景',
    visionText: '成为全球领先的围棋科技公司，构建完整的围棋生态系统。',
    funding: '我们正在寻求融资支持，共同推动围棋科技的发展。',
    
    // Footer
    followUs: '关注我们',
    allRightsReserved: '版权所有',
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    forum: 'Forum',
    live: 'Live',
    about: 'About',
    
    // Hero Section
    heroTitle: 'BlackRice Tech',
    heroSubtitle: 'Innovating Go Technology',
    heroDescription: 'Building a comprehensive Go ecosystem platform, from online gaming to smart hardware, bringing Go culture to life in the digital age',
    learnMore: 'Learn More',
    
    // Products
    productsTitle: 'Our Products',
    blackriceGo: 'BlackRice Go',
    blackriceGoDesc: 'Professional online Go gaming platform with real-time matches, AI analysis, and game record studies',
    goForum: 'Go Forum',
    goForumDesc: 'Community for Go enthusiasts to share game records, discuss techniques, and get latest Go news',
    liveSystem: 'Live System',
    liveSystemDesc: 'Professional Go tournament streaming platform with multi-angle viewing and real-time commentary',
    smartClock: 'Smart Go Clock with Video Broadcasting',
    smartClockDesc: 'Revolutionary hardware device integrating timing, camera, board recognition, and real-time synchronization',
    comingSoon: 'Coming Soon',
    
    // About
    aboutTitle: 'About BlackRice Tech',
    aboutDescription: 'BlackRice Tech is dedicated to perfectly combining traditional Go culture with modern technology, providing better learning, gaming, and communication experiences for Go enthusiasts through innovative software and hardware products.',
    ourMission: 'Our Mission',
    missionText: 'To promote the digital inheritance of Go culture and make it easier for more people to learn and enjoy the charm of Go.',
    ourVision: 'Our Vision',
    visionText: 'To become the world\'s leading Go technology company and build a complete Go ecosystem.',
    funding: 'We are seeking funding support to jointly promote the development of Go technology.',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All Rights Reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};