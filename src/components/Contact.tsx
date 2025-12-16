import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const services = [
  'AI Automation',
  'Content Creation',
  'Social Media Management',
  'SEO Content Strategy',
  'Podcast Editing',
  'Script Writing',
  'Marketing Automation',
  'Analytics & Reporting',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Contact() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setSubmitMessage('Message sent! We\'ll get back to you within 24 hours.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <section className="relative py-20 md:py-32 bg-primary-dark overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-blue/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-blue/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div
          ref={contentRef as any}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            contentVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-8 py-12 md:py-16 rounded-3xl bg-gradient-to-r from-primary-blue/20 via-primary-blue/10 to-transparent border border-primary-blue/30 max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-coolvetica text-white mb-4 leading-tight">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg md:text-xl text-primary-blue font-neue-montreal">
              Get in touch for a free consultation
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Column - Contact Form */}
          <div
            ref={formRef as any}
            className={`transition-all duration-1000 ${
              formVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8 md:p-10 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <h3 className="text-2xl md:text-3xl font-bold font-coolvetica text-white mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-semibold text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg font-inter text-white bg-white/5 border transition-all duration-300 placeholder-white/40 focus:outline-none focus:bg-white/10 ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 font-inter">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg font-inter text-white bg-white/5 border transition-all duration-300 placeholder-white/40 focus:outline-none focus:bg-white/10 ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 font-inter">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-inter font-semibold text-white mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg font-inter text-white bg-white/5 border border-white/10 transition-all duration-300 placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-primary-blue"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-inter font-semibold text-white mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg font-inter text-white bg-white/5 border transition-all duration-300 focus:outline-none focus:bg-white/10 ${
                      errors.service ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                    }`}
                  >
                    <option value="" className="bg-primary-dark">Select a service...</option>
                    {services.map(service => (
                      <option key={service} value={service} className="bg-primary-dark">
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-2 font-inter">{errors.service}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg font-inter text-white bg-white/5 border transition-all duration-300 placeholder-white/40 focus:outline-none focus:bg-white/10 resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 font-inter">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-inter font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-white/20 to-primary-blue/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/50">
                    <CheckCircle size={20} className="text-emerald-400" />
                    <p className="text-emerald-400 font-inter text-sm">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/50">
                    <AlertCircle size={20} className="text-red-400" />
                    <p className="text-red-400 font-inter text-sm">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div
            ref={infoRef as any}
            className={`transition-all duration-1000 ${
              infoVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              {/* Email */}
              <div className="group p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-primary-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-blue/20 text-primary-blue group-hover:bg-primary-blue/30 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-inter font-semibold text-secondary-text mb-2">Email</h4>
                    <a
                      href="mailto:hello@luminexsocial.com"
                      className="text-lg font-inter text-white hover:text-primary-blue transition-colors"
                    >
                      hello@luminexsocial.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-primary-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-blue/20 text-primary-blue group-hover:bg-primary-blue/30 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-inter font-semibold text-secondary-text mb-2">Phone</h4>
                    <a
                      href="tel:+15551234567"
                      className="text-lg font-inter text-white hover:text-primary-blue transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-primary-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-blue/20 text-primary-blue group-hover:bg-primary-blue/30 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-inter font-semibold text-secondary-text mb-2">Office</h4>
                    <p className="text-lg font-inter text-white">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-primary-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-blue/20 text-primary-blue group-hover:bg-primary-blue/30 transition-colors">
                    <Clock size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-inter font-semibold text-secondary-text mb-2">Business Hours</h4>
                    <div className="text-lg font-inter text-white space-y-1">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM PT</p>
                      <p>Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-inter font-semibold text-secondary-text">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-primary-blue/20 hover:border-primary-blue/50 hover:text-primary-blue transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Calendar Button */}
              <button className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 text-white font-inter font-semibold rounded-lg border border-white/20 overflow-hidden transition-all duration-300 hover:bg-primary-blue/20 hover:border-primary-blue/50 hover:shadow-[0_0_30px_rgba(13,33,161,0.3)]">
                <span className="relative z-10">Book a Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/20 to-primary-blue/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center space-y-4 py-12 px-6 md:px-12 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-r from-primary-blue/5 to-primary-blue/[0.02]">
          <p className="text-secondary-text font-inter">
            Prefer to schedule a call? We're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@luminexsocial.com"
              className="px-6 py-3 bg-primary-blue text-white font-inter font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(13,33,161,0.4)] hover:scale-105 transition-all duration-300"
            >
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="px-6 py-3 bg-white/10 text-white font-inter font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
