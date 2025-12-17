import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <BackgroundOverlay />
      <AnimatedBackground />
      <div className="min-h-screen bg-transparent relative z-20">
        <Navigation />
        <ScrollProgress />
        <BackToTop />
        <SectionIndicators />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
