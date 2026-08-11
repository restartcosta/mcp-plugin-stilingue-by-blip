# Qualificação — Modo B

Roteiro por entrada, consultado sob demanda depois que o SKILL.md identifica em qual entrada o usuário chegou.

**Base geral**: `fundacao-mcp/references/discovery.md` cobre regras universais de qualificação — teto de perguntas, entregável em vez de objetivo, pergunta fechada, ler o painel antes, "antes de propor alteração pergunte quem opera". Este arquivo especializa para setup e detalha o comportamento por entrada.

Vale para todas as entradas: **antes de perguntar, ler o que já está disponível**. Se o usuário tem `account_id` na conta e não mencionou que quer criar do zero, rode `stilingue:setup`, use o resultado como base, e pergunte só o que a leitura não revelou. Se veio briefing anexado, leia o briefing antes — mesmo raciocínio.

---

## Entrada 1 — Necessidade formada, painel existente

O usuário chega dizendo o que quer: "quero comparar recall com meu concorrente principal", "quero acompanhar a campanha X", "preciso ver como está sendo recebido o lançamento Y". Já tem vocabulário próprio, sabe nomear o objeto.

Como o painel já existe, a maior parte da qualificação foi respondida pelo `setup` — quais marcas, quais concorrentes, quais canais, quais temas, se há operação multimarca, terminologia própria. Só sobrou: **o painel atual responde essa demanda? Se não, o que falta configurar?**

**Duas perguntas no máximo.** Fechadas com opções quase sempre.

Casos típicos e formulação:

| Se o que falta é | Pergunte |
| --- | --- |
| Confirmar objeto quando há grupos candidatos | "Achei estes grupos que podem servir: X, Y, Z. É algum desses ou é outra coisa?" |
| Recorte temporal ausente | "Que janela? Últimos 7 dias · desde a data X · comparação com período anterior?" |
| Escolher entre painel e Radar | "Do seu painel ou do Radar (base pública)? A diferença está em [linha curta]" |
| Efeito sobre histórico quando envolve alteração | "Aplicar daqui pra frente ou reclassificar o histórico coletado?" |
| Audiência da entrega | "Isso é para você trabalhar em cima ou para apresentar fechado?" |
| Descritores de coisa nova | **Pergunta aberta com chute inicial.** "Chuto que os descritores da campanha são [X, Y, Z] — o trocadilho com [Z] parece natural. Confirma? Tem outras hashtags oficiais, slogan que vai virar refrão, palavra-chave que os influenciadores foram orientados a usar?" O chute vem do que o cliente já disse, pra ele reagir em vez de escrever do zero. |

**Se a entrega vai sustentar decisão de nível alto**, três perguntas adicionais valem o turno: quem decide com isso, que decisão depende disso, o que apareceria no dado que mudaria a conclusão. Cobertura geral em `discovery.md`.

Detecção → passa para C direto.

---

## Entrada 2 — Painel existente, pedido de revisão

O usuário chega dizendo "revisa aí", "aponta o que dá pra melhorar", "meu setup está uma bagunça". O Modo A já rodou, o widget está na tela. O trabalho de B é entender o delta entre o que existe e o que a operação precisa.

Duas perguntas, fechadas com opções.

**Pergunta 1 — sobre a operação atual.** "O que você precisa entregar hoje que esse painel deveria ajudar? Escolha o que mais se aproxima:"

- Acompanhamento de saúde da marca no dia a dia
- Comparação com concorrência (share of voice, presença, sentimento)
- Leitura de recepção de campanha ou lançamento
- Atendimento e SAC — resposta a menções
- Insights para conteúdo e produto — o que o público está falando
- Monitoramento de risco / crise / assunto sensível
- Preparação sazonal ou de evento
- Mapeamento de influenciadores
- Reporte executivo periódico
- Outro — descreve em uma linha

Múltipla escolha. Ninguém opera uma coisa só.

**Pergunta 2 — sobre quem mais mexe.** "Quem mais opera esse painel além de você?"

- Só eu
- Meu time (mesma função)
- Outro time (marketing e atendimento juntos, agência, etc.)
- Não sei ao certo

Essa segunda pergunta é a que trava alteração destrutiva no Modo C. Painel compartilhado entre marketing e atendimento é o caso mais frequente de setup que "não faz sentido" para uma pessoa porque foi montado para outra.

**Depois das duas perguntas**, a skill compara o que o widget mostrou com o que o usuário disse que precisa. O Modo C começa apontando o delta.

---

## Entrada 3 — Sem demanda formada

O usuário chega dizendo "queria dar mais uso à ferramenta", "meu chefe pediu insights daqui", "não sei bem por onde começar", "estou perdido", ou simplesmente com um "oi, sou novo aqui". Não sabe articular objeto de escuta.

**Não perguntar objeto de escuta direto.** "Empresa, pessoa ou assunto?" devolve resposta genérica ("nossa marca") que não constrói nada. Pergunta direta sobre necessidade também: "o que você quer monitorar?" recebe "sei lá, tudo".

**Puxar pela operação.** Três perguntas, mais abertas que o normal — exceção prevista no SKILL.md. Aqui a resposta é o próprio objeto do turno, não está qualificando dado.

**Pergunta 1 — o time e a rotina.**

"Antes de propor caminho, ajuda entender de onde você vem. Em que time você trabalha e como é seu dia a dia com esse painel — o que você faz nele hoje?"

Aceitar resposta em prosa. O que a skill escuta:
- **Time** — marketing, atendimento, inteligência, comunicação, produto, agência externa. Cada um puxa para uma finalidade diferente.
- **Rotina** — se responde em prosa longa, provavelmente é analista/planejamento; se em bullet, mais operacional; se cita relatório específico, tem entrega recorrente formada.
- **Vocabulário** — "reporte", "insight", "sentimento", "ranking" indicam maturidade analítica; "atendimento", "resposta" indicam SAC; "post orgânico", "campanha", "conteúdo" indicam marketing.

