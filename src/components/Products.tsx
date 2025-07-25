import React from 'react';
import { Gamepad2, Users, Video, Clock, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "BlackRice Go Platform",
      description: "Comprehensive Go gaming platform with AI-powered analysis, real-time multiplayer, and intelligent tutoring systems.",
      features: ["Real-time multiplayer", "AI game analysis", "Skill progression tracking", "Tournament system"],
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community & Forums",
      description: "Vibrant community platform where players share strategies, discuss games, and learn from AI-generated insights.",
      features: ["Discussion forums", "Game sharing", "AI-powered insights", "Expert commentary"],
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Streaming Platform",
      description: "Professional streaming solution for Go tournaments and educational content with integrated AI commentary.",
      features: ["HD streaming", "AI commentary", "Multi-angle views", "Interactive chat"],
      status: "Beta",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Broadcast Clock",
      description: "Revolutionary hardware combining precision timing, board recognition, and seamless broadcast integration.",
      features: ["Board recognition", "Auto-sync timing", "Broadcast integration", "Cloud connectivity"],
      status: "In Development",
      statusColor: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building an integrated ecosystem of AI-powered tools and platforms 
            that enhance every aspect of strategy gaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  {product.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn more
                <ArrowRight className="ml-1" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;