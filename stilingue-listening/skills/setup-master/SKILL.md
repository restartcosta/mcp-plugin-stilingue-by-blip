---
name: setup-master
description: Skill para trabalhar com a configuração de um painel Stilingue — visualizar como está, qualificar o que a operação precisa, e propor evolução. Use SEMPRE que o usuário pedir para revisar, auditar, criar ou evoluir setup de painel, ou quando disser que quer "monitorar algo" e não souber por onde começar. Também cobre casos em que o usuário chega com painel existente que não serve mais à operação, ou sem painel algum. Trabalha em três modos combináveis: estado atual (leitura do painel), qualificação (o que a operação precisa) e recomendação (delta ou proposta).
---

# Setup Master

Skill para trabalhar com a configuração de um painel Stilingue de ponta a ponta. Não é auditoria por checklist externo — é leitura estrutural do painel combinada com discovery da operação, gerando recomendação que serve a quem opera de fato.

Roda em três modos que se combinam conforme o usuário chega:

**Modo A — Estado atual.** Leitura do setup existente, organizada e legível. Widget entregue via `visualize:show_widget`, com blocos que emergem do que o painel mostra e três blocos fixos (classificação, automações, uso do plano). Fecha com **coerência do painel** — inconsistências visíveis só pela leitura da configuração — e **o que essa consulta não enxerga**, para o que fica em Configurações da plataforma.

**Modo B — Qualificação.** Discovery da operação e da necessidade, especializado para setup. Base geral em `fundacao-mcp/references/discovery.md`; especialização e roteiro por entrada em `references/qualificacao.md`.

**Modo C — Recomendação.** Gera o delta entre o que existe e o que a operação precisa, ou a proposta inicial quando não há painel. Só entra depois de A ou B. Nunca propõe alteração sem antes checar quem mais opera o painel — regra dura, sem exceção. Produto do C é widget de proposta mais prosa curta, mesmo padrão visual do Modo A. Detalhes em `references/recomendacao.md`.

---

## 1. Identificar a entrada antes de qualquer coisa

O usuário chega em três configurações. Ler a mensagem inicial define qual modo abre primeiro.

| Como chega | Entrada | Sequência |
| --- | --- | --- |
| "Meu painel está uma bagunça, revisa aí" · "O que tem no meu setup?" · "Aponta o que pode melhorar" | Painel existente para revisão | A → B → C |
| "Quero criar um painel para monitorar X" · "Preciso configurar coleta de Y" | Necessidade formada, painel novo | B curto → C |
| "Queria dar mais uso à ferramenta" · "Meu chefe pediu insights" · "Não sei bem como aproveitar isso" · "Estou perdido" | Sem demanda formada | B por operação → C |

Se há painel na conta e o usuário não menciona necessidade específica, começa em A. Se há necessidade clara mas nenhum painel, começa em B. Se há painel e demanda vaga, roda A e usa o resultado como base para B.

**Antes de perguntar, ler o que já está disponível.** Se há painel, roda `stilingue:setup`. Se há briefing anexado, lê o briefing. Regra geral em `fundacao-mcp/references/discovery.md`; consequência específica de setup: perguntar objeto de escuta quando o painel já expõe grupos, temas e taxonomia é atrito puro.

**Painel existente pode ser irrelevante para a operação atual.** É comum: setup foi feito no onboarding e ninguém tocou depois, ou serve a um time que já saiu. Se a qualificação do Modo B revelar que o painel não está a serviço de quem usa hoje, o Modo C propõe reset, não delta. Não force coerência com uma configuração que não estava a serviço da pessoa.

---

## 2. Modo A — Como apresentar o setup

Chama `stilingue:setup` com o `account_id` e `universe_id` do painel. **Se `groups_returned`, `themes_returned` ou `tags_returned` bater no `limit` passado, pagine até esgotar antes de renderizar.** Leitura truncada esconde famílias inteiras de prefixo e destrói o valor do widget. Parâmetros de paginação em `fundacao-mcp/references/setup.md`.

Renderiza no widget as seções que emergem do painel:

**Cabeçalho** — nome do painel, status (em execução, pausado, deletado), data de início, contagem de grupos/temas/tags/automações. Uma pílula declara o **tipo detectado** — "empresa como eixo · SAC dedicado", "assunto como eixo · com stakeholders monitorados", "pessoa como eixo · portfólio de patrocínio", "categoria multimarca · evento como eixo", "painel deletado — snapshot histórico".

