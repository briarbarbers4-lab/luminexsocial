import { Sparkles, Play } from 'lucide-react';
import { useEffect, useState, useRef, lazy, Suspense, useCallback } from 'react';
import { useThrottledScroll } from '../hooks/useThrottledScroll';

// Lazy load Spline viewer to avoid blocking main thread
const SplineViewer = lazy(() => import('./SplineViewer'));

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [showSpline, setShowSpline] = useState(true); // Show immediately
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effect with passive listener for smooth scrolling
  const handleScroll = useCallback((scrollY: number) => {
    setScrollY(scrollY);
  }, []);

  useThrottledScroll(handleScroll, 16); // ~60 FPS

  useEffect(() => {
    // Spline loads immediately
    setShowSpline(true);
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      button.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px) scale(1.05)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0) scale(1)';
  };

  // Text reveal animation with word-by-word stagger
  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span
        key={i}
        className={`word-reveal word-reveal-${Math.min(i + 1, 8)} inline-block`}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="relative min-h-screen bg-transparent overflow-hidden flex items-center">
      {/* Spline 3D Background - Lazy loaded for performance */}
      {showSpline && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
            <SplineViewer
              url="https://prod.spline.design/0hiJ0Y-RBzuVrj1W/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Suspense>
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-blue/10 backdrop-blur-sm border border-royal-blue/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-royal-blue" />
            <span className="text-sm font-inter text-soft-white">AI-Powered Content Solutions</span>
          </div>

          <h1 className="font-coolvetica text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight">
            <span className="text-gradient-royal">
              {splitText('Amplify Your Digital Presence')}
            </span>
          </h1>

          <p className="font-montreal text-2xl md:text-3xl text-deep-purple mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            AI-powered content creation that drives real results
          </p>

          <p className="font-inter text-lg text-deep-purple/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            We help brands create engaging content that connects with their audience through cutting-edge AI automation and professional video editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button 
              className="btn-premium btn-ripple btn-glow-pulse group px-8 py-4 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full focus-ring transition-all duration-300 flex items-center gap-2"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label="Start Your Project"
            >
              Start Your Project
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>

            <button 
              className="btn-premium btn-ripple group px-8 py-4 bg-transparent text-soft-white font-montreal font-semibold rounded-full border-2 border-royal-blue/50 hover:border-royal-blue hover:bg-royal-blue/10 backdrop-blur-sm focus-ring transition-all duration-300 flex items-center gap-2"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label="View Our Work"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Our Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-royal-blue/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-royal-blue rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
