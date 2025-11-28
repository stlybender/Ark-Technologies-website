# Ark Enterprise AI – Quick Reference Card

## One-Page Cheat Sheet for Fast Implementation

---

## Brand Essence (3 Words)
**Clean. Confident. Concrete.**

---

## Core Value Proposition
**Enterprise AI that moves at the speed of your operations.**

Ark automates workflows, cleans data, and accelerates decisions across Real Estate, Banking, Healthcare, and Automotive—without ripping out your existing systems.

---

## Primary CTA
**Book a Demo**

---

## Color Palette (Copy-Paste Ready)

```css
/* Primary */
--accent: #1E40AF;           /* Deep blue */
--accent-dark: #1E3A8A;      /* Hover state */
--accent-light: #DBEAFE;     /* Tags/backgrounds */

/* Text */
--text-primary: #111827;     /* Near-black */
--text-secondary: #6B7280;   /* Medium gray */
--text-tertiary: #9CA3AF;    /* Light gray */

/* Background */
--bg-primary: #FFFFFF;       /* White */
--bg-secondary: #F9FAFB;     /* Light gray */
--border: #E5E7EB;           /* Light gray border */

/* Sector Tags */
--real-estate: #DBEAFE / #1E40AF;      /* Light blue bg / dark blue text */
--automotive: #E0E7FF / #4338CA;       /* Light indigo bg / indigo text */
--banking: #D1FAE5 / #065F46;          /* Light green bg / green text */
--healthcare: #FCE7F3 / #BE185D;       /* Light pink bg / pink text */
```

---

## Typography Scale (Desktop)

```css
/* Headlines */
--h1: 64px / 700 / 1.1;      /* Hero headline */
--h2: 48px / 700 / 1.2;      /* Section headlines */
--h3: 32px / 600 / 1.3;      /* Subsection headlines */
--h4: 24px / 600 / 1.4;      /* Card headlines */

/* Body */
--body: 18px / 400 / 1.7;    /* Primary body text */
--body-sm: 16px / 400 / 1.6; /* Small body text */
--label: 14px / 500 / 1.5;   /* Labels/captions */
```

**Mobile:** Scale down by ~40% (H1 → 40px, H2 → 32px, Body → 16px)

---

## Spacing System (Multiples of 8px)

```
xs:  8px   (0.5rem)
sm:  16px  (1rem)
md:  24px  (1.5rem)
lg:  32px  (2rem)
xl:  48px  (3rem)
2xl: 64px  (4rem)
3xl: 96px  (6rem)
4xl: 128px (8rem)
```

**Section vertical spacing:** 128px (desktop), 64px (mobile)

---

## Button Styles

### Primary CTA
```css
background: #1E40AF;
color: white;
padding: 16px 32px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
transition: 200ms ease;

/* Hover */
background: #1E3A8A;
transform: scale(1.02);
```

### Secondary CTA
```css
background: transparent;
border: 2px solid #1E40AF;
color: #1E40AF;
padding: 14px 30px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
transition: 200ms ease;

/* Hover */
background: #DBEAFE;
```

---

## Card Style

```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 12px;
padding: 32px;

/* Hover (for interactive cards) */
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
transition: 250ms ease-out;
```

---

## Animation Timings

```
Hover/Focus:     150ms (instant feedback)
Transitions:     250ms (smooth state changes)
Scroll Reveals:  400ms (section fade-ins)

Easing: cubic-bezier(0.4, 0, 0.2, 1) for most
```

---

## Homepage Section Order

1. **Hero** – Full viewport, headline + subheadline + CTA
2. **Trust Signals** – Logos/badges
3. **Sector Highlights** – Real Estate, Banking/Wealth, Healthcare (3-column)
4. **Capabilities** – Feature grid (Data Ingestion, Automation, Orchestration, Copilots, Analytics)
5. **How It Works** – 3-step visual (Connect → Orchestrate → Measure)
6. **Case Studies** – 5 cards with metrics
7. **Security** – Compliance reassurance
8. **Testimonials** – Social proof
9. **Final CTA** – Book a Demo
10. **Footer** – 4-column navigation

---

## Case Study Preview Card Pattern

```
┌─────────────────────────────────┐
│ [SECTOR TAG]                    │
│                                 │
│ [METRIC HEADLINE]               │
│ Lead response time → under 60s  │
│                                 │
│ [CLIENT TYPE]                   │
│ Large residential developer     │
│                                 │
│ [IMPACT STATEMENT]              │
│ 1-2 sentence summary            │
│                                 │
│ View full story →               │
└─────────────────────────────────┘
```

---

## 5 Case Studies (Hero Metrics)

1. **Real Estate:** Lead response time → **under 60 seconds**
2. **Automotive:** **Fewer missed calls** during peak load
3. **Banking/Wealth:** Faster onboarding, **lower NIGO rates**
4. **Healthcare – OPD:** **Reduced documentation time** per patient
5. **Healthcare – Radiology:** Improved **radiology TAT** and utilization

---

## Domain Terminology (Use Naturally)

