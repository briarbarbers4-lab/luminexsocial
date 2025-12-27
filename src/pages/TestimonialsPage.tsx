import { Play, Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    videoUrl: "https://ik.imagekit.io/imkyby1j5/Video/Brett%20Boudrow.mp4",
    client: "Brett Boudrow",
    role: "Content Creator",
    rating: 5,
    text: "Working with Luminex transformed our content workflow. The AI automation alone saved us hours every single week."
  },
  {
    id: 2,
    videoUrl: "https://ik.imagekit.io/imkyby1j5/Video/IMG_1005.MP4",
    client: "Alex Rivera",
    role: "E-commerce Founder",
    rating: 5,
    text: "The quality of video editing is top-tier. They understand the hooks and pacing needed for viral shorts."
  },
  {
    id: 3,
    videoUrl: "",
    client: "Sarah Jenkins",
    role: "Marketing Director",
    rating: 5,
    text: "Professional, efficient, and innovative. Their systems allowed us to scale our output without hiring more staff."
  },
  {
    id: 4,
    videoUrl: "",
    client: "Michael Chen",
    role: "Tech Influencer",
    rating: 5,
    text: "Highly recommended for any creator looking to automate the boring parts and focus on creativity."
  },
  {
    id: 5,
    videoUrl: "",
    client: "Elena Rodriguez",
    role: "Business Coach",
    rating: 5,
    text: "The ROI was immediate. Better videos, less time spent, more engagement across all my social channels."
  }
];

export default function TestimonialsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0D12] pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h1 
            className={`font-helvetica text-4xl md:text-6xl font-bold text-soft-white mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Client <span className="text-royal-blue">Success Stories</span>
          </h1>
          <p 
            className={`font-inter text-lg text-soft-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Hear from the creators and businesses who scaled their content and automated their workflows with Luminex Social.
          </p>
        </div>

        {/* Hero Containers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div 
              key={t.id}
              className={`glass-effect rounded-2xl overflow-hidden p-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {t.videoUrl ? (
                <div className="relative aspect-[9/16] bg-black/40 rounded-xl mb-6 overflow-hidden group">
                  <video 
                    src={t.videoUrl} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    muted
                    playsInline
                    loop
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-royal-blue/20 backdrop-blur-sm border border-royal-blue/40 flex items-center justify-center">
                      <Play className="w-6 h-6 text-soft-white fill-soft-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[9/16] bg-soft-white/5 rounded-xl mb-6 flex items-center justify-center">
                  <Quote className="w-12 h-12 text-royal-blue/20" />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-royal-blue text-royal-blue" />
                  ))}
                </div>
                <p className="font-inter text-soft-white/80 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-soft-white/10">
                  <h3 className="font-montreal font-bold text-soft-white">{t.client}</h3>
                  <p className="font-inter text-sm text-soft-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
