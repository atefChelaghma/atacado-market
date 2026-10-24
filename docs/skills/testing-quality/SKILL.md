---
name: testing-quality
description: Use when creating, modifying, reviewing, or debugging application code, components, pages, features, APIs, or tests. Enforce project-wide Jest, React Testing Library, and Cypress testing standards, including dependency detection, test organization, coverage of observable behavior, and validation.
---

# Testing and Quality Skill

## Objective

Ensure every component, page, feature, and critical application flow has appropriate automated tests.

Follow the project architecture and the responsibilities of each module. Tests must be organized consistently with the code they verify, remain deterministic, and validate observable behavior rather than implementation details.

## 1. Mandatory Initial Inspection

Before writing or modifying code:

1. Read `AGENTS.md`, the project architecture documentation, and relevant implementation and testing skills.
2. Inspect `package.json`, the lockfile, existing dependencies, test scripts, configuration files, test fixtures, and CI workflows.
3. Identify whether Jest, React Testing Library, Cypress, and their required configuration already exist.
4. Inspect existing components, pages, features, and tests to understand the project's conventions.
5. Identify the appropriate testing layers for the requested change.

Do not reinstall existing dependencies or overwrite working configuration without a demonstrated need.

Preserve the package manager and lockfile already used by the project. Do not mix npm, pnpm, Yarn, or Bun.

## 2. Required Testing Stack

### Unit and component testing

Use the following tools for unit and React component tests:

- **Jest** as the test runner and assertion framework.
- **React Testing Library** for testing React components through user-observable behavior.
- `@testing-library/jest-dom` for DOM assertions.
- `@testing-library/user-event` for realistic user interactions.

### End-to-end testing

Use **Cypress** for end-to-end tests of critical user journeys and interactions across the running application.

Do not introduce a second E2E framework unless the project architect explicitly approves the change or an existing documented constraint justifies it.

### Dependency detection and installation

If Jest does not exist:

1. Install Jest and the dependencies required for the project's framework and TypeScript configuration.
2. Configure the appropriate test environment.
3. Add a working test script.
4. Create a minimal representative test to validate the setup.

If React Testing Library does not exist:

1. Install `@testing-library/react`.
2. Install `@testing-library/jest-dom` and `@testing-library/user-event` if missing.
3. Configure Jest setup files and the required DOM environment.
4. Ensure TypeScript types and test file discovery work correctly.

If Cypress does not exist:

1. Install Cypress as a development dependency.
2. Add the appropriate Cypress configuration and directory structure.
3. Add scripts to open Cypress interactively and run it headlessly.
4. Create at least one meaningful E2E test for a real critical user journey.
5. Ensure the application can be started reliably for E2E execution.

Install only missing dependencies. Reuse compatible versions and existing configuration whenever possible.

**Framework-specific requirements:** Inspect the installed Next.js, React, TypeScript, Jest, and Cypress versions before selecting configuration or package versions. Follow the official integration conventions appropriate to those versions. Do not blindly copy configuration intended for another framework or version.

For Next.js projects, account for the existing routing model, CSS Modules or Sass setup, image handling, server components, and client components. Do not force browser-only tests onto components that cannot run in the selected environment without an appropriate test boundary.

If package installation is unavailable, explain the limitation and provide the exact commands needed. Do not claim installation or configuration succeeded without verification.

## 3. Test Organization and Architecture

Follow the project's architecture and keep tests close to the code they verify.

Prefer colocated tests unless the existing project architecture specifies a dedicated test directory.

Examples:

### Component folder

```text
src/components/
  features/
    product-card/
      ProductCard.tsx
      ProductCard.module.scss
      product-card.types.ts
      product-card.data.ts
      ProductCard.test.tsx
```

### Feature folder

```text
src/features/
  product-catalog/
    components/
    hooks/
    services/
    types/
    __tests__/
```

### Page or route

```text
src/app/
  products/
    page.tsx
    page.test.tsx
```

Adapt these examples to the actual repository. Do not reorganize the entire codebase merely to match an example.

Each folder should own the code, styles, tests, and supporting files appropriate to its responsibility.

Keep tests close to the module when practical. Shared test utilities, global setup, fixtures, and E2E configuration should live in dedicated shared locations.

Do not create redundant files or empty test files just to satisfy a folder structure.

## 4. Testing Requirements for Code Changes

Every new or modified component, page, hook, service, utility, or feature must receive an appropriate testing assessment.

Add or update tests in the same change whenever behavior changes.

### React components

Test relevant behavior, including:

- Correct rendering of important content.
- Props and data variations.
- User interactions.
- Links, navigation, and actions.
- Loading, empty, error, and success states where applicable.
- Conditional rendering and boundary cases.
- Accessibility-relevant behavior.
- Responsive behavior when it can be validated meaningfully through the selected test layer.

Use React Testing Library and Jest for component tests.

Do not write superficial tests that only confirm a component exists when meaningful behavior can be tested.

### Pages and routes

Test important page-level behavior, including:

- Expected headings and content.
- Rendering of the main sections.
- Navigation and links.
- Empty, loading, and error states where relevant.
- Integration between the page and its child components.

Use component tests for isolated page behavior and Cypress for critical flows that require the application to run.

### Hooks and utilities

Test:

- Normal inputs and outputs.
- Boundary values.
- Empty or missing inputs.
- Invalid inputs and error handling.
- State transitions and asynchronous behavior when relevant.

### Services and APIs

Test:

- Request construction and response mapping.
- Success and failure responses.
- Validation and error handling.
- Important integration contracts.
- Persistence behavior when applicable.

