# CE-006 — Editor's Choices Section

**Type:** Frontend implementation  
**Priority:** High  
**Feature:** Product verdicts  
**Status:** Ready for development  
**Design reference:** `docs/design/editors-choices-reference.png`

## 1. Objective

Implement the “Escolhas dos Editores” section on the CRITÉRIO homepage, matching the supplied desktop design reference.

The section presents three editorial product recommendations in a responsive grid, allowing readers to identify the general recommendation, best-value option, and premium choice.

**Scope:** Section heading, section navigation link, divider, product collection, responsive grid, and integration with the existing Product Verdict Card component.

Do not duplicate the Product Verdict Card implementation from CE-005.

## 2. Design reference

Use `docs/design/editors-choices-reference.png` as the primary reference.

The section contains:

- Eyebrow: `VEREDITOS RÁPIDOS`
- Heading: `Escolhas dos Editores`
- Right-aligned link: `Ver todos os vereditos ↗`
- Thin horizontal divider
- Three product cards displayed side by side on desktop

Maintain the CRITÉRIO editorial style: warm off-white background, white cards, subtle neutral borders, serif headings, understated sans-serif body text, and terracotta accents.

Avoid unnecessary gradients, excessive shadows, large rounded corners, or decorative effects that are absent from the reference.

## 3. Architecture and file organization

Inspect the repository and follow existing conventions.

Suggested structure:

```text
src/
  features/
    products/
      components/
        editors-choices/
          editors-choices.tsx
          editors-choices.module.scss
          editors-choices.data.ts
          editors-choices.types.ts
```

Reuse the existing Product Verdict Card component and its types from CE-005. Adapt the proposed folder structure to the actual repository rather than creating duplicate components.

### Separation of concerns

- **Section component:** Renders the heading, section link, divider, and card collection.
- **Data module:** Defines the three featured products and their ordering.
- **Types:** Reuse the card's existing product data contract. Create additional types only when needed.
- **SCSS Module:** Controls section layout, grid, spacing, and responsive behavior.

Follow `docs/skills/frontend-implementation/SKILL.md` and `docs/skills/code-review/SKILL.md`.

Do not place a substantial product configuration array inside the JSX component.

## 4. Section header

### Eyebrow

Display `VEREDITOS RÁPIDOS`.

- Small uppercase sans-serif text.
- Terracotta accent.
- Compact spacing above the main heading.

### Heading

Display `Escolhas dos Editores`.

- Prominent editorial serif typography.
- Left-aligned.
- Responsive font sizing.
- Strong visual hierarchy.

### Section navigation link

Display `Ver todos os vereditos` with a small northeast-pointing arrow.

- Align to the right of the heading on desktop.
- Use understated typography.
- Provide a visible keyboard focus state.
- Navigate to the existing verdicts listing route.
- Use `next/link` for internal navigation.

Inspect the project's existing routes before selecting the destination. Do not invent a route or leave the link broken.

On mobile, allow the link to wrap or move beneath the heading without causing horizontal overflow.

### Divider

Add a thin neutral horizontal divider below the heading row, spanning the section width.

Preserve the generous spacing between the divider and the product cards.

## 5. Product collection

Render exactly three instances of the existing Product Verdict Card component.

Keep the products in this order.

### Product 1 — General recommendation

- Verdict: `NOSSA ESCOLHA GERAL`
- Category: `Cafeteira Expresso Semi-Automática`
- Product name: `Oster Prima Latte II`
- Description: `Melhor extração e vaporizador cremoso da categoria. Bomba italiana de 19 bar estável e reservatório dedicado para latte macchiato automático.`
- Price: `R$ 1.189`
- Qualifier: `à vista`
- Price context: `Melhor preço na Amazon Brasil • Atualizado hoje`
- CTA: `VER PREÇO NA AMAZON`
- Review link: `Ler avaliação completa`

### Product 2 — Best value

- Verdict: `MELHOR CUSTO-BENEFÍCIO`
- Category: `Fones TWS Bluetooth`
- Product name: `Fone QCY T13 ANC`
- Description: `Cancelamento de ruído surpreendente pelo preço. Resposta de graves equilibrada, isolamento ativo de 28dB e autonomia para até 7 horas contínuas.`
- Price: `R$ 168`
- Qualifier: `com frete`
- Price context: `Disponível no Mercado Livre • Atualizado hoje`
- CTA: `VER NO MERCADO LIVRE`
- Review link: `Ler avaliação completa`

### Product 3 — Premium choice

- Verdict: `ESCOLHA PREMIUM`
- Category: `Robô Aspirador com Doca Completa`
- Product name: `Roborock S8 Pro Ultra`
- Description: `Autonomia total e lavagem automática do mop com secagem a ar quente. Mapeamento LiDAR tridimensional sem enroscar em cabos ou brinquedos.`
- Price: `R$ 7.990`
- Qualifier: `em até 10x`
- Price context: `Melhor preço na Amazon Brasil • Garantia oficial`
- CTA: `VER PREÇO NA AMAZON`
- Review link: `Ler avaliação completa`

