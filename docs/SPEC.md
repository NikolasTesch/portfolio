# SPEC — Portfólio Nikolas Tesch

> Especificação técnica. Define **como** construir o que está no [PRD.md](./PRD.md).

## 1. Stack

| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | SSG/SSR, ótimo SEO, deploy nativo na Vercel |
| Linguagem | **TypeScript** (strict) | Segurança de tipos, demonstra boa prática |
| Estilização | **Tailwind CSS v3** | Velocidade, consistência, dark mode fácil |
| Animação | **Framer Motion** | Animações declarativas, `prefers-reduced-motion` nativo |
| i18n | **I18nProvider custom** (React Context) | PT/EN leve, sem dependência extra |
| Ícones | **lucide-react** | Leves e tree-shakeable |
| Testes | **Vitest + Testing Library + vitest-axe** | Testes unitários + acessibilidade |
| Lint/Format | **ESLint + Prettier** | Padronização |
| Deploy | **Vercel** | CI/CD automático via Git |

## 2. Estrutura de pastas (alvo)

```
portfolio/
├── docs/                  # PRD + SPEC
├── specs/                 # tasks JSON (pendentes / em-andamento / finalizadas)
├── public/                # imagens, CV em PDF, og-image, favicons
├── src/
│   ├── app/               # App Router flat: layout.tsx, page.tsx, robots, sitemap
│   ├── components/
│   │   ├── sections/      # Hero, About, Skills, Projects, Contact
│   │   ├── ui/            # AnimatedBackground, LocaleSwitcher, ThemeToggle, etc.
│   │   ├── layout/        # Navbar, Footer
│   │   └── providers/     # ThemeProvider
│   ├── content/           # dados: projects.ts, skills.ts, site.ts, techIcons.ts
│   ├── i18n/              # I18nProvider.tsx + messages.ts (PT/EN)
│   ├── lib/               # motion.ts (animações compartilhadas)
│   └── test/              # Test utilities (render wrapper)
├── AGENTS.md              # Knowledge base para agentes
├── CLAUDE.md              # Guia do projeto (workflow SDD)
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 3. Convenções de código

- Componentes em **PascalCase**, um por arquivo; hooks em `useCamelCase`.
- Server Components por padrão; `"use client"` só onde houver estado/animação/interação.
- Conteúdo **nunca** hardcoded em componentes — vem de `src/content/*` ou `src/i18n/messages/*`.
- Cores e espaçamentos via **design tokens** (CSS variables + Tailwind theme); proibido hex solto.
- Toda animação deve respeitar `prefers-reduced-motion`.
- Imagens sempre via `next/image` com `alt` significativo.
- Acessibilidade: HTML semântico, foco visível, `aria-*` quando necessário.

## 4. Design system (tokens)

Definido a partir das referências do Nikolas (hero estilo "Datacore" + estrutura "Vansh Verma").

- **Tema:** dark como padrão, light disponível. Cores semânticas em CSS variables (`--bg`, `--surface`, `--fg`, `--muted`, `--border`).
- **Tipografia (via `next/font/google`):**
  - `Manrope` → UI / navegação
  - `Cabin` → botões / tags
  - `Instrument Serif` → headlines / nome
  - `Inter` → corpo de texto
- **Cores de marca:** primária roxo `#7b39fc`; secundária roxo escuro `#2b2344`.
- **Fundo do hero (dark):** vídeo HTML5 fullscreen (`autoplay loop muted playsInline`, `object-cover`),
  URL CloudFront definida em `src/content/site.ts`. Em light mode usa-se gradiente roxo no lugar do vídeo.
- **Glassmorphism:** pill de tag com `backdrop-blur` + borda translúcida roxa.
- **Motion:** durações e easings padronizados em `src/lib/motion.ts` (Framer Motion), sempre com `prefers-reduced-motion`.

## 5. Internacionalização

- Rotas **flat** (sem `[locale]`) — o locale é gerenciado via `I18nProvider` (React Context).
- Locais: `pt` (padrão) e `en`.
- Mensagens em `src/i18n/messages.ts`, objeto único com ambos os idiomas.
- `LocaleSwitcher` altera o locale via context; preferência persistida em `localStorage`.
- Componentes acessam textos via `useI18n().t`.

## 6. Critérios de qualidade (Definition of Done global)

Uma task só vai para `finalizadas/` quando:
- [ ] Build passa (`next build`) sem erros nem warnings de tipo.
- [ ] Lint passa (`eslint`).
- [ ] Responsivo testado (mobile + desktop).
- [ ] Sem erros no console.
- [ ] Acessibilidade básica verificada (teclado + contraste).
- [ ] Conteúdo PT e EN presentes (quando aplicável).
- [ ] Revisor aprovou o diff.

## 7. Deploy

- Repositório Git conectado à Vercel; cada push na `main` → deploy de produção; PRs → preview.
- Variáveis de ambiente (se houver, ex.: serviço de formulário) configuradas no painel da Vercel.
- `og-image` e metadata validados antes do primeiro deploy público.
