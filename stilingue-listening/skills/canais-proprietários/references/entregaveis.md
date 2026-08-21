# Entregáveis

Índice:
- [Escolher o formato](#escolher-o-formato)
- [O veredito por rede](#o-veredito-por-rede)
- [Documento técnico](#documento-técnico)
- [One-pager executivo](#one-pager-executivo)
- [Onde o método vive](#onde-o-método-vive)
- [Regras de tom](#regras-de-tom)
- [O filtro do executivo](#o-filtro-do-executivo)
- [Replicabilidade](#replicabilidade)

---

## Escolher o formato

**Documento técnico** vai para quem opera — analista, social media, CSM. Carrega ressalva, divergência, pendência e nota de método.

**One-pager executivo** vai para quem decide. Uma página, achados que mudam decisão, método em rodapé.

**Relatório recorrente** — mensal ou quinzenal, sempre o mesmo cliente — é um terceiro formato, não uma versão longa do técnico. Estrutura completa em `estrutura-mensal.md`. A diferença que importa: nele a ordem das seções é contrato, o leitor aprende onde as coisas ficam, e mudar o layout a cada ciclo destrói a leitura rápida que justifica o formato.

Não são versões do mesmo texto com tamanhos diferentes. São públicos com necessidades opostas, e o erro clássico é encolher o técnico e chamar de executivo — o que produz um documento cheio de resquício de análise que ninguém precisa ler.

Se o usuário não disser, entregue o técnico primeiro. O one-pager se constrói melhor depois que os achados estão estabilizados.

Os dois formatos abrem igual: com o veredito por rede.

---

## O veredito por rede

A primeira pergunta de quem abre o material é sempre a mesma: **melhorou ou piorou?** Ela precisa ser respondida de relance, rede por rede, antes de qualquer tabela, gráfico ou ressalva.

Um bloco no topo, uma linha por rede. Em cada linha: o nome da rede, o veredito, e as duas ou três métricas que o sustentam com a variação ao lado.

Quatro decisões fazem esse bloco funcionar:

**Escolha as métricas que carregam a resposta, não todas.** O conjunto mínimo de `medicao.md` tem cinco métricas por rede — aquilo é o que se mede, não o que se mostra no topo. Para o veredito bastam duas ou três, e o par que quase sempre funciona é uma de esforço (publicações) contra uma de resposta (interações, comentários do público ou taxa de engajamento). Publicar menos e engajar mais é uma história; publicar mais e engajar menos é outra; as duas somem se o topo mostrar só volume.

**Veredito misto é resposta, não empate.** "Melhor em resposta do público, pior em cadência" informa mais que uma seta única. Rotule com clareza — melhor, pior, misto — e diga qual métrica decidiu. Ambiguidade só não é permitida quando vem de preguiça de escolher.

**Número com ressalva não sustenta veredito.** Se a métrica mais óbvia está contaminada — campo com bug, base de seguidores indisponível, contagem inflada por Stories ou dark post — não a coloque no topo com asterisco. Escolha outra métrica limpa e mande a explicação para o fim. Asterisco no placar devolve o trabalho de interpretação para o leitor, que é exatamente o que o bloco existe para evitar.

**Rede com volume irrisório também recebe veredito.** Sete publicações e vinte menções no mês não viram "não analisado". Viram "canal sem operação relevante no período" — que é um veredito, e costuma ser o mais acionável da página.

A régua de sempre continua: o veredito de cada rede é contra ela mesma no período anterior. Nenhuma linha do bloco compara uma rede com outra.

---

## Documento técnico

Numere as seções e os achados. Isso permite ao usuário responder "o 3.2 está errado" em vez de descrever o parágrafo.

Estrutura que funciona:

```
1. Veredito por rede — melhor, pior ou misto, com as métricas que decidem
2. Escopo — painel, páginas, o que está silencioso, o que falta no painel
3. Big numbers — tabela por rede, com variação vs período anterior;
   sentimento entra aqui como coluna, não como seção
4. Posts em destaque — melhores e piores, ranqueados dentro de cada rede
5. O que falaram — categorias da leitura direta, com citação real
6. Ações recomendadas, por prioridade
7. Notas e pendências — ressalvas, divergências e o que ficou em aberto
+ Replicabilidade
```

Sentimento perdeu a seção própria de propósito. Ele é uma coluna do placar; a ressalva sobre a confiabilidade do classificador é nota de rodapé da tabela. Seção inteira dedicada a explicar por que o número de sentimento é frágil entrega ao leitor um capítulo sobre o instrumento em vez de um capítulo sobre a marca.

Cite comentário real. Uma frase do público vale mais que três parágrafos descrevendo o padrão — e é o que sobrevive à reunião.

Termine oferecendo dois ou três caminhos de aprofundamento, com uma recomendação de qual priorizar e por quê.

---

## One-pager executivo

Use a skill `one-page-report` para a construção. Ela decide layout, paleta, tipografia e espinha dorsal; este documento decide o que entra.

Mapeamento que costuma funcionar para este tipo de análise:

| Bloco | Conteúdo |
|---|---|
| Cabeçalho | O achado principal + tira de veredito com uma linha por rede: melhor, pior ou misto |
| Seção 1 | Placar por rede — as métricas que sustentam cada veredito, com variação contra o período anterior |
| Seção 2 | Série diária do canal principal, com a linha do período anterior alinhada por dia da semana |
| Seção 3 | Posts em destaque, ranqueados dentro de cada rede |
| Seção 4 | Dois pontos de atenção, prescritivos |
| Recap | Quatro números que contam a história, não os quatro maiores |
| Rodapé | Ação de próximo ciclo em uma frase + notas de método |

Ângulo quase sempre é diagnóstico, o que descarta o bloco de fotos.

**Sobre o gráfico principal:** a comparação entre redes não pode virar gráfico, porque a comparação entre redes não é válida. Série temporal de um canal contra ele mesmo é a escolha segura e costuma carregar um segundo achado — qual dia puxou o volume, e por quê.

---

## Onde o método vive

O documento técnico carrega ressalva, divergência e pendência — isso não mudou. O que muda é posição e peso.

Método é **rodapé, nota curta ao pé da tabela, ou bloco final numerado**. Nunca abertura, nunca seção própria no meio do documento, nunca destaque visual — caixa colorida, borda de alerta, negrito de manchete. Quem pular todas as notas tem que sair com a análise inteira na cabeça.

O teste antes de promover qualquer parágrafo de método: **isso muda o que alguém vai fazer, ou só explica como eu cheguei no número?** Um campo do painel devolvendo variação quebrada não muda a operação do cliente — muda o meu cálculo, e eu já corrigi. Vai para nota, com o identificador de depuração junto, e segue.

Há uma exceção, e é a que costuma ser confundida com o resto: **quando a limitação é o próprio achado.** Página conectada que não publicou, rede ausente do painel, contagem que não bate e impede afirmar volume, base de seguidores que o painel não devolve e derruba a taxa de engajamento. Nada disso é método — é diagnóstico da operação do cliente. Entra em ações recomendadas, escrito como tarefa com responsável e destino ("confirmar no gerenciador nativo quantas publicações de feed saíram"), não como ressalva escrita na voz de quem se protege.

A diferença prática: ressalva descreve o limite do meu trabalho, tarefa descreve o próximo passo do cliente. Se dá para reescrever como tarefa, é porque nunca foi ressalva.

---

## Regras de tom

As quatro que mais falham na primeira tentativa:

**A manchete é uma afirmação atravessando as linhas, não rótulos empilhados.**

- Ruim: *"Semana de lançamento. / Instagram × 15. / Facebook −98%."* — três placares soltos, cada um com ponto final.
- Bom: *"O maior dia da semana / não foi no Festival. / Foi no lançamento."* — um achado, uma frase, três linhas.

**Número sem agente é dado, não insight.** Todo número no corpo vem com o que o causou — post, produto, data ou pessoa.

- Ruim: *"O Instagram multiplicou as interações por 15."*
- Bom: *"Em 13 de agosto a Twister apareceu com suspensão invertida e a Biz virou Kuromi: 929 comentários, o maior dia da semana."*

**Nada de contrato metodológico no corpo.** Régua de comparação, exclusão de marca, recorte de amostra e definição de métrica vivem no rodapé.

- Ruim: *"Cada variação compara a rede com ela mesma. Redes não se comparam entre si."*
- Bom: nada — a tabela mostra a variação ao lado do nome da rede e quem lê entende.

**Ressalva não vira seção.** Se uma limitação ganhou título numerado, caixa destacada ou parágrafo de abertura, ela ocupou o espaço de um achado.

- Ruim: uma seção *"Sentimento — uma ressalva de método"* explicando que o campo de variação do painel está com bug.
- Bom: o número de sentimento corrigido dentro do placar, e uma linha no bloco final: *"variação de sentimento recalculada manualmente; o campo do painel devolve valor inválido — debugging_id registrado."*

---

## O filtro do executivo

Três testes antes de um achado entrar no one-pager:

**Muda uma decisão?** "A rede da marca comenta como se fosse público" é um bom achado técnico e não é decisão de diretoria. Fica no documento técnico.

**É achado de negócio ou de método?** Qualquer frase que só faz sentido para quem acompanhou a análise sai. Coisas do tipo "o empate aparente vinha das respostas da própria página" descrevem a nossa investigação, não a operação do cliente.

**Sobrevive sem contexto?** Quem abrir a página em uma reunião, sem ter conversado com ninguém, entende?

Repetição também é filtro: se o mesmo número aparece no cabeçalho, no placar e no recap, dois deles estão desperdiçando espaço. O recap deve carregar um recorte diferente do placar — o cabeçalho é a exceção, porque o veredito é justamente a leitura do placar e precisa aparecer antes dele.

E um teste final, antes de dar por pronto: **abra o material e leia só o que está acima da primeira dobra. Dá para dizer se o mês foi bom?** Se a resposta exige rolar até uma tabela e comparar colunas, o veredito não está fazendo o trabalho dele.

---

## Replicabilidade

Todo entregável técnico fecha declarando: painel, recorte de datas exato, filtro de páginas, tipo de conteúdo consultado, e o que veio do painel versus o que veio de leitura direta.

A distinção final importa mais do que parece: agregados são reproduzíveis na plataforma, categorias de leitura direta não são. Dizer isso protege quem for reproduzir o trabalho e deixa explícito onde está o valor que a plataforma sozinha não entrega.
