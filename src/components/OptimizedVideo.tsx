"use client";
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
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasIntersected(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0,
        rootMargin: '200px' // Load when it gets close to viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !hasIntersected) return;

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
  }, [isVisible, hasIntersected]);

  // Generate a poster from Imagekit if not provided
  const generatedPoster = poster || (src.includes('ik.imagekit.io') ? `${src}/ik-thumbnail.jpg` : undefined);

  return (
    <video
      ref={videoRef}
      poster={generatedPoster}
      muted
      loop
      playsInline
      preload="none" // Prevent loading metadata on page load
      width={width}
      height={height}
      className={`${className || ''} object-cover`}
      style={{
        ...style,
        transform: 'translateZ(0)', // Better GPU acceleration
        backgroundColor: '#000', // Better fallback
      }}
      onLoadedData={onLoadedData}
    >
      {hasIntersected && <source src={src} type="video/mp4" />}
    </video>
  );
}
