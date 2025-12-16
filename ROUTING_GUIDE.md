# 🗺️ ROUTING GUIDE - Multi-Page Website

## 📍 URL Routes

Your website now uses the following URL structure:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Main landing page |
| `/about` | About | Company information |
| `/services` | Services | Services & pricing |
| `/portfolio` | Portfolio | Project showcase |
| `/testimonials` | Testimonials | Client success stories |
| `/blog` | Blog | Articles & resources |

---

## 🔗 React Router Configuration

### App.tsx Router Setup
```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-dark">
        <Navigation />
        <ScrollProgress />
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
```

---

## 📲 Navigation Component

### Updated Navigation Links
```tsx
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
];

// Desktop Menu
<nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`font-montreal font-medium transition-all duration-300 relative group ${
        location.pathname === link.path
          ? 'text-royal-blue'
          : 'text-soft-white/80 hover:text-soft-white'
      }`}
    >
      {link.name}
    </Link>
  ))}
</nav>
```

---

## 🎯 How Navigation Works

### 1. Desktop Navigation
- Click on menu items to navigate
- Active page is highlighted in Royal Blue
- Smooth underline animation on hover

### 2. Mobile Navigation
- Click hamburger menu to open
- Menu items have animation
- Click any item to navigate and close menu

### 3. Logo Navigation
- Click Luminex logo to go home
- Works on all pages

### 4. CTA Buttons
- "Get Started" button routes to contact
- Page-specific CTAs navigate appropriately

---

## 🔍 Active Link Detection

### How It Works
```tsx
const location = useLocation();

// Check if current path matches link path
const isActive = location.pathname === link.path;

// Apply active styling
className={isActive ? 'text-royal-blue' : 'text-soft-white/80'}
```

### Visual Indicator
- Active links show in **Royal Blue** color
- Underline appears below active link
- Mobile menu shows scale-up effect

---

## 📄 Page File Locations

```
src/pages/
├── HomePage.tsx          → Route: /
├── AboutPage.tsx         → Route: /about
├── ServicesPage.tsx      → Route: /services
├── PortfolioPage.tsx     → Route: /portfolio
├── TestimonialsPage.tsx  → Route: /testimonials
└── BlogPage.tsx          → Route: /blog
```

---

## 🎨 Page Component Structure

### Standard Page Layout
Each page follows this structure:

```tsx
export default function PageName() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Content */}
      </section>

      {/* Additional Sections */}
      <section className="py-20 border-t border-soft-white/10">
        {/* Content */}
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-soft-white/10">
        {/* Call to Action */}
      </section>
    </main>
  );
}
```

---

## 🔄 Navigation Between Pages

### From Any Page
- Use header navigation menu
- Use CTA buttons that link to other pages
- Use browser back/forward buttons
- Use direct URL entry

### Example CTA Links
```tsx
<Link to="/services" className="btn">
  View Our Services
</Link>

<Link to="/portfolio" className="btn">
  See Our Work
</Link>

<Link to="/blog" className="btn">
  Read Articles
</Link>
```

---

## 📱 Mobile Menu Behavior

### Desktop (> 768px)
- Horizontal navigation visible
- Hover effects active
- "Get Started" button visible

### Mobile (< 768px)
- Hamburger menu button visible
- Click to open/close menu
- Full-screen menu overlay
- Items slide in with animation
- Click item to navigate and close

---

## 🎯 Active Page Detection

### Desktop View
- Current page link shows in Royal Blue
- Underline appears under active link
- Smooth transition on navigation

### Mobile View
- Current page shows with scale-up effect
- Text color changes to Royal Blue
- Menu closes after navigation

---

## 🔗 Adding New Pages

### Step 1: Create Page File
```tsx
// src/pages/NewPage.tsx
export default function NewPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Your content */}
    </main>
  );
}
```

### Step 2: Add Route in App.tsx
```tsx
<Routes>
  <Route path="/new" element={<NewPage />} />
</Routes>
```

### Step 3: Add Navigation Link
```tsx
const navLinks = [
  // ... existing links
  { name: 'New Page', path: '/new' },
];
```

---

## 🔗 Adding Navigation Links in Pages

### Inside Page Content
```tsx
import { Link } from 'react-router-dom';

<Link to="/services" className="btn">
  Learn More About Services
</Link>
```

### Button Links
```tsx
<button onClick={() => navigate('/portfolio')} className="btn">
  View Portfolio
</button>
```

---

## 📊 URL Structure

### Development
- Home: `http://localhost:5174/`
- About: `http://localhost:5174/about`
- Services: `http://localhost:5174/services`
- Portfolio: `http://localhost:5174/portfolio`
- Testimonials: `http://localhost:5174/testimonials`
- Blog: `http://localhost:5174/blog`

### Production (Example: yourdomain.com)
- Home: `https://yourdomain.com/`
- About: `https://yourdomain.com/about`
- Services: `https://yourdomain.com/services`
- Portfolio: `https://yourdomain.com/portfolio`
- Testimonials: `https://yourdomain.com/testimonials`
- Blog: `https://yourdomain.com/blog`

---

## 🌐 Browser Navigation

### Back/Forward Buttons
- ✅ Works as expected
- ✅ Maintains browser history
- ✅ Smooth transitions

### Bookmarking
- ✅ All URLs are bookmarkable
- ✅ Direct links work
- ✅ Shared links work

### Browser History
- ✅ Full history maintained
- ✅ Forward/back buttons work
- ✅ Can navigate to previous pages

---

## 🚀 Deployment Considerations

### Server Configuration
For proper client-side routing, configure your server:

```javascript
// Example: Express.js
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
```

### Hosting Platforms
- **Vercel**: Automatically handles SPA routing
- **Netlify**: Configure redirects in netlify.toml
- **GitHub Pages**: Use hash-based routing
- **AWS S3**: Configure CloudFront

---

## 🔒 Browser Compatibility

### Supported Browsers
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Not Supported
- ❌ Internet Explorer (no React Router support)
- ❌ Very old browser versions

---

## 🎯 SEO Friendly URLs

### Benefits
✅ Better for search engines
✅ User-friendly URLs
✅ Easier to share
✅ Better bookmarking
✅ Cleaner appearance

### Example URLs
- `/about` instead of `/#about`
- `/services` instead of `/#services`
- `/portfolio` instead of `/#portfolio`

---

## 📝 Routing Best Practices

✅ **Keep URLs simple and descriptive**
✅ **Use lowercase for routes**
✅ **Use hyphens instead of underscores**
✅ **Avoid numbers if possible**
✅ **Keep routes short and memorable**

---

## 🧪 Testing Routes

### Manual Testing
1. Click each navigation link
2. Verify correct page loads
3. Check active link highlighting
4. Test mobile menu
5. Use browser back/forward buttons
6. Test direct URL entry

### Expected Behavior
- Page changes smoothly
- No page refresh
- Active link updates
- URL changes in address bar
- History works properly

---

## 🎉 Summary

Your website now has a **professional, SEO-friendly routing system** with:

✅ 6 dedicated pages
✅ Intuitive navigation
✅ Active link highlighting
✅ Mobile-responsive menu
✅ Browser history support
✅ Bookmarkable URLs
✅ Smooth transitions
✅ Production-ready

**Ready for deployment! 🚀**

