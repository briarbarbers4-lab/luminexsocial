import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after first section
      setIsVisible(window.scrollY > 100);

      // Find which section is in view
      let currentSection = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 hidden lg:block ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`section-dot group relative transition-all duration-300 ${
              activeSection === section.id ? 'active' : ''
            }`}
            aria-label={`Go to ${section.label}`}
            title={section.label}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-royal-blue scale-150'
                  : 'bg-royal-blue/40 hover:bg-royal-blue/60'
              }`}
            />

            {/* Label tooltip */}
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'rgba(13, 33, 161, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
                padding: '6px 12px',
                borderRadius: '6px',
              }}
            >
              <p className="text-xs text-soft-white font-medium">{section.label}</p>
            </div>

            {/* Glow effect for active */}
            {activeSection === section.id && (
              <div className="absolute inset-0 rounded-full bg-royal-blue opacity-20 blur-md pointer-events-none" />
            )}
          </button>
        ))}
      </div>

      {/* Vertical line connecting dots */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 transition-colors duration-300"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(13, 33, 161, 0.2), transparent)',
          zIndex: -1,
        }}
      />
    </div>
  );
}
