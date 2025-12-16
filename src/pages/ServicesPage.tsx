export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center space-y-6">
            <h1 className="font-coolvetica text-5xl md:text-7xl text-soft-white font-bold leading-tight">
              Our <span className="text-royal-blue">Services</span>
            </h1>
            <p className="text-xl text-soft-white/70 max-w-2xl mx-auto font-montreal">
              Comprehensive solutions tailored to elevate your brand's social media presence
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Main Services */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Social Media Strategy',
                description: 'Comprehensive strategies designed to align with your business goals and target audience.',
                features: ['Market Analysis', 'Audience Research', 'Content Planning', 'Growth Roadmap'],
                icon: '📊',
              },
              {
                title: 'Content Creation',
                description: 'Engaging, branded content crafted to capture attention and drive meaningful interactions.',
                features: ['Graphic Design', 'Video Production', 'Copywriting', 'Brand Storytelling'],
                icon: '✨',
              },
              {
                title: 'Community Management',
                description: 'Active engagement and management to build loyal communities around your brand.',
                features: ['24/7 Monitoring', 'Response Management', 'Community Building', 'Crisis Management'],
                icon: '👥',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Detailed insights and metrics to track performance and optimize strategies.',
                features: ['Performance Tracking', 'ROI Analysis', 'Custom Reports', 'Data Visualization'],
                icon: '📈',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-8 hover:border-royal-blue/40 transition-all duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-soft-white mb-2">{service.title}</h3>
                  <p className="text-soft-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-soft-white/60">
                        <span className="w-2 h-2 bg-royal-blue rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Add-ons */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Premium <span className="text-royal-blue">Add-ons</span>
            </h2>
            <p className="text-xl text-soft-white/60">Enhance your package with specialized services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Influencer Partnerships', description: 'Connect with relevant influencers in your industry' },
              { title: 'Paid Advertising', description: 'Strategic paid campaigns for maximum reach and ROI' },
              { title: 'Brand Development', description: 'Complete brand identity and voice creation' },
              { title: 'E-commerce Integration', description: 'Seamless social selling and product promotion' },
              { title: 'Video Marketing', description: 'Professional video content production' },
              { title: 'PR & Media Relations', description: 'Press releases and media outreach' },
            ].map((addon, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl hover:border-royal-blue/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-soft-white mb-2">{addon.title}</h3>
                <p className="text-soft-white/60">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Pricing <span className="text-royal-blue">Plans</span>
            </h2>
            <p className="text-xl text-soft-white/60">Flexible packages for every budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$999',
                period: '/month',
                features: ['2 Social Media Platforms', '8 Posts per Month', 'Community Management', 'Monthly Report'],
              },
              {
                name: 'Professional',
                price: '$2,499',
                period: '/month',
                features: ['4 Social Media Platforms', '24 Posts per Month', 'Content Creation', 'Community Management', 'Weekly Reports', 'Paid Ads Management'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                features: ['All Platforms', 'Unlimited Content', 'Full Management', 'Custom Strategy', 'Real-time Support', 'Dedicated Account Manager'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-royal-blue/20 to-royal-blue/10 border-2 border-royal-blue scale-105'
                    : 'bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 hover:border-royal-blue/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-royal-blue text-soft-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-soft-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-royal-blue">{plan.price}</span>
                  <span className="text-soft-white/60 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-soft-white/70">
                      <span className="w-2 h-2 bg-royal-blue rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-royal-blue text-soft-white hover:shadow-lg hover:shadow-royal-blue/30'
                    : 'bg-soft-white/10 text-soft-white border border-soft-white/20 hover:border-royal-blue'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t border-soft-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
              Our <span className="text-royal-blue">Process</span>
            </h2>
            <p className="text-xl text-soft-white/60">How we deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Discovery', description: 'Understanding your brand, goals, and audience' },
              { step: 2, title: 'Strategy', description: 'Creating a tailored social media roadmap' },
              { step: 3, title: 'Execution', description: 'Implementing content and campaigns' },
              { step: 4, title: 'Optimization', description: 'Analyzing results and refining strategies' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-royal-blue/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-soft-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-soft-white mb-2">{item.title}</h3>
                <p className="text-soft-white/60">{item.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
              Choose the perfect plan for your business and watch your social media presence flourish.
            </p>
            <button className="ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
