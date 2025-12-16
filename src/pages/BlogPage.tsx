import { useState } from 'react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Social Media Marketing in 2024',
      category: 'strategy',
      date: 'Dec 15, 2024',
      image: '📱',
      excerpt: 'Discover the emerging trends and strategies that will define social media marketing in 2024.',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'How to Create Viral Content That Drives Conversions',
      category: 'content',
      date: 'Dec 12, 2024',
      image: '🚀',
      excerpt: 'Learn the psychology behind viral content and how to create posts that actually convert.',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Instagram Algorithm Explained: A Deep Dive',
      category: 'algorithm',
      date: 'Dec 10, 2024',
      image: '📊',
      excerpt: 'Understand how the Instagram algorithm works and optimize your posts for maximum reach.',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'TikTok Marketing Strategies for Businesses',
      category: 'platforms',
      date: 'Dec 8, 2024',
      image: '🎵',
      excerpt: 'Master TikTok marketing with proven strategies for business growth and engagement.',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Building an Engaged Community on LinkedIn',
      category: 'platforms',
      date: 'Dec 5, 2024',
      image: '💼',
      excerpt: 'B2B gold rush: Learn how to leverage LinkedIn for authentic business growth.',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Social Media ROI: How to Measure What Matters',
      category: 'analytics',
      date: 'Dec 1, 2024',
      image: '📈',
      excerpt: 'Discover the key metrics and KPIs that actually matter for your social media success.',
      readTime: '8 min read',
    },
    {
      id: 7,
      title: 'Influencer Marketing Done Right',
      category: 'strategy',
      date: 'Nov 28, 2024',
      image: '⭐',
      excerpt: 'How to partner with influencers effectively and ensure authentic brand collaboration.',
      readTime: '7 min read',
    },
    {
      id: 8,
      title: 'Video Marketing Trends Everyone Should Know',
      category: 'content',
      date: 'Nov 25, 2024',
      image: '🎬',
      excerpt: 'Short-form to long-form: everything you need to know about video content in 2024.',
      readTime: '6 min read',
    },
  ];

  const categories = [
    'all',
    'strategy',
    'content',
    'algorithm',
    'platforms',
    'analytics',
  ];

  const filtered = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center space-y-6">
            <h1 className="font-coolvetica text-5xl md:text-7xl text-soft-white font-bold leading-tight">
              Our <span className="text-royal-blue">Blog</span>
            </h1>
            <p className="text-xl text-soft-white/70 max-w-2xl mx-auto font-montreal">
              Insights, strategies, and tips from social media experts
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Post */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-8 md:p-12 hover:border-royal-blue/40 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-6xl">{blogPosts[0].image}</div>
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-royal-blue/20 rounded-full">
                    <span className="text-royal-blue font-semibold text-sm">Featured Post</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-soft-white">{blogPosts[0].title}</h2>
                  <p className="text-soft-white/70">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-soft-white/60">{blogPosts[0].date}</span>
                    <span className="text-soft-white/60">•</span>
                    <span className="text-soft-white/60">{blogPosts[0].readTime}</span>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-royal-blue text-soft-white rounded-full hover:shadow-lg hover:shadow-royal-blue/30 transition-all duration-300">
                    Read Article →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-montreal font-semibold transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? 'bg-royal-blue text-soft-white'
                    : 'bg-soft-white/5 text-soft-white/70 hover:bg-soft-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.slice(1).map(post => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-2xl flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-6 hover:border-royal-blue/40 transition-all duration-300 h-full flex flex-col">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <h3 className="text-xl font-bold text-soft-white mb-3 flex-grow">{post.title}</h3>
                  <p className="text-soft-white/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-soft-white/10">
                    <div>
                      <p className="text-sm text-soft-white/60">{post.date}</p>
                      <p className="text-sm text-soft-white/60">{post.readTime}</p>
                    </div>
                    <button className="px-3 py-1 bg-royal-blue/20 text-royal-blue rounded hover:bg-royal-blue/30 transition-all duration-300">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/30 rounded-2xl p-12 text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold">
              Subscribe to Our <span className="text-royal-blue">Newsletter</span>
            </h2>
            <p className="text-lg text-soft-white/70">
              Get the latest social media insights, tips, and strategies delivered to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-soft-white/10 border border-soft-white/20 rounded-full text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-royal-blue transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-royal-blue text-soft-white rounded-full hover:shadow-lg hover:shadow-royal-blue/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-soft-white/60">No spam, just valuable content. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Resource Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Free <span className="text-royal-blue">Resources</span>
            </h2>
            <p className="text-xl text-soft-white/60">Tools and guides to accelerate your social media growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Audit Template',
                description: 'Comprehensive template to analyze your current social strategy.',
                icon: '📋',
              },
              {
                title: 'Content Calendar 2025',
                description: 'Ready-to-use content calendar with seasonal trends and holidays.',
                icon: '📅',
              },
              {
                title: 'Analytics Dashboard Guide',
                description: 'Learn to track and measure your social media performance.',
                icon: '📊',
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl hover:border-royal-blue/40 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-soft-white mb-2">{resource.title}</h3>
                <p className="text-soft-white/60 mb-4">{resource.description}</p>
                <button className="px-4 py-2 bg-royal-blue/20 text-royal-blue rounded-full hover:bg-royal-blue/30 transition-all duration-300">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/30 rounded-2xl p-12 text-center space-y-6">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold">
              Ready to Grow Your Social Media?
            </h2>
            <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
              Let our experts create a customized strategy for your brand's success.
            </p>
            <button className="ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
