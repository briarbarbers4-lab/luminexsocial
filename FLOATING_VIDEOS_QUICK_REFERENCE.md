# Quick Reference: Floating Video Elements

## Quick Start - Adding Floating Videos

### 1. Define Video Data
```typescript
const floatingVideoData = [
  {
    id: 'video-1',
    videoUrl: 'https://videos.pexels.com/...',
    thumbnail: 'https://images.pexels.com/...',
    title: 'Project Name',
    position: 'top-left',
    rotation: -8,
    parallaxSpeed: 0.3,
  },
];
```

### 2. Add to Section
```tsx
<section id="section-name" className="relative">
  <FloatingVideos section="section-name" videoItems={floatingVideoData} />
  <YourContent />
</section>
```

### 3. That's It!
Videos render with auto-play, parallax, hover effects, and click modal.

---

## Component Props Reference

### FloatingVideoCard
```typescript
interface FloatingVideoCardProps {
  id: string;                                    // Unique identifier
  videoUrl: string;                              // Video source URL
  thumbnail: string;                             // Poster image
  title: string;                                 // Video title
  position: 'top-left' | 'top-right' | ...;    // Position enum
  rotation: number;                              // -10 to +10 degrees
  parallaxSpeed: number;                         // 0.3 to 0.7
  isVisible?: boolean;                           // Auto-managed
  onClick?: () => void;                          // Modal trigger (auto)
}
```

### FloatingVideos
```typescript
interface FloatingVideosProps {
  section?: string;                              // Metadata (optional)
  videoItems: FloatingVideoItem[];               // Video array
}
```

---

## Position Guide

| Position | Location | Use Case |
|----------|----------|----------|
| `top-left` | Upper left | Top section, smaller screen |
| `top-right` | Upper right | Top section, larger screen |
| `center-left` | Middle left | Vertical center alignment |
| `center-right` | Middle right | Vertical center alignment |
| `bottom-left` | Lower left | Large sections |
| `bottom-right` | Lower right | Large sections |

---

## Parallax Speed Guide

| Speed | Effect | Use |
|-------|--------|-----|
| 0.3 | Slow (deep) | Background layer |
| 0.35 | Medium-slow | Background-mid |
| 0.4 | Medium | Mid-ground |
| 0.45 | Medium-fast | Foreground-mid |
| 0.5 | Fast (close) | Foreground layer |

---

## Rotation Guide

```
-10° to -8°:  Tilted left (more extreme)
-7° to -5°:   Tilted left (moderate)
-4° to -1°:   Slight left tilt
0°:           No tilt (neutral)
1° to 4°:     Slight right tilt
5° to 7°:     Tilted right (moderate)
8° to 10°:    Tilted right (more extreme)
```

**Tip:** Mix positive and negative rotations for visual balance.

---

## Styling Customization

### Change Glow Color
In `FloatingVideoCard.tsx`:
```tsx
boxShadow: isHovered
  ? '0 0 40px rgba(YOUR_COLOR, 0.6)'
  : '0 0 20px rgba(YOUR_COLOR, 0.3)',
```

### Adjust Card Size
```typescript
width: 240px,  // Change this
aspectRatio: '9/16',  // Or this
```

### Modify Animation Speed
In `index.css`:
```css
@keyframes floatRotate {
  animation-duration: 4s;  /* Change here */
}

@keyframes videoPulse {
  animation-duration: 3s;  /* Change here */
}
```

---

## Common Use Cases

### Hero Section - Showcase Featured Work
```typescript
const heroVideos = [
  {
    id: 'hero-1',
    videoUrl: 'featured-project-1.mp4',
    thumbnail: 'thumb-1.jpg',
    title: 'Featured Project',
    position: 'top-left',
    rotation: -8,
    parallaxSpeed: 0.3,
  },
  // Add more...
];
```

### Services Section - Show Service Examples
```typescript
const serviceVideos = [
  { title: 'Web Design', position: 'center-left', ... },
  { title: 'Mobile App', position: 'center-right', ... },
];
```

### Portfolio Section - Highlight Projects
```typescript
const portfolioVideos = [
  // Multiple projects at different positions
];
```

---

## Troubleshooting

### Videos Not Appearing?
- Check `hidden md:block` in CSS (hidden on mobile)
- Verify video URL is accessible
- Check browser console for CORS errors
- Ensure parent section has `className="relative"`

### Parallax Not Working?
- Check `parallaxSpeed` value (should be 0.3-0.7)
- Verify scroll event listener is active
- Check browser DevTools animation performance

### Videos Not Playing?
- Must be muted (autoplay requirement)
- Check video URL format (MP4 recommended)
- Verify poster/thumbnail URL

### Styling Looks Wrong?
- Check Tailwind color definitions
- Verify `md:` breakpoint classes
- Check z-index stacking context

