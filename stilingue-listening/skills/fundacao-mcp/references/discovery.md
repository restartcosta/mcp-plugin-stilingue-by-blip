# Discovery

Procedimento para transformar pedido vago em consulta bem formada, no menor número de turnos possível.

**Uma consulta está bem formada quando tem:** objeto (marca, produto, tema, concorrente), recorte temporal, fonte (Radar ou painel) e um critério de sucesso — o que a resposta precisa permitir decidir. Faltando qualquer um dos quatro, ou se define por inferência, ou se pergunta. Nessa ordem.

---

## Passo 0 — Responder direto é o resultado mais comum

Consulta pontual e específica é o uso dominante de uma interface conversacional. Pergunta de volta é atrito, e atrito na consulta rápida faz a ferramenta perder para a interface que o usuário já tinha.

**Responda sem qualificar quando:**

- Os quatro elementos estão presentes, explícita ou obviamente
- O usuário usa vocabulário preciso — nome de grupo, tema, métrica
- Há urgência declarada ou implícita
- Rodar a consulta custa menos que perguntar (exploração barata: rode e mostre)

**Qualifique quando:**

- O pedido admite várias respostas certas e incompatíveis entre si
- A resposta vai virar entregável para terceiros
- O objeto ou o recorte estão ausentes e não são inferíveis
- A pergunta formulada não é a pergunta real — há decisão por trás que ela não alcança

**Teto:** duas perguntas, três em caso excepcional. Passou disso, rode uma consulta e pergunte sobre o resultado. Dado na mesa fecha lacuna mais rápido que interrogatório.

---

## Passo 1 — Ler o painel antes de perguntar

Perguntar algo que estava disponível gasta o crédito que seria melhor usado na pergunta que importa. O quanto o painel responde depende de quão detalhada é a configuração dele: quando os grupos e temas têm nomes descritivos e escopo claro, a inferência funciona bem. Quando não dá para inferir com segurança, pergunte em vez de assumir — e, se fizer sentido, sinalize que ajustar a estrutura tornaria consultas futuras mais diretas.

Antes de qualquer pergunta, `setup` responde:

| Lacuna | Onde está |
| --- | --- |
| Quais marcas e produtos existem | Grupos configurados |
| Quais concorrentes estão mapeados | Grupos de concorrência |
| Quais canais são cobertos | Canais configurados |
| Como o cliente organiza o assunto | Árvore de temas e tags |
| O que é tratado como tema sensível | Temas de crise, quando existem |
| Se a operação é listening, atendimento ou ambos | Presença de configuração de SAC |
| Se há operação multimarca | Prefixos na taxonomia |
| Terminologia própria do cliente | Nomes de grupos, temas e tags |

**Use a terminologia que encontrar.** Se o painel chama um grupo de "Universo Categoria", use esse nome, não "mar aberto".

**Pergunte o que precisa ser entregue, não por que a configuração está daquele jeito.** Painéis evoluem ao longo de anos e passam por várias mãos; a intenção original de uma escolha nem sempre está disponível para quem opera hoje, e reconstruí-la raramente é necessário para responder à pergunta em mãos.

---

## Passo 2 — Pedir o entregável, não o objetivo

Quando o pedido é amplo e a entrega vai para terceiros, o movimento de maior retorno é pedir o artefato — **quando ele existe**. Peça o relatório que a pessoa já produz, ou o modelo do que precisa produzir, mesmo com dados fictícios. Se não houver artefato nenhum, use as perguntas fechadas do passo seguinte.

Recebido o artefato:

1. Liste as métricas e recortes que aparecem nele
2. Mapeie cada um a um caminho na ferramenta
3. **Diga quais não têm caminho, e por quê** — limitação de API, de configuração ou de módulo não contratado
4. Confirme a lista antes de executar

O passo 3 é o que gera mais valor e o mais fácil de omitir. Mapeamento que só confirma o possível vale menos que um que nomeia o impossível — e ainda melhor se, junto do impossível, apontar a alternativa: outra fonte de dado, outro caminho na plataforma, outro recorte que responde a mesma pergunta.

Isso resolve de uma vez audiência, formato, periodicidade, métricas e profundidade — e traz o vocabulário real do usuário em vez do vocabulário da ferramenta.

---

## Passo 3 — Perguntar: fechado, nunca aberto

Pergunta aberta devolve silêncio ou generalidade. A dificuldade dominante do usuário não é falta de vontade de responder, é não saber o que a ferramenta pode fazer. **Ofereça opções** — elas respondem e ensinam ao mesmo tempo.

Pergunte só a lacuna que sobrou dos passos 1 e 2, e só se ela mudar o resultado.

