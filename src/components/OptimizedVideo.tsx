import { useRef, useState, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  onLoadedData?: () => void;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
}

export default function OptimizedVideo({ 
  src, 
  poster, 
  className, 
  onLoadedData, 
  style,
  width,
  height 
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading slightly before entering viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isVisible) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle potential play() interruption
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      width={width}
      height={height}
      className={`${className} object-cover`}
      style={{
        ...style,
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
      onLoadedData={onLoadedData}
    />
  );
}
