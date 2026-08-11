# Recomendação — Modo C

Detalhamento consultado sob demanda. O `SKILL.md` traz as regras duras: três declarações, três estados de efeito, proibições sintáticas, molde do painel, enxuto sobre completo, citação em crases, peneira não protege temas, produto do C é widget + prosa.

Este arquivo entra em como cada subtipo se comporta, o vocabulário de detecção de padrões e as exceções de governança. Onde a fundação já cobre uma regra geral, o texto aponta pra lá em vez de repetir.

---

## 1. Estrutura de uma recomendação forte

Adote **OPORTUNIDADE → IMPACTO → PLANO DE AÇÃO**, na proporção que couber. Vale desde uma sugestão pontual até um pacote de revisão.

- **Oportunidade** — o que a estrutura crua do painel revela ou o que a operação pede que ele não entrega hoje. Sem drama, sem "erro crítico" — descreve o padrão observado.
- **Impacto** — por que isso importa para o que a operação está tentando fazer. Puxa pela finalidade, não pela regra genérica ("recomenda-se X").
- **Plano de ação** — o passo concreto. Descritores exatos, entre crases, com o efeito sobre histórico declarado.

O que não é recomendação: constatação sem plano ("seu setup tem redundância" fechado ali); plano sem impacto ("adicione `contexto:` em X, Y, Z" sem dizer por quê); impacto sem oportunidade ("isso pode gerar ruído" sem apontar onde).

---

## 2. Subtipo — alteração pontual

Cliente sabe o que quer; painel precisa de ajuste específico. Fluxo:

1. **Lê o painel** (regra do B). Identifica onde o pedido encaixa — grupo existente, tema existente, criação nova.
2. **Detecta o padrão da coleção onde o novo item mora** (regra 4.4 do SKILL). Deriva molde: convenção de título, operador dominante, negativos partilhados, ordem de grandeza de descritores.
3. **Pergunta o mínimo necessário** — só o que a leitura não revelou. Descritor único da coisa nova (hashtag oficial, slogan, nome de campanha) é aberto com chute inicial. Escolhas de forma (aplicar em grupo existente vs criar novo, incluir tema de classificação em paralelo) são fechadas com opção A + opção B.
4. **Confere quem mais opera** — se ainda não foi feito no B, faz agora.
5. **Emite a proposta com as três declarações.** Efeito sobre histórico corresponde ao que a proposta faz.
6. **Widget de proposta**: um card por grupo/tema afetado, com botão de copiar e (quando disponível) botão de aplicar direto. Não despeja o painel inteiro — só o delta.

### Padrão: campanha nova entrando em grupo institucional já existente

Cliente pede coleta de campanha nova cujo objeto (app, produto, sub-marca) já é coletado por um grupo institucional. Proposta padrão: adicionar descritores da campanha nesse grupo, seguindo convenção do painel — nome oficial, hashtag, fragmentos do slogan com `contexto:` amarrando os genéricos. Se o painel já tem tema de campanha ativa com convenção detectável (prefixo `[CAM]`, `TC --`, similar), criar tema paralelo seguindo o molde. Nunca introduzir prefixo novo que quebra a coerência do painel.

### Padrão: novo elemento entrando em painel de categoria ou evento

Cliente pede adicionar marca a uma coleção de concorrentes já existente num painel de categoria multimarca ou de evento. Leitura da coleção revela o padrão do setor — convenção de título, operador dominante, negativos partilhados.

Em setores com sobreposição vocabular reconhecida, a coleção provavelmente carrega negativos partilhados que valem replicar no novo item: setor financeiro compartilha vocabulário com temática religiosa (dízimo, oferta, doação); setor de bebida compartilha com culinária; setor farmacêutico compartilha com sintomas cotidianos.

Proposta padrão: seguir o padrão detectado — molde de título, `contexto:` conforme uso da coleção, negativos partilhados do setor, descartando siglas curtas que colidem com outras pautas do próprio painel (uma sigla de duas letras pode colidir com nome de reality show num painel de evento sazonal, com sigla de programa de televisão em painel de entretenimento, ou com personagem em painel de ficção).

---

## 3. Subtipo — revisão priorizada

Painel existente, múltiplas lacunas frente à operação atual. O risco é virar avalanche.

