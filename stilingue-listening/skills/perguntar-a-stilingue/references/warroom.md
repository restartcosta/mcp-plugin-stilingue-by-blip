
# Warroom Stilingue (Listening Proprietário)

O Warroom é focado em dados de painéis específicos da Stilingue (Listening Proprietário). Permite analisar a saúde da marca, concorrentes e temas específicos configurados pelo cliente. **Sempre chame essa fonte de "Warroom" ou "painel" na resposta ao usuário, nunca use nomes técnicos internos.**

## Ferramenta MCP: `warroom_query`

Requer obrigatoriamente `apikey` (ID do painel do cliente).

### Parâmetros Principais

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `apikey` | string | Sim | Token/ID numérico do painel Stilingue. |
| `path` | enum | Sim | O tipo de visão analítica desejada (veja a lista abaixo). |
| `date_range` | string | Sim | Formato `YYYYMMDDHHmm:YYYYMMDDHHmm`, ou `Nd` (ex: `7d`) até no máximo 30 dias. |
| `last_days` | int | Não | Alternativa ao `date_range`: últimos N dias. **Sobrescreve `date_range` se os dois forem enviados.** |
| `query` | string | Não | Filtro adicional de termos. |
| `limit` | int | Não | Quantidade de resultados (geralmente até 500; alguns paths agregados aceitam até 100.000). |
| `offset` | int | Não | Paginação: pula os N primeiros resultados. |
| `order_by` | enum | Não | `date_desc`, `date_asc`, `hot`, `interactions`, `likes`, `shares`, `comments`, `followers`, `influence`. |

### Filtros de Segmentação (combine quantos fizer sentido)

| Parâmetro | Tipo | Descrição |
| --- | --- | --- |
| `channels` | string | Separados por `:`. Valores: `Twitter, Instagram, InstagramComments, Facebook, FacebookComments, YouTube, YouTubeComments, News, Blogs, Linkedin, Tiktok`. |
| `groups` | string | Nome(s) de grupos da pesquisa, separados por `:`. |
| `themes` | string | Tema(s) da pesquisa, separados por `:`. |
| `tags` | string | Tag(s) da pesquisa, separadas por `:`. |
| `interests` | string | Interesse(s) do autor, separados por `:`. |
| `genders` | string | `Homem, Mulher, Marca`, separados por `:`. |
| `types` | string | `Text, Image, Video, Audio`, separados por `:`. |
| `devices` | string | `Computador, Mobile`. |
| `langs` | string | `pt, en, es`. |
| `sentiment` | int | `1` positivo, `-1` negativo, `0` neutro. |
| `pids` / `uids` | string | ID(s) de publicação/usuário específico(s), separados por `:`. |
| `annotated` | bool | Só publicações com anotações no painel. |
| `removed` | bool | `true` = só spam/apagadas. Padrão `false`. |
| `fanpages` | string | ID(s) de páginas proprietárias conectadas. |
| `filters` | string | Código de filtro pré-configurado copiado da URL do Warroom. |
| `projection` | string | Só se aplica a `path=publicacoes`. Lista de campos (separados por vírgula) que o backend deve devolver por post — reduz payload na origem. Tem um default automático já cobrindo texto, autor, data, engajamento, ids e links (ver "Campos disponíveis" abaixo); só especifique se precisar de algo diferente do default. |

**Contexto SAC/Conversas** (só quando o pedido for sobre atendimento, não listening puro):

| Parâmetro | Descrição |
| --- | --- |
| `sac_type` | `posts, comentarios, inbox, postvisitantes, comentariosvisitantes, reviews, comentariosreview, mentions, comentariosmentions`. |
| `status` | `Ignorado, Pendente, Aberto, Em Espera, Respondido, Fechado`. |

**Sobre demora**: se o Warroom levar mais de alguns segundos, a consulta entra em processamento assíncrono — o conector já trata isso com retry automático, não precisa reformular a pergunta, só aguardar.

## Tipos de Visão (`path`) — todos os 22 disponíveis

