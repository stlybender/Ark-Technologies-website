# Case Studies Page - Visual Structure

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                        HEADER                            │
│                  (Existing Component)                    │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                      HERO SECTION                        │
│                                                          │
│                    Case Studies                          │
│   Real outcomes from Ark deployments across sectors     │
│                                                          │
│                    [Fade in animation]                   │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│              STICKY NAVIGATION PILLS                     │
│  [Real Estate] [Automotive] [Banking] [Health] [Health] │
│              (Highlights active section)                 │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                 CASE STUDY SECTION 1                     │
│               (Real Estate - Blue Theme)                 │
│  ┌──────────────┬────────────────────────────────────┐  │
│  │   SIDEBAR    │       MAIN CONTENT                 │  │
│  │   (Sticky)   │                                    │  │
│  │              │  Business Context                  │  │
│  │ [Blue Badge] │  Lorem ipsum dolor sit amet...     │  │
│  │              │                                    │  │
│  │  One-line    │  Key Problems                      │  │
│  │  summary     │  • Problem 1                       │  │
│  │              │  • Problem 2                       │  │
│  │  Client:     │  • Problem 3                       │  │
│  │  Developer   │                                    │  │
│  │              │  ┌──────────────────────────────┐  │  │
│  │              │  │    Ark Solution (Card)       │  │  │
│  │              │  │  Overview paragraph...       │  │  │
│  │              │  │                              │  │  │
│  │              │  │  AI Voice CRM & Calling      │  │  │
│  │              │  │  ✓ Auto-calls leads          │  │  │
│  │              │  │  ✓ Books site visits         │  │  │
│  │              │  │                              │  │  │
│  │              │  │  CRM Integration             │  │  │
│  │              │  │  ✓ Updates leads             │  │  │
│  │              │  │  ✓ Logs outcomes             │  │  │
│  │              │  └──────────────────────────────┘  │  │
│  │              │                                    │  │
│  │              │  Results (2-column grid)           │  │
│  │              │  ┌──────────┐  ┌──────────┐       │  │
│  │              │  │ Result 1 │  │ Result 2 │       │  │
│  │              │  └──────────┘  └──────────┘       │  │
│  │              │                                    │  │
│  │              │  Integrations                      │  │
│  │              │  • Salesforce, Zoho CRM...         │  │
│  └──────────────┴────────────────────────────────────┘  │
│                                                          │
│              [Scroll reveal animations]                  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                 CASE STUDY SECTION 2                     │
│              (Automotive - Cyan Theme)                   │
│                    [Same structure]                      │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                 CASE STUDY SECTION 3                     │
│           (Banking & Wealth - Orange Theme)              │
│                    [Same structure]                      │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                 CASE STUDY SECTION 4                     │
│     (Healthcare Prescription - Purple Theme)             │
│                    [Same structure]                      │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                 CASE STUDY SECTION 5                     │
│      (Healthcare Radiology - Purple Theme)               │
│                    [Same structure]                      │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                    FINAL CTA SECTION                     │
│              (Gradient: Blue to Cyan)                    │
│                                                          │
│            Ready to see Ark in action?                   │
│     Book a demo to see how Ark can transform...         │
│                                                          │
│                   [Book a Demo]                          │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                        FOOTER                            │
│                  (Existing Component)                    │
└─────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (< 640px)

```
┌──────────────────────────┐
│         HEADER           │
└──────────────────────────┘
┌──────────────────────────┐
│      HERO SECTION        │
│                          │
│    Case Studies          │
│                          │
│  Real outcomes from...   │
└──────────────────────────┘
┌──────────────────────────┐
│  NAVIGATION (Scroll →)   │
│  [RE] [Auto] [Bank]...   │
└──────────────────────────┘
┌──────────────────────────┐
│   CASE STUDY SECTION     │
│   (Stacked Vertically)   │
│                          │
│  [Blue Badge]            │
│  Real Estate             │
│                          │
│  One-line summary        │
│                          │
│  Client: Developer       │
│                          │
│  Business Context        │
│  Paragraph...            │
│                          │
│  Key Problems            │
│  • Problem 1             │
│  • Problem 2             │
│                          │
│  ┌────────────────────┐  │
│  │  Ark Solution      │  │
│  │  Overview...       │  │
│  │                    │  │
│  │  Module 1          │  │
│  │  ✓ Feature 1       │  │
│  │  ✓ Feature 2       │  │
│  └────────────────────┘  │
│                          │
│  Results (1 column)      │
│  ┌────────────────────┐  │
│  │ Result 1           │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ Result 2           │  │
│  └────────────────────┘  │
│                          │
│  Integrations            │
│  • Integration 1         │
└──────────────────────────┘
│  [More sections...]      │
└──────────────────────────┘
┌──────────────────────────┐
│      FINAL CTA           │
│                          │
│  Ready to see Ark?       │
│                          │
│  [Book a Demo]           │
└──────────────────────────┘
┌──────────────────────────┐
│        FOOTER            │
└──────────────────────────┘
```

---

## Component Hierarchy

