# PumpSizer practical multi-agent workflow

## Team
- Lead coordinator: Claude Code
- Contributor: Gemini CLI
- Contributor: OpenAI Codex
- Shared coordination record: GitHub Issues and Pull Requests
- Source of truth: repository branches and commits

This is a human-coordinated workflow, not a live agent-to-agent control plane. Each tool runs in its own session. Agents exchange work through GitHub artifacts; the lead must inspect actual commits and CI before reporting completion.

## Start-of-task checklist
1. Check `git status --short --branch`.
2. Fetch and inspect recent remote commits and open PRs.
3. Read `AGENTS.md` and the relevant calculation basis.
4. Identify active agent owners and file overlap.
5. Agree on one task, branch, acceptance criteria, and test commands.

## Branch and ownership convention
- Gemini: `agent/gemini/<topic>`
- Claude Code: `agent/claude/<topic>`
- Codex: `agent/codex/<topic>`
- Shared release branches are coordinated by the lead only.

One task per branch. Avoid parallel edits to the same file. If work overlaps, pause one agent and agree on a handoff rather than resolving conflicts by overwriting.

## Task card template
**Task:**
**Owner:**
**Branch:**
**Allowed files/areas:**
**Do not touch:**
**Acceptance criteria:**
**Required tests:**
**Dependencies:**

## Pull-request flow
1. Contributor pushes a dedicated branch and opens a PR into the agreed integration target.
2. Contributor fills the PR template with technical basis and test evidence.
3. Lead checks changed files, base/head, commit history, CI status, and overlap with other PRs.
4. Use the read-only hydraulic reviewer for calculation-related changes.
5. Request corrections for unresolved defects or missing evidence.
6. Merge only after required checks and independent review pass.
7. Deploy separately and perform a smoke test; do not equate merge with deployment.

## First practical division of work
- Claude Code: inspect roadmap, current PRs, architecture, and prepare task cards; coordinate integration.
- Gemini: research one bounded engineering feature or produce an independent calculation-method review. Do not assume the lead's branch is safe to edit.
- Codex: build or run targeted regression tests and independently inspect the same feature from a separate branch, without duplicating implementation.
- Human project owner: approve engineering assumptions, standards interpretation, merges, and production release.

## Session handoff report
- Task and branch:
- Commit/PR:
- Files changed:
- Technical decisions:
- Tests run and exact outcomes:
- Tests not run:
- Known risks/limitations:
- Files still being edited:
- Ready for review?:
