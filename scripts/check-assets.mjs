import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

let total = 0;
const failures = [];
async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await check(file); continue; }
    const { size } = await stat(file);
    total += size;
    if (/\.(svg|webp|png|jpe?g|avif)$/i.test(file) && size > 512 * 1024) {
      failures.push(`${file} exceeds the 512 KiB image budget; compress it before publishing.`);
    }
  }
}
await check('public');
if (total > 10 * 1024 * 1024) failures.push('Public assets exceed the 10 MiB budget.');
console.log(`Public assets: ${(total / 1024 / 1024).toFixed(2)} MiB`);
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
