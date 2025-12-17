import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface FloatingVideoCardProps {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right';
  rotation: number; // -10 to 10 degrees
  parallaxSpeed: number; // 0.3 to 0.7 (slower = deeper)
  isVisible?: boolean;
  onClick?: () => void;
}

export default function FloatingVideoCard({
  id,
  videoUrl,
  thumbnail,
  title,
  position,
  rotation,
  parallaxSpeed,
  isVisible = true,
  onClick,
}: FloatingVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [translateY, setTranslateY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollOffset = window.scrollY * parallaxSpeed;
        setTranslateY(scrollOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  // Handle hover - pause/play video
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const positionClasses = {
    'top-left': 'absolute top-12 -left-32 lg:-left-20',
    'top-right': 'absolute top-20 -right-32 lg:-right-20',
    'bottom-left': 'absolute bottom-12 -left-40 lg:-left-24',
    'bottom-right': 'absolute bottom-20 -right-40 lg:-right-24',
    'center-left': 'absolute top-1/2 -left-36 lg:-left-24 -translate-y-1/2',
    'center-right': 'absolute top-1/2 -right-36 lg:-right-24 -translate-y-1/2',
  };

  return (
    <div
      ref={containerRef}
      className={`${positionClasses[position]} hidden md:block transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
        width: '240px',
        aspectRatio: '9/16',
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Card Container */}
      <div
        className={`w-full h-full rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${
          isHovered ? 'scale-110 shadow-2xl' : 'shadow-lg'
        }`}
        style={{
          background: 'rgba(13, 33, 161, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(247, 248, 252, 0.15)',
          boxShadow: isHovered
            ? '0 0 40px rgba(13, 33, 161, 0.6)'
            : '0 0 20px rgba(13, 33, 161, 0.3)',
        }}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover animate-float"
          style={{
            animation: isPlaying ? 'float 6s ease-in-out infinite' : 'none',
          }}
        />

        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-royal-blue/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
            <Play className="w-12 h-12 text-soft-white fill-soft-white" />
          </div>
        )}

        {/* Title at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-inter text-xs text-soft-white/80 truncate">{title}</p>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: `inset 0 0 20px rgba(13, 33, 161, ${isHovered ? 0.4 : 0.1})`,
          }}
        />
      </div>

      {/* Gentle Rotation Animation (continuous) */}
      <style>{`
        @keyframes floatingRotate {
          0%, 100% { transform: rotate(${rotation}deg); }
          50% { transform: rotate(${rotation + 2}deg); }
        }
      `}</style>
    </div>
  );
}
