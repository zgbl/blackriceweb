import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of AI in Strategy Games",
      excerpt: "Exploring how artificial intelligence is revolutionizing traditional board games and creating new opportunities for learning and competition.",
      author: "Alex Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop"
    },
    {
      title: "Building Community in Digital Gaming",
      excerpt: "How we're fostering meaningful connections between players across cultures through our platform design and community features.",
      author: "David Liu",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      title: "Announcing Our Seed Funding Round",
      excerpt: "We're excited to share that we're raising our seed round to accelerate product development and expand our team.",
      author: "Sarah Kim",
      date: "March 5, 2024",
      readTime: "3 min read",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with our latest developments, insights, and company news.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read more
                  <ArrowRight className="ml-1" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200 font-medium">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;