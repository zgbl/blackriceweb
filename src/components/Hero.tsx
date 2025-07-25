import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Currently raising seed funding
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building the future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> strategy gaming</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BlackRice Tech combines artificial intelligence with traditional strategy games, 
              starting with Go. We're creating intelligent platforms that enhance learning, 
              competition, and community for strategy game enthusiasts worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                <Play className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              {/* Main product mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="grid grid-cols-19 gap-1 mb-4">
                    {/* Go board representation */}
                    {Array.from({ length: 361 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-amber-100 border border-amber-200 rounded-sm"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>AI Analysis: 67% win probability</span>
                    <span className="text-green-600">● Live</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500">Smart Clock</div>
                <div className="text-lg font-bold text-gray-900">15:42</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500">Community</div>
                <div className="text-lg font-bold text-gray-900">2.3K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;