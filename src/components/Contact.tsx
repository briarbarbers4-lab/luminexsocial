import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Contact() {
  const { ref: contentRef } = useScrollReveal();
  const { ref: widgetRef } = useScrollReveal();
  const { ref: infoRef } = useScrollReveal();

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative py-32 md:py-48 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div
          ref={contentRef as any}
          className={`text-center mb-20 transition-all duration-1000 opacity-100 translate-y-0`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-coolvetica text-soft-white mb-4 leading-tight">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-soft-white/70 font-inter max-w-2xl mx-auto">
            Get in touch for a free consultation
          </p>
        </div>

        {/* Calendly Widget */}
        <div
          ref={widgetRef as any}
          className={`mb-16 transition-all duration-1000 opacity-100 translate-y-0 flex justify-center`}
        >
          <div className="calendly-inline-widget max-w-2xl w-full" data-url="https://calendly.com/luminexsocial05/30min?hide_gdpr_banner=1&primary_color=0d21a1" style={{ minWidth: '320px', height: '700px' }}></div>
        </div>

        {/* Contact Information */}
        <div
          ref={infoRef as any}
          className={`transition-all duration-1000 opacity-100 translate-y-0`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="group stagger-list-item stagger-list-item-1 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-royal-blue/20 bg-royal-blue/5 hover:border-royal-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-royal-blue/20 text-royal-blue group-hover:bg-royal-blue/30 transition-colors">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-inter font-semibold text-soft-white/70 mb-2">Email</h4>
                  <a
                    href="mailto:hello@luminexsocial.com"
                    className="text-lg font-inter text-soft-white hover:text-royal-blue transition-colors"
                  >
                    hello@luminexsocial.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group stagger-list-item stagger-list-item-2 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-royal-blue/20 bg-royal-blue/5 hover:border-royal-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-royal-blue/20 text-royal-blue group-hover:bg-royal-blue/30 transition-colors">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-inter font-semibold text-soft-white/70 mb-2">Phone</h4>
                  <a
                    href="tel:+15551234567"
                    className="text-lg font-inter text-soft-white hover:text-royal-blue transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group stagger-list-item stagger-list-item-3 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-royal-blue/20 bg-royal-blue/5 hover:border-royal-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-royal-blue/20 text-royal-blue group-hover:bg-royal-blue/30 transition-colors">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-inter font-semibold text-soft-white/70 mb-2">Office</h4>
                  <p className="text-lg font-inter text-soft-white">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="group stagger-list-item stagger-list-item-4 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-royal-blue/20 bg-royal-blue/5 hover:border-royal-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-royal-blue/20 text-royal-blue group-hover:bg-royal-blue/30 transition-colors">
                  <Clock size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-inter font-semibold text-soft-white/70 mb-2">Business Hours</h4>
                  <div className="text-lg font-inter text-soft-white space-y-1">
                    <p>Mon - Fri: 9:00 AM - 6:00 PM PT</p>
                    <p>Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Full Width */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-inter font-semibold text-soft-white/70">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 rounded-lg bg-soft-white/5 border border-royal-blue/20 text-soft-white hover:bg-royal-blue/20 hover:border-royal-blue/50 hover:text-royal-blue transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
