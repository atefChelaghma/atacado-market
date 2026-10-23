---
name: frontend-implementation
description: Use when implementing or refactoring frontend features in a Next.js application using TypeScript and Sass/SCSS, following feature-based architecture with pragmatic Clean Architecture principles and Jest/Cypress testing.
---

# Frontend Implementation Skill

## Required stack

- Framework: Next.js, following the existing project's router and conventions.
- Language: TypeScript with strict type checking where supported by the project.
- Styling: Sass/SCSS; prefer CSS Modules (`*.module.scss`) for component-scoped styles.
- Unit/component testing: Jest.
- End-to-end testing: Cypress.
- Architecture: feature-based modular monolith, applying Clean Architecture principles where they add value.
- Do not introduce Tailwind, CSS-in-JS, Vitest, Playwright, microservices, or competing tools unless explicitly requested or justified by existing project constraints.

## Architecture principles

Use a **feature-based modular monolith**. Organize code around business capabilities, such as products, categories, reviews, buying guides, comparisons, search, and affiliate links.

Apply Clean Architecture pragmatically:

- **Presentation:** Next.js routes, page composition, React components, and Sass Modules.
- **Feature/application:** feature-specific UI, use cases, orchestration, validation, and application workflows.
- **Domain:** core business concepts, types, and rules that should not depend on Next.js, React, a database, or retailer APIs.
- **Infrastructure:** persistence, CMS clients, retailer integrations, analytics adapters, and external API implementations.

Dependency rules:

- Keep domain rules independent of framework and infrastructure details.
- Application/use-case code should depend on domain contracts rather than concrete external services where practical.
- Infrastructure implements contracts consumed by application code.
- Presentation calls application/feature functionality and should not contain complex business rules.
- Do not force every feature through every layer. For simple read-only UI, a smaller structure is acceptable.
- Avoid circular dependencies and avoid creating abstractions without a real use case.
- Start as one deployable application. Do not split into microservices without a demonstrated need.

## Suggested project structure

Adapt this to the existing repository; do not create every directory pre-emptively.

```text
src/
  app/                         # Next.js App Router routes and layouts
    page.tsx
    categorias/
    produtos/
    guias/
    avaliacoes/
    comparativos/
  components/
    ui/                        # Shared primitive UI components
    layout/                     # Header, footer, navigation
    editorial/                  # Reusable editorial presentation
  features/
    products/
      components/
      services/
      types/
      utils/
    categories/
    reviews/
    buying-guides/
    comparisons/
    search/
    affiliate-links/
  domain/
    product/
    editorial/
    affiliate/
  application/                 # Cross-feature use cases when justified
  infrastructure/
    cms/
    database/
    retailers/
    analytics/
  lib/
  styles/
    tokens.scss
    globals.scss
  types/
```

The exact folder names can follow existing conventions. Keep feature-specific components and logic close to their feature; put genuinely shared UI in `components/`. Do not duplicate types or business rules across features.

## Workflow

1. Inspect the repository, package scripts, framework and dependency versions, folder structure, router, lint rules, styling approach, existing components, and tests.
2. Read applicable project instructions such as `AGENTS.md`, `CLAUDE.md`, and `README.md`.
3. Identify whether the project uses Next.js App Router or Pages Router; follow the existing approach rather than mixing conventions.
4. Identify the smallest implementation that satisfies the request. State assumptions when requirements are unclear.
5. Identify the relevant feature, its boundaries, and the data/control flow before editing.
6. Keep presentation, business rules, and external integrations separate according to the architecture principles above.
7. Build focused, typed, reusable components and follow the existing design system.
8. Handle loading, error, empty, and success states when relevant.
9. Implement responsive behavior, semantic HTML, accessible names, keyboard interactions, visible focus states, and reduced-motion behavior where appropriate.
10. Add or update Jest tests for business logic and component behavior, and Cypress tests for important end-to-end user journeys.
11. Run the available lint, typecheck, Jest, Cypress, and production build commands as appropriate. Inspect `package.json` before assuming script names.
12. Report files changed, architectural decisions, commands actually run and their results, and any remaining risks.

## Next.js guidance

- Respect the installed Next.js version and routing conventions.
- In the App Router, prefer Server Components by default. Add `"use client"` only when client-side state, effects, event handlers, or browser APIs are needed.
- Keep server-only code and secrets out of client bundles. Never expose secrets through `NEXT_PUBLIC_*` variables.
- Follow established data-fetching, caching, and error-handling patterns.
- Use Next.js image, font, and metadata features when appropriate.
- Avoid unnecessary client state, effects, hydration mismatches, and duplicated sources of truth.

## React / TypeScript guidance

- Prefer explicit, useful types and safe narrowing; avoid `any` unless justified.
- Keep state minimal and derive values where possible.
- Avoid unnecessary effects and duplicated state.
- Use stable keys for rendered collections.
- Handle optional and missing data explicitly.
- Do not suppress TypeScript or lint errors without explaining why.
- Follow project naming, import, routing, data-fetching, and folder conventions.

## Sass / SCSS guidance

- Prefer CSS Modules (`*.module.scss`) for component-scoped styles.
- Keep global styles limited to resets, fonts, design tokens, and truly global rules.
- Reuse Sass variables, mixins, and design tokens when they reduce duplication and improve consistency.
- Prefer mobile-first responsive styles where appropriate.
- Avoid deep nesting, broad selectors, duplicated declarations, and unexplained `!important`.
- Respect `prefers-reduced-motion` for non-essential animation.
- Do not introduce a competing styling system without approval.

## Testing guidance

- Use Jest for unit and component tests.
- Use Cypress for end-to-end tests of critical user journeys.
- Follow the project's existing test utilities, naming, configuration, and scripts.
- Test observable behavior and important edge cases; avoid brittle implementation-detail assertions.
- Never weaken meaningful tests solely to make them pass.

## Guardrails

- Never claim tests or builds passed unless they were executed successfully.
- Do not overwrite unrelated user changes.
- Avoid broad refactors for a small feature.
- Do not add secrets, credentials, or private configuration to source control.
- Do not upgrade dependencies unless required and approved.
- Prefer the simplest architecture that preserves clear boundaries; do not over-engineer small features.
