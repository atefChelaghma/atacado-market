# CE-004 — Featured Buying Guide Editorial Card

**Type:** Frontend implementation  
**Priority:** High  
**Status:** Ready for development  
**Component:** Featured buying guide  
**Reference:** Approved screenshot supplied with this story

## 1. Objective

Implement a reusable featured editorial card for the CRITÉRIO homepage, following the supplied visual reference.

The component promotes a buying guide through a large editorial image on the left and structured editorial content on the right.

The design must communicate expertise, research credibility, transparency, and editorial quality. It should feel like a premium Brazilian consumer publication rather than a conventional e-commerce product card.

Inspect the existing project, design system, skills, and homepage before implementation. Reuse existing components where appropriate and preserve the site's established visual language.

## 2. Reference content

Use the following content as the initial reference data.

### Editorial badges

- `GUIA DEFINITIVO`
- `Laboratório CRITÉRIO`, preceded by a laboratory icon.

### Editorial metadata

- Author: Rafael Mendes
- Last updated: há 2 dias
- Tested models: 18 modelos testados

Display these details in one compact metadata row, preceded by a small terracotta-colored indicator.

### Headline

"As Melhores Cafeteiras de Espresso para Ter em Casa (2024)"

Use the exact reference text for this initial implementation.

### Description

"Após 140 horas avaliando estabilidade térmica, pressão de bomba real (em barimetria de bancada) e espumação de leite, definimos os únicos modelos que extraem uma xícara comparável à de cafeterias especializadas sem complicar sua rotina matinal."

### Tags

- Extração manual e cápsulas
- R$ 499 a R$ 4.200
- Testes cegos de paladar

### Call to action

"Leer guia completo" is not the intended Portuguese copy. Use the corrected Brazilian Portuguese label:

"Ler guia completo"

Display a subtle right-pointing arrow beside the label.

### Reading time

"14 min de leitura"

Keep the reading time aligned to the right side of the card's bottom content row on desktop.

## 3. Visual layout

### Desktop

Create a two-column horizontal card.

**Left column — Editorial image**

- Occupies approximately 58–60% of the card width.
- Uses a large, high-quality espresso machine photograph.
- Fills the available image container.
- Uses `object-fit: cover` without distortion.
- Displays the two editorial badges near the upper-left corner.
- Keeps the image and content panel aligned to the same overall height.

### Design reference:

featured-buying-guide-reference.png

### Mock content image:

https://images.pexels.com/photos/39529869/pexels-photo-39529869.jpeg

**Right column — Editorial content**

- Occupies approximately 40–42% of the card width.
- Uses a clean white or near-white background.
- Has generous internal padding.
- Organizes metadata, headline, description, tags, and CTA into a clear vertical hierarchy.
- Uses a subtle horizontal divider above the bottom CTA row.

The entire card should have a restrained border, subtle corner radius, and minimal shadow consistent with the reference.

### Visual hierarchy

1. Editorial badges overlaying the image.
2. Author and testing metadata.
3. Large serif headline.
4. Readable serif description in muted gray.
5. Compact neutral tag chips.
6. Divider.
7. CTA and reading-time information.

Preserve the reference's generous whitespace, editorial typography, warm neutral palette, and restrained terracotta accent.

Avoid unnecessary gradients, excessive shadows, decorative backgrounds, and oversized rounded corners.

## 4. Image and asset requirements

Inspect the existing assets and image conventions before choosing the image source.

- Reuse an existing suitable coffee-machine asset if available.
- Otherwise, use an approved image supplied by the project or configure an appropriate editorial image asset.
- Do not use a broken image URL or invent a production asset path.
- Do not stretch or distort the image.
- Provide meaningful alternative text describing the coffee machine and espresso preparation.
- If the project uses `next/image`, follow its configuration and image optimization conventions.

The image must remain a distinct presentation element, with badges layered over it without obstructing important visual content.

## 5. Component architecture

Inspect the existing architecture before deciding where files belong.

Suggested structure:

```text
src/
  features/
    buying-guides/
      components/
        featured-buying-guide/
          featured-buying-guide.tsx
          featured-buying-guide.module.scss
          featured-buying-guide.data.ts
          featured-buying-guide.types.ts
```

Adapt this structure to existing repository conventions. If the project already has an editorial or buying-guide feature structure, extend it rather than creating duplicates.

