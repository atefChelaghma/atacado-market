---
name: project-discovery
description: Use at the start of work in an unfamiliar repository or before significant implementation, refactoring, or architecture decisions.
---

# Project Discovery Skill

## Workflow

1. Inspect the repository tree and working-tree status.
2. Read README, agent instructions (`AGENTS.md`, `CLAUDE.md`, or equivalents), package/build manifests, environment examples, and relevant architecture docs.
3. Identify framework and runtime versions, package manager, scripts, styling system, test tools, lint/typecheck/build commands, and CI workflows.
4. Trace the relevant route, component, service, model, or test before proposing changes.
5. Identify project constraints, existing patterns, and uncommitted user work.
6. Summarize findings briefly and propose the smallest safe next step.

## Guardrails

- Do not assume a dependency or command exists; verify it.
- Do not expose secrets from environment files or logs.
- Do not reset, clean, or overwrite working-tree changes.
- Do not perform destructive commands without explicit approval.
