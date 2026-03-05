# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **General rules:** See `C:\Dev\spitakolus\CLAUDE.md` for shared standards (documentation, assets, Meta Ads, infrastructure).

## Repository Identity

**This is torbjorn-ai** - Personal portfolio/documentation website for Torbjörn Sandblad.

- **Purpose:** Showcase AI-integrated work processes
- **Tech stack:** Next.js 15, TypeScript, Tailwind CSS, Keystatic
- **Deployment:** Vercel (tbinho GitHub)

**Related repos:**
- `spitakolus` → shared documentation (general rules)
- `flocken-website` → flocken.info product
- `nastahem` → nastahem.com product

---

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

**Keystatic Editor:** Visit `localhost:3000/keystatic` to access the visual content editor.

---

## Project Structure

```
torbjorn-ai/
├── app/
│   ├── page.tsx              # Start / Om arbetet
│   ├── arbete/
│   │   ├── page.tsx          # Process list
│   │   └── [slug]/page.tsx   # Individual process
│   ├── riktning/page.tsx     # Riktning (static)
│   ├── keystatic/            # Keystatic admin UI
│   └── api/keystatic/        # Keystatic API routes
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── content/
│   └── processer/            # MDX/Markdoc process files
├── public/assets/images/     # Images and placeholders
├── keystatic.config.ts       # Content schema
└── tailwind.config.js        # Design tokens
```

---

## Content Structure

### Process files (content/processer/)

Each process follows this exact structure:
1. Sammanfattning (in frontmatter)
2. Syfte & avgränsning
3. AI-first angreppssätt
4. Verktyg & system
5. Resultat / nuläge
6. Lärdomar
7. Fortsättning (with status)
8. Uppdateringar (timestamped)

### Ämneskluster (categories)

- `tracking-data-analys` – Tracking, data & analys
- `content-kreativ-produktion` – Content & kreativ produktion
- `automation-arbetsfloden` – Automation & arbetsflöden
- `beslutsstod-prioritering` – Beslutsstöd & prioritering
- `foretagsbyggande-ai` – Företagsbyggande med AI

### Status values

- `aktiv` – Currently being worked on
- `parkerad` – On hold, not abandoned
- `avslutad` – Completed

---

## Design System

### Colors (Tailwind)

```css
base: #FAFAF8         /* Warm off-white background */
text: #1A1A1A         /* Primary text */
text-muted: #6B7280   /* Secondary text */
accent: #3D6B5C       /* Primary accent (muted green) */
accent-hover: #4A7C6F /* Hover state */
border: #E5E7EB       /* Borders */
```

### Typography

- **Display/Headlines:** Georgia (serif) – personality, substance
- **Body:** Inter (sans-serif) – clean, readable
- **Code:** JetBrains Mono – technical elements

### Design Principles

- Text first, always
- Generous whitespace
- Portfolio feel, wiki simplicity
- Same template everywhere
- Professional, human, trustworthy

---

## Image Placeholders

Images use placeholder divs until real images are added. Prompts for Nano Banana or similar:

**Hero image:**
```
Minimal workspace with laptop showing data dashboard, warm natural
lighting from window, shallow depth of field, muted earth tones with
subtle green accent, professional but human feel, no text, 16:9 ratio
```

**Process illustration:**
```
Abstract flowing lines connecting nodes, representing workflow and
automation, warm off-white background, muted green (#3D6B5C) accent
color, minimalist, clean, professional, square format
```

---

## Git Workflow

Standard workflow (no special remotes needed):

```bash
git add .
git commit -m "Description"
git push origin main
```

Vercel auto-deploys from main branch.

---

## Future: Nano Banana Integration

Planned integration for AI image generation. API endpoint TBD.

---

## Company Info

- **Company:** Spitakolus AB (Org.nr: 559554-6101)
- **Email:** support@spitakolus.com
