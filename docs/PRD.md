# PRD — Portfólio Nikolas Tesch

> Product Requirements Document. Define **o quê** e **por quê**. O **como** está em [SPEC.md](./SPEC.md).

## 1. Visão

Portfólio pessoal de desenvolvedor para **Nikolas Tesch**, um dev júnior buscando a primeira vaga
como **fullstack ou frontend**. O site deve causar impacto imediato em recrutadores, demonstrar
domínio de frontend moderno (animações e micro-interações) e apresentar projetos e habilidades
de forma clara, rápida e acessível.

## 2. Público-alvo

| Persona | Objetivo ao visitar | O que precisa encontrar em <30s |
|---|---|---|
| Recrutador técnico | Avaliar se vale uma entrevista | Stack, projetos reais, link do GitHub/LinkedIn, contato |
| Tech lead / dev sênior | Avaliar qualidade técnica | Código no GitHub, qualidade do próprio site, projetos com deploy |
| Recrutador não-técnico | Triagem inicial | Foto/nome, cargo desejado, botão de contato, currículo (PDF) |

## 3. Objetivos e métricas de sucesso

- **Conversão:** visitante → contato (clique em e-mail/LinkedIn/WhatsApp) ou download de CV.
- **Performance:** Lighthouse ≥ 90 em Performance, Acessibilidade, Best Practices e SEO.
- **Profissionalismo:** zero erros de console, responsivo de 320px a 4K, bilíngue PT/EN.
- **Diferencial:** animações fluidas que reforçam a competência em frontend sem prejudicar a performance.

## 4. Escopo (MVP)

### Seções obrigatórias
1. **Hero** — nome, cargo desejado, tagline, CTAs (ver projetos / contato), animação de entrada.
2. **Sobre** — bio curta, foto, stack resumida, link para CV em PDF.
3. **Skills / Stack** — React, TypeScript, JavaScript, Python, Flutter, Node, Express, PostgreSQL (com ícones).
4. **Projetos** — cards com imagem, descrição, tags de tecnologia, links de demo e repositório.
5. **Contato** — e-mail, LinkedIn, GitHub e formulário simples (ou mailto).
6. **Footer** — links sociais, copyright.

### Funcionalidades transversais
- **Internacionalização** PT/EN com toggle persistente.
- **Tema** claro/escuro (dark como padrão, combinando com o estilo "criativo/animado").
- **Animações** de entrada por scroll, hover states e transições de página.
- **SEO** com metadata, Open Graph e sitemap.

## 5. Fora de escopo (por enquanto)

- CMS / blog dinâmico (pode entrar em v2).
- Backend próprio / banco de dados (o site é estático/SSG).
- Autenticação, área logada, analytics avançado.

## 6. Requisitos não-funcionais

- **Acessibilidade:** WCAG 2.1 AA (contraste, navegação por teclado, foco visível, `prefers-reduced-motion`).
- **Performance:** SSG, imagens otimizadas (`next/image`), lazy-load de animações pesadas.
- **Responsividade:** mobile-first.
- **Manutenção:** conteúdo (projetos, skills, traduções) em arquivos de dados, fácil de atualizar sem mexer em componentes.

## 7. Conteúdo a coletar do Nikolas

> Conteúdo detalhado em [CONTEUDO.md](./CONTEUDO.md).

- [x] Tagline (PT e EN) — gerada, 3 opções, falta Nikolas escolher.
- [x] Bio curta (PT e EN) — gerada.
- [ ] Foto de perfil.
- [x] Lista de 3 projetos (DataBolsa, NKS Art, Fase Sport) com descrição, stack, demo e repo.
- [ ] Screenshots dos projetos (gerar a partir dos deploys).
- [x] Links: GitHub, LinkedIn, WhatsApp.
- [x] E-mail de contato: nikolasditesch@gmail.com (com "i").
- [x] Currículo em PDF (PT e EN) — gerado em `public/cv/`.
- [ ] Domínio próprio (opcional; senão usa `*.vercel.app`).
