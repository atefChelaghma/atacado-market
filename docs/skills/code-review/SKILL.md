---
name: code-review
description: Use when reviewing a pull request, patch, implementation, architecture change, or potential regression.
---

# Code Review Skill

## Review priorities

1. Correctness and user-visible defects.
2. Security, privacy, and unsafe data handling.
3. Data integrity and API contract compatibility.
4. Error handling and edge cases.
5. Accessibility and responsive regressions.
6. Performance issues with credible impact.
7. Maintainability and consistency with project conventions.
8. Test quality and missing coverage.

## Workflow

1. Read the task and acceptance criteria.
2. Inspect the diff and surrounding code, not just changed lines.
3. Trace important data and control flows.
4. Verify behavior against existing conventions and tests.
5. Report findings first, ordered by severity, with file/line references when available.
6. Explain impact and a practical fix.
7. Mention uncertainty and checks not performed.

## Guardrails

- Avoid stylistic nitpicks unless they affect maintainability or conflict with standards.
- Do not invent bugs or assert unverified runtime behavior as fact.
- Do not modify code during a review unless asked to fix the findings.
