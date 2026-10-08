import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve(import.meta.dirname, '../dist');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, 'Exactly one primary heading');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const value = match[1];
  if (/^(https?:|data:|mailto:|tel:|#)/.test(value)) continue;
  assert.ok(fs.existsSync(path.join(root, value.split(/[?#]/)[0])), `Local asset exists: ${value}`);
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`), `Anchor target exists: ${match[1]}`);
JSON.parse(html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)<\/script>/)[1]);
assert.ok(html.includes('https://wa.me/917358331164'), 'WhatsApp contact is correct');
assert.ok(html.includes('rel="canonical"'), 'Canonical link exists');
assert.ok(fs.existsSync(path.join(root, 'sitemap.xml')), 'Sitemap exists');
assert.ok(fs.existsSync(path.join(root, 'robots.txt')), 'Robots file exists');
console.log('Static assets, navigation, business schema and SEO checks passed.');
