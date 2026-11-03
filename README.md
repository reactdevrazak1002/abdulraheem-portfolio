# TaxwithAbdul website (Next.js 14, App Router, JavaScript)

WhatsApp-first business website. No email setup and no environment variables are required.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run lint
```

## Deploy to Vercel
1. Push this folder to GitHub (or run `npx vercel`).
2. In Vercel: **Add New -> Project**, import the repo (Next.js is auto-detected), then **Deploy**.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your live address for the sitemap and canonical links.

## Edit content
- Phone / WhatsApp number: `src/config/site.js`
- Service headings: `src/data/services.js`
- FAQs: `src/data/faqs.js`
- Home page sections: `src/app/page.js` - Styles: `src/app/globals.css`
- Legal pages (marked EDITABLE, please have them reviewed): `src/app/privacy-policy`, `src/app/terms-and-conditions`
- Logo: replace `public/logo.png`
