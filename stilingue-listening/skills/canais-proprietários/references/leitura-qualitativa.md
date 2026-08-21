# Leitura qualitativa

Índice:
- [Exploração não é estimativa](#exploração-não-é-estimativa)
- [Amostra de exploração](#amostra-de-exploração)
- [Amostra de estimativa](#amostra-de-estimativa)
- [Três decisões que mudam o resultado](#três-decisões-que-mudam-o-resultado)
- [Categorias que costumam emergir](#categorias-que-costumam-emergir)
- [Limites do método](#limites-do-método)

---

## Exploração não é estimativa

O erro mais comum nesta fase: ler alguns blocos de comentários, notar padrões, e depois converter esses padrões em percentual.

São dois trabalhos com desenhos incompatíveis.

**Amostra de exploração** descobre *quais* categorias existem. Pode e deve ser enviesada de propósito — sobreamostrar negativo é ótimo para mapear a variedade da crítica.

**Amostra de estimativa** mede *que tamanho* cada categoria tem. Exige alocação proporcional, cobertura de todo o período, e nenhum filtro que correlacione com o que se quer medir.

Se você fez exploração, entregue as categorias e **não entregue percentual**. É perfeitamente respeitável dizer "estas são as sete coisas que o público está falando, e o dimensionamento exige um segundo passo".

---

## Amostra de exploração

Objetivo: variedade, não proporção.

Cubra pico e vale do período, cubra os dois ou três canais principais, e censo no canal pequeno se ele couber. Puxe deliberadamente um recorte de negativos — é onde mora a informação acionável, mesmo sabendo que o classificador erra.

Uma nota de honestidade: filtrar por sentimento negativo para amostrar significa herdar o erro do classificador. Isso é aceitável em exploração e inaceitável em estimativa.

Declare exatamente o que foi lido: quais consultas, qual ordenação, quantos itens, e qual fatia do total. "1.068 comentários, 28% do período" é declarável. "li uma amostra" não é.

---

## Amostra de estimativa

Objetivo: percentual defensável.

**Estratifique por dia e por canal**, com alocação proporcional ao volume diário. A série diária dá os pesos.

**Dentro de cada estrato, quebre o bloco contíguo.** Duas formas, ambas viáveis:

- *Sistemática por deslocamento* — para tirar `n` de `N`, use passo `k = N/n` e faça consultas com deslocamento 0, k, 2k... com limite pequeno em cada.
- *Por faixa horária* — divida o dia em blocos de duas ou três horas via recorte de data e puxe um limite fixo por bloco.

A segunda costuma custar menos consultas e resolve o mesmo problema: sem isso, cada consulta devolve um segmento contínuo no tempo, e comentários do mesmo post e da mesma faixa horária ficam superrepresentados.

**Nenhum filtro de sentimento.** Ele correlaciona com o que se quer medir.

**Escreva o codebook antes** de olhar a amostra nova — regra de inclusão e de exclusão de cada categoria. É o que separa medição de racionalização, e é o que permite alguém do time rotular um subconjunto em paralelo para comparação.

**Emita a rotulagem como dado estruturado** — identificador do comentário e categoria, gravados em arquivo — e conte por código. Contar centenas de itens em várias categorias de cabeça não é confiável.

---

## Três decisões que mudam o resultado

Levante com o usuário antes de rodar. Elas não têm resposta certa, e mudam o número final:

**Denominador.** Ruído afetivo — emoji puro, "top", "linda", marcação de amigo — costuma ocupar metade ou mais dos comentários. Sobre o total, a pauta principal aparece como uma fração pequena e some. Sobre "comentários substantivos", ela dobra ou triplica e vira pauta. Os dois são honestos e contam histórias diferentes. Reporte ambos com o denominador escrito na tabela, e deixe o usuário escolher qual lidera.

**Rótulo único ou múltiplo.** Um comentário costuma tocar três assuntos ao mesmo tempo. Rótulo múltiplo é mais fiel e faz a soma passar de 100% — o mesmo defeito que costuma incomodar na taxonomia do painel. Rótulo único força uma escolha arbitrária. Múltiplo com a soma declarada é o padrão razoável.

**Codebook antes ou depois.** Antes custa uma rodada a mais e é o que torna o número defensável.

---

## Categorias que costumam emergir

Não são um codebook pronto — são o que a leitura direta encontra e a taxonomia de assunto não vê. Use como aquecimento, não como gabarito.

**Registro retórico.** Elogio ao produto formulado como acusação à marca é uma posição coerente — satisfeito com o lançamento, ressentido com a demora, creditando o mérito ao concorrente. Não é assunto, é forma; nenhum tema captura, e é o que quebra o classificador de sentimento.

**Auditoria distribuída.** Público publicando preço praticado na cidade dele e cruzando com o anunciado. Deixa de ser "reclamação de preço" e vira levantamento colaborativo com valor comercial e risco jurídico — o vocabulário costuma ser o de propaganda enganosa.

**Sinal de engenharia.** Usuários independentes citando o mesmo componente com quilometragem específica. Isso não é sentimento, é dado de pós-venda.

**Composição da audiência.** Rede da marca comentando como público; comentário parasitário comercial. São comportamento de canal, não assunto.

**Demanda de roadmap.** Perguntas repetidas sobre o que *não* foi lançado. Pesquisa de intenção de produto entregue de graça.

---

## Limites do método

Diga isso quando entregar, porque é o que sustenta o argumento em vez de enfraquecê-lo:

**Codificador único, sem verificação de concordância.** As categorias saíram de uma leitura só. Um segundo codificador poderia traçar fronteiras diferentes — especialmente em categorias que foram inventadas na análise, não herdadas.

**Não escala.** Mil comentários é o teto do que se lê com atenção. Trinta mil por mês não é.

E é por isso que o argumento honesto não é "dá para analisar sem setup estruturado". É: **dá para analisar sem setup, e o resultado mostra exatamente o que o setup deveria estar capturando e não captura.** A leitura bottom-up é o que *produz* a taxonomia, não o que a substitui.

---

## O segundo entregável da leitura

Sempre que a leitura encontrar assunto recorrente que a taxonomia do painel não captura, converta isso em **proposta de temas novos** — uma lista curta, nomeada, derivada dos comentários reais, pronta para o cliente aprovar.

Nomes de tema funcionam melhor quando são o problema do usuário na linguagem dele, não a categoria de negócio: "Erro Login App", "Entrega do Cartão", "Limite Zerado", "Cobrança Indevida". Específicos o suficiente para virar descritor, gerais o suficiente para reincidir mês que vem.

Esse bloco costuma ser a recomendação de maior efeito composto do documento: aprovada uma vez, melhora todos os relatórios seguintes e reduz o volume de leitura manual do próximo ciclo. Em relatório recorrente ele vai logo depois dos aprendizados — ver `estrutura-mensal.md`.
