# Lean Tech Funnel

Simple funnel creator and analyzer with step-by-step instructions.

This repo contains a complete, working pre-launch funnel for "The DJ's AI Playbook — 2026 Expanded Teaching Edition" by DJ Leanskee (a $29 paid book): a waitlist opt-in page and a thank-you page. No backend, no database, no monthly fees. The book itself is NOT stored in this repo — it is a paid product.

## How the funnel works (plain English)

1. **`index.html` — the waitlist page.** A DJ lands here, reads the pitch, and enters their name + email for first access to the $29 playbook at launch.
2. **The form** posts to [FormSubmit](https://formsubmit.co) — a free service that forwards every submission to your email inbox. Every new lead = an email to you with their name and address. No signup or code needed.
3. **`thanks.html` — the thank-you page.** Confirms they are first in line for the launch.

```
Visitor → index.html (waitlist form) → email lands in your inbox (the lead!)
                                     → thanks.html (first-in-line confirmation)
At launch: email the list a buy link ($29) → sales.
```

## Setup (one-time, ~3 minutes)

1. **Turn on GitHub Pages:** repo **Settings → Pages → Source: Deploy from a branch**, pick your branch, folder `/ (root)`, save. Your funnel goes live at `https://<username>.github.io/<repo>/`.
2. **Activate the form:** submit the form once yourself. FormSubmit sends a confirmation email to the inbox address in the form — click the link inside it once, and all future leads flow automatically.

## Analyzing your funnel

Each lead arrives as an email, so your inbox is your lead log. To count conversions, search your inbox for the form's subject line ("New lead: DJ AI Playbook waitlist"). For page-view stats, add any free analytics snippet (e.g., GoatCounter or Plausible) to `index.html`.

## Upgrading later

- **CRM:** pipe the lead emails into a CRM (e.g., HubSpot) with an automation tool so contacts are created automatically.
- **Email automation:** connect an email platform to send the welcome sequence to every new lead.
- **Custom domain:** point your own domain at GitHub Pages in Settings → Pages.
