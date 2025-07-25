import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BR</span>
              </div>
              <span className="text-xl font-bold">BlackRice Tech</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building the future of strategy gaming through AI-powered platforms and intelligent hardware solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/blackricetech"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@blackricetech.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-200">Team</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">BlackRice Go</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Live Streaming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Smart Clock</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BlackRice Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;