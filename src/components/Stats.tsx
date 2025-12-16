import { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

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
    <span className="font-coolvetica text-5xl md:text-6xl text-royal-blue">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal-blue/5 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl"
              style={{
                background: 'rgba(13, 33, 161, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
              }}
            >
              <AnimatedCounter end={stat.number} suffix={stat.suffix} shouldAnimate={isInView} />
              <p className="font-inter text-deep-purple mt-4 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
