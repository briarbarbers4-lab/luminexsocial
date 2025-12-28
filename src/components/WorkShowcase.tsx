import { Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const portfolioProjects = [
  {
    id: 1,
    title: 'Product Launch Campaign',
    client: 'TechBrand Inc',
    views: '226K',
    videoUrl: 'https://ik.imagekit.io/luminexsocial/Video/Recent%20Sample%20Edit%20for%20a%20Client_What%20do%20you%20think%20of%20it_videoeditor%20_videoediting%20_contentcreat.mp4',
  },
  {
    id: 2,
    title: 'Viral Reel Strategy',
    client: 'EcoCreator',
    views: '1.2M',
    videoUrl: 'https://ik.imagekit.io/luminexsocial/Video/Animations%20from%20Recent%20Edits_What%20do%20you%20think%20of%20itFollow%20for%20more!...._aftereffects%20_premiere.mp4',
  },
  {
    id: 3,
    title: 'Podcast Highlights',
    client: 'The Future Pod',
    views: '450K',
    videoUrl: 'https://ik.imagekit.io/luminexsocial/Video/CEO%20of%20Sun-Up%20Discipline%20@ashtonhall%20Idea%20by-%20@zennn.aep%20....._aftereffects%20_motiongraphics%20_vid.mp4',
  },
  {
    id: 4,
    title: 'Motion Graphics Showcase',
    client: 'Innovate Labs',
    views: '89K',
    videoUrl: 'https://ik.imagekit.io/luminexsocial/Video/Before%20vs%20After%20of%20Recent%20Edit_Comment%20_Project_%20to%20get%20the%20Project%20file%20of%20this%20edit......._en.mp4',
  },
];

export default function WorkShowcase() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-[#0B0D12] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Work
          </h2>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="video-wrapper group">
                <video 
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="play-overlay">
                  <div className="play-button-large">
                    <Play className="fill-current w-8 h-8 ml-1" />
                  </div>
                </div>
                <div className="stats-overlay">
                  <span>{project.views} views</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montreal text-xl font-semibold text-soft-white mb-2">{project.title}</h3>
                <p className="font-inter text-soft-white/60 text-sm">{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
