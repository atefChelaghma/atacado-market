## Component Separation and Feature-Based Architecture

When reviewing or modifying frontend components, evaluate whether the component mixes presentation, configuration data, type definitions, business logic, or styling responsibilities.

### Required review checks

1. **Component responsibility**
   - Components should primarily render UI and coordinate presentation behavior.
   - Avoid embedding large configuration arrays, static navigation data, or unrelated business logic inside component files.

2. **Data separation**
   - Move reusable or substantial static data into a dedicated data/configuration file within the component's feature folder.
   - Use descriptive filenames such as `site-header.data.ts`.
   - Keep data separate from rendering logic.
   - Do not extract trivial constants when doing so would add unnecessary complexity.

3. **Type separation**
   - Move shared, meaningful, or complex interfaces and type definitions into dedicated type files, such as `site-header.types.ts`.
   - Use `import type` for type-only imports.
   - Avoid duplicating types or creating unnecessary type files for trivial one-off values.
   - Ensure types accurately represent the data and component contracts.

4. **Feature-based folders**
   - Organize layout features into separate folders, for example:
     - `layout/header/`
     - `layout/footer/`
   - Keep each feature's component, SCSS Module, data, and relevant types together.
   - Follow existing repository conventions where they differ from these examples.
   - Avoid unrelated components, styles, or data being grouped into one oversized file.

5. **Styling separation**
   - Keep component-specific styles in SCSS Modules.
   - Do not introduce Tailwind CSS.
   - Preserve existing design tokens, responsive behavior, accessibility, and visual fidelity during refactoring.

6. **Navigation correctness**
   - Use `next/link` for internal navigation.
   - Verify route destinations before introducing or changing links.
   - Ensure active navigation state reflects the actual route when appropriate.
   - Do not invent routes or silently leave broken links.

7. **Maintainability**
   - Prefer clear names, explicit types, small focused modules, and minimal duplication.
   - Add barrel files only when they improve imports and do not introduce circular dependencies.
   - Do not create empty files or unnecessary abstractions merely to enforce a folder template.

### Required review workflow

When a review identifies a meaningful violation:

1. Explain the issue and its impact briefly.
2. Refactor the affected code to follow the project's architecture.
3. Update imports and any affected tests.
4. Preserve behavior and visual appearance unless a defect requires a change.
5. Run the relevant lint, type-check, and test commands available in the project.
6. Inspect the final diff for regressions and unrelated modifications.

Do not stop at reporting an actionable architectural issue when the task explicitly requests code review and remediation. If the user requests analysis only, report findings without modifying files.

### Definition of done

- Components have clear responsibilities.
- Substantial static data is separated from rendering.
- Meaningful types are defined in appropriate type modules.
- Feature-related files are grouped coherently.
- No unnecessary abstractions or duplicated definitions are introduced.
- Existing behavior, accessibility, styling, and tests are preserved or appropriately updated.
