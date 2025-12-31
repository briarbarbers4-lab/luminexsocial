import { useScrollReveal } from '../hooks/useScrollReveal';

const shortsData = [
  { id: '1', youtubeId: 'jTHGqYFefz4' },
  { id: '2', youtubeId: 'uCD_nGtHw6I' },
  { id: '3', youtubeId: '_TUU9o5ajkU' },
  { id: '4', youtubeId: 'yFmD715GUqs' },
  { id: '5', youtubeId: 'c60T45_lvZs' },
  { id: '6', youtubeId: 'QkvUvnA-31w' },
  { id: '7', youtubeId: 'Zw52Jgsf_NE' },
  { id: '8', youtubeId: 'tAZotqu7hl0' },
];

export default function WorkShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  // Duplicate the list for seamless infinite loop
  const displayShorts = [...shortsData, ...shortsData];

  return (
    <section ref={sectionRef} id="work-showcase" className="py-24 bg-[#0B0D12] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Work That <span className="font-allura text-royal-blue italic">Speaks Volumes</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {displayShorts.map((short, index) => (
            <div
              key={`${short.id}-${index}`}
              className="inline-block px-4 pointer-events-none"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
                style={{
                  width: '280px',
                  aspectRatio: '9/16',
                  border: '1px solid rgba(247, 248, 252, 0.1)',
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${short.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${short.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&widget_referrer=1&enablejsapi=1&origin=${window.location.origin}`}
                  title={`Short ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full object-cover scale-[1.3] brightness-[1.1]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}} />
    </section>
  );
}
