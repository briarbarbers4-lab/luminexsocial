import { Bot, Sparkles, TrendingUp, CheckCircle2, ArrowRight, Zap, Star, Users, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

const mainServices = [
  {
    icon: Bot,
    title: 'AI Automation',
    subtitle: 'That Works While You Sleep',
    description: 'Streamline your workflow with intelligent automation that saves time and scales your operations effortlessly.',
    fullDescription: 'Transform repetitive tasks into automated workflows. From customer service to content scheduling, we build intelligent systems that save you time and scale your business effortlessly.',
    features: [
      'Custom AI Assistants & Voice Agents',
      'Social Media Automation',
      'Lead Generation & Qualification',
      'Email Marketing Automation',
      'Content Creation Workflows',
      'CRM & Database Management',
      'Data Entry & Processing',
      'Appointment Scheduling',
      'E-commerce Automation',
      'Workflow Integration',
    ],
    price: 'Custom Pricing',
    gradient: 'from-blue-500/20 to-purple-500/20',
    accentColor: 'blue',
    stats: { timeSaved: '20+', automation: '95%' }
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
    subtitle: 'That Drives Results',
    description: 'Engaging content crafted to resonate with your audience and amplify your brand across all platforms.',
    fullDescription: 'Stand out with professionally crafted content that tells your brand story. From written pieces to visual assets, we create content that engages your audience and drives measurable results across all platforms.',
    features: [
      'Video Editing Services',
      'Short-Form Social Content',
      'Motion Graphics & Visual Effects',
      'Podcast & Talking-Head Editing',
      'Branding & Visual Consistency',
      'Content Repurposing & Distribution Prep'
    ],
    price: 'Custom Pricing',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'purple',
    stats: { projects: '200+', satisfaction: '98%' }
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy & Growth',
    subtitle: 'That Scales Your Business',
    description: 'Data-driven strategies that accelerate growth and maximize ROI across all digital channels.',
    fullDescription: 'Unlock your business potential with comprehensive digital strategies. From market analysis to performance optimization, we create roadmaps that drive sustainable growth and measurable results.',
    features: [
      'Market Research & Analysis',
      'Competitive Intelligence',
      'Growth Strategy Development',
      'Performance Optimization',
      'Analytics & Reporting',
      'Conversion Rate Optimization',
      'A/B Testing & Experiments',
      'ROI Tracking & Attribution',
      'Campaign Management',
      'Brand Strategy & Positioning'
    ],
    price: 'Custom Pricing',
    gradient: 'from-green-500/20 to-teal-500/20',
    accentColor: 'green',
    stats: { clients: '50+' }
  },
];

export default function Services() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden" id="services">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 border border-royal-blue/20 rounded-full mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Zap className="w-4 h-4 text-royal-blue" />
            <span className="text-royal-blue font-medium text-sm">Our Expertise</span>
          </div>

          <h2
            className={`text-5xl md:text-7xl lg:text-8xl text-soft-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What We <span className="font-allura text-royal-blue italic">Do</span>
          </h2>

          <p
            className={`font-inter text-xl text-soft-white/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We combine cutting-edge AI automation with premium content creation to transform your digital presence and accelerate your growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2">200+</div>
            <div className="text-soft-white/70 font-inter">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2">98%</div>
            <div className="text-soft-white/70 font-inter">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2">50+</div>
            <div className="text-soft-white/70 font-inter">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-royal-blue mb-2">24/7</div>
            <div className="text-soft-white/70 font-inter">Support Available</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 service-card-enter ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Gradient */}
                <div className={`service-shimmer service-glow relative rounded-3xl overflow-hidden transition-all duration-500 transform animate-float-gentle ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(11, 13, 18, 0.95) 0%, rgba(11, 13, 18, 0.9) 100%)`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isHovered ? 'rgba(13, 33, 161, 0.4)' : 'rgba(247, 248, 252, 0.1)'}`,
                  boxShadow: isHovered
                    ? '0 25px 50px -12px rgba(13, 33, 161, 0.4), 0 0 0 1px rgba(13, 33, 161, 0.1)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}>

                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-royal-blue/20 rounded-full animate-ping`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 p-8 md:p-10">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, rgba(13, 33, 161, 0.2) 0%, rgba(13, 33, 161, 0.1) 100%)`,
                        border: '1px solid rgba(13, 33, 161, 0.3)'
                      }}>
                        <Icon className={`w-10 h-10 text-royal-blue transition-all duration-500 ${
                          isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                        }`} />
                      </div>

                      {/* Stats Badge */}
                      <div className={`px-3 py-1 bg-royal-blue/10 border border-royal-blue/20 rounded-full transition-all duration-300 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-royal-blue fill-current" />
                          <span className="text-xs text-royal-blue font-medium">
                            {service.stats.timeSaved && `${service.stats.timeSaved}hrs saved`}
                            {service.stats.projects && `${service.stats.projects} projects`}
                            {service.stats.clients && `${service.stats.clients} clients`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <h3 className="font-montreal text-3xl md:text-4xl text-soft-white font-bold mb-2 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-allura text-royal-blue text-2xl md:text-3xl italic">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-soft-white/80 leading-relaxed mb-8 text-lg">
                      {service.fullDescription}
                    </p>

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h4 className="font-montreal text-sm font-semibold text-soft-white uppercase tracking-wider mb-4">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className={`flex gap-3 items-start p-3 rounded-xl transition-all duration-300 ${
                              isHovered ? 'bg-royal-blue/5 translate-x-2' : 'bg-transparent'
                            }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-royal-blue flex-shrink-0 mt-0.5" />
                            <span className="font-inter text-soft-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pt-6 border-t border-soft-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-sm text-soft-white/60">Starting from</p>
                          <p className="text-2xl font-bold text-royal-blue">{service.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-soft-white/60">Ready to start?</p>
                          <p className="text-sm text-royal-blue font-medium">Free consultation</p>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className={`group/btn w-full px-8 py-4 bg-gradient-to-r from-royal-blue to-blue-600 text-soft-white font-montreal font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-royal-blue/30 transform ${
                          isHovered ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                          boxShadow: '0 4px 20px rgba(13, 33, 161, 0.3)'
                        }}
                      >
                        <span>Get Started Today</span>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : 'translate-x-0'
                        }`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className={`mt-20 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-soft-white text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-royal-blue/10 to-purple-500/10 rounded-2xl p-6 border border-royal-blue/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-soft-white/90 mb-4 italic">"Working with their team has been a game-changer for our workflows. The AI automation they set up saved us hours every week, and the video edits were clean, professional, and on-brand. Highly reliable and easy to work with."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-soft-white" />
                </div>
                <div>
                  <div className="font-semibold text-soft-white">Sarah Johnson</div>
                  <div className="text-sm text-soft-white/60">CEO, Marketing Agency.</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-soft-white/90 mb-4 italic">"Their AI automation systems helped streamline our lead handling, while the video editing elevated our content quality instantly. Communication was smooth, delivery was fast, and the results spoke for themselves."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-soft-white" />
                </div>
                <div>
                  <div className="font-semibold text-soft-white">Mike Chen</div>
                  <div className="text-sm text-soft-white/60">Marketing Director</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-soft-white/90 mb-4 italic">"Their AI automation streamlined our workflows, and the video edits were sharp and professional. Great communication and fast delivery.S"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-soft-white" />
                </div>
                <div>
                  <div className="font-semibold text-soft-white">Emily Rodriguez</div>
                  <div className="text-sm text-soft-white/60">Founder, ScaleUp Ventures</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-medium text-sm">Limited Time: Free Strategy Session Worth $500</span>
          </div>
          <p className="text-soft-white/60 mb-6">Ready to transform your business?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-royal-blue to-blue-600 text-soft-white font-montreal font-semibold rounded-2xl hover:shadow-2xl hover:shadow-royal-blue/30 transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow: '0 4px 20px rgba(13, 33, 161, 0.3)'
            }}
          >
            <span>Claim Your Free Session</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
