import { useState } from 'react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Growth Campaign',
      category: 'ecommerce',
      image: '🛍️',
      description: 'Increased sales by 150% through strategic social campaigns',
      stats: '+150% Sales Growth',
    },
    {
      id: 2,
      title: 'Tech Startup Launch',
      category: 'tech',
      image: '💻',
      description: 'Built brand awareness from 0 to 50K followers in 3 months',
      stats: '50K Followers',
    },
    {
      id: 3,
      title: 'Beauty Brand Rebranding',
      category: 'beauty',
      image: '💄',
      description: 'Complete rebranding and social strategy overhaul',
      stats: '2M+ Impressions/Month',
    },
    {
      id: 4,
      title: 'B2B Lead Generation',
      category: 'b2b',
      image: '📈',
      description: 'Generated 500+ qualified leads through LinkedIn strategy',
      stats: '500+ Leads',
    },
    {
      id: 5,
      title: 'Fitness Brand Community',
      category: 'wellness',
      image: '💪',
      description: 'Built engaged community of 100K+ fitness enthusiasts',
      stats: '100K+ Community',
    },
    {
      id: 6,
      title: 'Real Estate Virtual Tours',
      category: 'realestate',
      image: '🏠',
      description: 'Virtual property showcases with high conversion rates',
      stats: '45% Conversion Rate',
    },
  ];

  const categories = ['all', 'ecommerce', 'tech', 'beauty', 'b2b', 'wellness', 'realestate'];

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center space-y-6">
            <h1 className="font-coolvetica text-5xl md:text-7xl text-soft-white font-bold leading-tight">
              Our <span className="text-royal-blue">Portfolio</span>
            </h1>
            <p className="text-xl text-soft-white/70 max-w-2xl mx-auto font-montreal">
              Showcase of successful projects and measurable results
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Filter Buttons */}
      <section className="py-12 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-montreal font-semibold transition-all duration-300 capitalize ${
                  activeFilter === category
                    ? 'bg-royal-blue text-soft-white'
                    : 'bg-soft-white/5 text-soft-white/70 hover:bg-soft-white/10'
                }`}
              >
                {category === 'realestate' ? 'Real Estate' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map(project => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-8 hover:border-royal-blue/40 transition-all duration-300 h-full flex flex-col">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-2xl font-bold text-soft-white mb-2">{project.title}</h3>
                  <p className="text-soft-white/70 mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-soft-white/10">
                    <span className="text-lg font-bold text-royal-blue">{project.stats}</span>
                    <button className="px-4 py-2 bg-royal-blue/20 text-royal-blue rounded-lg hover:bg-royal-blue/30 transition-all duration-300">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Proven <span className="text-royal-blue">Results</span>
            </h2>
            <p className="text-xl text-soft-white/60">Across all our projects</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '+450%', label: 'Average Engagement Growth' },
              { number: '2M+', label: 'Total Reach Generated' },
              { number: '250+', label: 'Successful Campaigns' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((result, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl"
              >
                <p className="text-4xl md:text-5xl font-bold text-royal-blue font-coolvetica">{result.number}</p>
                <p className="text-soft-white/60 mt-3">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-soft-white/60">Success stories from our partners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Luminex Social transformed our social media presence completely. Within 3 months, we saw incredible growth and engagement.',
                author: 'Sarah Chen',
                role: 'CEO, TechStart Inc',
                emoji: '⭐⭐⭐⭐⭐',
              },
              {
                quote: 'The team is incredibly creative and responsive. They understood our brand vision and executed it perfectly.',
                author: 'Michael Johnson',
                role: 'Marketing Director, Beauty Co',
                emoji: '⭐⭐⭐⭐⭐',
              },
              {
                quote: 'ROI has been phenomenal. Every dollar invested in Luminex Social came back multiplied. Highly recommend!',
                author: 'Emily Rodriguez',
                role: 'Founder, E-Commerce Plus',
                emoji: '⭐⭐⭐⭐⭐',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl"
              >
                <p className="text-soft-white/80 mb-4">"{testimonial.quote}"</p>
                <div className="mb-3">{testimonial.emoji}</div>
                <p className="font-bold text-soft-white">{testimonial.author}</p>
                <p className="text-soft-white/60">{testimonial.role}</p>
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
              Let's Create Your Success Story
            </h2>
            <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
              Ready to join our portfolio of successful clients? Let's discuss your project.
            </p>
            <button className="ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
