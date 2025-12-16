export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote: 'Luminex Social completely transformed our brand presence. Their strategic approach and creative execution exceeded all our expectations.',
      author: 'Sarah Chen',
      role: 'CEO, TechStart Inc',
      company: 'techstart-logo',
      rating: 5,
      result: '+320% Engagement Growth',
    },
    {
      id: 2,
      quote: 'The team is incredibly professional, responsive, and truly understands our business goals. They\'re not just vendors, they\'re partners.',
      author: 'Michael Johnson',
      role: 'Marketing Director, Beauty Co',
      company: 'beautyco-logo',
      rating: 5,
      result: '2.5M Monthly Impressions',
    },
    {
      id: 3,
      quote: 'We saw measurable ROI within the first month. Every campaign is data-driven and results-focused. Highly recommend!',
      author: 'Emily Rodriguez',
      role: 'Founder, E-Commerce Plus',
      company: 'ecom-logo',
      rating: 5,
      result: '+250% Sales Growth',
    },
    {
      id: 4,
      quote: 'Outstanding creative work combined with real expertise in social media marketing. They helped us reach new audiences we never thought possible.',
      author: 'David Lee',
      role: 'Founder, Fitness Hub',
      company: 'fitnesshub-logo',
      rating: 5,
      result: '150K Community Members',
    },
    {
      id: 5,
      quote: 'The transparency and regular communication are exceptional. We always know exactly what\'s happening with our campaigns.',
      author: 'Jennifer Martin',
      role: 'Director, Real Estate Global',
      company: 'realestateglobal-logo',
      rating: 5,
      result: '45% Conversion Rate',
    },
    {
      id: 6,
      quote: 'Creative, strategic, and results-driven. Luminex Social sets the standard for social media agencies.',
      author: 'Robert Thompson',
      role: 'COO, B2B Solutions',
      company: 'b2bsolutions-logo',
      rating: 5,
      result: '500+ Qualified Leads',
    },
    {
      id: 7,
      quote: 'Their ability to understand our brand voice and translate it into engaging content is remarkable. Couldn\'t ask for better partners.',
      author: 'Amanda Foster',
      role: 'CMO, Fashion Forward',
      company: 'fashionforward-logo',
      rating: 5,
      result: '+400% Follower Growth',
    },
    {
      id: 8,
      quote: 'Professional, creative, and driven by results. Luminex Social helped us achieve goals we thought were impossible.',
      author: 'James Wilson',
      role: 'CEO, Digital Innovations',
      company: 'digitalinnovations-logo',
      rating: 5,
      result: '+500% Content Engagement',
    },
  ];

  const stats = [
    { number: '150+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '500M+', label: 'Total Reach Generated' },
    { number: '98%', label: 'Retention Rate' },
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center space-y-6">
            <h1 className="font-coolvetica text-5xl md:text-7xl text-soft-white font-bold leading-tight">
              Client <span className="text-royal-blue">Testimonials</span>
            </h1>
            <p className="text-xl text-soft-white/70 max-w-2xl mx-auto font-montreal">
              Hear from businesses we've helped succeed
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl"
              >
                <p className="text-4xl md:text-5xl font-bold text-royal-blue font-coolvetica">{stat.number}</p>
                <p className="text-soft-white/60 mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-8 hover:border-royal-blue/40 transition-all duration-300">
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <blockquote className="text-soft-white/80 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-soft-white">{testimonial.author}</p>
                      <p className="text-soft-white/60 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-royal-blue">{testimonial.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Video <span className="text-royal-blue">Testimonials</span>
            </h2>
            <p className="text-xl text-soft-white/60">See clients share their experiences</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Client Success Story #1', duration: '2:45' },
              { name: 'Client Success Story #2', duration: '3:12' },
              { name: 'Client Success Story #3', duration: '2:58' },
            ].map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl aspect-video flex items-center justify-center hover:border-royal-blue/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-soft-white font-bold">{video.name}</p>
                    <p className="text-soft-white/60 mt-2">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Why Clients Love <span className="text-royal-blue">Us</span>
            </h2>
            <p className="text-xl text-soft-white/60">What our customers consistently tell us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Results-Driven Approach',
                description: 'We focus on measurable outcomes and ROI, not just vanity metrics.',
              },
              {
                title: 'Transparent Communication',
                description: 'Weekly reports and regular updates keep you informed every step of the way.',
              },
              {
                title: 'Creative Excellence',
                description: 'Our award-winning team creates content that stands out and drives engagement.',
              },
              {
                title: 'Strategic Expertise',
                description: 'Data-backed strategies tailored to your specific business goals.',
              },
              {
                title: '24/7 Support',
                description: 'Responsive team always ready to help and address your needs.',
              },
              {
                title: 'Industry Knowledge',
                description: 'Experience across multiple industries and markets worldwide.',
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl hover:border-royal-blue/40 transition-all duration-300"
              >
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-soft-white mb-3">{reason.title}</h3>
                <p className="text-soft-white/60">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Trusted by <span className="text-royal-blue">Industry Leaders</span>
            </h2>
            <p className="text-lg text-soft-white/70 mb-12">
              From startups to Fortune 500 companies, businesses trust Luminex Social to elevate their brands
            </p>
            <div className="grid md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              {['🏢', '🚀', '💼', '🎯', '⭐'].map((logo, index) => (
                <div key={index} className="text-5xl">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/30 rounded-2xl p-12 text-center space-y-6">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold">
              Join Our Success Stories
            </h2>
            <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
              Ready to achieve remarkable results? Let's discuss how Luminex Social can transform your brand.
            </p>
            <button className="ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105">
              Schedule a Call Today
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
