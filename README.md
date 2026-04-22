# candid-art-shop

A handstitched-feeling Next.js marketplace for small-batch art — warm cream / terracotta / sage palette, animated stitch motifs, scroll reveals, custom thread cursor.

## Get running

```bash
cd candid-art-shop
npm install
cp .env.local.example .env.local   # fill in the placeholders below
npm run dev
```

Open <http://localhost:3000>.

## Placeholders to replace

### Firebase — Google Sign-In
Create a Firebase web app and enable Google as a sign-in provider, then fill:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Config lives in `lib/firebase.js`. Add `localhost` to Firebase Auth → Authorized domains.

### Razorpay — Payments
Grab test keys from the Razorpay dashboard, then fill:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=xxx
```

- Order creation: `app/api/create-order/route.js` (uses the `razorpay` Node SDK).
- Checkout modal: `lib/razorpay-client.js` — `openRazorpay(product)` is wired into every product tile.

## What's inside

- `app/page.jsx` — composes every section
- `components/StitchBackground.jsx` — floating SVG embroidery motifs
- `components/CustomCursor.jsx` — thread-ring cursor with hover states
- `components/ScrollReveal.jsx` — adds `.in` when a `.reveal` element enters the viewport
- `components/{Hero,About,Products,HowItWorks,Testimonials,Footer}.jsx` — the page sections
- `components/ProductArt.jsx` — hand-drawn SVG illustrations for all 9 products
- `components/AuthButton.jsx` — Firebase Google Sign-In UI
- `lib/firebase.js`, `lib/razorpay-client.js` — integrations

Typography is Playfair Display (display) + DM Sans (body), loaded via `next/font/google` in `app/layout.jsx`.
