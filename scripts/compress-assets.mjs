/**
 * Compress all large public assets to web-optimised formats.
 * - service images → WebP, quality 82
 * - faq-visual.png → WebP, quality 85
 * - hero images → WebP, quality 85
 * - branch JPGs → WebP, quality 85
 * Originals are kept; only new .webp files are written.
 */
import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, basename, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, "..", "public");

const tasks = [
  // service cards
  { src: join(pub, "services", "liquid-recovery.png"),    q: 82 },
  { src: join(pub, "services", "custom-works.png"),        q: 82 },
  { src: join(pub, "services", "power-systems.png"),       q: 82 },
  { src: join(pub, "services", "display-calibration.png"), q: 82 },
  // hero
  { src: join(pub, "hero-3d.png"),           q: 85 },
  { src: join(pub, "hero-monochrome.png"),   q: 85 },
  // faq
  { src: join(pub, "faq-visual.png"),        q: 85 },
  // branch photos
  { src: join(pub, "branch-shah-alam.jpg"),        q: 84 },
  { src: join(pub, "branch-seri-kembangan.jpg"),   q: 84 },
];

for (const { src, q } of tasks) {
  const dir  = dirname(src);
  const name = basename(src, extname(src));
  const dest = join(dir, `${name}.webp`);
  const before = statSync(src).size;
  await sharp(src).webp({ quality: q }).toFile(dest);
  const after = statSync(dest).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`✓ ${name}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (${saved}% saved)`);
}

console.log("\n✅ Compression complete. Update component src paths to .webp.");
