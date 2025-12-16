import { Users, Award, Globe, Zap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { icon: Zap, label: 'Years of Experience', value: '5+', color: 'from-blue-500' },
  { icon: Users, label: 'Projects Completed', value: '25+', color: 'from-purple-500' },
  { icon: Globe, label: 'Industries Served', value: '10+', color: 'from-pink-500' },
];

const teamMembers = [
  {
    name: 'Ayyan Khattak',
    role: 'Co-Founder & CEO',
    bio: 'AI Automation Expert and visionary leader driving innovation.',
    image: '',
  },
  {
    name: 'Furqan Shahid',
    role: 'Co-Founder & CEO',
    bio: 'Content Creation and Video Editing expert and creative strategist.',
    image: '',
  },
];


export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32 bg-primary-dark overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Content Section */}
        <div
          ref={contentRef as any}
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 transition-all duration-1000 ${
            contentVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold font-coolvetica text-white leading-tight">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-white font-neue-montreal">
                Your Partner in Digital Excellence
              </p>
            </div>

            <div className="space-y-4 text-secondary-text font-inter text-white leading-relaxed">
              <p>
                Luminex Social isn't just another agency! We're a team of digital pioneers dedicated to transforming how businesses connect with their audiences. With expertise spanning AI automation, content creation, and strategic marketing, we've helped 200+ brands unlock their true potential.
              </p>
              <p>
                What sets us apart is our passion for storytelling combined with cutting-edge technology. We don't just create content; we craft experiences. We don't just automate tasks; we build intelligent systems that work while you sleep. Every project is approached with fresh creativity and data-driven strategy.
              </p>
              <p>
                Our client-focused approach means we're not satisfied until you're thriving. We take time to understand your unique challenges, your vision, and your goals—then we deliver solutions that exceed expectations. Your success is our success.
              </p>
            </div>

            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white font-inter font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,33,161,0.4)] hover:scale-105">
              <span className="relative z-10">Meet the Team</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-white/20 to-primary-blue/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Right Side - Stats Grid */}
          <div
            ref={statsRef as any}
            className={`grid grid-cols-2 gap-4 md:gap-6 transition-all duration-1000 ${
              statsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const delay = index * 100;
              return (
                <div
                  key={index}
                  className={`group relative p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-primary-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)] transform hover:scale-105 hover:-translate-y-2`}
                  style={{
                    transitionDelay: statsVisible ? `${delay}ms` : '0ms',
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur`}></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-3 text-center">
                    <div className="flex justify-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}/20 text-primary-blue transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl md:text-4xl font-bold text-white font-coolvetica">
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-secondary-text font-inter">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div
          ref={teamRef as any}
          className={`space-y-12 transition-all duration-1000 ${
            teamVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold font-coolvetica text-white">
              Meet Our Team
            </h3>
            <p className="text-secondary-text font-inter text-white">
              Talented individuals united by a passion for excellence and innovation
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative h-full"
                style={{
                  transitionDelay: teamVisible ? `${index * 75}ms` : '0ms',
                }}
              >
                {/* Card Container */}
                <div className="relative h-full p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden transition-all duration-500 hover:border-primary-blue/50 hover:shadow-[0_0_30px_rgba(13,33,161,0.2)] hover:scale-105">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Front - Member Info */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="text-6xl">{member.image}</div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold font-coolvetica text-white">
                        {member.name}
                      </h4>
                      <p className="text-sm text-primary-blue font-inter font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Back - Bio */}
                  <div className="absolute inset-0 p-6 rounded-2xl flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-blue/20 to-primary-blue/10">
                    <div className="relative z-10 space-y-3">
                      <p className="text-sm text-white font-inter leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3 pt-2">
                        <a href="#" className="p-2 rounded-lg bg-primary-blue/20 text-primary-blue hover:bg-primary-blue/40 transition-colors">
                          <span className="text-sm">💼</span>
                        </a>
                        <a href="#" className="p-2 rounded-lg bg-primary-blue/20 text-primary-blue hover:bg-primary-blue/40 transition-colors">
                          <span className="text-sm">🔗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 text-center space-y-4 py-12 px-6 md:px-12 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-r from-primary-blue/5 to-primary-blue/[0.02] hover:border-primary-blue/30 transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-bold font-coolvetica text-white">
            Ready to transform your digital presence?
          </h3>
          <p className="text-secondary-text font-inter max-w-2xl mx-auto">
            Let's work together to turn your vision into reality. Get in touch today.
          </p>
          <button className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary-blue text-white font-inter font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(13,33,161,0.4)] hover:scale-105 transition-all duration-300">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
