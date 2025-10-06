# Book Website Design Guidelines - Personal Brand

## Design Approach: Reference-Based Creative

**Primary Inspiration:** Blend of Airbnb's card aesthetics + Stripe's editorial clarity + Apple's premium typography

**Justification:** Personal brand book websites require emotional connection and visual storytelling. This experience-focused approach prioritizes visual appeal, immersive imagery, and sophisticated presentation to establish author credibility and engage readers.

**Core Principles:**
- Editorial elegance with generous whitespace
- Premium, gallery-like book presentation
- Sophisticated interactions that feel refined, not gimmicky
- Strong visual hierarchy guiding readers through the author's journey

---

## Color Palette

### Dark Mode (Primary)
- **Background:** 15 8% 12% (deep charcoal)
- **Surface:** 15 8% 18% (elevated cards)
- **Primary:** 25 90% 55% (warm amber - evokes classic bookbinding)
- **Text Primary:** 30 10% 95% (warm off-white)
- **Text Secondary:** 30 5% 70% (muted gray)

### Light Mode
- **Background:** 30 20% 97% (warm cream - book page quality)
- **Surface:** 0 0% 100% (pure white cards)
- **Primary:** 25 75% 45% (deep amber)
- **Text Primary:** 20 15% 15% (rich brown-black)
- **Text Secondary:** 20 10% 45% (warm gray)

**Accent Color:** 200 25% 40% (subtle teal for CTAs - used sparingly)

---

## Typography

**Primary Font:** 'Playfair Display' (serif) - Editorial headlines, book titles
**Secondary Font:** 'Inter' (sans-serif) - Body text, navigation, UI elements

**Scale:**
- Hero Headline: text-6xl lg:text-7xl font-bold (Playfair)
- Section Headers: text-4xl lg:text-5xl font-bold (Playfair)
- Book Titles: text-2xl font-semibold (Playfair)
- Body Text: text-base lg:text-lg (Inter)
- Navigation: text-sm font-medium uppercase tracking-wide (Inter)

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24 (p-4, h-8, mt-12, gap-16, py-24)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-8
- Book showcase: max-w-6xl for optimal card display
- About section: max-w-4xl for comfortable reading

**Section Padding:** py-16 md:py-24 lg:py-32

---

## Component Library

### Navigation
- Fixed header with backdrop-blur, subtle shadow on scroll
- Logo/author name left-aligned
- Navigation links: About, Books, Reviews, Contact (smooth scroll)
- CTA button: "Get the Book" (primary accent color)
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen) split layout
- Left: Large hero image of latest book cover or atmospheric reading scene (60% width on desktop)
- Right: Author tagline, brief description, dual CTAs ("Explore Books" + "Read Sample")
- Subtle parallax effect on scroll
- Gradient overlay on image for text readability

### Books Showcase
- 2-column grid (lg:3-column) with masonry-style staggered heights
- Each book card: Cover image, title, subtitle, genre tag, "Learn More" link
- Hover effect: Slight lift (translate-y-2), shadow increase, amber border glow
- Filter tabs above grid: "All", "Fiction", "Non-Fiction", "Latest"

### About Section
- Two-column layout: Author portrait (left) + bio narrative (right)
- Portrait: Rounded corners with subtle shadow, 40% width
- Bio: 2-3 paragraphs with highlighted quote callout
- Background: Subtle texture or book shelf illustration

### Reviews/Testimonials
- 3-column card grid with reader quotes
- Star ratings, reader name, book reference
- Alternating card heights for visual interest

### Footer
- Newsletter signup form prominently featured
- Social media icons (Instagram, Twitter, Goodreads)
- Quick links, copyright, contact email

---

## Animations

**Sparingly Applied:**
- Hero: Fade-in-up on load (0.8s ease)
- Books: Stagger fade-in as cards enter viewport (0.1s delay between)
- Hover states: Smooth 0.3s transitions on all interactive elements
- Scroll indicator: Gentle bounce animation in hero section

**NO:** Page transition effects, excessive parallax, distracting background animations

---

## Images

**Hero Image:** Large, atmospheric photograph showing:
- Option A: Featured book cover with dramatic lighting and depth
- Option B: Cozy reading nook with books and warm lighting
- Dimensions: 1920x1080, optimized WebP format
- Placement: Hero section, left side or full-width with text overlay

**Book Covers:** High-resolution cover images (600x900 minimum)
- Placement: Book showcase cards, centered with shadow

**Author Portrait:** Professional headshot or environmental portrait (800x1000)
- Placement: About section, left column

**Background Textures:** Subtle paper or linen texture for section backgrounds (optional, 50% opacity)

---

## Critical Implementation Notes

- Navbar must have smooth scroll behavior to all sections
- Book cards need clear hover affordance without being overwhelming
- Mobile: Stack all multi-column layouts to single column
- Ensure strong contrast ratios for all text (WCAG AA minimum)
- Hero CTA buttons on image: backdrop-blur-sm bg-white/10 border treatment