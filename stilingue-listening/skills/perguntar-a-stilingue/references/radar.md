
# Radar Stilingue (Mar Aberto)

O Radar é a ferramenta de Social Listening em "Mar Aberto" da Stilingue. Ele permite buscar publicações em tempo real em toda a base de dados pública da plataforma (Instagram, Twitter/X, YouTube, Facebook, TikTok, portais de notícias, blogs e mais). **Nunca chame essa fonte de "Zoom Express" ou "Mar Aberto" na resposta ao usuário — sempre "Radar".**

## Ferramenta MCP: `radar`

Diferente das ferramentas de painel, o Radar **não utiliza `apikey`**. A autenticação é feita internamente pelo servidor.

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `query` | string | Sim | Termos de busca com operadores booleanos (ex: `"Asus" AND "Notebook"`). |
| `date_range` | string | Sim | Intervalo no formato `YYYYMMDDHHmm:YYYYMMDDHHmm` (ex: `202606270000:202606302359`). |
| `data_type` | string | Não | O que retornar: `posts` (padrão), `linechart`, `statistics` ou `trend_users`. |
| `limit` | int | Não | Quantidade de posts por chamada (Padrão: 20, Máx: 500). Só se aplica a `data_type=posts`. |
| `offset` | int | Não | Paginação. Use para buscar os próximos posts (ex: se limit=50, use offset=50 para a pág 2). |

**Importante**: o Radar **não tem filtro de `channel`**. Se o usuário precisar comparar canais específicos (ex: "só TikTok" ou "só Twitter"), isso só é possível no painel do cliente via a skill `warroom-stilingue` — o Radar só permite ver a distribuição por canal (via `data_type=statistics`), não filtrar por ele.

## Tipos de Dado (`data_type`)

| `data_type` | O que traz | Quando usar |
| --- | --- | --- |
| `statistics` | Distribuição por canal, gênero, device e sentimento (polaridade) do período inteiro | **Primeiro passo de qualquer análise.** Dá o panorama sem viés de "quem é mais viral" |
| `linechart` | Volume de posts por dia no período | Ver se o assunto está subindo, caindo ou estável (tendência) |
| `posts` | Lista de publicações individuais (ranqueadas por `hot`) | Ilustrar a análise com exemplos concretos, achar ganchos de conteúdo |
| `trend_users` | Top usuários/contas mais influentes sobre o assunto | Mapear quem amplifica a conversa (imprensa, criadores, fãs) |

### Por que começar por `statistics`, não por `posts`

Pedir só `posts` (ordenado por `hot`) tende a devolver sempre as mesmas contas grandes (imprensa, veículos institucionais) — elas dominam o ranking de engajamento pra praticamente qualquer assunto quente do dia, dando uma falsa sensação de "não varia muito".

`statistics` mostra a distribuição real (ex: 47% Twitter, 28% YouTube, 12% Notícias) e o sentimento agregado do período inteiro — leitura muito mais representativa que 20-50 posts do topo do ranking. Puxe `statistics` primeiro, entenda o panorama, e só depois decida se vale aprofundar com `posts`.

## Playbook: "Panorama de Marca/Assunto"

Para qualquer pedido tipo "o que estão falando sobre X" ou "como a marca X está sendo percebida", rode nessa ordem, sem pular etapas e sem esperar o usuário pedir cada uma:

1. **`statistics`** — panorama geral: quanto se fala, onde, e o sentimento predominante.
2. **`linechart`** — a conversa está subindo, caindo ou estável no período?
3. **`posts`** — 2-3 exemplos concretos que ilustrem o que apareceu em (1) e (2), não uma lista genérica.
4. **`trend_users`** — quem são as vozes que estão amplificando (imprensa? criadores? fãs orgânicos?).

## Playbook: "Comparação com Concorrente"

Quando o pedido envolver comparar duas marcas/produtos/campanhas (ex: "como estamos vs [concorrente]"):

1. Rode o **mesmo `date_range`** e o **mesmo `data_type`** para as duas queries — nunca compare janelas de tempo diferentes.
2. Rode pelo menos `statistics` para os dois lados.
3. Se fizer sentido, complemente com `linechart` dos dois no mesmo período.
4. Apresente sempre em formato comparativo (tabela ou lado a lado).

## Playbook: "O que bombou hoje/ontem" (sem tema definido)

O Radar **não aceita busca sem `query`/tema** — é uma limitação real da API. Quando o pedido for genérico assim:

1. **Buscar na web** (fora do conector) por trending topics do período/região. Isso dá 2-4 **candidatos** de assunto.
2. **Validar cada candidato no Radar** — rodar uma query separada pra cada um (pelo menos `statistics`).
3. **Responder com o volume/sentimento real medido no Radar**, não só com o que a busca externa alegou. Se um candidato não tiver volume relevante na base da Stilingue, sinalizar isso.

## Janelas de Tempo Padrão

| Tipo de pedido | Janela sugerida |
| --- | --- |
| "O que está rolando agora" / check-in do dia | Últimas 24h |
| Relatório semanal de campanha/marca | Últimos 7 dias (considere também os 7 dias anteriores, para comparação) |
| Retrospectiva de evento/ativação pontual | Do início ao fim do evento |
| Pedido vago sem prazo claro | Últimas 24h como padrão, mas explicite essa escolha na resposta |

## Sintaxe de Busca (`query`)

Booleana formal, limite de 21 termos, acentuação ignorada:

- Simples: `Netflix`
- OR: `Netflix OR "Prime Video" OR "Globo Play"` (aspas para termos compostos)
- AND: `Asus AND Notebook`
- NOT: `Asus AND NOT Zenfone`
- Agrupamento: `(Netflix OR Disney) AND "Streaming"`

## Interpretando os campos

- **`hot`**: índice de engajamento proprietário da Stilingue. Relativo ao contexto — compare sempre dentro da mesma query, não entre queries diferentes.
- **`polarity`**: sentimento do post. `1` = positivo, `2` = negativo, `3` = neutro. **Atenção**: no Warroom (skill `warroom-stilingue`) o campo equivalente se chama `sentiment` e usa outra escala (`1`/`-1`/`0`) — não confundir os dois.
- Se houver volume alto de `polarity: 2` com `hot` elevado, isso é sinal de possível crise de imagem — vale alertar o usuário proativamente.
- **Campos de identificação/mídia disponíveis em `data_type=posts`**: `pid` (id do post), `uid` (id do autor), `post_url` (link direto pro post original), `image_url` (imagem do post, se houver — útil pra análise visual/de criativo). Use `post_url` sempre que o usuário quiser conferir a publicação original, não invente link.
- **Engajamento**: `likes`, `shares`, `comments` — quando o usuário pedir "os posts com mais engajamento" (diferente de "mais relevantes/`hot`"), esses três campos são a métrica certa, não o `hot`.
- **Nunca exponha nomes de campo cru da API na resposta** (ex: `AAA_score`, `net_promoter_score_variation`) — traduza para linguagem simples em PT-BR.
- Ao mostrar posts de exemplo, sempre inclua a data de publicação.
