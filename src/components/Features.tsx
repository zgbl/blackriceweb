import React from 'react';
import { Brain, Zap, Users, Shield, BarChart3, Smartphone, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your gameplay and provide personalized insights to improve your strategy.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-time Streaming',
      description: 'Broadcast your games live with integrated streaming tools and engage with a global community of Go enthusiasts.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with players worldwide, join tournaments, and participate in discussions with our vibrant Go community.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Smart Hardware',
      description: 'Our intelligent Go clock with video streaming capabilities brings traditional gameplay into the digital age.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed statistics, game analysis, and performance metrics over time.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Play seamlessly across all devices with our responsive web platform and upcoming mobile applications.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Go</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of traditional Go gameplay with cutting-edge technology. 
            Our platform offers everything you need to master the game.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore All Features
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;