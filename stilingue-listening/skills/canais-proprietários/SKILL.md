---
name: canais-proprietários
description: |
  Analisa os canais proprietários de uma marca no Stilingue Warroom — as páginas da própria marca, não menções espontâneas — e produz panorama por rede: publicações, interações, comentários, posts em destaque e o que o público falou.
  Use SEMPRE que o usuário pedir panorama, relatório, análise ou "big numbers" das páginas próprias, dos canais proprietários, dos perfis da marca ou das publicações da marca. Dispare também com "minhas páginas", "nossos perfis", "o que a gente postou", "desempenho dos posts", "quebra por canal", "quebra por rede", "posts em destaque", "o que falaram nos comentários" — mesmo sem citar "Stilingue" e sem nomear o painel. Use ainda para comparar publicações da marca entre si ou medir taxa de engajamento de página própria.
  NÃO use para menções espontâneas fora das páginas da marca (isso é Radar) nem para auditoria de configuração de painel (isso é setup-master).
---

# Análise de canais proprietários

Canal proprietário é terreno diferente de mar aberto. A marca já está identificada pela página, o volume é pequeno e conhecido, e a pergunta não é "o que falam de nós" — é "o que a gente publicou, quem reagiu, e o que disseram de volta".

Isso muda o método. Grupos e descritores de coleta, que existem para achar a marca no meio do ruído, são inúteis aqui e enganosos se usados como denominador. A régua passa a ser sempre a mesma rede comparada com ela mesma no período anterior.

## Fluxo

1. **Escopo** — descobrir painel, páginas e o que está silencioso
2. **Coleta** — dois períodos, três eixos (publicações, interações, comentários), por rede
3. **Medição** — aplicar as regras duras e checar as armadilhas
4. **Leitura** — ler comentários brutos e deixar as categorias emergirem
5. **Entrega** — documento técnico e/ou one-pager executivo

Leia `references/coleta.md` antes da fase 2, `references/medicao.md` antes da fase 3, `references/leitura-qualitativa.md` antes da fase 4 e `references/entregaveis.md` antes da fase 5. Cada um resolve uma fase e não precisa ser carregado antes da hora.

Se a entrega for relatório recorrente — mensal, quinzenal, sempre o mesmo cliente — leia também `references/estrutura-mensal.md`, que traz a espinha dorsal completa do documento e o template de seção por canal.

---

## 1 — Escopo

Nunca comece consultando dados. Comece descobrindo o que existe.

Liste os painéis disponíveis, depois liste as páginas conectadas do painel escolhido. Isso devolve, por página: marca, canal, identificador e status do token. Só então monte as consultas.

Três coisas para verificar e reportar já nesta fase, porque elas mudam a interpretação de tudo que vem depois:

**Páginas conectadas que não publicaram.** Se uma marca tem página ativa e zero publicação coletada no período, isso é achado, não ausência de dado. Reporte como pendência e não assuma que a página está morta — pode ser falha de coleta. Um sinal útil: se a página aparece *respondendo comentários* mas não publicando, ela está viva e o problema é de coleta ou de calendário.

**Redes ausentes do painel.** Se a marca tem público jovem e não há TikTok conectado, diga isso. O painel só enxerga o que foi configurado, e o relatório herda essa cegueira sem avisar ninguém.

**Período de comparação.** Toda análise precisa de dois períodos: o pedido e o imediatamente anterior de mesma duração. Não pergunte se o usuário quer comparação — ela é obrigatória. Número isolado não diz nada.

---

## 2 — Coleta

Receitas exatas de consulta em `references/coleta.md`. O essencial:

Por rede, e para os dois períodos, colete publicações (com curtidas, compartilhamentos e comentários por post), comentários recebidos, comentários publicados pelas próprias páginas, base de seguidores por página, e série diária de comentários.

Colete rede por rede. Uma consulta que mistura Instagram e Facebook devolve um agregado que você não vai conseguir desmembrar depois, e desmembrar é o ponto inteiro deste trabalho.

---

## 3 — Regras de medição

Detalhamento e armadilhas em `references/medicao.md`. As cinco que não se negociam:

**Comparação é sempre dentro da mesma rede.** Instagram não se compara com Facebook. As bases de seguidores significam coisas diferentes — uma página de Facebook com 4 milhões de seguidores acumulou isso em quinze anos, e boa parte está morta. Cruzar redes transforma diferença estrutural de plataforma em falso achado sobre a marca. Cada rede se compara com ela mesma no período anterior, e cada página com ela mesma.

**Comentário da marca não é comentário do público.** As páginas respondem os próprios posts, e isso pode ser um quarto de todo o volume coletado. Pior: essas respostas costumam ser classificadas como positivas e distorcem o sentimento. Meça os comentários da marca separadamente e subtraia. O número que vai para o relatório é o líquido.

**Facebook precisa excluir dark posts.** Dark post é criativo de mídia, não publicação orgânica. Incluí-los infla a contagem de publicações em três vezes e derruba qualquer média por post.

