# Lean Tech Funnel

Simple funnel creator and analyzer with step-by-step instructions.

This repo contains a complete, working lead-generation funnel — a free lead magnet ("The 8-Agent AI Team Playbook"), an opt-in page, and a thank-you page. No backend, no database, no monthly fees.

## How the funnel works (plain English)

1. **`index.html` — the opt-in page.** A visitor lands here, reads the pitch, and enters their name + email to get the free playbook.
2. **The form** posts to [FormSubmit](https://formsubmit.co) — a free service that forwards every submission to your email inbox. Every new lead = an email to you with their name and address. No signup or code needed.
3. **`thanks.html` — the thank-you page.** After submitting, the visitor lands here and gets instant access to the playbook.
4. **`playbook.html` — the lead magnet.** The free guide that makes people want to join the list in the first place.

```
Visitor → index.html (opt-in form) → email lands in your inbox (the lead!)
                                   → thanks.html → playbook.html (instant delivery)
```

## Setup (one-time, ~3 minutes)

1. **Turn on GitHub Pages:** repo **Settings → Pages → Source: Deploy from a branch**, pick your branch, folder `/ (root)`, save. Your funnel goes live at `https://<username>.github.io/<repo>/`.
2. **Activate the form:** submit the form once yourself. FormSubmit sends a confirmation email to the inbox address in the form — click the link inside it once, and all future leads flow automatically.

## Analyzing your funnel

Each lead arrives as an email, so your inbox is your lead log. To count conversions, search your inbox for the form's subject line ("New lead: AI Team Playbook"). For page-view stats, add any free analytics snippet (e.g., GoatCounter or Plausible) to `index.html`.

## Upgrading later

- **CRM:** pipe the lead emails into a CRM (e.g., HubSpot) with an automation tool so contacts are created automatically.
- **Email automation:** connect an email platform to send the welcome sequence to every new lead.
- **Custom domain:** point your own domain at GitHub Pages in Settings → Pages.
