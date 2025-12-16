import { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className = '' }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (window.customElements?.get('spline-viewer')) {
      setIsLoaded(true);
      return;
    }

    // Load Spline viewer script only when component mounts
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.19/build/spline-viewer.js';
    
    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setHasError(true);
      console.warn('Spline viewer failed to load - continuing without 3D animation');
    };

    // Use requestIdleCallback to load script after main thread is free
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(script);
        }
      }, { timeout: 5000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(script);
        }
      }, 2000);
    }

    return () => {
      // Cleanup if needed
      if (script.parentNode === containerRef.current) {
        containerRef.current?.removeChild(script);
      }
    };
  }, []);

  // If script fails to load, return empty (graceful degradation)
  if (hasError) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        pointerEvents: isLoaded ? 'auto' : 'none',
        opacity: 1,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <spline-viewer
        url={url}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
