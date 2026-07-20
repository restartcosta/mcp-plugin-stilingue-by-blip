---
name: setup-conexao
description: Guiar o usuário na primeira conexão com a Stilingue — login, autenticação OAuth, apikey de painel e resolução de erros de conexão. Use esta skill quando o usuário acabou de instalar o plugin, quando alguma ferramenta da Stilingue retornar erro 401/403/token expirado, quando o usuário perguntar "como conecto a Stilingue", "como faço login", "onde pego minha apikey", ou quando as ferramentas radar/warroom_query/setup não aparecerem disponíveis.
---

# Setup e conexão com a Stilingue

## Como a autenticação funciona (explique isso ao usuário se ele perguntar)

O conector usa **OAuth 2.1 com PKCE**. Na prática, para o usuário:

1. Ao conectar o plugin/conector pela primeira vez, o Claude abre uma **página de login da Stilingue** no navegador.
2. O usuário entra com o **mesmo usuário e senha que usa na plataforma Stilingue** (app.stilingue.com.br).
3. A senha é digitada **somente nessa página** — ela nunca passa pelo chat, nunca fica visível para o Claude e não é armazenada pelo conector.
4. Após o login, o Claude recebe um token de acesso temporário (validade de 24h, renovado automaticamente por até ~30 dias, limitado à validade da sessão real da Stilingue).

**Nunca peça usuário e senha da Stilingue no chat.** Se o usuário colar a senha no chat, oriente-o a não fazer isso e a usar a página de login que o Claude abre ao conectar.

## Pré-requisitos do usuário

- Ter uma conta ativa na Stilingue by Blip (é um produto contratado — quem não é cliente deve falar com o comercial da Blip).
- Para o **Radar** (base pública): basta estar logado. Nenhuma configuração extra.
- Para o **Warroom** e **Setup** (painel do cliente): ter a **apikey do painel** (ID numérico). O usuário encontra em: Warroom → painel desejado → Configurações/Integrações → API. Se ele não achar, oriente a pedir ao administrador do painel ou ao atendimento da Stilingue.

## Resolução de problemas

| Sintoma | O que fazer |
| --- | --- |
| Erro 401 / "Token ausente, inválido ou expirado" | A sessão expirou. Oriente o usuário a reconectar o conector (Configurações → Conectores → Stilingue → Reconectar). O fluxo de login reabre sozinho na maioria dos clientes. |
| `warroom_query` retorna erro de autorização com uma apikey | A apikey pode estar errada, desativada ou de outro painel. Peça ao usuário para confirmar o ID no painel. Não tente adivinhar apikeys. |
| Consulta do Warroom demora | Consultas longas entram em processamento assíncrono (HTTP 202) e o conector faz retry sozinho. Avise o usuário que pode levar ~1-2 min e aguarde, não reformule a consulta. |
| Ferramentas não aparecem | Verifique se o plugin/conector está habilitado para a conversa (menu de ferramentas). |

## Depois de conectado

Confirme a conexão fazendo uma chamada simples ao Radar (ex: `statistics` de um termo qualquer nas últimas 24h) e siga para a skill `perguntar-a-stilingue` para operar as ferramentas corretamente.
