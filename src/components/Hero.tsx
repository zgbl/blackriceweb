import React from 'react';
import { Play, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Announcement bar */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Raising Angel round • USD 500K target 
          </div>
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Email signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap">
              {t('getStarted')}
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              <Play className="mr-2 w-5 h-5" />
              {t('watchDemo')}
            </button>
            <span className="text-gray-400">•</span>
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex -space-x-2 mr-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              {t('joinPlayers')}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-8">{t('trustedBy')}</p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">{t('activePlayers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-500">{t('gamesAnalyzed')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-500">{t('uptime')}</div>
              </div>
            </div>
          </div>

          {/* Product preview */}
          <div className="pt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 inline-block">
                      app.blackrice.ai
                    </div>
                  </div>
                </div>
                
                {/* App interface mockup */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="grid grid-cols-8 gap-1">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <div
                              key={i}
                              className={`aspect-square rounded-sm ${
                                Math.random() > 0.8 ? 'bg-gray-900' : 
                                Math.random() > 0.9 ? 'bg-white border border-gray-300' : 'bg-gray-100'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-blue-900 mb-2">{t('realTimeAnalysis')}</div>
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                          <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-sm font-medium text-green-900 mb-2">Live Match</div>
                        <div className="flex items-center text-xs text-green-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          3 viewers watching
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                {t('realTimeAnalysis')}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                {t('smartHardware')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;