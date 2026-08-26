/* Bundles src/*.css into a single framework-free file for CDN / no-Tailwind use.
   Resolves the local @import graph, hoists the Google Fonts @import to the top
   (CSS requires @import first), and writes an unminified + a conservatively
   minified build. Run: `node build.mjs` (no dependencies). */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(root, 'src');
const FONT_IMPORT =
    "@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&family=Barlow+Condensed:wght@400;600;700&display=swap');";

function inline(file, seen = new Set()) {
    const path = resolve(srcDir, file);
    if (seen.has(path)) return '';
    seen.add(path);
    return readFileSync(path, 'utf8').replace(
        /@import\s+['"]\.\/([^'"]+)['"];/g,
        (_, f) => inline(f, seen)
    );
}

let bundle = inline('index.css')
    .split('\n')
    .filter((line) => !line.includes('fonts.googleapis.com'))
    .join('\n')
    .trim();

bundle = `${FONT_IMPORT}\n${bundle}`;

const header =
    '/* bluclutch-css — generated bundle. Do not edit by hand; edit src/ and run `node build.mjs`. */\n';

const min = bundle
    .replace(/\/\*[\s\S]*?\*\//g, '') // strip comments
    .replace(/\s+/g, ' ') // collapse whitespace (keeps single spaces like "in srgb")
    .replace(/\s*([{}:;,])\s*/g, '$1') // trim around structural punctuation
    .replace(/;}/g, '}') // drop trailing semicolons
    .trim();

mkdirSync(resolve(root, 'dist'), { recursive: true });
writeFileSync(resolve(root, 'dist/bluclutch.css'), header + bundle + '\n');
writeFileSync(resolve(root, 'dist/bluclutch.min.css'), min + '\n');

const kb = (s) => (s.length / 1024).toFixed(1);
console.log(`dist/bluclutch.css      ${kb(header + bundle)} kB`);
console.log(`dist/bluclutch.min.css  ${kb(min)} kB`);
