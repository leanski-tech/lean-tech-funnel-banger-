# Lean Tech Funnel

Simple funnel creator and analyzer with step-by-step instructions.

This repo contains a complete, working pre-launch funnel for "The DJ's AI Playbook — 2026 Expanded Teaching Edition" by DJ Leanskee (a $29 paid book): a waitlist opt-in page and a thank-you page. No backend, no database, no monthly fees. The book itself is NOT stored in this repo — it is a paid product.

## How the funnel works (plain English)

1. **`index.html` — the waitlist page.** A DJ lands here, reads the pitch, and enters their name + email for first access to the $29 playbook at launch.
2. **The button** opens the visitor's own email app with a pre-written message to lino@infoleanskee.com. They hit send, and the lead lands directly in the inbox. No third-party form service involved, so there is nothing external to break.
3. **`thanks.html` — the thank-you page.** Confirms they are first in line for the launch.

```
Visitor → index.html (waitlist form) → email lands in your inbox (the lead!)
                                     → thanks.html (first-in-line confirmation)
At launch: email the list a buy link ($29) → sales.
```

## Setup

GitHub Pages is already on (Settings → Pages → deploy from branch). There is nothing else to activate — the signup button uses plain email.

## Analyzing your funnel

Each lead arrives as an email, so your inbox is your lead log. To count conversions, search your inbox for the subject line ("Put me first in line - DJ AI Playbook"). For page-view stats, add any free analytics snippet (e.g., GoatCounter or Plausible) to `index.html`.

## Upgrading later

- **CRM:** pipe the lead emails into a CRM (e.g., HubSpot) with an automation tool so contacts are created automatically.
- **Email automation:** connect an email platform to send the welcome sequence to every new lead.
- **Custom domain:** point your own domain at GitHub Pages in Settings → Pages.
