# Boas Práticas Analíticas

Regras de leitura e interpretação de dado de social listening. Enquanto a `matriz-coleta-por-rede.md` responde **o que existe na base**, este arquivo responde **como ler o que veio**.

## A regra que organiza todas as outras

A formulação mais precisa do problema veio de uma cliente: *ela não espera que os números batam entre as fontes — precisa saber por que são diferentes, para poder se justificar internamente.*

Isso reposiciona o que é uma resposta boa. Uma resposta que entrega número sem composição não falha por imprecisão; falha por deixar quem perguntou sem defesa na reunião seguinte. O usuário quase nunca precisa do número exato. Precisa do número com a régua junto.

Daí decorre a regra de ouro deste arquivo:

> **Nenhum número sai sem declarar o que está dentro e o que está fora da contagem.**

Causas conhecidas de divergência entre fontes, na ordem em que compensa checar:

1. Resposta do próprio operador entrando na contagem
2. Filtro divergente entre o que foi exportado e o que está sendo visualizado
3. Finalidade distinta de cada tela — telas contam coisas diferentes porque foram desenhadas para propósitos diferentes
4. Retuíte incluído ou excluído
5. Impulsionamento e dark post misturados ao orgânico
6. Fórmula de engajamento somando pago e orgânico
7. Regra de privacidade aplicada a uma tela e não a outra

**Consequência operacional:** ao devolver qualquer número, nomeie a unidade, o recorte e a fonte. Ao encontrar divergência entre duas consultas próprias, não trate nenhuma como erro da outra — explique a diferença.

---

## Antes de confiar no dado: contaminação e higiene

O painel retorna o que foi configurado para coletar, e essa configuração evolui ao longo do tempo. Antes de tratar volume, queda ou série como fato de mercado, considere estas fontes de ruído.

### Ambiguidade de termo

O nome da marca ou do produto colide com outro sentido de uso corrente e contamina o volume sem que ninguém perceba. Padrões recorrentes: nome que também é personagem de ficção; produto cujo nome coincide com expressão escolar ou gíria regional; termo genérico que coleta evento de outra região do país; homônimo entre idiomas; marca usada como substantivo comum, virando sinônimo da categoria ou do problema que resolve.

**Tratamento, em ordem de preferência:**

1. **Contexto por AND booleano.** Combinar o termo ambíguo com operador `&&` mais palavras que qualificam o uso legítimo (`Ambev && cerveja`, `Apple && iPhone`). Preserva menção legítima e reduz ruído.
2. **Isolar em grupo próprio** para poder tratar separadamente sem contaminar o restante do painel.
3. **Negativação** é último recurso — resolve o ruído, mas corta menção legítima junto.

**Exemplo.** Um monitoramento de festival com aplicativo oficial classificava publicações com "app" e "aplicativo" no tema de tecnologia. Uma ação promocional de "app de pizza" que marcava o evento entrou no mesmo tema. Termo correto, contexto errado — e o recorte de tecnologia deixou de representar o que deveria. Qualificar o termo por contexto resolve casos assim.

**Regra:** diante de volume anômalo com composição temática estranha, levante a hipótese de contaminação **antes** de qualquer leitura de negócio.

### Fala da marca misturada à fala do público

Nuvem de palavras, distribuição por tema e qualquer leitura qualitativa de canal proprietário exigem o filtro de não-proprietários. Sem ele, o vocabulário do operador de SAC — "bom dia", "protocolo", "encaminhei" — se mistura ao do consumidor e domina o insight. Na prática, é a orientação de "ocultar minhas páginas" antes de ler.

Da mesma família: **negativar perfis oficiais e assessoria no eixo de autoria antes de ler ranking de influência**, senão o ranking devolve a própria marca.

### Anti-spam é alavanca de duas mãos

Ligado, higieniza a operação normal. **Desligado, infla volume** em promoção com posts idênticos repetidos. Mas ligado **descarta participação legítima** de concurso cultural, onde as participações são frases idênticas com numeração variável. Não existe configuração correta permanente — existe configuração correta para o período.

### Filtro: desmarcar não é negativar

A distinção não é só de análise de concorrência — vale para qualquer comparação entre grupos:

- **Desmarcar um grupo ou tema no filtro:** ele deixa de ter prioridade, mas as publicações classificadas nele ainda podem retornar, desde que também estejam classificadas em outro grupo ou tema selecionado.
- **Negativar um grupo ou tema:** impede que qualquer publicação classificada nele retorne, mesmo quando essa publicação mencione termos de grupos ou temas selecionados.

Aplicar negativação quando a intenção era só desmarcar produz buracos silenciosos no resultado.

### Higiene de query

- **Operadores booleanos exigem caixa alta** — vale tanto para busca textual do Radar quanto para a busca textual dentro dos painéis. Em minúscula, o operador é tratado como termo literal e a lógica quebra em silêncio, sem mensagem de erro.
- O Radar ignora **acentuação e cedilha** na indexação.
- **Data é o único parâmetro que não persiste em filtro salvo.** Reabrir um filtro sazonal no ano seguinte aplica a query no período vigente e mascara o histórico real.

**Princípio que resume a seção:** menos dado limpo vale mais que muito dado ruim.

---

## Ao ler volume e alcance

**Portais de notícia são produção editorial.** Inflam volume sem representar conversa orgânica. Um pico dominado por portais diz que a imprensa pautou o assunto, não que as pessoas estão falando dele.

**Pico de volume não é fato sobre a marca até prova em contrário.** Antes de atribuir causa interna, verifique se houve evento externo (data comemorativa, notícia do setor, movimento de ator político) e se a variação segue padrão sazonal conhecido. Menção de marca contaminada por evento não relacionado é comum — em períodos eleitorais, por exemplo, é prática consolidada isolar termos políticos em tema próprio para excluí-los das leituras de marca.

**Alcance Potencial é projeção, não alcance medido.** É derivado da contagem de seguidores dos autores que publicaram, com coeficiente aplicado — estima quantas pessoas *poderiam* ter visto, não quantas viram. Nunca leia isoladamente: um único perfil de audiência grande mencionando a marca infla o número global. Apresente sempre junto do volume, e sempre como estimativa. Para a fórmula vigente, consulte a Central de Ajuda.

**A leitura conjunta de volume e alcance é o atalho mais rápido para caracterizar um tema:**

| Combinação | Leitura |
| --- | --- |
| Volume alto + alcance baixo | Muitas pessoas comuns. Comportamento de nicho, dor cotidiana |
| Volume baixo + alcance alto | Poucos perfis grandes falando — o tema está sendo comentado por influenciadores relevantes ou portais, sinal para acionar PR |
| Pico de alcance sem pico de volume | Uma única conta gigante mencionou o assunto |

**Métrica composta lida como simples é erro recorrente.** Engajamento é somatório de comentário, curtida e compartilhamento sobre publicação proprietária — por isso "engajamento recebido = 221" não bate com o número de comentários. Ao devolver métrica composta, nomeie a composição.

**Métricas sociais têm janela de atualização.** Publicações recém-coletadas estão com engajamento subestimado; publicações mais antigas têm os números congelados. Ranking de "mais engajados" em período longo mistura números vivos com números congelados. Para janelas exatas, consulte a Central de Ajuda da Stilingue.

**Métricas de Stories são voláteis** e as APIs restringem consulta retroativa. Precisam ser extraídas com frequência; leitura retroativa é estruturalmente incompleta.

**`hot` é relativo à consulta** e não é comparável entre consultas diferentes.

**Volume desproporcional vindo de um único usuário em mar aberto merece verificação** — pode ser bot, mas também pode ser perfil legítimo com engajamento atípico (concurso, ativismo pontual, campanha viral com participação repetida). Em atendimento, comportamento normal: um usuário costuma gerar múltiplas conversas.

---

## Ao ler sentimento

**Ironia e sarcasmo são o limite conhecido da classificação automática em português.** Nenhum sistema de processamento de linguagem natural resolve bem esse caso — a inversão de sentido depende de contexto que não está no texto. Em recortes onde ironia é frequente (pautas polarizadas, humor, memes), verifique amostra antes de reportar percentual de sentimento, e considere calibrar a classificação com Biblioteca de Termos ou revisão manual.

**Percentual em volume baixo ou pauta polarizada pede verificação amostral.** Sentimento sobre 40 menções não é estatística, é leitura de 40 textos — e vale mais lê-los.

**Índice de Sentimento sem volume não significa nada.**

**Sentimento pode ser circular.** Duas mecânicas distintas, com consequências opostas:

- **Regra de Automação é mão de ferro.** "Chocolate = positivo" força positivo em "detestei o chocolate".
- **Biblioteca de Termos é peso.** A IA continua lendo o resto da frase.

Se o sentimento de um recorte foi fixado por automação, o percentual é a **paráfrase da regra**, não medição. Antes de interpretar sentimento, é legítimo perguntar se há automação atuando sobre aquele recorte.

**Alteração de régua produz série incomparável ao longo do tempo** — trechos classificados por réguas diferentes. Sempre que a régua de sentimento muda (peso alterado, automação criada ou desativada), sugerir ao usuário que registre a data da mudança no relatório para preservar a leitura futura da série.

**O TikTok não tem análise de sentimento por IA.**

### Sentimento em nível de conversa (atendimento)

Assunto específico do Smart Care. No Smart Care, a plataforma agrupa interações do mesmo usuário em uma conversa. O sentimento da conversa não é primitivo — é reconstruído a partir das interações que a compõem, e o método muda o número. Preservar o sentimento da primeira interação dá resultado diferente de preservar o da última. A operação normalmente quer o da última (o desfecho), mas ambos são leituras válidas. Ao reportar sentimento de atendimento, declare qual interação está sendo considerada.

---

## Ao comparar

**Comparar Radar com número de outra ferramenta é inválido.** Bases diferentes, contratos de API diferentes, regras de retuíte diferentes. A diferença entre ferramentas pode ser de ordem de grandeza, não de margem de erro.

**Share of Voice exige estrutura de coleta simétrica.** É comum que o grupo da marca própria tenha mais descritores e mais variações que os grupos de concorrentes — afinal, ninguém conhece as variações do concorrente tão bem quanto as próprias. Quando isso acontece, o SOV superestima a marca própria. Antes de ler SOV, compare a amplitude dos grupos; se houver assimetria, equilibrar os descritores é o ajuste que torna a comparação válida.

**Comparar engajamento entre marcas de tamanhos diferentes exige normalização por base de fãs.** Volume absoluto favorece quem tem audiência maior. A escolha do método de normalização — taxa por mil fãs, engajamento médio por post, engajamento como fração do alcance — é decisão de análise, não regra fixa. Declare o método usado.

**Dark post de concorrente não existe em API pública.** A volumetria de publicações do rival está estruturalmente subcontada em qualquer benchmark, e isso precisa ser declarado na metodologia — não omitido.

**Ao rodar análise de mar aberto para a própria marca**, verifique se dark posts próprios estão entrando no filtro por regra da plataforma. Se estiverem, isole-os ou desconsidere-os do recorte — a análise deve refletir conversa do público, não conteúdo pago da própria marca aparecendo na base.

**Comparação temporal exige régua estável.** Se o setup, o peso de sentimento ou a taxonomia mudaram no meio da série, a comparação atravessa réguas diferentes. Declare quando isso for o caso.

**A pergunta é temporal e proporcional, não só volumétrica.** Vale para qualquer análise: mais importante que "quantas menções" costuma ser "está subindo ou descendo, desde quando, e que fração do volume total representa". Volume absoluto sem denominador é o número que mais assusta e menos informa.

---

## Ao ler dado de atendimento

**Conversa não é interação.** Smartcare conta conversa, agrupando mensagens do mesmo usuário no mesmo intervalo. O Mural conta cada interação. A Visão Geral conta interação porque foi desenhada para listening. **A mesma consulta de atendimento pode devolver números muito diferentes dependendo do que está sendo contado** — divergência de ordem de grandeza entre um relatório e outro do mesmo painel costuma ser diferença de unidade, não erro. **Nunca devolva contagem sem nomear a unidade.**

