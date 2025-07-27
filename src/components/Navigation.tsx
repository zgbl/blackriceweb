import React from 'react';
import { Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
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

          {/* Main Navigation */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#product" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Product
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Solutions
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#blog" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Blog
            </a>
            <a href="#careers" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Careers
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* Right side - Secondary links and buttons */}
          <div className="flex items-center space-x-4">
            {/* Secondary links */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="#help" className="text-gray-600 hover:text-gray-900 transition-colors">Help center</a>
              <a href="#enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a>
              <a href="#partners" className="text-gray-600 hover:text-gray-900 transition-colors">Partners</a>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <a href="#login" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Log in
              </a>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;