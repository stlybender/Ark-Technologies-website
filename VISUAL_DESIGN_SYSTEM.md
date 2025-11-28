# Ark Enterprise AI – Visual Design System

## Overview
An ultra-minimal, Apple-like design system focused on clarity, generous white space, and subtle motion. This system prioritizes readability and professionalism for enterprise audiences while maintaining a modern, premium feel.

---

## Design Philosophy

### Core Principles
1. **Clarity over decoration** – Every visual element serves a purpose
2. **White space as a feature** – Generous spacing creates breathing room and hierarchy
3. **Subtle motion** – Animation enhances, never distracts
4. **Typography-first** – Let the words lead, with type doing the heavy lifting
5. **Respect for content** – Design frames the message, doesn't compete with it

---

## Color System

### Primary Palette

**Background:**
- Primary background: `#FFFFFF` (pure white)
- Secondary background: `#F9FAFB` (very light gray, for alternating sections)
- Card background: `#FFFFFF` with subtle shadow or border

**Text:**
- Primary text: `#111827` (near-black, high contrast)
- Secondary text: `#6B7280` (medium gray, for supporting copy)
- Tertiary text: `#9CA3AF` (light gray, for labels and meta)

**Accent Colors:**
Avoid purple-pink gradients. Choose one clean accent for CTAs and highlights:

**Option A – Deep Blue:**
- Primary accent: `#1E40AF` (deep blue)
- Hover state: `#1E3A8A` (darker blue)
- Light variant: `#DBEAFE` (for backgrounds/tags)

**Option B – Forest Green:**
- Primary accent: `#065F46` (forest green)
- Hover state: `#064E3B` (darker green)
- Light variant: `#D1FAE5` (for backgrounds/tags)

**Option C – Charcoal with Warm Accent:**
- Primary accent: `#374151` (charcoal gray)
- Warm highlight: `#F59E0B` (amber, use sparingly)
- Light variant: `#F3F4F6` (for backgrounds/tags)

**Recommended:** Option A (Deep Blue) for tech/enterprise credibility, or Option C (Charcoal + Amber) for a more sophisticated, less "tech startup" feel.

### Functional Colors

**Success:** `#10B981` (green, for positive metrics)  
**Warning:** `#F59E0B` (amber, for alerts or highlights)  
**Error:** `#EF4444` (red, for errors or validation)  
**Info:** `#3B82F6` (blue, for informational elements)

### Sector Tag Colors (Subtle, Muted)

Use light backgrounds with dark text for sector badges:

- **Real Estate:** `#DBEAFE` background + `#1E40AF` text (light blue)
- **Automotive:** `#E0E7FF` background + `#4338CA` text (light indigo)
- **Banking/Wealth:** `#D1FAE5` background + `#065F46` text (light green)
- **Healthcare:** `#FCE7F3` background + `#BE185D` text (light pink, but NOT purple-pink gradient)

---

## Typography

### Font Family

**Option A – System Fonts (Apple-like):**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Option B – Custom (if web fonts allowed):**
- **Headings:** Inter (Google Fonts, clean and modern)
- **Body:** Inter or SF Pro Text equivalent

**Recommended:** System fonts for fastest load and native feel.

### Type Scale

**Desktop:**
- **H1 (Hero headline):** 64px / 4rem, font-weight: 700, line-height: 1.1, letter-spacing: -0.02em
- **H2 (Section headlines):** 48px / 3rem, font-weight: 700, line-height: 1.2, letter-spacing: -0.01em
- **H3 (Subsection headlines):** 32px / 2rem, font-weight: 600, line-height: 1.3
- **H4 (Card headlines):** 24px / 1.5rem, font-weight: 600, line-height: 1.4
- **Body (primary):** 18px / 1.125rem, font-weight: 400, line-height: 1.7
- **Body (small):** 16px / 1rem, font-weight: 400, line-height: 1.6
- **Caption/Label:** 14px / 0.875rem, font-weight: 500, line-height: 1.5

**Mobile:**
- **H1:** 40px / 2.5rem
- **H2:** 32px / 2rem
- **H3:** 24px / 1.5rem
- **H4:** 20px / 1.25rem
- **Body (primary):** 16px / 1rem
- **Body (small):** 15px / 0.9375rem
- **Caption/Label:** 13px / 0.8125rem

### Type Hierarchy Best Practices

- **Headlines:** Bold (600–700), tight leading (1.1–1.2), negative letter-spacing for large sizes
- **Body copy:** Regular (400), generous leading (1.6–1.8) for readability
- **Labels/Tags:** Medium (500–600), uppercase optional for very small labels (use sparingly)
- **Links:** Underline on hover only, color shifts subtly

