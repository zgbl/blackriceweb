import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">黑</span>
            </div>
            <span className="text-xl font-bold text-gray-800">BlackRice Tech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {t('products')}
            </button>
            <a 
              href="#forum" 
              className="text-gray-700 hover:text-black transition-colors"
            >
              {t('forum')}
            </a>
            <a 
              href="#live" 
              className="text-gray-700 hover:text-black transition-colors"
            >
              {t('live')}
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {t('about')}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;