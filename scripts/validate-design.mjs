#!/usr/bin/env node
// Validate a brand DESIGN.md's component-token front matter against the
// canonical taxonomies in CONTEXT.md. Scope: YAML front matter only (per
// Issue #1 Q3). Prose drift is caught during per-brand Phase 3 review.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const CANONICAL_ROLES = {
  button: ['button-primary', 'button-secondary', 'button-outline', 'button-ghost', 'button-inverse'],
  card: ['card', 'card-elevated', 'card-feature', 'card-inverse'],
  badge: ['badge', 'badge-primary', 'badge-success', 'badge-warning', 'badge-error', 'badge-info'],
  input: ['input', 'input-focus', 'input-disabled', 'input-error', 'input-inverse'],
  nav: ['nav', 'nav-link', 'nav-link-active', 'nav-inverse'],
};
const ALL_REQUIRED = Object.values(CANONICAL_ROLES).flat();

const COLOR_ALIASES = ['cta', 'ember', 'forest', 'terracotta', 'vital', 'saddle', 'sky', 'coral', 'spark', 'beige', 'accent'];
const BAD_PREFIXES = { 'navbar': 'nav', 'nav-bar': 'nav', 'navigation': 'nav', 'tag': 'badge' };
const VALID_PREFIXES = ['button', 'card', 'badge', 'input', 'nav'];

function extractComponentTokens(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return { error: 'no YAML front matter found' };

  const lines = fmMatch[1].split(/\r?\n/);
  const tokens = [];
  let inComponents = false;

  for (const line of lines) {
    if (/^[a-zA-Z]/.test(line)) {
      inComponents = /^components:\s*$/.test(line);
      continue;
    }
    if (!inComponents) continue;
    const m = line.match(/^  ([a-z][a-z0-9-]*):\s*$/);
    if (m) tokens.push(m[1]);
  }
  return { tokens };
}

function validate(tokens) {
  const violations = [];
  const seen = new Set();
  const push = (v) => {
    const key = `${v.type}:${v.token}`;
    if (seen.has(key)) return;
    seen.add(key);
    violations.push(v);
  };

  for (const token of tokens) {
    for (const [bad, suggested] of Object.entries(BAD_PREFIXES)) {
      if (token === bad || token.startsWith(bad + '-')) {
        push({ token, type: 'bad-prefix', message: `non-canonical prefix \`${bad}\` — use \`${suggested}\`` });
      }
    }
    const prefix = token.split('-')[0];
    if (!VALID_PREFIXES.includes(prefix) && !Object.keys(BAD_PREFIXES).some(b => token === b || token.startsWith(b + '-'))) {
      push({ token, type: 'unknown-prefix', message: `unknown component prefix \`${prefix}\` (expected one of ${VALID_PREFIXES.join(', ')}; otherwise document as a prose recipe)` });
      continue;
    }
    const parts = token.split('-');
    for (let i = 1; i < parts.length; i++) {
      if (COLOR_ALIASES.includes(parts[i])) {
        push({ token, type: 'color-named', message: `color-named segment \`${parts[i]}\` — tokens must be role-based, not color-named` });
        break;
      }
    }
    if (token.endsWith('-dark')) {
      push({ token, type: 'surface-context-suffix', message: `\`-dark\` surface-context suffix — use \`-inverse\`` });
    }
  }

  const tokenSet = new Set(tokens);
  for (const required of ALL_REQUIRED) {
    if (!tokenSet.has(required)) {
      push({ token: required, type: 'missing-canonical-role', message: `missing required canonical role` });
    }
  }
  return violations;
}

function validateFile(filePath) {
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) return { filePath: abs, error: `file not found` };
  const { error, tokens } = extractComponentTokens(abs);
  if (error) return { filePath: abs, error };
  return { filePath: abs, tokens, violations: validate(tokens) };
}

function printReport(result) {
  const rel = path.relative(REPO_ROOT, result.filePath);
  if (result.error) {
    process.stderr.write(`${rel}: ERROR — ${result.error}\n`);
    return 2;
  }
  if (result.violations.length === 0) {
    process.stdout.write(`${rel}: PASS (${result.tokens.length} component tokens)\n`);
    return 0;
  }
  process.stderr.write(`${rel}: FAIL — ${result.violations.length} violation(s) across ${result.tokens.length} tokens\n`);
  const byType = new Map();
  for (const v of result.violations) {
    if (!byType.has(v.type)) byType.set(v.type, []);
    byType.get(v.type).push(v);
  }
  for (const [type, vs] of byType) {
    process.stderr.write(`  ${type}:\n`);
    for (const v of vs) process.stderr.write(`    - ${v.token}: ${v.message}\n`);
  }
  return 1;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    process.stderr.write('Usage: node scripts/validate-design.mjs <path-to-DESIGN.md> [...more paths]\n');
    process.stderr.write('       node scripts/validate-design.mjs --all   # validate every brand in skills/index.json\n');
    process.exit(2);
  }

  let paths;
  if (args[0] === '--all') {
    const index = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'skills', 'index.json'), 'utf8'));
    paths = Object.values(index).map(b => path.join(REPO_ROOT, b.designPath));
  } else {
    paths = args;
  }

  let worstCode = 0;
  for (const p of paths) {
    const r = validateFile(p);
    const code = printReport(r);
    if (code > worstCode) worstCode = code;
  }
  process.exit(worstCode);
}

main();
