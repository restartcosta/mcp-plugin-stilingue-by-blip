---
name: one-page-report
description: |
  Monta um relatório narrativo de uma página, pronto pra impressão/PDF, em HTML — cabeçalho com manchete, seções numeradas contando uma história, grades de KPI, gráfico principal, cards de taxa-chave, callouts, recapitulação. Pergunta se o tema visual deve ser Stilingue by Blip (skill `blip-design-system`) ou um tema personalizado desenhado na hora pra combinar com a marca do cliente.
  Use sempre que o usuário pedir um "relatório", "one-pager", "report executivo", "resumo executivo", "relatório de funil de vendas", ou qualquer entregável estático que conte a história de um número.
  NÃO use para relatórios de múltiplas páginas, dashboards interativos, páginas web com scroll livre, ou apresentações de slides.
---

# Gerar relatório HTML de uma página

Este skill decide todo estilo, layout e estrutura. Sua única responsabilidade é entender **o que os números estão tentando dizer**. Não pergunte ao usuário sobre formato, cores, seções ou qual gráfico usar — pergunte só sobre a história.

**Leia nesta ordem, na primeira vez:** §0 (levantamento) → §1 (tema) → §2 (espinha dorsal). As seções §3–§12 são referência — abra enquanto for escrevendo.

**!! Importante !!** Produza o artefato final você mesmo, nesta mesma conversa — não delegue a geração do HTML pra uma sub-tarefa/agente separado (ex: Task tool do Claude Code rodando em paralelo). Só você, com este skill carregado no contexto, tem as regras de design e os tokens da Blip — uma sub-tarefa sem esse contexto vai improvisar um visual genérico.

---

## 0 — Levantamento: pergunte só sobre a história

**Decida isto sozinho, sem perguntar ao usuário:**

| Decisão | Padrão |
|---|---|
| Formato | **One-pager alto** — largura 794px, altura 1800–2800px (o skill escolhe conforme a quantidade de blocos) |
| Densidade visual | Narrativa — cabeçalho + 3–5 seções numeradas + recap + rodapé de próximo ciclo |
| Paleta | Monocromática — um tom de marca + variante escura invertida pros blocos de destaque + um azure de realce pro texto grande |
| Estilo de gráfico | SVG desenhado à mão, monocromático, sem biblioteca de gráficos |
| Marca | Faixa de cabeçalho em gradiente + padrão de balão de fala + wordmark + callouts invertidos (§10) |
| Espinha dorsal | Ver §2. Descarte blocos que não servem a história; nunca reordene |
| Variações | Uma versão só, bem polida. Sem alternativas pro usuário escolher |
| Idioma | Espelha o idioma do usuário |
| Rótulo de período | Inferido a partir dos dados |

**Pergunte ao usuário estes quatro pontos**, diretamente na conversa (não em formulário — é só perguntar mesmo):

1. **A pergunta de negócio** — a *uma* coisa que esse relatório responde. Ex: "Por que os negócios Ganhos caíram em abril?" · "O que a integração com o Inter entregou nos primeiros 7 dias?"
2. **A fonte de dados** — cole os números, anexe um CSV/planilha, ou diga "gera dados fictícios realistas pra <domínio>"
3. **O ângulo** — "Celebrar uma vitória" · "Diagnosticar um problema" · "Recomendar próximas ações" · "Atualização neutra de status"
4. **O tema visual** — pergunte com essa palavra mesmo, "tema" (não "design system" — muitos clientes não vão reconhecer o termo): *"Quer que eu use o tema Stilingue by Blip (nosso padrão), ou prefere um tema personalizado — com a cara da sua marca?"* Se o usuário topar o padrão, siga com ele sem mais perguntas. Se quiser personalizado, veja §1.1 — você mesmo desenha o tema, não precisa de mais nenhum arquivo.

NÃO pergunte sobre métrica de destaque, tipo de gráfico, segmentos, público ou densidade visual — derive isso da pergunta + ângulo + dados. As quatro perguntas acima são as únicas.

---

## 1 — Tema visual (primeira ação)

O relatório inteiro (§2–§13: espinha dorsal, blocos, tipografia, disciplina de página) funciona **igual não importa o tema** — todas as seções abaixo usam só nomes de token (`--color-primary`, `--color-primary-dark`, etc.), nunca hex cravado. O que muda de um tema pro outro é só **quais valores** esses tokens recebem. Por isso, resolva o tema primeiro (§1.1 ou §1.2) e o resto do skill segue idêntico.

### 1.1 — Tema "Stilingue by Blip" (padrão)

Use os tokens e componentes do skill **`blip-design-system`** (pasta irmã: `../blip-design-system/`). Os arquivos CSS trazem o conjunto completo de tokens e componentes prontos; a pasta `assets/` tem os logos e o padrão de fundo.

