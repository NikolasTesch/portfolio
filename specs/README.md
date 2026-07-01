# specs/ — Tasks do projeto (SDD)

Cada task é um arquivo JSON nomeado `T-XXX-slug.json`, vivendo em uma das três pastas:

- `pendentes/` — backlog, não iniciada
- `em-andamento/` — em desenvolvimento
- `finalizadas/` — concluída e revisada

Mover o arquivo entre as pastas representa a mudança de estado. Mantenha o campo `status`
coerente com a pasta.

## Schema de uma task

```json
{
  "id": "T-001",
  "titulo": "Título curto e acionável",
  "descricao": "O que precisa ser feito e por quê.",
  "status": "pendente | em-andamento | finalizada",
  "prioridade": "alta | media | baixa",
  "epico": "infra | design-system | secoes | qualidade | deploy",
  "dependencias": ["T-000"],
  "arquivos": ["caminhos prov..veis a criar/alterar"],
  "criterios_aceitacao": [
    "Critério verificável 1",
    "Critério verificável 2"
  ],
  "notas": "",
  "criada_em": "AAAA-MM-DD",
  "concluida_em": null
}
```

## Ordem sugerida (épicos)

1. **infra** — T-001, T-002
2. **design-system** — T-003
3. **secoes** — T-004 … T-010
4. **qualidade** — T-011, T-012
5. **deploy** — T-013
