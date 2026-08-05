
# Radar Stilingue

Ferramenta de social listening em base pública da Stilingue. Busca publicações em toda a base amostral da plataforma. **Sempre chame essa fonte de "Radar" na resposta ao usuário — nunca "Zoom Express" ou "Mar Aberto".**

Para o que o Radar cobre e não cobre por rede, consulte `matriz-coleta-por-rede.md`.

## Ferramenta MCP: `radar`

Diferente das ferramentas de painel, o Radar **não utiliza `apikey`**. A autenticação é feita internamente pelo servidor.

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `query` | string | Sim | Termos de busca com operadores booleanos (ex: `"Asus" AND "Notebook"`). |
| `date_range` | string | Sim | Intervalo no formato `YYYYMMDDHHmm:YYYYMMDDHHmm` (ex: `202606270000:202606302359`). |
| `data_type` | string | Não | O que retornar: `posts` (padrão), `linechart`, `statistics` ou `trend_users`. |
| `limit` | int | Não | Quantidade de posts por chamada (padrão 20, máximo 500). Só se aplica a `data_type=posts`. Ver limite operacional no `SKILL.md` da fundação. |
| `offset` | int | Não | Paginação. Use para buscar os próximos posts (se `limit=50`, use `offset=50` para a página 2). |

**O Radar não tem filtro de `channel`.** Para comparar canais específicos, só no painel do cliente via `warroom_query`. No Radar é possível ver a distribuição por canal (via `data_type=statistics`), não filtrar por ele.

## Tipos de dado (`data_type`)

| `data_type` | O que traz | Quando usar |
| --- | --- | --- |
| `statistics` | Distribuição por canal, gênero, device e sentimento do período inteiro | Panorama agregado do período |
| `linechart` | Volume de posts por dia no período | Evolução e tendência |
| `posts` | Lista de publicações individuais (ranqueadas por `hot`) | Exemplos concretos |
| `trend_users` | Contas que mais apareceram sobre o assunto | Quem amplificou a conversa |

## Sintaxe de busca (`query`)

Booleana padrão. Limite de **21 termos**. Acentuação e cedilha ignoradas na indexação.

- Simples: `Netflix`
- OR: `Netflix OR "Prime Video" OR "Globo Play"` (aspas para termos compostos)
- AND: `Asus AND Notebook`
- NOT: `Asus AND NOT Zenfone`
- Agrupamento: `(Netflix OR Disney) AND "Streaming"`

**Operadores exigem caixa alta.** Em minúscula, o operador é tratado como termo literal e a lógica quebra em silêncio, sem mensagem de erro.

### Não confundir com a sintaxe de configuração de painel

A configuração de coleta de um painel usa sintaxe proprietária — `&&`, `-TERMO`, `exatamente:`, `raiz*`, `distante:`, `contexto:`. **Esses operadores não funcionam no Radar nem no parâmetro `query` do `warroom_query`.** São configuração de coleta, feita na plataforma, fora do MCP.

## Janelas de tempo

Padrões sugeridos quando o usuário não especifica:

| Tipo de pedido | Janela |
| --- | --- |
| Check-in do dia / "o que está rolando agora" | Últimas 24h |
| Relatório semanal | Últimos 7 dias (considere também os 7 anteriores, para comparação) |
| Evento ou ativação pontual | Do início ao fim do evento |
| Pedido vago sem prazo | Últimas 24h, explicitando a escolha na resposta |

## Campos de retorno

**Identificação e mídia** (em `data_type=posts`): `pid` (id do post), `uid` (id do autor), `post_url` (link direto para o original), `image_url` (imagem, se houver). Use `post_url` sempre que o usuário quiser conferir a publicação — nunca invente link.

**Engajamento**: `likes`, `shares`, `comments`. Quando o usuário pedir "os posts com mais engajamento" (diferente de "mais relevantes"), esses três campos são a métrica certa, não o `hot`.

**`hot`**: índice de engajamento proprietário. É relativo ao contexto da consulta — comparável dentro da mesma query, não entre queries diferentes.

**`polarity`**: sentimento do post. `1` positivo, `2` negativo, `3` neutro. No Warroom o campo equivalente se chama `sentiment` e usa outra escala (`1`/`-1`/`0`) — ver `SKILL.md` da fundação.

## Busca sem tema definido

O Radar **não aceita busca sem `query`**. É limitação da API. Para pedidos genéricos do tipo "o que bombou hoje", é preciso obter candidatos de assunto por outra via e validar cada um no Radar com consulta própria, reportando o volume real medido na base.
