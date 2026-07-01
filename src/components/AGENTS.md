# COMPONENTS

**Generated:** 2026-06-30

## OVERVIEW

React component tree: 4 subdirectories, 14 files. All sections are `"use client"`, UI components are mixed (Server/Client).

## STRUCTURE

```
components/
├── layout/     # Navbar + Footer — shell structure, present across all pages
├── providers/  # ThemeProvider (dark/light) — wraps entire app
├── sections/   # Hero, About, Skills, Projects, Contact — one per page section
└── ui/         # Generic reusable: AnimatedBackground, LocaleSwitcher, SectionTag,
                # SocialLinks, TechIcon, ThemeToggle
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add nav item | `layout/Navbar.tsx` | Update `SECTION_IDS` array |
| Add footer link | `layout/Footer.tsx` | Currently just copyright — expand if needed |
| Add new section | `sections/` | Copy existing section pattern (stagger → reveal → fadeUp) |
| Add UI widget | `ui/` | Prefer Server Component if no state needed |
| Theme logic | `providers/ThemeProvider.tsx` | Context + localStorage |
| Section label | `ui/SectionTag.tsx` | Wraps children in uppercase primary span |

## CONVENTIONS

- Sections always follow: `motion.div(variants={stagger} {...reveal})` → `motion.div(variants={fadeUp})`.
- All sections import `useI18n` for text, no hardcoded strings.
- Dark/light aware sections check `useTheme().theme` for conditional rendering.

## ANTI-PATTERNS

- Do NOT add `"use client"` to UI components that have no state/effects/lifecycle.
- Do NOT hardcode colors — use Tailwind tokens (`bg-primary`, `text-fg`, `border-border`).
- Do NOT break the stagger/reveal/fadeUp pattern — inconsistent animations look sloppy.
