import Hero from '../components/Hero';
import WorkShowcase from '../components/WorkShowcase';
import Services from '../components/Services';
import OurWorkPortfolio from '../components/OurWorkPortfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

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
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </PageTransition>
  );
}
