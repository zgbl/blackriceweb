import React from 'react';
import { Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#help" className="text-white hover:text-gray-300 transition-colors">Help center</a>
              <a href="#enterprise" className="text-white hover:text-gray-300 transition-colors">Enterprise</a>
              <a href="#partners" className="text-white hover:text-gray-300 transition-colors">Partners</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <Globe className="w-4 h-4" />
                <span>United States - EN</span>
              </div>
              <a href="#login" className="text-white hover:text-gray-300 transition-colors">Log in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - 永远显示，没有隐藏按钮 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BR</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">BlackRice</span>
            </div>

            {/* Navigation - 在所有屏幕尺寸上都显示 */}
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <a href="#platform" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                Platform
              </a>
              <a href="#product" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                Product
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                Solutions
              </a>
              <a href="#resources" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                Resources
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                About
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm md:text-base">
                Pricing
              </a>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-3 py-2 md:px-4 rounded-lg font-medium border border-gray-300 transition-all duration-200 text-sm">
                Sign up
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 md:px-4 rounded-lg font-medium transition-all duration-200 text-sm">
                Get demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;