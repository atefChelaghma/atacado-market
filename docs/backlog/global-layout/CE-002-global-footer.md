# CE-002 — Implement CRITÉRIO Global Footer

**Type:** Frontend implementation  
**Priority:** High  
**Status:** Ready for development

## 1. Objective

Implement a reusable, responsive global footer for CRITÉRIO, following the approved footer screenshot at `docs/design/footer-reference.png` or the existing equivalent design asset in the repository.

The footer must match the reference's minimalist editorial style, typography, spacing, colors, layout, and information hierarchy.

Before implementation, inspect the repository and confirm the actual location of the reference image. The screenshot provided in the task is the visual source of truth.

## 2. Design reference

The footer contains two primary regions:

### Region A — Main footer

A four-column desktop layout.

**Column 1: Brand and description**

- Brand name: CRITÉRIO.
- Description:

  "Publicação editorial brasileira dedicada a testes rigorosos, avaliações independentes e vereditos transparentes sobre bens de consumo. Ajudamos você a fazer escolhas conscientes e duráveis."

- Social and feed icons underneath the description:
  - Instagram
  - YouTube
  - RSS feed

**Column 2: Categorias**

- Café e Cozinha
- Eletrônicos e Áudio
- Casa Inteligente
- Pets e Cuidados
- Escritório e Ergonomia

**Column 3: Transparência**

- Metodologia de Testes
- Código Editorial
- Transparência e Afiliados
- Fale com a Redação

**Column 4: Termos**

- Política de Privacidade
- Termos de Uso
- Política de Correções
- Sala de Imprensa

Each column heading must be visually distinct from its links using the reference typography and hierarchy.

### Region B — Legal footer

A thin horizontal divider separates the main footer from the legal information.

Left side:

"© 2024 CRITÉRIO Editorial Ltda. Todos os direitos reservados. Avaliações independentes para o consumidor brasileiro. Transparência editorial: Ao comprar pelos links indicados, podemos receber comissões sem qualquer custo adicional para você."

Right side:

"São Paulo, Brasil"

Keep the text readable, understated, and aligned with the screenshot. Preserve the supplied content as written.

## 3. Technology requirements

- Next.js App Router.
- React and TypeScript.
- SCSS Modules.
- Semantic HTML.
- Responsive design.
- Reusable component architecture.
- Accessible navigation and social links.

Do not use Tailwind CSS or introduce another styling framework.

### Icon library

You may install `lucide-react` if no suitable icon library is already installed.

Use the closest appropriate icons for Instagram, YouTube, and RSS. If the installed library does not provide the exact Instagram or YouTube brand logos, use a suitable existing brand-icon library or lightweight inline SVGs. Do not use unrelated generic icons as substitutes for recognizable brand logos.

Keep icons small, visually consistent, and similar in weight to the screenshot.

## 4. Component architecture

Inspect the existing application before choosing file locations.

Implement a reusable `Footer` component with its own SCSS Module, following the existing project conventions.

Suggested organization, subject to the actual repository structure:

- `src/components/layout/Footer.tsx`
- `src/components/layout/Footer.module.scss`

Keep navigation data in a typed configuration or a clearly structured constant when that improves maintainability.

Use Next.js `Link` for internal navigation. Do not use plain `<a href>` for internal routes.

External social links may use ordinary anchor elements with appropriate security attributes when opening a new tab.

Integrate the footer into the shared root layout so it appears consistently across the website. Avoid rendering duplicate footers on individual pages.

## 5. Visual specifications

Use the reference image to guide exact visual decisions.

- Warm, off-white background.
- Dark, restrained brand typography.
- Muted gray descriptive text.
- Small uppercase column headings.
- Compact, understated navigation links.
- Generous horizontal spacing on desktop.
- A thin, subtle divider above the legal region.
- Minimal borders and decoration.
- No cards, shadows, gradients, or unnecessary visual effects.
- Consistent horizontal page padding.
- Footer typography and spacing that feel editorial rather than promotional.

Use existing design tokens and fonts if available. Otherwise, derive sensible SCSS variables from the reference and existing website styles.

Do not hardcode desktop dimensions that cause horizontal overflow on smaller screens.

## 6. Responsive behavior

### Desktop

- Display four columns in the main footer.
- Brand and description occupy the widest column.
- Navigation columns align consistently.
- Legal information uses a two-sided layout.

### Tablet

- Adapt the grid to available space.
- Preserve logical reading order.
- Prevent text collisions and overly narrow columns.

### Mobile

- Stack or reorganize the footer columns into a compact, readable layout.
- Preserve the order: brand, categories, transparency, terms, legal information.
- Allow legal text to wrap naturally.
- Stack the company registration information when necessary.
- Ensure links and icons have comfortable touch targets.
- Prevent horizontal scrolling.

Use responsive SCSS media queries rather than duplicating the footer markup.

## 7. Accessibility

- Use a semantic `<footer>` landmark.
- Use appropriately labelled navigation regions.
- Keep heading hierarchy logical.
- Give icon-only social links meaningful accessible names.
- Mark decorative icons as hidden from assistive technologies.
- Ensure keyboard focus is visible.
- Maintain sufficient text contrast.
- Provide meaningful accessible labels for the RSS feed and external links.

Do not rely on icons alone to communicate link destinations to assistive technologies.

## 8. Functional requirements

- All navigation links must point to valid existing routes when available.
- Inspect the current routing structure before deciding destinations.
- Do not invent routes and leave them broken.
- If a destination has not been implemented, use the project's existing conventions for planned routes or document the missing destination clearly.
- Social links must use configured URLs if they exist.
- Do not invent official social media accounts.
- The RSS link should use an existing feed endpoint if available. Otherwise, document the expected endpoint and keep its URL configurable.
- Avoid unnecessary JavaScript and client-side state. The footer should preferably be a Server Component.

## 9. Implementation workflow

1. Read `AGENTS.md` and the relevant project workflow documentation.
2. Read the relevant skills under `docs/skills/`, especially frontend implementation, UI/UX design, accessibility review, testing quality, and code review.
3. Inspect the screenshot and existing global layout.
4. Inspect existing design tokens, fonts, icons, routes, and component conventions.
5. Implement the footer and its SCSS Module.
6. Integrate it into the shared layout.
7. Run the available lint, type-check, test, and production-build commands.
8. Review the Git diff and check for broken links, TypeScript errors, and styling regressions.
9. If browser tooling is available, inspect desktop, tablet, and mobile rendering and correct visible discrepancies.

Preserve unrelated user changes and existing functionality.

## 10. Acceptance criteria

- [ ] Footer closely matches the approved screenshot.
- [ ] Four-column desktop layout is implemented.
- [ ] Brand description and all navigation labels match the specified content.
- [ ] Social and RSS icons are recognizable and accessible.
- [ ] Legal section contains the supplied copyright, affiliate disclosure, and company registration text.
- [ ] Responsive layouts work on desktop, tablet, and mobile.
- [ ] SCSS Modules are used; Tailwind is not introduced.
- [ ] Internal navigation uses `next/link`.
- [ ] Footer is integrated once in the global layout.
- [ ] No invented social accounts or knowingly broken routes.
- [ ] Available validation commands have been executed and results reported.
- [ ] Final changes have been reviewed.

## 11. Final report

Report the files created or changed, icon-library decisions, route destinations, responsive behavior, validation results, and any unresolved links or implementation limitations.
