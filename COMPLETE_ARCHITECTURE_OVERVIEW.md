# Complete Architecture Overview - All 4 Phases

## Component Hierarchy

```
App.tsx (Root)
├── AnimatedBackground.tsx (Particle system - Phase 1)
├── BackgroundOverlay.tsx (Gradient + orbs - Phase 1)
├── Three3DBackground.tsx (3D parallax - Phase 1)
├── ScrollProgress.tsx (Progress bar - Phase 2)
├── Navigation.tsx (Premium navbar - Phase 3)
│   ├── Mobile menu overlay
│   ├── Logo component
│   ├── Nav links
│   └── CTA button
│
└── Pages
    └── HomePage.tsx
        ├── Hero section (Phase 1)
        │   └── FloatingVideos (Phase 4) ← 2 videos top corners
        │       ├── FloatingVideoCard (Video 1)
        │       └── FloatingVideoCard (Video 2)
        │
        ├── VideoShowcase section (Existing)
        │
        ├── Services section (Phase 1)
        │   └── FloatingVideos (Phase 4) ← 2 videos side centers
        │       ├── FloatingVideoCard (Video 3)
        │       └── FloatingVideoCard (Video 4)
        │
        ├── About section (Phase 1)
        ├── Stats section (Phase 1-2)
        ├── Portfolio section (Phase 1-2)
        ├── Process section (Phase 1-2)
        ├── Testimonials section (Phase 1-2)
        ├── CTA section (Phase 1-2)
        ├── Blog section (Phase 1)
        ├── FAQ section (Phase 1)
        ├── Contact section (Phase 1-2)
        └── Footer (Phase 1)

VideoModal.tsx (Shared component - opened by FloatingVideoCard)
```

## CSS Architecture

```
index.css
├── Base Layer (@tailwind base)
│   ├── Font faces (Coolvetica, Neue Montreal)
│   ├── HTML scroll-behavior: smooth
│   ├── Body styling
│   └── Page load animation
│
├── Components Layer (@tailwind components)
│   └── Custom component classes
│
├── Utilities Layer (@tailwind utilities)
│   ├── Phase 1: Glasmorphic styling utilities
│   │   ├── Glass containers (blur, rgba)
│   │   └── Glow effects
│   │
│   ├── Phase 2: Scroll Animations
│   │   ├── Fade In animations (80+ variants)
│   │   ├── Float animations
│   │   ├── Card Enter (1-12 stagger)
│   │   ├── Text animations
│   │   ├── Parallax effects
│   │   ├── Counter animations
│   │   └── Scroll Progress
│   │
│   ├── Phase 3: Navigation Animations
│   │   ├── slideInUp (@keyframes)
│   │   ├── spin-slow (@keyframes)
│   │   └── nav-pulse animation
│   │
│   └── Phase 4: Floating Video Animations
│       ├── floatRotate (@keyframes)
│       ├── videoPulse (@keyframes)
│       └── videoFadeIn (@keyframes)
│
└── Media Queries
    ├── Hover effects (desktop only)
    ├── Responsive typography
    ├── Mobile layout adjustments
    └── Prefers-reduced-motion respects
```

## Data Flow Architecture

```
HomePage.tsx (Data Definition)
    ↓
floatingVideoData array
├── Video 1 (top-left, Hero)
├── Video 2 (top-right, Hero)
├── Video 3 (center-left, Services)
├── Video 4 (center-right, Services)
└── Video 5 (bottom-left, Expandable)
    ↓
FloatingVideos.tsx (Container)
    ├── Receives videoItems array
    ├── Manages modal state
    ├── Tracks visibility
    └── Distributes to cards
        ↓
    FloatingVideoCard.tsx (Individual Cards)
        ├── Receives props (id, videoUrl, position, etc.)
        ├── Local state (isHovered, isPlaying)
        ├── Parallax tracking (scroll listener)
        ├── Video playback control
        ├── Hover interactions
        ├── Click to open modal
        └── Returns rendered card
            ↓
        VideoModal.tsx (on click)
            └── Full-screen video viewer
```

## Animation Timeline

