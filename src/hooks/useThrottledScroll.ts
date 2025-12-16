import { useEffect, useRef } from 'react';

/**
 * Throttled scroll hook to prevent excessive scroll event handling
 * Improves performance by limiting callback execution frequency
 */
export function useThrottledScroll(callback: (scrollY: number) => void, delay: number = 16) {
  const lastCallRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();

      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        callback(window.scrollY);
      } else {
        // Schedule next call using RAF
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => {
          lastCallRef.current = Date.now();
          callback(window.scrollY);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [callback, delay]);
}
