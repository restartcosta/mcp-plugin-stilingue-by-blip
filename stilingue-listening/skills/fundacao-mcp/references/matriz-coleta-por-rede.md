# Matriz de Coleta por Rede

Define **o que cada fonte de dados da Stilingue consegue e não consegue coletar em cada rede social**. Consultar antes de afirmar qualquer coisa sobre cobertura, e antes de dizer que "não há menções" sobre um assunto.

## Regra de ouro

Ferramentas de social listening **não coletam tudo o que é publicado nas redes**. Coletam o que a API oficial de cada rede autoriza, dentro das regras de privacidade. Ausência de dado no resultado tem **quatro** significados possíveis:

1. **Não se falou sobre o assunto** — conclusão analítica válida.
2. **A rede não entrega esse tipo de dado para nenhuma ferramenta do mercado** — limitação de API.
3. **O painel não está configurado para coletar aquilo** — limitação de setup.
4. **A coleta era possível, estava configurada, e falhou** — falha operacional.

O quarto é o mais perigoso, porque (2) e (3) soam autoritativos e fecham o caminho para a única ação correta, que é abrir suporte. **Queda inexplicada em canal configurado e suportado mantém falha de coleta como hipótese viva.** Nunca apresente (2), (3) ou (4) como se fosse (1).

## Primeiro passo: de qual fonte estamos falando?

Radar e Warroom têm coberturas **diferentes**. A mesma pergunta pode ter resposta oposta dependendo da fonte.

| Rede | Radar (base pública) | Warroom (painel do cliente) |
| --- | --- | --- |
| Twitter/X | Sim — sem retweets | Sim — retweets desligados por padrão |
| Instagram | Sim — só posts e Reels de perfis da Central de Influenciadores | Sim — via hashtag e perfis business |
| Facebook | Sim | Sim — só páginas públicas mapeadas |
| YouTube | Sim | Sim — vídeos e comentários |
| TikTok | **Não** | Só conteúdo proprietário; mar aberto não vem por API |
| LinkedIn | Não | Só menções à Company Page |
| Portais de notícia / Blogs | Sim | Sim |
| Reddit | Não | Sim — por subreddit, ativação sob demanda |
| Reclame Aqui | Não | Sim — pela página oficial, ativação sob demanda |
| Inbox / DMs | **Não** | Só com canal proprietário conectado |

---

## Parte 1 — Cobertura do Radar

### O que é a base do Radar

Base **amostral pública**, construída a partir das coletas realizadas nos painéis de clientes da Stilingue e processada para reter as publicações mais relevantes. Cobre desde 2018, na ordem de bilhões de registros, com ingestão diária na casa dos milhões.

**Consequência analítica permanente:** o Radar não é um censo da internet. É uma amostra derivada do que os clientes da Stilingue monitoram. Setores com muitos clientes na base tendem a estar bem representados; nichos que ninguém monitora tendem a estar sub-representados. Portanto:

- Nunca apresente o volume do Radar como "o total de menções que existem" sobre um assunto.
- Use o Radar para **magnitude relativa, tendência e composição** — não como número absoluto de mercado.
- Comparar dois assuntos dentro do Radar é válido (mesma base, mesmo viés).
- **Números vindos de fora do Radar** — outra ferramenta, outro painel da Stilingue, o contador nativo da rede — vêm de bases diferentes e não são diretamente comparáveis. Diferenças entre eles se explicam pela composição de cada base, não por erro de uma delas. Ao apresentar volume do Radar junto de outro número, declare a fronteira metodológica; não trate divergência como conflito.

### Idiomas

O Radar não filtra por idioma. Termos em qualquer idioma retornam se houver publicação na base. Mas o pool de perfis do Instagram e páginas do Facebook monitoradas é majoritariamente em português, inglês e espanhol — então a cobertura de conversa em outros idiomas tende a ser **baixa, não zero**. Para marcas globais, declare essa limitação antes de qualquer leitura de repercussão internacional.

### Instagram no Radar: origem exata

