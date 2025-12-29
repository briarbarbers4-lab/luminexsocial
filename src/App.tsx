import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import BackgroundOverlay from './components/BackgroundOverlay';
import AnimatedBackground from './components/AnimatedBackground';
import BackToTop from './components/BackToTop';
import SectionIndicators from './components/SectionIndicators';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <BackgroundOverlay />
      <AnimatedBackground />
      <div className="min-h-screen bg-transparent relative z-20">
        {/* Sticky Logo */}
        <div className="fixed top-6 left-6 z-[1100] pointer-events-auto">
          <Link to="/" className="block hover:scale-105 transition-transform duration-300">
            <img 
              src="https://ik.imagekit.io/imkyby1j5/Logo_V1.png" 
              alt="Luminex Social" 
              className="h-10 md:h-12 w-auto filter drop-shadow-[0_0_15px_rgba(13,33,161,0.5)]"
            />
          </Link>
        </div>
        
        <Navigation />
        <ScrollProgress />
        <BackToTop />
        <SectionIndicators />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
