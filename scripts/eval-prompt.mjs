import { readFile } from "node:fs/promises";

const [goldenText, outputText] = await Promise.all([
  readFile(new URL("../eval/golden.jsonl", import.meta.url), "utf8"),
  readFile(process.argv[2], "utf8"),
]);

const parseJsonl = (text) => text.trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
const golden = parseJsonl(goldenText);
const outputs = new Map(parseJsonl(outputText).map((row) => [row.id, row.output]));
let passed = 0;

for (const test of golden) {
  const output = outputs.get(test.id) ?? "";
  const missing = test.must_include.filter((term) => !output.includes(term));
  const forbidden = test.must_not_include.filter((term) => output.includes(term));
  const ok = missing.length === 0 && forbidden.length === 0;
  if (ok) passed += 1;
  console.log(`${ok ? "PASS" : "FAIL"} ${test.id}`);
  if (missing.length) console.log(`  ausente: ${missing.join(", ")}`);
  if (forbidden.length) console.log(`  proibido: ${forbidden.join(", ")}`);
}

const rate = (passed / golden.length) * 100;
console.log(`Resultado: ${passed}/${golden.length} (${rate.toFixed(0)}%)`);
console.log("Limiar: 90%");
if (rate < 90) {
  console.error("QUALITY GATE: REPROVADO");
  process.exitCode = 1;
} else {
  console.log("QUALITY GATE: APROVADO");
}

