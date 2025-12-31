import { useScrollReveal } from '../hooks/useScrollReveal';

const shortsData = [
  { id: '1', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/Crafted%20London.mp4' },
  { id: '2', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/8%20Months%20Ago%20I%20Founded%20203%20Media_V5.mp4' },
  { id: '3', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/Strategy%20For%20LinkedIn%20Growth_V1.mp4' },
  { id: '4', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/SubMagic_V3.mp4' },
  { id: '5', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/GO%20VIRAL%20BEFORE%20YOU%20PUBLISH_V3.mp4' },
  { id: '6', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Followers_V1.mp4' },
  { id: '7', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Olaf%20Carlson_V2.mp4' },
  { id: '8', videoUrl: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Marketing_V2.mp4' },
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={short.videoUrl} type="video/mp4" />
                </video>
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
          animation: scroll-left 40s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}} />
    </section>
  );
}
