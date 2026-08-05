
# Smartcare Stilingue (atendimento)

Módulo de atendimento e relacionamento da Stilingue. **Não existe tool MCP própria** — use `warroom_query` preenchendo `sac_type` e `status` como filtros.

Diferente do listening, o Smartcare trabalha com **conversas e interações**, não com volume e sentimento gerais. Para as regras de interpretação de dado de atendimento — unidade de contagem, semântica de status, SLA — consulte `boas-praticas-analiticas.md`.

## Parâmetros via `warroom_query`

**`sac_type`** — tipo de interação:
`posts`, `comentarios`, `inbox`, `postvisitantes`, `comentariosvisitantes`, `reviews`, `comentariosreview`, `mentions`, `comentariosmentions`

**`status`** — estado da conversa:

| Status | O que significa |
| --- | --- |
| `Pendente` | Aguardando primeira ação |
| `Aberto` | Em andamento |
| `Em Espera` | Aguardando retorno |
| `Respondido` | Resposta enviada |
| `Fechado` | Encerrada |
| `Ignorado` | Não exige resposta (ex: spam) |

Uma mesma conversa passa por vários status ao longo da vida. As regras de contabilização de SLA por transição estão em `boas-praticas-analiticas.md`.

## Unidades de contagem

**Conversa não é interação.** O Smartcare agrupa mensagens do mesmo usuário no mesmo intervalo em uma conversa; o Mural conta cada interação separadamente; a Visão Geral conta interação porque foi desenhada para listening. A mesma consulta pode devolver números muito diferentes conforme a unidade.

**Nunca devolva contagem de atendimento sem nomear a unidade.**

## Métricas de tempo

- **TMR (Tempo Médio de Resposta)** — quanto tempo a equipe leva para falar com o cliente.
- **TMT (Tempo Médio de Tratativa)** — tempo total do início ao fim da conversa.

Ambas dependem do calendário configurado no painel. Sem calendário customizado, a plataforma assume escala 24/7 e o cálculo acumula tempo fora do expediente — ver `boas-praticas-analiticas.md`.

## Sentimento em conversas

O campo `sentiment` existe por interação, não por conversa. Sentimento em nível de conversa é reconstruído a partir das interações, e o método muda o resultado — ver `boas-praticas-analiticas.md`.

Para ler sentimento interação a interação, use `path=publicacoes` com os filtros de SAC.

## Terminologia

Fale em "conversas", "interações", "atendimentos", "tempo de resposta". **A Stilingue não usa a nomenclatura "tickets"** — não introduza esse termo. Nunca exponha nomes de campo cru da API. Ao mostrar exemplos de conversa, sempre inclua a data.
