# Carparts Release Notes

Pacote de evidências dos entregáveis E3, E4, E5 e E6 da Aula 07.

## Estrutura

- `docs/opal/release-notes.md`: ficha técnica e governança do mini-app.
- `prompts/release-notes.v1.md`: prompt versionado e JSON Schema.
- `src/release-notes.mjs`: integração adaptada para a Gemini API.
- `docs/ai-studio-evidence.md`: configuração realizada e limitação encontrada no AI Studio.
- `eval/golden.jsonl`: conjunto dourado com dez casos fictícios.
- `scripts/eval-prompt.mjs`: quality gate determinístico.
- `logs/`: uma execução aprovada e outra reprovada de propósito.
- `docs/metrics-cost-evolution.md`: métricas, custo e critérios de evolução.
- `.github/workflows/ci.yml`: pipeline de CI.

Nenhuma chave de API é armazenada no projeto. Para uma chamada real, defina
`GEMINI_API_KEY` no ambiente seguro do servidor ou no gerenciador de Secrets do CI.
