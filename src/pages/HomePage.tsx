import Hero from '../components/Hero';
import VideoShowcase from '../components/VideoShowcase';
import Services from '../components/Services';
import About from '../components/About';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';
import FloatingVideos from '../components/FloatingVideos';

const floatingVideoData = [
  {
    id: 'floating-1',
    videoUrl: 'https://videos.pexels.com/video-files/4507250/4507250-sd_640_360_25fps.mp4',
    thumbnail: 'https://images.pexels.com/photos/5632670/pexels-photo-5632670.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Digital Innovation',
    position: 'top-left' as const,
    rotation: -8,
    parallaxSpeed: 0.3,
  },
  {
    id: 'floating-2',
    videoUrl: 'https://videos.pexels.com/video-files/5210419/5210419-sd_640_360_25fps.mp4',
    thumbnail: 'https://images.pexels.com/photos/5210425/pexels-photo-5210425.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Creative Design',
    position: 'top-right' as const,
    rotation: 6,
    parallaxSpeed: 0.4,
  },
  {
    id: 'floating-3',
    videoUrl: 'https://videos.pexels.com/video-files/6298328/6298328-sd_640_360_25fps.mp4',
    thumbnail: 'https://images.pexels.com/photos/6297614/pexels-photo-6297614.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Tech Solutions',
    position: 'center-left' as const,
    rotation: -5,
    parallaxSpeed: 0.35,
  },
  {
    id: 'floating-4',
    videoUrl: 'https://videos.pexels.com/video-files/4077837/4077837-sd_640_360_24fps.mp4',
    thumbnail: 'https://images.pexels.com/photos/3962665/pexels-photo-3962665.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Brand Strategy',
    position: 'center-right' as const,
    rotation: 7,
    parallaxSpeed: 0.45,
  },
  {
    id: 'floating-5',
    videoUrl: 'https://videos.pexels.com/video-files/3000691/3000691-sd_640_360_24fps.mp4',
    thumbnail: 'https://images.pexels.com/photos/2929019/pexels-photo-2929019.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Future Forward',
    position: 'bottom-left' as const,
    rotation: -6,
    parallaxSpeed: 0.5,
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      <section id="hero" className="relative">
        <FloatingVideos section="hero" videoItems={floatingVideoData.slice(0, 2)} />
        <Hero />
      </section>
      <section id="videos">
        <VideoShowcase />
      </section>
      <section id="services" className="relative">
        <FloatingVideos section="services" videoItems={floatingVideoData.slice(2, 4)} />
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </PageTransition>
  );
}
