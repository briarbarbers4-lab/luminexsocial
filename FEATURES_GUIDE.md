# 🌟 Luminex Social - Premium Animations Feature Guide

## Quick Start

```bash
# Development
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview
```

Server runs on: **http://localhost:5174**

---

## 🎬 Feature Walkthrough

### 1️⃣ **Page Load Animation - Smooth Fade In from Dark**

When you first load the page, the content fades in smoothly from a dark overlay.

**Experience**: 
- Dark overlay gradually becomes transparent
- Content fades in over 1 second
- Creates an elegant entrance

**Code**: `src/index.css` - `.pageLoad` keyframe

```css
@keyframes pageLoad {
  from {
    opacity: 0;
    background: #0B0D12;
  }
  to {
    opacity: 1;
    background: transparent;
  }
}
```

---

### 2️⃣ **Parallax Scrolling for Hero Background**

The hero section has animated background orbs that move at different speeds as you scroll.

**Experience**:
- Two glowing orbs move at different scroll speeds
- Top-left orb moves at 50% of scroll speed
- Bottom-right orb moves at 30% of scroll speed
- Creates a sense of depth and motion

**File**: `src/components/Hero.tsx`

```tsx
<div 
  className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-blue/30 rounded-full blur-3xl"
  style={{ transform: `translateY(${scrollY * 0.5}px)` }}
/>
```

---

### 3️⃣ **Magnetic Cursor Effect for CTA Buttons**

Buttons subtly follow your cursor when you move it near them.

**Experience**:
- As you move cursor toward a button, it slightly moves toward your cursor
- When cursor is within ~100px of button, the effect activates
- Creates an interactive, premium feel
- Scale increases slightly for emphasis

**Implementation**:
- Detects cursor distance to button
- Calculates magnetic pull strength
- Smoothly animates button position

**How to Trigger**: Move your cursor near any CTA button

---

### 4️⃣ **Floating Animation for Service Cards**

The three service cards continuously float up and down with a subtle bob motion.

**Experience**:
- Each card floats independently
- Floating cycle: 3 seconds
- Cards have staggered timing (0s, 0.5s, 1s delay)
- Creates organic, living feel

**CSS**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

**Classes**: `.animate-float`, `.animate-float-delay-1`, `.animate-float-delay-2`

---

### 5️⃣ **Text Reveal Animations - Words Appear One by One**

The main headline "Amplify Your Digital Presence" has each word appear individually.

**Experience**:
- Words don't all appear at once
- Each word sequentially fades and rotates in
- 0.1s spacing between words
- 3D rotation effect (rotateX -90° to 0°)
- Creates dramatic, engaging headline

**File**: `src/components/Hero.tsx`

```tsx
const splitText = (text: string) => {
  return text.split(' ').map((word, i) => (
    <span
      className="text-reveal inline-block"
      style={{ animationDelay: `${i * 0.1}s` }}
    >
      {word}&nbsp;
    </span>
  ));
};
```

---

### 6️⃣ **Smooth Scroll to Sections**

Click any navigation link to smoothly scroll to that section.

**Experience**:
- Smooth scrolling with `scroll-behavior: smooth`
- Active section is highlighted in navigation
- Navigation highlights change as you scroll
- Mobile menu closes automatically after clicking

**Features**:
- Home → scrolls to hero
- Services → scrolls to services section
- Work → scrolls to portfolio
- Process → scrolls to process section
- Testimonials → scrolls to testimonials
- Contact → scrolls to CTA section

**File**: `src/components/Navigation.tsx`

---

### 7️⃣ **Progress Bar at Top - Scroll Position Indicator**

A thin bar at the top of the page shows your scroll progress.

