# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RideNote is a marketing website for a motorcycle/cycling app built with Astro, Tailwind CSS, and TypeScript. The site is a single-page application with smooth scroll navigation between sections and is optimized for performance and accessibility.

## Development Commands

**Start development server:**
```bash
npm run dev
# or
pnpm dev
```

**Build the project:**
```bash
npm run build
# This runs astro check (type checking) then astro build
```

**Preview production build:**
```bash
npm run preview
```

**Type checking only:**
```bash
astro check
```

## Architecture

### Single Page Structure

The homepage (src/pages/index.astro) is the primary entry point and composes all major sections:
- Hero (with navigation overlay)
- Problem
- HowItWorks
- Features
- WhoItsFor
- FAQ
- FinalCTA
- Footer

### Navigation System

Navigation is implemented with three interconnected utilities:

1. **intersection-observer.ts** - Handles scroll-triggered animations on sections with IDs
2. **scroll-navigation.ts** - Manages smooth scrolling to anchor links with offset compensation for navigation height
3. **mobile-menu.ts** - Controls mobile menu toggle behavior

Navigation links and configuration are centralized in **src/constants/navigation.ts**. All navigation-related components use these constants to maintain consistency.

### Layout System

**src/layouts/Layout.astro** is the base layout that:
- Initializes scroll observers via client-side script
- Includes SEO meta tags (Open Graph, Twitter Card)
- Includes structured data (JSON-LD) for search engines
- Loads the Plus Jakarta Sans font family
- Sets up the black background theme

### Component Organization

Components are self-contained Astro files in src/components/ with inline scripts for interactivity. Common pattern:
```astro
---
// Server-side logic and imports
---
<!-- HTML structure -->
<script>
  // Client-side JavaScript
</script>
```

### Styling

- Tailwind CSS for all styling
- Black background with lime-400 accent color for CTAs
- Custom backdrop blur effects on navigation
- Responsive breakpoints: md (768px+) for desktop layouts

### Static Assets

All images are stored in public/images/ with organized subdirectories:
- `logos/` - Brand assets and favicons
- `heroes/` - Hero section backgrounds
- `features/` - Feature showcase images
- `mockups/` - Product mockups

Reference images with absolute paths: `/images/category/filename.png`

## Code Style

The project uses Prettier with these settings:
- Single quotes
- Semicolons required
- 2-space indentation
- 100-character line width
- ES5 trailing commas
- Always use arrow function parentheses

ESLint is configured with TypeScript support and warns on:
- Unused variables (unless prefixed with `_`)
- Explicit `any` types
- Variables that should be `const`

## TypeScript Configuration

Uses Astro's strict TypeScript config with JSX set to React mode for compatibility with Astro components.

## Key Implementation Details

### Scroll Behavior

The MOBILE_MENU_SCROLL_OFFSET constant (100px) compensates for the fixed navigation when scrolling to anchors. If you adjust navigation height, update this value.

### Intersection Observer

Sections with IDs automatically get the `animate-on-scroll` class when they enter the viewport. The observer is configured with:
- Threshold: 0.1 (10% visibility triggers)
- Root margin: -100px bottom offset

### Client-side Scripts

Astro components can include `<script>` tags that run on the client. These are automatically bundled and hydrated. The Layout component initializes global scroll observers, while individual components like Navigation initialize their own features.

## Supabase Integration

The project includes @supabase/supabase-js as a dependency, suggesting backend integration capabilities, though the marketing site itself is static.

## Additional Resources

The docs/ directory contains detailed reports on:
- Accessibility audit results
- Lighthouse performance scores
- Deployment readiness
- Implementation summaries
- Health and test reports