```
User Action → Browser Event → Animation Trigger

Page Load (0-1s)
├── Page fade in animation
├── Nav fade in
├── Background elements initialize
└── Scroll listeners attach

User Scrolls
├── Scroll event triggered
├── Parallax position updated (continuous)
│   ├── FloatingVideoCard parallax (0.3-0.7x)
│   ├── Three3D background parallax
│   └── Text parallax effects
├── Intersection Observer checks visibility
└── Animations trigger when elements visible
    ├── Section Enter animations (0.8s)
    ├── Card Enter stagger (0.1s delays, 0.6s total)
    ├── Text reveal animations
    └── Counter animations

User Hovers Video Card
├── isHovered state: true
├── Video playback pauses
├── Card scales 110% (0.3s cubic-bezier)
├── Glow intensifies (shadow doubled)
├── Title overlay fades in
└── Play icon appears

User Clicks Video Card
├── onClick handler fires
├── Modal state sets to video
├── VideoModal renders
├── Focus traps in modal
└── Esc key closes modal

User Scrolls Past Section
├── Video parallax continues updating
├── Visibility state maintained
└── Animations continue on scroll
```

## Layer Stacking (Z-Index Structure)

```
100+   ← Video Modal (popup overlay)
       
99     ← Navigation (sticky/fixed)
       
50-70  ← Floating Videos (scattered)
       
40     ← Scroll Progress bar
       
30     ← Content sections
       
20-25  ← Background overlays
       ├── Gradient orb containers
       ├── Three3D canvas background
       └── Particle system
       
10     ← Animated background
       
1      ← Base page background
```

## Performance Flow

```
Component Render
    ↓
├─→ FloatingVideoCard renders
│   ├── useRef for DOM access (video, container)
│   ├── useState for local state (isHovered, isPlaying)
│   ├── useEffect for scroll listener (passive)
│   │   └── Calculates: scrollY * parallaxSpeed
│   │   └── Updates: transform translateY()
│   └── Returns JSX with CSS classes + inline styles
│       ├── Glassmorphic styling (CSS)
│       ├── Parallax transform (inline)
│       ├── Rotation transform (inline)
│       └── Glow shadow (inline dynamic)
│
└─→ Browser GPU Processing
    ├── transform: translate3d() → GPU accelerated
    ├── backdrop-filter: blur() → GPU accelerated
    ├── box-shadow (glow) → GPU rasterized
    └── Result: 60fps smooth animation
```

## State Management

```
HomePage.tsx
├── floatingVideoData (const array)
└── Passes to FloatingVideos as prop

FloatingVideos.tsx
├── selectedVideo (state: null or video object)
│   └── Triggers VideoModal
├── visibleVideos (state: object tracking visibility)
│   └── Fade-in animation state per video
└── Distributes props to each FloatingVideoCard

FloatingVideoCard.tsx
├── isHovered (state: boolean)
│   ├── Triggers video pause
│   ├── Scales card up
│   ├── Intensifies glow
│   └── Shows title overlay
├── isPlaying (state: boolean)
│   └── Tracks video playback
├── translateY (state: number)
│   └── Updated on scroll via useEffect
└── videoRef (useRef)
    └── Direct DOM access to video element

VideoModal.tsx
├── onClose callback (triggers selectedVideo = null)
├── Keyboard event handlers (Esc to close)
└── Focus trap for accessibility
```

## Responsive Design Strategy

```
Mobile (< 768px)
├── Floating videos: HIDDEN (hidden class)
├── Navigation: Full-screen menu (active)
├── Content: Single column
├── No parallax overhead
└── Fast load time priority

Tablet (768px - 1023px)
├── Floating videos: HIDDEN (still)
├── Navigation: Compressed (future enhancement)
├── Content: Multi-column
└── Can add 2-3 smaller floating videos

Desktop (1024px+)
├── Floating videos: VISIBLE (md:block)
├── Navigation: Full floating navbar
├── Content: Multi-column optimized
├── Full parallax effects active
└── All animations enabled
```

## Browser API Usage

```
DOM APIs
├── DOM Refs (useRef)
│   ├── Video element control
│   └── Container positioning
├── Document Events
│   ├── 'scroll' (passive listener)
│   └── Keyboard events in modal
└── IntersectionObserver (Phase 2)
    └── Viewport visibility detection

Web APIs
├── requestAnimationFrame (implicit via transforms)
├── CSS Animations (GPU accelerated)
├── Backdrop Filter (GPU rendered)
├── Media Query (responsive behavior)
└── Prefers Reduced Motion (accessibility)

React APIs
├── Hooks
│   ├── useState (local state)
│   ├── useRef (DOM access)
│   ├── useEffect (side effects)
│   └── useCallback (event handlers)
├── Component structure (functional)
├── Props drilling (parent to child)
└── Event handlers (onClick, onMouseEnter)
```

## Color System Integration