- **Hierarquiza por impacto na operação**, não por severidade técnica. Se a operação precisa entregar reporte semanal de saúde de marca, um grupo com termo genérico coletando lixo é mais urgente do que dois temas duplicados. Se a operação precisa de SAC, redundância em tema institucional é irrelevante.
- **Consertar / melhorar / expandir** como categorias funcionam pra organizar a lista, mas a ordem dentro do bloco é a ordem em que o cliente vai executar — coisa pequena e rápida primeiro, se destrava outras; coisa que exige coordenação por último.
- **Um pacote coerente por vez.** Se você conseguiu identificar quinze coisas, agrupa em três frentes de trabalho e propõe a primeira. Nunca despeja quinze.
- **Cada item traz as três declarações** (o que muda, efeito sobre histórico, quem sabe antes). Alterações que afetam vários grupos podem compartilhar o "quem sabe antes" no cabeçalho do pacote.
- **Widget**: um card por proposta priorizada, com contador "1 de 5" no cabeçalho pra sinalizar pacote, não avalanche. Cards ordenados por impacto, com botão de aplicar em cada.

Regra dura de escopo: revisão priorizada não é convite pra reimaginar o painel. Trabalha com o que existe. Se a qualificação do B revelou que o painel não serve à operação atual, o subtipo correto é setup inicial ou reset, não revisão.

**Camadas de configuração sobrepostas** são padrão em painel maduro. Cobertura em `fundacao-mcp/references/boas-praticas-analiticas.md` (§ Ferramentas didáticas). Consequência prática pra revisão: alteração que atravessa camadas históricas pode gerar quebra no histórico comparativo — nomear.

---

## 4. Subtipo — setup inicial

Sem painel ou reset assumido. O princípio é enxuto e funcional. Duas bifurcações importantes.

### 4.1 Bifurcação — estudo pontual vs operação continuada

Sinais lidos do briefing e da qualificação separam os dois. Cada um puxa arquitetura distinta.

**Estudo pontual** (relatório, análise de janela, PoC, panorama de categoria):
- Sem SAC, sem roteamento, sem automação de tag operacional
- Temas mais ricos que operação — cobrem sub-categorias, atributos, reclamações, tendências, comportamentos
- Tags mínimas, quando existem são pra marcar publicações-exemplo pro relatório
- Ciclo de vida definido — o painel morre ou congela quando o relatório sai
- Vocabulário de peneira global cobre o universo temático do estudo, não do setor da marca do cliente
- Bifurcação de canal comum: TikTok ligado por natureza do estudo (comportamento), Reclame Aqui desligado (não é conversa espontânea)

**Operação continuada** (SAC, análise de rotina, vigilância):
- Setup pra fluxo — grupos alimentam automação, tags roteiam, temas classificam pra dashboard
- Temas mais enxutos que estudo — cobrem categorias que geram ação (dúvida, reclamação, elogio, crise, evento regulatório)
- Tags operacionais estruturadas — roteamento, status, prioridade
- Automações essenciais, uma por finalidade crítica
- Ciclo de vida indefinido — evolui incrementalmente
- Perfis próprios conectados pra Smart Care de mensagens diretas quando aplica

O SKILL.md do Modo B ensina a ler o sinal. Setup inicial começa perguntando qual dos dois é.

### 4.2 Regras gerais do setup inicial

- **Comece pelo primeiro entregável** identificado no Modo B. Se o cliente disse que precisa de reporte semanal de menções à marca, o setup mínimo é: um grupo para a marca (com contexto se genérico), um tema de sentimento se não vai depender do sentimento automático, um tema de crise se a operação inclui vigilância. Nada além disso no primeiro momento.
- **Sinal explícito de que evolui.** A proposta termina com "esses são o mínimo para o primeiro entregável; conforme rodar, vamos adicionando concorrência / campanhas / temas sensíveis / segmentação regional". Não é preguiça — é convite.
- **Sem temas obrigatórios universais.** Ninguém precisa de tema de racismo num painel de campanha de app de banco corporativo. Painéis de evento aberto ao público geral, sim. A pergunta é sempre "essa operação precisa disso?".
- **Convenção de nomenclatura nasce aqui.** Escolha um padrão de prefixo que faça sentido e mantenha coerente. Não impor formato externo — pergunta se o cliente já usa alguma convenção interna ou herda de outros painéis da conta.
- **Placeholders explícitos em setor sensível.** Farma, jurídico, seguros, saúde, público. Setup deixa placeholders visíveis (`<nome_do_produto>`, `<handle_oficial>`, `<lista_de_concorrentes>`) pra a marca confirmar antes da coleta começar. A skill não inventa nomenclatura sensível — nomes de medicamento, handles regulados, terminologia clínica são erro caro.

