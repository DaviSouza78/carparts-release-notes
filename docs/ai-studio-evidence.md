# E4 · Evidência do Google AI Studio

Data: 18/09/2026

- Playground aberto com Gemini 3 Flash Preview.
- System instruction salva localmente como `Carparts Release Notes v1`.
- Structured outputs ativado.
- JSON Schema cadastrado com `versao`, `itens`, `tipo`, `resumo`, `modulo` e
  `revisao_humana_obrigatoria`.
- Entrada fictícia enviada com funcionalidade, correção, segurança, dependência interna
  e caso sem contexto.
- A execução online retornou `permission denied` porque nenhuma API key estava selecionada.
- Nenhuma chave foi criada ou exposta.
- O painel Get code exibiu exemplos Python e TypeScript usando `GEMINI_API_KEY` do ambiente.
- A versão adaptada e validada localmente está em `src/release-notes.mjs`.

Resultado: configuração e ponte para código concluídas; a comparação de saída online
depende de uma chave autorizada e deve ser refeita sem registrar a credencial no projeto.

