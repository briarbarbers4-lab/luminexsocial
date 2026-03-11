import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Luminex Social | Scale Your Business with AI & Premium Content',
  description: 'Unlock your business potential with professional video editing, AI automation, and strategic content creation. Save 20+ hours weekly with Luminex Social.',
  keywords: ['AI Automation', 'Video Editing', 'Content Creation', 'Digital Strategy', 'Luminex Social'],
};

// Dynamically import client-heavy components
const WorkShowcase = dynamic(() => import('../components/WorkShowcase'), { ssr: false });
const Services = dynamic(() => import('../components/Services'));
const OurWorkPortfolio = dynamic(() => import('../components/OurWorkPortfolio'));
const Process = dynamic(() => import('../components/Process'));
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'));
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

export default function Page() {
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

