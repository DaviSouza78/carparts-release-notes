# Opal · ReleaseNotes Carparts

- Link publicado: https://opal.google/app/1f6arB8YirmamMBf7pe0Kbg40vIedFBP_
- Responsável: aluno titular da entrega (nome e RA serão registrados no relatório final)
- Finalidade: transformar commits técnicos em notas de versão claras para clientes
- Criada em: 18/09/2026
- Versão revisada: v1, em 18/09/2026
- Próxima revisão: 18/10/2026
- Compartilhamento: qualquer pessoa com o link pode usar; acesso ao editor e remix desativado
- Revisão humana: obrigatória antes de qualquer conteúdo chegar ao cliente

## Passos e modelos

| # | Tipo | Nome | Modelo / recurso | Saída |
|---|---|---|---|---|
| 1 | User Input | Commits da versão | texto obrigatório | lista `hash mensagem` |
| 2 | Generate | Classificar Mudancas | Gemini 3 Flash + `@Commits da versão` + `@Guia de estilo` | tabela categorizada |
| 3 | Generate | Redigir Notas | Gemini 3.1 Pro + saída anterior + `@Guia de estilo` | notas em português |
| 4 | Output | Gerar Pagina De Release Notes | auto-layout | página responsiva |
| 5 | Output | Salvar Documento De Release Notes | Google Docs | documento revisável |

## Dados e governança

Permitidos: mensagens de commit fictícias ou públicas, nomes genéricos de módulos e
descrições técnicas sem identificação de cliente.

Proibidos: nomes de clientes, números de pedidos, preços, conteúdo do ERP, dados
pessoais, credenciais, chaves, segredos e código proprietário sensível.

## Entradas de referência executadas

1. Funcionalidade de filtro, correção de frete, bloqueio de segurança, dependência e merge.
2. Correção ambígua, refatoração interna e exportação em PDF.
3. Validação de token, histórico de pedidos fictícios, aviso de manutenção e documentação interna.

O console do Opal foi usado para verificar a execução passo a passo das três entradas.
O fluxo gerou página web e Google Docs. Casos internos ou sem contexto suficiente devem
ser ignorados ou marcados para revisão humana.

## Evidências

- Mini-app publicado no link acima.
- Fluxo com User Input, dois Generate, asset de estilo e duas saídas.
- Três execuções de referência no console.
- Conjunto dourado ampliado: `eval/golden.jsonl`.
- Prompt promovido: `prompts/release-notes.v1.md`.