**Coleta em mar aberto** — canais coletando, com hint discreto explicando que mar aberto é descoberta por descritor nos canais suportados. Distinto de conteúdo próprio via perfis conectados.

**Grupos** — agrupados por papel inferido dos nomes: marca central, coleção de entidades, concorrência, ecossistema comercial, marcas alvo, territórios e ocasiões, contexto estratégico e crises, termos do contexto, testes e órfãos. Só aparece o bloco que tem material. Cada grupo é um card colapsável por padrão; expandido, mostra os descritores em bloco monospace (operadores ganham cor — ver §5).

**Classificação** — temas e tags, cada um agrupado por padrão de nomenclatura detectado no painel (prefixo curto separado por hífen ou colchete, quando existe) e por preenchidos versus sem termos. Mesmo padrão de cards colapsáveis dos grupos.

**Automações do painel** — não é lista. É leitura por finalidade detectada: farmacovigilância, tagueamento operacional, calibração de sentimento, roteamento, campanha ativa, geo-tagging. Cada finalidade traz contagem e estado (ativas/pausadas). Automação pausada em bloco é sinal — dizer quantas e sob que rótulo.

**Uso do plano** — limite total, limite mensal, coletado no mês, total coletado. Quando o campo vem `null` ou `0`, mostrar "Não veio" em vez de forçar zero.

**Coerência do painel** — inconsistências visíveis apenas pela leitura da configuração, sem cruzar com dado nem com briefing. Duas gerações de taxonomia coexistindo, peneira de contexto vazia em painel multimarca, automações do mesmo propósito em estados opostos, grupos duplicados literalmente, erro de digitação em rótulo. Só aparecem os achados que a estrutura crua revela. Não é diagnóstico — é o que a configuração denuncia sozinha.

**O que essa consulta não enxerga** — três blocos padrão: estado das configurações do painel (anti-spam, coleta de RT, sentimento automático, neutro habilitado), perfis conectados e coleta social, Biblioteca de Termos. Direciona para Configurações da plataforma.

O widget é sempre o mesmo template com blocos dinâmicos. Nunca fingir que o painel tem estrutura que não tem — bloco sem evidência simplesmente não aparece.

---

## 3. Modo B — Regras de qualificação

Roteiro completo por entrada em `references/qualificacao.md`. Base geral em `fundacao-mcp/references/discovery.md`. As regras específicas de setup que ficam no núcleo:

**Perguntar pelo entregável, não pelo objetivo.** "O que você precisa ter na mão ao fim do dia / da semana / do mês?" é mais útil que "qual seu objetivo com o painel?". Pergunta por entregável traz vocabulário real do usuário e revela audiência sem ter que perguntar.

**Fechado com opções, quase sempre.** Exceções previstas: (a) perguntas de rotina na entrada 3, porque a resposta é o próprio objeto do turno; (b) descritores de coisa nova que só o cliente sabe (nome oficial de campanha, hashtag oficial, slogan de peça, lista de produtos ou influenciadores contratados) — pergunta é aberta e vem com chute inicial derivado do que o cliente já disse, pra ele reagir em vez de escrever do zero.

**Briefing lista tudo como prioridade — a skill puxa priorização real.** Quando há briefing anexado, o texto tende a listar todas as frentes possíveis como se fossem prioritárias em pé de igualdade. Nenhuma operação começa rodando cinco frentes ao mesmo tempo. A skill lê o briefing, identifica a coluna vertebral (o que gera valor mais rápido, o que é regulatório, o que é dependência de outras frentes) e traz priorização como parte da qualificação, não como pergunta neutra.

**Nunca propor alteração de configuração sem antes checar quem mais opera o painel.** Regra dura, também presente na fundação. Painel compartilhado entre marketing e atendimento é comum, e alteração que serve a um quebra a operação diária do outro. A pergunta precisa ser feita explicitamente antes de qualquer sugestão de C — nem que seja "quem mais além de você mexe nesse painel?".

**Painel existente pode ser irrelevante.** Se as respostas de B revelam que o painel foi montado para outra operação, outro time, ou outra fase que já passou, dizer isso explicitamente e propor reset como caminho, ao lado da alternativa de adaptar. Não fingir coerência com o que não serve.

**Fechar com um caminho principal e uma alternativa curta.** Nunca com menu de possibilidades. Usuário que não sabe o que quer trava diante de cinco opções — precisa de uma proposta plausível para reagir. Uma alternativa breve mantém a agência sem paralisar.

---

