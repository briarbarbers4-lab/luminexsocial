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
  videoItems: FloatingVideoItem[];
}

export default function FloatingVideos({ videoItems }: FloatingVideosProps) {
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
      <section className="work-speaks-section">
        <h2>Work That <span>Speaks Volumes</span></h2>
        <p className="subheading">From concept to viral content</p>
        
        <div className="floating-videos-container">
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
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={{
            id: Number(selectedVideo.id) || 0,
            videoUrl: selectedVideo.videoUrl,
            thumbnail: selectedVideo.thumbnail,
            title: selectedVideo.title,
            category: 'Ambient',
            viewCount: '0',
            client: 'Personal',
            gridSize: 'medium',
            objective: 'Ambient Background',
            results: 'Enhanced UX',
            platform: 'Web'
          }}
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          onNext={() => {}}
          onPrev={() => {}}
          hasNext={false}
          hasPrev={false}
        />
      )}
    </>
  );
}