**Experience**:
- Royal Blue (#0D21A1) bar fills from left to right
- Located at very top of page (z-index: 9999)
- Subtle glow effect around the bar
- Provides visual feedback of page position

**Visual**:
- Height: 4px
- Color: Royal Blue with gradient
- Glow: Box shadow with blue tint
- Updates as you scroll

**File**: `src/components/ScrollProgress.tsx`

---

### 8️⃣ **Portfolio Cards with 3D Hover Tilt Effect**

Portfolio items tilt in 3D when you hover over them.

**Experience**:
- Cards respond to cursor position
- Tilts toward your cursor for interactive feel
- Smooth 3D perspective transformation
- Dynamic shadow increases with tilt angle
- Works on all portfolio items

**Math**:
- RotateX based on vertical cursor position
- RotateY based on horizontal cursor position
- Max tilt: ~±8.33 degrees
- Scale: 1.03x when tilted

**Code**: `src/components/Portfolio.tsx`

```tsx
const rotateX = (y - centerY) / 12;
const rotateY = (centerX - x) / 12;
card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale3d(1.03, 1.03, 1.03)`;
```

---

### 9️⃣ **Ripple Effect on Button Clicks**

When you click a button, a ripple effect emanates from the click point.

**Experience**:
- Circular ripple expands outward
- Semi-transparent white ripple
- 0.6 second animation
- Adds tactile feedback

**CSS**:
```css
.ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: rgba(247, 248, 252, 0.5);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::after {
  width: 300px;
  height: 300px;
}
```

**How to Trigger**: Click any button with the `.ripple` class

---

### 🔟 **Stats Counter Animation on Scroll**

The statistics section (500+, 98%, 50+, 24/7) counts up when they scroll into view.

**Experience**:
- Numbers animate from 0 to final value
- Animation starts when section becomes visible
- 2-second duration
- 60 animation frames for smooth motion
- Provides engaging visual impact

**Implementation**:
```tsx
function AnimatedCounter({ end, suffix, shouldAnimate }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) return;
    // Animate from 0 to end over 2 seconds
  }, [end, shouldAnimate]);
  
  return <span>{count}{suffix}</span>;
}
```

**Files**: 
- `src/components/Stats.tsx`
- `src/hooks/useInView.ts` - Detects visibility

---

## 🎯 Navigation Features

### Desktop Navigation
- **Location**: Top of page, sticky
- **Background**: Glassmorphic (blurred) when scrolled
- **Items**: Home, Services, Work, Process, Testimonials, Contact
- **Active Indicator**: Royal Blue underline
- **CTA Button**: "Get Started" button on right
- **Behavior**: Hides when scrolling down, shows when scrolling up

### Mobile Navigation  
- **Hamburger Icon**: Animated to X when menu opens
- **Menu Style**: Full-screen dark overlay (#0B0D12)
- **Animation**: Menu items fade in with stagger effect
- **Social Icons**: Facebook, Instagram, Twitter, LinkedIn at bottom
- **Close Behavior**: Auto-closes when link is clicked

**File**: `src/components/Navigation.tsx`

---

## 🎨 Animation CSS Classes

### Utility Classes (Apply to any element)

```html
<!-- Fade animations -->
<div class="animate-fade-in">Content fades in</div>
<div class="fade-in-up">Fades in moving up</div>
<div class="fade-in-down">Fades in moving down</div>

<!-- Scale animations -->
<div class="scale-fade-in">Scales up while fading</div>
<div class="bounce-in">Bouncy entrance</div>

<!-- Directional animations -->
<div class="slide-right">Slides in from left</div>
<div class="slide-left">Slides in from right</div>

<!-- Special effects -->
<div class="float-up">Continuous floating</div>
<div class="pulse-enhanced">Pulsing animation</div>
<div class="glow-effect">Glowing effect</div>
<div class="shimmer">Shimmer/loading effect</div>

<!-- Delays (100ms to 500ms) -->
<div class="fade-in-up delay-200">Delayed fade up</div>
```

---

## ⚙️ Customization Guide

### Change Animation Speeds

Edit `src/index.css`:

```css
/* Change this */
@keyframes fadeIn {
  /* ... */
  animation: fadeIn 0.8s ease-out forwards; /* ← change 0.8s */
}

/* Common durations */
0.3s - Fast
0.6s - Standard  
1.0s - Slow
2.0s - Very slow
```

### Adjust Parallax Speed

Edit `src/components/Hero.tsx`:

```tsx
/* Change scroll multipliers */
transform: `translateY(${scrollY * 0.5}px)` // 50% of scroll
transform: `translateY(${scrollY * 0.3}px)` // 30% of scroll

