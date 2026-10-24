# Project

CRITÉRIO is a modern editorial website and a showcase of an AI agent’s end-to-end software delivery workflow: taking work from the backlog through design-led implementation and automated validation to deployment-ready delivery. It is built with Next.js, TypeScript, and Sass.

## Stack

- Next.js App Router
- React
- TypeScript
- Sass / SCSS Modules
- ESLint
- Prettier
- Husky
- lint-staged
- Jest
- React Testing Library
- Cypress
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
npm run typecheck
npm run typecheck:e2e
npm test
npm run test:watch
npm run test:coverage
npm run test:e2e
npm run cypress:open
npm run cypress:run
```

## Testing

Jest and React Testing Library cover component and page behavior. Run `npm test` for the suite or `npm run test:coverage` for a coverage report.

Cypress covers end-to-end journeys. `npm run test:e2e` starts the Next.js development server and runs the browser tests. To use the interactive Cypress runner, start the app with `npm run dev` in one terminal, then run `npm run cypress:open` in another.
