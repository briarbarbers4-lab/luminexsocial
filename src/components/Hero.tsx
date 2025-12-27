import { Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0B0D12] overflow-hidden flex flex-col justify-center" data-testid="section-hero">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        
        {/* SVG Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 C200,100 400,400 600,200 C800,100 1000,300 1500,100"
            className="flowing-line"
            style={{ animationDuration: '20s' }}
          />
          <path
            d="M-200,500 C150,300 450,700 750,500 C1050,300 1350,500 1600,400"
            className="flowing-line"
            style={{ animationDuration: '25s', animationDelay: '-5s' }}
          />
          <path
            d="M0,800 C300,600 600,900 900,700 C1200,500 1500,700 1800,600"
            className="flowing-line"
            style={{ animationDuration: '30s', animationDelay: '-10s' }}
          />
        </svg>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(247, 248, 252, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 248, 252, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-10 md:px-20 pt-20">
        <div className="flex flex-col items-start">
          {/* EYEBROW */}
          <p 
            className={`font-inter text-[14px] uppercase tracking-[0.1em] text-[#F7F8FC]/70 mb-6 transition-all duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            • CONTENT CREATORS & BUSINESSES:
          </p>

          {/* HEADLINE */}
          <h1 
            className={`font-helvetica text-4xl md:text-[72px] font-bold text-[#F7F8FC] leading-[1.1] tracking-[-0.02em] max-w-[1100px] transition-all duration-500 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Scale Your Content Creation With <span className="text-[#0D21A1]">AI Automation</span> & Professional Video Editing
          </h1>

          {/* SUBHEADING */}
          <p 
            className={`font-inter text-[18px] md:text-[20px] text-[#F7F8FC]/75 leading-[1.5] max-w-[800px] mt-6 transition-all duration-500 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Struggling with content creation AND repetitive tasks? We edit your videos to perfection and automate your workflows to save 20+ hours weekly
          </p>

          {/* CTA BUTTONS */}
          <div 
            className={`flex flex-col sm:flex-row gap-5 mt-12 transition-all duration-500 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              to="/contact"
              className="px-10 py-4 bg-[#F7F8FC] text-[#0B0D12] font-semibold rounded-lg flex items-center justify-center gap-2 border-2 border-[#F7F8FC] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(247,248,252,0.2)]"
            >
              <Phone className="w-5 h-5" />
              Book A Call
            </Link>

            <Link 
              to="/portfolio"
              className="px-10 py-4 bg-transparent text-[#F7F8FC] font-semibold rounded-lg border-2 border-[#F7F8FC]/30 transition-all duration-300 hover:border-[#0D21A1] hover:bg-[#0D21A1]/10 flex items-center justify-center"
            >
              Learn More ▼
            </Link>
          </div>
        </div>

        {/* TRUST INDICATOR */}
        <div className="absolute bottom-10 right-10 md:right-20 hidden lg:block">
          <p className="font-inter italic text-[16px] text-[#F7F8FC]/60">
            Our Partners &rarr;
          </p>
        </div>
      </div>

      {/* MOBILE SCROLL INDICATOR */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-[#0D21A1] animate-bounce" />
      </div>
    </section>
  );
}
