import { Search, Palette, RefreshCw, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, goals, and audience to create a tailored strategy that works.',
  },
  {
    icon: Palette,
    title: 'Creation & Development',
    description: 'Our team brings your vision to life with stunning visuals and compelling content.',
  },
  {
    icon: RefreshCw,
    title: 'Review & Refinement',
    description: 'We collaborate with you to perfect every detail until it exceeds expectations.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support to ensure continued success.',
  },
];

export default function Process() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 
            className={`text-5xl md:text-6xl text-soft-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            How We Work Together
          </h2>
          <p 
            className={`font-inter text-lg text-soft-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A proven process that delivers exceptional results every time
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div 
              className={`hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-royal-blue to-transparent transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            ></div>

            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative card-enter card-enter-${index + 1}`}
              >
                <div
                  className="group p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,33,161,0.4)]"
                  style={{
                    background: 'rgba(13, 33, 161, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(247, 248, 252, 0.1)',
                  }}
                >
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(13,33,161,0.5)] transition-all duration-300 relative z-10">
                    <step.icon className="w-8 h-8 text-soft-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-royal-blue/20 rounded-full flex items-center justify-center border-2 border-royal-blue/50 group-hover:scale-110 group-hover:bg-royal-blue/40 transition-all duration-300">
                    <span className="font-coolvetica text-xl text-royal-blue">{index + 1}</span>
                  </div>

                  <h3 className="font-montreal text-xl text-soft-white mb-4 font-semibold group-hover:text-royal-blue transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="font-inter text-deep-purple/90 leading-relaxed text-sm group-hover:text-deep-purple transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
