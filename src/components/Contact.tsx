import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref: contentRef } = useScrollReveal();
  const { ref: widgetRef } = useScrollReveal();

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-24 md:py-40 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div
          ref={contentRef as any}
          className={`text-center mb-12 transition-all duration-1000 opacity-100 translate-y-0`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-coolvetica text-soft-white mb-4 leading-tight">
            Let's Create Something <span className="font-allura text-royal-blue italic">Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-soft-white/70 font-inter max-w-2xl mx-auto">
            Get in touch for a free consultation
          </p>
        </div>

        {/* Calendly Widget - Professional Design */}
        <div
          ref={widgetRef as any}
          className={`transition-all duration-1000 opacity-100 translate-y-0 flex justify-center`}
        >
          <div
            className="w-full max-w-[1000px] rounded-3xl overflow-hidden backdrop-blur-md"
            style={{
              background: 'rgba(11, 13, 18, 0.6)',
              border: '1.5px solid rgba(13, 33, 161, 0.4)',
              boxShadow: '0 0 40px rgba(13, 33, 161, 0.15), inset 0 0 40px rgba(13, 33, 161, 0.05)',
            }}
          >
            <div className="calendly-inline-widget w-full" data-url="https://calendly.com/luminexsocial05/30min?hide_gdpr_banner=1&primary_color=0d21a1" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
