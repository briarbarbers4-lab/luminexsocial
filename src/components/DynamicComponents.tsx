"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from './LoadingSpinner';

const WorkShowcase = dynamic(() => import('./WorkShowcase'), { 
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center bg-[#0B0D12] rounded-2xl border border-white/5 animate-pulse" />
});

const Services = dynamic(() => import('./Services'), {
  loading: () => <div className="py-20 bg-[#0B0D12]" />
});

const OurWorkPortfolio = dynamic(() => import('./OurWorkPortfolio'), {
  loading: () => <div className="py-20 bg-[#0B0D12]" />
});

const Process = dynamic(() => import('./Process'), {
  loading: () => <div className="py-20 bg-[#0B0D12]" />
});

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  loading: () => <div className="py-20 bg-[#0B0D12]" />
});

const Contact = dynamic(() => import('./Contact'), { 
  ssr: false,
  loading: () => <div className="py-20 bg-[#0B0D12]" />
});

export default function DynamicComponents() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  );
}
