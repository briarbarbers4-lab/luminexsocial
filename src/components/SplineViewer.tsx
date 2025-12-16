import { useEffect, useRef } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className = '' }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Script is already loaded globally from index.html
    // Just ensure the web component is available
    if (containerRef.current && window.customElements && !window.customElements.get('spline-viewer')) {
      // Script will auto-register the element when loaded
      const checkElement = setInterval(() => {
        if (window.customElements?.get('spline-viewer')) {
          clearInterval(checkElement);
        }
      }, 100);

      return () => clearInterval(checkElement);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
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
