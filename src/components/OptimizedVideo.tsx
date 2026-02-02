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
        threshold: 0.25,
        rootMargin: '50px' // Reduced margin to delay playback until closer to viewport
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
      // Small delay to prevent micro-stutter during rapid scrolling
      const playTimeout = setTimeout(() => {
        const playPromise = videoRef.current?.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Handle potential play() interruption
          });
        }
      }, 50);
      return () => clearTimeout(playTimeout);
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
      preload="metadata" // Changed to metadata to avoid buffering when not needed, but allow quick start
      width={width}
      height={height}
      className={`${className} object-cover`}
      style={{
        ...style,
        transform: 'translate3d(0,0,0)', // Better GPU acceleration
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
      onLoadedData={onLoadedData}
    />
  );
}
