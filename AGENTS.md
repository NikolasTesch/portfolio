# PROJECT KNOWLEDGE BASE

**Generated:** 2026-06-30
**Branch:** (not a git repo)

## OVERVIEW

Portfolio pessoal do dev júnior Nikolas Tesch (fullstack/frontend). Next.js 15 App Router + TypeScript strict + Tailwind + Framer Motion. Bilíngue PT/EN, deploy Vercel. Spec-Driven Development.

## STRUCTURE

```
portfolio/
├── src/
│   ├── app/              # App Router: layout, page, metadata, OG image, robots, sitemap
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── providers/    # ThemeProvider (dark/light)
│   │   ├── sections/     # Hero, About, Skills, Projects, Contact
│   │   └── ui/           # AnimatedBackground, LocaleSwitcher, SectionTag, SocialLinks, TechIcon, ThemeToggle
│   ├── content/          # Data layer: projects, skills, site config, techIcons
│   ├── i18n/             # I18nProvider + messages (pt/en)
│   ├── lib/              # motion.ts (framer-motion variants/helpers)
│   └── test/             # Test utilities (render wrapper)
├── specs/                # SDD tasks: pendentes/ > em-andamento/ > finalizadas/
├── docs/                 # PRD.md, SPEC.md
├── public/               # CV PDFs, project images
└── .claude/agents/       # Agent definitions: arquiteto, implementador, revisor, testador
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add/change section | `src/components/sections/` | One file per section, always `"use client"` |
| Add UI widget | `src/components/ui/` | Generic reusable components |
| Add/edit text | `src/i18n/messages.ts` | Never hardcode — must add PT + EN |
| Add project | `src/content/projects.ts` | Pure data, no component logic |
| Add skill | `src/content/skills.ts` + `techIcons.ts` | Name + category + SVG path |
| Site metadata | `src/content/site.ts` | URL, social, CV paths |
| Motion variants | `src/lib/motion.ts` | Shared: fadeUp, fadeIn, stagger, reveal |
| Tests | `src/*.test.tsx` | Vitest, next to component |

## CODE MAP

| Symbol | Type | Location | Lines | Role |
|--------|------|----------|-------|------|
| `Navbar` | Component | `layout/Navbar.tsx` | 148 | Nav + scroll spy + mobile menu |
| `Footer` | Component | `layout/Footer.tsx` | 19 | Copyright |
| `ThemeProvider` | Provider | `providers/ThemeProvider.tsx` | 50 | Dark/light + localStorage |
| `useTheme` | Hook | `providers/ThemeProvider.tsx` | 5 | Theme consumer |
| `Hero` | Section | `sections/Hero.tsx` | 163 | Video bg + headline + CTAs |
| `About` | Section | `sections/About.tsx` | 73 | Bio + info cards |
| `Skills` | Section | `sections/Skills.tsx` | 84 | Marquee rows of skill cards |
| `Projects` | Section | `sections/Projects.tsx` | 101 | Project cards grid |
| `Contact` | Section | `sections/Contact.tsx` | 95 | Form → mailto |
| `AnimatedBackground` | UI | `ui/AnimatedBackground.tsx` | 14 | Blob gradient background |
| `LocaleSwitcher` | UI | `ui/LocaleSwitcher.tsx` | 20 | PT/EN toggle |
| `SectionTag` | UI | `ui/SectionTag.tsx` | 7 | Section label (uppercase, primary) |
| `SocialLinks` | UI | `ui/SocialLinks.tsx` | 34 | GitHub/LinkedIn/Mail/WhatsApp |
| `TechIcon` | UI | `ui/TechIcon.tsx` | 28 | SVG icon by name |
| `ThemeToggle` | UI | `ui/ThemeToggle.tsx` | 20 | Dark/light toggle button |
| `I18nProvider` | Provider | `i18n/I18nProvider.tsx` | 53 | Locale state + messages |
| `messages` | Data | `i18n/messages.ts` | 123 | PT/EN string tables |
| `projects` | Data | `content/projects.ts` | 52 | Project[] |
| `skills` | Data | `content/skills.ts` | 19 | Skill[] |
| `site` | Data | `content/site.ts` | 18 | Site config |
| `techIcons` | Data | `content/techIcons.ts` | 56 | Record<name, SVG path> |

## CONVENTIONS

- `"use client"` only for components with state/interactivity/animation — Server Components by default.
- No hardcoded text strings — always via `useI18n().t` and `src/i18n/messages.ts`.
- No bare hex colors — use Tailwind design tokens/CSS vars defined in `globals.css`.
- Lucide icons for all UI icons.
- `next/image` for all images.
- Tests use Vitest, co-located next to component (`Component.test.tsx`).

## ANTI-PATTERNS (THIS PROJECT)

- `ts-expect-error` / `ts-ignore` / `as any` — never.
- `use client` on Server Components — never.
- Hardcoded text or colors — always use i18n/tokens.
- Empty catch blocks — never.

## COMMANDS

```bash
npm run dev    # dev server
npm run build  # production build (must pass clean)
npm run lint   # ESLint
npm run test   # Vitest
```

## NOTES

- `src/test/utils.tsx` wraps components with `ThemeProvider` + `I18nProvider` for testing.
- `globals.css` defines `@theme` with custom fonts, CSS `.dark` class, and design tokens.
- No `next-intl` package — custom lightweight i18n via React Context.
- `src/components/ui/AnimatedBackground.tsx` is a Server Component (no `use client`).
