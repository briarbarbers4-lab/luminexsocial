import { ReactNode, Suspense } from 'react';
import { Allura } from 'next/font/google';
import '../index.css';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import BackgroundOverlay from '../components/BackgroundOverlay';
import AnimatedBackground from '../components/AnimatedBackground';
import BackToTop from '../components/BackToTop';
import SectionIndicators from '../components/SectionIndicators';
import Link from 'next/link';
import LoadingSpinner from '../components/LoadingSpinner';

const allura = Allura({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-allura',
    display: 'swap',
});

export const metadata = {
    title: 'Luminex Social',
    description: 'Luminex Social Platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={allura.variable}>
            <body>
                <Suspense fallback={null}>
                    <BackgroundOverlay />
                    <AnimatedBackground />
                </Suspense>
                
                <div className="min-h-screen bg-transparent relative z-20">
                    {/* Sticky Logo */}
                    <div className="fixed top-6 left-6 z-[1100] pointer-events-auto">
                        <Link href="/" className="block hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://ik.imagekit.io/imkyby1j5/Logo_V1.png"
                                alt="Luminex Social"
                                className="h-10 md:h-12 w-auto filter drop-shadow-[0_0_15px_rgba(13,33,161,0.5)]"
                                // Above the fold, so no lazy loading, but priority is good
                                fetchPriority="high"
                            />
                        </Link>
                    </div>

                    <Suspense fallback={null}>
                        <Navigation />
                        <ScrollProgress />
                        <BackToTop />
                        <SectionIndicators />
                    </Suspense>

                    <main>
                        {children}
                    </main>

                    <Suspense fallback={<div className="h-64 bg-[#0B0D12]" />}>
                        <Footer />
                    </Suspense>
                </div>
            </body>
        </html>
    );
}