### Real Estate
Lead response time • Site-visit booking • Lead scoring • Funnel visibility • CRM • DMS

### Automotive
Test drives • Service appointments • Missed calls • Dealer DMS/CRM • SIP • OEM reporting

### Banking/Wealth
KYC • MF forms • SIP registration • NIGO (Not In Good Order) • Portfolio intelligence • Rebalancing • HNI • RMs (Relationship Managers)

### Healthcare
EMR/EHR • PACS/RIS • Prescription assistant • AI scribe • Documentation time • Radiology TAT • Modality utilization • OPD volume

---

## Copy Patterns

### Good (Concrete, Specific)
- "Lead response time cut to under 60 seconds"
- "AI Voice CRM auto-calls new leads within seconds"
- "Bi-directional integration with CRM for lead scoring"
- "NLP layer over radiology reports from PACS/RIS"

### Avoid (Generic, Vague)
- "Revolutionary AI-powered solution"
- "Next-generation intelligent automation"
- "Seamlessly synergize cross-functional workflows"
- "Transform your business"

---

## Voice Characteristics

- **Concise:** Every word earns its place
- **Technical but readable:** Use domain terms naturally, not as jargon
- **Concrete over abstract:** "Under 60 seconds" not "dramatically faster"
- **Apple-like clarity:** Short sentences, clear hierarchy, generous white space

---

## What to Avoid

1. **Visual:** Purple-pink gradients, flashy animations, cluttered layouts
2. **Copy:** Buzzwords, hype, generic enterprise speak
3. **Motion:** Auto-playing videos, spinning elements, distracting transitions

---

## Responsive Breakpoints

```css
/* Mobile-first */
sm:  640px   /* Large mobile / small tablet */
md:  768px   /* Tablet */
lg:  1024px  /* Large tablet / small desktop */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Large desktop */
```

**Grid behavior:**
- Desktop (1280px+): 3-column layouts
- Tablet (768px–1279px): 2-column or stacked
- Mobile (<768px): Single column, stacked

---

## Accessibility Checklist

- [ ] Semantic HTML (`<nav>`, `<main>`, `<section>`)
- [ ] Alt text for all images
- [ ] Labels for all form inputs
- [ ] Keyboard navigation (Tab key)
- [ ] Focus indicators (2px outline)
- [ ] Color contrast 4.5:1 minimum
- [ ] `prefers-reduced-motion` support

---

## Tech Stack (Recommended)

**Framework:** Next.js 14+ (App Router)  
**Styling:** Tailwind CSS  
**Fonts:** System fonts (-apple-system)  
**Animation:** CSS + Intersection Observer  
**Deployment:** Vercel  
**Analytics:** Google Analytics 4 or Plausible

---

## File Quick Links

| Need | File |
|------|------|
| Full homepage copy | `HOMEPAGE_COPY.md` |
| Case study content | `CASE_STUDY_SYSTEM.md` |
| Color/typography specs | `VISUAL_DESIGN_SYSTEM.md` |
| Section structure | `HOMEPAGE_STRUCTURE.md` |
| Implementation roadmap | `IMPLEMENTATION_GUIDE.md` |
| Brand positioning | `POSITIONING.md` |

---

## Tailwind Config (Quick Setup)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
}
```

---

## Animation Code Snippets

### Scroll Reveal
```css
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

### Card Hover
```css
.card {
  transition: transform 250ms ease-out, box-shadow 250ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

---

## SEO Template (Next.js)

```typescript
export const metadata = {
  title: 'Ark Enterprise AI – Operations-First AI for Real Estate, Banking, Healthcare',
  description: 'Cut lead response time, automate KYC, reduce EMR documentation time. Ark connects to your DMS, CRM, SIP, EMR/EHR, and PACS/RIS.',
  openGraph: {
    title: 'Ark Enterprise AI',
    description: 'Operations-First AI for Real Estate, Banking, Healthcare',
    images: ['/og-image.png'],
  },
}
```

---

## Component Folder Structure

```
/app
  /page.tsx (homepage)
  /case-studies/[slug]/page.tsx

/components
  /Hero.tsx
  /SectorHighlights.tsx
  /Capabilities.tsx
  /HowItWorks.tsx
  /CaseStudies.tsx
  /Security.tsx
  /Testimonials.tsx
  /CTA.tsx
  /Footer.tsx
  /Header.tsx

/lib
  /caseStudies.ts (data)
```

---

## Quick Start Command

```bash
# Create project
npx create-next-app@latest ark-landing --typescript --tailwind --app

# Install and run
cd ark-landing
npm run dev
```

---

## Design Principles (Summary)

1. Clarity over decoration
2. White space as a feature
3. Subtle motion (never distracting)
4. Typography-first
5. Respect for content

---

## Key Metrics to Highlight

**Speed:** Lead response time, TAT, booking rates  
**Data Quality:** CRM sync, NIGO rates, EMR data quality  
**Efficiency:** Documentation time, missed calls, manual work reduction  
**Outcomes:** Site-visit bookings, SIP registrations, utilization rates

---

**Print this page and keep it at your desk while building. Everything critical is here.**