## 4. Modo C — Regras de recomendação

Entra depois de A ou B, nunca antes. **Quatro subtipos**, decididos pelo que B revelou:

| Se a qualificação revelou | Subtipo | Postura |
| --- | --- | --- |
| Necessidade formada, coberta em parte pelo painel | Alteração pontual | Mínimo suficiente pra resolver, sem expandir |
| Painel existente com múltiplas lacunas frente à operação atual | Revisão priorizada | Hierarquiza; nunca despeja lista |
| Sem painel, sem template a herdar | Setup inicial | Enxuto e funcional, sinal explícito de evolução |
| Painel já serve à operação; usuário só não sabia | Orientação de uso | Ensina o caminho na plataforma, não mexe em nada |

Detalhamento por subtipo em `references/recomendacao.md`.

### 4.1 As três declarações — regra dura

Toda recomendação declara literalmente:

1. **O que muda** — grupo, tema, descritor específico, delta exato.
2. **Efeito sobre histórico coletado** — três estados possíveis, ver 4.2.
3. **Quem precisa saber antes** — checado no Modo B pela pergunta dura "quem mais opera o painel". Se ainda não foi respondida, pergunta antes de emitir a proposta.

Sem essas três, é opinião, não recomendação.

### 4.2 Efeito sobre histórico — três estados

Regra geral de retroatividade em `fundacao-mcp/references/boas-praticas-analiticas.md` (§ "Alterações de configuração que mudam o dado"). Aplicado a setup, três estados a nomear explicitamente na proposta:

- **Grupo, sem reprocessamento** (comportamento padrão): a coleta com os novos descritores começa a valer da hora que aplicar. Publicações anteriores à alteração não são reclassificadas.
- **Grupo, com reprocessamento**: a plataforma reprocessa retroativamente até o limite exposto na UI (~100 mil publicações). Hoje essa opção não está exposta pelo MCP — se o usuário precisar do reprocessamento, ele dispara pela plataforma manualmente depois de aplicar.
- **Tema**: classifica retroativo à base coletada. Publicação que já está no painel e bate com os descritores do tema entra no tema automaticamente, sem ação adicional.

### 4.3 Proibições absolutas de sintaxe

Regras técnicas duras da plataforma. Sem exceção, em nenhuma proposta de descritor:

- **Aspas duplas** (`"termo"`) **não fixam termo exato** — buscam o caractere literal de aspas e quebram a coleta. Para case-sensível ou correspondência exata, use `exatamente:termo` (fica roxo na plataforma).
- **`OR`, `AND`, `NOT`, `||`, parênteses `()`** **não existem** no setup. OR se resolve por quebra de linha (uma variação por descritor). AND é `&&` (azul bebê na plataforma). NOT é `-` no início do termo (vermelho na plataforma).
- **`&&` com ou sem espaço** funciona idêntico. `A&&B` e `A && B` são a mesma coisa — nunca apontar espaço como erro.
- **Descritor > 60 caracteres** na Biblioteca de Termos é descartado silenciosamente pelo motor. Encurte antes de propor.
- **Emojis** não são classificados. Não proponha emoji em descritor.
- **Wildcard `*`** só em descritor de uma palavra. `menin*` vale; `boa vida*` não vale.

### 4.4 Molde vem do painel, não de fora

Quando o cliente pede pra monitorar X e X encaixa numa coleção que já existe no painel (novo concorrente entrando num setor já numeroso; produto novo entrando num portfólio já mapeado; atração nova em festival com blocos já cadastrados), o **padrão da coleção define o molde**. Antes de propor, leia:

- Convenção de título (prefixo, sufixo, separadores usados pelos pares)
- Operador dominante (`contexto:` em toda a coleção? só nos genéricos? nenhum?)
- Padrão de negativos (o setor tem negativos partilhados — religiosos, esportivos, comerciais?)
- Ordem de grandeza de descritores (o típico do setor é 3? 15? 30?)

Segue o padrão detectado. Boas práticas gerais são hipóteses; o painel específico é o dado. Impor template externo — quantidade mínima de descritores, temas obrigatórios universais, códigos padronizados — quebra a coerência interna que o operador já construiu.

### 4.5 Enxuto vence completo

Vale mais em setup inicial, mas cabe em qualquer subtipo: setup mínimo funcional derrota setup completo abandonado. Se a proposta tem 40 descritores onde 8 resolvem, corte antes de mandar. Sinal explícito de que evolui a partir dali é parte da proposta — não é preguiça, é convite.

