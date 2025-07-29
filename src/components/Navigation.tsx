import React from 'react';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BlackRiceLogo from '../BlackRiceLogo25.webp';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={BlackRiceLogo} 
              alt="BlackRice Logo" 
              className="w-8 h-8 object-contain rounded-md"
            />
            <span className="text-xl font-semibold text-gray-900">BlackRice</span>
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/product" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/product') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('product')}
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/solutions') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('solutions')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/blog') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('blog')}
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/careers') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('careers')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('contact')}
            </Link>
          </div>

          {/* Right side - Secondary links and buttons */}
          <div className="flex items-center space-x-4">
            {/* Secondary links - hidden on smaller screens */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="#help" className="text-gray-600 hover:text-gray-900 transition-colors">{t('helpCenter')}</a>
              <a href="#enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">{t('enterprise')}</a>
              <a href="#partners" className="text-gray-600 hover:text-gray-900 transition-colors">{t('partners')}</a>
            </div>
            
            {/* Language Toggle - always visible */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-md hover:bg-gray-100"
              title={language === 'en' ? 'Switch to Chinese' : '切换到英文'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'EN' : '中文'}</span>
            </button>
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <a href="#login" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                {t('login')}
              </a>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                {t('signup')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;