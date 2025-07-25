import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Former AI researcher at DeepMind. 15+ years in machine learning and game AI.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer specializing in distributed systems and real-time platforms.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "David Liu",
      role: "Head of Product",
      bio: "Product leader from Riot Games. Expert in community-driven gaming platforms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Maya Patel",
      role: "Lead AI Engineer",
      bio: "PhD in Computer Science from Stanford. Specialized in game theory and reinforcement learning.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of engineers, designers, and strategists united by our passion 
            for AI and traditional games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-3">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and gaming. 
              Check out our open positions or reach out if you think you'd be a great fit.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;