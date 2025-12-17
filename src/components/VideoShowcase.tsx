import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import { videoItems, VideoItem } from '../data/videoData';

export default function VideoShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(videoItems.findIndex((v) => v.id === video.id));
  };

  const handleNext = () => {
    if (currentVideoIndex < videoItems.length - 1) {
      const nextVideo = videoItems[currentVideoIndex + 1];
      setSelectedVideo(nextVideo);
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      const prevVideo = videoItems[currentVideoIndex - 1];
      setSelectedVideo(prevVideo);
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 bg-transparent relative">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2
              className={`font-coolvetica text-5xl md:text-6xl text-soft-white mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Work That <span className="text-royal-blue">Speaks Volumes</span>
            </h2>
            <p
              className={`font-montreal text-lg md:text-xl text-deep-purple max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From concept to viral content
            </p>
          </div>

          {/* Bento Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
              {videoItems.map((video, index) => (
                <div
                  key={video.id}
                  className={`card-enter card-enter-${Math.min(index + 1, 12)} transition-all duration-700`}
                >
                  <VideoCard
                    video={video}
                    onClick={handleVideoClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo || videoItems[0]}
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentVideoIndex < videoItems.length - 1}
        hasPrev={currentVideoIndex > 0}
      />
    </>
  );
}
