# CE-003 — CRITÉRIO Homepage Hero & Category Navigation

**Type:** Frontend development  
**Priority:** High  
**Status:** Ready for development  
**Reference:** Approved homepage hero screenshot provided with this story

## 1. Objective

Implement the homepage hero section for CRITÉRIO, an independent Brazilian consumer product evaluation and editorial platform.

Reproduce the visual design shown in the reference image, including the editorial typography, introductory text, category badge, category navigation chips, spacing, colors, and bottom divider.

The result must feel like a premium editorial publication: minimalist, trustworthy, restrained, and typography-driven.

Do not redesign the reference or replace it with a generic landing-page hero.

## 2. Content and visual hierarchy

### A. Editorial badge

Display a compact badge above the main heading.

Text:

"JORNALISMO INVESTIGATIVO & CONSUMO RACIONAL"

Requirements:

- Small uppercase typography.
- Light neutral background.
- Subtle border or restrained styling consistent with the reference.
- Small muted terracotta-colored circular indicator before the text.
- Compact padding and spacing.

### B. Main headline

Use the exact Portuguese headline:

"Compre melhor. Escolha com critério e confiança."

Requirements:

- Prominent editorial serif typography.
- Large font size on desktop.
- Near-black text.
- Tight but readable line height.
- Natural line wrapping that closely matches the reference.
- Responsive font sizing without clipping or overflow.

### C. Supporting paragraph

Use this exact copy:

"Testamos, comparamos e selecionamos os melhores produtos disponíveis no Brasil para que você invista seu dinheiro sem arrependimentos ou falsas promessas de marketing."

Requirements:

- Muted gray text.
- Readable serif typography consistent with the editorial aesthetic.
- Comfortable line height.
- Constrained width to preserve the reference's text wrapping on desktop.
- Appropriate spacing beneath the headline.

### D. Category navigation

Below the introductory paragraph, render a compact horizontal navigation row.

Start with the label:

"Navegue por:"

Then render these six categories in the specified order:

1. Café & Cozinha
2. Tecnologia
3. Pets
4. Bem-estar
5. Casa Inteligente
6. Bebês

Each category should appear as a small, lightly bordered rectangular chip with a subtle background, compact padding, and an appropriate icon.

Use these icon concepts:

- Café & Cozinha: coffee cup.
- Tecnologia: laptop or computer.
- Pets: paw print.
- Bem-estar: leaf or wellness symbol.
- Casa Inteligente: house.
- Bebês: baby-related symbol.

Use `lucide-react` if already installed or install it if needed. Choose the closest appropriate icons available. Do not introduce a large icon library unnecessarily.

Keep the icons small and visually subordinate to the labels.

### E. Bottom divider

Add a thin, subtle horizontal divider beneath the category navigation.

Match the reference's spacing, color, and alignment. The divider should integrate with the existing page layout rather than create an isolated card or panel.

## 3. Technology and architecture

Follow the repository's existing conventions.

- Next.js App Router.
- React and TypeScript.
- SCSS Modules.
- Semantic HTML.
- Responsive implementation.
- Reusable components where appropriate.

Do not use Tailwind CSS or introduce another styling framework.

Suggested component structure, subject to the actual repository architecture:

- `src/components/home/Hero.tsx`
- `src/components/home/Hero.module.scss`

If the project already has a suitable hero component, improve and reuse it instead of creating a duplicate.

Keep styling in the SCSS Module. Reuse existing fonts, color variables, spacing tokens, and global styles where appropriate.

## 4. Design fidelity

Inspect the actual screenshot before implementation.

Match these visual characteristics:

- Warm off-white page background.
- Minimalist editorial composition.
- Restrained neutral palette.
- Dark serif headline.
- Smaller muted supporting text.
- Compact uppercase badge.
- Small category icons and bordered chips.
- Generous whitespace without excessive vertical padding.
- Consistent horizontal alignment.
- Thin bottom divider.

The hero should occupy the available content width without feeling stretched. Keep the headline and paragraph widths intentional.

