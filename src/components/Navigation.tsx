import React from 'react';
import { Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BlackRiceLogo from '../BlackRiceLogo1.ico';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
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
              className="w-8 h-8 object-contain"
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
              Home
            </Link>
            <Link 
              to="/product" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/product') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Product
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/solutions') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/blog') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/careers') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
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