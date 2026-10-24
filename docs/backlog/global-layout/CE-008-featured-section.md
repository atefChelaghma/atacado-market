# CE-008 — Featured Buying Guides Section

## Objective

Build the **Featured Buying Guides** section for the CRITÉRIO homepage using the existing reusable component from **CE-007 — Featured Buying Guide Card**.

Reproduce the supplied reference screenshot as closely as possible. The section presents four editorial buying guides in a clean, premium, magazine-inspired grid.

**Reference image:** `docs/design/buy-list.png`

## 1. Before implementation

Read and follow:

- `AGENTS.md`
- `docs/AGENT-WORKFLOW.md`
- `docs/skills/frontend-implementation/SKILL.md`
- Relevant UI/UX, accessibility, and testing skills already defined in the project.

Inspect CE-007 and reuse its existing component, types, and styling conventions. Do not recreate the card markup or duplicate its implementation.

Check the current homepage structure and integrate the section in the appropriate location without redesigning unrelated sections.

## 2. Section header

Use the following content:

- Eyebrow: `ANÁLISES DE LONGO PRAZO`
- Heading: `Guias de Compra em Destaque`

### Styling

- Warm off-white section background consistent with the reference.
- Small, uppercase eyebrow with subtle letter spacing.
- Large, elegant serif heading.
- Generous spacing between the header and the card grid.
- Align the section content and cards consistently with the existing site container.

## 3. Card grid

Display four instances of the CE-007 Featured Buying Guide Card component.

### Desktop

- Four equal-width columns.
- Consistent card heights and aligned card edges.
- Even horizontal gaps.
- Images use the same aspect ratio and cropping approach as CE-007.
- Preserve the editorial style, subtle borders, white card backgrounds, and compact footers.

### Tablet

- Adapt to two columns when the available width requires it.
- Maintain readable typography and consistent spacing.

### Mobile

- Use a single column.
- Cards should fill the available content width without horizontal overflow.
- Preserve image proportions, natural text wrapping, and usable footer links.

Use responsive SCSS/CSS Modules following the project's existing breakpoint conventions. Do not use Tailwind.

## 4. Mock buying-guide data

Create a separate typed data file for the four guides. Keep content and image URLs out of the section's JSX.

Use these four mock guides in this order:

### Guide 1 — Robot vacuums for pet owners

- Category: `Casa Inteligente & Pets`
- Title: `Os Melhores Robôs Aspiradores para Quem Tem Animais de Estimação`
- Description: `Escovas antiemaranhamento, filtros HEPA reais e algoritmos para desviar de imprevistos biológicos.`
- Image badge: `9 Modelos Testados`
- Updated label: `Atualizado há 5 dias`
- Link label: `Ler Guia →`
- Mock image: `https://images.pexels.com/photos/39529869/pexels-photo-39529869.jpeg`

### Guide 2 — Air fryers

- Category: `Cozinha & Eletrodomésticos`
- Title: `Air Fryers Testadas: Quais Realmente Valem a Compra em 2024?`
- Description: `Medimos distribuição térmica com câmera infravermelha, durabilidade do antiaderente e ruído de ventoinha.`
- Image badge: `14 Fritadeiras Avaliadas`
- Updated label: `Atualizado há 1 semana`
- Mock image: `https://images.pexels.com/photos/5765/food-healthy-vegetables-cooking.jpg`

### Guide 3 — Monitors for productivity

- Category: `Ergonomia & Produtividade`
- Title: `Monitores 4K para Produtividade e Home Office: O Comparativo Real`
- Description: `Densidade de pixels para textos finos, portas USB-C com carregamento Power Delivery e ajuste ergonômico.`
- Image badge: `8 Telas IPS & OLED`
- Updated label: `Atualizado há 3 dias`
- Mock image: `https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg`

### Guide 4 — Premium dog food

- Category: `Nutrição Veterinária`
- Title: `Rações Super Premium para Cães: O Que Analisar no Rótulo`
- Description: `Proteína real versus subprodutos, digestibilidade declarada e aditivos controversos no mercado nacional.`
- Image badge: `Auditoria de Rótulos`
- Updated label: `Atualizado há 4 dias`
- Mock image: `https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg`

**Important:** These are mock editorial entries. The image URLs are placeholders from Pexels and may not depict the exact products or scenes described. Do not present mock content as independently verified product testing.

If a URL is invalid or unsuitable, replace it with another suitable Pexels image after checking that it is accessible and visually relevant. Keep all image URLs in the data file.

## 5. Data model and component integration

Use the existing CE-007 component and its exported types wherever possible.

The section data should contain the fields required by CE-007, such as:

- `imageSrc`
- `imageAlt`
- `imageBadge`
- `category`
- `title`
- `description`
- `updatedLabel`
- `linkLabel`
- `href`

Follow the actual CE-007 API instead of introducing redundant or incompatible fields.

Suggested organization, adapted to the repository's conventions:

- `src/components/features/featured-buying-guides/FeaturedBuyingGuides.tsx`
- `src/components/features/featured-buying-guides/FeaturedBuyingGuides.module.scss`
- `src/components/features/featured-buying-guides/featured-buying-guides.data.ts`
- `src/components/features/featured-buying-guides/featured-buying-guides.types.ts` — only if separate types are needed.

Keep the section component focused on layout and mapping over the guide data.

Configure `images.pexels.com` in `next.config` if the existing CE-007 image implementation uses `next/image` and requires remote image configuration. Follow the project's current image-loading conventions.

Provide meaningful Portuguese alt text for every image.

## 6. Navigation

- Use `next/link` for internal destinations.
- Follow the existing routing conventions and inspect available routes before assigning destinations.
- If individual guide pages do not exist yet, use clearly identified placeholders consistent with the project rather than inventing production routes.
- Keep the destination URL in the guide data.

## 7. Accessibility

- Use a semantic section element.
- Use a proper heading hierarchy.
- Ensure every card's guide link has an accessible name.
- Maintain readable contrast for muted text and image badges.
- Preserve visible keyboard focus.
- Avoid fixed heights that clip text at smaller screen sizes.

## 8. Testing

Add Jest tests for the section that verify:

- The eyebrow and heading render correctly.
- All four guide cards render.
- Each card displays the correct category, title, badge, update label, and link label.
- Each guide uses the expected image source and meaningful alt text.
- The links use the expected destinations.
- The section remains compatible with the existing CE-007 component contract.

Follow existing test conventions and avoid brittle assertions based on CSS implementation details.

## 9. Validation

Run the relevant project checks:

- Targeted Jest tests.
- TypeScript validation.
- ESLint.
- Production build or other required checks specified by the repository instructions.

Fix implementation-related failures and report which commands were actually run and their results.

## Acceptance criteria

- [ ] The section closely matches the supplied desktop screenshot.
- [ ] The header uses the correct eyebrow and title.
- [ ] Four guide cards appear in the correct order.
- [ ] Every card reuses the CE-007 component.
- [ ] Mock images and guide content are defined in a separate data file.
- [ ] Desktop uses four columns; tablet and mobile layouts adapt responsively.
- [ ] Card spacing, typography, image badges, borders, and footers are consistent.
- [ ] Internal navigation follows project conventions.
- [ ] Accessibility and Jest test requirements are met.
- [ ] Required validation commands are executed and reported.
- [ ] Existing project skills and architectural conventions are followed.

**Scope:** Implement the Featured Buying Guides section and integrate it into the appropriate existing page. Do not rebuild CE-007 or create the individual guide article pages in this story.
