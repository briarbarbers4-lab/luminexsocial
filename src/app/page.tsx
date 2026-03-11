import { Metadata } from 'next';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import DynamicComponents from '../components/DynamicComponents';

export const metadata: Metadata = {
  title: 'Luminex Social | Scale Your Business with AI & Premium Content',
  description: 'Unlock your business potential with professional video editing, AI automation, and strategic content creation. Save 20+ hours weekly with Luminex Social.',
  keywords: ['AI Automation', 'Video Editing', 'Content Creation', 'Digital Strategy', 'Luminex Social'],
};

export default function Page() {
  return (
    <PageTransition>
      <section id="hero" className="relative">
        <Hero />
      </section>
      <DynamicComponents />
    </PageTransition>
  );
}
