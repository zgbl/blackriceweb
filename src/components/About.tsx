import React from 'react';
import { Target, Lightbulb, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "Democratizing access to high-quality strategy gaming through AI-powered tools and platforms."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible when traditional games meet cutting-edge technology."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Building bridges between cultures through the universal language of strategic thinking."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Creating long-term value for players, partners, and the broader gaming ecosystem."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('ourMission')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('ourVision')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Currently Seeking</h3>
              <p className="text-gray-600 mb-4">
                We're raising our seed round to accelerate product development and expand our team. 
                Looking for investors who share our vision of AI-enhanced strategy gaming.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Investment Deck →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;