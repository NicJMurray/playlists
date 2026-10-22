import { mkdir, copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
if (!html.includes('class="playlist"')) throw new Error('Playlist cards are missing');
await mkdir(path.join(root, 'dist'), { recursive: true });
await copyFile(path.join(root, 'index.html'), path.join(root, 'dist', 'index.html'));
console.log('Built the static playlist gallery.');
