"use client";
import { Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 2000);
    setIsLoaded(true);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center"
      style={{ background: '#04050f' }}
      data-testid="section-hero"
    >
      {/* ─── BACKGROUND LAYERS (pure CSS/SVG, no JS) ─── */}
      <div className="absolute inset-0" style={{ zIndex: 0, pointerEvents: 'none' }}>

        {/* 1a. Massive blue orb — top-right */}
        <div style={{
          position: 'absolute',
          width: '900px', height: '900px',
          top: '-15%', right: '-18%',
          background: 'radial-gradient(circle, rgba(0,80,255,0.40) 0%, rgba(0,50,200,0.18) 40%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }} />

        {/* 1b. Large purple orb — bottom-left */}
        <div style={{
          position: 'absolute',
          width: '600px', height: '600px',
          bottom: '-12%', left: '-10%',
          background: 'radial-gradient(circle, rgba(80,0,180,0.30) 0%, rgba(60,0,140,0.12) 50%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }} />

        {/* 1c. Medium blue orb — center-right */}
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          top: '35%', right: '8%',
          background: 'radial-gradient(circle, rgba(0,80,255,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }} />

        {/* 1d. Small gold accent — top-left */}
        <div style={{
          position: 'absolute',
          width: '200px', height: '200px',
          top: '4%', left: '3%',
          background: 'radial-gradient(circle, rgba(180,140,0,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }} />

        {/* 1e. Tiny gold orb — bottom-right */}
        <div style={{
          position: 'absolute',
          width: '150px', height: '150px',
          bottom: '6%', right: '6%',
          background: 'radial-gradient(circle, rgba(180,140,0,0.12) 0%, transparent 70%)',
          filter: 'blur(35px)',
          borderRadius: '50%',
        }} />

        {/* 2. Organic hill/wave shapes — bottom-right, layered for depth */}
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '70%',
            height: '80%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
          viewBox="0 0 700 600"
          preserveAspectRatio="xMaxYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back hill — deep blue */}
          <path
            d="M700,600 L700,320 C620,280 520,200 400,230 C280,260 180,310 80,340 C20,360 -20,380 0,600 Z"
            fill="rgba(0,60,255,0.08)"
          />
          {/* Second hill — deep purple */}
          <path
            d="M700,600 L700,370 C640,330 560,270 450,285 C340,300 240,350 140,375 C60,395 0,410 0,600 Z"
            fill="rgba(80,0,180,0.07)"
          />
          {/* Third hill — mid blue */}
          <path
            d="M700,600 L700,420 C660,390 590,345 490,350 C390,355 290,390 200,415 C110,440 30,455 0,600 Z"
            fill="rgba(0,80,255,0.06)"
          />
          {/* Fourth hill — blue-purple blend */}
          <path
            d="M700,600 L700,470 C670,448 620,415 540,415 C460,415 380,440 300,462 C210,486 100,500 0,600 Z"
            fill="rgba(120,80,255,0.05)"
          />
          {/* Front hill — dark gold tint, barely visible */}
          <path
            d="M700,600 L700,520 C680,505 650,488 610,485 C560,480 510,495 460,510 C400,527 320,545 220,560 C130,572 50,580 0,600 Z"
            fill="rgba(180,140,0,0.04)"
          />
        </svg>

        {/* 3. Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 50px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 50px)
          `,
        }} />

        {/* 4. Diagonal accent lines — right half */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(135deg, transparent 0%, transparent 48%, rgba(0,100,255,0.10) 50%, transparent 52%, transparent 100%),
            linear-gradient(135deg, transparent 0%, transparent 62%, rgba(0,100,255,0.07) 64%, transparent 66%, transparent 100%),
            linear-gradient(135deg, transparent 0%, transparent 74%, rgba(0,100,255,0.05) 76%, transparent 78%, transparent 100%),
            linear-gradient(135deg, transparent 0%, transparent 35%, rgba(80,0,180,0.06) 37%, transparent 39%, transparent 100%)
          `,
        }} />

        {/* 5a. Top-left corner bracket */}
        <svg style={{ position: 'absolute', top: 32, left: 32, width: 48, height: 48 }} viewBox="0 0 48 48">
          <polyline points="0,24 0,0 24,0" fill="none" stroke="rgba(180,140,0,0.32)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* 5b. Bottom-right corner bracket */}
        <svg style={{ position: 'absolute', bottom: 32, right: 32, width: 48, height: 48 }} viewBox="0 0 48 48">
          <polyline points="48,24 48,48 24,48" fill="none" stroke="rgba(180,140,0,0.22)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* 5c. Thin horizontal gold line across middle-right */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          width: '40%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(180,140,0,0.10), transparent)',
        }} />

        {/* 6. Vignette */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.75) 100%)',
        }} />

        {/* 7. Noise/grain texture via SVG feTurbulence */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>

      </div>
      {/* ─── END BACKGROUND ─── */}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-10 md:px-20 pt-20">
        <div className="flex flex-col items-start">
          <p
            className={`font-allura text-[24px] text-[#0D21A1] mb-6 transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            Digital Intelligence &amp; Automation
          </p>

          <h1
            className={`text-4xl md:text-[72px] font-bold text-[#F7F8FC] leading-[1.1] tracking-[-0.02em] max-w-[1100px] transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Scale your business with{' '}
            <span className="block mt-2 md:mt-4">
              {showTypewriter && (
                <TypeAnimation
                  sequence={[
                    'Professional Video Editing',
                    2000,
                    'AI Automation',
                    2000,
                    'Content Creation',
                    2000,
                  ]}
                  wrapper="span"
                  className="font-allura text-royal-blue italic"
                  speed={65}
                  repeat={Infinity}
                  cursor={true}
                />
              )}
            </span>
          </h1>

          <p
            className={`font-inter text-[18px] md:text-[20px] text-[#F7F8FC]/75 leading-[1.5] max-w-[800px] mt-6 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Struggling with content creation AND repetitive tasks? We edit your videos to perfection and automate your workflows to save 20+ hours weekly
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-5 mt-12 transition-all duration-500 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="#contact"
              className="px-10 py-4 bg-[#0D21A1] text-[#F7F8FC] font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(13,33,161,0.4)]"
            >
              <Phone className="w-5 h-5" />
              Book A Call
            </a>

            <a
              href="#testimonials"
              className="px-10 py-4 bg-transparent text-[#F7F8FC] font-semibold rounded-lg border-2 border-[#F7F8FC]/30 transition-all duration-300 hover:border-[#0D21A1] hover:bg-[#0D21A1]/10 flex items-center justify-center"
            >
              Learn More <span className="font-allura ml-2 text-xl italic">Premium Experience</span>
            </a>
          </div>

          {/* Influencer Strip */}
          <div className="w-full mt-24 overflow-hidden relative group">
            <p className="text-[#F7F8FC]/40 text-sm font-inter mb-6 uppercase tracking-[0.2em]">You&apos;re in good hands:</p>
            <div className="flex animate-scroll-influencers whitespace-nowrap items-center hover:pause">
              {[...influencers, ...influencers, ...influencers].map((person, index) => (
                <div key={index} className="inline-flex items-center gap-4 px-12">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0D21A1]/30">
                    <img
                      src={`${person.image}${person.image.includes('?') ? '&' : '?'}tr=w-100`}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[#F7F8FC] font-montreal font-bold text-lg leading-none mb-1">{person.name}</h4>
                    <p className="text-[#F7F8FC]/40 font-inter text-sm leading-none">{person.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 md:right-20 hidden lg:block">
          <p className="font-allura text-[24px] text-[#F7F8FC]/40">
            Luminex Social &rarr;
          </p>
        </div>
      </div>

      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-[#0D21A1] animate-bounce" />
      </div>
    </section>
  );
}

const influencers = [
  { name: "Omar", stat: "10K followers", image: "https://ik.imagekit.io/5pahp6yywb/Omar.jpg?updatedAt=1767255691021" },
  { name: "OB Health", stat: "272K followers", image: "https://ik.imagekit.io/5pahp6yywb/OB%20Health.jpg" },
  { name: "Umar Sheikh", stat: "43.7k followers", image: "https://ik.imagekit.io/5pahp6yywb/Umar%20sheikh.jpg" },
  { name: "Andrew Watt", stat: "17.4k followers", image: "https://ik.imagekit.io/5pahp6yywb/Pics/Ginger%20nigga.jpg" },
  { name: "Brett Boudrow", stat: "1.4k followers", image: "https://ik.imagekit.io/5pahp6yywb/Pics/Brett.jpg" },
  { name: "Steven Baterina", stat: "5k followers", image: "https://ik.imagekit.io/5pahp6yywb/Pics/Steven%20Baterina.jpg" },
  { name: "Kahyl Jadavji", stat: "12.6k followers", image: "https://ik.imagekit.io/5pahp6yywb/Pics/Kahyl.jpg" },
];
