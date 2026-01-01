import { useState, useMemo, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Project {
  id: number;
  title: string;
  client: string;
  category: 'AI Automation' | 'Content Creation';
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  viewCount: string;
  industry: string;
  platform: string;
  challenge: string;
  solution: string;
  results: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Summer ARC Edit',
    client: 'Luminex Social',
    category: 'Content Creation',
    thumbnail: 'https://img.youtube.com/vi/L1Eo7fMj-vE/maxresdefault.jpg',
    youtubeId: 'L1Eo7fMj-vE',
    viewCount: ' ',
    industry: 'Social Media',
    platform: 'YouTube',
    challenge: 'Create multi-platform viral content optimized for different social channels.',
    solution: 'Produced adaptable content with platform-specific editing, captions, and formats.',
    results: {
      stat1: { value: '800K', label: 'Total Views' },
      stat2: { value: '11%', label: 'Engagement' },
      stat3: { value: '2.9x', label: 'Viral Factor' },
    },
  },
  {
    id: 2,
    title: 'Ethereum',
    client: 'Luminex Social',
    category: 'Content Creation',
    thumbnail: 'https://img.youtube.com/vi/IeM04ObtEbA/maxresdefault.jpg',
    youtubeId: 'IeM04ObtEbA',
    viewCount: ' ',
    industry: 'Crypto',
    platform: 'YouTube',
    challenge: 'Create compelling marketing content that drives conversions and engagement.',
    solution: 'Developed AI-optimized video strategy with data-driven editing and audience targeting.',
    results: {
      stat1: { value: '5.2M', label: 'Total Reach' },
      stat2: { value: '45%', label: 'Conversion Rate' },
      stat3: { value: '2.8x', label: 'ROI' },
    },
  },
  {
    id: 3,
    title: 'Professional Production',
    client: 'Luminex Social',
    category: 'Content Creation',
    thumbnail: 'https://img.youtube.com/vi/hxWDYQMgNn0/maxresdefault.jpg',
    youtubeId: 'hxWDYQMgNn0',
    viewCount: '1.8M views',
    industry: ' ',
    platform: 'YouTube',
    challenge: 'Demonstrate professional editing and production quality for portfolio impact.',
    solution: 'Compiled premium editing sequences with color grading, sound design, and motion graphics.',
    results: {
      stat1: { value: '1.8M', label: 'Total Views' },
      stat2: { value: '40%', label: 'Audience Growth' },
      stat3: { value: '4.5x', label: 'Engagement' },
    },
  },
  {
    id: 4,
    title: 'High Energy Content',
    client: 'Luminex Social',
    category: 'Content Creation',
    thumbnail: 'https://img.youtube.com/vi/hg98fzJTKh4/maxresdefault.jpg',
    youtubeId: 'hg98fzJTKh4',
    viewCount: '2.5M views',
    industry: 'Digital Content',
    platform: 'YouTube',
    challenge: 'Create engaging short-form video content that captures attention instantly.',
    solution: 'Produced high-quality video with dynamic pacing, trending audio, and professional editing.',
    results: {
      stat1: { value: '2.5M', label: 'Total Views' },
      stat2: { value: '12%', label: 'Engagement Rate' },
      stat3: { value: '3.2x', label: 'Shareability' },
    },
  },
];

export default function OurWorkPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const currentIndex = useMemo(() => 
    selectedProject 
      ? projects.findIndex(p => p.id === selectedProject.id)
      : -1,
    [selectedProject]
  );

  return (
    <section ref={sectionRef} id="our-work" className="pt-0 pb-16 bg-[#0B0D12] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Our <span className="font-allura text-royal-blue italic">Work</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="video-wrapper group">
                <img 
                  src={project.thumbnail}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={project.title}
                />
                <div className="play-overlay">
                  <div className="play-button-large">
                    <Play className="fill-current w-8 h-8 ml-1" />
                  </div>
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(11, 13, 18, 0.95)',
              backdropFilter: 'blur(20px)',
            }}
          />

          <div
            className="relative max-w-[1000px] w-full aspect-video rounded-3xl overflow-hidden z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
              style={{
                background: 'rgba(247, 248, 252, 0.1)',
                border: '1px solid rgba(247, 248, 252, 0.2)',
              }}
            >
              <X className="w-5 h-5 text-soft-white" />
            </button>

            {selectedProject.youtubeId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                title={selectedProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full"
              >
                <source src={selectedProject.videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