**Comentário recebido no período ≠ comentário nos posts do período.** A consulta de comentários filtra pela data do comentário, não da publicação. Gente comentando hoje em post de três meses atrás entra na conta. Isso é legítimo — mas se você somar os contadores de comentário dos posts do período e comparar com o total de comentários, os números não vão bater, e a explicação é essa.

**Sentimento automático é frágil onde o público é irônico.** Em categorias como automotivo, o registro dominante costuma ser elogio envenenado — "parabéns às chinesas que fizeram vocês acordarem". O classificador divide esses casos aleatoriamente entre positivo e negativo. Use a quebra de sentimento para orientar amostragem, não como conclusão, e diga isso quando reportar.

---

## 4 — Leitura qualitativa

Método completo em `references/leitura-qualitativa.md`.

O princípio que evita o erro mais comum: **existe amostra de exploração e existe amostra de estimativa, e elas não são a mesma coisa.**

Amostra de exploração serve para descobrir *quais* categorias existem nos comentários. Pode ser enviesada de propósito — sobreamostrar negativo é ótimo para mapear a variedade da crítica. Amostra de estimativa serve para dizer *que tamanho* cada categoria tem, e exige alocação proporcional e cobertura de todo o período.

Ler blocos contíguos de comentários e derivar percentual deles é o erro clássico. Se a leitura foi exploratória, entregue as categorias e não entregue percentual.

Deixe as categorias emergirem do texto. A taxonomia configurada no painel — quando existe — é organizada por assunto, e por construção não enxerga registro retórico, comportamento de canal ou composição da audiência. Justamente as coisas que a leitura direta encontra.

---

## 5 — Entrega

Formatos e regras de tom em `references/entregaveis.md`.

**Todo entregável abre com o veredito por rede: o período foi melhor ou pior que o anterior.** É a primeira pergunta de quem abre o material e a única que precisa ser respondida de relance. Veredito misto é resposta legítima — melhorou em resposta do público e piorou em cadência de publicação é informação, não indefinição. O que não se aceita é o leitor ter que montar o placar sozinho a partir de uma tabela.

Dois entregáveis possíveis, e eles têm públicos opostos:

**Documento técnico** — para quem vai operar. Numere os achados para permitir referência. Carrega ressalva, divergência de dado e pendência de verificação — **agrupadas no fim, nunca disputando espaço com o achado.**

**One-pager executivo** — para quem vai decidir. Use a skill `one-page-report` para a construção. Aqui o filtro é severo: método vai para nota de rodapé, achado que não muda decisão fica de fora, e nada de resquício da conversa de análise.

As quatro regras de tom que mais falham na primeira tentativa:

- **A manchete é uma afirmação, não três rótulos.** "Semana de lançamento. / Instagram × 15. / Facebook −98%." são três placares soltos. "O maior dia da semana / não foi no Festival. / Foi no lançamento." é um achado atravessando as três linhas.
- **Número sem agente é dado, não insight.** "O Instagram multiplicou as interações por 15" não serve sozinho. O que causou? Qual post, qual produto, qual data, qual pessoa. Sempre nomeie.
- **Não descreva a metodologia no corpo.** "Cada rede comparada com a sua própria semana anterior" é contrato de trabalho, não resultado. A régua continua valendo sem ser anunciada — quem lê uma variação ao lado do nome da rede entende sozinho.
- **Ressalva não vira seção.** Campo do painel com bug, proxy declarado, amostra que explora mas não estima — tudo isso é nota, não capítulo. Se uma limitação ganhou título próprio, caixa destacada ou parágrafo de abertura, ela tomou o lugar de um achado. O teste: o entregável precisa ser legível inteiro por quem pular todas as ressalvas.

---

## Postura

**Queda inexplicada é hipótese, não conclusão.** Se uma rede despenca sem causa aparente, falha de coleta permanece viva como explicação até alguém verificar na plataforma nativa. Reporte o número, ofereça a causa mais provável, e mantenha o callout prescritivo ("reequilibre o mix", "verifique antes de decidir") em vez de conclusivo ("o canal morreu"). O custo de afirmar errado num material executivo é muito maior que o de deixar uma pergunta em aberto.

**Divergência entre dois campos do painel é achado para quem opera, não manchete.** Quando dois caminhos deveriam dar o mesmo número e não dão, reporte os dois, mostre a diferença e ofereça a hipótese — no bloco de pendências, no fim. Não escolha silenciosamente o que for mais conveniente, e não abra o documento com isso.

**Separe o que você mediu do que você estimou.** Contagem de leitura é aproximada e precisa ser rotulada como tal. Se der para substituir uma estimativa por medição censitária, substitua.

**Não confunda soma com pico.** "Os três dias de evento somados não alcançaram o dia do lançamento" é uma frase fácil de escrever e frequentemente falsa. Se o ponto é que nenhum dia isolado superou o pico, escreva exatamente isso.