Treat this information as mock editorial content supplied by the design reference. Do not claim that prices, availability, product specifications, or warranties have been independently verified.

### Images and destinations

Inspect the existing assets and routing before configuring the cards.

- Reuse existing product images if available.
- Otherwise, use approved mock assets from the project.
- Provide descriptive image alternative text.
- Use valid development destinations where production destinations are not yet defined.
- Do not invent production routes or claim that retailer links have been verified.

## 6. Desktop layout

Display three equal-width cards in a single row.

Requirements:

- Consistent column widths and horizontal gaps.
- Aligned card tops and balanced overall heights.
- Consistent image container dimensions.
- Verdict badges positioned consistently.
- CTA buttons aligned consistently across cards.
- Review links centered beneath their respective CTAs.
- Enough room for differing product names and descriptions.

Use CSS Grid or the project's existing layout utilities.

Avoid fixed heights that clip text. Where needed, use a flexible column layout to align actions while allowing content to grow naturally.

## 7. Responsive behavior

### Desktop

- Three cards per row.
- Heading and section link share the header row.
- Maintain the reference's whitespace and proportions.

### Tablet

- Switch to two columns when three cards no longer fit comfortably.
- Allow the third card to flow naturally to the next row.
- Adjust typography, gaps, and padding where necessary.

### Mobile

- Display one card per row.
- Stack the section header elements as needed.
- Preserve product order.
- Keep all content readable and actions usable.
- Prevent horizontal overflow.
- Retain the responsive behavior implemented in CE-005.

Use SCSS Modules and the existing responsive conventions. Do not introduce Tailwind CSS.

## 8. Accessibility

- Use semantic section markup and an accessible section heading.
- Maintain a logical heading hierarchy.
- Ensure the section link and each card's links are independently keyboard accessible.
- Provide visible focus states.
- Maintain sufficient contrast.
- Use meaningful image alternative text.
- Do not rely on badge color alone to communicate the verdict.
- Hide decorative arrows from assistive technologies where appropriate.

## 9. Implementation workflow

1. Read `AGENTS.md` and `docs/AGENT-WORKFLOW.md` when available.
2. Read the frontend implementation, code review, UI/UX, accessibility, and testing skills.
3. Inspect `docs/design/editors-choices-reference.png`.
4. Inspect the CE-005 Product Verdict Card component, its props, types, styles, and tests.
5. Inspect existing product assets, design tokens, routes, and homepage structure.
6. Define the product collection in a dedicated data module.
7. Implement the section header, divider, and responsive grid.
8. Reuse CE-005 for all three products.
9. Integrate the section into the existing homepage composition without disrupting other sections.
10. Add or update Jest tests.
11. Run available lint, type-check, test, and production-build commands.
12. Review the final diff against the code-review skill and resolve meaningful violations.

If CE-005 is not yet implemented, complete and validate it first. Do not rebuild it inside CE-006.

## 10. Acceptance criteria

- [ ] Section matches the supplied design reference.
- [ ] Correct eyebrow, heading, and navigation link are displayed.
- [ ] A divider separates the heading from the card grid.
- [ ] Exactly three cards appear in the specified order.
- [ ] All cards reuse the existing CE-005 component.
- [ ] Product data is separated from JSX.
- [ ] Existing types are reused without unnecessary duplication.
- [ ] Desktop layout displays three aligned columns.
- [ ] Tablet and mobile layouts adapt without horizontal overflow.
- [ ] CTA and review links preserve their individual behavior.
- [ ] Accessibility requirements are addressed.
- [ ] Jest tests cover section rendering, card count, product ordering, and navigation.
- [ ] Frontend implementation and code-review skills have been followed.
- [ ] Available validation commands have been executed and actual results reported.

### Required mock image URLs

Use these exact URLs in the section's mock data, mapped to the three products in display order.

Oster Prima Latte II — Coffee machine
https://images.pexels.com/photos/2566027/pexels-photo-2566027.jpeg

QCY T13 ANC — Wireless earbuds
https://images.pexels.com/photos/9204671/pexels-photo-9204671.jpeg

Roborock S8 Pro Ultra — Robot vacuum
https://images.pexels.com/photos/7641488/pexels-photo-7641488.jpeg

### featured-buying-guideRequirements:

Use the URLs exactly as provided.

Store them in editors-choices.data.ts, or the existing equivalent data module.

Pass the image data into the reusable Product Verdict Card component from CE-005.

Do not hardcode image URLs in JSX.

Configure images.pexels.com for next/image if required by the project's current Next.js configuration.

Use descriptive Portuguese alt text and preserve the intended image crop.

Treat all three as mock assets for development, not verified images of the exact products being recommended.

## 11. Out of scope

- Rebuilding the Product Verdict Card.
- Implementing product detail or review pages.
- Live price, stock, or retailer integrations.
- CMS or database integration.
- Verifying editorial claims.
- Redesigning unrelated homepage sections.

## 12. Final report

Report the files created or changed, how CE-005 was reused, responsive layout decisions, the section link destination, tests and commands executed, actual validation results, and remaining issues.
