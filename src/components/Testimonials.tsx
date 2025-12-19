import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    quote: "Luminex Social transformed our content strategy completely. Their AI automation saved us countless hours while delivering better results than we ever imagined.",
    author: "Sarah Johnson",
    company: "TechVision Inc",
    role: "Marketing Director",
  },
  {
    quote: "The video content they produced was absolutely stunning. Our engagement rates tripled within the first month. Highly recommend their services!",
    author: "Michael Chen",
    company: "GrowthLabs",
    role: "CEO",
  },
  {
    quote: "Working with Luminex was seamless from start to finish. They understood our vision and brought it to life beyond our expectations.",
    author: "Emily Rodriguez",
    company: "CreativeWorks",
    role: "Brand Manager",
  },
  {
    quote: "Their AI automation tools revolutionized our workflow. We're now able to scale our content production without sacrificing quality.",
    author: "David Park",
    company: "ScaleUp Media",
    role: "Operations Lead",
  },
  {
    quote: "The team is incredibly talented and professional. They delivered our project on time and exceeded all our requirements.",
    author: "Lisa Thompson",
    company: "BrightFuture Co",
    role: "Founder",
  },
];

const clientLogos = ['TechVision', 'GrowthLabs', 'CreativeWorks', 'ScaleUp', 'BrightFuture', 'NextGen'];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 
            className={`font-coolvetica text-5xl md:text-6xl text-soft-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Trusted by Brands
          </h2>
          <p 
            className={`font-inter text-lg text-soft-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            See what our clients say about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div
            className={`relative p-12 md:p-16 rounded-3xl transition-all duration-500 opacity-100 translate-y-0`}
            style={{
              background: 'rgba(11, 13, 18, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(140, 143, 148, 0.2)',
            }}
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-royal-blue/30 animate-pulse" />

            <div className="relative z-10">
              <p className="font-inter text-xl md:text-2xl text-soft-white mb-8 leading-relaxed min-h-32">
                <span 
                  className="inline-block transition-all duration-500"
                  key={currentIndex}
                >
                  "{testimonials[currentIndex].quote}"
                </span>
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-royal-blue/20 rounded-full flex items-center justify-center">
                  <span className="font-coolvetica text-2xl text-royal-blue">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-montreal text-soft-white font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="font-inter text-soft-white/70 text-sm">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center items-center gap-4 mt-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary-dark/50 text-soft-white hover:bg-royal-blue hover:scale-110 transition-all duration-300 flex items-center justify-center ripple"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-royal-blue w-8 h-2' 
                      : 'bg-deep-purple/30 w-2 h-2 hover:bg-deep-purple/50 hover:scale-125'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary-dark/50 text-soft-white hover:bg-royal-blue hover:scale-110 transition-all duration-300 flex items-center justify-center ripple"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className={`border-t border-deep-purple/20 pt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="font-montreal text-2xl font-bold text-deep-purple/40 hover:text-royal-blue hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{
                  animation: isVisible ? `slideRight 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
