import { Phone, ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0B0D12] overflow-hidden flex flex-col justify-center" data-testid="section-hero">
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 z-0 hero-background-mesh pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,200 C100,100 300,300 500,200 C700,100 900,300 1100,200"
            fill="none"
            stroke="#0D21A1"
            strokeWidth="2"
            className="animated-line pulse-line"
          />
          <path
            d="M-100,400 C150,300 350,500 550,400 C750,300 950,500 1150,400"
            fill="none"
            stroke="#0D21A1"
            strokeWidth="2"
            className="animated-line pulse-line"
            style={{ animationDelay: '-2s' }}
          />
        </svg>
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

        {/* VIDEO TESTIMONIALS */}
        <div 
          className={`flex flex-wrap lg:flex-nowrap gap-5 mt-20 transition-all duration-500 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="relative w-full sm:w-[calc(50%-10px)] lg:w-[200px] aspect-video bg-[#0B0D12] rounded-xl border-2 border-[#F7F8FC]/15 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Download className="absolute top-3 right-3 w-4 h-4 text-[#F7F8FC]/40 group-hover:text-[#F7F8FC] transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#0D21A1]/20 backdrop-blur-sm border border-[#0D21A1]/40 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#F7F8FC] border-b-[6px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE SCROLL INDICATOR */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-[#0D21A1] animate-bounce" />
      </div>
    </section>
  );
}
