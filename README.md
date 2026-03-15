# Eurowings Baggage Claims — Landing Page

Modern landing page for the Eurowings AI-powered baggage damage claims system. Passengers are directed here to learn about the claims process and start a claim via the agentic chat interface.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS variables (Eurowings brand tokens)
- **UI Components**: shadcn-ui pattern (Button, Badge, Accordion)
- **Animations**: Framer Motion (scroll-triggered reveals, counters, spotlight cards)
- **i18n**: next-intl — English (default) + German, URL-prefix routing (`/en/`, `/de/`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout (font, i18n provider)
│   │   ├── page.tsx            # Landing page (composes all sections)
│   │   ├── privacy/page.tsx    # Privacy policy (placeholder)
│   │   ├── terms/page.tsx      # Terms of service (placeholder)
│   │   └── imprint/page.tsx    # Impressum (placeholder)
│   ├── layout.tsx              # Root layout (metadata, SEO)
│   └── globals.css             # Eurowings theme (CSS variables)
├── components/
│   ├── ui/                     # Base UI components (button, badge, accordion)
│   ├── layout/                 # Header, Footer
│   └── sections/               # Hero, HowItWorks, Stats, Features, FAQ, CTABanner
├── i18n/                       # next-intl config (routing, navigation, request)
├── messages/                   # en.json, de.json — all UI copy
├── lib/utils.ts                # cn() class merge utility
└── middleware.ts                # Locale routing middleware
```

## Eurowings Brand Tokens

| Token              | Color   | Hex       |
|--------------------|---------|-----------|
| `primary`          | Disco Red | `#8F174F` |
| `primary-accent`   | Magenta Daisy | `#B4175E` |
| `secondary`        | Ocean Wave | `#089BC9` |
| `secondary-light`  | Journey | `#7BCBE2` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deployment

Standard Next.js deployment. Compatible with Vercel, AWS Amplify, Docker, or any Node.js hosting.

```bash
npm run build
npm run start
```

## Notes

- **CTA links**: All "Start Your Claim" buttons point to `/#start-claim` (placeholder — replace with the actual agent chat URL when ready)
- **Legal pages**: Privacy, Terms, and Imprint pages contain placeholder content — replace with real legal copy before launch
- **No dark mode**: Eurowings brand is light/white-focused by design
