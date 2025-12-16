import PageTransition from '../components/PageTransition';
import { useScrollRevealAnimation } from '../hooks/useScrollAnimations';

export default function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollRevealAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollRevealAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollRevealAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollRevealAnimation();

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        {/* Hero Banner */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center space-y-6 animate-fade-in-up">
              <h1 className="font-coolvetica text-5xl md:text-7xl text-soft-white font-bold leading-tight">
                About <span className="bg-gradient-to-r from-royal-blue to-royal-blue/80 bg-clip-text text-transparent">Luminex Social</span>
              </h1>
              <p className="text-xl text-soft-white/70 max-w-2xl mx-auto font-montreal">
                Transforming brands through strategic storytelling and digital innovation
              </p>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Our Story */}
        <section ref={storyRef} className="py-20 border-t border-soft-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 opacity-100`}>
                <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold">
                  Our <span className="text-royal-blue">Story</span>
                </h2>
                <p className="text-lg text-soft-white/70 leading-relaxed">
                  Founded in 2020, Luminex Social emerged from a simple vision: to help businesses shine brighter in the digital landscape. We've grown into a full-service digital agency serving brands across multiple industries.
                </p>
                <p className="text-lg text-soft-white/70 leading-relaxed">
                  We believe that exceptional social media is about understanding your brand voice and driving measurable results that impact your business.
                </p>
              </div>

              <div className={`relative opacity-100`}>
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-royal-blue/5 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/20 rounded-2xl p-8 backdrop-blur-md glass-premium">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-royal-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl font-bold text-royal-blue">💡</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-soft-white">Our Mission</h3>
                        <p className="text-soft-white/60 mt-1">Empower businesses with innovative strategies that drive growth and engagement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-royal-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl font-bold text-royal-blue">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-soft-white">Our Vision</h3>
                        <p className="text-soft-white/60 mt-1">Be the most trusted social partner for ambitious brands worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-royal-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl font-bold text-royal-blue">⭐</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-soft-white">Our Values</h3>
                        <p className="text-soft-white/60 mt-1">Integrity, innovation, and customer-centric solutions in everything we do</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-20 border-t border-soft-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className={`text-center mb-16 opacity-100`}>
              <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
                Meet Our <span className="text-royal-blue">Team</span>
              </h2>
              <p className="text-xl text-soft-white/60">Exceptional talent dedicated to success</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
                { name: 'Marcus Chen', role: 'Creative Director', emoji: '🎨' },
                { name: 'Emily Rodriguez', role: 'Strategy Lead', emoji: '📊' },
                { name: 'Alex Patterson', role: 'Tech Lead', emoji: '💻' },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`group relative stagger-item stagger-item-${(index % 4) + 1} transition-all duration-700 opacity-100 translate-y-0`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl p-6 text-center hover:border-royal-blue/40 transition-all duration-300 glass-premium">
                    <div className="text-5xl mb-4">{member.emoji}</div>
                    <h3 className="text-xl font-bold text-soft-white">{member.name}</h3>
                    <p className="text-soft-white/60 mt-2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 border-t border-soft-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Happy Clients' },
                { number: '500M+', label: 'Total Reach' },
                { number: '4.9/5', label: 'Average Rating' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl hover:border-royal-blue/40 stagger-item stagger-item-${(index % 4) + 1} transition-all duration-700 opacity-100 translate-y-0 glass-premium`}
                >
                  <p className="text-4xl md:text-5xl font-bold text-royal-blue font-coolvetica animate-counter">{stat.number}</p>
                  <p className="text-soft-white/60 mt-3">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section ref={whyRef} className="py-20 border-t border-soft-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className={`text-center mb-16 opacity-100`}>
              <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold mb-4">
                Why Choose <span className="text-royal-blue">Us</span>
              </h2>
              <p className="text-xl text-soft-white/60">What sets Luminex Social apart</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Data-Driven Approach', description: 'Every strategy backed by analytics for measurable results.' },
                { title: 'Creative Excellence', description: 'Award-winning creative team producing standout content.' },
                { title: '24/7 Support', description: 'Always available to support your social media needs.' },
                { title: 'Industry Expertise', description: 'Experience across multiple industries and markets.' },
                { title: 'Transparent Reporting', description: 'Clear reports on your social media performance.' },
                { title: 'Customized Solutions', description: 'Tailored strategies for your unique business needs.' },
              ].map((reason, index) => (
                <div
                  key={index}
                  className={`p-8 bg-gradient-to-br from-royal-blue/5 to-transparent border border-royal-blue/20 rounded-xl hover:border-royal-blue/40 hover:shadow-lg hover:shadow-royal-blue/10 stagger-item stagger-item-${(index % 6) + 1} transition-all duration-700 opacity-100 translate-y-0 glass-premium`}
                >
                  <h3 className="text-xl font-bold text-soft-white mb-3">{reason.title}</h3>
                  <p className="text-soft-white/60">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-soft-white/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-gradient-to-br from-royal-blue/10 to-transparent border border-royal-blue/30 rounded-2xl p-12 text-center space-y-6 glass-premium">
              <h2 className="font-coolvetica text-4xl md:text-5xl text-soft-white font-bold">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
                Let's discuss how Luminex Social can help your brand shine in the digital space.
              </p>
              <button className="btn-premium btn-ripple px-8 py-3 bg-royal-blue text-soft-white font-montreal font-semibold rounded-full focus-ring transition-all duration-300" aria-label="Get In Touch">
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
