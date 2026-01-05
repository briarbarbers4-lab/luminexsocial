import { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoItem } from '../data/videoData';
import OptimizedVideo from './OptimizedVideo';

interface VideoCardProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const gridColSpan = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  };

  const heightClass = {
    large: 'h-96 md:h-full',
    medium: 'h-96 md:h-96',
    small: 'h-96 md:h-64',
  };

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${gridColSpan[video.gridSize]} ${heightClass[video.gridSize]}`}
      onClick={() => onClick(video)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glassmorphic background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(13,33,161,0.6)]"
        style={{
          background: 'rgba(13, 33, 161, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(247, 248, 252, 0.1)',
        }}
      />

      {/* Video/Thumbnail */}
      <div className="absolute inset-0 z-10 w-full h-full bg-black">
        {isHovering ? (
          <OptimizedVideo
            src={video.videoUrl}
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoading(false)}
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 to-transparent animate-pulse" />
            )}
          </>
        )}

        {/* Play Icon */}
        {!isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:opacity-0 transition-all duration-300">
            <div className="w-16 h-16 bg-royal-blue/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-soft-white/20 group-hover:scale-125 transition-transform duration-300">
              <Play className="w-8 h-8 text-soft-white fill-soft-white" />
            </div>
          </div>
        )}
      </div>

      {/* Overlay Gradient & Info */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent p-6 transition-all duration-300 group-hover:translate-y-[-4px]">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-royal-blue/80 backdrop-blur-sm text-soft-white text-xs font-inter rounded-full border border-royal-blue/50">
            {video.category}
          </span>
          <span className="text-soft-white/60 text-xs font-inter">{video.viewCount} views</span>
        </div>

        {/* Title */}
        <h3 className="font-montreal text-lg text-soft-white font-semibold mb-2 line-clamp-2">
          {video.title}
        </h3>

        {/* Client */}
        <p className="font-inter text-soft-white/70 text-sm">
          {video.client}
        </p>
      </div>

      {/* Glow Border on Hover */}
      <div
        className="absolute inset-0 z-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 20px rgba(13, 33, 161, 0.3)',
        }}
      />
    </div>
  );
}
