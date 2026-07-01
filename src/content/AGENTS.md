# CONTENT (DATA LAYER)

**Generated:** 2026-06-30

## OVERVIEW

Pure data files — no components, no logic. Defines the site's content model and drives all dynamic rendering.

## WHERE TO LOOK

| File | Exports | Notes |
|------|---------|-------|
| `projects.ts` | `Project[]`, `Project` type | Slug, name, description (PT+EN), stack, demo, repo, image, featured |
| `skills.ts` | `Skill[]`, `Skill` type | Name + category (PT+EN) |
| `site.ts` | `site` object | URL, name, role, email, WhatsApp, GitHub, LinkedIn, CV paths, hero video URL |
| `techIcons.ts` | `Record<string, TechIcon>` | SVG path + brand color for each skill name |

## CONVENTIONS

- Adding a new project → create entry in `projects.ts` AND add screenshot to `public/projects/`.
- Adding a new skill → add to `skills.ts` AND add SVG icon entry to `techIcons.ts`.
- `site.heroVideo` is a CloudFront URL — update when replacing the background video.
- CV PDFs go in `public/cv/`, referenced from `site.cv.pt` / `site.cv.en`.

## ANTI-PATTERNS

- No JSX/TSX here — these are pure TypeScript data modules.
- Never hardcode project/skill data in components — always import from `src/content/`.
