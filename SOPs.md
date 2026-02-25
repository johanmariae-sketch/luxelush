# LuxeLush — Standard Operating Procedures

Work phase-by-phase. Complete each phase fully before moving to the next.
After each phase, run verification checks before proceeding.

---

## SOP 1: Project Scaffold (Phase 1)

### Steps
1. Initialize Next.js project with TypeScript, Tailwind, ESLint, App Router, src directory
2. Install dependencies: framer-motion, lucide-react
3. Configure tailwind.config.ts with brand tokens (colors, fonts, spacing)
4. Set up Google Fonts in src/app/layout.tsx using next/font
5. Create src/app/globals.css with Tailwind directives + base styles
6. Create folder structure: components/, data/, lib/
7. Move logo to public/images/logo.png
8. Create src/lib/constants.ts (WhatsApp number, social links, brand info)

### Verification
- [ ] npm run dev starts without errors
- [ ] Fonts load correctly in browser
- [ ] Tailwind custom colors work
- [ ] Folder structure matches plan

---

## SOP 2: Layout Components (Phase 2)

### Steps
1. Build Navbar.tsx — promo top bar + logo center + nav links + icons
   - Promo bar: scrolling gold text
   - Nav: pill-shaped active state (STITCH-inspired), clean links
   - Mobile: hamburger menu with slide-out drawer
2. Build Footer.tsx — logo, nav, social icons, WhatsApp link, copyright
3. Build WhatsAppButton.tsx — floating bottom-right, green, pulse animation
4. Create src/lib/whatsapp.ts — URL builder with pre-filled messages
5. Wire layout in src/app/layout.tsx: Navbar + children + Footer + WhatsAppButton

### Verification
- [ ] Navbar renders correctly on mobile + desktop
- [ ] Footer displays with all links
- [ ] WhatsApp floating button visible and clickable
- [ ] WhatsApp link opens correct chat

---

## SOP 3: Homepage (Phase 3)

### Steps
1. Build HeroBanner.tsx — STITCH-inspired:
   - Large serif heading centered on clean background
   - Subtitle text below
   - Overlapping tilted product photo cards in a row
   - Social proof bar: avatar stack + CTA button + quality badge
2. Build CategoryGrid.tsx — 3-4 category cards with hover effects
3. Build FeaturedProducts.tsx — product grid section with heading
4. Build ProductCard.tsx — image, name, price, "Pedir" button, badges
5. Build PromoBanner.tsx — full-width lifestyle image with text overlay + WhatsApp CTA
6. Build InstagramFeed.tsx — grid of social photos (placeholder)
7. Assemble all sections in src/app/page.tsx

### Verification
- [ ] Homepage loads with all sections visible
- [ ] Hero section matches STITCH clean/editorial feel
- [ ] Product cards display correctly in grid
- [ ] All hover effects and animations work
- [ ] Responsive on mobile, tablet, desktop

---

## SOP 4: Product System (Phase 4)

### Steps
1. Create src/data/products.ts with typed product data
2. Create src/data/categories.ts with category definitions
3. Build catalog page src/app/catalogo/page.tsx with filter sidebar + product grid
4. Build ProductFilter.tsx — filter sidebar component
5. Build product detail page src/app/producto/[slug]/page.tsx
6. Build ProductGallery.tsx — main image + thumbnail strip
7. Wire WhatsApp ordering on all product touchpoints

### Verification
- [ ] Catalog page shows all products with working filters
- [ ] Product detail page loads for each product slug
- [ ] Image gallery works correctly
- [ ] WhatsApp buttons generate correct pre-filled messages

---

## SOP 5: Polish & Launch (Phase 5)

### Steps
1. Add Framer Motion animations (page load, scroll, hover)
2. Mobile responsiveness audit
3. SEO optimization (metadata, OG images)
4. Performance pass (image optimization, lazy loading)
5. About page src/app/nosotros/page.tsx

### Verification
- [ ] npm run build succeeds with no errors
- [ ] Lighthouse: Performance 90+, Accessibility 90+, SEO 90+
- [ ] All pages work across browsers
- [ ] All WhatsApp flows work end-to-end
