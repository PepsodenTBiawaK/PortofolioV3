import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  profile,
  socialLinks,
  projects,
  certificates,
} from "../src/content/portfolio.ts";

const failures = [];
const warnings = [];
const publicRoot = path.resolve("public");
const availableFiles = new Set();
const projectImages = new Set();

async function listFiles(directory, prefix = "") {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}/${entry.name}`;
    if (entry.isDirectory())
      await listFiles(path.join(directory, entry.name), relative);
    else availableFiles.add(relative);
  }
}
await listFiles(publicRoot);

function required(value, label) {
  if (typeof value !== "string" || !value.trim())
    failures.push(`${label}: wajib diisi.`);
}

function localFile(value, label, projectImage = false) {
  if (!availableFiles.has(value)) {
    failures.push(
      `${label}: file "${value}" tidak ditemukan. Gunakan path /assets/... dengan huruf besar/kecil yang persis.`,
    );
  } else if (projectImage) {
    projectImages.add(value);
  }
}

function link(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    required(value, label);
    return;
  }
  if (value.startsWith("/assets/")) {
    localFile(value, label);
    return;
  }
  try {
    const parsed = new URL(value);
    if (!["https:", "http:"].includes(parsed.protocol))
      throw new Error("Unsupported protocol");
  } catch {
    failures.push(
      `${label}: gunakan alamat lengkap https://... atau file /assets/...`,
    );
  }
}

required(profile.firstName, "Profil: nama depan");
localFile(profile.image, "Foto profil");
link(socialLinks.linkedin, "Kontak utama LinkedIn");
for (const name of ["github", "instagram"]) {
  if (socialLinks[name]?.trim()) link(socialLinks[name], `Tautan ${name}`);
}

const ids = new Set();
for (const [index, project] of projects.entries()) {
  const label = `Proyek ${index + 1} (${project.name || "tanpa nama"})`;
  required(project.id, `${label}: id`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id))
    failures.push(
      `${label}: id hanya boleh memakai huruf kecil, angka, dan tanda hubung.`,
    );
  if (ids.has(project.id))
    failures.push(`${label}: id "${project.id}" sudah dipakai proyek lain.`);
  ids.add(project.id);
  if (project.visible === false) continue;
  required(project.name, `${label}: name`);
  required(project.summary, `${label}: summary`);
  if (!["design", "development"].includes(project.category))
    failures.push(`${label}: category harus "design" atau "development".`);
  localFile(project.cover, `${label}: cover`, true);
  if (project.preview) localFile(project.preview, `${label}: preview`, true);
  for (const image of project.images ?? [])
    localFile(image, `${label}: galeri`, true);
  for (const item of project.links ?? []) {
    required(item.label, `${label}: label tautan`);
    link(item.href, `${label}: tautan`);
  }
}

for (const [index, certificate] of certificates.entries()) {
  if (certificate.visible === false) continue;
  const label = `Sertifikat ${index + 1}`;
  required(certificate.title, `${label}: title`);
  required(certificate.issuer, `${label}: issuer`);
  if (certificate.image) localFile(certificate.image, `${label}: image`);
  link(
    certificate.href?.trim() || certificate.image,
    `${label}: href atau image`,
  );
}

for (const image of projectImages) {
  try {
    const metadata = await sharp(
      path.join(publicRoot, image.slice(1)),
    ).metadata();
    if (!metadata.width || !metadata.height) throw new Error("No dimensions");
    if (Math.abs(metadata.width / metadata.height - 16 / 9) > 0.01) {
      warnings.push(
        `${image}: ${metadata.width} x ${metadata.height} bukan 16:9. Gambar tetap utuh, dengan ruang kosong dalam frame bila diperlukan.`,
      );
    }
  } catch {
    failures.push(`${image}: file gambar tidak dapat dibaca.`);
  }
}

warnings.forEach((message) => console.warn(`Catatan: ${message}`));
if (failures.length) {
  console.error(
    `Periksa src/content/portfolio.ts:\n${failures.map((message) => `- ${message}`).join("\n")}`,
  );
  process.exitCode = 1;
} else {
  console.log(
    `Konten valid: ${projects.filter((item) => item.visible !== false).length} proyek dan ${certificates.filter((item) => item.visible !== false).length} sertifikat tampil.`,
  );
}