/* Higher number = faster parallax */
0.1 - Subtle
0.3 - Medium
0.5 - Noticeable
1.0 - Matches scroll speed
```

### Modify Button Magnetic Range

Edit button components:

```tsx
const maxDistance = 100; // Change range in pixels
// 50 = tight range
// 100 = normal range
// 150 = large range
```

### Change Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'primary-dark': '#0B0D12',  // Background
      'royal-blue': '#0D21A1',     // Interactive
      'soft-white': '#F7F8FC',     // Text
      'deep-purple': '#8C8F94',    // Secondary
    },
  },
},
```

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| **Mobile** (<768px) | Mobile menu visible, nav items stack, animations simplified |
| **Tablet** (768-1024px) | 2-column layouts, full animations, optimized spacing |
| **Desktop** (>1024px) | Full-width layouts, all animations enabled, max effects |

---

## 🚀 Performance Tips

1. **Enable Hardware Acceleration**: Browsers automatically use GPU for transforms
2. **Smooth Scrolling**: Use `scroll-behavior: smooth` (in HTML tag)
3. **Intersection Observer**: Automatically detects visible elements
4. **Passive Listeners**: Scroll events don't block rendering
5. **Staggered Animations**: Prevents simultaneous repaints

---

## 🔍 Browser DevTools Tips

### Inspect Animations
1. Right-click element → Inspect
2. Go to Animations tab
3. Click animation to see timeline

### Performance Profiling
1. DevTools → Performance tab
2. Record page interaction
3. Look for smooth 60fps line (not jagged)

### Disable Animations for Testing
```css
/* Add to browser console */
* { animation-duration: 0.01ms !important; }
```

---

## 📚 File Structure

```
src/
├── components/
│   ├── Navigation.tsx      ← New! Sticky nav + mobile menu
│   ├── Hero.tsx            ← Updated: parallax + text reveal
│   ├── Services.tsx        ← Updated: scroll reveal
│   ├── Portfolio.tsx       ← Updated: 3D tilt
│   ├── Process.tsx         ← Updated: scroll reveal
│   ├── Stats.tsx           ← Updated: counter animation
│   ├── Testimonials.tsx    ← Updated: enhanced carousel
│   ├── CTA.tsx             ← Updated: magnetic button
│   ├── ScrollProgress.tsx  ← Progress bar
│   └── Footer.tsx
├── hooks/
│   ├── useScrollReveal.ts  ← New! Scroll reveal hook
│   ├── useInView.ts        ← Visibility detection
│   └── useScrollProgress.ts
├── App.tsx                 ← Updated: added Navigation + IDs
├── index.css               ← Updated: 30+ animations
└── main.tsx
```

---

## ✨ Premium Features Summary

✅ Smooth page entrance  
✅ Parallax depth  
✅ Interactive magnetic buttons  
✅ Floating organic motion  
✅ Engaging text reveals  
✅ Smooth navigation scroll  
✅ Visual progress indicator  
✅ 3D interactive cards  
✅ Click feedback ripples  
✅ Counter animations  
✅ Sticky responsive nav  
✅ Mobile-optimized menu  
✅ 60fps performance  
✅ Glassmorphic effects  

---

## 🎬 Testing Checklist

- [ ] Page load animation plays smoothly
- [ ] Parallax scrolls smoothly
- [ ] Button follows cursor when you move near it  
- [ ] Service cards float continuously
- [ ] Headline words appear one by one
- [ ] Clicking nav links scrolls smoothly
- [ ] Progress bar fills as you scroll
- [ ] Portfolio cards tilt on hover
- [ ] Buttons have ripple effect when clicked
- [ ] Stats count up when scrolling to them
- [ ] Navigation sticky at top
- [ ] Mobile menu hamburger animates
- [ ] Mobile menu items stagger in
- [ ] Active nav item highlights

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animations are choppy | Check browser DevTools Performance tab, disable extensions |
| Parallax doesn't move | Check scroll event listener is active |
| Buttons aren't magnetic | Hover in smaller radius, check browser zoom |
| Mobile menu doesn't open | Check z-index isn't being overridden |
| Progress bar doesn't show | Make sure content is longer than viewport |
| Text reveal doesn't work | Verify `.text-reveal` class is applied |

---

## 📞 Support

For implementation questions, refer to:
- `ANIMATIONS.md` - Detailed technical guide
- `IMPLEMENTATION_SUMMARY.md` - Feature overview
- Component comments in source code

---

**Enjoy your premium animated website! 🎉**
