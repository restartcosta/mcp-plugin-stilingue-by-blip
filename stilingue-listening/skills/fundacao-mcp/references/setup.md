
# Setup de Painel Stilingue (Configuração)

A tool `setup` consulta a **configuração** de um painel Warroom — não os dados coletados (isso é `warroom_query`), mas a estrutura do painel: o que está sendo coletado, como está sendo classificado, e os limites de uso. **Sempre chame isso de "configuração do painel" ou "setup" na resposta ao usuário, nunca use nomes técnicos de campo da API.**

Para avaliar a saúde operacional do painel, use a skill `diagnostico-de-setup`. Para avaliar a qualidade da estrutura, `auditoria-de-taxonomia`.

## Descobrindo `account_id`/`universe_id`: nunca peça ao usuário

Diferente do `warroom_query` (que usa `apikey`), o `setup` precisa de `account_id`+`universe_id`. **Não peça esses IDs ao usuário** — use `list_panels` primeiro, sem nenhum parâmetro obrigatório. Ela usa a sessão de login para descobrir quais contas e painéis a pessoa acessa, já com o nome de cada um.

- Um painel só → use direto, sem perguntar.
- Vários → mostre os **nomes** (nunca os IDs crus) e pergunte qual.
- Mais de 25 painéis sem `account_id` informado → os nomes não vêm automaticamente, só os IDs. Se o usuário souber de qual conta é, chame `list_panels` de novo passando `account_id` para ver os nomes daquela conta.

### `apikey` não funciona para `setup`

Regra de negócio deliberada, não limitação técnica. `warroom_query` aceita `apikey` porque ler posts e estatísticas é operação mais aberta — útil, por exemplo, para o time de relatoria rodar análise para um cliente que passou só a apikey. `setup` expõe estrutura de configuração e regras de automação, e por isso **exige acesso de verdade**: a conta só aparece em `list_panels` se a sessão logada tiver permissão liberada nela.

Se alguém pedir o setup de um painel que não aparece na lista, o caminho é pedir a esse cliente que libere acesso à conta dentro da plataforma. Não existe atalho via apikey.

## Ferramenta MCP: `setup`

Requer `account_id` e `universe_id` (juntos identificam um painel).

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

Grupos, Temas e Tags têm paginação **independente** — mais grupos que o `groups_limit` padrão não afeta quantos temas ou tags voltam.

**Os limites padrão são baixos.** Painel grande vem truncado. Se o número retornado bater exatamente no limite, provavelmente há mais — pagine antes de concluir qualquer coisa sobre o que existe ou não existe no painel.

## O que a resposta traz

| Campo | O que é |
| --- | --- |
| `panel_name`, `status` | Nome do painel e se está em execução. |
| `channels` | Canais que o painel está configurado para coletar. |
| `start_date`, `end_date` | Janela de coleta configurada (`end_date` vazio = sem data de término). |
| `groups` / `groups_returned` | Lista de Grupos (id, título, contagem de descritores, amostra de 5 descritores, se é marca, idiomas). |
| `themes` / `themes_returned` | Lista de Temas (id, título, contagem de descritores, amostra). Pode vir vazio — nem todo painel tem tema configurado. |
| `tags` | Lista de nomes de Tags usadas no painel. |
| `automation_rules` / `automation_rules_count` | Regras de automação (nome, status ativo/pausado, ações resumidas). |
| `posts_collected`, `month_posts`, `month_posts_limit`, `total_posts_limit` | Uso vs. limites contratados. |

Descritores vêm por **amostra de 5 por grupo**, não a query completa. Campos operacionais mais ruidosos (condições booleanas completas de cada automação, hashtags de Instagram/TikTok, histórico mensal de PowerTrack, SLA detalhado por dia da semana) são filtrados de propósito.

### O que a resposta não traz

Não aparecem aqui: status de token das contas conectadas, se há conta business conectada em cada rede, se a conta é compartilhada com outro painel, troca de ID de página, histórico de reprocessamento. São informações relevantes para entender a coleta e **nenhuma é visível por esta tool** — verifique na plataforma quando forem necessárias.

## Estrutura do painel: Grupo, Tema, Tag e Contexto

Não são clusters algorítmicos. São taxonomia configurada manualmente.

- **Grupo** — conjunto de termos/descritores usado para **coletar** publicações. É o que entra no painel. Termo fora de qualquer grupo não existe na base. Parâmetro correspondente no `warroom_query`: `groups`.
- **Tema** — usa a mesma lógica de descritores, mas serve para **classificar** o que já foi coletado. Não traz nada novo para dentro. Parâmetro: `themes`. Nem todo painel usa temas — confirme antes de sugerir cruzamento que dependa deles.
- **Tag** — outra camada de classificação, mais granular que Tema. Aplicada manualmente ou por regra de Automação, e **não tem descritores próprios**. Parâmetro: `tags`.
- **Contexto** — filtro que peneira termos ambíguos na configuração de coleta. É configuração de Setup na plataforma, não controlável via MCP.
- **Conexões proprietárias** — canais oficiais conectados ao painel. Habilitam inbox, DMs e Smartcare. Parâmetros: `fanpages`, `sac_type`, `status`.

Se o usuário pedir "clusters" ou "agrupamentos", explique com esses termos reais: não existe clusterização estatística na API.

## Ferramenta MCP: `list_panels`

Sem parâmetros obrigatórios — usa a sessão de login para descobrir contas e painéis.

| Parâmetro | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `account_id` | string | Não | Filtra para uma conta específica (e força buscar nome mesmo acima do teto de 25 painéis). |
| `include_names` | bool | Não | Padrão `true`. Se `false`, pula a busca de nome (mais rápido, só devolve IDs). |

**Resposta:** lista de contas, cada uma com `account_id`, `account_name`, `is_master`, `permissions` (`can_annotate_post`, `can_annotate_post_sac`, `can_edit_universe`) e `panels` (lista de `{universe_id, name, status}`). Conta duplicada com roles diferentes na origem é resolvida automaticamente pela lógica — não precisa tratar isso na resposta.

## Qual tool para qual pergunta

| Pergunta do usuário | Tool |
| --- | --- |
| "Como esse painel está configurado?" / "Quais grupos, temas e tags existem?" / "Quais canais são monitorados?" | `setup` |
| "O que estão falando da minha marca?" / "Qual o sentimento essa semana?" / qualquer busca de posts ou estatísticas | `warroom_query` |
| "Meu painel está funcionando?" / "Por que o volume caiu?" | `setup`, via skill `diagnostico-de-setup` |
| "Minha estrutura está bem montada?" / "Como melhorar meu painel?" | `setup`, via skill `auditoria-de-taxonomia` |
| Usuário não informou `account_id`/`universe_id`, ou tem mais de um painel | `list_panels` primeiro |
