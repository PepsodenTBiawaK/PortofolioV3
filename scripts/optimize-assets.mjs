import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Usage: node scripts/optimize-assets.mjs path/to/original/assets
// Originals are read only. Preserve the projects/, certificates/ and tools/ folders.
const root = path.resolve("public/assets");
const source = path.resolve(process.argv[2] ?? "public/assets");
const inputs = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (
      /\.svg$/i.test(file) &&
      /[\\/](projects|certificates|tools)[\\/]/.test(file) &&
      entry.name !== "Tools1.svg"
    )
      inputs.push(file);
  }
}
await walk(source);
let before = 0;
let after = 0;
for (const file of inputs) {
  const width = /[\\/]tools[\\/]/.test(file)
    ? 256
    : /[\\/]Project\d+\.svg$/.test(file)
      ? 800
      : 1600;
  const output = path
    .join(root, path.relative(source, file))
    .replace(/\.svg$/i, ".webp");
  await mkdir(path.dirname(output), { recursive: true });
  const info = await sharp(file)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);
  before += (await stat(file)).size;
  after += info.size;
  console.log(
    `${path.relative(root, output)}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KiB`,
  );
}
const profile = path.join(source, "images/profil.jpg");
if (await stat(profile).catch(() => null)) {
  await mkdir(path.join(root, "images"), { recursive: true });
  await sharp(profile)
    .rotate()
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(root, "images/profil.webp"));
}
console.log(
  JSON.stringify({
    files: inputs.length,
    beforeBytes: before,
    afterBytes: after,
    reduction: before
      ? `${(100 * (1 - after / before)).toFixed(1)}%`
      : "No source artwork found",
  }),
);
