# Ark Logo Usage Guide

## Available Formats

### 1. SVG (Vector - Recommended for Web)
- **File:** `ark-logo.svg`
- **Use for:** Website (header, footer), any size needed
- **Advantages:** Scales perfectly, small file size, crisp at any resolution

### 2. PNG (Original from user)
- **Use for:** Social media, email signatures, presentations
- **Advantages:** Wide compatibility

## Logo Specifications

### Colors
- **Primary Blue Circle:** `#0F4C81` (Deep blue, matches accent color from design system)
- **White Mountain/Arrow:** `#FFFFFF`
- **Gray Triangle:** `#6B7280` (Matches secondary text color from design system)

### Design Elements
- Circular background (deep blue)
- White stylized "A" shape (mountain/arrow pointing up)
- Gray triangle at bottom (layered effect)
- Clean, modern, professional aesthetic

## Usage in Website

### Header
```jsx
<Image 
  src="/assets/ark-logo.svg" 
  alt="Ark Technologies" 
  width={140} 
  height={48}
  priority
/>
```

### Footer
```jsx
<Image 
  src="/assets/ark-logo.svg" 
  alt="Ark Technologies" 
  width={120} 
  height={40}
/>
```

### Favicon
```html
<link rel="icon" href="/assets/ark-logo.svg" type="image/svg+xml">
```

## Clear Space
- Maintain minimum clear space around logo equal to 20% of logo width
- Do not place logo on busy backgrounds without sufficient contrast

## Don'ts
- ❌ Don't change the logo colors
- ❌ Don't distort or stretch the logo
- ❌ Don't add effects (shadows, glows, etc.)
- ❌ Don't rotate the logo
- ❌ Don't place on backgrounds that reduce legibility

## Approved Backgrounds
- ✅ White (#FFFFFF) - Primary use
- ✅ Light gray (#F9FAFB) - Alternate sections
- ✅ Very dark backgrounds (with white circle version if needed)