As publicações de Instagram na base do Radar vêm **exclusivamente da Central de Influenciadores**, consequência das mudanças de API da Meta entre 2019 e 2020. São posts e Reels públicos de perfis cadastrados, **sem comentários de terceiros**. Na prática, o Instagram no Radar reflete conteúdo de criadores e páginas comerciais. Leia o volume nesse enquadramento — como conteúdo de criador e página, que é o que ele efetivamente representa.

### Gênero é inferência, nunca declaração

O filtro demográfico de gênero do Radar é **inferido por IA a partir de nome e foto do perfil**. A própria documentação registra que perfis sem dado de gênero, ou que usam marcas e símbolos, reduzem a acurácia — o que explica a existência do valor "Marca". Nunca apresente recorte de gênero como característica declarada da audiência; é estimativa com erro conhecido, e o erro se concentra justamente em perfis não-pessoais.

### Atualização de métricas sociais no Radar

Curtidas, comentários e compartilhamentos das publicações do Radar são atualizados por um período limitado após a coleta. Três consequências práticas:

- **Publicações recém-coletadas** aparecem com engajamento subestimado — as métricas ainda vão subir nos próximos ciclos.
- **Publicações mais antigas** têm o engajamento congelado no valor que tinham ao fim da janela de atualização; o número não representa mais o engajamento atual da publicação.
- **Publicações de baixíssimo engajamento** podem sair do ciclo de atualização antes das demais.

Ao ranquear posts por engajamento em período longo, declare essa limitação em vez de tratar os números como definitivos. Para janelas exatas de atualização e critérios de corte, consulte a Central de Ajuda da Stilingue — os parâmetros mudam com frequência.

### `trend_users` não é ranking de influenciadores

O que o Radar chama de principais publicadores combina publicações mais "quentes", número de seguidores e relevância para os termos buscados. **Não é curadoria de influenciadores** e não passou por validação de brand safety nem de autenticidade de audiência. Apresente como "quem mais apareceu ou amplificou a conversa". Mapeamento de influenciadores é outro caso de uso, com outros critérios.

### Limites operacionais de busca

- Máximo de **21 termos** por busca booleana.
- Caracteres especiais (`&`, `#`, `@`) são aceitos.
- **Acentuação e cedilha são ignoradas na indexação.**
- Operadores booleanos exigem **caixa alta**; em minúscula a lógica quebra em silêncio, sem mensagem de erro.

---

## Parte 2 — Cobertura do Warroom (painel)

No Warroom, a cobertura é resultado direto de **como o painel foi configurado**. Duas empresas do mesmo setor podem ter coberturas completamente diferentes. Antes de afirmar que algo "não está sendo falado", verifique com a tool `setup` quais canais o painel coleta.

### Matriz por rede

| Rede | Como coleta | Busca por termo livre? | Autoria | Principais limitações |
| --- | --- | --- | --- | --- |
| **Twitter/X** | Texto (queries) e perfis | **Sim** — ampla e flexível | Identificada | API padrão é amostral. Retweet desligado por padrão. Retweet de perfil privado nunca é entregue |
| **Instagram** | Hashtags e perfis business | **Não** | Anonimizada via hashtag | Sem busca textual. Sem comentários de terceiros em mar aberto. Monitoramento por ID exige conta comercial |
| **Facebook** | Páginas públicas mapeadas | **Não** | Anonimizada em comentários | Sem perfis pessoais, grupos ou eventos |
| **YouTube** | Texto em título/descrição e canais | **Sim** — amostral pelo algoritmo do Google | Identificada | Comentário só entra se o vídeo já foi capturado |
| **TikTok** | Hashtags de marca e menções ao perfil | **Não** | Anonimizada em hashtags | Restrito a conteúdo proprietário. Exige conta business conectada. Hashtag limitada ao liberado para a página conectada |
| **LinkedIn** | Menções à Company Page | **Não** | Identificada | Sem API de mar aberto. **DM não é coletável** |
| **Reddit** | Subreddits específicos | **Não** | Identificada | Não aceita termo solto. Ativação sob demanda |
| **Reclame Aqui** | Página oficial cadastrada | **Não** | Identificada | Não aceita termo solto. Ativação sob demanda |
| **Blogs / Portais** | Texto e URLs de agregadores | **Sim** | Identificada | Veículos nichados precisam ser enviados para indexação |

