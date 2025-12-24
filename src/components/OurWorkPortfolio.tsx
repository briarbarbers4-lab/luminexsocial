import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Project {
  id: number;
  title: string;
  client: string;
  category: 'AI Automation' | 'Content Creation';
  thumbnail: string;
  videoUrl: string;
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

const categories = ['All', 'AI Automation', 'Content Creation'];

// ============================================================
// 📁 PORTFOLIO PROJECTS (Our Work Section)
// ============================================================
// Instructions: Edit each project object below
// - thumbnailVideo: Short preview (3-5 sec loop)
// - fullVideo: Complete project video
// - Update all text fields with your project details
// ============================================================

const projects: Project[] = [
  {
    id: 1,
    title: 'Dynamic Motion Graphics Edit',
    client: 'Content Creator Studio',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=400&q=80',
    videoUrl: 'https://drive.google.com/uc?id=16up3KIlYn3Ituda8Il2nmumnj7yL_OfJ',
    viewCount: '2.5M views',
    industry: 'Digital Content',
    platform: 'Instagram, YouTube',
    challenge: 'Create eye-catching motion graphics that grab attention in the first 3 seconds.',
    solution: 'Crafted dynamic animations with fast-paced transitions and visual effects.',
    results: {
      stat1: { value: '95%', label: 'Visual Impact' },
      stat2: { value: '12%', label: 'Engagement Rate' },
      stat3: { value: '3.2x', label: 'Shareability' },
    },
  },
  {
    id: 2,
    title: 'Client Project Edit Showcase',
    client: 'Video Production House',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&q=80',
    videoUrl: 'https://drive.google.com/uc?id=1fz5MRhQdlCVSL_iFc8KcWd3ucNBKLG2z',
    viewCount: '1.8M views',
    industry: 'Professional Services',
    platform: 'Portfolio, Client Demos',
    challenge: 'Present professional editing work that demonstrates technical skill and creativity.',
    solution: 'Compiled best edited sequences with color grading and sound design.',
    results: {
      stat1: { value: '88%', label: 'Client Satisfaction' },
      stat2: { value: '40%', label: 'Project Increase' },
      stat3: { value: '4.5x', label: 'Referrals' },
    },
  },
  {
    id: 3,
    title: 'Lead Generation Automation',
    client: 'Digital Marketing Agency',
    category: 'AI Automation',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70570ec0?w=400&q=80',
    videoUrl: 'https://drive.google.com/uc?id=1hzz0ro9jyhCmcKGDHw4V-jrd2Wpnf-kE',
    viewCount: '5.2M views',
    industry: 'Corporate',
    platform: 'LinkedIn, YouTube',
    challenge: 'Automate lead generation and qualification to increase sales team efficiency.',
    solution: 'Implemented AI-powered lead qualification system with automated follow-ups.',
    results: {
      stat1: { value: '5.2M', label: 'Total Leads' },
      stat2: { value: '45%', label: 'Qualification Rate' },
      stat3: { value: '2.8x', label: 'Conversion' },
    },
  },
  {
    id: 4,
    title: 'Product Demo Video',
    client: 'Startup Co',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
    videoUrl: 'https://drive.google.com/uc?id=1hzz0ro9jyhCmcKGDHw4V-jrd2Wpnf-kE',
    viewCount: '800K views',
    industry: 'Technology',
    platform: 'YouTube, Website',
    challenge: 'Explain complex product features in an engaging and easy-to-understand way.',
    solution: 'Created professional demo with screen recordings, animations, and clear narration.',
    results: {
      stat1: { value: '800K', label: 'Total Views' },
      stat2: { value: '11%', label: 'Engagement Rate' },
      stat3: { value: '2.9x', label: 'ROI' },
    },
  },
];

export default function OurWorkPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const filteredProjects = useMemo(() => 
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  const currentIndex = useMemo(() => 
    selectedProject 
      ? filteredProjects.findIndex(p => p.id === selectedProject.id)
      : -1,
    [selectedProject, filteredProjects]
  );

  useEffect(() => {
    if (selectedProject && currentIndex === -1) {
      setSelectedProject(null);
    }
  }, [selectedProject, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedProject(filteredProjects[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < filteredProjects.length - 1) {
        setSelectedProject(filteredProjects[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex, filteredProjects]);

  const handlePrevProject = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  }, [currentIndex, filteredProjects]);

  const handleNextProject = useCallback(() => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  }, [currentIndex, filteredProjects]);

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 bg-primary-dark relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2
              className={`font-coolvetica text-5xl md:text-6xl text-soft-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our Work
            </h2>

            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-7 py-3 rounded-full font-montreal font-medium text-base transition-all duration-300"
                  style={{
                    background: activeCategory === category
                      ? '#0D21A1'
                      : 'rgba(247, 248, 252, 0.08)',
                    color: '#F7F8FC',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div
            className="grid gap-8 mt-16 max-w-[1400px] mx-auto"
            style={{
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(13,33,161,0.3)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  background: 'rgba(11, 13, 18, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(13, 33, 161, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(247, 248, 252, 0.05)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <video
                    muted
                    playsInline
                    loop
                    autoPlay={false}
                    className="w-full h-full object-cover group-hover:block hidden"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:hidden"
                  />

                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(11, 13, 18, 0.7) 100%)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: '#0D21A1',
                        boxShadow: '0 8px 32px rgba(13, 33, 161, 0.6)',
                      }}
                    >
                      <Play className="w-6 h-6 text-soft-white ml-1" fill="currentColor" />
                    </div>
                    <span className="font-montreal text-base font-semibold text-soft-white">
                      View Full Project
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className="px-4 py-1.5 rounded-full font-inter text-xs font-semibold uppercase"
                      style={{
                        background: 'rgba(13, 33, 161, 0.15)',
                        border: '1px solid rgba(13, 33, 161, 0.3)',
                        color: '#0D21A1',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-montreal text-xl font-semibold text-soft-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.7)' }}>
                    {project.client}
                  </p>
                </div>

                <div className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(13,33,161,0.4)] group-hover:border-[rgba(13,33,161,0.5)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            className="relative max-w-[1200px] w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 z-10"
            style={{
              background: 'rgba(11, 13, 18, 0.9)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(247, 248, 252, 0.1)',
            }}
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

            <div
              className="rounded-2xl overflow-hidden mb-10"
              style={{ aspectRatio: '16/9', background: '#000' }}
            >
              <video
                controls
                className="w-full h-full"
              >
                <source src={selectedProject.videoUrl} type="video/mp4" />
              </video>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="font-montreal text-3xl md:text-4xl font-semibold text-soft-white">
                  {selectedProject.title}
                </h2>
                <span
                  className="px-4 py-1.5 rounded-full font-inter text-xs font-semibold uppercase"
                  style={{
                    background: 'rgba(13, 33, 161, 0.15)',
                    border: '1px solid rgba(13, 33, 161, 0.3)',
                    color: '#0D21A1',
                  }}
                >
                  {selectedProject.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-2">
                  <span className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>Client:</span>
                  <span className="font-inter text-sm text-soft-white">{selectedProject.client}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>Industry:</span>
                  <span className="font-inter text-sm text-soft-white">{selectedProject.industry}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>Platform:</span>
                  <span className="font-inter text-sm text-soft-white">{selectedProject.platform}</span>
                </div>
              </div>

              <div>
                <h3 className="font-montreal text-xl font-semibold text-soft-white mb-3">Challenge</h3>
                <p className="font-inter text-base" style={{ color: 'rgba(247, 248, 252, 0.8)' }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-montreal text-xl font-semibold text-soft-white mb-3">Solution</h3>
                <p className="font-inter text-base" style={{ color: 'rgba(247, 248, 252, 0.8)' }}>
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h3 className="font-montreal text-xl font-semibold text-soft-white mb-6">Results</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(13, 33, 161, 0.1)' }}>
                    <div className="font-coolvetica text-3xl md:text-4xl text-royal-blue mb-2">
                      {selectedProject.results.stat1.value}
                    </div>
                    <div className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>
                      {selectedProject.results.stat1.label}
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(13, 33, 161, 0.1)' }}>
                    <div className="font-coolvetica text-3xl md:text-4xl text-royal-blue mb-2">
                      {selectedProject.results.stat2.value}
                    </div>
                    <div className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>
                      {selectedProject.results.stat2.label}
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(13, 33, 161, 0.1)' }}>
                    <div className="font-coolvetica text-3xl md:text-4xl text-royal-blue mb-2">
                      {selectedProject.results.stat3.value}
                    </div>
                    <div className="font-inter text-sm" style={{ color: 'rgba(247, 248, 252, 0.6)' }}>
                      {selectedProject.results.stat3.label}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={handlePrevProject}
                  disabled={currentIndex <= 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-montreal font-medium transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: 'rgba(247, 248, 252, 0.1)',
                    color: '#F7F8FC',
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous Project
                </button>
                <button
                  onClick={handleNextProject}
                  disabled={currentIndex >= filteredProjects.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-montreal font-medium transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: 'rgba(247, 248, 252, 0.1)',
                    color: '#F7F8FC',
                  }}
                >
                  Next Project
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
