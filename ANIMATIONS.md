# Luminex Social - Premium Animations & Interactions

## Overview
This document describes the advanced animations and premium interactions implemented in the Luminex Social website. All animations maintain the brand identity with the color scheme (#0B0D12, #0D21A1, #F7F8FC, #8C8F94) and typography (Coolvetica, Neue Montreal, Inter).

## Key Features Implemented

### 1. **Sticky Navigation Bar**
- **Desktop Navigation**: 
  - Glassmorphic header with backdrop blur
  - Luminex Social logo on left
  - Nav links with smooth underline hover effect
  - Active section highlighting in Royal Blue (#0D21A1)
  - "Get Started" CTA button on right
  - Hides on scroll down, shows on scroll up
  - Adds subtle shadow when scrolled

- **Mobile Menu** (< 768px):
  - Hamburger icon that animates to X when open
  - Full-screen overlay with dark background (#0B0D12)
  - Menu items fade in with stagger effect (80ms delays)
  - Large text using Coolvetica font
  - Social media links at bottom
  - Smooth open/close animations

**File**: `src/components/Navigation.tsx`

### 2. **Page Load Animations**
- **Fade In from Dark**: Main content fades in with 1s ease-out timing on page load
- **Text Reveal**: Headlines split into words that appear one by one with 0.1s stagger
- **Staggered Element Reveals**: Services, Portfolio, Process, and other sections fade in with progressive delays

**CSS Animations** in `src/index.css`:
- `pageLoad`: 1s fade-in transition
- `textReveal`: Word-by-word reveal with 3D rotation
- `fadeIn`, `fadeInUp`, `fadeInDown`: Directional fade animations

### 3. **Parallax Scrolling**
- Hero section background elements move at different speeds
- Two gradient orbs parallax at different rates (0.5x and 0.3x scroll speed)
- Creates depth perception as user scrolls

**File**: `src/components/Hero.tsx`

### 4. **Magnetic Cursor Effect for CTA Buttons**
- Buttons subtly follow cursor when approaching
- Cursor distance calculated within 100-120px radius
- Smooth easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Enhanced scale effect on hover

**Implementation**: 
- `handleMouseMove()` function in button components
- Translates button position based on cursor proximity
- Scales to 1.05-1.08 on hover

### 5. **Floating Animation for Service Cards**
- Continuous up/down motion with `float` keyframe
- 3-second cycle with ease-in-out timing
- Staggered delays: 0s, 0.5s, 1s for each card
- Subtle 10px vertical movement

**CSS**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### 6. **Text Reveal Animations**
- Main headlines split into words
- Each word appears with 0.1s stagger
- 3D rotation effect: `rotateX(-90deg)` to `rotateX(0)`
- 0.6s duration with ease-out timing

**File**: `src/components/Hero.tsx`

### 7. **Smooth Scroll to Sections**
- Clicking nav links smoothly scrolls to sections
- HTML `scroll-behavior: smooth` enabled
- Section IDs properly mapped: hero, services, stats, portfolio, process, testimonials, contact

**Navigation Logic**:
- Detects active section as user scrolls
- Updates nav highlight dynamically
- Handles smooth scroll via `element.scrollIntoView({ behavior: 'smooth' })`

### 8. **Progress Bar at Top**
- Shows scroll position with Royal Blue color (#0D21A1)
- 4px height with glowing shadow effect
- Fixed at top, z-index: 9999
- Scales horizontally based on scroll progress

**CSS Class**: `.scroll-progress`

### 9. **Hover Tilt Effect for Portfolio Items (3D Card Tilt)**
- 3D perspective transform on mouse move
- Calculates rotation based on cursor position
- Dynamic shadow that increases on tilt
- `rotateX` and `rotateY` up to ±8.33 degrees
- Scale increases to 1.03x on hover

**Implementation**:
```tsx
const rotateX = (y - centerY) / 12;
const rotateY = (centerX - x) / 12;
card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale3d(1.03, 1.03, 1.03)`;
```

### 10. **Ripple Effect on Button Clicks**
- Circular ripple emanates from click point
- 0.6s duration expanding from center
- Uses `::after` pseudo-element
- Applied via `.ripple` class

**CSS**:
```css
.ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(247, 248, 252, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::after {
  width: 300px;
  height: 300px;
}
```

### 11. **Stats Counter Animation**
- Counts animate when scrolling into view
- 2-second duration with 60 steps
- Uses custom hook `useInView` to detect visibility
- Animates from 0 to final number smoothly

**File**: `src/components/Stats.tsx`

### 12. **Scroll Reveal Animations**
- Components fade in as they scroll into view
- Custom hook: `useScrollReveal` with IntersectionObserver
- 0.6s duration with ease-out timing
- Staggered delays for child elements

**Hook**: `src/hooks/useScrollReveal.ts`
```tsx
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  // Uses IntersectionObserver to trigger animations
}
```

## Animation Utilities

All animations are defined in `src/index.css` under `@layer utilities`:

### Fade Animations
- `.animate-fade-in`: Fade in with 20px upward movement
- `.fade-in-up`: Fade in moving up
- `.fade-in-down`: Fade in moving down
- `.blur-in`: Blur transition into view

### Scale Animations
- `.scale-fade-in`: Scales from 0.9 to 1 while fading
- `.bounce-in`: Bouncy scale animation
- `.rotate-fade-in`: Rotates -10deg while fading in

### Directional Animations
- `.slide-right`: Slides in from left
- `.slide-left`: Slides in from right

### Special Effects
- `.float-up`: Continuous floating motion
- `.pulse-enhanced`: Enhanced pulse with scale variation
- `.glow-effect`: Glowing box-shadow animation
- `.shimmer`: Shimmer/loading effect
- `.wiggle`: Subtle wiggle animation

### Delay Utilities
- `.delay-100` through `.delay-500`: Animation delays in 100ms increments

## Performance Optimizations

1. **GPU Acceleration**: Transform-based animations use GPU
2. **Will-change Property**: Applied to frequently animated elements
3. **Passive Scroll Listeners**: Used in scroll event handlers
4. **Staggered Animations**: Prevents simultaneous renders
5. **Intersection Observer**: Efficient visibility detection

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch optimizations

## Customization

### Change Animation Duration
Modify timing values in `src/index.css` keyframes:
```css
@keyframes fadeIn {
  animation: fadeIn 0.8s ease-out forwards;  /* Change 0.8s to desired duration */
}
```

### Adjust Parallax Speed
Modify scroll multipliers in `src/components/Hero.tsx`:
```tsx
transform: `translateY(${scrollY * 0.5}px)`  // 0.5 = 50% of scroll speed
```

### Change Magnetic Button Radius
Update `maxDistance` in component functions:
```tsx
const maxDistance = 100;  // Change to 50-150 for different effect range
```

### Update Color Scheme
All Royal Blue references use `#0D21A1`:
```jsx
className="text-royal-blue"  // Updates all blue elements
```

## Files Modified

- `src/App.tsx` - Added Navigation component and section IDs
- `src/index.css` - Added 30+ animation utilities
- `src/components/Navigation.tsx` - NEW: Sticky nav with mobile menu
- `src/components/Hero.tsx` - Enhanced with parallax and text reveal
- `src/components/Services.tsx` - Added scroll reveal animations
- `src/components/Portfolio.tsx` - Enhanced 3D tilt with better animations
- `src/components/Process.tsx` - Added scroll reveal with stagger
- `src/components/Testimonials.tsx` - Added scroll reveal and carousel animations
- `src/components/CTA.tsx` - Enhanced with magnetic button and scroll reveal
- `src/hooks/useScrollReveal.ts` - NEW: Custom scroll reveal hook

## Testing

The project builds successfully with `npm run build` and runs with `npm run dev`.

All animations are tested and work smoothly across:
- Desktop browsers
- Mobile devices
- Touch interactions
- Scroll performance

---

**Last Updated**: December 2025
**Brand**: Luminex Social
**Color Scheme**: #0B0D12, #0D21A1, #F7F8FC, #8C8F94
