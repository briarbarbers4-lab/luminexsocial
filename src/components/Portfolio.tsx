import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ['All', 'AI Automation', 'Video', 'Content'];

const projects = [
  { id: 1, title: 'Brand Automation Suite', category: 'AI Automation', size: 'large' },
  { id: 2, title: 'Product Launch Video', category: 'Video', size: 'medium' },
  { id: 3, title: 'Social Media Campaign', category: 'Content', size: 'medium' },
  { id: 4, title: 'Workflow Optimization', category: 'AI Automation', size: 'small' },
  { id: 5, title: 'Corporate Documentary', category: 'Video', size: 'large' },
  { id: 6, title: 'Content Strategy', category: 'Content', size: 'small' },
  { id: 7, title: 'AI Chatbot Integration', category: 'AI Automation', size: 'medium' },
  { id: 8, title: 'Brand Story Series', category: 'Video', size: 'small' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // 3D Tilt effect with enhanced responsiveness
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale3d(1.03, 1.03, 1.03)`;
    card.style.boxShadow = '0 20px 60px rgba(13, 33, 161, 0.4)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
    e.currentTarget.style.boxShadow = '0 0 0 rgba(13, 33, 161, 0)';
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-soft-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 
            className={`font-coolvetica text-5xl md:text-6xl text-primary-dark mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Work Speaks
          </h2>

          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-montreal font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-royal-blue text-soft-white shadow-[0_0_20px_rgba(13,33,161,0.3)]'
                    : 'bg-white text-primary-dark border border-deep-purple/20 hover:border-royal-blue/50 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`tilt-card group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 stagger-item stagger-item-${(index % 6) + 1} ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'medium' ? 'md:col-span-2' : ''
              } opacity-100 translate-y-0`}
              style={{
                background: 'rgba(11, 13, 18, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(140, 143, 148, 0.2)',
                minHeight: project.size === 'large' ? '400px' : '200px',
                transitionDelay: isVisible ? `${index * 0.1}ms` : '0ms',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 to-primary-dark opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-dark/90 backdrop-blur-sm">
                <h3 className="font-montreal text-2xl text-soft-white mb-4 text-center">
                  {project.title}
                </h3>
                <button className="btn-premium btn-ripple flex items-center gap-2 px-6 py-3 bg-royal-blue text-soft-white rounded-full font-inter focus-ring">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-royal-blue/20 backdrop-blur-sm text-soft-white text-xs font-inter rounded-full border border-royal-blue/30">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
