
# Warroom Stilingue (Listening Proprietário)

Dados de painéis específicos da Stilingue. Coleta dedicada e customizada por cliente, editável e classificável. **Sempre chame essa fonte de "Warroom" ou "painel" na resposta ao usuário.**

Para o que cada painel cobre por rede, consulte `matriz-coleta-por-rede.md`. Para a estrutura de configuração do painel, `setup.md`.

## Ferramenta MCP: `warroom_query`

Requer obrigatoriamente `apikey` (ID do painel do cliente).

### Parâmetros principais

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `apikey` | string | Sim | Token/ID numérico do painel Stilingue. |
| `path` | enum | Sim | O tipo de visão analítica desejada (lista abaixo). |
| `date_range` | string | Sim | Formato `YYYYMMDDHHmm:YYYYMMDDHHmm`, ou `Nd` (ex: `7d`) até no máximo 30 dias. |
| `last_days` | int | Não | Alternativa ao `date_range`: últimos N dias. **Sobrescreve `date_range` se os dois forem enviados.** |
| `query` | string | Não | Filtro adicional de termos. |
| `limit` | int | Não | Quantidade de resultados (geralmente até 500; alguns paths agregados aceitam até 100.000). Ver limite operacional no `SKILL.md` da fundação. |
| `offset` | int | Não | Paginação: pula os N primeiros resultados. |
| `order_by` | enum | Não | `date_desc`, `date_asc`, `hot`, `interactions`, `likes`, `shares`, `comments`, `followers`, `influence`. |

### Filtros de segmentação

Combináveis numa única chamada.

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
| `projection` | string | Só para `path=publicacoes`. Lista de campos que o backend deve devolver por post — reduz payload na origem. O default já cobre texto, autor, data, engajamento, ids e links; só especifique se precisar de algo diferente. |

### Filtros de atendimento

Só quando o pedido for sobre SAC. Ver `smartcare.md`.

| Parâmetro | Descrição |
| --- | --- |
| `sac_type` | `posts, comentarios, inbox, postvisitantes, comentariosvisitantes, reviews, comentariosreview, mentions, comentariosmentions`. |
| `status` | `Ignorado, Pendente, Aberto, Em Espera, Respondido, Fechado`. |

**Sobre demora:** se a consulta levar mais de alguns segundos, ela entra em processamento assíncrono. O conector trata isso com retry automático — não reformule a pergunta, apenas aguarde.

## Tipos de visão (`path`)

| Path | O que retorna | Quando usar |
| --- | --- | --- |
| `publicacoes` | Lista de posts detalhados | Ler o que estão falando |
| `estatisticas` | Agregados de sentimento e canais | Panorama do painel |
| `estatisticas_termos` | Sentimento cruzado com termos | Quais termos puxam sentimento |
| `visao_geral` | Painel resumo completo | Volume, sentimento, alcance e distribuição numa chamada |
| `linechart` | Série temporal de volume por dia | Evolução ao longo do tempo |
| `influenciadores` | Ranking de usuários mais relevantes | Detratores e promotores |
| `top_influenciadores` | Ranking consolidado | Similar, com mais detalhe de perfil |
| `aaa` | Ranking AAA (score proprietário de influência) | Priorizar quem amplificar ou responder |
| `termos` | Nuvem de palavras e termos citados | Assuntos mais falados |
| `temasetopicos` | Estrutura de Temas e Tópicos do painel | Quando o usuário pede "clusters" ou "agrupamentos" |
| `sentimento_temas` | Sentimento por Tema | Cruzamento com Temas |
| `sentimento_grupos` | Sentimento por Grupo | Cruzamento com Grupos (marca vs concorrente no mesmo painel) |
| `sentimento_tags` | Sentimento por Tag | Cruzamento com Tags |
| `sentimento_hashtags` | Sentimento por Hashtag | Quais hashtags carregam qual sentimento |
| `sentimento_regioes` | Sentimento por região | Variação geográfica de percepção |
| `sentimento_buscas` | Sentimento por termo de busca | Cruzamento com termos configurados |
| `sentimento_dominios` | Sentimento por domínio de origem | Quais veículos cobrem de que forma |
| `sentimento_links` | Sentimento por link específico | Repercussão de uma matéria |
| `onde` | Dados geográficos (cidades/estados) | De onde vêm as menções |
| `quando` | Distribuição temporal (hora/dia) | Horários de pico |
| `ranking_evolutivo` | Ranking de temas ao longo do tempo | Como a relevância de um tema muda |
| `manchetes` | Posts mais representativos por sentimento | Os posts mais "manchete" do período |
| `imprensa` | Mural de imprensa | Cobertura editorial, não redes sociais |

**"Clusters" não é machine learning.** Se o usuário pedir clusters ou agrupamentos, normalmente quer `temasetopicos` ou os cruzamentos `sentimento_*`. Não existe clusterização algorítmica na API — Grupo, Tema e Tag são taxonomia configurada manualmente pelo cliente.

## Campos de retorno

Em `path=publicacoes`, além de `text`, `author`, `date`, `hot` e `sentiment`, também vêm `pid` (id do post), `uid` (id do autor), `post_url` (link direto), `image_url` (imagem, se houver) e engajamento (`likes`, `shares`, `comments`). Todos já inclusos no `projection` default.

**`sentiment`**: `1` positivo, `-1` negativo, `0` neutro. Diferente do Radar, que usa `polarity` com outra escala — ver `SKILL.md` da fundação.

## Estrutura do painel

Grupo, Tema e Tag são a taxonomia configurada pelo cliente e determinam o que os filtros `groups`, `themes` e `tags` conseguem alcançar. As definições e a lógica de cada um estão em `setup.md`.

**Cada painel tem a estrutura que foi configurada para ele.** Antes de sugerir cruzamento que depende de tema ou tag, confirme que a estrutura existe — via `setup` ou via `temasetopicos`. Se não existir, isso costuma ser uma oportunidade de evolução do painel, não um impedimento.

**Grupo não é sinônimo de marca.** Grupos podem monitorar marcas, influenciadores, eventos, assuntos setoriais ou campanhas. Infira pelo contexto.
