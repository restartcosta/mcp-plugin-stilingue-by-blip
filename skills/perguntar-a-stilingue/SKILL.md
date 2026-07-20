---
name: perguntar-a-stilingue
description: Consultar a Stilingue para qualquer pergunta sobre redes sociais, social listening, monitoramento de marca, buzz, sentimento público, tendências, configuração/auditoria de painel, ou dados de atendimento/SAC. Use esta skill SEMPRE que o usuário perguntar o que estão falando de uma marca/produto/pessoa/assunto nas redes sociais, pedir análise de sentimento, comparação com concorrentes, tendências, auditoria de painel, ou mencionar um painel/apikey/account_id/universe_id da Stilingue — mesmo que ele não diga "Stilingue" explicitamente. Cobre quatro frentes: Radar (base pública, sem apikey), Warroom (painel dedicado do cliente, com apikey), Setup (configuração/auditoria do painel) e Smartcare (SAC/atendimento).
---

# Perguntar à Stilingue

Você tem três ferramentas MCP disponíveis: **`radar`** (base pública, sem `apikey`), **`warroom_query`** (dados do painel dedicado do cliente, requer `apikey`) e **`setup`** (configuração do painel, requer `account_id`+`universe_id`). Nunca responda de memória sobre redes sociais/buzz/sentimento/configuração de painel — sempre consulte uma dessas três.

## Passo 1: decida a fonte

- Usuário perguntou sobre **dados coletados** (o que estão falando, sentimento, posts, estatísticas) e mencionou `apikey`, painel, "minha marca", "nosso cliente", ou pediu algo de atendimento/SAC/tickets → **Warroom** (`warroom_query`). Leia `references/warroom.md` (e também `references/smartcare.md` se for especificamente sobre atendimento).
- Usuário perguntou sobre a **configuração/estrutura** do painel (quais grupos/temas/tags existem, quais canais são coletados, auditoria de setup) → **Setup** (`setup`). Leia `references/setup.md`.
- Qualquer outro caso (exploração livre, sem painel configurado, pesquisa pontual) → **Radar** (`radar`). Leia `references/radar.md`.
- Em caso de dúvida sobre um campo, métrica, ou estrutura de painel (Grupo/Tema/Tag, Alcance Potencial, particularidades por rede) → consulte `references/glossario.md`.

## Passo 2: terminologia com o usuário

Nunca use nomes técnicos internos na resposta:
- `radar` → sempre chame de **"Radar"** (nunca "Zoom Express" ou "Mar Aberto")
- `warroom_query` → sempre chame de **"Warroom"** ou **"painel"**
- Nunca exponha nomes de campo cru da API (ex: `AAA_score`, `net_promoter_score_variation`) — traduza para linguagem simples em PT-BR.

## Passo 3: convenção de sentimento (não confundir)

| Significado | Radar (`polarity`) | Warroom (`sentiment`) |
|---|---|---|
| Positivo | `1` | `1` |
| Negativo | `2` | `-1` |
| Neutro | `3` | `0` |

## Passo 4: pedido genérico sem tema (ex: "o que bombou hoje")

Nenhuma das duas ferramentas aceita busca sem tema/`query`. Busque candidatos na web primeiro, depois valide cada um no Radar com volume real — ver `references/radar.md` para o playbook completo.

## Referências detalhadas

- `references/radar.md` — parâmetros, `data_type`, playbooks (panorama de marca, comparação com concorrente, trending sem tema), sintaxe de busca.
- `references/warroom.md` — parâmetros, filtros de segmentação, os 22 tipos de `path` disponíveis.
- `references/setup.md` — parâmetros, o que a resposta traz, definições de Grupo/Tema/Tag, e o modo "auditoria de painel" (como sinalizar problemas de configuração em vez de só listar dados).
- `references/smartcare.md` — SAC/atendimento via `warroom_query` com `sac_type`/`status`.
- `references/glossario.md` — particularidades por rede social, definição de métricas, estrutura de painel, sintaxe Radar vs Setup.

Ao mostrar posts de exemplo, sempre inclua a data de publicação.
