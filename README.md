# MDVS Agency - Official Website

Elite Software Development & IT Outstaffing Services

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties (Liquid Glass Design System)
- **Icons**: React Icons
- **Code Quality**: ESLint + Prettier

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
/src
├── /app                # Next.js App Router pages
│   ├── page.tsx       # Homepage with Hero, MetricsBar, Services, CTA
│   ├── layout.tsx     # Root layout with Header & Footer
│   └── /test-phase1   # Phase 1 components test page
├── /components         # Reusable components
│   ├── /glass         # Liquid Glass atoms (Phase 1 ✅)
│   │   ├── GlassCard.tsx           # Base glass card wrapper
│   │   ├── LiquidGlassButton.tsx   # Animated glass button
│   │   ├── GlassInput.tsx          # Glass input/textarea
│   │   ├── GlassTag.tsx            # Glass badges/tags
│   │   └── GlassIcon.tsx           # Glass icon wrapper
│   ├── /navigation    # Navigation components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── /layout        # Layout components (Phase 1 ✅)
│   │   └── PageHeader.tsx          # Reusable page hero
│   └── /sections      # Section components
│       └── MetricCard.tsx          # Animated metric display
├── /styles            # Global styles & design system
│   ├── variables.css  # CSS variables & design tokens
│   ├── glass-system.css
│   ├── typography.css
│   └── animations.css
├── /lib               # Utility functions
├── /data              # Static data & content
├── /types             # TypeScript type definitions
└── /hooks             # Custom React hooks
```

## Development Guidelines

- Follow TypeScript strict mode
- Use functional components with hooks
- Follow Prettier formatting rules
- Keep components small and reusable
- Write semantic HTML
- Optimize for performance and accessibility

## Design System

This project implements the **Liquid Glass Design System** inspired by macOS Tahoe 26, featuring:

- Translucent glass morphism effects with 4-layer structure
- Dark theme with dual color system:
  - **Primary**: Yellow (#F4D03F) - brand accent
  - **Secondary**: Purple (#9B59B6) - secondary accent
- Backdrop blur and distortion effects
- Smooth animations and transitions
- Animated counters and interactive elements

### ✅ Phase 1 Components (Foundation)

**Atoms:**
- **GlassCard** - Base glass wrapper with mouse tracking
- **LiquidGlassButton** - Animated button (3 variants, 3 sizes)
- **GlassInput** - Form inputs with glass effect
- **GlassTag** - Badges and tags (4 variants)
- **GlassIcon** - Icon wrapper with glass background

**Molecules:**
- **MetricCard** - Animated metric display with counter

**Layout:**
- **PageHeader** - Reusable page hero with breadcrumbs (3 background variants)
- **Header** - Fixed navigation with mobile menu
- **Footer** - Site footer with links

View all Phase 1 components: `http://localhost:3000/test-phase1`

---

**MDVS Agency** © 2014-2025
# mdvs_glass
