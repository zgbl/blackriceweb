import React from 'react';
import { Users, GraduationCap, Trophy, Building2, ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Users,
      title: 'For Individual Players',
      description: 'Improve your game with AI-powered analysis, personalized training, and detailed performance insights.',
      features: ['AI move analysis', 'Personal coaching', 'Progress tracking', 'Community access'],
      cta: 'Start playing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'For Schools & Education',
      description: 'Comprehensive Go education platform with curriculum, student management, and progress tracking.',
      features: ['Curriculum management', 'Student progress', 'Classroom tools', 'Assessment system'],
      cta: 'Learn more',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: 'For Tournaments',
      description: 'Professional tournament management with live streaming, automated pairing, and real-time results.',
      features: ['Tournament management', 'Live streaming', 'Automated pairing', 'Real-time scoring'],
      cta: 'Host tournament',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      title: 'For Organizations',
      description: 'Enterprise-grade Go platform for clubs, associations, and professional organizations.',
      features: ['Member management', 'Custom branding', 'Analytics dashboard', 'API integration'],
      cta: 'Contact sales',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions for every
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Go player</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a beginner learning the basics or a professional organizing tournaments, 
            we have the perfect solution for your needs.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon and title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="group/btn inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                {solution.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can work with you to create a tailored Go platform that meets your specific requirements.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
              Contact our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;