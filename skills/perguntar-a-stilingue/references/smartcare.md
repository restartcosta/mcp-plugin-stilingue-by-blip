
# Smartcare Stilingue (SAC 2.0)

O Smartcare é o módulo de atendimento e relacionamento da Stilingue — essencial para analisar a performance da equipe de SAC e a satisfação direta do cliente. **Não existe uma ferramenta MCP própria pra isso**: use `warroom_query` (mesma tool da skill `warroom-stilingue`), preenchendo `sac_type` e `status` como filtros.

## Contexto de Análise

Diferente do Radar ou do Warroom "puro" (listening), o Smartcare foca em **conversas e tickets**, não em volume/sentimento geral.

### Parâmetros-chave (via `warroom_query`)

- `sac_type`: tipo de interação — `posts, comentarios, inbox, postvisitantes, comentariosvisitantes, reviews, comentariosreview, mentions, comentariosmentions`.
- `status`: status da conversa:
  - `Pendente` / `Aberto`: aguardando ação ou em andamento.
  - `Respondido`: atendimento concluído.
  - `Ignorado`: posts que não exigem resposta (ex: spam).
  - `Em Espera` / `Fechado`: demais estados do fluxo.

### Métricas Chave

1. **Tempos de Resposta (SLAs)**:
   - **TMR (Tempo Médio de Resposta)**: quanto tempo a equipe leva para falar com o cliente.
   - **TMT (Tempo Médio de Tratativa)**: tempo total do início ao fim do ticket.
2. **Sentimento no Atendimento**: observe se o sentimento muda ao longo da conversa (ex: cliente começa negativo e termina positivo após a solução) — use o path `publicacoes` com os filtros de SAC e olhe o campo `sentiment` post a post.

## Dicas de Análise

### 1. Relatórios de Produtividade

Compare o volume de posts com `status=Respondido` vs `status=Aberto`/`Pendente` pra avaliar se a equipe está dando conta da demanda.

### 2. Identificação de Gargalos

Se houver muitos posts com `status=Pendente`/novo e data de publicação antiga, alerte proativamente sobre possível estouro de SLA — não espere o usuário perguntar especificamente sobre isso.

### 3. Voz do Cliente (VOC)

O Smartcare é o melhor lugar para extrair feedbacks diretos sobre produtos ou serviços. Use os textos das respostas dos clientes (`path=publicacoes` com filtros de SAC) para sugerir melhorias de negócio, não só reportar números.

### 4. Terminologia

Não use termos técnicos crus da API na resposta ao usuário — fale em "atendimentos", "tickets", "tempo de resposta", não em nomes de campo. Sempre inclua a data quando mostrar exemplos de conversas.
