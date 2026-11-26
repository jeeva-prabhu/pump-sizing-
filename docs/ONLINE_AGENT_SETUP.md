# PumpSizer online multi-agent setup

## Purpose

Use browser-based/cloud coding agents. No local CLI installation is required for this workflow. Each provider must still be connected by the repository owner to the GitHub repository through that provider's own sign-in and authorization flow.

## Agent roles

- **Lead: Claude Code on the web** — task planning, coordination, review of contributor PRs, integration recommendations, and release readiness.
- **Gemini contributor: Google Jules** — cloud implementation and testing on an isolated branch. Jules is Google's hosted coding agent powered by Gemini models; it is not the regular Gemini chat website.
- **Codex contributor: Codex Cloud** — independent implementation, regression testing, debugging, and second-pass review in an isolated cloud workspace.
- **Shared source of truth: GitHub** — issues define tasks; branches isolate work; pull requests carry code and test evidence.

These agents do not automatically message or control one another. Claude coordinates by reading GitHub issues, branches, commits, and pull requests. The repository owner must connect each service separately.

## One-time connection steps

### 1. Claude Code on the web (lead)

1. Open https://claude.ai/code and sign in.
2. Choose the GitHub connection option and authorize the Claude GitHub App for this repository: `jeeva-source/pump-sizing-`.
3. Open a cloud session on this repository.
4. Confirm Claude can read `AGENTS.md`, `CLAUDE.md`, and `docs/AI_AGENT_WORKFLOW.md`.
5. Use the prompt in the "Lead kickoff prompt" section below.

Official guide: https://code.claude.com/docs/en/claude-code-on-the-web

### 2. Google Jules (Gemini-powered contributor)

1. Open https://jules.google.com and sign in with the Google account you want to use.
2. Select **Connect to GitHub account** and authorize only the `jeeva-source/pump-sizing-` repository.
3. Select the repository and choose a dedicated task branch or the agreed base branch.
4. Submit a task and review/approve Jules's plan before allowing edits.
5. Require Jules to open a pull request and include its test results and handoff report.

Jules automatically reads the root `AGENTS.md`. It is the recommended Google-hosted coding agent for this online workflow. The normal Gemini chat website alone does not provide the same GitHub branch/PR coding workflow.

Official guide: https://jules.google/docs/

### 3. Codex Cloud (contributor)

1. Open https://chatgpt.com/codex or start a ChatGPT task using **Work in > Cloud**.
2. Connect the GitHub account when prompted and grant access to `jeeva-source/pump-sizing-`.
3. Create a cloud environment for the repository if prompted; let Codex inspect the project setup and verify its install/test commands.
4. Start a task on its own branch. Ask it to read `AGENTS.md` and `docs/AI_AGENT_WORKFLOW.md`.
5. Require a pull request and exact test outcomes.

Official guide: https://learn.chatgpt.com/docs/cloud

## Task isolation and handoff

- One agent, one bounded task, one branch, one PR.
- Branch names: `agent/claude/<topic>`, `agent/gemini/<topic>` (Jules/Gemini), and `agent/codex/<topic>`.
- Do not assign two agents the same files or overlapping implementation.
- Before starting a task, inspect open PRs and ask whether another agent is already editing the relevant files. Never assume an unpushed local/cloud task is visible in GitHub.
- Do not push directly to `main`. Do not merge a PR just because an agent says it is complete.
- Claude reviews the diff, engineering basis, tests, and CI; the project owner approves engineering assumptions and production releases.
- For hydraulic calculation changes, require an independent hand-checkable case. AI agreement is not engineering sign-off.

## Required contributor handoff

Every agent must report:
- Task and branch
- PR link and commit
- Files changed
- Equations/methods and assumptions affected
- Exact commands run and test outcomes
- Tests not run
- Known limitations and risks
- Any files still being edited
- Whether the work is ready for review

## Lead kickoff prompt

> You are the lead coordinator for PumpSizer. Read AGENTS.md, CLAUDE.md, and docs/AI_AGENT_WORKFLOW.md. Inspect the current main branch, every open PR, and recent commits before proposing work. Do not edit or overwrite another agent's work. Identify the active status of the existing V5.1.2 and V5.2.0 pull requests, then prepare a non-overlapping task plan for Jules/Gemini and Codex. Use GitHub issues as task cards and require separate branches and PRs. Do not claim that you can control the other agents' sessions. Do not merge or deploy without independent review, passing required checks, and explicit release verification. Begin with a read-only repository assessment; do not start implementation until task ownership and file scope are clear.

## Important limitations

- Repository files cannot install or authorize Claude, Jules, or Codex on the user's behalf.
- The owner must complete the OAuth/GitHub authorization in each provider's own website.
- A GitHub-connected ChatGPT analysis session is not the same thing as a Codex Cloud coding session.
- GitHub issues and PRs are the coordination channel, not a live agent-to-agent messaging bus.
- Keep repository permissions to the minimum required. Never put provider API keys or personal tokens in issues, commits, or source files.
