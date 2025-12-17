import { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useScrollRevealAnimation } from '../hooks/useScrollAnimations';

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 50, suffix: '+', label: 'Active Clients' },
  { number: 24, suffix: '/7', label: 'Support Available' },
];

function AnimatedCounter({ end, suffix, shouldAnimate }: { end: number; suffix: string; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, shouldAnimate]);

  return (
    <span className="font-coolvetica text-5xl md:text-6xl text-royal-blue animate-counter">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });
  const { ref: contentRef, isVisible } = useScrollRevealAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={contentRef}>
        <div className="text-center mb-20">
          <h2 className="font-coolvetica text-5xl md:text-6xl text-soft-white mb-4">
            By The Numbers
          </h2>
          <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto">
            Proven results that speak for themselves
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center card-enter card-enter-${index + 1} p-8 rounded-2xl transition-all duration-700 hover:backdrop-blur-md hover:bg-royal-blue/10 group`}
              style={{
                background: 'rgba(13, 33, 161, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
              }}
            >
              <div className="count-up">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} shouldAnimate={isInView} />
              </div>
              <p className="font-inter text-soft-white/60 mt-4 text-sm md:text-base group-hover:text-soft-white/80 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
