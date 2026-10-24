# CE-005 — Product Verdict Card Component

**Type:** Frontend implementation  
**Priority:** High  
**Status:** Ready for development  
**Feature:** Product verdicts  
**Scope:** Reusable card component only

## 1. Objective

Build a reusable, typed Product Verdict Card for CRITÉRIO.

The component represents an editorial product recommendation, showing its verdict badge, product image, category, product name, summary, price, price context, retailer CTA, and link to the full review.

Follow the supplied mobile and desktop design references.

**Important:** This story implements the component only. Do not create the “Escolhas dos Editores” section, render a list of cards, or integrate the component into the homepage. A separate story will handle the section that consumes this component.

## 2. Design references

Inspect these files before implementation:

- `docs/design/product-verdict-card-reference.png`
- `docs/design/editors-choices-reference.png`

Use the individual mobile reference to understand the component's vertical composition and the desktop reference to understand its appearance when displayed in a wider card.

The references establish a restrained editorial style with warm neutral backgrounds, thin borders, serif product titles, muted supporting text, and terracotta CTA buttons.

Do not redesign the component or introduce a different visual style.

## 3. Component structure

Suggested location, subject to the existing repository architecture:

```text
src/
  features/
    products/
      components/
        product-verdict-card/
          product-verdict-card.tsx
          product-verdict-card.module.scss
          product-verdict-card.data.ts
          product-verdict-card.types.ts
```

Follow `docs/skills/frontend-implementation/SKILL.md` and `docs/skills/code-review/SKILL.md`.

Separate the component, SCSS Module, mock data, and meaningful type definitions. Do not place substantial product configuration directly inside the component.

Reuse existing shared UI primitives and icon libraries where appropriate. Do not duplicate existing functionality or introduce unnecessary dependencies.

## 4. Component content and data contract

The component must accept typed product verdict data through props. It must not own a hardcoded product or render its own collection.

Support these fields where appropriate:

- `verdictLabel`: editorial badge text.
- `category`: product category.
- `productName`: product title.
- `image.src`: image source.
- `image.alt`: descriptive alternative text.
- `description`: concise editorial summary.
- `price`: formatted price.
- `priceQualifier`: optional pricing context, such as “à vista” or “em até 10x”.
- `priceContext`: availability, retailer, or price-update information.
- `retailerLabel`: CTA text.
- `retailerUrl`: destination for the retailer CTA.
- `reviewLabel`: label for the review link.
- `reviewUrl`: destination for the complete review.

Use the existing project conventions for naming and data modeling. Optional fields should be genuinely optional and handled cleanly in the UI.

Do not invent product facts, prices, warranties, ratings, or availability claims.

## 5. Verdict badge variants

The reference shows three visual verdict variants:

1. **Nossa Escolha Geral** — terracotta/red background with white uppercase text.
2. **Melhor Custo-Benefício** — muted dark green background with white uppercase text.
3. **Escolha Premium** — near-black background with white uppercase text.

Implement a typed way to select the appropriate variant, such as a discriminated union or a constrained variant type.

The badge must be positioned at the upper-left edge of the card and visually overlap the card boundary as shown in the desktop reference.

Keep the badge label configurable. Do not hardcode one verdict inside the component.

## 6. Product image

- Use the project's existing image conventions, including `next/image` when appropriate.
- Preserve image proportions without distortion.
- Use a light neutral image container/background consistent with the references.
- Center the product image within the image region.
- Use an appropriate `object-fit` strategy based on the actual asset and reference.
- Prevent the image from stretching or overflowing.
- Provide meaningful alternative text.

Keep the image source in the supplied product data, not inside the component's JSX.

Use mock product assets only when available or explicitly supplied. Do not invent production image paths.

## 7. Content hierarchy and visual design

Render the card content in this order:

1. Verdict badge.
2. Product image.
3. Product category.
4. Product title.
5. Editorial description.
6. Price and optional qualifier.
7. Price context or availability note.
8. Retailer CTA.
9. Review link.

### Typography

- Product category: small, understated sans-serif text.
- Product title: prominent editorial serif typography.
- Description: readable, muted text with comfortable line height.
- Price: strong visual emphasis.
- Price context: smaller, secondary text.
- CTA: compact uppercase white text on a terracotta background.
- Review link: small, understated text.

### Card styling

- White or near-white surface.
- Thin, subtle neutral border.
- Restrained corner radius.
- No unnecessary shadows or decorative effects.
- Consistent internal spacing.
- Terracotta CTA consistent with the CRITÉRIO design system.
- No Tailwind CSS.

## 8. Responsive behavior

The component must work independently at different widths.

### Desktop card