Use integration tests when real boundaries, such as a database or HTTP service, are the behavior being verified. Do not replace the behavior under test with a mock.

## 5. Cypress E2E Standards

Use Cypress to validate critical user journeys from the perspective of a user interacting with the running application.

Prioritize journeys such as:

- Opening key pages.
- Navigating between routes.
- Completing important forms.
- Searching, filtering, or selecting items.
- Performing primary calls to action.
- Verifying critical error and empty states.

Each new feature should be assessed for E2E coverage. Add a Cypress test when the feature introduces a critical user journey, integration boundary, or meaningful end-to-end interaction.

Do not create a separate E2E test for every trivial visual component when that behavior is adequately covered by component tests.

### Cypress implementation rules

- Use accessible selectors such as roles, labels, and meaningful text when practical.
- Use stable `data-testid` attributes only when accessible selectors are insufficient.
- Avoid selectors tightly coupled to CSS classes or DOM nesting.
- Avoid arbitrary `cy.wait(milliseconds)` calls.
- Wait for observable application states or relevant network requests instead.
- Keep tests independent and repeatable.
- Use controlled fixtures or deterministic test data where appropriate.
- Avoid relying on production APIs, real user accounts, or unstable external services.
- Never place secrets, credentials, or private tokens in test files.
- Configure the application startup and test base URL using existing project conventions.
- Ensure test cleanup and state isolation are handled where necessary.

Do not mock the entire application or bypass the behavior the E2E test is intended to verify.

## 6. Test Quality Principles

All tests must follow these principles:

1. **Test observable behavior.** Prefer assertions about what users see and do.
2. **Keep tests deterministic.** Control time, randomness, external dependencies, and asynchronous behavior where needed.
3. **Test meaningful edge cases.** Include empty, invalid, boundary, failure, and success cases when applicable.
4. **Keep tests independent.** One test must not rely on another test's execution order.
5. **Use realistic interactions.** Prefer `userEvent` for component interaction and Cypress for browser journeys.
6. **Avoid implementation coupling.** Do not assert internal state or private implementation details unless the contract specifically requires it.
7. **Preserve useful assertions.** Never weaken an assertion merely to make a failing test pass.
8. **Use mocks selectively.** Mock external boundaries when necessary, not the logic being tested.
9. **Maintain readability.** Use clear test names, focused assertions, and reusable helpers where they improve clarity.
10. **Respect accessibility.** Prefer semantic HTML and accessible queries.

## 7. Running Tests and Validation

After implementation:

1. Run the focused Jest test for the changed module.
2. Run related component or integration tests.
3. Run the relevant Cypress E2E tests when the change affects a user journey or critical integration.
4. Run the broader test suite when practical.
5. Run TypeScript validation, linting, and build checks required by the project.
6. Investigate failures before declaring the work complete.

Use existing scripts when available. Add or update scripts only when needed.

Suggested scripts, adapted to the existing package manager and configuration:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

These scripts are examples, not instructions to overwrite existing scripts. Preserve useful existing commands and merge changes carefully.

Do not run Cypress E2E tests against a server that has not been started or verified. Use a reliable existing startup workflow or introduce an appropriate one if needed.

## 8. Coverage Policy

Use coverage reports to identify untested important behavior.

Do not introduce arbitrary global coverage thresholds without first inspecting the current project, baseline, and architecture.

Prioritize coverage for:

- Business logic.
- Conditional rendering.
- User interactions.
- Error handling.
- Important data transformations.
- Critical routes and user journeys.

Do not pursue coverage percentages by writing meaningless assertions, testing generated files, or removing useful code.

Report coverage figures only when they were actually generated.

## 9. Diagnosing Failures

When a test fails:

1. Read the complete error and relevant test output.
2. Reproduce the failure with the narrowest appropriate command.
3. Determine whether the root cause is application code, test code, configuration, environment, or a pre-existing issue.
4. Fix the underlying cause.
5. Re-run the focused test and relevant regression tests.
6. Preserve unrelated working behavior.

Do not automatically update snapshots, increase timeouts, skip tests, or change assertions without understanding why the test failed.

Do not mark a test as skipped merely to obtain a green run.

If a test exposes a genuine defect, fix the defect rather than hiding it.

## 10. Reporting Requirements

At completion, provide a concise report containing:

- Testing dependencies added or already present.
- Configuration created or updated.
- Tests added or modified.
- Exact commands executed and their results.
- TypeScript, lint, build, and E2E validation status where relevant.
- Known limitations and failures.
- Any pre-existing failures that could be distinguished from new failures.

Clearly distinguish among:

- **Passed:** the command was executed successfully.
- **Failed:** the command was executed and returned a failure.
- **Not run:** the command was not executed.

Never claim that tests pass, dependencies are installed, or coverage improved without evidence.

## 11. Guardrails

- Do not delete meaningful tests to obtain a green run.
- Do not install duplicate testing frameworks.
- Do not overwrite working project configuration unnecessarily.
- Do not mock the behavior a test is meant to verify.
- Do not add empty tests merely to satisfy a file checklist.
- Do not introduce unnecessary architecture or testing abstractions.
- Do not create E2E tests for every component when component tests are the appropriate layer.
- Do not leave new critical behavior untested without documenting the reason.
- Do not claim unverified validation results.

## Definition of Done

A code change is complete when:

- Relevant automated tests have been added or updated.
- Tests follow the project's architecture and folder conventions.
- Jest and React Testing Library are configured when missing and appropriate to the project.
- Cypress is configured when missing and an appropriate E2E test exists for a real critical journey.
- Focused tests and relevant validation commands have been executed where possible.
- Failures are resolved or clearly reported.
- The final report accurately describes what was and was not verified.
