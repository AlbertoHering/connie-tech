# Connietech — Curated Royalty‑Free Images (Unsplash)

Note: I added local placeholders in `site/public/images/stock/` so the site is self-hosted now. Download the images below and replace the placeholder SVGs with AVIF/WebP/JPG using the same filenames or update the paths in the components. Unsplash license allows free commercial use; attribution is appreciated but not required.

Suggested hero and section images
1) Data center corridor (Hero)
   - URL: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80
   - Alt: Modern data center corridor with network racks

2) Network cables close-up
   - URL: https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80
   - Alt: Patch panel with network cables

3) Telecom tower against sky
   - URL: https://images.unsplash.com/photo-1568972814772-88c4836a6ad2?auto=format&fit=crop&w=1600&q=80
   - Alt: Telecommunications tower

4) Structured cabling bundle
   - URL: https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1600&q=80
   - Alt: Structured cabling bundle in rack

5) Server room wide shot
   - URL: https://images.unsplash.com/photo-1585079542156-2755d9c8aff1?auto=format&fit=crop&w=1600&q=80
   - Alt: Server room with racks and cable trays

6) Fiber optics detail
   - URL: https://images.unsplash.com/photo-1600267175161-cfaa6223f361?auto=format&fit=crop&w=1600&q=80
   - Alt: Fiber optics strands

7) Network switch ports
   - URL: https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1600&q=80
   - Alt: Network switch with ethernet ports

8) Miami skyline (regional hint)
   - URL: https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80
   - Alt: Miami skyline at dusk

How to self-host
- Download any image(s) and place them under `site/public/images/stock/`
- Example destination: `site/public/images/stock/data-center-hero.avif` (or .webp/.jpg)
- Current placeholders:
  - data-center-hero.svg (used in EN/ES hero)
  - network-cables.svg
  - telecom-tower.svg
  - structured-cabling.svg
  - server-room.svg
  - fiber-optics.svg
  - network-switch.svg
  - miami-skyline.svg
- Update the `src` in components if you change filenames (SectionsEN.astro, SectionsES.astro)

Performance tip
- Prefer AVIF/WebP when exporting (e.g., hero-1600.avif)
- Keep hero <= 250kb where possible
- Always include `loading="lazy"` on non-hero images
