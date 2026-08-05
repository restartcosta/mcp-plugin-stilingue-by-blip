---
name: fundacao-mcp
description: Camada de fundação do MCP da Stilingue. Consultar a Stilingue para qualquer pergunta sobre redes sociais, social listening, monitoramento de marca, buzz, sentimento público, tendências, configuração de painel ou dados de atendimento/SAC. Use SEMPRE que o usuário perguntar o que estão falando de uma marca/produto/pessoa/assunto nas redes sociais, pedir análise de sentimento, comparação com concorrentes, tendências, auditoria de painel, ou mencionar um painel/apikey/account_id/universe_id da Stilingue — mesmo que não diga "Stilingue" explicitamente. Cobre quatro frentes: Radar (base pública, sem apikey), Warroom (painel dedicado do cliente, com apikey), Setup (configuração do painel) e Smartcare (atendimento).
---

# Fundação — MCP Stilingue

Esta camada roda em toda consulta. Contém o que precisa estar presente **antes** da consulta, para que a resposta não nasça errada. O detalhe está nos references, lidos sob demanda.

Quatro ferramentas: **`radar`** (base pública, sem `apikey`), **`warroom_query`** (painel do cliente, requer `apikey`), **`setup`** (configuração do painel, requer `account_id`+`universe_id`) e **`list_panels`** (descobre os painéis do usuário logado). **Nunca responda de memória sobre redes sociais, buzz, sentimento ou configuração de painel — sempre consulte.**

---

## 1. Antes de consultar: qualificar só quando precisa

Consulta pontual e específica é o uso mais comum. Pergunta de volta é atrito — **responda direto** quando o pedido tiver objeto, recorte temporal e fonte claros, quando houver urgência, ou quando rodar a consulta custar menos que perguntar.

**Qualifique** quando o pedido admitir várias respostas certas e incompatíveis, quando a resposta virar entregável para terceiros, ou quando faltar objeto ou recorte que não dê para inferir. Teto de duas perguntas; passou disso, rode uma consulta e pergunte sobre o resultado.

**Antes de perguntar, leia o painel.** `setup` responde quais marcas, concorrentes, canais, temas e tags existem, e qual a terminologia do cliente. Perguntar o que estava disponível gasta o crédito que seria melhor usado na pergunta que importa.

**Nem toda pergunta é respondida só com listening** — e recusar é resposta fraca. Nomeie qual parte o listening cobre, qual não cobre, de qual fonte a parte faltante viria, e onde o listening ainda contribui.

Procedimento completo em `references/discovery.md`.

---

## 2. Roteamento

| A pergunta é sobre | Fonte | Reference |
| --- | --- | --- |
| Dados coletados no painel (menções, sentimento, posts, estatísticas) — mencionou `apikey`, painel, "minha marca", "nosso cliente" | `warroom_query` | `warroom.md` |
| Atendimento, SAC, conversas, tempo de resposta | `warroom_query` com filtros de SAC | `smartcare.md` |
| Configuração do painel (grupos, temas, tags, canais coletados) | `setup` | `setup.md` |
| Exploração livre, pesquisa pontual, usuário sem painel | `radar` | `radar.md` |
| O que a ferramenta coleta ou não coleta em cada rede | — | `matriz-coleta-por-rede.md` |
| Como interpretar o resultado | — | `boas-praticas-analiticas.md` |

| | Radar | Warroom | Setup |
| --- | --- | --- | --- |
| **Autentica com** | Nada (backend) | `apikey` | Sessão + `account_id`/`universe_id` |
| **Dados** | Base pública amostral, desde 2018. Imutáveis, sem temas/tags | Coleta dedicada, editável e classificável | Estrutura do painel, não os posts |
| **Usar quando** | Exploração sem painel, validação de termo, pesquisa rápida | Análise de marca com painel configurado | Entender como o painel está montado |

Para `setup`, se ainda não souber `account_id`/`universe_id`, chame **`list_panels` primeiro** — nunca peça esses IDs ao usuário. Se o usuário tiver mais de um painel, confirme qual antes de consultar.

---

## 3. Cobertura: o que a ferramenta consegue ver

Previne o erro mais caro do MCP — afirmar que algo não foi falado quando nunca poderia ter sido coletado.

**Ausência de dado tem quatro significados:** (1) não se falou do assunto; (2) a rede não entrega esse dado para nenhuma ferramenta; (3) o painel não está configurado para coletar aquilo; (4) a coleta era possível, estava configurada, e falhou. **Nunca apresente (2), (3) ou (4) como se fosse (1)** — e diante de queda inexplicada em canal configurado, mantenha falha de coleta como hipótese viva em vez de explicar com limitação de API.

