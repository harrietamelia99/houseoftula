## House of Tula Website

Quiet marketing site for the Chew Magna studio  -  Yoga, holistic treatments and seasonal gatherings.

### Stack

- Next.js App Router (`next@14`)
- Tailwind CSS 3 tokens aligned to the House of Tula palette
- Google Fonts wired through `next/font` (Cormorant Garamond + DM Sans)

### Brand colour pairings

See [`docs/brand-color-pairing.md`](docs/brand-color-pairing.md) for which cream / olive / brown combinations to use together (aligned with Emma’s identity sheet).

### Photography

Site imagery lives in [`public/images/site/`](public/images/site/) and is mapped in [`lib/siteImages.ts`](lib/siteImages.ts). The [`SitePhoto`](components/SitePhoto.tsx) wrapper uses `next/image` with consistent crops. Replace files there (same names) or extend `siteImages` + components when you add more shots.

### Content

Marketing copy centralises in [`data/content.ts`](data/content.ts). **Client onboarding** (May 2026) is archived as [`docs/source/house-of-tula-website-onboarding-form-2026-05-18.csv`](docs/source/house-of-tula-website-onboarding-form-2026-05-18.csv) and summarised as the `onboardingSubmission` export so requirements stay traceable.

### Local development

```
npm install
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000).

### Troubleshooting

**Page looks like raw HTML (system fonts, black text, links run together).**  
Tailwind is not loading  -  usually the stylesheet request to `/_next/static/css/...` failed or never ran.

- In the browser **Network** tab, reload and check whether `layout.css` (under `/_next/static/css/`) returns **200**. A **404** often means a stale build: stop the server, run `rm -rf .next` and `npm run dev` again (or `npm run build && npm run start` after a clean build).
- Hard refresh: **⌘⇧R** (Safari/Chrome) or clear the cache for `localhost`.
- Prefer your **normal browser** (Safari, Chrome). Some embedded in-IDE previews load HTML but block or mishandle dev assets; use the same URL it prints (e.g. `http://localhost:3000`).
- Confirm the address bar is **`http://localhost:…`** (or `http://127.0.0.1:…`), not a `file://` path or an old tab from a different project/port.

The header and main content share `site-frame` / `siteContentFrame` in `app/globals.css` and `lib/siteLayout.ts`. If you still see no cream background and no gutters, **`globals.css` itself isn’t loading**  -  fix the dev server / Network error first.

### Deployment

Optimized for Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production hostname for accurate canonical URLs plus sitemap wiring.
