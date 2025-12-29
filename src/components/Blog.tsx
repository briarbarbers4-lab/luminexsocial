import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  featured?: boolean;
  readTime: string;
}

const categories = ['All', 'AI Automation', 'Video Tips', 'Content Strategy', 'Case Studies'];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Social Media Marketing: 2025 Predictions',
    excerpt: 'Explore how artificial intelligence is revolutionizing social media strategies. From predictive analytics to personalized content creation, discover the trends that will shape the industry.',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1677442d019cecc7d5f2b5ef3dff4ed5c02b637cb3370dae203ec53a0b3b0d6a?w=800&q=80',
    author: 'Alex Chen',
    date: 'Dec 15, 2025',
    featured: true,
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Video Content Mastery: Tips for Creating Viral Social Media Videos',
    excerpt: 'Learn the techniques behind creating compelling short-form videos. We break down the formula for hook, engagement, and conversion that top creators use daily.',
    category: 'Video Tips',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
    author: 'Jordan Lee',
    date: 'Dec 12, 2025',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'How We Automated a Fortune 500 Marketing Campaign',
    excerpt: 'Discover how Luminex Social used AI automation to increase campaign efficiency by 300%. A detailed case study showing real results and methodology.',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    author: 'Sarah Martinez',
    date: 'Dec 10, 2025',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Content Strategy Framework: From Planning to Execution',
    excerpt: 'A comprehensive guide to building a content strategy that converts. Learn the framework we use with our clients to consistently drive results.',
    category: 'Content Strategy',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&q=80',
    author: 'Mike Thompson',
    date: 'Dec 8, 2025',
    readTime: '9 min read',
  },
  {
    id: 5,
    title: 'AI-Powered Influencer Matching: Finding Your Perfect Partners',
    excerpt: 'See how machine learning algorithms help identify the best influencers for your brand. Maximize ROI with data-driven influencer selection.',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    author: 'Emma Wilson',
    date: 'Dec 5, 2025',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: '5 YouTube Shorts Ideas That Generated 1M+ Views',
    excerpt: 'We analyzed our top-performing short videos to identify patterns. Here are the 5 concepts that consistently drive massive engagement.',
    category: 'Video Tips',
    image: 'https://images.unsplash.com/photo-1516534775068-bb5ff32b1358?w=800&q=80',
    author: 'Lisa Park',
    date: 'Dec 1, 2025',
    readTime: '6 min read',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-soft-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className={`font-coolvetica text-5xl md:text-6xl text-primary-dark mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Insights & <span className="font-allura text-royal-blue italic">Resources</span>
          </h2>
          <p 
            className={`font-montreal text-xl text-primary-dark/70 mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Tips, trends, and tutorials from our team
          </p>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-montreal font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-royal-blue text-soft-white shadow-[0_0_20px_rgba(13,33,161,0.3)]'
                    : 'bg-white text-primary-dark border border-deep-purple/20 hover:border-royal-blue/50 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div 
          className={`mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href={`#blog-${featuredPost.id}`} className="group">
            <div 
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 h-96 md:h-[450px]"
              style={{
                background: 'rgba(13, 33, 161, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(13, 33, 161, 0.1)',
              }}
            >
              {/* Background Image */}
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 bg-royal-blue/80 backdrop-blur-sm text-soft-white text-xs font-inter rounded-full border border-royal-blue/50">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-soft-white text-xs font-inter rounded-full">
                    FEATURED
                  </span>
                </div>

                <div>
                  <h3 className="font-montreal text-3xl md:text-4xl text-soft-white mb-4 leading-tight group-hover:text-royal-blue transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="font-inter text-soft-white/80 text-lg mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-soft-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-inter">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-inter">{featuredPost.date}</span>
                    </div>
                    <span className="font-inter">{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Hover Button */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 px-6 py-3 bg-royal-blue text-soft-white rounded-full font-inter hover:scale-105 transition-transform duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post, index) => (
            <a 
              key={post.id}
              href={`#blog-${post.id}`}
              className={`group transition-all duration-700 opacity-100 translate-y-0`}
              style={{ transitionDelay: isVisible ? `${300 + index * 75}ms` : '0ms' }}
            >
              <div 
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col hover:shadow-[0_20px_40px_rgba(13,33,161,0.15)] hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(13, 33, 161, 0.1)',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Category Tag */}
                  <span className="inline-block w-fit px-3 py-1 bg-royal-blue/10 text-royal-blue text-xs font-inter rounded-full mb-3 border border-royal-blue/20">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-montreal text-lg text-primary-dark mb-3 line-clamp-2 group-hover:text-royal-blue transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-inter text-primary-dark/60 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-primary-dark/50 border-t border-primary-dark/10 pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span className="font-inter">{post.author}</span>
                    </div>
                    <span className="font-inter">{post.readTime}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-primary-dark/50 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span className="font-inter">{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center gap-2 text-royal-blue font-inter text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a href="#blog-all">
            <button className="ripple px-8 py-4 bg-royal-blue text-soft-white rounded-full font-montreal font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(13,33,161,0.2)]">
              View All Articles
            </button>
          </a>
        </div>
      </div>

      {/* Floating Orbs Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
}
