'use client';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';

// Use Next.js dynamic() instead of React.lazy() for App Router compatibility
const WorkShowcase = dynamic(() => import('../components/WorkShowcase'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
  ssr: false, // Heavy scroll animations — skip SSR
});
const Services = dynamic(() => import('../components/Services'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
});
const OurWorkPortfolio = dynamic(() => import('../components/OurWorkPortfolio'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
});
const Process = dynamic(() => import('../components/Process'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
});
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
});
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-[50vh] bg-[#0B0D12]" />,
  ssr: false, // Loads Calendly script via useEffect
});

export default function HomePage() {
  return (
    <PageTransition>
      <section id="hero" className="relative">
        <Hero />
      </section>
      <section id="videos">
        <WorkShowcase />
      </section>
      <section id="services" className="relative">
        <Services />
      </section>
      <section id="portfolio">
        <OurWorkPortfolio />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </PageTransition>
  );
}

