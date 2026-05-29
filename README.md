# GTA San Andreas Toolkit

A premium, production-ready SaaS-style web application for GTA San Andreas Android players. Built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

![GTA SA Toolkit](public/og-image.svg)

## Features

- **Cheat Code Finder** — Search, filter by category, one-click copy, toast notifications
- **Android Installation Wizard** — Step-by-step APK + OBB guide with FAQ
- **Device Compatibility Checker** — RAM, storage, and Android version scoring
- **Save Game Library** — Browse save categories with modern cards
- **Version Comparison** — GTA SA 2.11.311 vs 2.11.277 vs Vice City
- **Mission Guide** — 27+ missions with walkthroughs and tips
- **Troubleshooting Center** — Black screen, OBB, crashes, lag fixes
- **Favorites** — Save cheats and guides (localStorage)
- **Analytics Dashboard** — Local usage stats (views, copies, categories)
- **Blog** — SEO-friendly articles with internal linking
- **i18n** — English and Arabic with full RTL support
- **SEO** — Metadata, Open Graph, JSON-LD schemas, sitemap, robots.txt

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | App Router, SSR, static generation |
| React 19 | UI |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| next-intl | Internationalization |
| sonner | Toast notifications |
| localStorage | Favorites & analytics persistence |

## Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap | `http://localhost:3000` |

## Scripts

```bash
npm run dev      # Development with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/[locale]/     # Localized routes (en, ar)
├── components/       # UI and feature components
├── data/             # Mock content (cheats, missions, blog, etc.)
├── hooks/            # Custom React hooks
├── i18n/             # next-intl routing config
├── lib/              # Utilities (compatibility, analytics, metadata)
├── providers/        # React context providers
└── types/            # TypeScript interfaces
messages/             # en.json, ar.json translations
public/               # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://gtatoolkit.vercel.app`)
4. Deploy

### Other Platforms

Build the app and run the Node server:

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to your production URL before building so sitemap and canonical URLs are correct.

## Adding Translations

Edit `messages/en.json` and `messages/ar.json`. Keys are grouped by feature namespace (`cheats`, `missions`, etc.). Use `useTranslations("namespace")` in client components or `getTranslations` in server components.

## Disclaimer

This is an **unofficial fan resource** and is not affiliated with Rockstar Games or Take-Two Interactive. GTA San Andreas is a trademark of Rockstar Games.

## License

MIT — See repository for details. Use responsibly and support official game purchases where available.
