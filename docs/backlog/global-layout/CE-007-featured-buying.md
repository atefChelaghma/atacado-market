# CE-007 — Featured Buying Guide Card Component

## Objective

Create a reusable, responsive **Featured Buying Guide Card** component for the CRITÉRIO website, following the supplied reference screenshot as closely as possible.

The card promotes an editorial buying guide, combining a large image, category label, title, description, update timestamp, and navigation link.

**Reference image:** `docs/design/featured-buying-guide.png`

## Requirements

### 1. Component architecture

Follow `AGENTS.md`, `docs/AGENT-WORKFLOW.md`, and `docs/skills/frontend-implementation/SKILL.md`.

Before implementation:

- Review the existing project structure and design conventions.
- Check whether reusable typography, spacing, link, image, or card components already exist.
- Follow the existing component and code organization patterns.

Create a dedicated component folder, for example:

`src/components/features/featured-buying-guide/`

Organize the implementation into separate files where appropriate:

- `FeaturedBuyingGuide.tsx` — component markup and rendering.
- `FeaturedBuyingGuide.module.scss` — component-specific styles.
- `featured-buying-guide.types.ts` — TypeScript interfaces or types.
- `featured-buying-guide.data.ts` — mock content, kept separate from JSX.
- `FeaturedBuyingGuide.test.tsx` — Jest unit tests.

Adapt the exact paths and naming to the existing repository conventions.

### 2. Visual design

Reproduce the supplied reference, prioritizing visual fidelity.

**Card layout**

- Vertical editorial card with a thin, subtle border.
- White background and restrained, premium editorial styling.
- Compact, portrait-oriented proportions similar to the reference.
- No unnecessary shadows, gradients, or decorative elements.

**Image section**

- Large, full-width image at the top of the card.
- Image fills its container with `object-fit: cover`.
- Preserve the reference's image proportions and crop.
- Overlay a small, white label near the bottom-left corner of the image: `9 Modelos Testados`.
- Ensure sufficient contrast between the overlay and the image.

**Content section**

- Small, muted category label: `Casa Inteligente & Pets`.
- Prominent serif heading, wrapping naturally across multiple lines:

  `Os Melhores Robôs Aspiradores para Quem Tem Animais de Estimação`

- Muted, readable description:

  `Escovas antiemaranhamento, filtros HEPA reais e algoritmos para desviar de imprevistos biológicos.`

- Thin horizontal divider separating the main content from the footer.

**Footer**

- A single horizontal row with content aligned at opposite ends.
- Left side: muted update label, `Atualizado há 5 dias`.
- Right side: terracotta/red text link, `Ler Guia →`.
- Keep the footer compact and vertically centered.

### 3. Responsive behavior

- Desktop: card should fit naturally into a multi-column editorial layout.
- Tablet: preserve a readable card width and comfortable spacing.
- Mobile: maintain the narrow portrait card proportions shown in the reference.
- Avoid horizontal overflow, clipped text, or fixed heights that cut off content.
- Allow the title and description to wrap naturally.
- Keep the footer aligned and readable at narrow widths.

### 4. Data and types

Keep editorial content in a dedicated data file rather than hardcoding it throughout the component.

Define a typed data model with fields such as:

- `imageSrc`
- `imageAlt`
- `imageBadge`
- `category`
- `title`
- `description`
- `updatedLabel`
- `linkLabel`
- `href`

Use the following mock content:

- Image badge: `9 Modelos Testados`
- Category: `Casa Inteligente & Pets`
- Title: `Os Melhores Robôs Aspiradores para Quem Tem Animais de Estimação`
- Description: `Escovas antiemaranhamento, filtros HEPA reais e algoritmos para desviar de imprevistos biológicos.`
- Updated label: `Atualizado há 5 dias`
- Link label: `Ler Guia →`

Use the image from the reference screenshot if an approved local asset is available. Otherwise, inspect existing project assets and use an appropriate existing mock image. Do not invent a remote image URL or replace an existing approved asset without checking the project first.

Use meaningful Portuguese alternative text for the image.

### 5. Navigation

- Use `next/link` for internal navigation.
- Use a regular anchor only if the guide points to an external URL.
- Store the destination in the mock data.
- If the destination page does not exist yet, use a clearly identified placeholder consistent with the project's routing conventions. Do not invent a production route without checking existing routes.

### 6. Accessibility

- Use semantic markup and a meaningful heading level consistent with the page hierarchy.
- Provide useful image alternative text.
- Ensure the guide link has an accessible name.
- Maintain sufficient text contrast.
- Preserve visible keyboard focus.
- Do not use color alone to communicate meaning.

### 7. Testing

Write Jest tests that verify:

- The category, title, description, badge, and update label render correctly.
- The guide link renders with the expected label and destination.
- The image has meaningful alternative text.
- Missing or optional data is handled safely if supported by the component's types.

Follow the repository's existing testing conventions. Avoid brittle tests that depend on CSS implementation details.

### 8. Integration

- Integrate the component into the appropriate existing page or editorial section only after inspecting the current page structure.
- Keep content data separate from component presentation.
- Do not duplicate the Product Verdict Card or Editor’s Choices implementation.
- Do not redesign unrelated components or pages.

### 9. Validation

Run the relevant project checks, including:

- The targeted Jest test.
- TypeScript validation.
- ESLint.
- The relevant build or other validation commands required by the repository instructions.

Fix issues introduced by this implementation. Report the commands actually executed and their results; do not claim a check passed unless it was run.

## Acceptance criteria

- [ ] The component closely matches the supplied screenshot.
- [ ] Component, styles, types, and mock data are separated appropriately.
- [ ] The card is reusable and responsive.
- [ ] The image badge overlays the image correctly.
- [ ] Typography, spacing, divider, and footer reflect the reference.
- [ ] Navigation follows the project's routing conventions.
- [ ] Jest tests cover the key content and link behavior.
- [ ] Accessibility requirements are met.
- [ ] Relevant validation commands have been executed and reported.
- [ ] Existing project conventions and frontend implementation skills are followed.

**Scope:** Build the reusable Featured Buying Guide Card and integrate it where appropriate. Do not build the full buying-guide article page as part of this story.
