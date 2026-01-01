import { Bot, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const mainServices = [
  {
    icon: Bot,
    title: 'AI Automation That Works While You Sleep',
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
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
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
    price: 'custom Pricing',
  },
];

export default function Services() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className={`text-5xl md:text-6xl text-soft-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            What We <span className="font-allura text-royal-blue italic">Do</span>
          </h2>
          <p 
            className={`font-inter text-lg text-soft-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Comprehensive services to transform your digital presence
          </p>
        </div>

        {/* Main Services - Always Expanded Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group card-enter card-enter-${index + 1} relative rounded-3xl overflow-hidden transition-all duration-500 animate-float`}
                style={{
                  background: 'rgba(11, 13, 18, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(247, 248, 252, 0.1)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-royal-blue/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-royal-blue/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-royal-blue group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="font-montreal text-2xl text-soft-white mb-3 font-semibold group-hover:text-royal-blue transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Full Content - Always Visible */}
                  <div className="space-y-6">
                    <p className="font-inter text-deep-purple/90 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <p className="font-montreal text-sm font-semibold text-soft-white uppercase tracking-wider">
                        What's Included:
                      </p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-5 h-5 text-royal-blue flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-deep-purple/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-royal-blue/20">
                      <p className="font-inter text-sm text-deep-purple mb-4">
                        <span className="text-royal-blue font-semibold">Starting at {service.price}</span>
                        {' '}/ month
                      </p>
                      <a 
                        href="#contact"
                        className="ripple w-full px-6 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_20px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
