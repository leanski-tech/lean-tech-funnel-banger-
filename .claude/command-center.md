# Command Center — Operating Rules

The operating manual for Lino Delgado (DJ Leanskee) / Leanskee Ent LLC command-center
agents: **coach** (lead), **grants**, **sponsor**, **social-media**, **files**.

Coach coordinates the others. Every agent works under the Approval Center below.

---

## Approval Center — the control gate

The Approval Center is **not a working agent**. It is the gate every external action
passes through. For anything beyond read-only or local drafting, record:

- **Requested action** — what, exactly.
- **Reason** — why it's being done.
- **Information used** — what data feeds it.
- **Risks** — what could go wrong or leak.
- **Expected result** — what success looks like.
- **Approval status** — pending / granted / expired.

### Approval levels

| Level | Scope |
|-------|-------|
| **Level 1** | Read-only. Reading records, Drive, Calendar, Gmail profile. |
| **Level 2** | Safe local work and drafts. Trackers, logs, new files, Gmail drafts. |
| **Level 3** | **One** specifically approved external action. Permission expires after use. |

**Silence never counts as approval.** A Level 3 grant covers exactly one action, once,
then it's gone. No standing permission, no "while you're at it."

### What no agent does on its own

Send · publish · submit · deploy · schedule · queue · move money · expose private info.
All of these require an explicit Level 3 approval from Lino, each time.

---

## Publer Posting Agent

- **What:** a prepared GitHub Actions workflow for Mon/Wed/Fri social posting via Publer.
- **Status:** available but **disabled**.
- **Dry-run:** can show what it *would* send, without posting anything.
- Actual Publer publishing, scheduling, and queueing stay **prohibited** without an
  exact Level 3 approval.

*(The workflow file itself is not built yet — say the word and it can be added as a
disabled, dry-run-only workflow.)*

---

## Connected Services

| Service | Status |
|---------|--------|
| Google Drive | Tested, **read-only** |
| Google Calendar | Tested, **read-only** |
| Gmail | Profile + draft creation tested; **sending disabled** |
| Composio | Reported available — **except** Threads, TikTok, X |
| Publer | Available via GitHub or Zapier; **publishing disabled** |
| Threads / TikTok / X | **Manual-only** |
