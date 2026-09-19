export const ALLOWED_TYPES = new Set([
  "Nova funcionalidade",
  "Correção",
  "Segurança",
  "Interna",
  "Revisar",
]);

export function validateReleaseNotes(value) {
  const errors = [];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return ["a saída deve ser um objeto JSON"];
  }
  if (typeof value.versao !== "string") errors.push("versao ausente ou inválida");
  if (value.revisao_humana_obrigatoria !== true) {
    errors.push("revisao_humana_obrigatoria deve ser true");
  }
  if (!Array.isArray(value.itens)) {
    errors.push("itens deve ser uma lista");
    return errors;
  }
  value.itens.forEach((item, index) => {
    if (!ALLOWED_TYPES.has(item?.tipo)) errors.push(`item ${index + 1}: tipo inválido`);
    if (typeof item?.resumo !== "string" || item.resumo.length === 0 || item.resumo.length > 180) {
      errors.push(`item ${index + 1}: resumo inválido`);
    }
    if (typeof item?.modulo !== "string") errors.push(`item ${index + 1}: módulo inválido`);
  });
  return errors;
}

