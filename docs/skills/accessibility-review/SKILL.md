---
name: accessibility-review
description: Use when auditing or implementing accessibility for web pages, components, forms, navigation, dialogs, tables, and responsive interactions.
---

# Accessibility Review Skill

## Review checklist

- Semantic landmarks and logical heading order.
- Meaningful accessible names for controls and links.
- Keyboard navigation for all interactive elements.
- Visible focus states and sensible focus order.
- Appropriate labels, descriptions, validation, and error announcements for forms.
- Sufficient text and non-text contrast.
- Useful alternative text for informative images; empty alt for decorative images.
- No color-only communication.
- Reduced-motion support for animation.
- Touch targets and mobile zoom/readability.
- Tables have appropriate headers; complex comparisons have a usable mobile alternative.
- Dialogs and menus manage focus and dismissal correctly.

## Workflow

1. Inspect the component and its context.
2. Report issues by severity and user impact.
3. Fix semantic and interaction problems before cosmetic ones.
4. Use automated checks as support, not as a substitute for manual keyboard and screen-reader-oriented review.
5. Add tests for critical keyboard and accessible-name behavior when feasible.

## Guardrails

- Do not claim WCAG conformance based only on a visual inspection or automated scan.
- Preserve functionality while improving accessibility.
