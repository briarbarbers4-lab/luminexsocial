import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    videoUrl: "https://ik.imagekit.io/imkyby1j5/Video/Brett%20Boudrow.mp4",
    client: "Brett Boudrow",
    role: "Content Creator",
    rating: 5,
    text: "Worked with Khan (Furqan). He is super duper fast, Whenever I have concerns or I want something changed, He hops on a zoom call with me literally that day or next day"
  },
  {
    id: 2,
    videoUrl: "https://ik.imagekit.io/imkyby1j5/Video/IMG_1005.MP4",
    client: "Kahyl Jadavji",
    role: "Founder - Marketing Agency",
    rating: 5,
    text: "So far I am satisfied with their work, On time, Profesional, really good at communication and understand's what we are looking for"
  },
  {
    id: 3,
    videoUrl: "",
    client: "Sarah Jenkins",
    role: "Marketing Director",
    rating: 5,
    text: "Professional, efficient, and innovative. Their systems allowed us to scale our output without hiring more staff."
  }
];

const imageTestimonials = [
  "https://ik.imagekit.io/5pahp6yywb/Website%20Text%20restimonais'/image%203.png",
  "https://ik.imagekit.io/5pahp6yywb/Website%20Text%20restimonais'/image%201.png",
  "https://ik.imagekit.io/5pahp6yywb/Website%20Text%20restimonais'/image.png",
  "https://ik.imagekit.io/5pahp6yywb/Website%20Text%20restimonais'/image%202.png",
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-12 bg-[#0B0D12] overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="testimonials-heading">
            There's a reason people are <span className="font-allura text-royal-blue italic">raving</span> about us.
          </h2>
          <p className="font-inter text-lg text-soft-white/60 max-w-2xl mx-auto">
            Hear from the creators and businesses who scaled their content and automated their workflows with Luminex Social.
          </p>
        </div>

        {/* Image Testimonial Carousel */}
        <div className="relative w-full overflow-hidden py-10 mb-20">
          <div className="flex animate-scroll-right-to-left whitespace-nowrap">
            {[...imageTestimonials, ...imageTestimonials, ...imageTestimonials].map((img, index) => (
              <div
                key={index}
                className="inline-block px-4"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl bg-[#0B0D12]"
                  style={{
                    width: '350px',
                    border: '1px solid rgba(247, 248, 252, 0.1)',
                  }}
                >
                  <img
                    src={img}
                    alt={`Testimonial ${index}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="glass-effect rounded-2xl overflow-hidden p-6 transition-all duration-500 hover:translate-y-[-8px] hover:border-royal-blue/30"
            >
              {t.videoUrl ? (
                <div className="relative aspect-[9/16] bg-black/40 rounded-xl mb-6 overflow-hidden group">
                  <video 
                    src={t.videoUrl} 
                    className="w-full h-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
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
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-right-to-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}} />
    </section>
  );
}
