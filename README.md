# Project

Modern Next.js application built with TypeScript and Sass.

## Stack

- Next.js App Router
- React
- TypeScript
- Sass / SCSS Modules
- ESLint
- Prettier
- Husky
- lint-staged
- GSAP
- Lenis

## Styling conventions

- Use `src/app/globals.scss` for resets, global tokens, and truly global styles.
- Prefer `*.module.scss` for component-scoped styles.
- Keep component styles close to their component.
- Use Sass variables, maps, mixins, and functions when they improve reuse.
- Avoid global selectors for component-specific styling.
- Do not use Tailwind CSS.

## Architecture

```text
src/
├── app/                # Next.js routing and global styles
├── components/         # Shared UI components
│   ├── ui/             # Reusable UI/design-system components
│   └── layout/         # Header, Footer, etc.
├── features/           # Feature-specific modules
├── animations/         # GSAP / Lenis animations
│   ├── scroll/
│   ├── parallax/
│   └── transitions/
├── hooks/              # Shared React hooks
├── services/           # API/external services
├── lib/                # Utilities
├── config/             # Application configuration
└── types/              # Shared TypeScript types

public/
├── images/
├── videos/
├── fonts/
└── icons/
```

## Commands

```bash
npm run dev
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run build
```