**Pergunta 2 — o que reporta para cima.**

"E o que você precisa entregar para outras pessoas a partir disso — para seu chefe, para outros times, para cliente? Pode ser em qualquer formato — reporte, planilha, apresentação, resumo verbal em reunião."

O que a skill escuta:
- **Existência de entregável recorrente** — se sim, o setup já tem propósito, mesmo que não explícito. Pergunte se pode ver um exemplo (mesmo com dado fictício).
- **Ausência de entregável** — se responde "não entrego nada específico, só olho às vezes", o usuário está numa fase mais exploratória. A skill vai propor setup para uma finalidade única, não para reporte estruturado.
- **Frequência** — diário, semanal, mensal. Define se o painel precisa de coleta com granularidade fina ou não.

**Pergunta 3 — só se as duas anteriores não fecharam.**

Se depois das duas primeiras a skill ainda não consegue propor um caminho principal, uma terceira pergunta é permitida, e essa pode ser fechada:

"Do que você me contou, o que te ajudaria mais no curto prazo:"

- Saber o que estão falando da nossa marca / do nosso produto
- Ver como estamos em relação a X (concorrente, categoria, referência)
- Descobrir assuntos que estão pegando no nosso público
- Responder a menções e reclamações
- Preparar uma entrega específica que já pediram — [descrever]
- Outro

**Após as perguntas, a skill sintetiza o que ouviu e propõe um caminho principal + alternativa curta.** Não menu.

Modelo de fechamento:

> "Pelo que você descreveu — [síntese em uma linha] —, o caminho que faz mais sentido é [proposta principal em uma linha]. Uma alternativa mais leve seria [alternativa em uma linha]. Vamos pelo primeiro?"

O usuário responde e a skill entra em C.

---

## Quando há briefing anexado

Briefing de venda, brief de projeto, PRD, escopo de estudo. Tratamento comum às três entradas, mas com peso especial na entrada 3 e no setup inicial.

**Ler o briefing antes de perguntar.** Ele carrega vocabulário do cliente, priorização implícita, restrições operacionais, entregáveis esperados. Perguntar o que já está no briefing sinaliza que a skill não leu — perde crédito.

**Briefing lista tudo como prioridade.** Padrão universal: brief lista todas as frentes possíveis como se fossem prioritárias em pé de igualdade. Sete objetivos, seis focos, cinco entregáveis. Nenhuma operação começa rodando cinco frentes ao mesmo tempo. A skill lê, identifica a coluna vertebral (o que gera valor mais rápido, o que é regulatório, o que é dependência de outras frentes) e traz priorização como parte da qualificação, não como pergunta neutra.

**Duas coisas úteis a puxar do briefing sem perguntar:**

- **Bifurcação estudo pontual vs operação continuada.** Briefing que fala em "análise", "relatório", "período de X meses", "entregáveis esperados" → estudo pontual. Briefing que fala em "SAC", "resposta", "fluxo", "roteamento", "tempo de resposta" → operação continuada. Muda o setup por inteiro (ver `recomendacao.md`).
- **Sinais de setor sensível.** Farma, jurídico, seguros, público, saúde — vocabulário próprio, restrições regulatórias, tempo de resposta obrigatório. Setup deixa placeholders explícitos pra a marca confirmar antes da coleta começar (nomes de produto, handles oficiais, lista de concorrentes específicos), porque a skill não inventa nomenclatura sensível.

---

## Painel existente mas irrelevante

Cenário frequente na entrada 3: o usuário tem painel na conta, mas as respostas revelam que ele não foi montado para essa operação, ou para essa pessoa, ou para essa fase da empresa.

Sinais na leitura do painel + qualificação:

- Painel de SAC configurado, usuário é de marketing e não precisa de atendimento — casa disparidade entre finalidade do painel e função de quem opera
- Painel construído para uma marca ou produto que não é mais foco — resposta revela que a operação virou outra
- Painel com muitas automações e temas pré-cadastrados, mas o usuário nunca ouviu falar deles — painel do vendedor/onboarding que ninguém adotou
- Painel compartilhado entre times, e o usuário atual é o único que sobrou de um deles

Quando a skill percebe esse tipo de casamento errado, **dizer explicitamente**. Formulação:

> "O painel que existe hoje foi feito para [inferência]. Pelo que você contou, o que serve à sua operação é bem diferente. Duas opções: (1) começar um caminho novo do zero, deixando o painel atual como está; (2) adaptar o painel atual para o que você precisa, sabendo que isso pode afetar quem mais estiver usando. Qual faz mais sentido?"

Antes da opção 2, **sempre** perguntar quem mais opera o painel.

Detecção → C com escolha entre reset e delta.

---

## O que não fazer em nenhuma entrada

Além das armadilhas gerais em `discovery.md`, específicas de setup:

**Não confundir "aplicar boas práticas gerais" com "auditar o painel".** A skill lê o painel para o que ele é e apenas aponta o que a estrutura crua revela — não aplica regra externa como "todo painel precisa de tema de crise" sem antes ouvir se aquela operação precisa disso.

**Não tratar setup complexo como setup errado.** Painel com 40 grupos e 100 temas pode ser configuração legítima de operação madura, ou pode ser acúmulo de anos sem revisão. O que separa os dois é a qualificação — quem opera, o que entrega, se a estrutura ainda serve. Sem esse dado, é aparência.

**Não pedir justificativa da configuração existente.** Cobertura em `discovery.md`. Painéis evoluem por anos; a intenção original raramente está disponível para quem opera hoje.