### Notas por rede que mudam a leitura

**Twitter/X — retweets.** A coleta vem **desligada por padrão**, para economizar volume; só é ativada mediante solicitação ao suporte. Não assuma que retweets compõem o volume. Se estiverem ativados, inflam o volume sem representar produção de conteúdo original. Independente disso, retweet de perfil privado nunca chega, mesmo que o contador da rede o inclua — por isso o número de RTs exibido na rede pode ser maior que o coletado.

**Twitter/X — Twitter Enterprise.** Twitter Enterprise é uma API contratada à parte, com entrega contínua sem gargalo de amostragem, menor latência e coleta de quotes. Quando um painel que a tem contratada atinge o limite de coleta dessa API, ele **retorna à API padrão do Twitter** — segue coletando, mas com amostragem menor e latência maior. Se um evento de altíssimo volume parecer sub-representado em um painel Enterprise, essa é a primeira hipótese. Costuma ser identificável no setup pelo sufixo `TENT` no nome do grupo, quando essa convenção foi seguida no cadastro — boa prática, não garantia.

**Instagram — comentários e colaborações.** Comentários de terceiros em publicações de mar aberto não entram; só existem com página proprietária conectada. O operador de comentário do Instagram **não se comporta como o de Facebook e YouTube**. Publicações em formato colaborativo (collab) não têm coleta de comentário garantida. Além disso, **menção sem arroba não gera comentário coletável**. Consequência: o relatório de campanha com influenciador cobre uma parte da atividade — essa parte precisa ser declarada na metodologia. Combine com dados de canal proprietário e com o que o próprio parceiro puder compartilhar da conta dele.

**Instagram — perfil pessoal.** Perfil pessoal aberto pode aparecer quando o autor usa hashtag monitorada — mas vem **anonimizado**, e não é possível monitorar o perfil individualmente. Monitoramento contínuo por ID de perfil, com autoria identificada, exige conta comercial.

**Facebook — o mito mais comum.** Nenhuma ferramenta do mercado acessa publicações ou comentários de perfis pessoais desde 2018, nem conteúdo de grupos ou eventos. Se o usuário pedir "o que as pessoas estão postando no Facebook sobre a marca", a resposta correta é explicar que só há cobertura de páginas públicas mapeadas — e sugerir caminhos alternativos: monitorar hashtags no Instagram, buscar por termo no Twitter/X, verificar comentários nas páginas oficiais mapeadas.

**YouTube — dependência do vídeo.** Um comentário só entra se o vídeo tiver sido capturado antes — por conter o termo no título ou descrição, por pertencer a canal cadastrado, ou por atender a outra regra de coleta ativa no painel. Comentário sobre a marca em vídeo de terceiro que não menciona a marca no título e não pertence a canal cadastrado não é capturado.

**TikTok — escopo e origem das hashtags.** O mar aberto do TikTok **não vem por API**. A rede só autoriza monitorar hashtags que o próprio perfil conectado já usou organicamente, ou usadas por terceiros em posts que marcaram o perfil da marca. Não é possível monitorar hashtag arbitrária. **O TikTok não tem análise de sentimento por IA.**

**Dark post.** Dark post é publicação paga gerenciada pela Meta (Facebook e Instagram). A plataforma coleta os dark posts da própria conta, desde que o usuário conectado tenha acesso à conta de anúncios onde eles foram criados. **Comentários em dark post têm limite de API: só entram os das 100 publicações mais recentes dos últimos 30 dias** — comentários em dark post fora dessa janela ficam de fora, mesmo em painel ativo. Dark post de concorrente não existe em API pública para nenhuma ferramenta; ausência precisa ser declarada na metodologia.

