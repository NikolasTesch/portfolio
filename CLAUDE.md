# CLAUDE.md — Portfólio Nikolas Tesch

Guia para qualquer agente que trabalhe neste repositório. Leia antes de agir.

## O que é

Portfólio pessoal de desenvolvedor do **Nikolas Tesch** (dev júnior, foco fullstack/frontend).
Objetivo: conquistar a 1ª vaga. Estilo **criativo/animado**, **bilíngue PT/EN**, deploy na **Vercel**.

- Produto e requisitos: [`docs/PRD.md`](docs/PRD.md)
- Especificação técnica: [`docs/SPEC.md`](docs/SPEC.md)

## Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS · Framer Motion · next-intl · Vercel.

## Workflow SDD (Spec-Driven Development)

O trabalho é orientado por specs. Cada unidade de trabalho é uma **task** em JSON.

```
specs/
├── pendentes/      # backlog — ainda não iniciadas
├── em-andamento/   # em desenvolvimento (idealmente 1 por vez)
└── finalizadas/    # concluídas e revisadas
```

**Ciclo de vida de uma task:**
1. **Arquiteto** lê docs + código e produz o plano.
2. Mover o JSON da task de `pendentes/` → `em-andamento/`.
3. **Implementador** escreve o código seguindo o plano e a SPEC.
4. **Testador** escreve/roda testes e valida.
5. **Revisor** revisa o diff contra a Definition of Done.
6. Aprovado → mover o JSON para `finalizadas/` (atualizar `status` e `concluida_em`).

Formato de cada task: ver [`specs/README.md`](specs/README.md).

## Agentes (`.claude/agents/`)

| Agente | Quando usar | Escreve código? |
|---|---|---|
| `arquiteto` | Antes de codar feature/ref`actor`não-trivial — planeja | ❌ |
| `implementador` | Escrever/alterar código | ✅ |
| `testador` | Escrever/rodar testes e validar | ✅ (testes) |
| `revisor` | Revisar diff antes de finalizar | ❌ |

## Regras de ouro (resumo da SPEC)

- **i18n sempre:** nenhum texto hardcoded — use `src/i18n/messages/{pt,en}.json`. Toda string nova entra em PT **e** EN.
- **Tokens sempre:** nenhuma cor hex solta — use os design tokens (CSS vars / Tailwind theme).
- **Server Components por padrão:** `"use client"` só com estado/interação/animação.
- **Acessibilidade:** HTML semântico, `alt` em imagens, foco visível, respeitar `prefers-reduced-motion`.
- **Imagens:** sempre `next/image`.
- **Conteúdo é dado:** projetos e skills vivem em `src/content/*`, não em componentes.

## Comandos

```bash
npm run dev      # desenvolvimento
npm run build    # build de produção (deve passar sem erros/warnings de tipo)
npm run lint     # ESLint
npm run test     # testes (Vitest) — quando configurado
```

## Definition of Done (global)

Ver checklist em [`docs/SPEC.md`](docs/SPEC.md#6-critérios-de-qualidade-definition-of-done-global).
Build + lint passando, responsivo, sem erros de console, acessível, PT/EN presentes, revisado.
