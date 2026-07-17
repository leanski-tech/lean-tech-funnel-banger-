# Lean Tech Funnel

Simple funnel creator and analyzer with step-by-step instructions.

This repo contains a complete, working pre-launch funnel for "The DJ's AI Playbook — 2026 Expanded Teaching Edition" by DJ Leanskee (a $29 paid book): a sales landing page linking to the Gumroad checkout. No backend, no database, no monthly fees. The book itself is NOT stored in this repo — it is a paid product.

## How the funnel works (plain English)

1. **`index.html` — the sales page.** A DJ lands here, reads the pitch, and clicks through to buy.
2. **The button** links to the Gumroad product page (https://leanski.gumroad.com/l/ojfvqt), which handles payment and instant PDF delivery. Gumroad also captures every buyer's email.

```
Visitor → index.html (sales page) → Gumroad checkout ($29) → instant download
Buyer emails collected automatically in the Gumroad dashboard.
```

## Setup

GitHub Pages is already on (Settings → Pages → deploy from branch). There is nothing else to activate — the signup button uses plain email.

## Analyzing your funnel

Each lead arrives as an email, so your inbox is your lead log. To count conversions, search your inbox for the subject line ("Put me first in line - DJ AI Playbook"). For page-view stats, add any free analytics snippet (e.g., GoatCounter or Plausible) to `index.html`.

## Upgrading later

- **CRM:** pipe the lead emails into a CRM (e.g., HubSpot) with an automation tool so contacts are created automatically.
- **Email automation:** connect an email platform to send the welcome sequence to every new lead.
- **Custom domain:** point your own domain at GitHub Pages in Settings → Pages.