---

## Spacing System

### Base Unit: 8px

Use multiples of 8 for all spacing (padding, margin, gaps):

- **xs:** 8px (0.5rem)
- **sm:** 16px (1rem)
- **md:** 24px (1.5rem)
- **lg:** 32px (2rem)
- **xl:** 48px (3rem)
- **2xl:** 64px (4rem)
- **3xl:** 96px (6rem)
- **4xl:** 128px (8rem)

### Section Spacing

**Desktop:**
- **Between major sections:** 128px (4xl) vertical
- **Within sections (headline to content):** 48px (xl)
- **Between cards/columns:** 32px (lg) horizontal
- **Paragraph spacing:** 24px (md)

**Mobile:**
- **Between major sections:** 64px (2xl) vertical
- **Within sections:** 32px (lg)
- **Between stacked cards:** 24px (md)
- **Paragraph spacing:** 20px

### Container & Content Width

**Max content width:**
- **Prose/body text:** 720px (45–65 characters per line for readability)
- **Full-width sections:** 1280px max-width with horizontal padding
- **Cards/grid:** 1440px max-width for 3-column layouts

**Horizontal padding:**
- **Desktop (>1280px):** 80px on each side
- **Tablet (768px–1279px):** 48px
- **Mobile (<768px):** 24px

---

## Layout & Grid

### Grid System

**Desktop (1280px+):**
- 12-column grid with 32px gutters
- Typical layouts: 3-column (4-4-4), 2-column (6-6), single-column (12)

**Tablet (768px–1279px):**
- 8-column grid with 24px gutters
- Typical layouts: 2-column (4-4), single-column (8)

**Mobile (<768px):**
- Single column, full-width with 24px horizontal padding

### Section Layouts

**Hero:**
- Full viewport height (100vh) on desktop, auto on mobile
- Content vertically and horizontally centered
- Max-width: 960px for headline + subheadline

**3-Column Sections (Sectors, Capabilities):**
- Desktop: 3 equal columns with 32px gaps
- Tablet: 2 columns or stacked
- Mobile: Single column, stacked

**Case Study Cards:**
- Desktop: 5 columns (or horizontal scroll with 3 visible)
- Tablet: Horizontal scroll with 2 visible
- Mobile: Horizontal scroll with 1 visible
- Card width: 320px–360px each

**How It Works (3-Step):**
- Desktop: Horizontal 3-column layout
- Tablet: 3-column compact or stacked
- Mobile: Vertical stack

---

## Components

### Buttons

**Primary CTA:**
- Background: Accent color (e.g., `#1E40AF`)
- Text: White, 16px, font-weight: 600
- Padding: 16px 32px (vertical, horizontal)
- Border-radius: 8px (slightly rounded, not pill-shaped)
- Hover: Background darkens slightly (e.g., `#1E3A8A`), subtle scale (1.02)
- Transition: 200ms ease

**Secondary CTA:**
- Background: Transparent
- Border: 2px solid accent color
- Text: Accent color, 16px, font-weight: 600
- Padding: 14px 30px (slightly less to account for border)
- Border-radius: 8px
- Hover: Background fills with light accent (e.g., `#DBEAFE`), no scale

**Text Link:**
- Text: Accent color, 16px or inherit, font-weight: 500
- Underline: None by default, appears on hover
- Hover: Slight color shift (darker)
- Transition: 150ms ease

### Cards

**Style:**
- Background: White (`#FFFFFF`)
- Border: 1px solid `#E5E7EB` (light gray) OR subtle shadow (see below)
- Border-radius: 12px (medium rounded corners)
- Padding: 32px (desktop), 24px (mobile)

**Shadow (choose one approach):**

**Option A – Border only (minimal):**
```css
border: 1px solid #E5E7EB;
```

**Option B – Subtle shadow:**
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
```

**Option C – Shadow on hover only:**
```css
/* Default */
border: 1px solid #E5E7EB;

/* Hover */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
transform: translateY(-2px);
transition: all 250ms ease;
```

**Recommended:** Option C (border default, shadow + lift on hover) for interactive cards like Case Studies.

### Sector Tags / Badges

**Style:**
- Background: Light sector color (e.g., `#DBEAFE` for Real Estate)
- Text: Dark sector color (e.g., `#1E40AF`)
- Padding: 4px 12px
- Border-radius: 6px (small rounded)
- Font: 12px, font-weight: 600, uppercase optional

**Placement:** Top-left of card or inline before headline.

### Input Fields (for CTA forms, if used)

