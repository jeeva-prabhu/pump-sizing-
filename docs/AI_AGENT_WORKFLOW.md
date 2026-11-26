# PumpSizer practical multi-agent workflow

## Team
- Lead coordinator: Claude Code on the web (cloud session)
- Contributor: Google Jules (Gemini-powered cloud coding agent)
- Contributor: OpenAI Codex Cloud
- Shared coordination record: GitHub Issues and Pull Requests
- Source of truth: repository branches and commits

This is a GitHub-centred workflow, not a live agent-to-agent control plane. Each provider runs in its own isolated cloud session. The repository owner connects each service separately. Agents exchange work through GitHub issues, branches, commits, and pull requests; the lead inspects actual changes and CI before reporting completion.

For provider connection instructions and the kickoff prompt, see [ONLINE_AGENT_SETUP.md](./ONLINE_AGENT_SETUP.md).

## Start-of-task checklist
1. Inspect the current repository/branch state and any available uncommitted work in the agent's own session.
2. Fetch and inspect recent remote commits and open PRs.
3. Read `AGENTS.md` and the relevant calculation basis.
4. Identify active agent owners and file overlap. GitHub cannot reveal unpushed work in another agent's cloud session, so ask before touching overlapping files.
5. Agree on one task, branch, acceptance criteria, and test commands.

## Branch and ownership convention
- Jules/Gemini: `agent/gemini/<topic>`
- Claude: `agent/claude/<topic>`
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
- Claude: read-only assessment of architecture, open PRs, tests, and agent ownership; prepare non-overlapping task cards and coordinate integration.
- Jules/Gemini: one bounded engineering feature or independent calculation-method review, after confirming no active overlap.
- Codex: targeted regression tests or an independent second-pass review, without duplicating implementation.
- Project owner: approve engineering assumptions, standards interpretation, merges, and production release.

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
