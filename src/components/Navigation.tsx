import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blogs', path: '/blog' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[1001] px-4 py-2 bg-royal-blue text-soft-white rounded-lg font-medium"
        data-testid="link-skip-content"
      >
        Skip to main content
      </a>

      <header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300"
        style={{
          maxWidth: '900px',
          width: 'calc(100% - 32px)',
          height: '56px',
          background: isScrolled 
            ? 'rgba(11, 13, 18, 0.8)' 
            : 'rgba(11, 13, 18, 0.7)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(247, 248, 252, 0.12)',
          borderRadius: '100px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          padding: '8px 16px',
        }}
        data-testid="navigation-header"
      >
        <div className="flex items-center justify-between h-full gap-4">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="https://ik.imagekit.io/luminexsocial/Logo_V1.png?updatedAt=1765875231435" 
              alt="Luminex Social" 
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-7" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montreal text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-royal-blue'
                    : 'text-soft-white/80 hover:text-royal-blue'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:block px-6 py-2.5 bg-royal-blue text-soft-white font-montreal text-sm font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_24px_rgba(13,33,161,0.6)] transition-all duration-300 ml-auto flex-shrink-0"
            data-testid="button-get-started"
          >
            Get Started
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-royal-blue/10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-royal-blue/50 ml-auto"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-testid="button-mobile-menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-soft-white" />
            ) : (
              <Menu className="w-5 h-5 text-soft-white" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        data-testid="mobile-menu-overlay"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(11, 13, 18, 0.98)',
            backdropFilter: 'blur(20px)',
          }}
          onClick={() => setIsOpen(false)}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-6">
          <nav className="flex flex-col items-center gap-8" data-testid="nav-mobile">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-montreal text-2xl font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-royal-blue'
                    : 'text-soft-white/80 hover:text-royal-blue'
                }`}
                style={{
                  animation: isOpen
                    ? `fadeInUp 0.5s ease-out ${index * 0.08}s forwards`
                    : 'none',
                  opacity: 0,
                }}
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_24px_rgba(13,33,161,0.6)] transition-all duration-300"
            style={{
              animation: isOpen ? 'fadeInUp 0.5s ease-out 0.40s forwards' : 'none',
              opacity: 0,
            }}
            data-testid="button-mobile-get-started"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
