# Coleta — receitas de consulta

Índice:
- [Descoberta de escopo](#descoberta-de-escopo)
- [Identificadores de página por canal](#identificadores-de-página-por-canal)
- [Publicações](#publicações)
- [Comentários](#comentários)
- [Comentários publicados pela própria marca](#comentários-publicados-pela-própria-marca)
- [Base de seguidores](#base-de-seguidores)
- [Série diária](#série-diária)
- [Agregados e endpoints](#agregados-e-endpoints)
- [Limites e paginação](#limites-e-paginação)

---

## Descoberta de escopo

Duas chamadas, nesta ordem:

1. **Listar painéis** — devolve as contas e painéis a que o usuário logado tem acesso, com `account_id` e `universe_id`.
2. **Listar páginas conectadas** — devolve, por página: marca, canal, identificador e status do token.

Sem esses identificadores nenhuma consulta funciona. Não adivinhe nomes de página.

---

## Identificadores de página por canal

O identificador que vai no filtro de páginas depende do canal, e o mesmo perfil pode aparecer mais de uma vez na listagem com identificadores diferentes:

| Canal na consulta | Identificador a usar |
|---|---|
| `Instagram` / `InstagramComments` | ID numérico da conta Instagram |
| `Facebook` / `FacebookComments` | ID numérico da página Facebook |
| `YouTube` / `YouTubeComments` | ID do canal (formato `UC...`) |

Entradas do tipo `facebook_instagram` na listagem são vínculos cruzados. Para consultar Instagram, use os identificadores cujo canal é `instagram`.

Junte múltiplas páginas do mesmo canal com `:` no filtro de páginas.

---

## Publicações

Consulte o caminho de publicações com o tipo de conteúdo definido como publicações (não comentários), um canal por vez, e o filtro de páginas correspondente àquele canal.

Peça na projeção pelo menos: texto, autor, data, URL da publicação, curtidas, compartilhamentos e comentários. Ordene por interações para já receber o ranking pronto.

**Puxe o ranking pelas duas pontas.** A mesma consulta ordenada ao contrário devolve os piores posts do período, e eles carregam tanta informação quanto os melhores — formato que não pega, tema que o público ignora, horário morto. Ranking só de vencedor vira vitrine.

Guarde as **datas de publicação** e não só a contagem. A distribuição ao longo do período explica movimento de alcance que o total esconde: sete posts espaçados e sete posts concentrados em quatro dias produzem o mesmo número na tabela e resultados diferentes na rede.

Interações de um post = curtidas + compartilhamentos + comentários. Some você mesmo; o painel não devolve o total.

**Facebook exige atenção extra.** A resposta pode trazer um campo indicando dark post. Se ele vier preenchido, filtre por ele. Se vier vazio ou ausente, use o proxy documentado em `medicao.md` e **declare o proxy no entregável**.

---

## Comentários

Mesmo caminho de publicações, mas com o tipo de conteúdo definido como comentários e o canal na variante de comentários (`InstagramComments`, `FacebookComments`, `YouTubeComments`).

O filtro de páginas continua sendo o das páginas próprias — ele delimita "comentários recebidos nas minhas páginas".

Para leitura qualitativa, peça texto, autor, data e URL da publicação. A URL permite atribuir o comentário ao post que o gerou, o que costuma render achado.

**A data filtrada é a do comentário, não a da publicação.** Comentários em posts antigos entram no recorte.

---

## Comentários publicados pela própria marca

Esta é a chave para o número líquido. Repita a consulta de comentários adicionando o filtro de usuários com os identificadores das próprias páginas. O resultado é a contagem de comentários autorados pela marca no período.

Comentários do público = total coletado − comentários da marca.

Faça isso por canal. A proporção varia bastante entre redes.

Peça também o agregado, não só a lista — a visão geral devolve a contagem total e a quebra de sentimento dos comentários da marca, o que permite recalcular o sentimento do público por subtração.

---

## Base de seguidores

O caminho de perfis mais relevantes, consultado sobre publicações (não comentários) e filtrado pelas páginas próprias, devolve a base de seguidores de cada página.

Nem todo canal responde. O YouTube costuma voltar vazio — nesse caso, a base de inscritos precisa vir do YouTube Studio, e a taxa de engajamento do canal fica indisponível. Diga isso em vez de omitir a linha.

---

## Série diária

O caminho de série temporal devolve a contagem por dia do recorte. Use para comentários, nos dois períodos, para montar a curva com a linha de comparação do período anterior alinhada por dia da semana.

É também o jeito mais barato de descobrir o dia de pico antes de decidir onde amostrar.

---

## Agregados e endpoints

Dois caminhos devolvem agregados e **não concordam entre si**. Entender a diferença evita reportar número errado:

| Caminho | Endpoint | Campo | O que é |
|---|---|---|---|
| Visão geral | `monitoring_overview` | `collected_mentions` | Total coletado no recorte |
| Estatísticas | `stats_overview` | `total_known_posts` | Bate com o total coletado |
| Estatísticas | `stats_overview` | `total_posts` | Subconjunto — regra de exclusão não documentada |
| Estatísticas | `stats_overview` | `total_names` | Itens classificados em algum grupo |

Observação de campo: `total_posts` costuma ficar muito próximo de "total menos comentários da própria marca", mas não idêntico. Trate como corroboração, não como substituto.

`total_names` costuma ser irrisório em canal proprietário — grupos são desenhados para coleta em mar aberto, onde o descritor identifica a marca. Em página própria a identificação já vem da página. **Não use grupo como denominador aqui**; ele leria uma fração mínima da base como se fosse o todo.

A visão geral também devolve a variação contra o período anterior, autores únicos e a quebra de sentimento. Use-a como fonte primária dos agregados.

Guarde o identificador de depuração de cada consulta. Quando houver divergência a reportar para o time da plataforma, ele é o que torna a pergunta respondível.

---

## Limites e paginação

Publicações e comentários aceitam limite por consulta na casa das centenas e um deslocamento inicial. Duas consequências práticas:

**Se o retorno vier abaixo do limite pedido, aquilo é o total.** É o jeito mais simples de contar publicações.

**O deslocamento funciona combinado com recorte de data e ordenação**, e é o que viabiliza amostragem sistemática — ver `leitura-qualitativa.md`. Sem ele, toda consulta devolve um bloco contíguo no tempo, e bloco contíguo não é amostra.