| Lacuna | Só pergunte se | Formulação |
| --- | --- | --- |
| Objetivo | O pedido admite respostas incompatíveis | Ofereça, por exemplo: saúde e reputação da marca · insights da concorrência · inteligência de produto · insights para conteúdo · monitoramento de tendências · mapeamento de influenciadores · avaliação de campanha · cobertura de evento · análise sazonal · atendimento e SAC · desempenho de canal proprietário |
| Recorte temporal | Não há período e o default enganaria | Ofereça duas ou três janelas plausíveis, não pergunta aberta |
| Fonte | O usuário tem painel e a pergunta caberia nos dois | "Do seu painel ou do Radar (busca pública)?" — explicando a diferença em uma linha. Se o usuário tiver mais de um painel na mesma conta, confirme qual antes de rodar a consulta |
| Objeto | Há ambiguidade real entre grupos existentes | Liste os grupos candidatos que encontrou |
| Unidade | A métrica pedida existe em mais de uma unidade | "Conversas ou interações?" — nunca assuma |
| Audiência da entrega | Vai virar material para terceiros | "Isso é para você trabalhar em cima ou para apresentar fechado?" |
| Efeito pretendido | O pedido implica alterar configuração | "Aplicar daqui pra frente ou reclassificar o histórico?" |

**Formule por necessidade de negócio, nunca por funcionalidade.** "Comparar com concorrentes" é opção; "usar a Matriz Comparativa" não é.

**Quando a entrega for de alto risco** — sustenta decisão relevante, vai para nível de direção —, três perguntas adicionais valem o turno: quem decide com isso · que decisão depende disso · o que, se aparecesse no dado, mudaria a conclusão.

**Antes de propor qualquer alteração de configuração**, pergunte quem mais usa o painel. Painel compartilhado entre marketing e atendimento é comum, e alteração que serve a um quebra a operação diária do outro.

---

## Passo 4 — Rotear

Com a consulta formada, identifique o tipo de demanda. A tabela mapeia como o usuário fala para o que precisa ser feito.

| Como chega | Tipo |
| --- | --- |
| "Como foi a recepção da campanha / do lançamento?" | Receptividade e reação de público |
| "Como estão nossos resultados de atendimento nas redes?" | Desempenho de canal e SAC |
| "O que o concorrente está fazendo?" | Concorrência e share of voice |
| "Preciso acompanhar um tema sensível" | Risco e antecipação de crise |
| "Acho que esse público se comporta de tal jeito" | Hipótese sobre público |
| "Vamos preparar a campanha da data X" | Preparação sazonal com base histórica |
| "Vi isso em outra fonte, queria entender melhor" | Investigação de achado externo |
| "Quem são os influenciadores desse assunto?" | Mapeamento de influência |

**Faça a decomposição em voz alta.** Mostrar como o pedido virou consulta ensina o usuário a formular melhor na próxima — e permite que ele corrija o rumo antes de a análise rodar.

---

## Calibragem da resposta

Poucas regras, todas invertendo um instinto padrão.

**Menos fluência técnica pede mais explicitação de limite, não menos.** Usuário menos técnico tende a confiar mais no resultado e a presumir que houve validação que não houve. Simplificar a ressalva junto com a linguagem produz confiança indevida. Simplifique o vocabulário; mantenha o limite explícito.

**Ao perceber que o usuário está aprendendo a plataforma junto com a consulta, explique o caminho na resposta** — o que você fez, em que tela isso aparece, como refazer. A pessoa consegue reproduzir sozinha e a próxima consulta vem melhor formulada.

**Fluência de plataforma e maturidade analítica são independentes.** Há repertório metodológico alto sem familiaridade com a ferramenta, e o inverso. Calibre os dois separadamente.

**Se a entrega vai para terceiros**, separe o que o usuário quer do que a audiência dele precisa. Material para reempacotar e conclusão fechada são saídas diferentes.

---

## Escopo: o que o listening não responde sozinho

Recusar é resposta fraca e quase sempre falsa. **A maioria das perguntas é respondida parcialmente.**

**Nomeie qual parte o listening cobre, qual não cobre, e de qual fonte a parte faltante viria** — mídia e performance, web analytics, buscadores, pesquisa tradicional, CRM, atendimento fora das redes, vendas. Ninguém opera com fonte única; resposta que não reconhece as fronteiras adjacentes soa incompleta.

**E aponte de volta os caminhos em que o listening pode contribuir.** Mesmo em pergunta cuja resposta principal vem de outra fonte, listening costuma agregar contexto — percepção pública sobre a métrica que a outra fonte mediu, reação a lançamento, comparação com concorrente, leitura qualitativa do público que a métrica quantitativa alcançou.

**Concorrência é escopo legítimo, não exceção.** Análise de categoria, comparação com concorrentes, mapeamento de influenciadores de nicho, leitura de comportamento de público, movimentos culturais — todos são objetos válidos, e a lista não é fechada. A análise inferencial a partir de mar aberto é método corrente e é o que o mercado usa quando a coleta direta não está disponível; não é substituto de segunda categoria. A fronteira operacional é de painel: uma consulta MCP acessa um painel por vez, e não se cruzam dados de painéis de clientes distintos. *(Questão aberta a confirmar com Restart: painéis do mesmo cliente na mesma conta — é possível cruzar dados entre eles em uma mesma consulta?)*

---

## Armadilhas

**Perguntar o que o painel já respondeu.**

**Pedir justificativa da configuração existente.** Ele provavelmente não a construiu.

**Confundir pedido de dado com pedido de conclusão.** "Me dá o volume do mês" às vezes é isso, às vezes é "piorou?". Quando a diferença importar, pergunte; quando não, entregue os dois.

**Tratar urgência como falta de clareza.** Pressa não é vagueza.

**Deixar o discovery virar o produto.** Se a qualificação está ficando mais longa que a análise, algo saiu do lugar.
