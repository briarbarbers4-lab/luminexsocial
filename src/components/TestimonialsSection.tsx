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

const textTestimonials = [
  { name: "Sarah Johnson", role: "Marketing Director", text: "Luminex Social tripled our content output without adding a single team member. Their AI automation saved us 25 hours per week." },
  { name: "Mike Chen", role: "Content Creator", text: "The video editing quality is insane. Every reel they produce goes viral. 2M+ views consistently." },
  { name: "Alex Rivera", role: "Startup Founder", text: "Finally, an agency that understands both AI and creative. They automated our entire lead funnel while creating scroll-stopping content." },
  { name: "Jessica Park", role: "E-commerce Brand Owner", text: "We went from 500 followers to 50K in 3 months. Their content strategy and video editing are unmatched." },
  { name: "David Thompson", role: "SaaS CEO", text: "The AI chatbot they built handles 80% of our customer inquiries. Response time dropped from 4 hours to 2 minutes." },
  { name: "Lisa Martinez", role: "Agency Owner", text: "Best investment we've made. Professional video editing + automation = unstoppable growth machine." },
  { name: "Robert Kim", role: "YouTuber", text: "Their team delivered 20 high-quality video edits in a week. Fast turnaround, zero revisions needed." },
  { name: "Emma Wilson", role: "Business Consultant", text: "Automation that actually works. They integrated everything—CRM, email, social media—all running 24/7." },
  { name: "Tom Anderson", role: "Personal Brand Coach", text: "Incredible attention to detail. Every video feels custom-made, not templated. True professionals." },
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

        {/* Text Testimonials Grid with Animations */}
        <div className="testimonials-grid h-[800px] overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0D12] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0D12] to-transparent z-10" />
          
          <div className="testimonial-column scroll-down">
            {[...textTestimonials.slice(0, 3), ...textTestimonials.slice(0, 3)].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="testimonial-column scroll-up">
            {[...textTestimonials.slice(3, 6), ...textTestimonials.slice(3, 6)].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="testimonial-column scroll-down">
            {[...textTestimonials.slice(6, 9), ...textTestimonials.slice(6, 9)].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-soft-white/5 border border-soft-white/10 rounded-2xl p-8 min-h-[200px]">
      <p className="font-inter text-soft-white/85 leading-relaxed mb-6">"{text}"</p>
      <div className="flex flex-col">
        <strong className="text-soft-white font-montreal">{name}</strong>
        <span className="text-soft-white/40 text-sm font-inter">{role}</span>
      </div>
    </div>
  );
}