**Dado de atendimento é fotografia do momento.** Conversa fechada pode ser reaberta, então a mesma consulta ao mesmo período devolve número diferente em dias diferentes. **Carimbe quando foi consultado** — e nunca trate divergência entre duas consultas próprias como erro de uma delas.

### Status e SLA

Uma mesma conversa passa por vários status ao longo de sua vida — pode ter uma conversa, vinte interações e vinte e cinco mudanças de status. Somar volume por status sem considerar isso produz dupla contagem. Mudança de status em massa altera métricas de atendimento retroativamente.

**Os cinco status principais:** Pendente, Aberto, Ignorado, Em espera, Respondido, Fechado. As regras de contabilização de SLA seguem uma lógica não óbvia — só algumas transições contam para o SLA, e a mesma transição pode contar ou não dependendo do estado anterior. Alguns pontos que atrapalham a leitura de relatório:

- **Transições a partir de Respondido, Fechado ou Em espera não contabilizam SLA.** O cronômetro só corre em transições que partem de Pendente ou Aberto.
- **O status Ignorado não contabiliza SLA enquanto está ativo.** Mas se Ignorado voltar para Aberto, o tempo que a conversa passou em Ignorado é retroativamente incluído no cálculo posterior.
- **Nova interação em conversa Ignorada reinicia o ciclo.** A conversa volta para Pendente e o SLA passa a ser contado a partir da última interação, como se fosse uma conversa nova.

