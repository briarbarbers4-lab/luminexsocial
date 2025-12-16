import { Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const { ref: ctaRef, isVisible } = useScrollReveal({ threshold: 0.3 });

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 120;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      button.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px) scale(1.08)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0) scale(1)';
  };

  return (
    <section ref={ctaRef} className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue via-royal-blue/80 to-primary-dark opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-soft-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`font-coolvetica text-5xl md:text-6xl lg:text-7xl text-soft-white mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Ready to Transform Your Content?
          </h2>

          <p 
            className={`font-montreal text-2xl md:text-3xl text-soft-white/90 mb-12 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let's create something amazing together
          </p>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              className="btn-premium btn-ripple btn-glow-pulse group px-10 py-5 bg-soft-white text-primary-dark font-montreal font-bold text-lg rounded-full focus-ring transition-all duration-300 inline-flex items-center gap-3 mb-8"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label="Get Started Today"
            >
              Get Started Today
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          <p 
            className={`font-inter text-soft-white/80 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Free consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
