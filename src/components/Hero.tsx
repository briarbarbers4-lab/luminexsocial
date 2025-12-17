import { Sparkles, Play, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden m-0 p-0" data-testid="section-hero">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.21/build/spline-viewer.js"></script>
        <spline-viewer 
          url="https://prod.spline.design/jmsyyAFVhJVBXZuC/scene.splinecode"
          style={{ width: '100%', height: '100%', display: 'block', border: 'none', outline: 'none' }}
        ></spline-viewer>
      </div>

      <div 
        className="absolute top-0 left-0 w-full h-full z-[2] pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 80% 60% at 50% 50%,
            transparent 0%,
            transparent 40%,
            rgba(11, 13, 18, 0.15) 70%,
            rgba(11, 13, 18, 0.35) 100%
          )`
        }}
      />

      <div className="relative z-[3] h-screen flex flex-col items-center justify-center px-6 md:px-10 pointer-events-none">
        <div className="max-w-[1000px] text-center">
          <div 
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-8 transition-all duration-700 pointer-events-auto ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: 'rgba(13, 33, 161, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(13, 33, 161, 0.3)',
              boxShadow: '0 0 20px rgba(13, 33, 161, 0.3)',
              transitionDelay: '0.3s',
            }}
            data-testid="badge-hero"
          >
            <Sparkles className="w-4 h-4 text-soft-white" />
            <span className="font-inter text-sm font-medium text-soft-white">AI-Powered Content Solutions</span>
          </div>

          <h1 
            className={`font-coolvetica text-5xl md:text-6xl lg:text-[80px] font-bold text-soft-white leading-[1.1] tracking-[-0.02em] mb-6 transition-all duration-800 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              textShadow: '0 4px 30px rgba(11, 13, 18, 0.8), 0 0 60px rgba(13, 33, 161, 0.4)',
              transitionDelay: '0.5s',
            }}
            data-testid="heading-hero-title"
          >
            Transform Your Brand With AI & Video
          </h1>

          <h2 
            className={`font-montreal text-xl md:text-2xl lg:text-[26px] font-medium text-soft-white/90 leading-[1.4] max-w-[800px] mx-auto mb-5 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              textShadow: '0 2px 20px rgba(11, 13, 18, 0.7)',
              transitionDelay: '0.7s',
            }}
            data-testid="heading-hero-subtitle"
          >
            AI Automation & Video Editing That Scales Your Business While You Sleep
          </h2>

          <p 
            className={`font-inter text-base md:text-lg text-soft-white/75 leading-[1.6] max-w-[700px] mx-auto mb-12 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              textShadow: '0 2px 15px rgba(11, 13, 18, 0.6)',
              transitionDelay: '0.9s',
            }}
            data-testid="text-hero-description"
          >
            We help businesses automate workflows, create scroll-stopping video content, and build AI-powered systems that drive real results. From concept to conversion—we handle it all.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-5 justify-center mb-16 transition-all duration-700 pointer-events-auto ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <button 
              className="group px-10 py-[18px] bg-royal-blue text-soft-white font-montreal text-lg font-semibold rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 btn-glow-pulse"
              style={{
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(13, 33, 161, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(13, 33, 161, 0.4)';
              }}
              data-testid="button-start-project"
            >
              Start Your Project
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>

            <button 
              className="group px-10 py-[18px] text-soft-white font-montreal text-lg font-semibold rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: 'rgba(247, 248, 252, 0.08)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(247, 248, 252, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(13, 33, 161, 0.8)';
                e.currentTarget.style.border = '1.5px solid rgba(13, 33, 161, 0.6)';
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(13, 33, 161, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(247, 248, 252, 0.08)';
                e.currentTarget.style.border = '1.5px solid rgba(247, 248, 252, 0.2)';
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              data-testid="button-view-work"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Our Work
            </button>
          </div>

          <div 
            className={`flex flex-wrap gap-5 justify-center transition-all duration-700 pointer-events-auto ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1.3s' }}
            data-testid="trust-indicators"
          >
            <span className="font-inter text-sm font-medium text-soft-white/60">500+ Projects Delivered</span>
            <span className="text-royal-blue/50">•</span>
            <span className="font-inter text-sm font-medium text-soft-white/60">98% Client Satisfaction</span>
            <span className="text-royal-blue/50">•</span>
            <span className="font-inter text-sm font-medium text-soft-white/60">50+ Happy Clients</span>
          </div>
        </div>
      </div>

      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.5s' }}
        data-testid="scroll-indicator"
      >
        <span 
          className="font-inter text-xs uppercase tracking-[0.1em] text-soft-white/50"
        >
          Scroll to explore
        </span>
        <ChevronDown 
          className="w-5 h-5 text-royal-blue animate-bounce"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(13, 33, 161, 0.6))',
          }}
        />
      </div>
    </section>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}