**Geolocalização.** Quase nunca é entregue pelas APIs. Recorte regional é amostra de quem publicou com localização ativada, não retrato da distribuição geográfica da conversa.

---

## Artefatos de coleta que podem produzir ausência

Esta seção cobre o quarto significado da ausência. São causas operacionais — a maioria ligada à manutenção das conexões entre o painel e as contas das redes — e todas podem produzir na série um buraco que se parece com queda de conversa. Verificá-las antes de concluir evita atribuir a mercado o que é manutenção pendente.

**Token expirado ou desconectado.** As redes sociais exigem renovação periódica dos tokens de acesso, e a plataforma sinaliza isso com antecedência: verde ativo · amarelo até 15 dias para expirar · laranja criticidade média · vermelho menos de 24h ou já expirado. **Se a conta ficar mais de 48h desconectada, o dado proprietário desse intervalo não é recuperado** — a rede não permite coleta retroativa. Por isso a renovação é prioritária, e por isso vale verificar o estado dos tokens antes de atribuir uma queda a comportamento de audiência.

**Latência de renovação de token.** Atraso de até 1 hora na coleta durante renovação é comportamento esperado, não falha.

**Conta conectada a dois painéis.** Divide o volume de requisições de API disponível entre eles. A coleta pode degradar nos dois sem que nenhum esteja mal configurado. Se identificar o cenário, o caminho é revisar a distribuição com o time da Stilingue.

**Troca de ID de página.** Instagram e Facebook trocam o ID da página em certas operações, o que invalida a coleta antiga e interrompe a série. Reconectar a página pelo ID atual retoma a coleta.

**Painel sem conta business conectada.** Para redes que dependem de conta business (Instagram, TikTok, Facebook proprietário), a cobertura é substancialmente limitada sem a conexão. No caso do Instagram, o painel ainda coleta pelo pool de perfis monitorados da Stilingue, mas sem a conta conectada a operação perde métricas proprietárias, dark posts e comentários das próprias publicações. **A recomendação é sempre conectar as contas** — deixar desconectado é aceitar cobertura menor por default.

**Reprocessamento e instabilidade de rede** explicam salto ou queda de volume concentrados em meses específicos, sem causa de mercado.

**Reconectar, não deletar.** Diante de token vencido, o caminho é reconectar a página. Deletar a página proprietária e cadastrá-la de novo apaga o histórico associado — nunca sugira isso como forma de corrigir conexão.

---

## Anonimização de autoria

A Meta e o TikTok entregam publicações coletadas por hashtag **sem o nome do usuário**, por política própria de privacidade da API.

| Origem | Autoria |
| --- | --- |
| Twitter/X, YouTube, LinkedIn, Reddit, Reclame Aqui, blogs/portais | Identificada |
| Instagram e TikTok via hashtag | **Anonimizada** |
| Instagram e TikTok via perfil business cadastrado | Identificada |
| Comentários de Facebook | Anonimizada |

**Implicações:**

- Não afirme que "ninguém relevante falou sobre isso" com base em publicações anonimizadas — você não sabe quem falou.
- Ao localizar publicação anonimizada, oriente busca **pelo texto**, nunca pelo nome do autor.
- Análise de influência, autoridade ou perfil de audiência é inviável sobre a fatia anonimizada. Se a maior parte do volume vier de hashtags de Instagram ou TikTok, avise antes de qualquer leitura de "quem está falando" — e ofereça o caminho alternativo: análise de conteúdo por tema, hashtag ou engajamento, sem depender de identificação.

---

## Exportação de publicações

**Mural de Publicações** e área **Classificar** exportam até **30 mil publicações** por vez. Para volumes maiores, **Central de Exportações** — até **1 milhão de publicações por arquivo**, com SLA de 24h e link disponível por 7 dias. Se precisar exportar mais que 1 milhão, gerar múltiplos arquivos.

**Relatório de Conversas** exporta em XLSX até **15 mil registros**.

**Alerta nativo** amostra as 50 publicações mais relevantes.

