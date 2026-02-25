# LuxeLush SRL — Project Guide

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3
- Framer Motion (animations)
- Lucide React (icons)
- next/font/google (Cormorant Garamond, DM Sans, Montserrat)

## Brand Identity
- **Primary gold**: #C6993E (from logo)
- **Dark gold**: #A67C2E
- **Light gold**: #E8C97A
- **Background**: #FAFAFA
- **Cream sections**: #FDF8F0
- **Accent rose**: #E84C6F (CTAs, sale badges)
- **Text**: #0A0A0A (headings), #525252 (body)

## Design Principles
- Landing page: STITCH-inspired — clean, editorial, generous whitespace, serif headings
- Catalog: Fashion Nova-inspired — bold grids, vibrant product cards, WhatsApp CTAs
- Follow the frontend-design skill: distinctive typography, intentional motion, cohesive palette
- NEVER use generic fonts (Inter, Roboto, Arial) or purple gradient cliches
- Every component must feel intentionally designed, not template-like

## Fonts
- Headings: Cormorant Garamond (elegant serif — distinctive, NOT generic)
- Body/UI: DM Sans (modern geometric sans — more characterful than Inter)
- Promo/Accent: Montserrat (bold uppercase for banners, CTAs)

## Key Conventions
- All text content in Spanish
- WhatsApp ordering via wa.me URL API
- Product data in TypeScript files (no backend)
- Use `<Image>` from next/image for all images
- Mobile-first responsive design
- Components in src/components/ organized by feature

## File Organization
- Pages: src/app/[route]/page.tsx
- Components: src/components/[feature]/ComponentName.tsx
- Data: src/data/
- Utilities: src/lib/
- Static assets: public/images/, public/videos/

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Lint check