Para o comportamento exato de cada transição, consultar o artigo do Help Center [Mudança de status - STILINGUE Smart care](https://help.blip.ai/hc/pt-br/articles/19448479715351).

### Fechamento automático

Depois que o analista responde e a conversa entra no status Respondido, se o cliente do outro lado não volta em um determinado período, a plataforma pode fechar automaticamente a conversa — **quando essa regra está configurada pelo cliente**. Nem todas as operações têm essa configuração ativa; muitas fecham manualmente ou não fecham. Ao ler métrica de fechamento, distinga fechamento por ação do operador de fechamento por inatividade do cliente — o segundo é limpeza de backlog, não resolução ativa.

### Outras leituras de atendimento

**Reabertura de conversa pode ser sinal de fechamento sem resolução — ou não.** No inbox, reabertura pode ser usuário interagindo com story, iniciando outra dúvida, ou voltando com problema diferente. Use como sinal para investigar, não como métrica isolada de qualidade.

**SLA sem calendário customizado é métrica falsa.** Se a operação não configurou o calendário, a plataforma assume escala 24/7 e considera todo esse horário no cálculo do tempo médio de atendimento — o que acumula atraso fictício para times que trabalham em horário comercial. Configurar o calendário é pré-requisito para leitura correta de SLA.

**Filas são filtro passivo; roteamento é distribuição ativa.** São mecanismos diferentes e produzem métricas diferentes.

**Viés de canal proprietário.** Comentário em canal próprio carrega naturalmente mais dúvida e reclamação operacional. Detração alta na própria página é o papel do canal, não sinal de crise.

**A plataforma não é instrumento de medição de produtividade individual.** Doutrina explícita e repetida, com fundamento legal — não preferência. Não usar como folha de ponto; não contabilizar horas trabalhadas; o sistema não fornece histórico de entrada e saída de operador. O que existe é métrica de ação por transição de status. Recusar esse uso é comportamento correto, não excesso de zelo.

---

## Alterações de configuração que mudam o dado

Não é escopo deste arquivo orientar configuração, mas quatro mecânicas afetam diretamente a leitura.

**Retroatividade é a exceção, não a regra.** Biblioteca de Termos não é retroativa. Automação vale para o futuro e alcança o passado só via reprocessamento. Benchmarks coleta a partir do cadastro. Hashtag não tem retroatividade. Perfil recupera 30 dias e 100 posts.

**Consequência de leitura:** um recorte histórico pode estar classificado por uma regra que não existia naquele momento — ou não estar classificado por uma regra que existe hoje. Antes de comparar períodos, considere quando a regra entrou.

**Salvar e reprocessar são coisas diferentes**, e é o ponto de confusão mais recorrente do produto. Salvar aplica ao futuro; reprocessar reescreve o passado, limitado às **100 mil publicações mais recentes**. As duas escolhas são legítimas e servem a objetivos opostos — alcançar o passado ou preservar o histórico. **Nunca proponha uma alteração de regra sem dizer qual dos dois efeitos está propondo — e antes de propor reprocessar, avise que os volumes históricos podem mudar**, porque o reprocessamento aplica a configuração atual sobre a base histórica.

**Tema e tag têm comportamentos diferentes ao ser excluídos.**

- **Excluir tema** remove a classificação e o painel reprocessa seguindo as novas regras (dentro do limite de 100 mil publicações). As publicações permanecem, sem a classificação.
- **Excluir tag** remove a tag da edição de pesquisa e dos filtros — o usuário deixa de conseguir filtrar por ela. Mas as publicações que já foram taggeadas mantêm o registro dessa tag: só ficam sem forma de serem filtradas por ela.
- Tags **não são aplicadas automaticamente a partir de descritores** — isso é comportamento de tema. Tags podem ser aplicadas automaticamente via **Automações**, que podem usar variável textual (query booleana) ou outros critérios (usuário, canal). Ao propor mudança em tag, verifique se ela está sendo aplicada por Automação — a alteração afeta o comportamento futuro da Automação, não o histórico.

**Publicação pode pertencer a múltiplos grupos simultaneamente.** Excluir publicações usando filtro por um grupo específico apaga também as publicações que estavam classificadas em outros grupos ao mesmo tempo — inclusive as que você queria manter. **Boa prática:** ao querer excluir publicações exclusivamente de um grupo, negative todos os demais grupos no filtro, para garantir que só as classificações únicas naquele grupo sejam alcançadas. Removidos são recuperáveis por 7 dias.

**Deletar grupo destrói o histórico associado — em qualquer análise que use aquele grupo.** Ao decidir parar de monitorar um assunto que você quer preservar no painel (uma campanha encerrada, um tema que virou histórico), o caminho é **retirar os descritores do grupo, não deletá-lo**. Deleção é para quando o histórico não tem futuro analítico.

---

## Por tipo de relatório

### Crise

**Setup de crise é feito em tempo real.** Nos primeiros dias, ajustes são frequentes — descritores novos, negativações que aparecem, temas criados sob pressão. Cabe ao analista entender o impacto desses ajustes e sinalizar no relatório que o volume histórico pode ser alterado ao longo da cobertura.

**A pergunta da crise é temporal e proporcional — não só volumétrica.** Já dito acima: "está subindo ou descendo, desde quando, e que fração do volume total representa". Volume absoluto é o número que mais assusta e menos informa em crise.

**Decida e declare o tratamento de retuíte.** Incluir RT mostra amplificação e viralização (importante em crise). Excluir RT mostra conversa original. Ambos são leituras válidas — o que não pode é misturar sem declarar. Em crise, a decisão precisa ser deliberada, não default.

**Alerta por oscilação fora do padrão é solução de médio prazo** — detecta anomalia por tema, mas não resolve crise em curso.

### Saúde de marca

Estrutura de referência: comparação espelhando o período fechado anterior; investigação de pico com aprofundamento nas publicações da data; ocultação de perfis proprietários; termos e hashtags segmentados por canal; sentimento filtrável por rede; recomendação organizada em **parar, começar e continuar**.

*Nota de escopo:* saúde de marca é módulo contratado à parte, com cálculo pronto. Painéis sem o módulo podem construir a leitura por caminhos alternativos — composição de sentimento agregada por período, evolução de volume por tema sensível, série de share of voice ajustada, comparação temporal de temas positivos e negativos. Mais trabalho, mesma leitura.

### Evento ao vivo

Tipo de relatório distinto dos demais, com características próprias:

- **Escala que quebra a interface.** Painel de evento grande passa da casa dos milhões de publicações na timeline, e filtro mal aplicado trava o carregamento. **A operação de consulta pontual** — pergunta direta, resposta agregada, sem clicar em filtro — **é exatamente onde o MCP substitui a navegação por interface**. Peça a resposta que você quer; a agregação acontece antes do resultado chegar.
- **A ferramenta usada durante o evento não é a de relatório.** Durante a operação a demanda é consulta pontual, curta, em tempo real — frequentemente com a pessoa longe da mesa.
- **Metodologia de ranking própria.** Rankings publicados em evento frequentemente usam metodologia específica — recortes de grupo, temas customizados, negativações que refletem regra editorial do ranking, e não do painel. **O número publicado não é o número que o painel devolve em consulta genérica.** Antes de comparar um dado consultado no MCP com um ranking publicado, verifique com quem produziu o ranking qual foi a metodologia.

### Canais proprietários

**Métricas de canais proprietários (curtidas, comentários, compartilhamentos, alcance) têm janela de atualização.** Consulte a Central de Ajuda para prazos por rede. Relatório com publicações antigas mistura números vivos e congelados — declare o recorte.

**Menções sem arroba nem sempre geram comentário coletável** — depende da rede e do formato. Ao rodar análise de campanha com influenciador, verifique com o setup se as menções sem arroba estão sendo capturadas ou se há lacuna a ser complementada por outra fonte (dados do próprio parceiro, canal proprietário do influenciador). Combine com o que estiver disponível em vez de tratar o relatório de campanha como visão total.

---

## Ferramentas didáticas

Explicações prontas e testadas em campo, para quando o usuário precisar entender uma limitação em vez de só recebê-la.

**A analogia do restaurante** — para explicar limitação de API. A rede social é a cozinha, que tem tudo guardado; a API é o garçom; a documentação da API é o cardápio. A ferramenta pede o que está no cardápio e recebe exatamente isso. Não existe entrar na cozinha — nem para a Stilingue, nem para nenhuma ferramenta do mercado.

**O caso do termo genérico** — para explicar ambiguidade. Um monitoramento de festival que classificava "app" e "aplicativo" no tema de tecnologia capturou uma ação promocional de "app de pizza" que marcava o evento. Termo correto, contexto errado, relatório inteiro afetado. Mostra por que qualificar termo por contexto vale mais que ampliar cobertura.

**Camadas de configuração sobrepostas** — quando um painel acumula ajustes de épocas diferentes, feitos para objetivos que já mudaram. Não é sinal de descuido: é o que acontece naturalmente com qualquer estrutura viva ao longo de anos. Revisão periódica de setup existe para isso.

**Série com réguas diferentes** — quando a classificação mudou no meio do histórico (peso de sentimento alterado, automação criada, taxonomia reorganizada) e a comparação temporal atravessa critérios distintos. Datar as mudanças resolve.

---

## Antes de entregar: checklist

1. **A unidade está nomeada?** Conversa, interação, publicação — não são a mesma coisa.
2. **A composição está explícita?** Se a métrica é composta, o que entra nela.
3. **O recorte está declarado?** Fonte, período, filtros, canais cobertos.
4. **O número tem referencial?** Comparação histórica e variação temporal. Número sozinho não sustenta decisão.
5. **A conclusão tem implicação?** Métrica sem consequência é ruído com formatação.
6. **As limitações relevantes foram ditas?** Explicitar limite **aumenta** confiança em vez de reduzi-la — mas limitação sem caminho é desincentivo. Sempre que possível, junto com a limitação apresente a alternativa: a fonte que cobre a parte que falta, o caminho na plataforma que resolve o pedido de outra forma, ou o próximo passo prático.
7. **Se algo não pode ser respondido com listening**, qual parte é essa e de qual fonte ela viria? Nomear a lacuna vale mais que recusar — a média de quem produz análise usa cinco fontes por relatório, e ninguém opera com fonte única.

---

## Nota sobre auditabilidade

Uma minoria do mercado confia plenamente em resultado gerado por IA; a maior parte trata como ponto de partida a ser verificado. Isso não é obstáculo a contornar, é o comportamento correto do usuário — e o desenho da resposta deve facilitá-lo. Toda resposta com número precisa do rastro que permite reprodução na plataforma: fonte, período, filtros.

Isso vale também para síntese produzida por IA da própria plataforma, que é gerada sobre **a amostra selecionada pelos filtros ativos**, não sobre o universo. Filtro declarado junto com o insight, sempre.
