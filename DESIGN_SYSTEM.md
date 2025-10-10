# Design System Guidelines

## Overview
This document provides comprehensive instructions for AI assistants on how to properly use and maintain the design system for Alvinnanda Dary's portfolio project.

## Design System Architecture

### 1. File Structure & Locations

#### Primary Configuration Files:
- **Tailwind Config**: `/tailwind.config.js`
- **Global Styles**: `/src/app.css`
- **CSS Variables**: `/src/App.svelte` (global styles section)
- **Components**: `/src/components/`

#### Design Token Hierarchy:
```
Design System
├── Tailwind Config (Base colors)
├── CSS Variables (App-level tokens)
├── Global Styles (Typography, utilities)
└── Component Styles (Local patterns)
```

---

## 2. Color System

### Primary Color Tokens
```css
/* CSS Variables (src/App.svelte) */
--primary-color: #db2777    /* Pink */
--secondary-color: #1f2937  /* Dark Gray */
--accent-color: #9d174d     /* Dark Pink */
```

```js
/* Tailwind Config */
colors: {
  primary: '#3498db',     /* Blue */
  secondary: '#2c3e50',   /* Dark Blue-Gray */
  accent: '#e74c3c',      /* Red */
}
```

### Color Usage Guidelines

#### Gradient Patterns (ALWAYS use these combinations):
```css
/* Headers & Titles */
bg-gradient-to-r from-pink-600 to-purple-600

/* Interactive Elements */
bg-gradient-to-r from-blue-600 to-purple-600

/* Backgrounds */
bg-gradient-to-b from-gray-50 to-white
bg-gradient-to-b from-white to-purple-50

/* Cards & Components */
bg-gradient-to-r from-blue-50 to-purple-50
```

#### Text Colors:
- **Primary Text**: `text-gray-800`, `text-gray-700`
- **Secondary Text**: `text-gray-600`, `text-gray-500`
- **Gradient Text**: Use `bg-clip-text text-transparent` with gradients

---

## 3. Typography System

### Font Configuration
- **Primary Font**: Poppins (300, 400, 600, 700)
- **Import**: Already loaded in `src/app.css`

### Typography Scale
```css
/* Headers */
text-5xl lg:text-6xl  /* Hero titles */
text-3xl md:text-4xl  /* Section titles */
text-xl md:text-2xl   /* Subsection titles */
text-lg md:text-xl    /* Card titles */

/* Body Text */
text-base md:text-lg  /* Primary content */
text-sm md:text-base  /* Secondary content */
text-xs md:text-sm    /* Small text, tags */
```

### Font Weights
- `font-light` (300): Rare use
- `font-normal` (400): Body text
- `font-semibold` (600): Important text
- `font-bold` (700): Headers, titles

---

## 4. Spacing System

### Consistent Spacing Patterns
```css
/* Padding */
p-4 md:p-6      /* Small components */
p-6 md:p-8      /* Medium components */
p-8 md:p-10     /* Large components */

/* Margins */
mb-4 md:mb-6    /* Small gaps */
mb-8 md:mb-12   /* Medium gaps */
mb-12 md:mb-16  /* Large gaps */
py-12 md:py-24  /* Section padding */

/* Gaps */
gap-2           /* Small items */
gap-4           /* Medium items */
gap-8           /* Large items */
```

---

## 5. Component Patterns

### Card Component Pattern
```svelte
<!-- Standard Card -->
<div class="card backdrop-blur-sm bg-white/50 rounded-xl shadow-xl hover:shadow-2xl 
            transform hover:-translate-y-2 transition-all duration-300">
  <!-- Content -->
</div>

<!-- Alternative Card -->
<div class="card p-8 hover:transform hover:scale-105 transition-all duration-300">
  <!-- Content -->
</div>
```

### Button/Interactive Elements
```svelte
<!-- Primary Button Style -->
<a class="px-8 py-4 bg-white/95 text-gray-800 rounded-full font-medium 
         hover:bg-pink-600 hover:text-white transition-all duration-300 
         transform hover:scale-110 backdrop-blur-sm shadow-lg">
  Button Text
</a>

<!-- Tag/Chip Style -->
<span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 
             text-gray-700 rounded-lg text-sm font-medium border border-gray-200
             hover:from-blue-100 hover:to-purple-100 transition-all duration-200">
  Tag Text
</span>
```

### Section Headers
```svelte
<h2 class="section-title text-4xl font-bold text-center mb-16 
           bg-gradient-to-r from-pink-600 to-purple-600 
           bg-clip-text text-transparent">
  Section Title
</h2>
```

---

## 6. Animation Guidelines

### Standard Transitions
```css
/* Hover Effects */
transition-all duration-300    /* Standard */
transition-all duration-200    /* Fast interactions */
transition-all duration-500    /* Slow/dramatic */

/* Transform Patterns */
hover:scale-105               /* Subtle scale */
hover:scale-110               /* Medium scale */
hover:-translate-y-2          /* Lift effect */
transform group-hover:scale-110  /* Group hover */
```

