# MDVS Agency - Official Website

Elite Software Development & IT Outstaffing Services

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties (Liquid Glass Design System)
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
├── /components         # Reusable components
│   ├── /ui            # Base UI components
│   ├── /glass         # Liquid Glass components
│   ├── /layout        # Layout components
│   ├── /sections      # Homepage sections
│   └── /widgets       # Interactive widgets
├── /styles            # Global styles & design system
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

- Translucent glass morphism effects
- Dark theme with yellow (#F4D03F) brand accents
- Backdrop blur and distortion effects
- Smooth animations and transitions

---

**MDVS Agency** © 2014-2025
