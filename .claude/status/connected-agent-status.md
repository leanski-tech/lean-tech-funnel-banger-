# Connected Agent Status

**Last updated: 2026-07-20**

Living record of connected services, tests, and disabled actions for the command center.
Coach keeps this current. External actions stay approval-gated (see `.claude/command-center.md`).

---

## Active automations

| Automation | ID |
|------------|----|
| Coach Daily Connected Agent Run | `coach-daily-connected-agent-run` |
| Coach Weekly Report | `coach-weekly-report` |

---

## Connected tests (2026-07-20)

| Test | Result |
|------|--------|
| Google Drive — read-only root listing | PASS |
| Google Calendar — read-only availability check | PASS |
| Gmail — profile check | PASS |
| Gmail — draft creation only | PASS |
| Composio — user-reported connected apps | PASS, except Threads, TikTok, X |
| Composio — social-profile discovery this session | PARTIAL — Constant Contact social tools found, but Constant Contact showed **no active connection** here |
| Publer — user-reported connection path | AVAILABLE via GitHub or Zapier, **approval-gated only** |

---

## Disabled actions (all require exact Level 3 approval)

- Gmail sending
- Social publishing
- Social scheduling
- Direct messages
- Comment responses
- Grant submissions
- Website deployments
- Threads / TikTok / X publishing workflows — **Lino handles these manually**
- Publer publishing and scheduling

---

## Current scope

- Coach can run scheduled **safe-work** reviews through Codex automation and update
  local project records.
- **Composio** is the fallback bridge when a direct connector is unavailable. Any
  Composio action that would send, publish, schedule, message, or modify an outside
  account stays disabled until Lino gives exact approval for that specific action.
- **Publer** is an available connection path via GitHub or Zapier for approved
  workflows only. Coach may prepare drafts and records, but must not publish, schedule,
  or queue posts in Publer without Lino's exact approval.

---

## Open item

- **Constant Contact:** social tools discovered but **not connected** in this session.
  No action — flagged for Lino to decide whether to connect or ignore.
