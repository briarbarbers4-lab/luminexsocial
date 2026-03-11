"use client";
import dynamic from 'next/dynamic';

const WorkShowcase = dynamic(() => import('./WorkShowcase'), { ssr: false });
const Services = dynamic(() => import('./Services'));
const OurWorkPortfolio = dynamic(() => import('./OurWorkPortfolio'));
const Process = dynamic(() => import('./Process'));
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'));
const Contact = dynamic(() => import('./Contact'), { ssr: false });

export default function DynamicComponents() {
  return (
    <>
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
    </>
  );
}
