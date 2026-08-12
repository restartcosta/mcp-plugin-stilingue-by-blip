# Contrato de Ferramentas — Social Twin

O Social Twin não responde de memória. Toda resposta é precedida obrigatoriamente por consulta às tools da Stilingue. Este arquivo define qual tool usar, em qual ordem, com qual configuração de janela temporal e como tratar falhas.

---

## Regra fundamental

> **Nunca gerar a fala da persona antes de ter o retorno das tools em mãos.** A consulta às tools não é opcional nem pode ser substituída por inferência a partir de contexto anterior.

---

## Roteamento: qual tool usar

| Contexto da pergunta | Tool principal | Quando escalar para outra |
| --- | --- | --- |
| Pergunta aberta sobre marca, produto ou tema — sem painel específico mencionado | `radar` | Se o usuário informar `apikey` ou mencionar "meu painel", trocar para `warroom_query` |
| Usuário mencionou painel, `apikey` ou "meu painel" | `warroom_query` | Complementar com `radar` quando a pergunta exigir comparação com mercado aberto |
| Usuário quer saber quais painéis tem acesso | `list_panels` | — |
| Usuário pediu estrutura do painel antes de consultar | `setup` | Depois, `warroom_query` para os dados |

**Se o usuário não informar a `apikey` e a pergunta for sobre uma marca específica**, assumir Radar como fonte. Não perguntar se tem painel — rodar a consulta e oferecer ao final: "Se você tiver um painel configurado na Stilingue com dados dessa marca, posso refazer com dados mais precisos."

---

## Janela temporal padrão: 6 meses

O Social Twin representa a audiência contemporânea da marca. O escopo temporal padrão é **os últimos 6 meses a partir da data da consulta**, a menos que o usuário especifique outro período.

**Calcule as datas antes de chamar a tool.** Não use aproximações como "6 meses atrás" — derive a data exata e formate no padrão da tool: `YYYYMMDDHHmm:YYYYMMDDHHmm`.

| Usuário disse | Janela a usar |
| --- | --- |
| Nada (default) | Últimos 6 meses até hoje |
| "Esse ano" | 1º de janeiro até hoje |
| "Recente" / "Essa semana" | Últimos 7 dias |
| Período explícito | Usar exatamente o que foi pedido |

---

## Sequência de consultas obrigatória

Para qualquer pergunta de opinião de audiência, executar nesta ordem:

1. **Panorama geral** — `data_type=statistics` (Radar) ou `path=estatisticas` (Warroom).
   - Objetivo: volume total, distribuição de sentimento, canais ativos. Âncora da trilha de auditoria.

2. **Evolução temporal** — `data_type=linechart` (Radar) ou `path=linechart` (Warroom).
   - Objetivo: identificar se o sentimento é estável, crescente ou decrescente no período.

3. **Amostra qualitativa** — `data_type=posts` (Radar) ou `path=publicacoes` (Warroom).
   - Objetivo: extrair a voz real da audiência. Usar para construir a fala da persona.
   - Limite: máximo de 300 posts por chamada (regra da fundação). Para amostras representativas, priorizar posts de maior `hot`.

4. **Atores e amplificadores** — `data_type=trend_users` (Radar) ou `path=top_influenciadores` (Warroom), somente quando a pergunta envolver "quem mais fala", "influenciadores" ou "vozes".

Passos 1 e 2 são sempre obrigatórios. Passos 3 e 4 conforme o escopo da pergunta.

---

## Fatiamento por período — quando e como

Consultas de 6 meses com alto volume podem gerar timeout ou retorno truncado. **Fatiar em janelas menores quando:**

- O volume retornado em `statistics` ultrapassar 50.000 menções no período completo.
- A query for ampla (marca conhecida, termo genérico) e a estimativa de volume for alta.
- A tool retornar erro de timeout ou resposta parcial.

**Estratégia de fatiamento:**

Dividir o período de 6 meses em fatias mensais (6 chamadas de 30 dias cada). Consolidar os resultados antes de montar a resposta da persona. Nunca apresentar resultado de uma fatia como se fosse o período completo.

| Fatia | Período exemplo (consulta em agosto/2026) |
| --- | --- |
| Mês 1 | 01/02/2026 — 28/02/2026 |
| Mês 2 | 01/03/2026 — 31/03/2026 |
| Mês 3 | 01/04/2026 — 30/04/2026 |
| Mês 4 | 01/05/2026 — 31/05/2026 |
| Mês 5 | 01/06/2026 — 30/06/2026 |
| Mês 6 | 01/07/2026 — 31/07/2026 |

Ao consolidar, somar volumes, recalcular distribuição de sentimento proporcionalmente e usar a amostra qualitativa da fatia com maior volume como base para a voz da persona.

---

## Tratamento de falha de tool

| Tipo de falha | O que fazer |
| --- | --- |
| Timeout / HTTP 202 (processamento assíncrono) | Aguardar o retry automático do conector. Não reformular a consulta. Informar o usuário que pode levar até 2 minutos. |
| HTTP 401 / token expirado | Informar que a sessão expirou e orientar a reconectar pelo conector (skill `setup-conexao`). |
| Retorno vazio (zero menções) | Tentar variações do termo de busca antes de concluir ausência. Documentar as variações tentadas na trilha de auditoria. |
| Erro de `apikey` inválida | Solicitar confirmação da apikey. Não tentar adivinhar. Não trocar automaticamente para Radar sem avisar o usuário. |

**Nunca silenciar uma falha de tool.** Se a consulta falhou e não foi possível recuperar, declarar isso na trilha de auditoria antes de responder — ou não responder se não há dado suficiente.

---

## Convenções de parâmetro

Seguem as mesmas convenções da `fundacao-mcp`:

- **Sintaxe booleana do Radar:** operadores `AND`, `OR`, `NOT` obrigatoriamente em caixa alta. Em minúscula, o operador é tratado como termo literal.
- **Limite de termos no Radar:** máximo de 21 termos por `query`.
- **`sentiment` no Warroom:** `1` positivo, `-1` negativo, `0` neutro.
- **`polarity` no Radar:** `1` positivo, `2` negativo, `3` neutro. Escalas diferentes — nunca misturar.
- **Limite de publicações por chamada:** 300 (regra da fundação). Usar `offset` para paginar se necessário.

---

## Referências

Este arquivo implementa regras de `grounding-rules.md` em ação prática. Para o que cada tool retorna especificamente, consulte `radar.md`, `warroom.md` e `setup.md` na skill `fundacao-mcp`. Para tratamento de falha e casos edge em dados coletados, ver `boas-praticas-analiticas.md`.
