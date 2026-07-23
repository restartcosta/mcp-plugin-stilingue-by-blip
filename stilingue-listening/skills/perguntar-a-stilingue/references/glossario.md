
# Glossário Operacional Stilingue

Referência para evitar erros de execução e interpretação ao usar as ferramentas `radar`, `warroom_query`, `setup` e `list_panels`.

## Os Mundos

| | Radar (Mar Aberto) | Warroom (Painel) | Setup (Configuração) |
|---|---|---|---|
| **Ferramenta MCP** | `radar` | `warroom_query` | `setup` |
| **Autentica com** | Nada (backend interno) | `apikey` (ID do painel) | Sessão de login + `account_id`/`universe_id` |
| **`apikey` funciona?** | N/A | Sim | **Não** — mesmo com apikey em mãos, `setup` exige que a sessão logada tenha acesso liberado à conta |
| **Dados** | Base pública amostral (~5,8bi posts desde 2018). Imutáveis — não edita sentimento, não tem temas/tags | Coleta dedicada e customizada. Editável, classificável | Estrutura/configuração do painel, não os posts em si |
| **Usar quando** | Exploração de assunto sem painel, validação de termos, pesquisa rápida | Análise de marca/cliente com painel configurado | Auditoria/entendimento de como o painel está montado |
| **Não tem** | Inbox/DMs, retweets, TikTok, posts proprietários, comentários Instagram (pós-2019) | — | — |
| **Janela máxima** | 360 dias por busca | Depende do contrato | N/A |

**Regra de decisão:** Se o usuário mencionou `apikey`, painel, "minha marca" ou "nosso cliente" e quer **dados/posts** → Warroom. Se quer **configuração/estrutura** do painel → Setup. Caso contrário → Radar.

## Descoberta de `account_id`/`universe_id`: nunca peça pro usuário digitar

O `setup` (e no futuro outras ferramentas de escrita) usa `account_id`/`universe_id`, não `apikey`. Em vez de pedir esses IDs pro usuário, use a tool `list_panels` (sem parâmetros obrigatórios) — ela consulta a sessão de login e devolve as contas/painéis que a pessoa tem acesso, com nome de cada um. Só peça esses IDs "na mão" se `list_panels` não retornar o painel esperado (nesse caso, o problema é de permissão na plataforma, não de o usuário não saber o ID).

## Convenções de Sentimento — NÃO CONFUNDIR

| Significado | Radar (`polarity`) | Warroom (`sentiment`) |
|---|---|---|
| Positivo | `1` | `1` |
| Negativo | `2` | `-1` |
| Neutro | `3` | `0` |

## Estrutura do Painel (Warroom)

⚠️ **Não assuma que todo painel está bem configurado.** A maioria tem setups básicos. Não sugira cruzamentos que dependem de elementos inexistentes — confirme antes com uma chamada de `estatisticas` ou `temasetopicos` se o painel realmente tem a estrutura necessária.

⚠️ **Grupo ≠ marca.** Grupos podem monitorar marcas, influenciadores, eventos, assuntos setoriais ou campanhas. Infira pelo contexto, não assuma automaticamente que "grupo = marca".

- **Grupo** → O que é coletado (parâmetro: `groups`)
- **Tema** → Como é classificado automaticamente por assunto (parâmetro: `themes`). Muitos painéis não têm.
- **Tag** → Rótulo manual ou por regra de automação (parâmetro: `tags`). A maioria dos clientes subutiliza.
- **Contexto** → Filtro que peneira termos ambíguos. Configuração de Setup, não controlável via MCP.
- **Conexões Proprietárias** → Canais oficiais conectados. Habilita inbox/DMs e Smartcare (parâmetros: `fanpages`, `sac_type`, `status`).

## Sintaxe: Radar vs Setup do Painel — NÃO MISTURAR

**Radar (`radar`):** Booleana padrão → `AND`, `OR`, `AND NOT`, `"aspas"`, `termo*`, `(parênteses)`. Limite: 21 termos. Acentuação ignorada.

**Setup do Painel (configuração de coleta, não é parâmetro MCP):** Sintaxe proprietária → `&&`, `-TERMO`, `exatamente:`, `raiz*`, `distante:`, `contexto:`. **Não funciona no Radar nem como parâmetro `query` do `warroom_query`** — é config de coleta feita fora do MCP.

## Campos Importantes

- **`hot` (Radar):** Índice de engajamento. Relativo ao contexto — comparar dentro da mesma query, nunca entre queries diferentes.
- **`channel`:** Rede de origem. Radar não filtra por canal (só mostra distribuição via `data_type=statistics`). Para filtrar de fato, use Warroom (`channels`).
- **Alcance Potencial (Warroom):** 20% dos seguidores dos autores que postaram. É **projeção**, não reach real medido — nunca apresente como número definitivo, sempre com a ressalva de que é estimativa.
- **Índice de Sentimento (Warroom):** % Positivas − % Negativas. Sempre apresentar junto com o volume total (um índice alto com volume baixo não tem o mesmo peso que um índice alto com volume alto).

## Particularidades por Rede

- **Instagram:** API restritiva. Coleta via hashtags, Business Discovery (limite 30 perfis/página), Central de Influenciadores. Comentários de terceiros: só com página proprietária conectada.
- **TikTok:** Coleta por hashtags. Sem sentimento por IA. **Sem dados no Radar** (só Warroom, com conta corporativa conectada).
- **Twitter/X:** Maior abrangência textual. Tende a dominar volume. Retweets podem inflar dados no Warroom (excluídos do Radar).
- **Portais de Notícia:** Não são redes sociais — são produção editorial. Podem inflar volume sem representar conversa orgânica real; sinalize essa diferença se o volume de notícia for desproporcional.
