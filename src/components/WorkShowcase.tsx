import { useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScatteredVideo {
  id: string;
  videoUrl: string;
  position: { top: string; left: string };
  rotation: number;
  scale: number;
  zIndex: number;
}

const videoUrls = [
  'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
];

export default function WorkShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const scatteredVideos: ScatteredVideo[] = useMemo(() => [
    {
      id: 'video-1',
      videoUrl: videoUrls[0],
      position: { top: '0%', left: '2%' },
      rotation: -8,
      scale: 1.1,
      zIndex: 3,
    },
    {
      id: 'video-2',
      videoUrl: videoUrls[1],
      position: { top: '0%', left: '58%' },
      rotation: 6,
      scale: 0.95,
      zIndex: 2,
    },
    {
      id: 'video-3',
      videoUrl: videoUrls[2],
      position: { top: '40%', left: '18%' },
      rotation: -5,
      scale: 1.2,
      zIndex: 4,
    },
    {
      id: 'video-4',
      videoUrl: videoUrls[3],
      position: { top: '35%', left: '70%' },
      rotation: 7,
      scale: 1,
      zIndex: 1,
    },
    {
      id: 'video-5',
      videoUrl: videoUrls[4],
      position: { top: '65%', left: '35%' },
      rotation: -6,
      scale: 0.9,
      zIndex: 2,
    },
  ], []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
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

        <div className="relative w-full h-[1000px] md:h-[1100px]">
          {scatteredVideos.map((video, index) => (
            <div
              key={video.id}
              className={`absolute w-[280px] md:w-[320px] transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                top: video.position.top,
                left: video.position.left,
                transform: `rotate(${video.rotation}deg) scale(${video.scale})`,
                zIndex: video.zIndex,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '9/16',
                  background: 'rgba(11, 13, 18, 0.9)',
                  border: '1px solid rgba(247, 248, 252, 0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(11, 13, 18, 0.3) 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
