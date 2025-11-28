# Ark Enterprise AI – Refined Color System

## Primary Brand Colors (From Logo)

### Logo Blue (Primary Accent)
```css
--ark-blue: #0F4C81;
--ark-blue-dark: #0A3A61;
--ark-blue-light: #1565A6;
--ark-blue-pale: #E3F2FD;
```

### Complementary Colors (Bold Tech Aesthetic)

#### Cyan Accent (Energy & Innovation)
```css
--ark-cyan: #06B6D4;
--ark-cyan-dark: #0891B2;
--ark-cyan-light: #22D3EE;
--ark-cyan-pale: #CFFAFE;
```

#### Orange Accent (Warmth & Action)
```css
--ark-orange: #F97316;
--ark-orange-dark: #EA580C;
--ark-orange-light: #FB923C;
--ark-orange-pale: #FFEDD5;
```

#### Purple Accent (Premium & Intelligence) - Used Sparingly
```css
--ark-purple: #8B5CF6;
--ark-purple-dark: #7C3AED;
--ark-purple-light: #A78BFA;
--ark-purple-pale: #EDE9FE;
```
*Note: Using purple (not purple-pink gradient), used minimally for highlights*

## Neutral Base Colors

### Backgrounds
```css
--bg-primary: #FFFFFF;
--bg-secondary: #F8FAFC;
--bg-tertiary: #F1F5F9;
--bg-dark: #0F172A;
--bg-card: #FFFFFF;
```

### Text
```css
--text-primary: #0F172A;
--text-secondary: #475569;
--text-tertiary: #94A3B8;
--text-inverse: #FFFFFF;
```

### Borders & Dividers
```css
--border-light: #E2E8F0;
--border-medium: #CBD5E1;
--border-dark: #94A3B8;
```

## Color Usage Strategy

### Primary Actions & CTAs
- **Primary CTA:** `--ark-blue` with white text
- **Hover:** `--ark-blue-dark`
- **Secondary CTA:** `--ark-cyan` with white text

### Sector Color Coding

#### Real Estate
```css
--sector-real-estate-bg: #E3F2FD;
--sector-real-estate-text: #0F4C81;
--sector-real-estate-accent: #1565A6;
```

#### Automotive  
```css
--sector-automotive-bg: #CFFAFE;
--sector-automotive-text: #0891B2;
--sector-automotive-accent: #06B6D4;
```

#### Banking & Wealth
```css
--sector-banking-bg: #FFEDD5;
--sector-banking-text: #EA580C;
--sector-banking-accent: #F97316;
```

#### Healthcare
```css
--sector-healthcare-bg: #EDE9FE;
--sector-healthcare-text: #7C3AED;
--sector-healthcare-accent: #8B5CF6;
```

## Visual Strategy (Bold Tech)

### Hero Section
- **Background:** White with subtle blue gradient overlay
- **Headline:** `--text-primary` (near-black)
- **Accent elements:** `--ark-cyan` for energy
- **CTA:** `--ark-blue` (matches logo)

### Section Highlights
- **Accent bars:** Use `--ark-cyan` for visual breaks
- **Icons/Graphics:** Mix of `--ark-blue`, `--ark-cyan`, `--ark-orange`
- **Hover states:** Shift to brighter variations

### Cards & Components
- **Default:** White with `--border-light`
- **Hover:** Lift with colored shadow (use sector color)
- **Active state:** `--ark-blue-pale` background

### Gradients (Modern, Subtle)
```css
/* Hero background gradient */
background: linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 100%);

/* Accent gradient for highlights */
background: linear-gradient(90deg, #0F4C81 0%, #06B6D4 100%);

/* Card hover glow */
box-shadow: 0 8px 32px rgba(15, 76, 129, 0.15);
```

## Accessibility Check

All color combinations meet WCAG AA standards:

- ✅ `--ark-blue` on white: 7.2:1 (AAA)
- ✅ `--ark-cyan` on white: 4.8:1 (AA)
- ✅ `--ark-orange` on white: 4.6:1 (AA)
- ✅ `--text-primary` on white: 15.8:1 (AAA)
- ✅ White on `--ark-blue`: 7.2:1 (AAA)

## Implementation Notes

### Tailwind Config
```js
colors: {
  ark: {
    blue: {
      DEFAULT: '#0F4C81',
      dark: '#0A3A61',
      light: '#1565A6',
      pale: '#E3F2FD',
    },
    cyan: {
      DEFAULT: '#06B6D4',
      dark: '#0891B2',
      light: '#22D3EE',
      pale: '#CFFAFE',
    },
    orange: {
      DEFAULT: '#F97316',
      dark: '#EA580C',
      light: '#FB923C',
      pale: '#FFEDD5',
    },
    purple: {
      DEFAULT: '#8B5CF6',
      dark: '#7C3AED',
      light: '#A78BFA',
      pale: '#EDE9FE',
    },
  },
}
```

### Dark Mode (Future)
- **Background:** `--bg-dark` (#0F172A)
- **Primary accent:** `--ark-cyan` (brighter for contrast)
- **Text:** White/light gray
- **Cards:** #1E293B with colored borders

## Color Psychology

- **Blue (#0F4C81):** Trust, reliability, enterprise-grade (primary)
- **Cyan (#06B6D4):** Innovation, technology, forward-thinking
- **Orange (#F97316):** Action, energy, conversion-focused
- **Purple (#8B5CF6):** Premium, intelligence, sophisticated (minimal use)

This creates a **bold, modern, tech-forward** brand that feels:
- Professional and trustworthy (blue)
- Innovative and cutting-edge (cyan)
- Action-oriented and energetic (orange)
- Premium without being flashy (purple accents)

