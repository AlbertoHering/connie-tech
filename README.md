Connietech Website (EN/ES) — Astro + Tailwind (Free Hosting Ready)

Overview
- Static, high‑performance website built with Astro + TailwindCSS
- Bilingual (English + Spanish) with separate routes: / and /es
- Zero monthly hosting fees: deploy to Cloudflare Pages or GitHub Pages
- Light CRM options: Google Sheets (Apps Script) or HubSpot Free
- WhatsApp CTA, 2‑step lead form, strong UX and SEO setup

Folder structure
- src/pages/             Pages (EN + ES)
- src/components/        Shared UI components
- src/layouts/           Base HTML layout
- src/styles/global.css  Tailwind entry
- public/                Static assets (logo, favicon, og image)

Local development
1) Prerequisites: Node.js 18+
2) Install dependencies:
   npm install
3) Start dev server:
   npm run dev
4) Build for production:
   npm run build
5) Preview build:
   npm run preview

Forms: Light CRM without monthly fees
Option A — Google Sheets (recommended free option)
- Create a new Google Sheet named Connietech Leads with headers:
  Timestamp | Name | Company | Email | Phone | Project Type | Budget | Timeline | Location | Description | Questions | How Heard
- Open Extensions > Apps Script and paste the code from docs/integrations/google-apps-script/lead_collector.gs
- Deploy as Web App: Deploy > New deployment > Web app
  - Execute as: Me
  - Who has access: Anyone
  - Copy the Web app URL
- Create a new file named .env at site root and add:
  PUBLIC_FORMS_ENDPOINT=PASTE_YOUR_WEB_APP_URL
- Rebuild and redeploy. Submissions will write to the sheet and send you an email.

Option B — HubSpot Free CRM (also free)
- Create a HubSpot form and get the embed code
- Replace the form markup in src/pages/contact.astro and src/pages/es/contact.astro with the HubSpot embed script block.

Deployment (no monthly hosting)
Cloudflare Pages (recommended)
- Create a new project from your GitHub repo
- Framework preset: None
- Build command: npm run build
- Build output directory: dist
- Environment variable: PUBLIC_FORMS_ENDPOINT (paste your web app URL)
- After first deploy, add your custom domain in Cloudflare Pages > Custom Domains
- Update GoDaddy DNS: point your domain to Cloudflare (nameservers) or add CNAME records if using partial setup

GitHub Pages (simple alternative)
- Run npm run build locally
- Push the dist/ folder to the gh-pages branch (use a GitHub Action or a manual deploy tool)
- Set the repo to serve from gh-pages
- Add a CNAME file in dist/ with your domain if needed
- Point GoDaddy DNS to GitHub Pages per GitHub’s docs

Content updates
- Minor text edits: edit the Astro page/component files and rebuild
- Images: place optimized WebP/AVIF files into public/images and update img src
- Colors/brand: update tailwind.config.cjs and/or src/styles/global.css

Analytics & SEO
- Add GA4 or Plausible by inserting the script into src/layouts/Base.astro
- Sitemap/robots can be added later if you want multi‑page indexing controls

Notes
- The included SVG wordmark in public/assets is an interim mark for sharp rendering. Replace it later with your official SVG if available.
- WhatsApp phone and email are placeholders; update them in components and contact pages.

Support
- If you need help deploying or wiring Google Sheets, share your Google account (view access) or paste the Web App URL and I’ll integrate it.