| Papel | Token |
|---|---|
| Cor primária | `--color-primary` (#1E6BF1) |
| Variante escura (blocos de destaque) | `--color-primary-dark` (#052F91) |
| Realce de linha de destaque | `--color-brand` (#0096FA azure) |
| Delta positivo | `--color-positive` |
| Delta negativo | `--color-negative` |
| Superfície / rail | `--color-surface-1`, `--color-surface-2` |
| Tinta (texto) | `--color-content-default` |
| Fantasma / eyebrow | `--color-content-ghost` |
| Linha fina | `--color-border-1` |
| Fonte do corpo | Nunito Sans 400 / 600 / 700 / 800 |
| Wordmark / marca no rodapé | `assets/logos/blip-logo-white.svg`, `assets/logos/blip-mark.svg` |

### 1.2 — Tema personalizado (criado por você)

Quando o usuário pedir um tema próprio, desenhe um conjunto de tokens equivalente — **usando exatamente os mesmos nomes de variável da tabela acima**, só com valores diferentes, pra §2–§13 funcionarem sem alteração nenhuma. Não existe um arquivo pra ler aqui; é você quem decide, com critério de design:

1. **Se o usuário já tem uma marca com cor/logo conhecidos** (ele te disse, ou você já viu em outro contexto da conversa), parta daí: uma cor primária, uma variante mais escura dela (pra blocos invertidos — pode ser a mesma cor a ~65% de luminosidade, calculada, não chutada), e um segundo tom de realce pra linha de destaque da manchete (pode ser a própria primária se não houver um segundo tom claro).
2. **Se não tem nada definido**, pergunte só o essencial em uma frase — "tem alguma cor de marca que devo usar, ou posso escolher algo neutro e profissional?" — e, se a resposta for "escolhe você", desenhe algo sóbrio: uma cor primária de confiança (azul, verde-azulado ou grafite escuro — evite tons muito saturados/lúdicos pra um relatório executivo), escala de neutros de `--color-surface-1` (quase branco) a `--color-content-default` (quase preto), e um único tom de realce, nunca mais que isso.
3. **Positivo/negativo** (`--color-positive`/`--color-negative`) seguem convenção universal (verde/vermelho) a menos que o usuário peça o contrário — não vale a pena inovar aqui.
4. **Tipografia**: se o usuário não tiver preferência, use uma fonte de sistema confiável (`system-ui, "Segoe UI", sans-serif` ou, se quiser algo com mais peso de identidade, uma fonte do Google Fonts que combine com o tom da marca — pese 400/600/700/800 disponíveis, senão a hierarquia do §8 quebra).
5. **Sem wordmark/logo próprios** — se o usuário não anexou um logo, não invente um. Rode o cabeçalho só com o texto do nome da empresa/produto em vez do `<img>` de wordmark (mesmo peso/posição do §4), e pule a marca de rodapé do §10 em vez de usar a da Blip.
6. Depois de decidir os valores, **declare a paleta escolhida em uma linha pro usuário antes de gerar** (ex: "vou usar azul petróleo #1B4F72 como primária, com destaque em dourado suave — ok?") — não precisa aprovação formal, só transparência rápida, já que ele não vai ver um preview antes do arquivo pronto.

Em ambos os casos (§1.1 ou §1.2), o resultado final ainda é o mesmo: um HTML autocontido, com os tokens resolvidos em valores fixos no CSS embutido (§12.2) — o cliente final nunca vê nome de variável, só o visual pronto.

Nada abaixo sobrescreve o tema escolhido, exceto a escala tipográfica (§8) — relatórios são mais densos que páginas web, isso vale pros dois temas.

---

## 2 — Espinha dorsal

Todo relatório segue a mesma ordem vertical. Escolha quais blocos entram (pela regra de ângulo abaixo); nunca reordene.

| # | Bloco | Propósito | Altura típica |
|---|---|---|---|
| 1 | **Faixa de cabeçalho (hero)** | Wordmark, pill de contexto, manchete grande de 3 linhas, resumo com destaques em negrito inline, tira de KPI inline | 560–720 px |
| 2 | **Seção 1 — Placar (Scorecard)** | 4 ou 8 cards de KPI; um card invertido (azul escuro) como o KPI-manchete | 260–360 px |
| 3 | **Seção 2 — Gráfico principal** | A única visualização que justifica o relatório (§7) | 340–480 px |
| 4 | **Seção 3 — Taxas-chave** | 3 cards grandes de porcentagem; o último invertido | 220–280 px |
| 5 | **Seção 4 — Humanizar** | Cards de foto com overlay escuro + chip de legenda. Descarte se não houver fotos reais e relevantes | 280–360 px |
| 6 | **Seção 5 — Problemas** | 2 cards de callout invertidos — estatística + uma frase de prescrição | 220–280 px |
| 7 | **Tira de recap** | 3–4 números-manchete re-apresentados como KPIs simples, sem moldura | 120–160 px |
| 8 | **Rodapé / Próximo ciclo** | Frase de itens de ação, marca, linha de assinatura, data | 100–140 px |

### Ângulo → quais seções manter

| Ângulo | Mantém | Descarta |
|---|---|---|
| Celebrar vitória | Cabeçalho · Placar · Gráfico principal · Humanizar · Recap · Rodapé | Taxas-chave (a menos que sejam a vitória) · Problemas |
| Diagnosticar problema | Cabeçalho · Placar · Gráfico principal · Taxas-chave · Problemas · Recap · Rodapé | Humanizar |
| Recomendar próximas ações | Cabeçalho · Placar · Taxas-chave · Problemas · Recap · Rodapé (foco em próximo ciclo) | Gráfico principal · Humanizar |
| Atualização neutra de status | Cabeçalho · Placar · Gráfico principal · Recap · Rodapé | Taxas-chave · Problemas · Humanizar |

Forma mínima: Cabeçalho + 3 seções + Recap + Rodapé. Máxima: os oito blocos.

---

## 3 — Estrutura da página

```css
:root {
  --page-w: 794px;
  --page-h: 2400px;   /* definido pelo skill conforme a quantidade de blocos; faixa 1800–2800 */
  --page-pad: 36px;
}
html, body { background: #e9ecf1; margin: 0; font-family: "Nunito Sans", system-ui, sans-serif; }
body { padding: 32px 0 48px; display: flex; flex-direction: column; align-items: center; }
.page {
  width: var(--page-w);
  min-height: var(--page-h);
  background: #fff;
  box-shadow: 0 12px 40px rgba(0, 16, 36, 0.14);
  position: relative;
  overflow: hidden;
}

@page { size: A4 portrait; margin: 0; }
@media print {
  html, body { background: #fff; padding: 0; }
  .page { box-shadow: none; width: 210mm; min-height: auto; }
  .report-section, .report-header, .report-recap, .report-footer { break-inside: avoid; }
}
```

O formato alto é um artefato de leitura contínua. Quando impresso, se divide em várias páginas A4 — `break-inside: avoid` mantém cada seção numerada intacta na divisão.

---

## 4 — Faixa de cabeçalho (hero)

Os 600 pixels mais importantes do relatório. Empilhe, de cima pra baixo:

1. **Linha superior** (padding 32px):
    - Esquerda: wordmark Blip em branco (22px de altura). Use a variante de produto se existir.
    - Direita: pill de eyebrow tipo `REPORT EXECUTIVO`. 10px maiúsculo, letter-spacing 0.12em, borda 1px a 40% branco, raio 999px, padding 6/14px.
2. **Linha de contexto** (alinhada à direita, abaixo do pill, 10px maiúsculo a 60% branco): duas linhas — primeira `CLIENTE · IDENTIFICADOR DO TENANT`, segunda `PERÍODO · ANO · DURAÇÃO` (ex: `12 ABR — 18 ABR · 2026 · 7 DIAS`).
3. **Rótulo de eyebrow** (esquerda, ~60px abaixo do wordmark): `— RÓTULO DA SEÇÃO` (prefixo de traço, 10px maiúsculo, 0.14em, azul médio — **não** branco). O prefixo de traço é só do cabeçalho; seções numeradas não usam.
4. **Manchete de destaque**: 3 linhas no máximo, 56–72px, peso 800, line-height 1.05, letter-spacing -0.02em.
    - Linha 1: moldura (ex: "Sete dias.") — branco.
    - Linha 2: batida emocional (ex: "Quase 4 mil pessoas.") — em `--color-brand` azure.
    - Linha 3: resultado (ex: "R$ 3,79M entregues.") — branco.
    - Exatamente uma linha vive no tom de realce; a linha do meio é a escolha padrão.
5. **Parágrafo de resumo**: 14px line-height 1.5 a 70% branco, máx. ~480px de largura. Use `<strong>` inline (branco puro, mesmo peso + 200) nas 2–3 frases que carregam a história — normalmente os números-âncora e uma frase que estrutura a decisão.
6. **Tira de KPI inline**: 3 KPIs em linha num card translúcido (preenchimento 4% branco, borda 1px a 12% branco, raio 14px, padding 18/22px). Cada KPI: rótulo maiúsculo (10px / 0.14em / 60% branco) · número grande (34–40px / peso 800 / branco) · subtexto (10px / 60% branco). Colunas separadas por linha vertical fina a 18% branco.

**Fundo**:

- Gradiente `linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)`.
- `assets/pattern.svg` (da pasta `../blip-design-system/assets/illustrations/`) sobreposto a 10–14% de opacidade com `mix-blend-mode: screen`.
- Opcional: uma faixa diagonal suave de destaque (200px de largura, translúcida a 8% branco) do lado direito, pra quebrar a superfície plana.

---

## 5 — Padrão de seção numerada

Toda seção abaixo do cabeçalho segue a mesma abertura:

```html
<section class="report-section">
  <header class="sh">
    <span class="sh-num">1</span>
    <span class="sh-eyebrow">RESULTADO DO PERÍODO</span>
  </header>
  <h2 class="sh-title">O placar dos 7 dias</h2>
  <p class="sh-lead">Oito indicadores que contam a história da operação — do volume de entrada até o valor do pipeline.</p>
  <!-- conteúdo do bloco aqui -->
</section>
```

Estilo:

- `.sh-num`: círculo 22×22px, preenchimento `--color-primary`, dígito branco, peso 700, font-size 11px, line-height 22px.
- `.sh-eyebrow`: 11px maiúsculo, letter-spacing 0.14em, cor `--color-primary`. **Sem prefixo de traço** (o traço é só do cabeçalho).
- `.sh-title`: 26–30px, peso 800, cor de tinta, letter-spacing -0.01em. **Título narrativo em sentence-case**, não rótulo descritivo — "Onde o fluxo respira — e onde trava" é melhor que "Taxas de conversão".
- `.sh-lead`: 13px line-height 1.5, cor fantasma, máx. ~560px de largura, uma a duas frases.
- Margens: 20px abaixo do cabeçalho `.sh`, 48px entre seções.

---

## 6 — Catálogo de blocos

Escolha um bloco por seção, conforme a história. Alturas visam o one-pager alto.

### 6.1 Grade de KPI (Placar)

- Grid: 4×1 ou 4×2, `grid-template-columns: repeat(4, 1fr); gap: 12px;`.
- Card: borda 1px `--color-border-1`, raio 12, padding 16/18, altura mín. 92px.
- Layout dentro do card: eyebrow (10px / 0.12em / fantasma) · número grande (28–32px / peso 800 / tinta) com unidade · subtexto (11px / fantasma, máx. 2 linhas).
- Exatamente **um** card é invertido: preenchimento `--color-primary-dark`, texto branco — é o KPI-manchete e precisa ser o número que a pergunta de negócio mais diretamente responde.
- Pra 8 cards, use duas linhas de 4. Nunca exceda 8.

### 6.2 Funil horizontal

- Grid: `170px 1fr 70px` — nome da etapa · barra · porcentagem final.
- Barras: trilho de largura total a 6% primária, preenchimento interno em `--color-primary`, largura proporcional, raio 4, altura 28px.
- Rótulo de valor absoluto fica alinhado à direita dentro da barra acima de 50% de largura, fora da barra abaixo de 50%. Coluna final traz a porcentagem (`20,6%`, cor fantasma).
- Marque a etapa final com preenchimento `--color-primary-dark` e um rótulo `final`.
- Use no máximo 8–10 etapas; agrupe etapas minúsculas se precisar.

### 6.3 Destaques de taxa (3 colunas)

- Grid: `grid-template-columns: repeat(3, 1fr); gap: 14px;`.
- Card: raio 12, padding 20/22, altura mín. 140px.
- Rótulo de eyebrow no topo, depois a porcentagem `XX,X%` a 52–60px peso 800 com o sinal `%` menor (28px, alinhado à linha de base, cor fantasma), depois subtexto (12px, fantasma, máx. 2 linhas).
- O **último card** é invertido (preenchimento `--color-primary-dark`, texto branco) — coloque ali a taxa que mais merece atenção.

### 6.4 Cards de foto

- Grid: `repeat(2, 1fr); gap: 14px;`.
- Cada card: raio 12, overflow escondido, imagem preenchendo em proporção 16:10.
- Overlay em gradiente escuro nos 45% inferiores: `linear-gradient(to top, rgba(5,47,145,0.92) 0%, transparent 100%)`.
- Chip no canto superior esquerdo, sobre o overlay: estilo eyebrow (10px / 0.14em / branco) sobre 20% preto, padding 4/10px, raio 999px.
- Canto inferior esquerdo: rótulo branco em negrito, 16–18px peso 700.
- Use só quando os dados forem sobre pessoas **e** houver fotos reais disponíveis. Não use rostos gerados por IA nem banco de imagens genérico — descarte a seção em vez disso.

### 6.5 Cards de callout (Problemas)

- Grid: `repeat(2, 1fr); gap: 14px;`.
- Card: fundo `--color-primary-dark`, texto branco, padding 22/24, raio 12.
- Eyebrow (11px / 0.12em / 60% branco) — emoldura o problema (ex: `QUEBRA 13 → 14 · CADASTRO → CRIAÇÃO`).
- Número grande (34–40px peso 800 branco) + frase curta (13px / 80% branco) na mesma linha de base, número à esquerda.
- Parágrafo de explicação (12px / 70% branco / line-height 1.5) — uma a duas frases, **sempre prescritivo**.

### 6.6 Tira de recap

- Quatro KPIs simples (sem borda, sem card) em linha: `repeat(4, 1fr); gap: 24px;`.
- Cada um: número grande (30–36px peso 800 tinta) · rótulo (10px / 0.12em / fantasma).
- Separadores de linha fina em cima e embaixo (`1px solid var(--color-border-1)`).
- Precede a tira: um eyebrow (`RESUMO EM NÚMEROS`) e um título de uma frase (24–26px peso 800) recapitulando a entrega.

### 6.7 Blocos alternativos (use só quando a história exigir)

- **Barras ranqueadas**: grid `140px 1fr 60px`, trilho 16px, rótulo de porcentagem alinhado à direita dentro do preenchimento, branco 9px peso 700.
- **Tabela**: bordas de linha finas, corpo 11px, `tabular-nums`, última linha `border-bottom: 0`, máx. 6 linhas (linha "Outros" pra cauda).
- **Linha/área de tendência**: no máximo duas séries, área preenchida na cor primária + traço mais escuro, linhas de grade em 25/50/75/100%, anote o pico com um pill + ponto.
- **Waterfall**: linhas conectoras entre barras, positivos `--color-primary`, negativos `--color-negative`.
- **Mapa de calor de cohort**: escala monocromática de `--color-surface-2` → `--color-primary-dark`, nunca mais que 8×8 células.

---

## 7 — Gráfico principal: escolha pela pergunta

A Seção 1 é **sempre** o placar de KPI (§6.1). A Seção 2 (o gráfico principal) é escolhida pelo formato da pergunta de negócio:

| Formato da pergunta | Bloco principal |
|---|---|
| "Onde o fluxo cai?" | Funil (§6.2) |
| "O que moveu o número de X pra Y?" | Waterfall (§6.7) |
| "Os cohorts estão fiéis / repetindo?" | Mapa de calor de cohort (§6.7) |
| "O que impulsiona receita / margem?" | Linhas de DRE (tabela, §6.7) |
| "Qual segmento / canal / vendedor lidera?" | Barras ranqueadas (§6.7) |
| "Como as taxas-chave mudaram vs. período anterior?" | Destaques de taxa (§6.3) como principal |
| "O que entregamos nesse período?" | Funil (§6.2) — do volume ao resultado |
| "Como a métrica evoluiu?" | Linha/área de tendência (§6.7) |

Se a pergunta for ambígua, use **funil** como padrão pra histórias de volume-pra-resultado e **barras ranqueadas** pra histórias de ranking.

---

## 8 — Tipografia e escala

Relatórios são mais densos que telas; o formato alto compra espaço vertical suficiente pro texto do corpo ficar confortavelmente legível.

- Destaque (manchete do cabeçalho): 56–72px / peso 800 / line-height 1.05 / letter-spacing -0.02em.
- Título de seção: 26–30px / peso 800 / line-height 1.15.
- Lead de seção: 13px / line-height 1.5.
- Corpo / parágrafo: 12px / line-height 1.5.
- Número de KPI: 28–36px / peso 800 / line-height 1.
- Rótulo de KPI / eyebrow: 10–11px maiúsculo / letter-spacing 0.12em / cor fantasma.
- Corpo de tabela: 11px / `tabular-nums`.
- Rótulos de gráfico / eixo: 10px.

Sempre defina `font-variant-numeric: tabular-nums` em valores de KPI, valores de funil e colunas numéricas de tabela, pra os dígitos alinharem.

Nunca reduza o corpo abaixo de 12px, números de KPI abaixo de 24px, ou corpo de tabela abaixo de 10px — descarte um bloco primeiro (§9).

---

## 9 — Disciplina de caber na página

A maioria das falhas é erro de orçamento vertical: espaço vazio demais, ou conteúdo passando do `--page-h` escolhido. Depois de rascunhar o HTML:

1. Salve o HTML num arquivo temporário (ex: `/tmp/report-draft.html`, com CSS/fontes/SVGs já linkados localmente — não precisa embutir ainda nessa etapa).
2. Use o **bash tool com Playwright** (já disponível neste ambiente) pra medir as alturas de verdade, em vez de estimar:

```python
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 794, "height": 1200})
    page.goto("file:///tmp/report-draft.html")
    page.wait_for_timeout(200)
    medidas = page.evaluate("""
        () => {
            const nodes = [...document.querySelectorAll(
                '.report-header, .report-section, .report-recap, .report-footer'
            )];
            return {
                total: document.querySelector('.page').offsetHeight,
                partes: nodes.map(n => ({classe: n.className, altura: n.offsetHeight}))
            };
        }
    """)
    print(medidas)
    page.screenshot(path="/tmp/report-draft.png", full_page=True)
    browser.close()
```

3. Compare `total` com `--page-h`. Se **passar do orçamento**, corte nesta ordem (maior economia primeiro):
    - Alturas de SVG — sempre fixe com `height="<px>"` explícito, nunca `auto`.
    - Margem entre seções (48 → 36 → 28 → 24px).
    - Padding de card (22 → 18 → 14px).
    - Altura mínima de KPI (92 → 80 → 72px).
    - Descarte uma seção numerada (normalmente Humanizar, depois Problemas) antes de encolher tipografia abaixo dos pisos do §8.
4. Se **abaixo do orçamento** por mais de 200px, reduza `--page-h` pra caber o conteúdo (preferível — a página pode ser mais curta) ou restaure um bloco descartado.

Alvo: altura final dentro de ±40px do `--page-h`. Remeça depois de cada mudança.

**Revisão visual final:** antes de entregar, olhe o `/tmp/report-draft.png` gerado no passo 2 (ou tire um novo print depois dos ajustes) — confira estouro de texto, quebra de seção estranha, e blocos invertidos adjacentes (nunca dois seguidos).

---

## 10 — Marca e acabamento

- **Faixa de cabeçalho em gradiente** — sempre `135deg`, escuro → primário. Overlay de `pattern.svg` só no gradiente; nunca no corpo branco.
- **Blocos invertidos** — KPI-manchete do placar, último card de taxa, e callouts de problema. Use com moderação: **no máximo um sub-bloco invertido por seção numerada**, e nunca duas seções numeradas invertidas seguidas na espinha dorsal.
- **Âncoras de seção** — o selo numerado é a única âncora visual que uma seção precisa. Não adicione faixas de destaque, barras coloridas ou divisores entre seções.
- **Logos** — wordmark do produto no cabeçalho (22px, branco sobre gradiente); marca de balão de fala no rodapé (14px, monocromática). Nunca duplique o wordmark no rodapé.
- **Nunca** — sombra em cards de conteúdo, preenchimento em gradiente em superfícies do corpo, sombras internas, ilustrações decorativas dentro de seções numeradas, emoji, paleta arco-íris, hex de marca cravado no markup do corpo (use tokens).

---

## 11 — Regras de conteúdo

- **Títulos contam uma história.** "Onde o fluxo respira — e onde trava" é melhor que "Taxas de conversão". "Duas quebras, dois mundos diferentes" é melhor que "Problemas".
- **Leads afirmam o achado.** Uma linha, não uma descrição do gráfico.
- **Destaques em negrito inline** no resumo do cabeçalho e nas explicações de callout — negrite os 2–3 números que carregam a história.
- **Dados fictícios com cara de real.** Os números precisam bater de ponta a ponta: se o topo do funil = 3.996 e a conversão ponta a ponta = 20,6%, a etapa final ≈ 823. Deltas alinhados com o período anterior implícito.
- **Moeda e datas.** pt-BR: `R$ 3,79M`, `12 ABR · 18 ABR · 2026 · 7 DIAS`.
- **Caixa.** Sentence case pros títulos; MAIÚSCULO só em eyebrows, rótulos de KPI, linhas de contexto e chips.
- **Glifos permitidos**: `▲ ▼ · — → ✓ %`. Sem emoji.
- **Callouts são prescritivos, não descritivos.** "Corrige o webhook e recupera a receita presa" é melhor que "O webhook falhou 16% das vezes".
- **Rodapé de próximo ciclo** é uma única frase de plano de ação, não uma lista — deve soar como um recado que um PM deixaria no fim de uma daily.
- **Sem enchimento.** Se uma seção não pode ser escrita com opinião real, descarte.

---

## 12 — Saída do artefato: um único HTML autocontido

O entregável final é **um único arquivo HTML**, com toda regra de CSS, fonte, SVG e imagem embutida (inline). Ele precisa renderizar de forma idêntica sendo aberto offline de um download, lido como anexo de e-mail, ou carregado num `<iframe srcdoc="…">`. Sem referências externas, sem pastas irmãs, sem servidor web necessário.

Escolha um nome de arquivo curto em kebab-case (ex: `revisao-pipeline-q2.html`, `integracao-inter-7d.html`) e salve no local de saída de trabalho da conversa atual (ex: pasta de outputs do Claude Code/Cowork daquela sessão) — não existe um caminho fixo universal tipo `/personal/artifacts/`; use a convenção de arquivo de saída do ambiente onde você está rodando.

### 12.1 — Rascunho vs. saída final

**Isso aqui (§12.1–§12.2) descreve o caso do tema "Stilingue by Blip" (§1.1)**, que tem arquivos de verdade pra copiar e embutir. Se o usuário escolheu tema personalizado (§1.2), não existe pasta `ds/`/`assets/` nenhuma pra copiar — você já escreve o CSS com os valores finais (hex, não `--var`, já resolvidos) direto no `<style>` do rascunho, sem passo de embutir CSS depois. Se o tema personalizado usa uma fonte do Google Fonts (não um arquivo local seu), pode deixar como `<link>` normal do Google Fonts no HTML final — não precisa baixar/embutir em base64, já que não é um arquivo local seu que vai sumir; só evite isso se o relatório precisar funcionar 100% offline sem internet, caso em que baixe o woff2 da fonte escolhida e aplique o mesmo tratamento do passo 2 abaixo. Se o usuário te mandou um arquivo de logo de verdade, embuta ele do mesmo jeito que o passo 3 faz com o wordmark da Blip; se não mandou, não tem SVG de identidade pra embutir (§1.2, item 5).

Mantenha o layout multi-arquivo enquanto rascunha — isso deixa a iteração mais rápida e os tokens do tema compartilhados entre relatórios:

```
<rascunho de trabalho>/
├─ <nome-do-relatorio>.html      hrefs relativos: "ds/…", "assets/…"
├─ ds/  { colors_and_type.css, bds-components.css, fonts/* }
└─ assets/  { blip-logo-white.svg, blip-mark.svg, pattern.svg }
```

Copie esses arquivos de `../blip-design-system/` pra essa pasta de rascunho. Antes de entregar, rode o pipeline de embutir (§12.2) e escreva **só** o HTML final embutido no arquivo de saída. Não entregue as pastas `ds/` ou `assets/` como parte do artefato — são andaime de trabalho, não entregável.

### 12.2 — Pipeline de embutir (inlining)

**Também é o caso do tema Blip.** Pro tema personalizado, pule os passos que não se aplicam (ver nota do §12.1) e vá direto pro checklist do §13 com o que sobrar.

Aplique estas transformações em ordem, produzindo uma única string HTML:

1. **CSS** — troque cada `<link rel="stylesheet" href="ds/…">` por um bloco `<style>…</style>` com o conteúdo daquele arquivo. Preserve a ordem dos arquivos (tokens/cores antes de componentes). **Atenção**: `bds-components.css` tem um `@import url('colors_and_type.css');` na primeira linha — como `colors_and_type.css` já está sendo inlinado separadamente (e antes, na ordem certa), **remova essa linha de `@import`** ao copiar o conteúdo de `bds-components.css` pro seu `<style>`, senão sobra uma referência externa quebrada que os greps de href/src do passo 6 não pegam (não é um atributo HTML, é uma regra CSS).
2. **Fontes** — o design system usa **fontes variáveis TTF** (não woff2 fixo): `NunitoSans-VariableFont_YTLC_opsz_wdth_wght.ttf` (peso 100–900 num arquivo só) e a versão itálica equivalente. Um relatório normal usa só peso regular (400/600/700/800 do mesmo arquivo variável) — **não embuta a fonte itálica** a menos que o texto do relatório realmente use itálico (raro; §11 não usa). Pra cada `url("…ttf")` na regra `@font-face` do design system, leia os bytes do TTF, codifique em base64, e troque por `url("data:font/ttf;base64,<base64>") format('truetype-variations')`. Como é uma fonte variável, um arquivo só já cobre todos os pesos 400–800 usados no relatório — não precisa (nem existem) arquivos separados por peso.
3. **SVGs de identidade** (wordmark, marca) — troque `<img src="assets/blip-logo-white.svg">` pelo markup do SVG embutido direto. Embutir permite que o SVG herde `currentColor` e seja dimensionado/estilizado pelo CSS ao redor.
4. **SVGs de fundo** (`pattern.svg`) — codifique em base64 e referencie como `background-image: url("data:image/svg+xml;base64,<base64>")` dentro do `<style>` inline.
5. **Imagens raster** (cards de foto, se houver) — codifique em base64 e embuta como `src="data:image/<mime>;base64,<base64>"`.

Depois de embutir, procure no HTML final por `href="ds/`, `src="assets/`, `url(assets/` **e também `@import`** — qualquer ocorrência significa que algo não foi embutido e o arquivo vai quebrar quando baixado/aberto offline. O `@import` é fácil de esquecer porque não é um atributo HTML — teste sempre abrindo o arquivo final numa pasta isolada, sem os arquivos `ds/`/`assets/` originais por perto, pra garantir que não há dependência externa escondida.

### 12.3 — Tamanho esperado

Um relatório típico (8 blocos, uma fonte variável embutida, `pattern.svg`, sem fotos) fica em torno de **~800 KB – 1 MB** — testado e confirmado: a fonte variável sozinha (só o peso regular, sem itálico) já responde por ~750 KB depois de base64 (o arquivo `.ttf` original tem ~570 KB; a codificação base64 adiciona ~33%). CSS + SVGs + markup somam bem pouco perto disso.

Isso é **normal e esperado** pra essa combinação de fonte variável + base64 — não é um sinal de que algo deu errado, e não é o mesmo patamar de arquivos woff2 estáticos menores. Se o arquivo passar de ~1,3 MB, aí sim vale checar se: (a) a fonte itálica foi embutida à toa (não deveria), (b) alguma imagem raster de card de foto está sem compressão, ou (c) algum SVG grande demais (ex: ilustração de página inteira) foi embutido em vez de referenciado só onde necessário.

**Tema personalizado (§1.2) fica bem mais leve** — sem arquivo de fonte local pra embutir (Google Fonts via `<link>` normal, ou fonte de sistema) e sem `pattern.svg`/wordmark pra base64, o esperado é algo entre **~15–60 KB**, quase tudo markup + CSS. Se você embutiu um logo real que o usuário mandou, some o tamanho desse arquivo à conta.

### 12.4 — Compartilhamento, download, incorporação

Depois de salvo, o artefato funciona em qualquer lugar sem mais nenhuma configuração:

- **Download ou e-mail** — o arquivo único renderiza offline, pixel-idêntico à versão autorada.
- **Incorporar em outra UI** — carregue o conteúdo HTML num `<iframe srcdoc="…">` (ou `<iframe src>` contra uma blob URL assinada). O CSS fica isolado da página host.
- **Imprimir em PDF** — abra em qualquer navegador e imprima; as regras `@page` + `break-inside: avoid` (§3) mantêm as seções numeradas intactas nas quebras de página A4.

---

## 13 — Checklist de entrega

- [ ] O levantamento perguntou só as quatro coisas do §0 (pergunta de negócio, dados, ângulo, tema); nada sobre formato, paleta específica ou tipo de gráfico.
- [ ] Tokens do tema resolvidos (§1.1 ou §1.2); sem hex cravado no markup do corpo fora da definição dos tokens.
- [ ] Espinha dorsal segue o §2; blocos descartados batem com a regra de ângulo.
- [ ] Cabeçalho hero tem wordmark, pill de contexto, manchete de destaque de 3 linhas com a linha do meio no realce azure, resumo com destaques em negrito inline, e tira de 3 KPIs.
- [ ] Toda seção numerada tem selo + eyebrow + título narrativo + lead de uma linha.
- [ ] No máximo um sub-bloco invertido por seção; nunca duas seções numeradas invertidas seguidas.
- [ ] Gráfico principal bate com o formato da pergunta de negócio (§7).
- [ ] Todos os números batem de ponta a ponta.
- [ ] Altura total da página dentro de ±40px do `--page-h`; sem scroll horizontal; `@media print` mantém seções intactas nas quebras A4.
- [ ] Tira de recap re-apresenta os 3–4 números-manchete.
- [ ] Rodapé tem uma ação de próximo ciclo em uma frase, marca, linha de assinatura, data.
- [ ] Sem erros no console do navegador (confira com o Playwright do §9 — `page.on("console", ...)`).
- [ ] Artefato final é um único arquivo HTML autocontido — sem pastas `ds/` ou `assets/` entregues junto.
- [ ] Se tema Blip (§1.1): CSS, fontes e SVGs embutidos; procure no HTML final por `href="ds/`, `src="assets/`, `url(assets/` e `@import` — precisa dar zero resultados. Teste abrindo numa pasta isolada, sem os arquivos originais por perto. Se tema personalizado (§1.2): confira que não sobrou nenhum `<link>` ou `src` local quebrado (Google Fonts externo tudo bem, arquivo local não).
- [ ] Tamanho do arquivo final dentro do esperado pro tema usado — ~800 KB–1,3 MB no tema Blip, ~15–60 KB no tema personalizado (ver §12.3).

Depois disso, tire um print final (`page.screenshot(full_page=True)` via Playwright, como no §9) e revise você mesmo antes de entregar: estouro de conteúdo, quebra de seção estranha, ou blocos invertidos adjacentes.