| Path | O que retorna | Quando usar |
| --- | --- | --- |
| `publicacoes` | Lista de posts detalhados | Ler o que estão falando. |
| `estatisticas` | Agregados de sentimento e canais | Saúde geral da marca. |
| `estatisticas_termos` | Sentimento cruzado com termos | Quais termos puxam sentimento positivo/negativo. |
| `visao_geral` | Painel resumo completo | Panorama único e rápido: volume, sentimento, alcance, distribuição. |
| `linechart` | Série temporal de volume (por dia) | Evolução/tendência ao longo do tempo. |
| `influenciadores` | Ranking de usuários mais relevantes | Top detratores/promotores. |
| `top_influenciadores` | Ranking de influenciadores (consolidado) | Similar, com mais detalhe de perfil. |
| `aaa` | Ranking AAA (score proprietário de influência) | Priorizar quem realmente importa amplificar/responder. |
| `termos` | Nuvem de palavras e termos citados | Assuntos mais falados no painel. |
| `temasetopicos` | Estrutura de Temas e Tópicos do painel | Quando o usuário pede "clusters"/"agrupamentos". |
| `sentimento_temas` | Sentimento por Tema | Cruzar sentimento com Temas. |
| `sentimento_grupos` | Sentimento por Grupo | Cruzar sentimento com Grupos (ex: marca/concorrente no mesmo painel). |
| `sentimento_tags` | Sentimento por Tag | Cruzar sentimento com Tags. |
| `sentimento_hashtags` | Sentimento por Hashtag | Quais hashtags carregam sentimento positivo/negativo. |
| `sentimento_regioes` | Sentimento por região geográfica | Percepção varia por estado/cidade? |
| `sentimento_buscas` | Sentimento por termo de busca | Cruzar sentimento com termos configurados na pesquisa. |
| `sentimento_dominios` | Sentimento por domínio de origem | Quais veículos têm cobertura mais positiva/negativa. |
| `sentimento_links` | Sentimento por link específico | Repercussão de uma matéria/link específico. |
| `onde` | Dados geográficos (cidades/estados) | De onde vêm as menções. |
| `quando` | Distribuição temporal (hora/dia) | Horários de pico de conversa ou SAC. |
| `ranking_evolutivo` | Ranking de temas ao longo do tempo | Como a relevância de um tema muda dia a dia. |
| `manchetes` | Manchetes sociais (posts mais representativos por sentimento) | Achar rápido os posts mais "manchete" do período. |
| `imprensa` | Mural de imprensa (cobertura editorial) | Pedido especificamente sobre mídia/imprensa, não redes sociais. |

> **"Clusters" ≠ ML**: se o usuário pedir "clusters"/"agrupamentos", isso normalmente quer dizer `temasetopicos` ou os `sentimento_*` cruzados com Grupo/Tema/Tag — **não existe clusterização algorítmica na API**. Grupo/Tema/Tag são taxonomia configurada manualmente pelo cliente, não um algoritmo.

## Dicas de Análise

1. **Cruzamento proativo**: se o usuário perguntar "Como está minha marca?", chame `estatisticas` para o panorama geral e `termos` para entender o porquê dos números — não espere ele pedir os dois.
2. **SAC e crise**: use `quando` pra identificar se uma crise começou num horário específico, e correlacione com `publicacoes` daquela mesma hora pra achar o post gatilho.
3. **Paginação analítica**: em relatórios semanais/mensais, use `limit` alto (ex: 200) em `influenciadores` e `termos` pra uma visão mais robusta.
4. **Sentimento**: o campo se chama `sentiment` (`1`/`-1`/`0`) — diferente do Radar, que usa `polarity` (`1`/`2`/`3`). Não confundir.
5. **Combine filtros numa chamada só**: "o que homens estão falando de negativo sobre a marca no Twitter essa semana" vira uma única consulta com `path=publicacoes`, `channels=Twitter`, `genders=Homem`, `sentiment=-1`, `date_range=7d` — não várias chamadas filtrando manualmente depois.
6. Nunca exponha nomes de campo cru da API na resposta — traduza para linguagem simples em PT-BR. Ao mostrar posts de exemplo, sempre inclua a data de publicação.
7. **Campos disponíveis nos posts (`path=publicacoes`)**: além de `text`/`author`/`date`/`hot`/`sentiment`, também vêm `pid` (id do post), `uid` (id do autor), `post_url` (link direto pro post), `image_url` (imagem, se houver) e engajamento (`likes`, `shares`, `comments`) — já inclusos no `projection` default, não precisa pedir de propósito.
