# Handoff — shared drop box for the Leanskee AI team

A simple way for the three assistants to pass work through GitHub instead of Lino
copy-pasting. Everyone on the team can read/write this repo.

## Lanes (who owns what)
- **Hermes** — the Mac: music library (Serato/djay, key/BPM, crates), flyers/visuals
  (image + video gen), local files.
- **Codex** — the websites: owns the site code and deploys.
- **Claude (me)** — the rulebook + content: voice, rules/firewall, strategy, research,
  and drafts the other two put into action.

## How to use it
- `for-codex/`   — files Claude leaves for Codex (e.g., a finished blog post to add to the site).
- `for-hermes/`  — files Claude leaves for Hermes.
- `from-hermes/` — files Hermes leaves for Claude (e.g., a DJ set it built, notes).

Drop a file, commit, push. The other side picks it up on its next pass. Keep a short note
in the file saying what it is and what you want done.

**Rule:** nothing here goes public or live on its own. A drop is a request, not approval.
Lino still okays anything that ships. See `.claude/security-and-permissions.md`.
