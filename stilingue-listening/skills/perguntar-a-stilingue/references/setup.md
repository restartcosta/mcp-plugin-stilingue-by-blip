
# Setup de Painel Stilingue (Configuração)

A tool `setup` consulta a **configuração** de um painel Warroom — não são os dados/posts coletados (isso é `warroom_query`), é a estrutura do painel em si: o que está sendo coletado, como está sendo classificado, e a saúde geral do setup. **Sempre chame isso de "configuração do painel" ou "setup" na resposta ao usuário, nunca use nomes técnicos de campo da API.**

## Descobrindo `account_id`/`universe_id`: NUNCA peça pro usuário digitar

Diferente do `warroom_query` (que usa `apikey`), o `setup` precisa de `account_id`+`universe_id`. **Não peça esses IDs pro usuário** — use a tool `list_panels` primeiro, sem nenhum parâmetro obrigatório, ela usa a sessão de login pra descobrir sozinha quais contas/painéis a pessoa tem acesso, já com o nome de cada um:

- Usuário tem só 1 painel → usa direto, sem perguntar nada.
- Usuário tem vários → mostra os **nomes** (nunca os IDs crus) e pergunta qual ele quer antes de chamar `setup`.
- `list_panels` devolve mais de 25 painéis sem `account_id` informado → os nomes não vêm automaticamente (só os IDs); se o usuário já souber de qual conta é, chame `list_panels` de novo passando `account_id` pra ver os nomes daquela conta específica.

### Importante: `apikey` NÃO funciona pra `setup`, só pra `warroom_query`

Isso é uma regra de negócio deliberada, não uma limitação técnica à toa: `warroom_query` aceita `apikey` porque ler posts/estatísticas é uma operação mais aberta (útil, por exemplo, pro time de relatoria da Stilingue rodar relatório pra um cliente que só passou a apikey). `setup` é mais sensível (expõe estrutura de configuração, regras de automação) e **exige acesso de verdade** — a conta/painel só aparece em `list_panels` se a sessão logada tiver permissão liberada nela. Se alguém pedir setup de um painel que não é dele e não aparece na lista, a resposta certa é explicar que precisa pedir a esse cliente pra liberar acesso à conta dentro da plataforma — não existe atalho via apikey aqui.

## Ferramenta MCP: `setup`

Requer `account_id` e `universe_id` (os dois juntos identificam um painel).

### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `account_id` | string | Sim | ID da conta do painel. |
| `universe_id` | string | Sim | ID do universo (painel) dentro da conta. |
| `groups_limit` | int | Não | Quantidade de grupos a retornar. Padrão **20**. |
| `groups_skip` | int | Não | Paginação: pula os N primeiros grupos. Padrão 0. |
| `tags_limit` | int | Não | Quantidade de tags a retornar. Padrão **50**. |
| `tags_skip` | int | Não | Paginação: pula as N primeiras tags. Padrão 0. |
| `themes_limit` | int | Não | Quantidade de temas a retornar. Padrão **25**. |
| `themes_skip` | int | Não | Paginação: pula os N primeiros temas. Padrão 0. |

Grupos, Temas e Tags têm paginação **independente** — se um painel tiver mais grupos do que o `groups_limit` padrão, por exemplo, isso não afeta quantos temas ou tags voltam.

## O que a resposta traz

| Campo | O que é |
| --- | --- |
| `panel_name`, `status` | Nome do painel e se está em execução. |
| `channels` | Canais que o painel está configurado para coletar. |
| `start_date`, `end_date` | Janela de coleta configurada (`end_date` vazio = sem data de término). |
| `groups` / `groups_returned` | Lista de Grupos (id, título, contagem de descritores, amostra de 5 descritores, se é marca, idiomas). |
| `themes` / `themes_returned` | Lista de Temas (id, título, contagem de descritores, amostra). Pode vir vazio — nem todo painel tem tema configurado. |
| `tags` | Lista simples de nomes de Tags usadas no painel. |
| `automation_rules` / `automation_rules_count` | Regras de automação (nome, status ativo/pausado, ações resumidas). |
| `posts_collected`, `month_posts`, `month_posts_limit`, `total_posts_limit` | Saúde de uso: quanto já foi coletado vs. limites contratados. |

