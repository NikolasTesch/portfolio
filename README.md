<div align="center">
  <br />
  <h1>Nikolas Tesch · Portfolio</h1>
  <p>
    <strong>Fullstack Developer — React & Next.js</strong>
  </p>

  <br />
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-000000?logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript%20strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript strict" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
  <br />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
</p>

---

Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS and Framer Motion. Bilingual (PT/EN), dark/light theme, fully responsive, and a11y-tested.

### Features

- **Hero section** — HTML5 video background (dark mode) / gradient (light mode), animated entrance, experience and code badges
- **About** — bio, info cards (name, email, location, availability), CV download
- **Skills** — marquee rows of technology cards with brand icons and categories
- **Projects** — 3 featured projects (DataBolsa, NKS Art, Fase Sport) with screenshots, tech tags, demo and repo links
- **Contact** — form → mailto integration, social links (GitHub, LinkedIn, Email, WhatsApp)
- **i18n** — Portuguese / English toggle persisted to localStorage
- **Dark/Light theme** — CSS custom properties, smooth transitions, persisted preference
- **Animations** — scroll-reveal sections, hover states, reduced-motion support
- **SEO** — metadata, Open Graph, sitemap.xml, robots.txt
- **Accessibility** — semantic HTML, focus management, `vitest-axe` coverage

### Stack

| Layer     | Technology                            |
| --------- | ------------------------------------- |
| Framework | Next.js 16 (App Router)               |
| Language  | TypeScript (strict)                   |
| Styling   | Tailwind CSS v3                       |
| Animation | Framer Motion                         |
| i18n      | Custom React Context                  |
| Icons     | lucide-react                          |
| Testing   | Vitest + Testing Library + vitest-axe |
| Lint      | ESLint + Prettier                     |
| Deploy    | Vercel                                |

### Projects

| Project        | Description                                                                  | Stack                  |
| -------------- | ---------------------------------------------------------------------------- | ---------------------- |
| **DataBolsa**  | Investment-analysis and portfolio-tracking platform for the Brazilian market | React, Finnhub API     |
| **NKS Art**    | Digital-library SaaS of artwork for the textile industry (Cloudflare R2)     | Next.js, Cloudflare R2 |
| **Fase Sport** | E-commerce for custom sports uniforms with multi-step quoting                | Next.js, WhatsApp API  |

### Getting started

```bash
git clone https://github.com/NikolasTesch/portfolio
cd portfolio
npm install
```

```bash
# Development
npm run dev

# Production build
npm run build

# Tests
npm run test

# Lint
npm run lint
```

### Project structure

```
src/
├── app/               # App Router — layout, pages, metadata, sitemap
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── providers/     # ThemeProvider (dark/light)
│   ├── sections/      # Hero, About, Skills, Projects, Contact
│   └── ui/            # Reusable UI widgets
├── content/           # Data layer — projects, skills, site config
├── i18n/              # I18nProvider + messages (pt/en)
├── lib/               # Framer Motion helpers
└── test/              # Test utilities
```

### Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |
| `npm run test`  | Run Vitest              |

### License

MIT &mdash; see [LICENSE](LICENSE) (or just steal anything you like).
