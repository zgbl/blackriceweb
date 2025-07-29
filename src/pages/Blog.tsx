import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Weiqi: How Machine Learning is Revolutionizing the Ancient Game",
      excerpt: "Explore how artificial intelligence is transforming the way we play, learn, and understand Weiqi.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Mastering Joseki: Essential Corner Patterns Every Player Should Know",
      excerpt: "A comprehensive guide to the most important corner sequences in modern Weiqi.",
      author: "Master Li Wei",
      date: "2024-01-10",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "BlackRice Tournament Series: Bringing Professional Weiqi to the Digital Age",
      excerpt: "Learn about our upcoming tournament series and how we're modernizing competitive Weiqi.",
      author: "Tournament Team",
      date: "2024-01-05",
      category: "Tournaments",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('blogTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('blogSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="text-sm font-medium text-blue-600 mb-2">FEATURED POST</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of AI in Weiqi: How Machine Learning is Revolutionizing the Ancient Game
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence is transforming the way we play, learn, and understand Weiqi. From AlphaGo to modern AI assistants, discover the evolution of machine learning in the game.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">Dr. Sarah Chen</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 15, 2024</span>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center">
                  {t('readFullArticle')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('latestArticles')}
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest insights and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    {t('readMore')}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('stayUpdated')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, strategies, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('enterEmail')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;