### 4.3 Coleta prospectiva vs briefing retroativo

Padrão universal: briefing pede janela pra trás ("últimos 3 meses", "desde o lançamento", "período de 90 dias"). Painel novo coleta daqui pra frente — o histórico não vem por decreto.

**Combinação padrão pra cobrir a janela retroativa:**
- **Reprocessamento manual na plataforma** cobre até ~100 mil publicações por chamada retroativa, aplicado depois do painel criado com os descritores certos. Depende de quanto volume os grupos vão gerar; janela longa pode passar do teto. Detalhe em `fundacao-mcp/references/boas-praticas-analiticas.md` (§ "Alterações de configuração que mudam o dado").
- **Radar (base pública amostral)** roda separado, entrega o retrato panorâmico do período anterior — tendência de volume, principais assuntos, distribuição por canal. Ressalva de amostragem sempre presente. Fundação: `radar.md`.

A combinação preenche o backfill. A limitação de granularidade retroativa é característica da coleta prospectiva, não da Stilingue especificamente.

Setup inicial sem qualificação prévia é chute. Se o cliente chegou dizendo "quero criar um painel pra minha marca" e o B não puxou a operação, volta pro B antes.

### Padrão: estudo pontual de categoria multimarca

Briefing pede entender conversas de uma categoria e posicionamento de uma marca dentro dela. Setup enxuto: uma marca-cliente + concorrentes da mesma sub-categoria, todos com `contexto:` amarrado à peneira global do universo temático da categoria. Temas divididos em quatro frentes que mapeiam as perguntas do briefing (sub-categoria de produto, atributo valorizado, reclamação típica, tendência emergente). Uma tag manual pra marcar publicações-exemplo do relatório. Zero automação (estudo é análise, não fluxo). Placeholders explícitos pra sub-linhas e handles a confirmar com a marca. Nota sobre reprocessamento + Radar pra cobrir janela retroativa do briefing.

### Padrão: operação continuada em setor sensível — agência multi-cliente

Briefing de agência atendendo múltiplos clientes finais em setor com regulação (farma, saúde, jurídico, financeiro regulado). Priorização real quando o briefing lista várias frentes: frente regulatória em primeiro (única com tempo de resposta determinante), SAC em segundo, análise de marca em terceiro; demais focos ficam pra fase 2. Piloto em um cliente antes de replicar. Setup enxuto pra estrear as duas frentes prioritárias. Grupos institucionais e por franquia ou portfólio. Temas cobrindo as frentes de ação (dúvida, reclamação, elogio, evento regulatório, audiência). Tags de roteamento estruturadas. Automação essencial mínima (evento regulatório → escalar + prioridade máxima). Placeholders sensíveis (nomes de produtos, handles regulados, terminologia clínica) marcados explicitamente — a skill não inventa nomenclatura em setor sensível.

---

## 5. Subtipo — orientação de uso

Painel já serve à operação; usuário simplesmente não sabia da existência ou da mecânica. Cenário comum em pessoa nova no time herdando painel que outro operador montou.

- **Não modifica setup.** Nada de sugerir adição de descritor "pra facilitar". Se o painel já resolve, ensinar o caminho vale mais que qualquer alteração.
- **Aponta o que já existe** — nome do grupo, tema ou automação relevante, e como o operador chega nele na plataforma (Warroom, filtro tal, visão tal). Vocabulário da UI, não da API.
- **Traz um exemplo prático** — para o entregável que o B identificou, qual é o caminho: "pra reporte semanal de menções negativas, você entra em Warroom → aplica filtro sentimento negativo → agrupa por tema — os temas [nome real do painel] vão ser os principais". Um exemplo concreto vale mais que três minutos de conceito.
- **Deixa a porta aberta.** "Se rodando isso você descobrir que falta algo — tema mais granular, grupo específico —, aí voltamos e ajustamos." Nunca fecha como se fosse fim.
- **Sem widget.** É prosa. Widget aqui viraria overhead sem valor.

---

## 6. Vocabulário de detecção de padrões

Padrões recorrentes na leitura de setup. Servem como dicionário quando o C topa com eles — não é checklist a percorrer no Modo A, é vocabulário para nomear o que a estrutura crua já mostra.