Avoid unnecessary gradients, shadows, rounded cards, oversized buttons, decorative illustrations, and animations. Do not add content that is absent from the reference.

Inspect the project's existing font configuration and use the closest suitable available serif font for the headline and paragraph. Do not add a new font dependency unless necessary.

## 5. Responsive behavior

### Desktop

- Preserve the screenshot's horizontal composition.
- Keep the badge, headline, paragraph, and category navigation aligned.
- Display all six category chips in one row when space permits.
- Preserve the compact vertical spacing.

### Tablet

- Adjust headline size and content widths.
- Allow category chips to wrap naturally if necessary.
- Prevent overlap between the label and category chips.

### Mobile

- Reduce headline font size while retaining its editorial impact.
- Allow the paragraph to occupy the available width.
- Keep category chips usable without horizontal page overflow.
- Allow the category navigation to wrap across multiple lines or use another accessible responsive arrangement consistent with the design.
- Keep spacing compact and legible.
- Ensure the divider spans the intended content area.

Use SCSS media queries and the existing responsive conventions.

## 6. Functional requirements

- Category chips must be actual navigation links, not decorative elements.
- Inspect the existing route structure before assigning destinations.
- Use `next/link` for internal navigation.
- Do not invent routes that do not exist.
- If category pages have not been implemented, document the missing destinations and follow the existing project's routing conventions.
- Ensure the complete chip, including its text, is clickable.
- Preserve visible keyboard focus indicators.
- Do not add client-side JavaScript unless genuinely required.

## 7. Accessibility

- Use a meaningful semantic section or header structure.
- Maintain a logical heading hierarchy, with the main page heading represented by an appropriate `<h1>`.
- Ensure category links have meaningful accessible names.
- Hide purely decorative icons from assistive technologies.
- Provide sufficient text contrast.
- Preserve visible keyboard focus.
- Ensure responsive text remains readable and does not clip.

## 8. Implementation workflow

1. Read `AGENTS.md` and `docs/AGENT-WORKFLOW.md` when available.
2. Read the relevant skills:
   - `docs/skills/project-discovery/SKILL.md`
   - `docs/skills/ui-ux-design/SKILL.md`
   - `docs/skills/frontend-implementation/SKILL.md`
   - `docs/skills/accessibility-review/SKILL.md`
   - `docs/skills/testing-quality/SKILL.md`
   - `docs/skills/code-review/SKILL.md`
3. Inspect the provided screenshot and existing homepage implementation.
4. Inspect the existing fonts, design tokens, global styles, routing, and icon dependencies.
5. Implement the hero section and category navigation.
6. Integrate it into the homepage without breaking existing sections or the global footer.
7. Run the available lint, type-check, test, and production-build commands.
8. Inspect the final diff for regressions and unrelated changes.
9. If browser tooling is available, compare the rendered result against the reference at desktop and mobile sizes.

Preserve unrelated user changes. Do not stop after writing an implementation plan; proceed with the work unless a genuinely blocking decision requires clarification.

## 9. Acceptance criteria

- [ ] The hero visually matches the supplied reference.
- [ ] Badge text and headline are exact.
- [ ] Supporting paragraph matches the specified copy.
- [ ] All six category labels appear in the correct order.
- [ ] Category chips use appropriate, consistent icons.
- [ ] Typography, spacing, colors, and divider match the editorial style.
- [ ] Desktop layout closely follows the reference.
- [ ] Tablet and mobile layouts work without horizontal overflow.
- [ ] Category chips use valid navigation destinations.
- [ ] Internal navigation uses `next/link`.
- [ ] SCSS Modules are used; Tailwind is not introduced.
- [ ] Existing homepage components and footer remain intact.
- [ ] Available validation commands have been executed and their results reported.
- [ ] Final changes have been reviewed.

## 10. Final report

Report:

- Files created or modified.
- Fonts and icons used.
- Category navigation destinations.
- Responsive design decisions.
- Validation commands and actual results.
- Any remaining issues or missing routes.