### 4.6 Citação de termos

Reproduza o termo literalmente como aparece na plataforma, entre crases: `contexto:banco do brasil`, não "banco do brasil". Colide com a proibição de aspas duplas acima. Para grupo, tema ou tag, também crases: grupo `[I] Multi`, tema `[CAM] Black Friday`. Preserva capitalização e caracteres especiais como estão no painel.

### 4.7 Peneira global não protege temas — regra dura

A peneira global do painel (Termos do contexto) cruza com AND aos descritores dos **grupos**. **Não** é aplicada aos temas. O motor de classificação de tema olha apenas os descritores do próprio tema — se um post foi coletado por qualquer grupo e contém o descritor do tema, é classificado.

**Corolário:** todo termo polissêmico em tema é amarrado com `&&` a um termo do universo semântico do tema (`pele`, `corpo`, `creme`, `perfume`, `produto`, `frasco`, `voo`, `passagem`, etc., conforme o setor). Termo isolado só passa quando a expressão já é inconfundível por si só (`skincare corporal`, `body lotion`, `pele macia`, `frete caro`, `preço absurdo` — o composto amarra o sentido).

**Postura:** pecar pelo excesso. Descritor sobrando é ruído no relatório final; descritor de menos é insight que não aparece. Cada polissêmico normalmente vira duas ou três amarrações distintas para capturar variações — `absorve && pele`, `absorve && creme`, `absorve && rápido`.

### 4.8 O produto do C é widget + prosa

Análogo ao Modo A. Widget via `visualize:show_widget` carrega o que é copiável ou executável (descritores em bloco com botão de copiar, configurações, tags, automações, pendências do cliente). Prosa fica pra decisões estratégicas, caminhos alternativos e o que precisa de discussão. Dump de descritores em prosa é ruim de ler e ruim de copiar — evitar.

**Estrutura por subtipo:**

- **Alteração pontual**: um card por grupo/tema afetado. Botão "Copiar" + botão "Aplicar direto" quando a tool de escrita estiver disponível. Não despejar o painel inteiro — só o delta.
- **Revisão priorizada**: um card por proposta, ordenados por impacto na operação. Contador "1 de 5" para sinalizar pacote, não avalanche. Botão de aplicar por card.
- **Setup inicial**: widget completo — configurações, peneira global, todos os grupos, todos os temas, tags, automações, pendências do cliente destacadas. Botões de copiar por card. Botão único de "Aplicar setup inteiro" só quando existir tool de criação de painel.
- **Orientação de uso**: sem widget. É prosa apontando caminho na plataforma. Widget aqui viraria overhead sem valor.

**Comportamento do widget:**

- Cards de grupo/tema (blocos com listas de descritores) colapsados por padrão em `<details>`. Card de configuração, tags, automações e pendências ficam sempre visíveis.
- Botão "Copiar" no summary, com `event.stopPropagation()` pra não disparar o toggle.
- **Descritores exibidos um por linha** (legibilidade). **Copiados separados por vírgula** (formato universal seguro pra colar em massa na Stilingue).
- Placeholders do cliente destacados visualmente (`<sub-linhas>`, `<handles>`, `<lista_de_produtos>`) e listados numa seção "Antes de aplicar — pendências do cliente" no rodapé.
- Legenda de cores no fim, replicando a paleta da plataforma (ver §5).

---

## 5. Cores dos operadores como aparecem na plataforma

Vale pro widget do Modo A e do Modo C. Descritor cru sem operador fica sem cor especial.

| Operador | Cor | CSS |
| --- | --- | --- |
| `exatamente:` | roxo | `#7F77DD` |
| `contexto:` | verde | `var(--text-success)` |
| `-` (negativação) | vermelho | `var(--text-danger)` |
| `&&` | azul bebê | `var(--text-accent)` |

`#` e `@` não são operadores com cor especial — são caracteres que a plataforma reconhece automaticamente sem pintar.

---

## Convenções sempre válidas

Base completa em `fundacao-mcp/SKILL.md`. Específico da setup-master:

- Terminologia: "configuração do painel" para setup. Reforce "Grupo", "Tema", "Tag", "Contexto" conforme convenção da fundação.
- Nunca expor vocabulário de tool ou pipeline (`dry_run`, `diff`, `commit`, `rollback`, `apply`). Traduza: "prévia", "antes e depois", "aplicar", "desfazer".
- Nunca expor `account_id`, `universe_id`, `apikey`, nem nome cru de campo da API.
