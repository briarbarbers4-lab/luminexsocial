import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Process', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Handle scroll - show/hide nav, add enhanced blur
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 200) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 px-4 py-2 bg-royal-blue text-soft-white rounded-lg font-medium"
      >
        Skip to main content
      </a>

      {/* Floating Glassmorphic Navbar */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
        style={{
          width: '90%',
          maxWidth: '1200px',
          background: isScrolled 
            ? 'rgba(11, 13, 18, 0.8)' 
            : 'rgba(11, 13, 18, 0.6)',
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          border: '1px solid rgba(247, 248, 252, 0.08)',
          borderRadius: '16px',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(13, 33, 161, 0.15)' 
            : 'none',
        }}
      >
        <div className="px-6 md:px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            
            {/* Logo / Brand */}
            <Link 
              to="/"
              className="flex items-center gap-2 flex-shrink-0 group"
              aria-label="Luminex Social - Home"
            >
              <div className="w-8 h-8 bg-royal-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-coolvetica text-lg text-soft-white font-bold">L</span>
              </div>
              <span className="hidden sm:block font-coolvetica text-xl text-soft-white font-bold group-hover:text-royal-blue transition-colors duration-300">Luminex</span>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-montreal font-medium px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-royal-blue'
                      : 'text-soft-white/80 hover:text-soft-white hover:bg-soft-white/5'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-royal-blue rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Section - CTA + Mobile Menu */}
            <div className="flex items-center gap-4 ml-auto">
              {/* Desktop CTA */}
              <Link
                to="/contact"
                className="hidden md:block px-6 py-2 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_20px_rgba(13,33,161,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-royal-blue/90"
                aria-label="Get Started - Contact Us"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 hover:bg-royal-blue/10 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-royal-blue/50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-soft-white animate-spin-slow" />
                ) : (
                  <Menu className="w-6 h-6 text-soft-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            background: 'rgba(11, 13, 18, 0.95)',
          }}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-6 pointer-events-auto">
          
          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-6 w-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-montreal text-2xl font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-royal-blue scale-110'
                    : 'text-soft-white/70 hover:text-soft-white'
                }`}
                style={{
                  animation: isOpen
                    ? `slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s forwards`
                    : 'none',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_20px_rgba(13,33,161,0.4)] transition-all duration-300"
            style={{
              animation: isOpen ? 'slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.48s forwards' : 'none',
              opacity: isOpen ? 1 : 0,
            }}
          >
            Get Started
          </Link>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 hover:bg-royal-blue/20 rounded-lg transition-all duration-300 hover:scale-110"
                  style={{
                    animation: isOpen
                      ? `slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.56 + index * 0.08}s forwards`
                      : 'none',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <Icon className="w-6 h-6 text-soft-white/70 hover:text-royal-blue transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
}