### Separation of concerns

- **Component:** Responsible for rendering the featured card.
- **Data:** Store the initial guide content and configuration separately from JSX.
- **Types:** Define meaningful interfaces or types for guide metadata, tags, image information, and CTA data where appropriate.
- **Styles:** Keep component-specific styling in its SCSS Module.

Follow `docs/skills/frontend-implementation/SKILL.md` and `docs/skills/code-review/SKILL.md`.

Do not keep a substantial guide configuration object or array inside the component file. Do not create empty or unnecessary files just to match the example.

Design the component so another buying guide can be displayed without duplicating the entire component implementation.

## 6. Component behavior

The featured card should support typed content properties where appropriate, including:

- Guide title.
- Description.
- Image source and alternative text.
- Author name.
- Last-updated label.
- Number of tested models.
- Editorial badge labels.
- Tags.
- Destination URL.
- Reading-time label.

Use the existing project conventions for component props and data configuration.

The CTA must navigate to the corresponding guide page. Use `next/link` for internal routes.

Inspect existing routes before selecting a destination. Do not invent a route and leave the CTA broken.

Do not make the entire card clickable unless that behavior is established by the design system or product requirements.

## 7. Responsive behavior

### Desktop

- Preserve the side-by-side image and content layout.
- Maintain the reference's approximate column proportions.
- Ensure the content fits without clipping.
- Keep badges legible over the image.

### Tablet

- Adjust column proportions and content padding.
- Reduce headline size when necessary.
- Allow tags to wrap naturally.
- Prevent metadata and CTA elements from colliding.

### Mobile

- Stack the image above the content panel.
- Use an appropriate image aspect ratio.
- Keep badges positioned within the image.
- Reduce internal padding and headline size appropriately.
- Allow tags to wrap onto additional lines.
- Keep the CTA and reading time readable without horizontal overflow.
- Preserve a logical reading order.

Use SCSS media queries and existing responsive conventions. Avoid fixed heights that cause text clipping.

## 8. Accessibility

- Use semantic HTML and a logical heading hierarchy.
- Ensure the card title has an appropriate heading level for its location.
- Use descriptive image alternative text.
- Keep the CTA accessible as a standard link.
- Hide decorative icons from assistive technologies.
- Provide sufficient contrast for badges, metadata, tags, and links.
- Preserve visible keyboard focus.
- Do not rely on color alone to communicate the editorial badge meaning.

## 9. Implementation workflow

1. Read `AGENTS.md` and `docs/AGENT-WORKFLOW.md` when available.
2. Read the frontend implementation, code review, UI/UX, accessibility, and testing skills.
3. Inspect the supplied screenshot and existing homepage implementation.
4. Inspect existing buying-guide components, design tokens, typography, images, and route conventions.
5. Determine whether an appropriate image and destination route already exist.
6. Implement the typed, reusable featured card.
7. Separate component rendering, guide data, meaningful types, and styles.
8. Integrate the component into the correct homepage location without breaking the hero, header, or footer.
9. Run relevant lint, type-check, Jest, Cypress, and production-build commands available in the project.
10. Inspect the final diff for regressions and unrelated changes.
11. If browser tooling is available, compare the rendered card with the reference on desktop and mobile.

Do not stop after producing a plan when enough information exists to implement the story. Ask for clarification only if a genuinely blocking decision requires it.

## 10. Acceptance criteria

- [ ] The card closely matches the supplied visual reference.
- [ ] The image occupies the left side on desktop and the top on mobile.
- [ ] Editorial badges overlay the image correctly.
- [ ] Author, update time, and tested-model count are displayed.
- [ ] The headline and description match the supplied copy.
- [ ] All three tags appear in the correct order.
- [ ] The CTA and reading time are correctly aligned.
- [ ] The component uses SCSS Modules, with no Tailwind CSS.
- [ ] Data and meaningful type definitions are separated from rendering.
- [ ] The component supports reusable typed content.
- [ ] Internal navigation uses `next/link` and a verified destination.
- [ ] Accessibility and responsive behavior are addressed.
- [ ] Existing homepage sections and layout components remain intact.
- [ ] Relevant validation commands have been executed and their actual results reported.
- [ ] The final diff has been reviewed against the
