import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn-scroll-top group transition-all duration-300 ${isVisible ? '' : 'hidden'}`}
      aria-label="Back to top"
      title="Back to top"
    >
      {/* Glassmorphic button */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(13, 33, 161, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(247, 248, 252, 0.15)',
          boxShadow: '0 0 20px rgba(13, 33, 161, 0.2)',
        }}
      >
        {/* Icon with hover glow */}
        <ArrowUp
          className="w-5 h-5 text-soft-white transition-all duration-300 group-hover:text-royal-blue group-hover:drop-shadow-lg"
          strokeWidth={2.5}
        />
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 30px rgba(13, 33, 161, 0.5)',
          pointerEvents: 'none',
        }}
      />

      {/* Animation styles */}
      <style>{`
        .btn-scroll-top {
          position: relative;
          will-change: transform;
        }

        .btn-scroll-top:hover {
          transform: translateY(-4px);
        }

        .btn-scroll-top:active {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .btn-scroll-top,
          .btn-scroll-top:hover,
          .btn-scroll-top:active {
            transform: none;
          }
        }
      `}</style>
    </button>
  );
}
