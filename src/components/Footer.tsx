import { Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'AI Automation', href: '#services' },
    { name: 'Video Editing', href: '#services' },
    { name: 'Content Creation', href: '#services' }
  ],
  company: [
    { name: 'What we do', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'Testimonials', href: '#testimonials' }
  ],
  contact: [
    { name: 'ayyan@luminexsocial.com', href: 'mailto:ayyan@luminexsocial.com' },
    { name: '+923145659189', href: 'https://wa.me/923145659189' },
    { name: 'Schedule a Call', href: '#contact' }
  ],
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/luminex.social/' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@luminex.social' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/luminex-social/' },
];

export default function Footer() {
  return (
    <footer className="bg-transparent relative border-t border-royal-blue/20">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(13, 33, 161, 0.5), transparent)',
          boxShadow: '0 0 20px rgba(13, 33, 161, 0.3)',
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="block">
                <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://ik.imagekit.io/luminexsocial/Logo_V1.png?updatedAt=1765875231435" 
                    alt="Luminex Social Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <span className="font-coolvetica text-2xl text-soft-white">Luminex Social</span>
            </div>
            <p className="font-inter text-soft-white/70 mb-6 max-w-md">
              To empower brands by uniting AI automation and content creation streamlining operations, scaling execution, and delivering engaging content that drives growth and meaningful connections.
            </p>
          </div>

          <div>
            <h4 className="font-montreal text-soft-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montreal text-soft-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montreal text-soft-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm"
                    {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-royal-blue/20">
          <p className="font-inter text-soft-white/60 text-sm mb-4 md:mb-0">
            © 2025 Luminex Social. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-royal-blue/10 hover:bg-royal-blue/20 border border-royal-blue/20 flex items-center justify-center transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-soft-white/60 group-hover:text-royal-blue transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