**Ambiguidade sem peneira.** Marca com nome comum coletando solta, sem `contexto:` e sem `&&` amarrando ao setor. Impacto: coleta absurda de ruído — nome que também é personagem, gíria ou expressão corrente pega toda menção da outra semântica. Regra geral e tratamento em `fundacao-mcp/references/boas-praticas-analiticas.md` (§ Ambiguidade de termo). Aplicado a setup: `contexto:` no descritor da marca + termos do setor na peneira global do painel; ou reescrever como `marca && termo do setor` linha a linha.

**Redundância por canibalização.** Termo mais longo já coberto por um mais curto no mesmo grupo. Exemplo clássico: `heineken` e `cerveja heineken` juntos. Impacto: nenhum sobre coleta, mas polui a lista e induz erro de manutenção. Plano: remover o termo mais longo. Exceção que não é redundância: hashtags que parecem parentes (`#dovenobbb` e `#dovenobbb26`) — cada uma pega variações diferentes, ambas ficam.

**Tema com termo polissêmico isolado.** Descritor como `absorve`, `pesado`, `preço`, `esgotado`, `caro` cadastrado sem amarração num tema de atributo ou reclamação. Impacto: classifica qualquer post que contenha o termo — uma menção institucional com "empresa absorve concorrente" cai em tema de textura de creme. Plano: amarrar com `&&` a termo do universo específico do tema (`pele`, `creme`, `corpo`, `produto`, `perfume`, `frasco`, `voo`, `passagem`, conforme o setor), replicando em múltiplas amarrações pra capturar variações. Termo isolado só sobrevive quando já é uma expressão composta inconfundível por si mesma. Ver regra dura no SKILL.md §4.7.

**Hiper-restrição por stop-words.** Cadeias longas de `&&` incluindo preposições e conjunções (`Amoxicilina&&Clavulanato&&de&&Potássio`). A partícula gramatical não muda o match; só encarece a condição. Impacto: perde coleta legítima que não repete a preposição exata. Plano: simplifica pra `Amoxicilina&&Clavulanato&&Potássio` ou `Amoxicilina&&Clavulanato`.

**`exatamente:` em palavra simples.** Termo minúsculo, sem homônimo relevante, sem caractere especial, cadastrado como `exatamente:remedio`. Impacto: perde plurais (`remedios`), inflexões e variações que a plataforma coletaria automaticamente. Plano: remover o operador. Exceção: quando há homógrafo real que precisa de fixação (Pelé vs pele, siglas curtas ambíguas), o `exatamente:` fica.

**Contexto ativo no grupo, contexto global vazio.** Grupos usando `contexto:termo` mas a aba de Termos do contexto do painel está vazia. A peneira não peneira — o operador vira ornamento. Impacto: `contexto:` deixa passar tudo, coleta vira o que seria sem o operador. Plano: preencher a aba de contexto com termos do universo temático da marca ou da operação. Se não houver universo temático claro (painel de categoria multimarca, por exemplo), reavaliar se o `contexto:` no grupo faz sentido ali.

**Operadores órfãos.** Descritor terminando ou começando com conector: `EMS &&`, `&& Ozempic`. Impacto: sintaxe quebrada — o motor rejeita a linha silenciosamente. Plano: completar ou remover.

**Sintaxe inválida.** `OR`, `AND`, `NOT`, `||`, aspas duplas ou parênteses aparecem como texto no descritor. Impacto: o motor busca o caractere literal — nunca produz o resultado que o operador imaginava. Plano: reescrever conforme as proibições absolutas do SKILL.md (§4.3). Não é erro do cliente, é falta de padronização do onboarding — nunca comunicar como "erro grave".

**Descritor > 60 caracteres na Biblioteca de Termos.** Frase de calibração longa sendo descartada silenciosamente pelo motor de PLN. Impacto: o operador acha que a regra está ativa e ela não está. Plano: dividir em fragmentos < 60 caracteres cada.

**Emoji em descritor.** A plataforma não classifica emoji. Impacto: linha coleta zero. Plano: remover o emoji, manter o texto.

---

## 7. Regra específica — patrocinador em evento

Quando o painel monitora um evento aberto (Carnaval, Lollapalooza, Rock in Rio, Copa) e coleta anunciantes/patrocinadores nele, o `contexto:` dos grupos de anunciante **não usa termos do setor da marca**. Usa **variações do nome do evento e das atrações**.

