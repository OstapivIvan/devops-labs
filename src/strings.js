// Tiny string helpers. The project is intentionally small:
// the point is the CI/CD pipeline around it, not the code.

export function capitalize(text) {
  if (typeof text !== 'string' || text.length === 0) return '';
  return text[0].toUpperCase() + text.slice(1);
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
