# Velaza Landing — System Design

## 1. Overview

Static marketing/catalog landing page for Velaza (handmade candles). No backend, no database, no auth. The "transaction" system is WhatsApp: every call-to-action deep-links into `wa.me` with a pre-filled message. The site's only job is to present the catalog and hand off to WhatsApp with the right context already typed in.

## 2. Goals / Non-goals

**Goals**
- Present brand, catalog, pricing (unit + wholesale), and aromas.
- Get a visitor to a WhatsApp conversation with zero friction and a pre-filled message identifying the product.
- Be trivially cheap to host and to hand off to a non-technical owner for content edits (products, prices, phone number).

**Non-goals**
- No cart, checkout, payments, or order state — WhatsApp + the human owner handle that manually.
- No CMS, no build step, no backend. Adding these would be premature for a single static page with ~9 SKUs.
- No analytics/tracking pipeline (not requested; add only if the owner asks).

## 3. Architecture

```
Astro (build time)
  src/pages/index.astro
       │  composes
       ▼
  Nav · Hero · Benefits · Catalog(ProductCard×N) · Aromas · HowToBuy · Footer
       │  reads
       ▼
  src/data/products.js  (PRODUCTOS, WHATSAPP_NUMBER, waLink helpers)
       │
       ▼  astro build → dist/  (plain static HTML/CSS, zero client JS shipped)
Browser
  ├─ /index.html
  ├─ /_astro/*.css
  └─ /assets/velaza-logo.png
       │
       ▼
  wa.me/<number>?text=<url-encoded message>
       │
       ▼
  WhatsApp app/web (owner's device) — human takes over from here
```

Astro's default `output: "static"` means all the componentization happens at build time — every `wa.me` link is computed once during `astro build`, not re-rendered client-side. The shipped artifact is still plain static HTML, so hosting stays exactly as cheap as before (GitHub Pages, Netlify, Vercel, S3). The framework buys folder structure and reusable components, not runtime behavior.

## 4. Project structure

```
src/
  layouts/Layout.astro     — <head> shell: meta, fonts, global.css import
  components/
    Nav.astro
    Hero.astro
    Benefits.astro
    Catalog.astro          — maps PRODUCTOS → ProductCard
    ProductCard.astro
    Aromas.astro
    HowToBuy.astro
    Footer.astro
  data/products.js         — PRODUCTOS, WHATSAPP_NUMBER, waLink()/waLinkGeneral()/waLinkProducto()
  styles/global.css         — all presentation, unchanged from the static version
  pages/index.astro         — composes the above into the single route
public/
  assets/velaza-logo.png    — served as-is, no image pipeline
```

One component per visual section, matching how the design canvas itself was sectioned. `ProductCard.astro` is the only component that takes props — everything else is self-contained since this is a single-page site with no reuse pressure beyond the catalog loop.

## 5. Data model

Data lives as a literal JS array in `src/data/products.js` — not fetched, not persisted anywhere else.

```
Producto {
  nombre:   string   // display name
  cat:      string   // category label (eyebrow text on card)
  desc:     string   // short description
  precioU:  string   // unit price, pre-formatted ("$7.000")
  unidad:   string   // unit suffix ("/u", "/caja x6", or "")
  precioM:  string   // wholesale price, pre-formatted
  ph:       string   // placeholder-image caption (no real product photos yet)
}
```

This is intentionally flat and hand-editable: the owner (or whoever maintains the site) edits one array, no schema migration, no build step.

## 6. Key flow: "Pedir por WhatsApp"

1. Build time → `Catalog.astro` maps `PRODUCTOS` to one `<ProductCard>` per entry.
2. `Hero.astro` and `Footer.astro` set their WhatsApp button `href` from `waLinkGeneral()`.
3. `ProductCard.astro` sets its own CTA `href` from `waLinkProducto(producto)`, embedding that product's name and price in the message text.
4. Click (in the browser, post-build) → navigates to `wa.me/<number>?text=...` → opens WhatsApp with the message already composed → the human (Velaza owner) replies manually. No webhook, no order record, no server round-trip — the framework only moved *when* the link is built (build time vs. page load), not the flow itself.

## 7. State & persistence

None. Everything is resolved at `astro build` time into static HTML; there is no client-side state and no server, so there's nothing to persist. Source of truth for content is `src/data/products.js` (products/phone) and `public/assets/` (images).

## 8. Extension points (only if/when actually needed)

- **More products**: add entries to `PRODUCTOS` in `src/data/products.js`. No other file changes.
- **Real product photos**: replace `.card-ph` placeholder div in `ProductCard.astro` with an `<img>` once photos exist; keep the `ph` field as `alt` text.
- **Non-technical editing**: if the owner needs to edit products without touching code, that's the trigger to move `PRODUCTOS` into a content collection (`src/content/`) or a headless CMS — not before, since today's array already covers "one person edits code occasionally."
- **Interactive components**: Astro supports islands (React/Vue/Svelte) hydrated only where needed — e.g. a live product filter — without turning the whole site into a SPA. Add this only when a concrete interactive need shows up.
- **Multiple WhatsApp agents / order tracking**: that's a different system (needs a backend); out of scope until actually requested.

## 9. Known limitation

`WHATSAPP_NUMBER` in `src/data/products.js` is a placeholder (`573000000000`) and must be replaced with Velaza's real number before this goes live — every WhatsApp CTA on the page depends on it.
