import { useEffect, useState } from 'react';
import FloatingVideoCard from './FloatingVideoCard';
import VideoModal from './VideoModal';

interface FloatingVideoItem {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right';
  rotation: number;
  parallaxSpeed: number;
}

interface FloatingVideosProps {
  section?: 'hero' | 'services' | 'portfolio' | 'testimonials' | 'process';
  videoItems: FloatingVideoItem[];
}

export default function FloatingVideos({ section = 'hero', videoItems }: FloatingVideosProps) {
  const [selectedVideo, setSelectedVideo] = useState<FloatingVideoItem | null>(null);
  const [visibleVideos, setVisibleVideos] = useState<Record<string, boolean>>({});

  // Initialize visible state for all videos
  useEffect(() => {
    const newVisibleState: Record<string, boolean> = {};
    videoItems.forEach((item) => {
      newVisibleState[item.id] = true; // Start as visible
    });
    setVisibleVideos(newVisibleState);
  }, [videoItems]);

  // Simulate scroll-based visibility (fade in effect)
  useEffect(() => {
    const handleScroll = () => {
      // Videos fade in gradually as page loads and scrolls
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // All videos visible after scrolling down a bit
      if (scrollPercentage > 5) {
        setVisibleVideos((prev) => {
          const updated = { ...prev };
          videoItems.forEach((item) => {
            updated[item.id] = true;
          });
          return updated;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoItems]);

  return (
    <>
      {/* Floating Video Cards */}
      {videoItems.map((video) => (
        <FloatingVideoCard
          key={video.id}
          id={video.id}
          videoUrl={video.videoUrl}
          thumbnail={video.thumbnail}
          title={video.title}
          position={video.position}
          rotation={video.rotation}
          parallaxSpeed={video.parallaxSpeed}
          isVisible={visibleVideos[video.id]}
          onClick={() => setSelectedVideo(video)}
        />
      ))}

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          title={selectedVideo.title}
          videoUrl={selectedVideo.videoUrl}
          thumbnail={selectedVideo.thumbnail}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