```
CaseStudiesPage (app/case-studies/page.tsx)
│
├── Header (existing component)
│
├── Hero Section
│   ├── h1: "Case Studies"
│   └── p: Description
│
├── Navigation Pills (sticky)
│   └── 5 × Button (Real Estate, Auto, Banking, Health×2)
│
├── Case Study Sections × 5
│   └── CaseStudySection.tsx (reusable)
│       │
│       ├── Sidebar (left, sticky on desktop)
│       │   ├── Sector Badge
│       │   ├── Title (one-line summary)
│       │   └── Client Type
│       │
│       └── Main Content (right, scrollable)
│           ├── ScrollReveal (Business Context)
│           ├── ScrollReveal (Key Problems)
│           │   └── Bulleted list
│           ├── ScrollReveal (Ark Solution Card)
│           │   ├── Overview paragraph
│           │   └── Solution Modules × N
│           │       ├── Module Title
│           │       └── Bullets with checkmarks
│           ├── ScrollReveal (Results Grid)
│           │   └── Result Cards (2 columns)
│           └── ScrollReveal (Integrations)
│               └── Bulleted list
│
├── Final CTA Section
│   ├── h2: "Ready to see Ark in action?"
│   ├── p: Description
│   └── Button: "Book a Demo"
│
└── Footer (existing component)
```

---

## Animation Flow

### Page Load
```
1. Hero fades in (0ms delay)
   ↓
2. Navigation pills fade in (100ms delay)
```

### On Scroll (per section)
```
As user scrolls down:

1. Sidebar fades in (0ms delay)
   ↓
2. Business Context fades in (100ms delay)
   ↓
3. Key Problems fade in (150ms delay)
   ↓
4. Solution Card fades in (200ms delay)
   ↓
5. Results Grid fades in (250ms delay)
   ↓
6. Integrations fade in (300ms delay)
```

### Navigation Interaction
```
User clicks pill button
   ↓
Smooth scroll to section
   ↓
Section animates into view
   ↓
Pill highlights as active
```

---

## Color Scheme by Section

```
┌────────────────────────────────────────────────┐
│  Real Estate Section                           │
│  Background: Light Blue (#E3F2FD)              │
│  Accent: Blue (#0F4C81)                        │
│  Badge: Blue with blue text                    │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│  Automotive Section                            │
│  Background: Light Cyan (#CFFAFE)              │
│  Accent: Cyan Dark (#0891B2)                   │
│  Badge: Cyan with dark cyan text               │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│  Banking & Wealth Section                      │
│  Background: Light Orange (#FFEDD5)            │
│  Accent: Orange Dark (#EA580C)                 │
│  Badge: Orange with dark orange text           │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│  Healthcare Sections (both)                    │
│  Background: Light Purple (#EDE9FE)            │
│  Accent: Purple Dark (#7C3AED)                 │
│  Badge: Purple with dark purple text           │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│  Final CTA                                     │
│  Background: Gradient Blue → Cyan              │
│  Text: White                                   │
│  Button: White with blue text                  │
└────────────────────────────────────────────────┘
```

---

## Data Flow

```
lib/caseStudies.ts (Data Source)
        ↓
  caseStudies array
  [5 case study objects]
        ↓
app/case-studies/page.tsx
        ↓
  Maps over array
        ↓
    For each case study:
        ↓
components/CaseStudySection.tsx
    (Receives caseStudy prop)
        ↓
    Renders with sector styling
        ↓
components/animation/ScrollReveal.tsx
    (Wraps content blocks)
        ↓
    Animates on scroll
```

---

## User Journey

### From Homepage
```
User on Homepage
    ↓
Scrolls to "Case Studies" section
    ↓
Sees 5 preview cards
    ↓
Clicks "View all case studies" OR
Clicks individual "View full story"
    ↓
Navigates to /case-studies
(or /case-studies#sector-slug)
    ↓
Lands on case studies page
    ↓
Page scrolls to anchor (if provided)
```

### On Case Studies Page
```
User arrives at page
    ↓
Sees hero and navigation pills
    ↓
Scrolls down naturally OR
Clicks navigation pill
    ↓
Sees sections animate in
    ↓
Reads case study content
    ↓
Navigation pill highlights as active
    ↓
Continues scrolling or jumping
    ↓
Reaches final CTA
    ↓
Clicks "Book a Demo"
```

---

## Responsive Behavior Summary

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Layout | Single column | Single column | Two columns |
| Sidebar | Stacked top | Stacked top | Sticky left |
| Results Grid | 1 column | 2 columns | 2 columns |
| Navigation Pills | Horizontal scroll | All visible | All visible |
| Section Padding | 24px sides | 48px sides | 80px sides |
| Section Spacing | 64px vertical | 80px vertical | 128px vertical |

---

## Key Features Checklist

✅ **5 Complete Case Studies**
- Real Estate: AI Voice CRM
- Automotive: AI Calling Assistant
- Banking: Forms & Portfolio AI
- Healthcare: Prescription Assistant
- Healthcare: Radiology Intelligence

✅ **Scroll Animations**
- IntersectionObserver-based
- Staggered delays per section
- Respects prefers-reduced-motion

✅ **Sector Navigation**
- Sticky pills at top
- Active state highlighting
- Smooth scroll to sections

✅ **Responsive Design**
- Mobile-first approach
- 320px to 4K support
- Optimized for all devices

✅ **Accessibility**
- WCAG AA compliant
- Keyboard navigable
- Screen reader friendly
- Semantic HTML

✅ **Homepage Integration**
- Updated links
- Deep linking support
- Consistent navigation

---

This visual guide provides a clear overview of the page structure, layout, and component relationships for the new Ark Case Studies page.

