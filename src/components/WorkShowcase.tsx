import { useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface VideoItem {
  id: string;
  videoUrl: string;
  rotation: number;
}

const videoUrls = [
  'https://ik.imagekit.io/luminexsocial/Video/Animations%20from%20Recent%20Edits_What%20do%20you%20think%20of%20itFollow%20for%20more!...._aftereffects%20_premiere.mp4',
  'https://ik.imagekit.io/luminexsocial/Video/Recent%20Sample%20Edit%20for%20a%20Client_What%20do%20you%20think%20of%20it_videoeditor%20_videoediting%20_contentcreat.mp4',
  'https://ik.imagekit.io/luminexsocial/Video/Before%20vs%20After%20of%20Recent%20Edit_Comment%20_Project_%20to%20get%20the%20Project%20file%20of%20this%20edit......._en.mp4',
  'https://ik.imagekit.io/luminexsocial/Video/CEO%20of%20Sun-Up%20Discipline%20@ashtonhall%20Idea%20by-%20@zennn.aep%20....._aftereffects%20_motiongraphics%20_vid.mp4',
  'https://ik.imagekit.io/luminexsocial/Video/Everything%20in%20your%20Life%20is%20a%20Reflection%20of%20your%20Choice_Looking%20for%20Skilled%20Editor%20Feel%20Free%20to%20.mp4',
];

export default function WorkShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const videos: VideoItem[] = useMemo(() => [
    {
      id: 'video-1',
      videoUrl: videoUrls[0],
      rotation: -4,
    },
    {
      id: 'video-2',
      videoUrl: videoUrls[1],
      rotation: 3,
    },
    {
      id: 'video-3',
      videoUrl: videoUrls[2],
      rotation: -2,
    },
    {
      id: 'video-4',
      videoUrl: videoUrls[3],
      rotation: 5,
    },
    {
      id: 'video-5',
      videoUrl: videoUrls[4],
      rotation: -3,
    },
  ], []);

  return (
    <section 
      ref={sectionRef} 
      id="work-showcase" 
      className="pb-24 md:pb-32 bg-[#0B0D12] relative overflow-visible -mt-16 md:-mt-24 z-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Video Grid: 3 on top, 2 on bottom */}
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Top Row - 3 Videos */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {videos.slice(0, 3).map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(13,33,161,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    width: '280px',
                    aspectRatio: '9/16',
                    background: 'rgba(11, 13, 18, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(13, 33, 161, 0.3)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(247, 248, 252, 0.1)',
                    transform: `rotate(${video.rotation}deg)`,
                    willChange: 'transform',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                    style={{ willChange: 'auto' }}
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

          {/* Bottom Row - 2 Videos */}
          <div className="flex justify-center items-center gap-8">
            {videos.slice(3, 5).map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  transitionDelay: `${(index + 3) * 150}ms`,
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(13,33,161,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    width: '280px',
                    aspectRatio: '9/16',
                    background: 'rgba(11, 13, 18, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(13, 33, 161, 0.3)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(247, 248, 252, 0.1)',
                    transform: `rotate(${video.rotation}deg)`,
                    willChange: 'transform',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                    style={{ willChange: 'auto' }}
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
      </div>
    </section>
  );
}
