import test from "node:test";
import assert from "node:assert/strict";
import { validateReleaseNotes } from "../src/validation.mjs";

test("aceita uma saída válida", () => {
  const value = {
    versao: "1.0.0",
    itens: [{ tipo: "Correção", resumo: "Corrige a consulta do histórico.", modulo: "Pedidos" }],
    revisao_humana_obrigatoria: true,
  };
  assert.deepEqual(validateReleaseNotes(value), []);
});

test("rejeita tipo desconhecido e revisão ausente", () => {
  const value = {
    versao: "1.0.0",
    itens: [{ tipo: "Outro", resumo: "Texto", modulo: "Portal" }],
    revisao_humana_obrigatoria: false,
  };
  assert.equal(validateReleaseNotes(value).length, 2);
});

