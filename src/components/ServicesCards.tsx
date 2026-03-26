"use client";
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

/* ─── DATA ─── */
const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Happy Clients' },
  { value: '24/7', label: 'Support Available' },
];

const services = [
  {
    id: 1,
    title: 'AI Automation',
    teaser: 'Automate repetitive tasks, save 20+ hours weekly',
    lottie: '/ai-automation.json',
    features: [
      'Custom AI Assistants & Voice Agents',
      'Social Media Automation',
      'Lead Generation & Qualification',
      'Email Marketing Automation',
      'CRM & Database Management',
      'Workflow Integration',
    ],
  },
  {
    id: 2,
    title: 'Content Creation',
    teaser: 'Premium video content that stops the scroll',
    lottie: '/content-creation.json',
    features: [
      'Video Editing Services',
      'Short-Form Social Content',
      'Motion Graphics & Visual Effects',
      'Podcast & Talking-Head Editing',
      'Branding & Visual Consistency',
    ],
  },
  {
    id: 3,
    title: 'Digital Strategy & Growth',
    teaser: 'Data-driven strategies for measurable growth',
    lottie: '/digital-strategy.json',
    features: [
      'Market Research & Analysis',
      'Growth Strategy Development',
      'Performance Optimization',
      'Analytics & Reporting',
      'Conversion Rate Optimization',
      'ROI Tracking & Attribution',
    ],
  },
];

/* ─── COMPONENT ─── */
export default function ServicesCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      style={{ background: '#0B0D12', position: 'relative', overflow: 'hidden' }}
    >
      {/* Top fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, #0B0D12, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '120px',
          background: 'linear-gradient(to top, #0B0D12, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      <div style={{ padding: '100px 24px 120px', maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ─── HEADING ─── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            className="font-coolvetica"
            style={{ color: '#fff', marginBottom: '16px' }}
          >
            What We{' '}
            <span className="font-allura" style={{ color: '#0D21A1', fontStyle: 'italic' }}>
              Do
            </span>
          </h2>
          <p
            className="font-inter"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '18px',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            We combine cutting-edge AI automation with premium content creation to
            transform your digital presence and accelerate growth.
          </p>
        </div>

        {/* ─── STATS BAR ─── */}
        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '48px 24px',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 180px',
                  textAlign: 'center',
                  padding: '16px 32px',
                  borderRight: i < stats.length - 1
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
                }}
              >
                <div
                  className="font-coolvetica"
                  style={{ color: '#0D21A1', fontSize: '48px', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-inter"
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '8px' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CARDS ─── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {services.map((service, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  width: '380px',
                  height: '480px',
                  perspective: '1200px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  borderRadius: '16px',
                  boxShadow: isHovered
                    ? '0 0 60px rgba(13,33,161,0.3), 0 0 120px rgba(13,33,161,0.1)'
                    : '0 0 0px transparent',
                  transition: 'box-shadow 0.3s ease',
                  // Full-width on small screens
                  maxWidth: '100%',
                }}
              >
                {/* ── Inner flip container ── */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* ──────── FRONT ──────── */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(13,33,161,0.15), rgba(80,0,180,0.10))',
                      border: '1px solid rgba(13,33,161,0.25)',
                      boxShadow: 'inset 0 -40px 80px rgba(13,33,161,0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '32px 28px',
                      gap: '8px',
                    }}
                  >
                    {/* Lottie */}
                    <Player
                      autoplay
                      loop
                      src={service.lottie}
                      style={{ width: '200px', height: '200px' }}
                    />

                    {/* Title */}
                    <h3
                      className="font-coolvetica"
                      style={{
                        color: '#fff',
                        fontSize: '28px',
                        margin: '8px 0 4px',
                        textAlign: 'center',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Teaser */}
                    <p
                      className="font-inter"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '14px',
                        textAlign: 'center',
                        lineHeight: '1.5',
                        margin: 0,
                      }}
                    >
                      {service.teaser}
                    </p>

                    {/* Hint */}
                    <p
                      className="font-inter"
                      style={{
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '12px',
                        marginTop: '20px',
                      }}
                    >
                      Hover to explore →
                    </p>
                  </div>

                  {/* ──────── BACK ──────── */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(13,33,161,0.25), rgba(80,0,180,0.20))',
                      border: '1px solid rgba(13,33,161,0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '32px 28px',
                    }}
                  >
                    {/* Title */}
                    <h3
                      className="font-coolvetica"
                      style={{
                        color: '#fff',
                        fontSize: '24px',
                        marginBottom: '24px',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Feature list */}
                    <ul
                      style={{
                        flex: 1,
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#0D21A1',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            className="font-inter"
                            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contact"
                      style={{
                        display: 'block',
                        background: '#0D21A1',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontSize: '15px',
                        fontWeight: 600,
                        marginTop: '24px',
                        width: '100%',
                        boxSizing: 'border-box',
                        transition: 'background 0.2s ease',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1a35c4')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#0D21A1')}
                    >
                      Get Started Today →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
