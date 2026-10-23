---
name: testing-quality
description: Use when designing or implementing unit, integration, component, API, or end-to-end tests, or diagnosing test failures.
---

# Testing and Quality Skill

## Workflow

1. Inspect existing test framework, scripts, conventions, fixtures, and CI configuration.
2. Identify observable behavior and acceptance criteria before writing tests.
3. Select the right level:
   - Unit tests for isolated logic.
   - Component/integration tests for interactions and boundaries.
   - API/integration tests for contracts and persistence behavior.
   - E2E tests for critical user journeys.
4. Cover success, failure, empty, boundary, and accessibility behavior where relevant.
5. Prefer deterministic tests; avoid arbitrary sleeps and fragile selectors.
6. Use accessible roles/names or stable test IDs when appropriate.
7. Keep tests independent and clean up external resources.
8. Run focused tests first, then broader checks when practical.
9. Diagnose root causes rather than weakening assertions to make tests pass.

## Reporting

- State exact commands run and whether they passed.
- Separate pre-existing failures from failures introduced by the change when evidence allows.
- If tests were not run, say so explicitly.

## Guardrails

- Do not delete meaningful tests just to obtain a green run.
- Do not mock the behavior the test is meant to verify.
- Do not claim coverage or quality improvements without evidence.