**Reprocessamento** alcança as últimas 100 mil publicações.

---

## Tecnologias complementares (podem estar presentes ou não)

Duas soluções ampliam o que entra na base além do texto da legenda. Ambas são **contratadas à parte**, e não há como saber pelas consultas do MCP se um painel as possui:

- **Eyes** (OCR de imagem) — lê texto dentro de imagens, banners e memes.
- **Sonora** (speech-to-text) — transcreve áudio de vídeos coletados.

Se um cliente questionar por que um post que menciona a marca apenas visualmente ou apenas na fala não foi capturado, a explicação é a ausência dessas camadas — não falha de coleta. Apresente como possibilidade a verificar com o time da Stilingue, nunca afirme que o painel tem ou não tem.

---

## Latência

Nenhuma API de mar aberto entrega dado instantâneo. SLA de atualização varia por rede e por métrica — consulte a Central de Ajuda da Stilingue para janelas específicas. Em cobertura de evento ao vivo, declare essa limitação antes de qualquer leitura minuto a minuto, e prefira janelas de pelo menos algumas horas para conclusões.

---

## Afirmações que o modelo nunca deve fazer

- "A Stilingue coleta tudo o que é publicado sobre a marca."
- "Não há nenhuma menção sobre esse assunto" — sem verificar se a coleta era possível.
- "Esse é o volume total de conversas sobre o tema" (Radar é amostral e enviesado pela base de clientes).
- "A diferença para a outra ferramenta indica erro" — pode ser diferença de composição de base.
- "Vou buscar o que estão comentando no Instagram" — sem esclarecer que comentários de mar aberto não são coletados.
- "Vou verificar os grupos do Facebook / perfis pessoais."
- Qualquer promessa de mar aberto no LinkedIn ou no TikTok.
- Qualquer leitura de repercussão em idioma fora de pt/en/es a partir do Radar sem declarar a limitação de cobertura.
- Tratar `trend_users` como recomendação de influenciadores.
- Tratar recorte de gênero como característica declarada.
- Apresentar engajamento de posts antigos como número atual.
- Atribuir queda de coleta a limitação de API ou de setup sem considerar falha operacional.

## Como verificar cobertura antes de afirmar

1. **Identifique a fonte.** Radar e Warroom respondem coisas diferentes.
2. **Se for Warroom:** rode `setup` e veja canais configurados e grupos existentes. Se o canal que o usuário quer não estiver ali, o problema é de configuração, não de conversa inexistente — e a solução é ajustar o setup, não desistir da pergunta.
3. **Se for Radar:** rode `statistics` e olhe a distribuição por canal antes de concluir. Se um canal esperado não aparecer, confira nesta matriz se ele existe no Radar.
4. **Diante de queda inexplicada** em canal configurado e suportado: mantenha falha de coleta como hipótese viva e encaminhe para verificação com o suporte. Não explique a queda com limitação de API sem ter checado.
5. **Ao concluir ausência de menções**, declare o escopo real da busca — fonte, período e canais cobertos — e sugira caminhos adjacentes: outras fontes que a Stilingue cobre, outros termos, outros períodos.

## Como explicar a limitação ao usuário

A analogia mais eficiente é a do restaurante: a rede social é a cozinha, que tem tudo guardado; a API é o garçom; a documentação da API é o cardápio. A ferramenta pede o que está no cardápio e recebe exatamente isso. Não existe entrar na cozinha e pegar o que quiser — nem para a Stilingue, nem para nenhum concorrente. É limitação do ecossistema, não do produto.

**Explicitar limite aumenta confiança em vez de reduzi-la.** Metodologia é um dos itens mais pedidos por quem consome relatório, e declarar o recorte reduz a sensação de dado incompleto. Mas limitação sem caminho é desincentivo — sempre que possível, junto com a limitação apresente a alternativa: a fonte que cobre a parte que falta, o caminho na plataforma que resolve o pedido de outra forma, ou o próximo passo prático (conectar a conta, revisar o setup, ativar a coleta).