### Performance Issues?
- Reduce number of floating videos
- Use smaller video file sizes
- Check video CDN performance
- Profile with DevTools Performance tab

---

## Video Format Recommendations

### Ideal Specifications
- **Format:** MP4 (H.264 codec)
- **Dimensions:** 720×1280 or 1080×1920 (9:16 portrait)
- **Duration:** 3-6 seconds
- **File Size:** <5MB each
- **Audio:** Muted (required for autoplay)
- **Frame Rate:** 30fps or 60fps
- **Quality:** 1080p recommended

### Encoding Command (FFmpeg)
```bash
ffmpeg -i input.mp4 \
  -vf scale=1080:1920 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -an \
  output.mp4
```

---

## CSS Classes Available

```css
.animate-float          /* Vertical floating motion */
.animate-float-rotate   /* Rotation + float combo */
.animate-video-pulse    /* Glow pulse effect */
.animate-video-fade-in  /* Entrance animation */
```

---

## Performance Tips

1. **Keep videos short** (3-6 seconds max)
2. **Optimize file size** (target <5MB each)
3. **Use CDN** (Pexels, Cloudinary, etc.)
4. **Limit count** (4-6 per section max)
5. **Mobile hidden** (reduces mobile payload)
6. **Lazy load thumbnails** (poster attribute helps)

---

## Accessibility Checklist

- [x] Videos have descriptive `title` attributes
- [x] Poster/thumbnail images have alt text
- [x] Respects `prefers-reduced-motion` setting
- [x] Hover states provide visual feedback
- [x] Modal is keyboard accessible
- [x] Click areas are 44×44px minimum
- [x] Color contrast is sufficient (Royal Blue on white)

---

## Integration Patterns

### Pattern 1: Simple Hero Addition
```tsx
const heroVideos = [{ /* one video */ }];
<section id="hero" className="relative">
  <FloatingVideos section="hero" videoItems={heroVideos} />
  <Hero />
</section>
```

### Pattern 2: Multi-Section Rollout
```tsx
const allFloatingVideos = { /* grouped by section */ };
<section id="services" className="relative">
  <FloatingVideos section="services" videoItems={allFloatingVideos.services} />
  <Services />
</section>
```

### Pattern 3: Dynamic Data Loading
```tsx
const [videos, setVideos] = useState([]);
useEffect(() => {
  fetchFloatingVideos().then(setVideos);
}, []);
<FloatingVideos section="hero" videoItems={videos} />
```

---

## Browser Devtools Debugging

### Check Animation Performance
```
DevTools → Performance → Record
- Look for 60fps baseline
- Check GPU acceleration (should be < 2ms per frame)
- No long tasks should block scrolling
```

### Inspect Parallax Values
```
DevTools → Elements
- Select floating video element
- Watch `transform: translateY()` change on scroll
- Verify calculation: scrollY * parallaxSpeed
```

### Verify Video Playback
```
DevTools → Console → Application
- Check Network tab for video loading
- Verify muted attribute is present
- Check autoplay attribute
```

---

## Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder Pexels videos with real content
- [ ] Verify video URLs are CORS-enabled
- [ ] Test video loading speed on target CDN
- [ ] Verify mobile layout (videos hidden)
- [ ] Test hover/click interactions
- [ ] Check parallax smoothness on target devices
- [ ] Verify glow effects render correctly
- [ ] Test accessibility (keyboard, motion preferences)
- [ ] Run Lighthouse audit
- [ ] Test cross-browser (Chrome, Firefox, Safari)

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Component Files | 2 (FloatingVideoCard, FloatingVideos) |
| CSS Animations Added | 3 new keyframes |
| Default Floating Videos | 5 (Hero + Services) |
| Card Width | 240px |
| Card Aspect Ratio | 9:16 (vertical) |
| Parallax Speed Range | 0.3x to 0.7x |
| Rotation Range | -10° to +10° |
| Visibility | Desktop only (md+) |
| Browser Support | Chrome 90+, Firefox 89+, Safari 15+ |

---

## Support & Resources

### File Locations
```
Components:
  src/components/FloatingVideoCard.tsx
  src/components/FloatingVideos.tsx

Styles:
  src/index.css (floating animations)

Usage:
  src/pages/HomePage.tsx (example)

Docs:
  FLOATING_VIDEOS_IMPLEMENTATION.md (full docs)
  FLOATING_VIDEOS_VISUAL_GUIDE.md (visual reference)
```

### Related Components
- `VideoCard.tsx` - Full-size video cards
- `VideoModal.tsx` - Click expansion modal
- `VideoShowcase.tsx` - Video gallery section

### Animation System
- See `index.css` for all animation definitions
- Tailwind animations in `tailwind.config.js`
- Custom animations use `@keyframes` syntax

---

**Quick Reference Version: 1.0**
Generated with Phase 4 Implementation
Last Updated: Current Session
