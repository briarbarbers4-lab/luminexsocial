import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  services: ['AI Automation', 'Video Editing', 'Content Creation'],
  company: ['About Us', 'Case Studies', 'Careers'],
  contact: ['ayyan@luminexsocial.com', '+923145659189', 'Schedule a Call', 'Support'],
};

const socialLinks = [
  { icon: Youtube, label: 'Youtube' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
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
              Amplifying brands through AI-powered content creation, professional video editing, and strategic automation.
            </p>

            <div
              className="p-4 rounded-2xl inline-block"
              style={{
                background: 'rgba(13, 33, 161, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(247, 248, 252, 0.1)',
              }}
            >
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none text-soft-white placeholder-soft-white/50 font-inter text-sm w-48"
                />
                <button className="px-4 py-2 bg-royal-blue text-soft-white rounded-lg hover:scale-105 transition-transform font-inter text-sm font-medium">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montreal text-soft-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm">
                    {link}
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
                  <a href="#" className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm">
                    {link}
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
                  <a href="#" className="font-inter text-soft-white/60 hover:text-royal-blue transition-colors text-sm">
                    {link}
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
                href="#"
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
