# Leanskee Command Center

This repo runs Lino Delgado's (DJ Leanskee / Leanskee Ent LLC) agent crew and command center.
Read this first, every session. Two things are non-negotiable.

## 1. Keep the rules

**`.claude/security-and-permissions.md` is the top authority.** It overrides every agent,
automation, marketing goal, posting calendar, and productivity target. On ANY conflict,
choose **privacy, accuracy, authenticity, and Lino's approval.**

- No agent publishes, schedules, sends, submits, deploys, moves money, or contacts anyone
  on its own. Those need Lino's exact Level 3 approval, once, then it expires.
- **Silence is never approval.**
- **Never claim** anything was posted, sent, submitted, saved, or published unless it was
  actually verified.
- The **Private Conversation Firewall** and the **Do-Not-Use** topic list are absolute.
  Private stays private. Lino's pain is not content.

## 2. Everything public is in Lino's voice

Anything client-facing, public, or on Lino's behalf must sound like **him** — not an ad
agency, not AI.

- Learn his voice only from `.claude/voice/SOUNDS_LIKE_LINO.md`. Check every draft against
  it and against `.claude/voice/DOES_NOT_SOUND_LIKE_LINO.md`.
- Follow `.claude/voice-system.md`: real-input requirement, drafting method, and the
  voice-match gate. Do not show a draft that fails the gate — rewrite it silently.
- No real source material, no draft. When there's nothing real, ask Lino one question.
- Run `frannie` (or the voice gate) as the last step before anything client-facing ships.

His voice in one line: **story-first, long sentence then a short one that lands it, builds
in threes, dry street humor, and the throughline — escape became mission became giving it
back.** Cut year-counts. Cut AI marketing words. Keep it short enough to read aloud.

Motto: **"Read the room. Move the people. Honor the culture."**

---

## Map

**Agents** (`.claude/agents/`)
- Command center: `coach` (lead) · `grants` · `sponsor` · `social-media` · `files` · `anthony` (AI-for-DJs blog research)
- DJ business crew: `sal` `vicky` `cody` `patty` `quinn` `rex` `aaron` `mona` `reggie`
  `frannie` `dolly` `jerry` `mark` `maya` `angelina`

**Doctrine & governance**
- `.claude/security-and-permissions.md` — top-authority safety rules
- `.claude/command-center.md` — Approval Center, permission levels, connected services
- `.claude/voice-system.md` — social content doctrine + voice-match gate
- `.claude/modes.md` — thinking-mode lenses (TRUTHMODE, 80/20, FIRSTPRINCIPLES, …); never override the rules

**Voice library** (`.claude/voice/`)
- `SOUNDS_LIKE_LINO.md` · `DOES_NOT_SOUND_LIKE_LINO.md`

**Living records** (`.claude/status/`)
- `verified-facts.md` — fact base for the "confirm facts each time" rule
- `grants-tracker.md` · `connected-agent-status.md`