Campos operacionais mais ruidosos (condições booleanas completas de cada automação, hashtags de Instagram/TikTok, histórico mensal de PowerTrack, SLA detalhado por dia da semana) são filtrados de propósito — não aparecem na resposta porque poluiriam mais do que ajudariam a entender a configuração.

## Grupo, Tema e Tag — definições precisas (não são clusters algorítmicos)

- **Grupo**: conjunto de termos/descritores usado para **coletar** publicações das redes sociais — é o que entra no painel.
- **Tema**: usa a mesma lógica de termos/descritores, mas serve para **classificar** o que já foi coletado, não para coletar.
- **Tag**: outra camada de classificação, normalmente manual ou por automação da ferramenta, mais granular que Tema (quase um sub-tema) — não tem descritores próprios.

Se o usuário pedir "clusters" ou "agrupamentos" de um painel, a resposta é: não existe clusterização estatística na API — o que existe é essa estrutura de Grupo/Tema/Tag configurada manualmente. Explique com esses termos reais.

## Como responder: modo auditoria, não modo dump de dados

Esta tool existe para **ajudar o cliente a melhorar o setup**, não só devolver os dados brutos. Depois de consultar, sempre faça uma leitura crítica, como um consultor auditando o painel, cobrindo o que for aplicável:

- **Grupos com poucos descritores** (baixa cobertura de coleta) ou que parecem teste/lixo (nomes tipo "teste", datas soltas, nomes de pessoa) misturados com grupos de produção.
- **Regras de automação pausadas** (`status: "paused"`) — sinalize quais são e pergunte se é intencional, especialmente se o tema/tag pausado parecer central para o negócio do cliente.
- **Divergência entre o número no `id` de um Tema e o número no `title` atual** — indica que o painel foi reorganizado/renomeado em algum momento e o identificador interno ficou com o nome antigo. Não quebra nada tecnicamente, mas confunde quem olha a lista tentando bater os dois.
- **Canais em `channels` sem grupo/automação relevante cobrindo** — descoberta por cruzamento simples entre as duas listas.
- **Palavras em listas de sentimento** (se disponíveis) que parecem genéricas demais ou fora de contexto — podem estar distorcendo a classificação automática sem o cliente perceber.
- **Saúde de uso**: `posts_collected` vs `total_posts_limit`, `month_posts` vs `month_posts_limit` — sinalize se estiver perto do limite.

Feche a resposta com um resumo curto tipo **"pontos fortes" + "pontos de atenção"**, não uma lista solta dos dados retornados. Se nada de anormal for encontrado, diga isso explicitamente em vez de forçar um problema pra parecer útil.

## Ferramenta MCP: `list_panels`

Sem parâmetros obrigatórios — usa a sessão de login pra descobrir contas/painéis.

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `account_id` | string | Não | Filtra pra uma conta específica (e força buscar nome mesmo acima do teto de 25 painéis). |
| `include_names` | bool | Não | Padrão `true`. Se `false`, pula a busca de nome (mais rápido, só devolve os IDs). |

**Resposta**: lista de contas, cada uma com `account_id`, `account_name`, `is_master`, `permissions` (`can_annotate_post`, `can_annotate_post_sac`, `can_edit_universe`) e `panels` (lista de `{universe_id, name, status}`). Se a conta aparecer duplicada com roles diferentes na origem, a lógica já resolve isso sozinha (prioriza a permissão não-master quando há divergência) — não precisa se preocupar com isso na resposta ao usuário.

## `setup` vs `warroom_query` vs `list_panels` — não confundir

| Pergunta do usuário | Tool certa |
| --- | --- |
| "Como esse painel está configurado?" / "Quais grupos/temas/tags existem?" / "Quais canais estão sendo monitorados?" | `setup` |
| "O que estão falando da minha marca?" / "Qual o sentimento essa semana?" / qualquer busca de posts/estatísticas | `warroom_query` |
| "Meu painel está bem configurado?" (auditoria) | `setup`, seguindo o modo auditoria acima |
| Usuário não sabe/não informou `account_id`/`universe_id`, ou tem mais de um painel | `list_panels` primeiro, depois `setup` com o painel escolhido |