**Style:**
- Background: White
- Border: 1px solid `#D1D5DB` (medium gray)
- Border-radius: 8px
- Padding: 12px 16px
- Font: 16px (to prevent iOS zoom), font-weight: 400
- Placeholder: `#9CA3AF` (light gray)

**Focus state:**
- Border: 2px solid accent color
- Outline: None (use border for focus indicator)
- Box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1) (accent color at 10% opacity)

---

## Animation & Interaction

### Motion Principles

1. **Subtle, not flashy** – Enhance understanding, don't distract
2. **Purposeful** – Every animation has a reason (feedback, hierarchy, delight)
3. **Fast enough** – Animations should feel instant (150–300ms for most interactions)
4. **Respectful** – Honor `prefers-reduced-motion` for accessibility

### Timing & Easing

**Durations:**
- **Instant feedback (hover, focus):** 150ms
- **Transitions (fade, slide):** 250ms
- **Reveals (scroll-triggered):** 400ms
- **Complex animations (multi-step):** 600ms max

**Easing:**
- **Standard (most interactions):** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)
- **Entrance (fade in, slide up):** `cubic-bezier(0, 0, 0.2, 1)` (ease-out, starts fast)
- **Exit (fade out):** `cubic-bezier(0.4, 0, 1, 1)` (ease-in, ends fast)

### Specific Animations

**Hero:**
- **Parallax background (optional):** Background image/video moves at 0.5x scroll speed
- **Text fade-in:** Headline and subheadline fade in on load (400ms, ease-out, 100ms stagger)
- **CTA button:** Fades in after text (500ms delay)

```css
/* Example */
.hero-headline {
  animation: fadeInUp 400ms ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Section Reveals (Scroll-Triggered):**
- **Intersection Observer:** Trigger when section enters viewport (20% threshold)
- **Animation:** Fade in + slight upward movement (20px)
- **Stagger:** If multiple items (e.g., 3 sector cards), stagger by 100ms

```css
/* Example */
.section-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.section-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Card Hover:**
- **Effect:** Subtle lift (2–4px) + shadow increase
- **Duration:** 250ms
- **Easing:** ease-out

```css
.card {
  border: 1px solid #E5E7EB;
  transition: transform 250ms ease-out, box-shadow 250ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

**Button Hover:**
- **Primary CTA:** Background darkens, subtle scale (1.02)
- **Secondary CTA:** Background fills with light accent
- **Duration:** 200ms

```css
.btn-primary {
  background: #1E40AF;
  transition: background 200ms ease, transform 200ms ease;
}

.btn-primary:hover {
  background: #1E3A8A;
  transform: scale(1.02);
}
```

**Link Hover:**
- **Effect:** Underline appears, color darkens slightly
- **Duration:** 150ms

```css
.link {
  color: #1E40AF;
  text-decoration: none;
  transition: color 150ms ease;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #1E40AF;
  transition: width 200ms ease;
}

.link:hover::after {
  width: 100%;
}
```

**Case Study Card CTA Arrow:**
- **Effect:** Arrow shifts right 4px on card hover
- **Duration:** 250ms

```css
.card:hover .arrow {
  transform: translateX(4px);
  transition: transform 250ms ease-out;
}
```

**Scroll Progress Indicator (Optional):**
- **Style:** Thin line (2–3px) at top of page
- **Color:** Accent color
- **Behavior:** Width grows from 0% to 100% as user scrolls

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #1E40AF;
  width: 0%;
  z-index: 1000;
  transition: width 100ms linear;
}
```

---

## Navigation / Header

### Desktop Header

**Style:**
- Background: White with subtle shadow (or transparent until scroll, then white)
- Height: 72px
- Sticky: Yes (stays at top on scroll)
- Horizontal padding: 80px (matches container)

**Content:**
- **Left:** Ark logo (text or logomark, ~140px width)
- **Center (optional):** Section links (How It Works, Case Studies, etc.) if needed
- **Right:** Primary CTA button ("Book a Demo")

**Scroll behavior:**
- **Option A (Minimal):** Always white, always sticky
- **Option B (Fade-in):** Transparent on hero, fades to white + shadow when user scrolls past hero

```css
.header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 200ms ease;
  z-index: 100;
}

/* If using transparent-to-white */
.header.transparent {
  background: transparent;
  box-shadow: none;
}

.header.scrolled {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

### Mobile Header

**Style:**
- Same height: 64px
- Hamburger menu (right side) that opens full-screen or slide-in drawer
- Logo (left side)

**Menu animation:**
- Slide in from right (300ms, ease-out)
- Overlay darkens background (semi-transparent black)

---

## Footer

**Style:**
- Background: `#F9FAFB` (light gray, different from body white)
- Padding: 64px horizontal, 48px vertical
- Text: `#6B7280` (medium gray), 14px
- Links: `#374151` (darker gray), hover to accent color

