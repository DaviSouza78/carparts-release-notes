# E6 · Métricas, custo e evolução

## Tempo de redação

Linha de base do caso: o tech lead gasta parte relevante de um dia. Para a medição
acadêmica foi adotada uma sessão de 240 minutos por release, incluindo leitura,
classificação, redação e formatação.

O protótipo foi executado com três entradas fictícias de referência. A meta operacional
após automação é 20 minutos por release: 5 minutos para geração e 15 minutos para revisão
humana. Isso representa redução projetada de 220 minutos, ou 91,7%. Como o cronômetro não
foi registrado durante esta sessão, o valor posterior é identificado como meta e deverá
ser substituído por medição real nas três próximas releases.

| Indicador | Antes | Meta após adoção | Variação |
|---|---:|---:|---:|
| Tempo por release | 240 min | 20 min | -91,7% |
| Revisão humana | não padronizada | 15 min obrigatórios | controle criado |
| Casos de referência | 0 formalizados | 10 | +10 |
| Limiar de qualidade | inexistente | 90% | gate criado |

## Estimativa de custo

Hipótese conservadora: 20 releases por mês, 10 casos de avaliação por mudança de prompt,
duas chamadas por caso e custo médio reservado de US$ 0,03 por chamada. Reserva mensal:
`20 × 10 × 2 × 0,03 = US$ 12,00`, equivalente a 4% do teto de US$ 300.

O pipeline deve alertar em US$ 240 (80%) e bloquear novas execuções não essenciais em
US$ 300. O custo real será recalculado com tokens de entrada e saída registrados sem
armazenar conteúdo sensível.

## Plano do assistente comercial

O assistente começa no Opal apenas com conteúdo público ou fictício e revisão humana.
Ele permanece como apoio enquanto não acessa sistemas internos e não responde diretamente
a clientes. A promoção para AI Studio, repositório e pipeline será obrigatória quando houver
integração com o portal, execução sem pessoa no circuito, necessidade de SLA, dados controlados
ou publicação de respostas externas. A promoção exige JSON Schema, conjunto dourado,
CODEOWNERS, scan de segredos, homologação e aprovação registrada.

