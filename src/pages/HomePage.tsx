import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';

const WorkShowcase = lazy(() => import('../components/WorkShowcase'));
const Services = lazy(() => import('../components/Services'));
const OurWorkPortfolio = lazy(() => import('../components/OurWorkPortfolio'));
const Process = lazy(() => import('../components/Process'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const Contact = lazy(() => import('../components/Contact'));

const SectionSuspense = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-screen bg-primary-dark" />}>
    {children}
  </Suspense>
);

export default function HomePage() {
  return (
    <PageTransition>
      <section id="hero" className="relative">
        <Hero />
      </section>
      <SectionSuspense>
        <section id="videos">
          <WorkShowcase />
        </section>
      </SectionSuspense>
      <SectionSuspense>
        <section id="services" className="relative">
          <Services />
        </section>
      </SectionSuspense>
      <SectionSuspense>
        <section id="portfolio">
          <OurWorkPortfolio />
        </section>
      </SectionSuspense>
      <SectionSuspense>
        <section id="process">
          <Process />
        </section>
      </SectionSuspense>
      <SectionSuspense>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </SectionSuspense>
      <SectionSuspense>
        <section id="contact">
          <Contact />
        </section>
      </SectionSuspense>
    </PageTransition>
  );
}
