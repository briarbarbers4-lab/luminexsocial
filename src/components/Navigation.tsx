import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
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

  // Handle scroll - show/hide nav, add shadow
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
      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal-blue to-royal-blue/70 flex items-center justify-center">
                <span className="font-coolvetica text-lg text-soft-white font-bold">L</span>
              </div>
              <span className="font-coolvetica text-xl text-soft-white font-bold hidden sm:inline">
                Luminex
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-montreal font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-royal-blue'
                      : 'text-soft-white/80 hover:text-soft-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-royal-blue rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-blue rounded-full group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden md:flex ripple items-center gap-2 px-6 py-2.5 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_20px_rgba(13,33,161,0.4)] transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-royal-blue/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-soft-white" />
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
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary-dark/95 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-6">
          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-coolvetica text-4xl font-bold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-royal-blue scale-110'
                    : 'text-soft-white/70 hover:text-soft-white'
                }`}
                style={{
                  animation: isOpen
                    ? `slideInMenu 0.5s ease-out ${index * 0.08}s forwards`
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
            className="ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full hover:shadow-[0_0_30px_rgba(13,33,161,0.5)] transition-all duration-300 hover:scale-105 inline-block"
            style={{
              animation: isOpen ? 'slideInMenu 0.5s ease-out 0.48s forwards' : 'none',
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
                      ? `slideInMenu 0.5s ease-out ${0.56 + index * 0.08}s forwards`
                      : 'none',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <Icon className="w-6 h-6 text-soft-white/70 hover:text-royal-blue transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
}