- Use the proportions and image treatment shown in the desktop reference.
- Display the verdict badge at the upper-left edge.
- Maintain clear separation between image, title, description, pricing, and actions.
- Keep CTA width and alignment consistent with the card layout.

### Narrow card and mobile

- Stack content vertically.
- Preserve the reference's image container and padding.
- Ensure product titles and descriptions wrap naturally.
- Prevent badge text from overflowing.
- Keep pricing and price context readable.
- Make the CTA usable on touch devices.
- Keep the review link visible beneath the CTA.
- Prevent horizontal overflow and text clipping.

Use SCSS Modules and responsive media queries. Do not depend on the future section's grid layout to make the component usable.

## 9. Interaction and navigation

The retailer CTA must link to the supplied retailer destination.

The review link must navigate to the supplied product review destination.

Requirements:

- Use `next/link` for internal review navigation.
- Use a regular anchor for an external retailer URL.
- External links opening in a new tab must use appropriate security attributes.
- Ensure both actions have meaningful accessible names.
- Do not make the entire card clickable unless explicitly required.
- Do not invent destinations or leave knowingly broken links.

## 10. Accessibility

- Use semantic HTML.
- Give the product image meaningful alternative text.
- Preserve a logical heading hierarchy appropriate to the component's context.
- Ensure the verdict is communicated by text, not color alone.
- Maintain sufficient text contrast.
- Provide visible keyboard focus indicators.
- Ensure the retailer CTA and review link are independently keyboard accessible.
- Hide decorative icons from assistive technologies.
- Respect reduced-motion preferences if animation is introduced.

Avoid unnecessary animation; the reference is primarily static.

## 11. Mock data and isolated development

Create representative mock data in a dedicated data module so the component can be tested independently.

Use the supplied Oster Prima Latte II example as the initial visual fixture:

- Verdict: Nossa Escolha Geral
- Category: Cafeteira Expresso Semi-Automática
- Product: Oster Prima Latte II
- Description: Melhor extração e vaporizador cremoso da categoria. Bomba italiana de 19 bar estável e reservatório dedicado para latte macchiato automático.
- Price: R$ 1.189
- Price qualifier: à vista
- Price context: Melhor preço na Amazon Brasil • Atualizado hoje
- Retailer CTA: VER PREÇO NA AMAZON
- Review link: Ler avaliação completa

Use an available, appropriate mock product image and valid development destinations. Do not claim that the sample price or availability has been verified.

The component must not import its own hardcoded mock data to determine which product it displays. Supply the fixture through props in a suitable isolated preview or test.

Do not render the component on the homepage in this story.

## 12. Testing

Follow the project's Jest conventions.

Add or update tests for:

- Rendering the verdict label and variant.
- Product image and alternative text.
- Category, title, and description.
- Price, qualifier, and price context.
- Retailer CTA destination.
- Internal review destination.
- Optional fields being omitted gracefully.
- Different verdict variants.
- Long product titles and descriptions without invalid markup.

Test observable behavior rather than implementation details.

Do not add a new testing framework or weaken existing tests.

## 13. Implementation workflow

1. Read `AGENTS.md` and `docs/AGENT-WORKFLOW.md` when available.
2. Read the frontend implementation, code review, UI/UX, accessibility, and testing skills.
3. Inspect both design references.
4. Inspect existing product types, card components, shared buttons, image handling, design tokens, and routing.
5. Define the smallest appropriate typed data contract.
6. Implement the component and SCSS Module.
7. Separate data and meaningful types from rendering.
8. Add isolated mock data and Jest tests.
9. Run relevant lint, type-check, test, and production-build commands available in the project.
10. Inspect the final diff and resolve meaningful code-review violations.

Preserve unrelated changes. Do not create the editor's choices section or modify the homepage composition as part of this story.

## 14. Acceptance criteria

- [ ] Reusable Product Verdict Card component implemented.
- [ ] Visual design follows the supplied mobile and desktop references.
- [ ] All content is supplied through typed props.
- [ ] Three verdict variants are supported.
- [ ] Component, styles, data, and meaningful types are separated appropriately.
- [ ] Retailer and review links work with correct link semantics.
- [ ] Responsive behavior works at narrow and wide widths.
- [ ] Accessibility requirements are satisfied.
- [ ] Jest tests cover the component's important behavior.
- [ ] No homepage integration or editor's choices section is implemented.
- [ ] Frontend implementation and code-review skills have been followed.
- [ ] Available validation commands have been executed and their actual results reported.

## 15. Final report

Report the files created or changed, component props and verdict variants, responsive decisions, tests and commands executed, actual validation results, and remaining issues.

Explicitly confirm that the component was implemented independently and was not added to the homepage or a product collection.