Motivo: um patrocinador cervejeiro num painel de festival de música que use `contexto:cerveja` coleta menção genérica de cerveja em qualquer contexto do evento. `contexto:<nome do evento>`, `contexto:<abreviação>`, `contexto:#<hashtag oficial>` amarra a menção da marca ao universo do evento.

Regra vale só quando o painel é do evento. Se a marca tem painel próprio e o festival é uma campanha temporária dentro dele, o contexto é do setor da marca — não do evento.

---

## 8. Exceções de governança

Configurações que parecem defeito e não são. Nunca virar recomendação de conserto.

**Grupos históricos vazios.** Grupo de concorrente descontinuado, campanha passada, produto que saiu de linha — deixado no painel sem descritores. É preservação de histórico analítico: os dados já coletados quando o grupo estava ativo continuam consultáveis atribuídos àquele grupo. Se apagar, quebra a leitura retroativa. Deixar como está. Regra geral em `fundacao-mcp/references/boas-praticas-analiticas.md` (§ Alterações de configuração — deletar grupo destrói histórico).

**Termos combinados saudáveis.** `Concerta && medicamento`, `Delta && companhia aérea`, `Meta && empresa`. O cliente usou `&&` pra amarrar homônimo ao contexto — é boa prática, não é limitação. Não sugerir simplificação. Se cabe evolução, é adicionar novas variações amarradas na mesma linha, não desfazer a amarração.

**Descritor único quando basta.** Marca com nome exclusivo (Spaten, Sadia, Perdigão, Bradesco) coletando com um único `contexto:<marca>`. Se o nome não tem homônimo massivo e o `contexto:` já filtra o universo temático do painel, um descritor cobre. Regras de "mínimo 15 termos" ou "mínimo 25 termos" que aparecem em cartilhas de setup vêm de casos onde a marca precisa de variação — não é regra universal.

**Painel sem automação.** Painel de categoria ou de reporte analítico onde a classificação é manual e a leitura acontece via relatório periódico. É configuração legítima. Automação existe pra rotina operacional (SAC, campanha em fluxo, alerta) — se a operação não é rotina, automação é ornamento.

**Prefixos internos idiossincráticos.** Cada painel inventa sua própria convenção (`[I]`, `AP --`, `TR --`, `MTE`, `PRO -`). Nunca sugerir padronização entre painéis — cada operação tem sua história de nomenclatura. Padronização dentro do painel (`CAT --` coexistindo com `CAT -` e `CAT-`) é achado de coerência do Modo A; convenção diferente da que outro painel usa não é.

---

## 9. Padrão do widget de proposta

Mesma linguagem visual do Modo A. Regras técnicas:

**Estrutura fixa quando cabe:** cabeçalho com nome da proposta e pílula de tipo detectado (subtipo do C + natureza do painel); contagens em métricas; configurações do painel; termos do contexto (peneira global); grupos; temas; tags; automações; pendências do cliente; legenda de cores.

**Cards colapsáveis em `<details>`** pra blocos com listas de descritores (peneira global, grupos, temas). Cards de configuração, tags, automações e pendências ficam sempre visíveis — são orientação, não conteúdo denso. Botão de copiar dentro do `<summary>` chama `event.stopPropagation()` pra não disparar o toggle.

**Descritores em bloco monospace**, um por linha, com operador colorido conforme paleta da plataforma (ver SKILL.md §5). Placeholders do cliente destacados com background amarelo e italic.

**Botão "Copiar" em cada card com descritor.** Copia como string separada por vírgula (formato universal que a Stilingue aceita colando em massa) — mesmo que o widget exiba um por linha pra legibilidade.

**Botão "Aplicar direto"** em cards de alteração pontual e revisão priorizada, disparando `sendPrompt` que chama a tool de escrita. Ausente em setup inicial até existir tool de criação de painel. Nunca em orientação de uso (sem widget).

**Pendências do cliente** em bloco destacado com `--bg-warning`, listando placeholders visíveis (nomes de produto a definir, handles a confirmar, listas específicas a fechar, janela retroativa a resolver).

**Legenda de cores no fim**, replicando a paleta da plataforma:
- `contexto:` verde
- `exatamente:` roxo
- `-` vermelho
- `&&` azul bebê

**Limites práticos.** Se um tema chega a mais de ~40 descritores num card de alteração/revisão, mostrar amostra + botão que expande pra lista completa via toggle simples. Setup inicial e propostas em painel pequeno normalmente ficam abaixo desse teto por card.
