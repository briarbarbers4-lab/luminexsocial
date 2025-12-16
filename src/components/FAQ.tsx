import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'How does your pricing work?',
    answer: 'We offer flexible pricing models tailored to your business needs. Our packages range from project-based pricing for one-time campaigns to retainer agreements for ongoing support. We\'ll work with you to create a package that fits your budget while delivering maximum value. Contact us for a custom quote based on your specific requirements.',
  },
  {
    id: 2,
    question: 'What\'s your typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. Most campaigns take 4-8 weeks from kickoff to launch. Simpler projects might be completed in 2-3 weeks, while larger initiatives could extend to 3-6 months. We\'ll provide a detailed timeline during the planning phase so you know exactly what to expect.',
  },
  {
    id: 3,
    question: 'Do you work with businesses of all sizes?',
    answer: 'Absolutely! We work with startups, small businesses, mid-market companies, and enterprises. Our team has experience scaling solutions for organizations at every stage of growth. Whether you\'re just starting out or already established, we can help you achieve your social media and content marketing goals.',
  },
  {
    id: 4,
    question: 'What industries do you specialize in?',
    answer: 'We have expertise across diverse industries including technology, e-commerce, healthcare, finance, real estate, hospitality, and more. Our team stays current with industry-specific trends and best practices. Even if your industry isn\'t listed here, we\'re confident we can deliver results based on our proven methodology and strategic approach.',
  },
  {
    id: 5,
    question: 'Can you help with ongoing content needs?',
    answer: 'Yes! We offer retainer packages for businesses needing consistent content creation and management. This includes ongoing strategy development, content creation, community management, and performance optimization. Many clients work with us on a monthly retainer basis to maintain their social presence and adapt to market changes.',
  },
  {
    id: 6,
    question: 'What makes Luminex Social different?',
    answer: 'We combine data-driven strategy with creative excellence. Our unique approach includes AI-powered analytics, personalized content strategies, and a team of experts in AI automation and video production. We focus on measurable results and work transparently with our clients to ensure accountability and success.',
  },
  {
    id: 7,
    question: 'How do we get started?',
    answer: 'Getting started is simple! Schedule a free consultation with our team to discuss your goals and challenges. We\'ll listen to your needs, ask clarifying questions, and propose a tailored solution. If we\'re a good fit, we\'ll create a detailed project plan and timeline before we begin any work.',
  },
  {
    id: 8,
    question: 'Do you offer revisions?',
    answer: 'Absolutely! We include revision rounds in our project packages. We want you to be completely satisfied with the work. Our team will incorporate your feedback and make adjustments until everything meets your expectations. Unlimited revisions during the project scope are part of our commitment to quality.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className={`font-coolvetica text-5xl md:text-6xl text-soft-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className={`font-montreal text-xl text-soft-white/70 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 75}ms` : '0ms' }}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full group"
                >
                  <div 
                    className="w-full p-6 rounded-2xl transition-all duration-300 text-left hover:shadow-[0_10px_30px_rgba(13,33,161,0.2)]"
                    style={{
                      background: openId === item.id 
                        ? 'rgba(13, 33, 161, 0.1)' 
                        : 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(16px)',
                      border: openId === item.id
                        ? '1px solid rgba(13, 33, 161, 0.3)'
                        : '1px solid rgba(13, 33, 161, 0.1)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-montreal text-lg text-soft-white group-hover:text-royal-blue transition-colors duration-300 flex-1">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <ChevronDown 
                          className={`w-6 h-6 text-royal-blue transition-all duration-300 ${
                            openId === item.id ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openId === item.id ? '500px' : '0',
                    opacity: openId === item.id ? 1 : 0,
                  }}
                >
                  <div className="pt-4 px-2 pb-2">
                    <div 
                      className="p-6 rounded-2xl"
                      style={{
                        background: 'rgba(247, 248, 252, 0.05)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(13, 33, 161, 0.1)',
                      }}
                    >
                      <p className="font-inter text-soft-white/80 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-montreal text-xl text-soft-white/80 mb-6">
            Still have questions?
          </p>
          <a href="#contact">
            <button className="ripple px-8 py-4 bg-royal-blue text-soft-white rounded-full font-montreal font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(13,33,161,0.3)]">
              Get in Touch
            </button>
          </a>
        </div>
      </div>

      {/* Floating Orbs Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
