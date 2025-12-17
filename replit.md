# Luminex Studios - Video Production Portfolio

## Overview
A modern video production and AI automation portfolio website migrated from Bolt.new to Replit. Features a sleek dark theme with glassmorphic UI elements and interactive 3D backgrounds.

## Recent Changes (December 2025)
- **Work That Speaks Volumes Section**: New ambient showcase with 5 scattered auto-playing videos, no interaction
- **Our Work Portfolio Section**: Interactive portfolio grid with category filters, project cards with video previews, modal lightbox with full project details (challenge, solution, results stats), prev/next navigation, and ESC key support
- **Page Structure Updated**: Hero -> WorkShowcase -> Services -> OurWorkPortfolio -> Process -> Testimonials -> Contact
- **Hero Section Redesign**: Completely redesigned hero section with Spline 3D animation background
- **Navigation Redesign**: Compact centered glassmorphic pill navigation without branding
- **New Copy**: Updated headline to "Transform Your Brand With AI & Video"
- **Functional CTAs**: All buttons are now proper Links with router navigation
- **CSS-driven hover states**: Replaced inline DOM manipulation with Tailwind CSS hover classes

## Project Architecture

### Frontend Structure
- `src/App.tsx` - Main app with React Router
- `src/pages/HomePage.tsx` - Home page composing sections
- `src/components/` - Reusable UI components
  - `Navigation.tsx` - Glassmorphic pill navigation
  - `Hero.tsx` - Hero section with Spline background
  - `SplineViewer.tsx` - Lazy-loaded Spline 3D viewer

### Styling
- Tailwind CSS for utility classes
- Custom CSS variables in `src/index.css`
- Custom fonts: Montreal (headings) and Inter (body)
- Color palette: Royal Blue (#0D21A1), Soft White (#F7F8FC), Dark BG (#0B0D12)

### Key Design Decisions
- Z-index layering: Spline at z-1, overlay at z-2, hero content at z-50, navigation at z-50+
- Spline animation loaded via lazy Suspense for better performance
- Mobile-responsive navigation with hamburger menu

## Development
- Run with: `npm run dev`
- Frontend served on port 5000
- Uses Vite for development server

## Notes
- WebGL errors in screenshot tools are expected (no GPU in headless browsers)
- Spline viewer requires WebGL and renders correctly in real browsers
