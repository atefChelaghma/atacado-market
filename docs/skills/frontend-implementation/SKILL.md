---
name: frontend-implementation
description: Use when implementing or refactoring frontend features in a Next.js application using TypeScript and Sass/SCSS, following feature-based architecture, pragmatic Clean Architecture principles, separation of components/data/types/styles, code-review requirements, and Jest/Cypress testing.
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

### Dependency rules

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
    layout/
      header/                  # Header component, styles, data and types
      footer/                  # Footer component, styles, data and types
    editorial/                 # Reusable editorial presentation

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

For layout components, prefer separate feature folders when appropriate. For example:

```text
components/layout/
  header/
    site-header.tsx
    site-header.module.scss
    site-header.data.ts
    site-header.types.ts
  footer/
    site-footer.tsx
    site-footer.module.scss
    site-footer.data.ts
    site-footer.types.ts
```

This is an organizational example, not a requirement to create every file. Create data and type files when they provide a clear benefit or are required by the code-review skill.

## Code-review alignment

Frontend implementation must remain aligned with `docs/skills/code-review/SKILL.md`.

Before significant implementation or refactoring:

1. Read the code-review skill when available.
2. Apply its architecture, maintainability, naming, separation-of-concerns, and testing requirements during implementation.
3. Review the completed changes against that skill.
4. Fix meaningful violations rather than knowingly introducing or leaving them unresolved.

If the code-review skill is missing, continue with the requirements in this skill and report that it could not be loaded. Do not invent its contents.

### Component separation

Component files should primarily focus on rendering and presentation behavior.

- Avoid placing substantial static configuration arrays, navigation data, or unrelated business logic inside component files.
- Extract reusable or independently maintained configuration into dedicated data files within the relevant feature.
- Use descriptive names such as `site-header.data.ts` and `site-footer.data.ts`.
- Keep data modules separate from JSX and presentation logic.
- Do not extract trivial constants when doing so would add unnecessary complexity.

### Type separation

- Move meaningful, reusable, or complex type definitions into appropriate type modules when doing so improves maintainability.
- Use descriptive names such as `site-header.types.ts` and `site-footer.types.ts`.
- Use `import type` for type-only imports.
- Avoid duplicated types and inconsistent contracts.
- Keep domain types independent of UI frameworks where practical.
- Do not create unnecessary type files for trivial one-off values unless an explicit project or code-review requirement calls for them.

### Styles separation

- Keep component-specific styles in their corresponding SCSS Modules.
- Keep global styles limited to resets, fonts, design tokens, and genuinely global rules.
- Keep component, data, types, and styles grouped coherently within their feature folders.
- Update imports and consumers whenever files are moved.
- Preserve behavior, accessibility, responsive styling, and visual fidelity during refactoring.

### Review remediation

When a meaningful violation is identified and the task includes implementation or refactoring:

1. Identify the issue and its maintainability impact.
2. Refactor the affected code.
3. Update imports, consumers, and affected tests.
4. Preserve existing functionality unless a defect requires a behavior change.
5. Run relevant available validation commands.
6. Inspect the final diff for regressions and unrelated changes.

If the user requests analysis-only review, report findings without modifying files.

## Workflow

1. Inspect the repository, package scripts, framework and dependency versions, folder structure, router, lint rules, styling approach, existing components, and tests.
2. Read applicable project instructions such as `AGENTS.md`, `CLAUDE.md`, and `README.md`.
3. Read relevant project skills, including frontend implementation, code review, UI/UX design, accessibility, and testing, when available.
4. Identify whether the project uses Next.js App Router or Pages Router; follow the existing approach rather than mixing conventions.
5. Identify the smallest implementation that satisfies the request. State assumptions when requirements are unclear.
6. Identify the relevant feature, its boundaries, and the data/control flow before editing.
7. Separate presentation, configuration data, meaningful types, business rules, and external integrations where appropriate.
8. Build focused, typed, reusable components and follow the existing design system.
9. Handle loading, error, empty, and success states when relevant.
10. Implement responsive behavior, semantic HTML, accessible names, keyboard interactions, visible focus states, and reduced-motion behavior where appropriate.
11. Add or update Jest tests for business logic and component behavior, and Cypress tests for important end-to-end user journeys.
12. Review the implementation against the code-review skill and resolve meaningful violations.
13. Run available lint, type-check, Jest, Cypress, and production-build commands as appropriate. Inspect `package.json` before assuming script names.
14. Report files changed, architectural decisions, commands actually run and their results, and any remaining risks.

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
- Avoid embedding substantial configuration or business rules directly inside component files.
- Extract abstractions only when they improve clarity, reuse, or maintainability.

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
- Update affected tests when components, data contracts, or file locations change.
- Never weaken meaningful tests solely to make them pass.

## Guardrails

- Never claim tests or builds passed unless they were executed successfully.
- Do not overwrite unrelated user changes.
- Avoid broad refactors for a small feature unless needed to correct a meaningful architectural violation.
- Do not add secrets, credentials, or private configuration to source control.
- Do not upgrade dependencies unless required and approved.
- Prefer the simplest architecture that preserves clear boundaries; do not over-engineer small features.
- Do not create empty files or unnecessary abstractions just to satisfy a suggested directory structure.

## Next.js Navigation Rules

In internal navigation and routing within Next.js applications, always use **`Link` from `next/link`**.

- Never use plain HTML `<a href="...">` for internal routes.
- Use `<Link href="/path">...</Link>` for route-based navigation.
- Use `<Link href="/">...</Link>` for homepage navigation.
- Verify route destinations before introducing or changing links.

Plain `<a>` elements are appropriate for external URLs, email links (`mailto:`), telephone links (`tel:`), and other cases where Next.js `Link` is not applicable.

When replacing plain anchors with `<Link>`:

- Preserve existing class names, accessibility attributes, and link behavior.
- Use the full route path.
- Follow existing trailing-slash conventions.
- Preserve meaningful accessible names and visible focus states.

Example:

```tsx
import Link from 'next/link';

<Link href="/" className="content-header-brand" aria-label="CRITÉRIO — voltar para o início">
  CRITÉRIO
</Link>;
```

Before implementing a routing feature, inspect existing TSX/JSX files for plain `<a>` elements that link to internal paths and replace them with `Link` components where appropriate.

Do not indiscriminately replace external links, email links, telephone links, or anchors used for valid in-page navigation such as `#categorias`. Preserve valid behavior and accessibility when making these changes.

Do not claim that using `Link` alone guarantees correct SEO, canonical URLs, or eliminates hydration mismatches. Validate those concerns according to the actual implementation.

## Definition of done

- The requested functionality is implemented.
- The existing architecture and design conventions are followed.
- Meaningful data and type definitions are separated from component rendering where appropriate.
- The code-review skill has been applied when available.
- Internal navigation follows the rules above.
- Responsive behavior and accessibility are considered.
- Relevant tests and validation commands have been executed.
- The final report distinguishes verified results from untested assumptions and identifies remaining issues.