**Layout:**
- Desktop: 4-column grid (Company, Product, Resources, Legal) + Social icons on the right
- Mobile: Stacked, single column

**Social Icons:**
- Size: 24px × 24px
- Color: `#6B7280`, hover to accent
- Style: Simple, line-based icons (not filled)

---

## Responsive Breakpoints

```css
/* Mobile-first approach */

/* Small mobile */
@media (max-width: 374px) {
  /* Very small phones */
}

/* Mobile */
@media (min-width: 375px) {
  /* Standard mobile (default) */
}

/* Large mobile / Small tablet */
@media (min-width: 640px) {
  /* 2-column layouts start to appear */
}

/* Tablet */
@media (min-width: 768px) {
  /* 2-column comfortable, some 3-column */
}

/* Large tablet / Small desktop */
@media (min-width: 1024px) {
  /* 3-column layouts, larger type */
}

/* Desktop */
@media (min-width: 1280px) {
  /* Full desktop experience */
}

/* Large desktop */
@media (min-width: 1536px) {
  /* Larger containers, more generous spacing */
}
```

---

## Accessibility

### Focus States

**Keyboard focus indicator:**
- Visible outline: 2px solid accent color
- Offset: 2px from element
- Border-radius: Match element's border-radius

```css
*:focus-visible {
  outline: 2px solid #1E40AF;
  outline-offset: 2px;
}
```

### Contrast Ratios

- **Primary text on white:** 4.5:1 minimum (WCAG AA)
- **Secondary text on white:** 4.5:1 minimum
- **CTA buttons:** 4.5:1 (white text on `#1E40AF` passes)

### Motion Preferences

Respect `prefers-reduced-motion` for users who prefer minimal animation:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Support

- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, etc.)
- All images have `alt` text
- Form inputs have associated `<label>` elements
- Skip-to-content link for keyboard users

---

## Loading States

### Page Load

**Option A (Minimal):**
- No loader, just fast render with progressive content reveal

**Option B (Subtle):**
- Hero content fades in (400ms) once fonts and critical CSS loaded
- Sections reveal on scroll (as described above)

### Skeleton Screens (if content loads async)

**Style:**
- Background: `#E5E7EB` (light gray)
- Animated shimmer: subtle gradient moves left to right (1.5s loop)
- Use for: Case study cards, testimonials, any content loaded via API

```css
.skeleton {
  background: linear-gradient(90deg, #E5E7EB 25%, #F3F4F6 50%, #E5E7EB 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

## Implementation Notes

### CSS Architecture

**Recommended approach:**
- **Utility-first (Tailwind CSS):** Fast, consistent, easy to maintain for this type of landing page
- **Alternative:** CSS Modules or Styled Components if using React/Next.js

**Why Tailwind for this project:**
- Apple-like spacing system (4px, 8px, 16px, etc.) maps perfectly to Tailwind's scale
- Rapid iteration on spacing, typography, and layout
- Built-in responsive breakpoints
- Easy to extract components once patterns emerge

### Performance Considerations

1. **Fonts:** Use system fonts (no web font loading) OR preload Inter/SF Pro if using custom fonts
2. **Images:** Use WebP with fallbacks, lazy-load images below the fold
3. **Animations:** Use CSS transforms (not `left`/`top`) for hardware acceleration
4. **Icons:** Use SVG sprites or inline SVG for social icons, system icons
5. **Critical CSS:** Inline above-the-fold styles for fastest First Contentful Paint

### Dark Mode (Future)

This design system is light-mode only for now. If dark mode is needed later:
- **Background:** `#111827` (dark) or `#1F2937` (slightly lighter for cards)
- **Text:** `#F9FAFB` (light) or `#E5E7EB` (medium)
- **Accent:** Keep same or shift slightly lighter for better contrast

---

## Summary: The Ark Look & Feel

**In 3 words:** Clean. Confident. Concrete.

**Visual cues:**
- Generous white space creates premium, uncluttered feel
- Typography does heavy lifting (clear hierarchy, comfortable reading)
- Subtle motion adds polish without distraction
- Sector-specific color coding aids navigation without overwhelming

**What it's NOT:**
- Not flashy or startup-y (no gradients, no illustrations, no playful animations)
- Not cold or corporate (generous spacing, comfortable type, subtle motion humanize it)
- Not generic SaaS (domain-specific language, sector focus, real outcomes front and center)

This visual system is now ready to implement in your chosen tech stack (Next.js + Tailwind recommended) with all spacing, typography, color, and animation decisions documented.

