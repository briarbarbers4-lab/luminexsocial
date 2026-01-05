import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoItem } from '../data/videoData';

interface VideoModalProps {
  video: VideoItem;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function VideoModal({
  video,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}: VideoModalProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-60 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-soft-white" />
      </button>

      <div className="max-w-6xl w-full h-full max-h-[90vh] flex flex-col md:flex-row gap-6 items-stretch" onClick={(e) => e.stopPropagation()}>
        {/* Video Container */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
            <video
              src={video.videoUrl}
              autoPlay={isVideoPlaying}
              controls
              muted
              playsInline
              className="w-full h-full object-contain"
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="p-3 rounded-full bg-royal-blue/30 hover:bg-royal-blue/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6 text-soft-white" />
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="p-3 rounded-full bg-royal-blue/30 hover:bg-royal-blue/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6 text-soft-white" />
            </button>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-80 space-y-6 md:pr-4 max-h-[90vh] overflow-y-auto">
          {/* Title & Client */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(13, 33, 161, 0.15)',
              border: '1px solid rgba(247, 248, 252, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <h2 className="font-coolvetica text-2xl text-soft-white mb-2">
              {video.title}
            </h2>
            <p className="font-inter text-royal-blue">{video.client}</p>
          </div>

          {/* Campaign Details */}
          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              background: 'rgba(13, 33, 161, 0.1)',
              border: '1px solid rgba(247, 248, 252, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <p className="font-inter text-xs text-soft-white/60 uppercase tracking-wider mb-1">
                Campaign Objective
              </p>
              <p className="font-inter text-soft-white">{video.objective}</p>
            </div>

            <div className="pt-4 border-t border-soft-white/10">
              <p className="font-inter text-xs text-soft-white/60 uppercase tracking-wider mb-1">
                Results
              </p>
              <p className="font-inter text-soft-white">{video.results}</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: 'rgba(13, 33, 161, 0.2)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
              }}
            >
              <p className="font-inter text-xs text-soft-white/60 mb-1">Views</p>
              <p className="font-coolvetica text-2xl text-royal-blue">{video.viewCount}</p>
            </div>

            <div
              className="p-4 rounded-xl text-center"
              style={{
                background: 'rgba(13, 33, 161, 0.2)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
              }}
            >
              <p className="font-inter text-xs text-soft-white/60 mb-1">Platform</p>
              <p className="font-inter text-soft-white text-sm font-semibold">
                {video.platform}
              </p>
            </div>
          </div>

          {/* Category */}
          <div
            className="p-4 rounded-xl text-center"
            style={{
              background: 'rgba(13, 33, 161, 0.2)',
              border: '1px solid rgba(13, 33, 161, 0.5)',
            }}
          >
            <p className="font-inter text-xs text-soft-white/60 mb-2">Category</p>
            <span className="px-4 py-2 bg-royal-blue/50 text-soft-white text-sm font-inter rounded-lg inline-block">
              {video.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