```
Royal Blue: #0D21A1
├── Used in: Navigation, buttons, glows, accents
├── Floating Videos
│   ├── Glow effects (0.3-0.6 opacity)
│   ├── Hover intensification
│   └── Border hints
└── Matches entire design system

Soft White: #F7F8FC
├── Used in: Text, borders, highlights
├── Floating Videos
│   ├── Border outlines (0.15 opacity)
│   ├── Title text overlay
│   └── Accessibility contrast
└── Consistent across UI

Primary Dark: #0B0D12
├── Used in: Main background, overlays
├── Floating Videos
│   ├── Card background (dim)
│   ├── Title gradient overlay
│   └── Modal backdrop
└── Foundation layer

Deep Purple: #8C8F94
├── Used in: Secondary text, accents
└── Reserved for future use
```

## File Organization

```
src/
├── components/
│   ├── FloatingVideoCard.tsx ✨ Phase 4
│   ├── FloatingVideos.tsx ✨ Phase 4
│   ├── VideoCard.tsx (existing)
│   ├── VideoModal.tsx (existing)
│   ├── Hero.tsx (Phase 1-2)
│   ├── Services.tsx (Phase 1-2)
│   ├── Navigation.tsx (Phase 3)
│   ├── ScrollProgress.tsx (Phase 2)
│   ├── AnimatedBackground.tsx (Phase 1)
│   ├── BackgroundOverlay.tsx (Phase 1)
│   ├── Three3DBackground.tsx (Phase 1)
│   └── ... (other sections)
├── pages/
│   └── HomePage.tsx (integration point)
├── hooks/
│   ├── useScrollAnimations.ts
│   ├── useScrollProgress.ts
│   ├── useThrottledScroll.ts
│   └── useInView.ts
├── data/
│   └── videoData.ts
├── App.tsx (root + background setup)
├── main.tsx (entry point)
├── index.css (all animations + styles)
└── vite-env.d.ts

Build Output:
dist/
├── index.html
├── assets/
│   ├── index-[hash].css (55 kB)
│   ├── index-[hash].js (827 kB)
│   └── SplineViewer-[hash].js
└── [Other assets]
```

## Build Process

```
npm run dev
├── Vite dev server starts (300ms ready)
├── Hot Module Replacement (HMR) active
├── No TypeScript compilation (esbuild)
└── Browser opens automatically

npm run build
├── Vite optimized build
├── TypeScript compilation (tsc)
├── CSS minification + purging
├── JavaScript minification
├── Asset optimization
├── Sourcemaps generated
└── Output to dist/ folder
    ├── 1519 modules transformed
    ├── 55 kB CSS (9.10 kB gzipped)
    ├── 827 kB JS (218 kB gzipped)
    └── Build time: 8-15 seconds

npm run preview
├── Serve production build locally
└── Verify optimization works
```

## Integration Points Summary

### Phase 1 → Phase 2
- Glasmorphic styling foundation
- Grid layouts prepared
- Spacing standardized
- → Enables scroll animations

### Phase 2 → Phase 3
- Animation timing established
- Scroll tracking mechanism
- GPU optimization proven
- → Enables navigation animations

### Phase 3 → Phase 4
- Z-index hierarchy established
- Mobile responsive pattern
- Animation system mature
- → Enables floating videos

### Phase 4 Integration
- Uses Phase 1 glasmorphic styling ✓
- Leverages Phase 2 parallax system ✓
- Respects Phase 3 mobile patterns ✓
- Adds decorative depth layer ✓

## Complete Feature Matrix

| Feature | Phase 1 | Phase 2 | Phase 3 | Phase 4 |
|---------|---------|---------|---------|---------|
| Glasmorphic Design | ✅ | — | — | ✅ |
| Background Animations | ✅ | — | — | — |
| Scroll Animations | — | ✅ | — | ✅ |
| Parallax Effects | — | ✅ | — | ✅ |
| Navigation Menu | — | — | ✅ | — |
| Scroll Tracking | — | ✅ | — | ✅ |
| Floating Elements | — | — | — | ✅ |
| Video Playback | — | — | — | ✅ |
| Modal Overlays | — | — | — | ✅ |
| Accessibility | — | — | ✅ | ✅ |
| Mobile Responsive | ✅ | ✅ | ✅ | ✅ |
| GPU Acceleration | ✅ | ✅ | ✅ | ✅ |

---

**Architecture Version: 4.0 - All Phases Complete**

This document represents the complete technical architecture after all 4 implementation phases. The system is fully integrated and production-ready.