### Svelte Transitions
```svelte
<!-- Entry Animations -->
in:fly="{{ y: 50, duration: 500, delay: i * 200 }}"
in:fade="{{ duration: 1000 }}"
in:fly="{{ x: -50, duration: 1000 }}"

<!-- Staggered Animations -->
{#each items as item, i}
  <div in:fly="{{ y: 50, duration: 500, delay: i * 200 }}">
    <!-- Delay increases for each item -->
  </div>
{/each}
```

---

## 7. Responsive Patterns

### Breakpoint Usage
```css
/* Mobile First Approach */
class="text-3xl md:text-4xl"           /* Typography */
class="grid-cols-1 md:grid-cols-3"     /* Layout */
class="p-4 md:p-8"                     /* Spacing */
class="space-y-4 md:space-y-8"         /* Vertical spacing */
class="flex-col md:flex-row"           /* Direction */
```

### Grid Patterns
```css
/* Standard Layouts */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  /* 3-column */
grid-cols-1 md:grid-cols-2                 /* 2-column */
flex flex-col lg:flex-row                  /* Sidebar layout */
```

---

## 8. Implementation Guidelines for AI

### When Creating New Components:

1. **Always Check Existing Patterns First**
   - Look at similar components in `/src/components/`
   - Use consistent class combinations
   - Follow the established color and spacing patterns

2. **Color Usage Priority**:
   ```
   1st: Use established gradient patterns
   2nd: Use CSS variables (--primary-color, etc.)
   3rd: Use Tailwind colors (primary, secondary, accent)
   4th: Use specific Tailwind colors (pink-600, etc.)
   ```

3. **Required Classes for New Components**:
   ```css
   /* Minimum responsive classes */
   class="transition-all duration-300"  /* Always include */
   
   /* For interactive elements */
   class="hover:transform hover:scale-105"
   
   /* For cards */
   class="rounded-xl shadow-xl hover:shadow-2xl"
   
   /* For text elements */
   class="font-medium"  /* Minimum font weight */
   ```

4. **File Organization**:
   - Components go in `/src/components/`
   - Follow PascalCase naming: `ComponentName.svelte`
   - Import patterns should match existing components

### When Modifying Existing Components:

1. **Preserve Existing Patterns**:
   - Don't change working gradient combinations
   - Keep consistent spacing patterns
   - Maintain animation timing

2. **Class Order Convention**:
   ```css
   <!-- Layout → Spacing → Colors → Typography → Effects → States -->
   class="flex items-center gap-4 p-6 bg-white text-lg font-medium 
          rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
   ```

3. **When Adding New Styles**:
   - Check if similar pattern exists first
   - Use CSS variables when possible
   - Add to global styles if reusable
   - Document new patterns in this file

### Animation Implementation Rules:

1. **Svelte Transitions**:
   - Always include duration
   - Use staggered delays for lists
   - Prefer `fly` over `slide` for entry animations

2. **CSS Animations**:
   - Use `transform` over position changes
   - Include fallback for reduced motion
   - Keep durations under 500ms for interactions

---

## 9. Quality Assurance Checklist

Before implementing changes, verify:

- [ ] Colors match established gradient patterns
- [ ] Responsive classes are included
- [ ] Transitions are smooth (300ms standard)
- [ ] Typography scale is consistent
- [ ] Spacing follows the 4/8/12/16 pattern
- [ ] Components have proper hover states
- [ ] Accessibility is maintained (contrast, focus states)
- [ ] Mobile responsiveness is tested

---

## 10. Common Mistakes to Avoid

❌ **DON'T**:
- Mix different gradient patterns randomly
- Use arbitrary spacing values
- Forget responsive variants
- Skip transition classes
- Use colors outside the established palette
- Create one-off component styles

✅ **DO**:
- Follow established patterns consistently
- Use semantic color variables
- Include mobile-first responsive classes
- Add smooth transitions to all interactive elements
- Test on mobile viewport
- Reuse existing component patterns

---

## File Quick Reference

| File | Purpose | Key Elements |
|------|---------|--------------|
| `tailwind.config.js` | Base color tokens | primary, secondary, accent |
| `src/app.css` | Global utilities | Font imports, base styles |
| `src/App.svelte` | CSS variables & global styles | --primary-color, section-title |
| `src/components/Header.svelte` | Navigation patterns | Active states, mobile menu |
| `src/components/AboutMe.svelte` | Hero section patterns | Large typography, image layouts |
| `src/components/Skills.svelte` | Card grid patterns | Icon + text cards |
| `src/components/Projects.svelte` | Media card patterns | Image overlays, hover effects |
| `src/components/Experience.svelte` | Timeline patterns | Vertical layout, alternating sides |
| `src/components/Contact.svelte` | Form/contact patterns | Icon + text rows |

This design system prioritizes consistency, accessibility, and maintainability while providing flexibility for portfolio-specific needs.