**O Radar é amostra, não censo.** A base pública é construída a partir das coletas dos painéis de clientes da Stilingue. Use para magnitude relativa, tendência e composição — nunca como volume absoluto de mercado. Números de outras fontes (outra ferramenta, outro painel, contador nativo da rede) vêm de bases diferentes; a diferença se explica pela composição, não por erro.

**O Radar não tem:** TikTok, retweets, DMs, comentários de Instagram.

**Instagram e Facebook não aceitam busca por termo livre.** Instagram coleta por hashtag e perfil business; Facebook, só páginas públicas mapeadas — nunca perfis pessoais, grupos ou eventos.

**Toda conclusão de ausência declara o escopo:** fonte, período e canais cobertos. E aponta caminhos adjacentes — outra fonte, outro termo, outro recorte.

Detalhe por rede, anonimização de autoria e causas operacionais de falha em `references/matriz-coleta-por-rede.md`.

---

## 4. Leitura: o que aplicar a todo resultado

**Nenhum número sai sem declarar o que está dentro e o que está fora da contagem.** O usuário raramente precisa do número exato; precisa do número com a régua junto, para se justificar depois.

**Nomeie a unidade.** Conversa, interação e publicação não são a mesma coisa, e divergência de ordem de grandeza entre relatórios do mesmo painel costuma ser diferença de unidade, não erro.

**Nomeie a composição de métrica composta.** Engajamento é somatório de curtida, comentário e compartilhamento — não bate com nenhum deles isolado.

**Todo número precisa de referencial.** Comparação histórica e variação temporal. Número sozinho não sustenta decisão, e a pergunta mais útil costuma ser proporcional, não volumétrica: está subindo ou descendo, desde quando, que fração do total representa.

**Antes de tratar um pico como fato sobre a marca**, verifique evento externo e sazonalidade. Portais de notícia são produção editorial e inflam volume sem representar conversa orgânica.

**Antes de tratar volume como fato**, considere contaminação: termo ambíguo, fala da própria marca misturada à do público, anti-spam desligado em período de promoção.

**Alcance Potencial é projeção**, derivada da contagem de seguidores — não alcance medido. **Índice de Sentimento sem volume não significa nada.** **`hot` é relativo à consulta** e não comparável entre consultas.

**Classificação automática de sentimento erra em ironia.** Em volume baixo ou pauta polarizada, verifique amostra antes de reportar percentual.

Regras completas de interpretação, incluindo atendimento, comparação e tipos de relatório, em `references/boas-praticas-analiticas.md`.

---

## 5. Regras de negócio

**Limite de publicações por chamada: 300.** Nunca solicite mais que isso numa única consulta. Se a análise exigir mais volume, use dados agregados — estatísticas, séries temporais, rankings — em vez de puxar mais posts brutos.

**Replicabilidade.** Toda resposta baseada em dados declara **fonte, período e filtros aplicados**, de forma que o usuário consiga reproduzir a consulta na plataforma. Não é rodapé opcional; é parte da resposta.

**Exemplos de publicações** sempre com data e, quando disponível, link para o original. **Nunca invente link.**

---

## 6. Convenções de sentimento

| Significado | Radar (`polarity`) | Warroom (`sentiment`) |
| --- | --- | --- |
| Positivo | `1` | `1` |
| Negativo | `2` | `-1` |
| Neutro | `3` | `0` |

---

## 7. Terminologia

- `radar` → **"Radar"**. Nunca "Zoom Express" ou "Mar Aberto".
- `warroom_query` → **"Warroom"** ou **"painel"**.
- `setup` → **"configuração do painel"**.
- Atendimento → "conversas", "interações", "atendimentos". **A Stilingue não usa "tickets".**
- Nunca exponha nome de campo cru da API (`AAA_score`, `polarity`, `net_promoter_score_variation`) — traduza para PT-BR simples.
- Nunca mostre `account_id`, `universe_id` ou `apikey` ao usuário; use os nomes dos painéis.
- Use a terminologia do próprio painel. Se um grupo se chama "Universo Categoria", use esse nome.

---

## 8. References

| Arquivo | Conteúdo |
| --- | --- |
| `discovery.md` | Procedimento de qualificação de pedido vago. |
| `radar.md` | Parâmetros do Radar, `data_type`, sintaxe booleana, janelas, campos de retorno. |
| `warroom.md` | Parâmetros, filtros de segmentação, os 22 `path` disponíveis. |
| `setup.md` | Parâmetros de `setup` e `list_panels`, descoberta de painéis, Grupo/Tema/Tag/Contexto. |
| `smartcare.md` | Atendimento via `warroom_query`, `sac_type`/`status`, TMR e TMT. |
| `matriz-coleta-por-rede.md` | O que cada fonte coleta por rede, anonimização, causas de falha de coleta. |
| `boas-praticas-analiticas.md` | Regras de leitura e interpretação de resultado. |
