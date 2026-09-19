import { readFile } from "node:fs/promises";
import { GoogleGenAI } from "@google/genai";
import { validateReleaseNotes } from "./validation.mjs";

const inputPath = process.argv[2];
if (!inputPath) {
  throw new Error("Uso: node src/release-notes.mjs caminho/commits.txt");
}

const prompt = await readFile(new URL("../prompts/release-notes.v1.md", import.meta.url), "utf8");
const commits = await readFile(inputPath, "utf8");
const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await client.models.generateContent({
  model: process.env.GEMINI_MODEL ?? "gemini-3-flash-preview",
  contents: commits,
  config: {
    systemInstruction: prompt,
    responseMimeType: "application/json",
  },
});

const result = JSON.parse(response.text);
const errors = validateReleaseNotes(result);
if (errors.length) throw new Error(`Saída inválida: ${errors.join("; ")}`);
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);

