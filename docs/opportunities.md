# E1 · Mapa de oportunidades da Carparts

Este mapa prioriza tarefas com base em valor, tempo economizado, risco de dados,
necessidade de revisão humana e custo estimado. Nenhum caso permite dados reais
de clientes, pedidos, preços, ERP ou dados pessoais no Opal.

| Prioridade | Oportunidade | Classificação | Valor e ganho estimado | Risco e mitigação | Custo estimado |
|---:|---|---|---|---|---:|
| 1 | Rascunho de release notes a partir de commits fictícios | Só Opal (apoio), enquanto houver operação manual | Padroniza a comunicação e reduz a redação de 240 para uma meta de 20 minutos por release | Risco baixo com commits fictícios; revisão humana obrigatória antes de qualquer envio | US$ 0 na fase experimental |
| 2 | Geração automática de release notes no pipeline | Opal → AI Studio → esteira | Elimina cópia manual e cria evidência rastreável em toda release | O prompt, o esquema e o conjunto dourado ficam no Git; chave somente em Secrets; gate mínimo de 90% | Parte do cenário conservador de US$ 12/mês |
| 3 | Descrição padronizada de pull request | Só Opal (apoio) | Economiza cerca de 10 minutos por PR e melhora a revisão | Não colar código proprietário ou identificadores; o autor revisa antes de publicar | Desprezível na fase experimental |
| 4 | Resumo semanal de métricas DORA | Opal → AI Studio → esteira | Reduz consolidação manual e evidencia tendências de entrega | Usar dados agregados e validar os cálculos com código ou planilha | Incluído no teto mensal de US$ 300 |
| 5 | Assistente comercial para explicar mudanças públicas do portal B2B | Opal no piloto; promover antes de atendimento direto | Valida linguagem e dúvidas frequentes com baixo investimento inicial | Apenas conteúdo público ou fictício; promover quando houver integração, SLA ou resposta sem revisão | Piloto sem custo; produção sujeita a medição |
| 6 | Decisão de crédito, preço ou condição comercial | Não usar IA generativa | O risco de decisão incorreta supera o ganho de automação | Manter regras determinísticas, aprovação responsável e sistemas corporativos auditáveis | Não aplicável |

## Critério de promoção

Uma oportunidade sai do Opal e entra no fluxo AI Studio → repositório → CI/CD
quando precisar operar sem intervenção, atender clientes, integrar sistemas,
cumprir SLA ou exigir rastreabilidade. Nesse ponto, o prompt deve ser versionado,
testado contra pelo menos dez casos, passar por scan de segredos, homologação e
aprovação registrada.

## Controle financeiro

O cenário conservador documentado para a solução promovida é de US$ 12 por mês,
equivalente a 4% do orçamento de US$ 300. O pipeline deve alertar ao atingir 80%
do teto e bloquear expansão de uso sem nova aprovação.
