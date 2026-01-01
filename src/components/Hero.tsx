import { Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AbstractWaves from './AbstractWaves';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0B0D12] overflow-hidden flex flex-col justify-center" data-testid="section-hero">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <AbstractWaves />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-10 md:px-20 pt-20">
        <div className="flex flex-col items-start">
          <p 
            className={`font-allura text-[24px] text-[#0D21A1] mb-6 transition-all duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Digital Intelligence & Automation
          </p>

          <h1 
            className={`text-4xl md:text-[72px] font-bold text-[#F7F8FC] leading-[1.1] tracking-[-0.02em] max-w-[1100px] transition-all duration-500 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Scale your business with{' '}
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
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p 
            className={`font-inter text-[18px] md:text-[20px] text-[#F7F8FC]/75 leading-[1.5] max-w-[800px] mt-6 transition-all duration-500 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Struggling with content creation AND repetitive tasks? We edit your videos to perfection and automate your workflows to save 20+ hours weekly
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-5 mt-12 transition-all duration-500 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
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
          <div className="w-full mt-24 overflow-hidden relative">
            <p className="text-[#F7F8FC]/40 text-sm font-inter mb-6 uppercase tracking-[0.2em]">You're in good hands:</p>
            <div className="flex animate-scroll-influencers whitespace-nowrap items-center">
              {[...influencers, ...influencers].map((person, index) => (
                <div key={index} className="inline-flex items-center gap-4 px-12">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0D21A1]/30">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
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
  { name: "Jay Vawzen", stat: "187K followers", image: "https://ik.imagekit.io/5pahp6yywb/influencers/jay.png" },
  { name: "Izan Garcia", stat: "55.5K followers", image: "https://ik.imagekit.io/5pahp6yywb/influencers/izan.png" },
  { name: "Umar Sheikh", stat: "414k followers", image: "https://ik.imagekit.io/5pahp6yywb/influencers/umar.png" },
  { name: "Henry", stat: "Growth Consultant", image: "https://ik.imagekit.io/5pahp6yywb/influencers/henry.png" },
  { name: "Finance Guy", stat: "250K subs", image: "https://ik.imagekit.io/5pahp6yywb/influencers/finance.png" },
  { name: "Alex Rivera", stat: "Marketing Guru", image: "https://ik.imagekit.io/5pahp6yywb/influencers/alex.png" },
  { name: "Sarah J", stat: "Content Expert", image: "https://ik.imagekit.io/5pahp6yywb/influencers/sarah.png" },
];

