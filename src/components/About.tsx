import React from 'react';
import { Target, Lightbulb, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Bridging ancient wisdom with modern technology
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2024, BlackRice Tech emerged from a simple observation: traditional strategy 
              games like Go contain thousands of years of accumulated wisdom, but modern technology 
              could unlock new ways to learn, play, and connect around these timeless pursuits.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines deep expertise in artificial intelligence, game design, and community 
              building to create products that respect tradition while embracing innovation. We believe 
              that the future of gaming lies not in replacing human intelligence, but in augmenting it.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;