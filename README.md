# TaxwithAbdul website (Next.js 14, App Router, JavaScript)

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm run lint
```

## Environment variables
| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends enquiry emails to taxwithabdul@gmail.com via Resend. If missing, the form shows an error and a WhatsApp fallback (it never fakes success). |
| `RESEND_FROM` | Sender. With a free Resend account, `onboarding@resend.dev` only delivers to your own Resend account email; verify a domain for real use. |
| `NEXT_PUBLIC_SITE_URL` | Your live URL for sitemap, robots and canonical links. |

## Deploy to Vercel
1. Push this folder to a GitHub repo (or run `npx vercel`).
2. In Vercel: **Add New → Project →** import the repo (framework: Next.js, auto-detected).
3. Add the environment variables above, then **Deploy**.

## Edit content
- Business details, phone, email: `src/config/site.js`
- Services (also generates every `/services/[slug]` page): `src/data/services.js`
- FAQs: `src/data/faqs.js`
- Home sections: `src/app/page.js` · Styles: `src/app/globals.css`
- Legal pages (marked EDITABLE, have them reviewed): `src/app/privacy-policy`, `src/app/terms-and-conditions`
- Logo: replace `public/logo.png`

## Notes
- The rate limit in the API route is in-memory (per server instance). Use Upstash/Vercel KV for strict limiting.
- Add an Open Graph image by placing `opengraph-image.png` (1200×630) in `src/app/`.
