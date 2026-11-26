# PumpSizer — shared AI development rules

These rules apply to every AI coding agent and human contributor working in this repository.

## Project purpose
Maintain a dependable pump-hydraulics engineering application. Treat all hydraulic outputs as engineering calculations that require traceable assumptions and independent validation.

## Roles
- **Lead coordinator: Claude Code.** Inspect repository state, prepare task plans, delegate bounded work, review integration, and report release readiness. The lead does not have automatic control over separate Gemini or Codex sessions; coordinate through GitHub issues, branches, pull requests, and written reports.
- **Gemini: independent implementation and research.** Work only on an explicitly assigned task and branch. Report sources, assumptions, changed files, and tests.
- **Codex: implementation, debugging, and independent verification.** Work only on an explicitly assigned task and branch. Do not assume another agent's work is merged.
- **Engineering reviewer:** independently check equations, units, boundary conditions, applicable standards, and test cases. A passing software test is not proof of engineering correctness.

## Repository safety
1. Before starting, inspect `git status`, current branch, recent commits, open pull requests, and this file.
2. Never overwrite, reset, rebase, or amend another agent's uncommitted or published work without explicit coordination.
3. Use one dedicated branch per task: `feat/<topic>`, `fix/<topic>`, `test/<topic>`, or `docs/<topic>`.
4. Do not push directly to `main`. Submit a pull request.
5. Avoid simultaneous edits to the same files. Agree on file ownership before parallel work.
6. Do not merge your own work merely because it passes tests. Require independent review and the repository's configured checks.
7. Never commit credentials, API keys, tokens, personal data, or local environment files.

## Engineering integrity
1. Preserve SI units internally and make conversions explicit at input/output boundaries.
2. State equations, sign conventions, reference elevations, pressure basis (absolute/gauge), fluid-property assumptions, and applicable flow regime.
3. Validate numeric inputs, dimensions, physical ranges, zero-flow behavior, and edge cases.
4. Do not invent standards, editions, clauses, coefficients, or acceptance criteria. Cite the exact source and edition when standards are used.
5. Do not change calculation methodology or default assumptions as part of a UI-only task.
6. Distinguish calculated values, user inputs, assumptions, warnings, and design checks in the UI.
7. Treat this application as a preliminary engineering aid unless and until formal verification, validation, and quality controls justify a stronger claim.

## Required verification
- Read the existing calculation basis and tests before changing an engineering method.
- Add independent hand-checkable cases and regression tests for changed calculations.
- Run `npm test` and `npm run lint` when applicable; report exact commands and outcomes.
- For UI changes, inspect desktop and mobile behavior and verify existing calculation hooks remain intact.
- Never claim a deployment, browser test, CI run, or calculation validation that was not actually performed.

## Pull request report
Every PR must include:
- Objective and scope
- Files changed
- Technical approach and equations/methods affected
- Assumptions and standards references (edition/clauses where applicable)
- Tests run, results, and tests not run
- Known limitations and rollback considerations
- Confirmation that no other agent's work was overwritten

## Coordination protocol
- The lead coordinator assigns one bounded task per agent and records owner, branch, scope, and acceptance criteria in the issue/PR.
- Agents communicate completion by posting a concise report and opening/updating their PR.
- The lead compares the diff with the task, checks for overlap/conflicts, requests independent review, and coordinates integration.
- If another agent is actively editing a file, do not edit that file. Wait for its PR or agree on a handoff.
